# 交接清单 · Task Deck

> 给下一位接手这个插件的 agent。目标：**10 分钟内能看懂现状、跑起来、知道下一步该做什么**。
> 最近更新：2026-11-05（v1.5.0）。

---

## 0. 30 秒概览

| 项 | 值 |
|---|---|
| 插件 | `@local/dsh-task-deck`（DSH Client UI 插件 + 轻量 Host 半） |
| 作用 | 把 DSH 会话目录变成任务看板：状态分组、下一步、分支、耗时/Token/花费统计 |
| 版本 | `1.5.0`（`package.json`） |
| 仓库 | https://github.com/astephengoo-arch/dsh-task-deck （public, MIT） |
| 最新提交 | `f0722b6` — feat: DeepSeek peak-hour schedule |
| Release | https://github.com/astephengoo-arch/dsh-task-deck/releases/tag/v1.5.0 |
| 本地安装 | `~/.dsh/profiles/desktop/node_modules/@local/dsh-task-deck`（pnpm 安装，非 link） |
| 是否发 npm | 否。包名 `@local/*` + `private: true`，只能 GitHub 源码安装 |
| 市场提交 | Issue 已提：https://github.com/dshplugin/dsh-plugin-hub/issues/574 |

---

## 1. 接手前 5 分钟核对（逐条打勾）

- [ ] `cd /Users/lishen/VibeWorking/dsh-test/task-deck && git status` 干净，`git log -1` 是 `f0722b6`
- [ ] `node --check client.js && node --check index.js` 通过
- [ ] `node --test scripts/test-stats.mjs` → **18 pass / 0 fail**
- [ ] `curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:<GUI端口>/task-deck/stats"` → **200**
      （端口看运行时上下文里的 `Current DeepSeek Harness Web GUI URL`；DSH 重启后端口会变）
- [ ] 安装的副本与仓库一致：`shasum client.js ~/.dsh/profiles/desktop/node_modules/@local/dsh-task-deck/client.js` 两个哈希相同
- [ ] 打开 GUI → 侧栏 Task Deck → 「统计」页能看到 KPI、趋势、峰谷、热力图、甘特、明细表

> 任一项不满足，先看第 7 节「常见坑」，不要直接改代码。

---

## 2. 架构（两半 + 一条回环路由）

