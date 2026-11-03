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

/**
 * Fold durable Session events into the numbers the dashboard shows.
 *
 * `inheritedEventCount` is the fork cut: a child session carries its parent's prefix, and none
 * of that prefix's turns or tokens belong to the child's own task.
 *
 * @param {{ header?: { createdAt?: number }, events?: readonly unknown[], inheritedEventCount?: number, now?: number }} input
 * @returns {{ createdAt: number, firstAt: number, lastAt: number, spanMs: number, workMs: number,
 *   turns: number, steps: number, inheritedEvents: number,
 *   tokens: { input: number, output: number, cacheRead: number, cacheWrite: number, total: number } }}
 */
export function foldSessionStats(input) {
  const header = (input && input.header) || {};
  const events = Array.isArray(input && input.events) ? input.events : [];
  const cut = typeof (input && input.inheritedEventCount) === 'number' ? input.inheritedEventCount : 0;
  const now = typeof (input && input.now) === 'number' ? input.now : Date.now();

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
    } else if (event.type === 'turn/end') {
      if (openTurnStart > 0 && time >= openTurnStart) workMs += time - openTurnStart;
      openTurnStart = 0;
    } else if (event.type === 'step/start') {
      steps += 1;
    } else if (event.type === 'assistant/message') {
      const usage = data.usage;
      if (usage && typeof usage === 'object') {
        if (isCount(usage.inputTokens)) tokens.input += usage.inputTokens;
        if (isCount(usage.outputTokens)) tokens.output += usage.outputTokens;
        if (isCount(usage.cacheReadTokens)) tokens.cacheRead += usage.cacheReadTokens;
        if (isCount(usage.cacheWriteTokens)) tokens.cacheWrite += usage.cacheWriteTokens;
      }
    }
  }

  // An open turn is still burning wall-clock time; count it up to the last known moment.
  if (openTurnStart > 0) {
    const end = Math.max(lastAt, now);
    if (end > openTurnStart) workMs += end - openTurnStart;
  }

  const spanMs = createdAt > 0 && lastAt >= createdAt ? lastAt - createdAt : 0;

  return {
    createdAt,
    firstAt,
    lastAt,
    spanMs,
    workMs,
    turns,
    steps,
    inheritedEvents: cut,
    tokens: {
      ...tokens,
      total: tokens.input + tokens.output + tokens.cacheRead + tokens.cacheWrite,
    },
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

  function cached(id) {
    const entry = cache.get(id);
    if (!entry) return undefined;
    if (Date.now() - entry.at > CACHE_TTL_MS) {
      cache.delete(id);
      return undefined;
    }
    return entry.stats;
  }

  function remember(id, stats) {
    cache.delete(id);
    cache.set(id, { at: Date.now(), stats });
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

  async function compute(id, signal) {
    const live = await readLive(id);
    const source = live || await readCold(id).catch(() => undefined);
    if (!source) return { id, reason: 'unreadable' };
    if (signal && signal.aborted) return { id, reason: 'aborted' };
    const stats = foldSessionStats({
      header: source.header,
      events: source.events,
      inheritedEventCount: source.inheritedEventCount,
      now: Date.now(),
    });
    const updatedAt = stats.lastAt || stats.createdAt;
    const record = { id, updatedAt, live: source.live, ...stats };
    remember(id, record);
    return { id, stats: record };
  }

  /**
   * Resolve stats for a batch of session ids.
   * @param {readonly string[]} ids - session ids to resolve.
   * @param {{ fresh?: boolean, signal?: AbortSignal }} options
   */
  async function resolve(ids, options = {}) {
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
      const hit = options.fresh ? undefined : cached(id);
      if (hit) {
        sessions.push(hit);
        return;
      }
      try {
        const result = await withTimeout(compute(id, options.signal), SESSION_TIMEOUT_MS);
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
          return resolver.resolve(ids, { fresh, signal: controller.signal });
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
