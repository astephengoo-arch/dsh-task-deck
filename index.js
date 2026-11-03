/**
 * Host half of Task Deck.
 *
 * The sidebar, dashboard and thread panel are Client UI; this half owns the one thing the
 * browser cannot compute for itself: per-session work time. A Session's `createdAt` lives in
 * its durable header and turn boundaries live in its event log, and neither reaches the client
 * list projection, so the fold below runs here and is served over a same-origin GET route.
 */

/** Path served to the Task Deck client. */
export const STATS_PATH = '/task-deck/stats';

const MAX_IDS = 50;
const MAX_CACHED = 500;
const CACHE_TTL_MS = 10 * 60 * 1000;
const SESSION_TIMEOUT_MS = 15_000;
const CONCURRENCY = 2;

const EMPTY_BUCKETS = () => ({
  input: 0,
  output: 0,
  cacheRead: 0,
  cacheWrite: 0,
});

function isLoopback(address) {
  if (!address) return false;
  const value = String(address);
  return value === '127.0.0.1'
    || value === '::1'
    || value === '::ffff:127.0.0.1'
    || value.startsWith('127.');
}

function isCount(value) {
  return typeof value === 'number' && Number.isFinite(value) && value > 0;
}

const DAY_MS = 86_400_000;
const MAX_DAYS = 180;
const MAX_TURNS = 40;

/** Local calendar day key (`YYYY-MM-DD`) for an instant, shifted by the caller's UTC offset. */
function dayKey(time, tzOffset) {
  const shifted = new Date(time - tzOffset * 60_000);
  return shifted.toISOString().slice(0, 10);
}

/** Index into the 7×24 heat grid, Monday first. */
function hourIndex(time, tzOffset) {
  const shifted = new Date(time - tzOffset * 60_000);
  const weekday = (shifted.getUTCDay() + 6) % 7;
  return weekday * 24 + shifted.getUTCHours();
}

function dayBucket(map, time, tzOffset) {
  const key = dayKey(time, tzOffset);
  let bucket = map.get(key);
  if (!bucket) {
    bucket = { d: key, ms: 0, turns: 0, tokens: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 } };
    map.set(key, bucket);
  }
  return bucket;
}

/**
 * Fold durable Session events into the numbers the dashboard shows.
 *
 * `inheritedEventCount` is the fork cut: a child session carries its parent's prefix, and none
 * of that prefix's turns or tokens belong to the child's own task.
 *
 * @param {{ header?: { createdAt?: number }, events?: readonly unknown[], inheritedEventCount?: number,
 *   now?: number, tzOffset?: number, detail?: boolean }} input
 * @returns {{ createdAt: number, firstAt: number, lastAt: number, spanMs: number, workMs: number,
 *   turns: number, steps: number, inheritedEvents: number, tzOffset: number,
 *   tokens: { input: number, output: number, cacheRead: number, cacheWrite: number, total: number },
 *   daily: Array<{ d: string, ms: number, turns: number, tokens: object }>,
 *   hours: { tokens: number[], turns: number[] },
 *   perTurn?: Array<{ n: number, start: number, ms: number, tokens: number, open?: true }> }}
 */
