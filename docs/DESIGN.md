# Task Deck — UI 信息架构与视觉方案

> 一个面向 DSH Desktop 侧边栏的个人任务插件：把多任务、多分支、多会话收进一个可扫读的驾驶舱，让注意力始终落在「当前最重要的一步」。
>
> **v1.1 更新：绑定真实 DSH 会话。** Task Deck 不再使用演示任务；Dashboard 直接读取 `ctx.sessions.list`，每个条目对应一段真实对话。状态、Next Action 和检查项是叠加在会话之上的个人标注层。

## 1. 产品判断

Task Deck 不是完整的项目管理工具，而是一个**注意力路由器**。

它只回答四个问题：

1. 现在有哪些任务在跑？
2. 哪一个被卡住、在等谁、等什么？
3. 每个任务下一步做什么？
4. 这个任务和我当前会话是什么关系，怎样继续？

因此，TAPD 提供的是**状态分组、优先级、任务键、迭代、阻塞原因**这些可扫读的项目管理语义；ChatGPT 提供的是**低装饰、宽留白、以对话为中心、单一焦点**的视觉语言。两者叠加的结果不是「更复杂的表格」，而是「更安静的作战面板」。

## 2. 信息架构

```text
DSH Sidebar
└── Task Deck（全局入口，带需关注计数）
    └── 主面板
        ├── Dashboard
        │   ├── Today's Focus（今日聚焦 + 四个状态计数）
        │   ├── 视图切换：Overview / All tasks / Review queue
        │   ├── 状态筛选：All / Active / Waiting / Blocked / Review / Done
        │   ├── 会话分组列表
        │   │   └── Task Row：状态 · 会话短 ID · 真实标题 · Next Action · 分支 · 运行态
        │   └── 右侧辅助栏
        │       ├── Next actions（最多 3 个）
        │       ├── Waiting on（不要把等待挂在脑子里）
        │       └── 实时会话目录：总数 / 运行中 / 工作区
        └── Task Detail
            ├── 面包屑 + 返回
            ├── 标题区：状态 / 优先级 / 会话短 ID / 负责人 / 最近活动 / 工作区 / 分支
            ├── Next Action 卡（可直接完成当前一步）
            ├── Context（任务描述）
            ├── Definition of Done（检查项）
            ├── Branch map（父任务 / 当前 / 子分支）
            ├── Linked sessions（关联会话）
            ├── Activity（决策与推进记录）
            └── 右侧属性栏：实时会话状态 / 评审门禁 / 任务属性

当前会话
├── Header 工具区：Task Deck 入口按钮
└── 右侧 Thread Panel（Task Thread）
    ├── 当前任务卡：状态 / 标题 / 分支 / 运行态与最近活动
    ├── Do next（下一步 + 快捷继续）
    ├── 阻塞原因（若有）
    ├── Conversations（当前会话高亮 + 关联会话）
    ├── Quick actions：继续 / 分支 / 任务详情
    └── Open Task Deck

新建分支 / 继续任务
└── 3 步流程
    ├── 1. Choose a move：继续任务 / 新建任务分支 / 交给工作流
    ├── 2. Shape the context：来源任务 / 标题 / 分支名 / Agent / 携带上下文
    └── 3. Start with a prompt：Starter prompt + 摘要 + 创建并打开
```

### 入口关系

| 入口 | 位置 | 作用 |
|---|---|---|
| 全局图标 | `sidebar.panellist` | 进入 Dashboard；角标显示 Blocked + Review 数量 |
| 主面板 | `main` key `task-deck` | Dashboard 与 Task Detail 的容器 |
| 会话工具按钮 | `conversation.session.header.utilities` | 在当前会话打开 Task Thread |
| 右侧 Tab | `sidebar.right.pane.tab` | Thread Panel 本体，和当前 Session 绑定 |
| 新建/继续流程 | Dashboard / Detail / Thread 内 | 从任意任务把上下文带入新会话或新分支 |

