import test from 'node:test';
import assert from 'node:assert/strict';

import { apply as applyHost, createStatsResolver, DEFAULT_PRICING, foldSessionStats, isOffPeak, normalizePricing, STATS_PATH } from '../index.js';

function turn(n, start, end) {
  return [
    { type: 'turn/start', seq: start, time: start, data: { turn: n } },
    { type: 'step/start', seq: start + 1, time: start + 1, data: { turn: n, step: 1 } },
    { type: 'assistant/message', seq: start + 2, time: start + 2, data: { usage: { inputTokens: 10, outputTokens: 5, cacheReadTokens: 100, cacheWriteTokens: 0 } } },
    { type: 'step/end', seq: start + 3, time: end - 1, data: { turn: n, step: 1 } },
    { type: 'turn/end', seq: end, time: end, data: { turn: n, reason: { kind: 'completed' } } },
  ];
}

test('folds closed turns, steps and token buckets', () => {
  const events = [...turn(1, 1000, 4000), ...turn(2, 5000, 9000)];
  const stats = foldSessionStats({ header: { createdAt: 900 }, events, now: 10000 });

  assert.equal(stats.turns, 2);
  assert.equal(stats.steps, 2);
  assert.equal(stats.workMs, 3000 + 4000);
  assert.equal(stats.spanMs, 9000 - 900);
  assert.deepEqual(stats.tokens, {
    input: 20,
    output: 10,
    cacheRead: 200,
    cacheWrite: 0,
    total: 230,
  });
});

test('counts an open turn up to now', () => {
  const events = [
    { type: 'turn/start', seq: 10, time: 2000, data: { turn: 1 } },
    { type: 'assistant/message', seq: 11, time: 2500, data: { usage: { inputTokens: 3, outputTokens: 1 } } },
  ];
  const stats = foldSessionStats({ header: { createdAt: 1000 }, events, now: 7000 });

  assert.equal(stats.turns, 1);
  assert.equal(stats.workMs, 5000);
  assert.equal(stats.spanMs, 1500);
  assert.equal(stats.tokens.total, 4);
  assert.equal(stats.tokens.cacheRead, 0);
});

test('excludes the inherited fork prefix', () => {
  const inherited = turn(1, 100, 4000);
  const own = turn(2, 900, 12000);
  const stats = foldSessionStats({
    header: { createdAt: 100 },
    events: [...inherited, ...own],
    inheritedEventCount: 900,
    now: 12000,
  });

  assert.equal(stats.turns, 1);
  assert.equal(stats.steps, 1);
  assert.equal(stats.workMs, 12000 - 900);
  assert.equal(stats.inheritedEvents, 900);
  assert.equal(stats.tokens.input, 10);
});

test('degrades to zeros for an empty session', () => {
  const stats = foldSessionStats({ header: { createdAt: 4200 }, events: [], now: 5000 });

  assert.equal(stats.turns, 0);
  assert.equal(stats.workMs, 0);
  assert.equal(stats.spanMs, 0);
  assert.equal(stats.tokens.total, 0);
  assert.equal(stats.createdAt, 4200);
});

test('ignores malformed events and missing usage fields', () => {
  const events = [
    null,
    { type: 'turn/start', seq: 1, time: 1000, data: {} },
    { type: 'assistant/message', seq: 2, time: 1200, data: {} },
    { type: 'turn/end', seq: 3, time: 1500, data: {} },
    { type: 'assistant/message', seq: 4, time: 1600, data: { usage: { inputTokens: 0, outputTokens: -3 } } },
  ];
  const stats = foldSessionStats({ header: { createdAt: 1000 }, events, now: 2000 });

  assert.equal(stats.turns, 1);
  assert.equal(stats.workMs, 500);
  assert.equal(stats.tokens.input, 0);
  assert.equal(stats.tokens.output, 0);
});