export function foldSessionStats(input) {
  const header = (input && input.header) || {};
  const events = Array.isArray(input && input.events) ? input.events : [];
  const cut = typeof (input && input.inheritedEventCount) === 'number' ? input.inheritedEventCount : 0;
  const now = typeof (input && input.now) === 'number' ? input.now : Date.now();
  const tzOffset = typeof (input && input.tzOffset) === 'number' && Number.isFinite(input.tzOffset)
    ? input.tzOffset
    : 0;
  const detail = !!(input && input.detail);

  const createdAt = typeof header.createdAt === 'number' ? header.createdAt : 0;
  const tokens = EMPTY_BUCKETS();
  const own = [];

  for (const event of events) {
    if (!event || typeof event !== 'object') continue;
    if (typeof event.seq === 'number' && event.seq < cut) continue;
    own.push(event);
  }

  let firstAt = 0;
  let lastAt = 0;
  let turns = 0;
  let steps = 0;
  let openTurnStart = 0;
  let workMs = 0;

  const days = new Map();
  const hourTokens = new Array(168).fill(0);
  const hourTurns = new Array(168).fill(0);
  const perTurn = [];
  let currentTurn = null;

  for (const event of own) {
    const time = typeof event.time === 'number' ? event.time : 0;
    if (time > 0) {
      if (firstAt === 0 || time < firstAt) firstAt = time;
      if (time > lastAt) lastAt = time;
    }
    const data = event.data || {};
    if (event.type === 'turn/start') {
      turns += 1;
      openTurnStart = time;
      if (time > 0) {
        dayBucket(days, time, tzOffset).turns += 1;
        hourTurns[hourIndex(time, tzOffset)] += 1;
      }
      if (detail) currentTurn = { n: turns, start: time, ms: 0, tokens: 0 };
    } else if (event.type === 'turn/end') {
      if (openTurnStart > 0 && time >= openTurnStart) {
        const spent = time - openTurnStart;
        workMs += spent;
        dayBucket(days, openTurnStart, tzOffset).ms += spent;
      }
      openTurnStart = 0;
      if (detail && currentTurn) {
        currentTurn.ms = time > currentTurn.start ? time - currentTurn.start : 0;
        perTurn.push(currentTurn);
        currentTurn = null;
      }
    } else if (event.type === 'step/start') {
      steps += 1;
    } else if (event.type === 'assistant/message') {
      const usage = data.usage;
      if (usage && typeof usage === 'object') {
        const delta = {
          input: isCount(usage.inputTokens) ? usage.inputTokens : 0,
          output: isCount(usage.outputTokens) ? usage.outputTokens : 0,
          cacheRead: isCount(usage.cacheReadTokens) ? usage.cacheReadTokens : 0,
          cacheWrite: isCount(usage.cacheWriteTokens) ? usage.cacheWriteTokens : 0,
        };
        tokens.input += delta.input;
        tokens.output += delta.output;
        tokens.cacheRead += delta.cacheRead;
        tokens.cacheWrite += delta.cacheWrite;
        if (time > 0) {
          const bucket = dayBucket(days, time, tzOffset);
          bucket.tokens.input += delta.input;
          bucket.tokens.output += delta.output;
          bucket.tokens.cacheRead += delta.cacheRead;
          bucket.tokens.cacheWrite += delta.cacheWrite;
          hourTokens[hourIndex(time, tzOffset)] += delta.input + delta.output + delta.cacheRead + delta.cacheWrite;
        }
        if (detail && currentTurn) {
          currentTurn.tokens += delta.input + delta.output + delta.cacheRead + delta.cacheWrite;
        }
      }
    }
  }

  // An open turn is still burning wall-clock time; count it up to the last known moment.
  if (openTurnStart > 0) {
    const end = Math.max(lastAt, now);
    if (end > openTurnStart) {
      const spent = end - openTurnStart;
      workMs += spent;
      dayBucket(days, openTurnStart, tzOffset).ms += spent;
    }
    if (detail && currentTurn) {
      currentTurn.ms = Math.max(0, now - currentTurn.start);
      currentTurn.open = true;
      perTurn.push(currentTurn);
      currentTurn = null;
    }
  }

  const spanMs = createdAt > 0 && lastAt >= createdAt ? lastAt - createdAt : 0;

  const cutoff = lastAt > 0 ? lastAt - MAX_DAYS * DAY_MS : 0;
  const daily = Array.from(days.values())
    .filter((bucket) => bucket.d > dayKey(cutoff, tzOffset))
    .sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : 0));

  return {
    createdAt,
    firstAt,
    lastAt,
    spanMs,
    workMs,
    turns,
    steps,
    inheritedEvents: cut,
    tzOffset,
    tokens: {
      ...tokens,
      total: tokens.input + tokens.output + tokens.cacheRead + tokens.cacheWrite,
    },
    daily,
    hours: { tokens: hourTokens, turns: hourTurns },
    ...(detail ? { perTurn: perTurn.slice(-MAX_TURNS) } : {}),
  };
}