## 3. 四个核心界面

### 3.1 Sidebar 全局入口 + Dashboard

**目标：一屏完成注意力分级，不进入任何详情就能判断先做什么。**

```text
┌ Sidebar ─┬──────────────── Task Deck ──────────────────────────────┐
│ 会话     │  PERSONAL WORKSPACE                     [搜索 ⌘K] [新建分支] │
│ ...      │  Task Deck                                               │
│ [TD] 3   │  One calm place for every task, branch and conversation. │
│          │  ┌ Today's focus ───────────────────────────────────────┐ │
│          │  │ ● 先解阻塞，再推进两个进行中的分支  3  2  1  2       │ │
│          │  └──────────────────────────────────────────────────────┘ │
│          │  Overview | All tasks | Review queue                      │
│          │  [All] [Active] [Waiting] [Blocked] [Review] [Done]       │
│          │  ┌ 进行中 ──────────────────────────┐  ┌ 下一步 ──────┐ │
│          │  │ TD-1042 Task Deck 侧边栏信息架构   │  │ 1 ...        │ │
│          │  │ → 确认分组与状态色                 │  │ 2 ...        │ │
│          │  │ TD-1045 Sidebar 全局入口            │  └──────────────┘ │
│          │  └────────────────────────────────────┘  ┌ 等待中 ──────┐ │
│          │  ┌ 待评审 ──────────────────────────┐  │ ...          │ │
│          │  └────────────────────────────────────┘  └──────────────┘ │
└──────────┴───────────────────────────────────────────────────────────┘
```

关键决策：

- **状态分组优先于表格列**。TAPD 的密集表格不适合「快速切换会话」，所以用分组列表保留状态语义，同时降低横向扫读成本。
- **真实标题优先于任务编号**。会话 ID 只作为短标识，行首展示真实 `displayTitle` 或用户设置的 Task alias。
- **Next Action 是每行的第二信息层**，默认从真实会话状态生成，也可以被用户改写。
- **右侧辅助栏不是第二个列表**，只放三件会占据工作记忆的事：下一步、等待、会话目录总量。
- **计数会说话**：Blocked 永远比 Done 更显眼；Sidebar 角标只统计用户手动标记的 Blocked + Review，避免长期红色数字造成告警疲劳。
- **不伪造进度**：真实会话没有百分比进度，Dashboard 用 Running / Waiting / New 表达运行态；只有用户自己添加的检查项才产生进度。
- **搜索是全局的**：任务标题、任务键、Next Action、分支名、标签都可搜索；`⌘K` 直接聚焦。

### 3.2 Task Detail

**目标：把「我上次为什么这么做」在 10 秒内还回来，并且明确这是一段真实 DSH 会话。**

页面结构：

1. **Hero**：真实会话标题（或个人 alias）、真实标题副行、状态、优先级、会话短 ID、最近活动 / 工作区 / 分支 / fork 数。
2. **Next Action 卡**：最显眼的单一动作，左侧圆形勾选可直接完成当前一步；右侧提供「在会话中打开」和「继续任务」。
3. **Context**：任务描述，保留背景而不是堆积日志。
4. **Definition of Done**：用户自己的检查项与进度；没有检查项时给出空态和「添加检查项」，不伪造进度。
5. **Branch map**：父任务 → 当前任务 → 子分支。只表达层级，不做 DAG 编辑器。
6. **Linked sessions**：会话标题、状态点、相对时间、打开动作。
7. **Activity**：最近决策、Agent 产出、状态变化的短时间线。
8. **右侧属性栏**：Running / Idle 会话状态、评审门禁、任务属性（状态可改、会话 ID、最近活动、workspace、分支、fork 数）。

交互：