test('resolver reads live sessions from memory and cold ones from the query service', async () => {
  const liveEvents = [
    { type: 'turn/start', seq: 1, time: 1000, data: { turn: 1 } },
    { type: 'turn/end', seq: 2, time: 4000, data: { turn: 1 } },
  ];
  const coldEvents = [
    { type: 'turn/start', seq: 1, time: 5000, data: { turn: 1 } },
    { type: 'assistant/message', seq: 2, time: 6000, data: { usage: { inputTokens: 7, outputTokens: 3 } } },
  ];
  let coldReads = 0;
  const ctx = {
    sessions: {
      get: (id) => (id === 'live' ? {
        header: { createdAt: 900 },
        inheritedEventCount: 0,
        snapshotEvents: () => liveEvents,
      } : undefined),
    },
    sessionQuery: {
      readSession: async (id) => {
        coldReads += 1;
        if (id === 'broken') throw new Error('unreadable');
        return { session: { createdAt: 4900 }, inheritedEventCount: 0, events: coldEvents };
      },
    },
  };

  const resolver = createStatsResolver(ctx);
  const first = await resolver.resolve(['live', 'cold', 'broken']);
  assert.equal(first.ok, true);
  assert.equal(first.sessions.length, 2);
  assert.equal(first.sessions.find((row) => row.id === 'live').workMs, 3000);
  assert.equal(first.sessions.find((row) => row.id === 'cold').tokens.total, 10);
  assert.deepEqual(first.skipped, [{ id: 'broken', reason: 'unreadable' }]);

  const second = await resolver.resolve(['live', 'cold']);
  assert.equal(coldReads, 2, 'second read is served from the in-memory cache');

  const fresh = await resolver.resolve(['cold'], { fresh: true });
  assert.equal(coldReads, 3, 'fresh bypasses the cache');
  assert.equal(fresh.sessions.length, 1);
});

function harness() {
  const routes = [];
  const ctx = {
    effect: (fn) => {
      const dispose = fn();
      return typeof dispose === 'function' ? dispose : () => {};
    },
    inject: (deps, cb) => { cb(ctx); },
    get: (name) => {
      if (name === 'webServer') {
        return { register: (route) => { routes.push(route); return () => {}; } };
      }
      if (name === 'sessions') {
        return { get: (id) => (id === 'live' ? { header: { createdAt: 0 }, inheritedEventCount: 0, snapshotEvents: () => [] } : undefined) };
      }
      if (name === 'sessionQuery') {
        return { readSession: async () => ({ session: { createdAt: 0 }, inheritedEventCount: 0, events: [] }) };
      }
      return undefined;
    },
  };
  applyHost(ctx);
  return routes[0];
}

function fakeRequest({ method = 'GET', url = STATS_PATH, address = '127.0.0.1' } = {}) {
  return { method, url, socket: { remoteAddress: address }, on() {} };
}

function fakeResponse() {
  return {
    writableEnded: false,
    code: 0,
    headers: {},
    body: '',
    writeHead(code, headers) { this.code = code; this.headers = headers || {}; },
    end(body) { this.body = body === undefined ? '' : String(body); this.writableEnded = true; },
  };
}

test('registers exactly one route at the documented path', () => {
  const route = harness();
  assert.equal(route.kind, 'exact');
  assert.equal(route.path, STATS_PATH);
});

test('serves JSON for loopback GET and refuses everything else', async () => {
  const route = harness();

  const ok = fakeResponse();
  route.handler(fakeRequest({ url: `${STATS_PATH}?ids=live` }), ok);
  await new Promise((resolve) => setTimeout(resolve, 20));
  assert.equal(ok.code, 200);
  assert.equal(ok.headers['cache-control'], 'no-store');
  const body = JSON.parse(ok.body);
  assert.equal(body.ok, true);
  assert.equal(body.sessions.length, 1);

  const post = fakeResponse();
  route.handler(fakeRequest({ method: 'POST' }), post);
  assert.equal(post.code, 405);

  const remote = fakeResponse();
  route.handler(fakeRequest({ address: '10.0.0.7' }), remote);
  assert.equal(remote.code, 404);
});

// 2026-11-02T16:30:00Z and 2026-11-02T17:30:00Z straddle midnight in UTC+8.
const T1 = Date.UTC(2026, 10, 2, 16, 30);
const T2 = Date.UTC(2026, 10, 2, 17, 30);

test('daily buckets follow the caller time zone', () => {
  const events = [
    { type: 'turn/start', seq: 1, time: T1, data: { turn: 1 } },
    { type: 'assistant/message', seq: 2, time: T1 + 60_000, data: { usage: { inputTokens: 10, outputTokens: 5 } } },
    { type: 'turn/end', seq: 3, time: T1 + 600_000, data: { turn: 1 } },
    { type: 'turn/start', seq: 4, time: T2, data: { turn: 2 } },
    { type: 'turn/end', seq: 5, time: T2 + 120_000, data: { turn: 2 } },
  ];

  const utc = foldSessionStats({ header: { createdAt: T1 }, events, now: T2 + 120_000, tzOffset: 0 });
  assert.deepEqual(utc.daily.map((day) => day.d), ['2026-11-02']);

  const beijing = foldSessionStats({ header: { createdAt: T1 }, events, now: T2 + 120_000, tzOffset: -480 });
  assert.deepEqual(beijing.daily.map((day) => day.d), ['2026-11-03']);
  assert.equal(beijing.daily[0].turns, 2);
  assert.equal(beijing.daily[0].ms, 720_000);
  assert.equal(beijing.daily[0].tokens.input, 10);
});

