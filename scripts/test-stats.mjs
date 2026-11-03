import test from 'node:test';
import assert from 'node:assert/strict';

import { apply as applyHost, createStatsResolver, foldSessionStats, STATS_PATH } from '../index.js';

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