- 勾选检查项后，进度、Next Action、状态自动推进；这是「完成一步」而不是「改一个字段」。
- 检查项全完成且状态为 Active 时，右侧出现「移到待评审」。
- 父任务 / 子分支可点击，直接切换到对应任务详情。
- 内容区超长时右栏保持为独立信息块，不跟随主内容滚动阅读（由页面自然滚动承载）。

### 3.3 当前会话右侧 Thread Panel

**目标：不离开当前对话，也能知道「我正在哪个任务、下一步是什么」。Thread 始终优先展示 `props.sessionId` 对应的真实会话，而不是上一次打开的任务。**

宽度约 320–400px，采用纵向卡片：

```text
┌ Task Thread ─────────────── ↗ ┐
│ Task Thread                    │
│ 与当前会话绑定的任务上下文       │
│ ┌────────────────────────────┐ │
│ │ TD-1042          [进行中]   │ │
│ │ Task Deck 侧边栏信息架构     │ │
│ │ P0  feat/task-deck-ia       │ │
│ │ 运行中 · 12m ago            │ │
│ └────────────────────────────┘ │
│ DO NEXT                        │
│ ○ 确认 Dashboard 分组与状态色   │
│   继续 →                       │
│ CONVERSATIONS                  │
│ ● 当前会话  sess-1042…          │
│ ○ Task Deck IA · 主会话         │
│ QUICK ACTIONS                  │
│ [继续] [分支]                   │
│ [任务详情]                     │
│ 打开 Task Deck                 │
└────────────────────────────────┘
```

设计取舍：

- **不是 mini dashboard**，不重复完整任务列表；只承载当前任务的上下文。
- **当前会话高亮**，其余关联会话作为可追溯线索。
- **阻塞原因直接展示**，因为这是最需要马上知道、也最容易被带进对话的信息。
- **三个快捷动作**正好对应三个后续意图：继续、派生、查看全貌。
- 右栏使用页面底色而非独立卡片层，保持「这是会话的一列，不是浮在页面上的应用」。

### 3.4 新建分支 / 继续任务流程

**目标：把「从任务继续」变成可预期、可复用、可撤回的路径，并且动作作用在真实会话上。**

三步：

1. **Choose a move**
   - 继续任务：打开当前真实会话。
   - 新建任务分支：调用 `ctx.sessions.fork()` 派生真实子会话。
   - 交给工作流：fork 子会话，并标记为 Waiting。
2. **Shape the move**
   - 来源会话（只读）
   - Task alias（只改 Task Deck 显示名，不改真实 session title）
   - 分支标签
   - Fork 会继承截至最近完成回合的完整会话历史
3. **Start with a prompt**
   - Starter prompt 可编辑
   - 三条建议：总结后继续 / 检查风险 / 先出计划
   - 创建后复制到剪贴板，方便粘贴进新会话
   - 摘要：方式、来源会话、分支标签、workspace
   - 「创建并打开」

流程原则：

- **默认值足够好**：Alias、分支标签、Prompt 都由会话生成，用户可以只按「继续」。
- **模式先于表单**：先选意图，再填字段，避免一上来面对 8 个输入框。
- **不假装能裁剪上下文**：DSH fork 复制完整历史；界面明确说明，而不是给出无效的 checkbox。
- **创建后落到真实会话**：fork 子会话会立即出现在会话目录和 Task Deck，并可用其 session id 继续绑定 Thread。

## 4. 状态模型

| 状态 | 来源 | 语义 | 视觉 |
|---|---|---|---|
| Active | 仅由真实 `running` 派生 | 正在推进 | 绿色 |
| Waiting | 空闲且未超过自动完成阈值 | 等待你继续 | 琥珀色 |
| Blocked | 用户手动标记 | 无法推进 | 红色 |
| Review | 用户手动标记 / 检查项全部完成 | 等待判断 | 品牌色 |
| Done | 用户手动标记，或空闲超过阈值自动派生 | 已完成 | 中性灰 |

**Next Action 规则**