test('hour grid stays inside 168 cells and counts turns and tokens', () => {
  const events = [
    { type: 'turn/start', seq: 1, time: T1, data: { turn: 1 } },
    { type: 'assistant/message', seq: 2, time: T1 + 1000, data: { usage: { inputTokens: 4, outputTokens: 6 } } },
    { type: 'turn/end', seq: 3, time: T1 + 2000, data: { turn: 1 } },
  ];
  const stats = foldSessionStats({ header: { createdAt: T1 }, events, now: T1 + 2000, tzOffset: -480 });

  assert.equal(stats.hours.tokens.length, 168);
  assert.equal(stats.hours.turns.length, 168);
  // 2026-11-03 is a Tuesday; 00:30 local in UTC+8 lands in cell 1*24 + 0.
  assert.equal(stats.hours.turns[24], 1);
  assert.equal(stats.hours.tokens[24], 10);
  assert.equal(stats.hours.tokens.reduce((sum, value) => sum + value, 0), 10);
});

test('per-turn rows appear only on detail reads and are capped at 40', () => {
  const events = [];
  for (let turn = 1; turn <= 45; turn += 1) {
    const start = T1 + turn * 10_000;
    events.push({ type: 'turn/start', seq: turn * 2, time: start, data: { turn } });
    events.push({ type: 'assistant/message', seq: turn * 2 + 1, time: start + 1000, data: { usage: { inputTokens: 1, outputTokens: 1 } } });
    events.push({ type: 'turn/end', seq: turn * 2 + 2, time: start + 5000, data: { turn } });
  }

  const light = foldSessionStats({ header: { createdAt: T1 }, events, now: T1 + 500_000 });
  assert.equal(light.perTurn, undefined);

  const full = foldSessionStats({ header: { createdAt: T1 }, events, now: T1 + 500_000, detail: true });
  assert.equal(full.perTurn.length, 40);
  assert.equal(full.perTurn[0].n, 6);
  assert.equal(full.perTurn[39].n, 45);
  assert.equal(full.perTurn[0].ms, 5000);
  assert.equal(full.perTurn[0].tokens, 2);
});

test('an open turn is marked open in the detail rows', () => {
  const events = [
    { type: 'turn/start', seq: 1, time: T1, data: { turn: 1 } },
    { type: 'assistant/message', seq: 2, time: T1 + 1000, data: { usage: { inputTokens: 3 } } },
  ];
  const stats = foldSessionStats({ header: { createdAt: T1 }, events, now: T1 + 30_000, detail: true });

  assert.equal(stats.perTurn.length, 1);
  assert.equal(stats.perTurn[0].open, true);
  assert.equal(stats.perTurn[0].ms, 30_000);
  assert.equal(stats.perTurn[0].tokens, 3);
});

test('the resolver honours tz and detail options', async () => {
  const ctx = {
    sessions: {
      get: () => ({
        header: { createdAt: T1 },
        inheritedEventCount: 0,
        snapshotEvents: () => [
          { type: 'turn/start', seq: 1, time: T1, data: { turn: 1 } },
          { type: 'turn/end', seq: 2, time: T1 + 1000, data: { turn: 1 } },
        ],
      }),
    },
  };
  const resolver = createStatsResolver(ctx);
  const list = await resolver.resolve(['a'], { tzOffset: -480 });
  assert.equal(list.tzOffset, -480);
  assert.equal(list.sessions[0].daily[0].d, '2026-11-03');
  assert.equal(list.sessions[0].perTurn, undefined);

  const detail = await resolver.resolve(['a'], { tzOffset: -480, detail: true });
  assert.equal(detail.sessions[0].perTurn.length, 1);
});

const models = (value) => ({ type: 'assistant/message', seq: 2, time: value, data: { usage: { inputTokens: 100, outputTokens: 50, cacheReadTokens: 1000 }, message: { source: { kind: 'model', provider: 'deepseek', model: 'deepseek-flash' } } } });