```
┌─────────────────────────── Client 半 (client.js) ───────────────────────────┐
│ slots: sidebar.panellist(id=task-deck) / main(key=task-deck)                │
│        conversation.session.header.utilities(id=task-deck-thread)           │
│        sidebar.right.pane.tab(key=@local/dsh-task-deck)                     │
│ store: 会话列表 + 个人标注(localStorage) + stats 缓存(localStorage)          │
│        └─ fetch('/task-deck/stats?ids=…&tz=…&p=…&detail=1')                 │
└─────────────────────────────────────────────────────────────────────────────┘
                                   │ 同源 GET（loopback only，只回数字）
┌─────────────────────────── Host 半 (index.js) ──────────────────────────────┐
│ apply(ctx) → inject(['webServer']) → webServer.register(exact /task-deck/stats)│
│ createStatsResolver: 内存缓存(TTL 10min, 按 id+tz+价目版本)                  │
│ 活会话 → ctx.sessions.get(id).snapshotEvents()                              │
│ 冷会话 → ctx.sessionQuery.readSession(id)                                   │
│ foldSessionStats(): 一次遍历算 耗时/Token/金额/日桶/小时桶/逐轮              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**为什么必须有 Host 半**：`createdAt` 只在 Host 的 `SessionHeader` 里，轮次起止只在持久日志里；Client 列表快照（`SessionSummary`）只有 `updatedAt`，`sessionStats` 是 host-only projection（`viewCheckpoint` 只服务 `def.wire !== undefined` 的 key）。所以耗时/金额只能 Host 算。

**为什么不引图表库**：客户端 `require` 只能解析 Web 模块图里已有的包（`@deepseek-ai/*`、`react`、`zod`），ECharts/Chart.js 既不在图里也不允许联网。全部图表是手写 SVG。

---

## 3. 文件地图

| 文件 | 职责 | 关键锚点 |
|---|---|---|
| `client.js` | 全部 UI + 数据层（单文件，5811 行） | 常量 `:692`；`buildTasks` `:1057`；`createDeckStore` `:1187`；`requestStats` `:1263`；图表 `:1959`–`:2559`；`InsightsBody` `:2749`；`TaskDetail` `:3758`；`ThreadLauncher` `:4859`；CSS `:4912`；`apply` 末尾 `:5733` |
| `index.js` | Host 半：路由 + 折叠计算（724 行） | `STATS_PATH` `:11`；`DEFAULT_SCHEDULE` `:34`；`normalizePricing` `:133`；`isPeakTime` `:168`；`foldSessionStats` `:258`；`peekService` `:470`；`createStatsResolver` `:491`；`apply`/路由 `:630` |
| `scripts/test-stats.mjs` | 18 个 host 单测（fold / 分桶 / 定价 / 路由） | `node --test` |
| `scripts/pack-release.sh` | 打 `dist/dsh-task-deck-<ver>.tgz` | 只拷 `files` 白名单 |
| `cordis.patch.yml` | 插入 loader 行 `task-deck` | 名称必须与 `package.json.name` 一致 |
| `docs/DESIGN.md` | 信息架构 / 视觉系统 / 自动完成设计 | 设计决策来源 |
| `docs/PUBLISHING.md` | 发布到 npm / Discover 的步骤 | 尚未执行 |
| `docs/HANDOFF.md` | 本文 | — |

---

## 4. 数据契约（改协议先改这里）

`GET /task-deck/stats`

| 参数 | 说明 |
|---|---|
| `ids` | 逗号分隔，最多 50 个；缺省=全量（最多 50） |
| `tz` | 浏览器 `getTimezoneOffset()` 分钟；决定日桶/小时桶切法 |
| `p` | base64(JSON) 价目表；缺省用 Host 默认 |
| `detail=1` | 额外返回 `perTurn`（最近 40 轮） |
| `fresh=1` | 绕过内存缓存 |

响应：`{ ok, generatedAt, tzOffset, schedule:{windows,weekdays,holidays[]}, sessions[], skipped[] }`

`sessions[]` 每项：
```
id, updatedAt, createdAt, firstAt, lastAt, spanMs, workMs, turns, steps, inheritedEvents, live,
tokens: {input, cacheRead, cacheWrite, output, total}
daily: [{d, ms, turns, cost, costByClass{4}, tokens{4}}]        // ≤180 天
hours: {tokens[168], turns[168], cost[168]}                     // 周一=0，hour = weekday*24+h
cost: {total, peak, offPeak, byClass{4}, currency, unit}
models: [{model, tokens{4}, cost}]
perTurn?: [{n, start, ms, tokens, cost, open?}]
```

**约束**：路由只允许 loopback；只返回数字/标题，不返回任何消息正文；`cache-control: no-store`。

---

## 5. 计价模型（1.5.0 起）

- 单价：每 1M token，按 **输入（未命中）/ 缓存命中 / 缓存写入 / 输出** 四类分别计价，另加每模型 `offPeak` 折扣系数。
- 峰谷（DeepSeek 官方口径，北京时间）：**周一至周五（剔除法定节假日）09:00–12:00、14:00–18:00 为高峰**；其余全部（夜间、午休、周末、节假日全天）为低谷。低谷价 = 高峰价 × `offPeak`（`deepseek-flash` 默认 0.5，其他模型默认 1.0）。
- 节假日：默认内置 2025–2026 共 59 天，可在「价目」面板编辑，支持 `2026-10-01` 或 `2026-02-16~2026-02-22`。
- **每年必须更新节假日表**（Host `DEFAULT_SCHEDULE` 与 Client `DEFAULT_SCHEDULE` 两处，保持一致）。
- 价目表存 `localStorage['dsh.taskDeck.pricing.v1']`；改动后 Client 清空 stats 缓存并 `fresh=1` 重取；Host 缓存按 `JSON.stringify(pricing)` 失效。

---

## 6. 开发 / 验证 / 发布

```bash
cd /Users/lishen/VibeWorking/dsh-test/task-deck

# 语法 + 单测
node --check client.js && node --check index.js
node --test scripts/test-stats.mjs

# 打 tarball
bash scripts/pack-release.sh ../dist          # → ../dist/dsh-task-deck-<ver>.tgz

# 安装到当前 profile（先 remove 再 install，install 不支持覆盖升级）
#   用 plugin_manager 工具：remove_bundle → install_bundle <tgz 绝对路径>

# 发布
git add -A && git commit -m "feat: …(x.y.z)" && git push origin HEAD
gh release create vX.Y.Z ../dist/dsh-task-deck-X.Y.Z.tgz --title "X.Y.Z — …" --notes "…"
```

**版本纪律**：改代码 → 升 `package.json` version → 写 CHANGELOG → 打 tarball → 安装 → 提交 → Release。README 里的 tarball 文件名也要同步改。

---

## 7. 常见坑（都踩过）

1. **改了 Host 半必须重启 DSH**（Client 半会热加载，Host 不会）。判断方法：`curl /task-deck/stats` 返回里有没有新字段（比如 `schedule`）。
2. **端口会变**：DSH 重启后 GUI 端口换一个，别用旧 URL 判断服务死活。
3. **`plugin_manager install_bundle` 不支持覆盖**，必须先 `remove_bundle`，否则返回 `already-installed`。
4. **npm 缓存权限**：本机 `~/.npm` 属于 root，`npm install` 会 EPERM；用 `npm_config_cache=/tmp/npmcache`。
5. **`localStorage` 配额**：stats 缓存带日/小时序列，写满会静默失败；代码已做两级降级（剥序列 → 放弃写入），改缓存结构时别破坏它。
6. **标题**：列表行的 `displayTitle` 会退化成裸 id 或工作区名；真实标题要从 `projectionsBySession[id].values.title` 读，缺失时 `refreshProjections` 补读。
7. **`Active` 状态永远不落盘**：它只由 `summary.running` 推导；标注里出现 `active` 会被清理。
8. **自动完成只影响 Task Deck 的 Done 分组**，不归档、不删除会话。
9. **别在渲染期发请求**：`loadStats` 走 `statsInflight` 去重 + 300ms 防抖；`TaskDetail` 的 `loadTurnDetail` 有 `perTurn` 存在即短路。
10. **SSR 冒烟**：本机有一套 `react-dom/server` 渲染脚本（在 `/tmp/smoke-render`，未入库），改图表后用它验证 `td-chart-*` / `td-price-*` 是否出现、有没有 `NaN`。

---

## 8. 已知限制 / 未完成

- [ ] **未发布 npm**：上架插件商城必须有公共包名。需要用户定 scope（`dsh-task-deck` 或 `@scope/dsh-task-deck`），然后去掉 `private`、`npm publish`、更新 issue #574。
- [ ] **节假日表只到 2026**：每年 11 月国务院办公厅公布次年安排后要补。
- [ ] **调休上班日未建模**：目前只排除节假日，不处理「周末补班也算高峰」。要做得加一个 `workdays` 覆盖列表。
- [ ] **甘特默认 10 行**，展开到 24 行；没有缩放/刷选。
- [ ] **会话时间轴不含未来计划**，只画已发生区间。
- [ ] **单价默认值是示例**，用户需要自己改；UI 已标注但没有首次引导。
- [ ] **README 无截图**（用户后来在远端 README 手动加了一张 + dsh-plugin.org 徽章，本地已 rebase 保留）。

---

## 9. 下一步候选（按价值排序）

1. **发 npm + 更新市场 issue**（解锁商城上架，收益最大）。
2. **调休/补班日**：给 `schedule` 加 `workdays`（覆盖 weekdays），UI 加一个列表。
3. **按模型下钻**：`models[]` 已经有数据，统计页可以加一个「按模型」卡片。
4. **导出 CSV / 截图**：统计页导出明细，方便周报。
5. **首次使用引导**：第一次打开统计页时提示「先核对价目」。
6. **会话详情里加“本会话花费趋势”**（现在详情只有逐轮柱状）。

---

## 10. 关键决策记录（避免被推翻重做）

| 决策 | 理由 |
|---|---|
| Client 单文件、无构建 | DSH 插件按 `__ModuleLoader__` 加载，单文件最省事；代价是 5800 行 |
| 图表手写 SVG | 无法引第三方库、不能联网；也避免体积与主题适配问题 |
| 统计走 Host 路由而非 Remote | 自定义 Remote 需要 typert 代码生成，无构建插件做不了；HTTP 路由是插件可用的最轻通道 |
| 路由 loopback-only + 只回数字 | 降低本机其它进程读取风险；即便被读到也没有正文 |
| 金额在 Host 算、价目在 Client 存 | 价目改动即时生效（Client 传 `p`），Host 按价目版本失效缓存 |
| 峰谷按“排期”而非“单窗口” | 官方是双时段 + 工作日 + 节假日，单窗口表达不了 |
| fork 子会话只算 own 段 | 父会话的花费不应记到子任务头上（`inheritedEventCount` 之前全部跳过） |

---

## 11. 本会话「压缩失败」诊断（供参考）

2026-11-04 13:31–13:56（北京时间）连续失败 7 次，日志（`~/.dsh/sessions/.../session.v4.jsonl.zstd`，每个事件一个 zstd frame）里的错误依次是：

| 时间 | 错误 | 含义 |
|---|---|---|
| 13:31:53 | `DeepSeek Messages transport failed` | 提供商连接失败 |
| 13:32:26 | `DeepSeek Messages request failed (550)` | 提供商 550 |
| 13:32:34 | `DeepSeek Messages transport failed` | 同上 |
| 13:34:31 / 13:35:32 / 13:56:31 | `summarization truncated at the token cap (incomplete checkpoint)` | **摘要输出撞到模型输出上限** |
| 13:56:09 | `Request aborted` | 取消/中断 |

DSH 的 `finishError()` 把 `max-tokens` 显式映射成失败（fail-closed），因为半截摘要会静默替换历史、丢失上下文——所以这不是 bug，是设计。根因是这段对话太长（该会话 3228 个事件，含大量大体量工具输出），摘要所需输出超过模型单次输出上限。

缓解：换输出上限更大的模型做摘要（`summarizationModel`）、把 `maxTokens` 调大（受模型自身上限约束）、把工作拆到更小的会话、或减少单次工具输出体积。