- 每个任务有且只有一个当前 Next Action。
- Active 是运行时事实，不写入个人标注；会话停止运行后自动回到 Waiting 或用户手动标记的 Blocked / Review / Done。
- 默认值由真实会话状态生成：New / Running / Waiting 各自不同。
- 用户可以在 Task Detail 直接编辑；检查项全部完成时进入 Review。
- 它是个人标注，不写回 DSH session，也不篡改对话内容。

### 久未活动自动完成

真实会话不会自己宣布“这个任务结束了”。Task Deck 用**最近活动时间**补上这个判断，但不伪造完成：

- 默认阈值：**14 天（336 小时）无活动**。
- 可选：1 小时 / 3 小时 / 6 小时 / 12 小时 / 1 天 / 3 天 / 7 天 / 14 天 / 30 天 / 从不，设置保存在浏览器本地。
- 只在会话**不在运行**、且**没有手动状态**时触发。
- 自动完成是**派生状态**，不写入个人标注；会话一旦有新活动，会自动回到 Waiting。
- 手动设为 Waiting 表示“保持打开”，不会再被自动完成。
- 在状态下拉里选「自动」可以清除手动覆盖，重新交给活动规则。
- 自动完成只影响 Task Deck 的 Done 分组，不会归档或删除 DSH 会话。

这条规则解决的是“会话停下来了，但 UI 还把它当作等待”的问题；它不替代用户对 Blocked / Review / Done 的主动判断。

**分支关系规则**

- `parentId` 来自 DSH 的真实 fork 关系。
- 一个会话可以有多个 fork 子会话；Task Detail 的分支图直接使用真实 parent/children。
- Fork 子会话继承截至最近完成回合的历史；Task Deck 只额外记录 alias、分支标签和 Next Action。
- 交接分支默认标记 Waiting，不抢当前焦点。

## 5. 视觉方案

### 5.1 视觉关键词

**接近 ChatGPT 原生**：中性底色、极少装饰、细边框、低对比度辅助信息、圆角克制、状态色只用于状态。

**借鉴 TAPD**：任务键、P0/P1/P2、状态分组、阻塞原因、负责人。所有这些都以「可扫读」而不是「表格化」的方式呈现。

### 5.2 Design tokens

所有颜色来自 DSH 主题 token，不硬编码：

| 用途 | Token |
|---|---|
| 页面底色 | `--dsw-alias-bg-base` |
| 卡片 / 抬升层 | `--dsw-alias-bg-layer-1` / `--dsw-alias-bg-layer-2` |
| 主文本 | `--dsw-alias-label-primary` |
| 次文本 | `--dsw-alias-label-secondary` |
| 边框 | `--dsw-alias-border-l1` / `--dsw-alias-border-l2` |
| Active | `--dsw-alias-state-success-primary` |
| Waiting | `--dsw-alias-state-warn-primary` |
| Blocked | `--dsw-alias-state-error-primary` |
| Review | `--dsw-alias-brand-primary` |
| Done | `--dsw-alias-state-idle-primary` |

状态底色使用 `color-mix(...)` 从 token 派生，保证浅色 / 深色模式都成立。

### 5.3 排版与密度

- 正文 `13px / 1.5`；辅助信息 `10–11.5px`；页面标题 `26px`；详情标题 `26px`。
- 字重：正文 400–540，标题 600–620，任务标题 560。
- 数字使用 `tabular-nums`，避免进度和计数跳动。
- 行高与内边距按「可扫读」而非「可点击玩具」设计：任务行 59px，主要按钮 34px，紧凑按钮 29px。
- 圆角：页面卡片 12–14px，按钮 8–9px，状态 chip 6px，标签 4–5px。
- 主要 CTA 使用 `label-primary` 反色（ChatGPT 式黑/白按钮），品牌色只留给 Review、链接和当前关系。

### 5.4 深浅色