test('cost prices cache hits, input and output separately', () => {
  const events = [
    { type: 'turn/start', seq: 1, time: T1, data: { turn: 1 } },
    models(T1 + 1000),
    { type: 'turn/end', seq: 3, time: T1 + 2000, data: { turn: 1 } },
  ];
  // 16:30Z is 00:30 in Beijing — inside the default off-peak window, so the multiplier applies.
  const off = foldSessionStats({ header: { createdAt: T1 }, events, now: T1 + 2000 });
  assert.equal(off.cost.offPeak > 0, true);
  assert.equal(off.cost.peak, 0);
  assert.equal(off.cost.currency, 'CNY');

  // 06:30Z is 14:30 Beijing — full price.
  const peakEvents = [
    { type: 'turn/start', seq: 1, time: T1 + 14 * 3_600_000, data: { turn: 1 } },
    models(T1 + 14 * 3_600_000 + 1000),
    { type: 'turn/end', seq: 3, time: T1 + 14 * 3_600_000 + 2000, data: { turn: 1 } },
  ];
  const peak = foldSessionStats({ header: { createdAt: T1 }, events: peakEvents, now: T1 + 14 * 3_600_000 + 2000 });
  assert.equal(peak.cost.peak > 0, true);
  assert.equal(peak.cost.offPeak, 0);
  assert.ok(peak.cost.total > off.cost.total);
  // deepseek-flash: input 2, cacheRead 0.2, output 3 per 1M.
  const expected = (100 * 2 + 1000 * 0.2 + 50 * 3) / 1_000_000;
  assert.ok(Math.abs(peak.cost.total - expected) < 1e-9);
});

test('cost splits by model and the off-peak flag follows the Beijing window', () => {
  // 00:30–08:30 Beijing is discounted: 08:29 still is, 08:30 is not.
  assert.equal(isOffPeak(Date.UTC(2026, 10, 2, 0, 29), DEFAULT_PRICING.offPeak), true);
  assert.equal(isOffPeak(Date.UTC(2026, 10, 2, 0, 30), DEFAULT_PRICING.offPeak), false);
  assert.equal(isOffPeak(Date.UTC(2026, 10, 2, 16, 29), DEFAULT_PRICING.offPeak), false);
  assert.equal(isOffPeak(Date.UTC(2026, 10, 2, 16, 30), DEFAULT_PRICING.offPeak), true);

  const events = [
    { type: 'turn/start', seq: 1, time: T1, data: { turn: 1 } },
    { type: 'assistant/message', seq: 2, time: T1 + 1000, data: { usage: { inputTokens: 10, outputTokens: 10 }, message: { source: { kind: 'model', provider: 'o', model: 'gpt-6.1-sol' } } } },
    { type: 'turn/end', seq: 3, time: T1 + 2000, data: { turn: 1 } },
  ];
  const stats = foldSessionStats({ header: { createdAt: T1 }, events, now: T1 + 2000 });
  assert.equal(stats.models.length, 1);
  assert.equal(stats.models[0].model, 'gpt-6.1-sol');
  assert.ok(stats.models[0].cost > 0);
  assert.equal(stats.daily[0].cost > 0, true);
  assert.equal(stats.hours.cost.reduce((sum, value) => sum + value, 0) > 0, true);
});

test('a caller price table overrides the defaults and survives partial input', () => {
  const custom = normalizePricing({
    currency: 'USD',
    models: { 'deepseek-flash': { input: 100, cacheRead: 0, output: 0 } },
    offPeak: { multiplier: 1 },
  });
  assert.equal(custom.currency, 'USD');
  assert.equal(custom.models['deepseek-flash'].input, 100);
  assert.equal(custom.models['deepseek-flash'].output, 0);
  assert.equal(custom.default.input, DEFAULT_PRICING.default.input);

  const events = [
    { type: 'turn/start', seq: 1, time: T1 + 14 * 3_600_000, data: { turn: 1 } },
    { type: 'assistant/message', seq: 2, time: T1 + 14 * 3_600_000 + 10, data: { usage: { inputTokens: 1_000_000 }, message: { source: { model: 'deepseek-flash' } } } },
    { type: 'turn/end', seq: 3, time: T1 + 14 * 3_600_000 + 20, data: { turn: 1 } },
  ];
  const stats = foldSessionStats({ header: { createdAt: T1 }, events, now: T1 + 14 * 3_600_000 + 20, pricing: custom });
  assert.ok(Math.abs(stats.cost.total - 100) < 1e-9);
});