function withTimeout(promise, ms) {
  let timer = 0;
  const guard = new Promise((_, reject) => {
    timer = setTimeout(() => reject(new Error('timeout')), ms);
    if (timer && typeof timer.unref === 'function') timer.unref();
  });
  return Promise.race([promise, guard]).finally(() => clearTimeout(timer));
}

async function mapWithLimit(items, limit, worker, signal) {
  const results = new Array(items.length);
  let cursor = 0;
  async function run() {
    for (;;) {
      if (signal && signal.aborted) return;
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  }
  const workers = [];
  for (let i = 0; i < Math.min(limit, items.length); i += 1) workers.push(run());
  await Promise.all(workers);
  return results;
}

/**
 * Read one optional service without depending on a particular Cordis face:
 * `ctx.get` is the portable accessor, direct property access the fallback.
 * @param {object} ctx - any context.
 * @param {string} name - service key.
 */
export function peekService(ctx, name) {
  if (!ctx) return undefined;
  try {
    if (typeof ctx.get === 'function') {
      const value = ctx.get(name);
      if (value !== undefined) return value;
    }
  } catch (error) {
    /* an unavailable service must read as absent, never as a crash */
  }
  try {
    return ctx[name];
  } catch (error) {
    return undefined;
  }
}

/**
 * Create the stats resolver bound to one host context.
 * @param {import('cordis').Context} ctx - host context with `sessions` and `sessionQuery`.
 */
export function createStatsResolver(ctx) {
  const cache = new Map();

  function cached(id, tzOffset) {
    const entry = cache.get(id);
    if (!entry) return undefined;
    // Time buckets are offset-dependent, so a changed time zone invalidates the entry.
    if (entry.tzOffset !== tzOffset) return undefined;
    if (Date.now() - entry.at > CACHE_TTL_MS) {
      cache.delete(id);
      return undefined;
    }
    return entry.stats;
  }

  function remember(id, stats, tzOffset) {
    cache.delete(id);
    cache.set(id, { at: Date.now(), stats, tzOffset });
    while (cache.size > MAX_CACHED) {
      const oldest = cache.keys().next();
      if (oldest.done) break;
      cache.delete(oldest.value);
    }
  }

  async function readLive(id) {
    const sessions = peekService(ctx, 'sessions');
    const session = sessions && typeof sessions.get === 'function' ? sessions.get(id) : undefined;
    if (!session) return undefined;
    const events = typeof session.snapshotEvents === 'function' ? session.snapshotEvents() : [];
    return {
      header: session.header || {},
      events,
      inheritedEventCount: session.inheritedEventCount || 0,
      live: true,
    };
  }

  async function readCold(id) {
    const query = peekService(ctx, 'sessionQuery');
    if (!query || typeof query.readSession !== 'function') return undefined;
    const snapshot = await query.readSession(id);
    if (!snapshot) return undefined;
    return {
      header: snapshot.session || {},
      events: Array.isArray(snapshot.events) ? snapshot.events : [],
      inheritedEventCount: snapshot.inheritedEventCount || 0,
      live: false,
    };
  }

  async function compute(id, signal, options) {
    const live = await readLive(id);
    const source = live || await readCold(id).catch(() => undefined);
    if (!source) return { id, reason: 'unreadable' };
    if (signal && signal.aborted) return { id, reason: 'aborted' };
    const stats = foldSessionStats({
      header: source.header,
      events: source.events,
      inheritedEventCount: source.inheritedEventCount,
      now: Date.now(),
      tzOffset: options.tzOffset,
      detail: options.detail,
    });
    const updatedAt = stats.lastAt || stats.createdAt;
    const record = { id, updatedAt, live: source.live, ...stats };
    // A detail read is a superset of the list read, but the list cache should not pin the
    // heavier per-turn array; remember only what every caller needs.
    if (!options.detail) remember(id, record, options.tzOffset);
    return { id, stats: record };
  }

  /**
   * Resolve stats for a batch of session ids.
   * @param {readonly string[]} ids - session ids to resolve.
   * @param {{ fresh?: boolean, signal?: AbortSignal, tzOffset?: number, detail?: boolean }} options
   */
  async function resolve(ids, options = {}) {
    const tzOffset = Number.isFinite(options.tzOffset) ? options.tzOffset : 0;
    const detail = !!options.detail;
    const unique = [];
    const seen = new Set();
    for (const id of ids) {
      if (typeof id !== 'string' || id === '' || seen.has(id)) continue;
      seen.add(id);
      unique.push(id);
    }
    const batch = unique.slice(0, MAX_IDS);
    const sessions = [];
    const skipped = [];

    await mapWithLimit(batch, CONCURRENCY, async (id) => {
      if (options.signal && options.signal.aborted) return;
      // Per-turn data is only asked for one session at a time and is never served from the
      // list cache, so a detail read always recomputes.
      const hit = options.fresh || detail ? undefined : cached(id, tzOffset);
      if (hit) {
        sessions.push(hit);
        return;
      }
      try {
        const result = await withTimeout(compute(id, options.signal, { tzOffset, detail }), SESSION_TIMEOUT_MS);
        if (result.stats) sessions.push(result.stats);
        else skipped.push({ id: result.id, reason: result.reason || 'unreadable' });
      } catch (error) {
        skipped.push({ id, reason: error && error.message === 'timeout' ? 'timeout' : 'unreadable' });
      }
    }, options.signal);

    sessions.sort((a, b) => b.updatedAt - a.updatedAt);
    return {
      ok: true,
      generatedAt: Date.now(),
      tzOffset,
      sessions,
      skipped,
    };
  }

  return { resolve, cache };
}

/**
 * Register the read-only stats route.
 * @param {import('cordis').Context} ctx - host context.
 */
export function apply(ctx) {
  let started = false;
  const start = (host) => {
    if (started) return;
    const webServer = peekService(host, 'webServer');
    if (!webServer || typeof webServer.register !== 'function') return;
    if (typeof host.effect !== 'function') return;
    started = true;
    const resolver = createStatsResolver(host);
    host.effect(() => webServer.register({
      kind: 'exact',
      path: STATS_PATH,
      handler: (req, res) => {
        if (!isLoopback(req.socket && req.socket.remoteAddress)) {
          res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
          res.end('not found');
          return;
        }
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405, { allow: 'GET, HEAD', 'content-type': 'text/plain; charset=utf-8' });
          res.end('method not allowed');
          return;
        }
        let payload;
        try {
          payload = new URL(req.url || STATS_PATH, 'http://127.0.0.1');
        } catch (error) {
          res.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' });
          res.end('bad request');
          return;
        }
        const controller = new AbortController();
        req.on('close', () => controller.abort());
        const fresh = payload.searchParams.get('fresh') === '1';
        const detail = payload.searchParams.get('detail') === '1';
        const tzRaw = Number(payload.searchParams.get('tz'));
        const tzOffset = Number.isFinite(tzRaw) && Math.abs(tzRaw) <= 14 * 60 ? tzRaw : 0;
        const raw = payload.searchParams.get('ids');
        const requested = raw
          ? raw.split(',').map((value) => value.trim()).filter(Boolean).slice(0, MAX_IDS)
          : [];
        const resolve = async () => {
          let ids = requested;
          const query = peekService(host, 'sessionQuery');
          if (!ids.length && query && typeof query.listSessions === 'function') {
            try {
              const records = await query.listSessions(controller.signal);
              ids = (records || []).map((record) => record && record.header && record.header.id).filter(Boolean).slice(0, MAX_IDS);
            } catch (error) {
              ids = [];
            }
          }
          return resolver.resolve(ids, { fresh, detail, tzOffset, signal: controller.signal });
        };
        resolve()
          .then((body) => {
            if (res.writableEnded) return;
            const text = JSON.stringify(body);
            res.writeHead(200, {
              'content-type': 'application/json; charset=utf-8',
              'cache-control': 'no-store',
            });
            res.end(req.method === 'HEAD' ? undefined : text);
          })
          .catch((error) => {
            if (res.writableEnded) return;
            res.writeHead(500, { 'content-type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ ok: false, error: String(error && error.message || error) }));
          });
      },
    }), 'task-deck: stats route');
  };

  if (typeof ctx.inject === 'function') {
    ctx.inject(['webServer'], start);
    return;
  }
  start(ctx);
}