- 不使用固定灰阶；全部通过 token 与 `color-mix` 派生。
- 卡片层与页面底色的差异控制在 1 个层级，避免深色模式下出现「一堆发光的盒子」。
- 状态色只出现在小圆点、chip、细边框与关键数字上，不铺大面积背景。
- 文字对比度优先：辅助文本不灰到不可读，状态文案不依赖颜色单独传达。

### 5.5 动效

- 只保留三类：hover 背景、进度条宽度、Modal 入场（180ms）。
- 不使用弹跳、缩放强调或长距离位移动画。
- 遵循 `prefers-reduced-motion`。

## 6. 关键交互

| 交互 | 结果 |
|---|---|
| 点击 Sidebar Task Deck 图标 | 打开主面板 Dashboard |
| `⌘K` | 聚焦搜索 |
| 点击状态计数 | 切到 All tasks 并筛选该状态 |
| 点击任务行主体 | 进入 Task Detail |
| 点击任务行「继续」 | 打开「继续任务」流程第 2 步 |
| 点击 Task Detail「新建分支」 | 打开「新建任务分支」流程第 2 步 |
| 点击 Next Action 圆形勾选 | 完成当前检查项并推进进度 |
| 点击检查项 | 切换完成状态；全部完成时进入 Review 门禁 |
| 点击父任务 / 子分支 | 切换到对应 Task Detail |
| 点击 Header Task Deck 按钮 | 在当前会话右侧打开 Task Thread |
| Thread「任务详情」 | 切回主面板并打开当前任务详情 |
| Thread「继续 / 分支」 | 打开对应流程，创建后更新 Thread |
| Modal 点击遮罩 / `Esc` | 关闭流程 |

## 7. 原型实现映射

| 设计界面 | DSH 扩展点 |
|---|---|
| Sidebar 全局入口 | `sidebar.panellist`，id `task-deck` |
| Dashboard / Task Detail | `main`，key `task-deck` |
| 当前会话工具按钮 | `conversation.session.header.utilities` |
| Thread Panel Tab | `sidebarRightTabs.register` + `sidebar.right.pane.tab` |
| 打开 Thread | `ctx.sidebarRight.openTab('task-deck-thread')` |
| 会话目录 | `ctx.sessions.list`（`ids` / `byId` / `projectionsBySession`） |
| 继续会话 | `ctx.uiWorkspace.openSession(sessionId)` |
| 新建分支 | `ctx.sessions.fork({ sessionId, increaseTitle: true })` |
| 切换主面板 | `ctx.layout.selectPanel('task-deck')` |
| 语言 | `ctx.locale` 命名空间 `taskDeck`（zh / en） |

**持久化边界**：DSH session 本身由 Host 持久化；Task Deck 只把个人标注（status override、Next Action、检查项、alias、priority、branch label）保存到浏览器 `localStorage` 的 `dsh.taskDeck.annotations.v1`，以 session id 为键。

## 8. 验收标准

- Sidebar 一次点击进入 Dashboard，列表与真实 DSH 会话一一对应。
- 一屏内能区分 Active / Waiting / Blocked / Review，并能筛到任意状态。
- 任一任务能在 2 次点击内进入 Detail，Detail 能回答「下一步是什么」。
- Thread Panel 在任意会话中打开时，优先展示当前 `sessionId` 对应的任务，而不是上一段会话。
- 新建分支会真正 fork 出子会话；继续会打开当前真实会话。
- 不显示伪造的百分比进度；只有用户检查项才产生进度。
- 长时间无活动的会话会自动进入 Done，有新活动后自动恢复 Waiting。
- 自动完成阈值可在任务列表上方的筛选栏中切换（小时级到 30 天），并对手动 Waiting 的会话不生效。
- 浅色 / 深色下不依赖硬编码颜色。
- 视觉上不抢 DSH 会话本身的注意力：主任务仍然是对话，Task Deck 是上下文层。
