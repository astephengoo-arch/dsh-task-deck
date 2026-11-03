# Task Deck

[English](README.md) · 中文

**Task Deck 是 DSH Desktop 的个人任务驾驶舱。** 它直接读取真实的 DSH 会话目录，把每一段对话变成一张任务卡，让你始终聚焦在下一步真正有用的动作上。

适合同时开很多会话、分支和任务的人：哪些在运行、哪些在等你、哪些被阻塞、哪些待评审，一眼看清；然后继续、fork 或交接，不丢上下文。

## 功能

- **Sidebar 入口** — 注册在 `sidebar.panellist`，角标只统计 Blocked + Review。
- **实时 Dashboard** — 真实 DSH 会话按状态分组，支持搜索与筛选。
- **Task Detail** — 真实会话标题、ID、workspace、运行状态、fork 关系，以及可编辑的个人 Next Action、检查项、相关会话和评审门禁。
- **Task Thread** — 当前会话右侧的任务面板，以及会话 Header 快捷入口。
- **继续 / 分支 / 交接** — 打开当前会话；用 `sessions.fork()` 创建真实子会话；或 fork 后标记为 Waiting 交给并行工作流。
- **个人标注层** — 状态覆盖、Next Action、检查项、优先级、分支标签和 alias 都属于你，不会改写对话内容。
- **久未活动自动完成** — 会话空闲时间可从 1 小时到 30 天（默认 14 天），超过阈值会自动移到已完成。手动设为等待可保持打开；在状态里选「自动」可恢复规则。
- **统计页** — 每个对话的实际耗时、墙钟跨度、轮数与 Token 用量（输入 / 缓存读 / 缓存写 / 输出）。图表全部手写 SVG（不引图表库、不发外部请求）：每日 Token 堆叠趋势、每日耗时折线、7×24 活跃热力图、Token 环形图、会话时间轴、KPI 迷你趋势线。新增**金额维度**：缓存命中输入、未命中输入、缓存写入、输出分别计价，高峰与低谷时段分开计费（北京时间周一至周五 09:00–12:00、14:00–18:00 为高峰；夜间、周末与法定节假日按 DeepSeek 半价），并自带可编辑价目表。耗时与 Token 由 Host 半从持久日志折叠计算，通过 `GET /task-deck/stats` 提供（仅本机回环、只返回数字）。

## 安装

### 从 Release 安装包

下载最新 Release 里的 `dsh-task-deck-1.5.0.tgz`，然后让 DSH Agent 执行：

```text
plugin_manager install_bundle /absolute/path/to/dsh-task-deck-1.5.0.tgz
```

刷新 DSH Web GUI。入口会出现在侧边栏底部，靠近「插件」和「自动化任务」。

### 从源码安装

```bash
git clone https://github.com/astephengoo-arch/dsh-task-deck.git
```

然后：

```text
plugin_manager install_bundle /absolute/path/to/dsh-task-deck
```

## 数据来源

| 层级 | 来源 |
|---|---|
| 会话身份、标题、workspace、运行/空闲、最近活动、fork 父会话 | `ctx.sessions.list` |
| 状态覆盖、Next Action、检查项、优先级、分支标签、alias | 浏览器 `localStorage`（`dsh.taskDeck.annotations.v1`） |
| 继续会话 | `ctx.uiWorkspace.openSession(sessionId)` |
| 分支 / 交接 | `ctx.sessions.fork({ sessionId, increaseTitle: true })` |

Task Deck 不复制对话正文。`Active` 是实时运行事实：Agent 在跑时显示 Active，停止后自动回到 Waiting（或你手动标记的 Blocked / Review / Done）。

`Done` 可以是手动或自动。自动完成依据最近活动时间：非运行中的会话如果超过设定空闲时间且没有手动状态，就自动变为已完成。手动设为等待可以保持打开；在状态下拉里选「自动」可恢复自动规则。

## 环境要求

- DSH `>= 0.2.1-rc.5`
- 支持 `sidebarRightTabs` 和 `sidebarRight` 的 Web / Desktop Client

## 开发

插件是纯 JavaScript，没有构建步骤。

```bash
node --check client.js
node --check index.js
```

设计说明：[docs/DESIGN.md](docs/DESIGN.md)。发布说明：[docs/PUBLISHING.md](docs/PUBLISHING.md)。

## 隐私

- 读取 DSH 会话元数据（标题、ID、workspace、运行状态、fork 关系）。
- 只把个人标注保存在浏览器 `localStorage`。
- 不上传对话、不接分析服务、不发起外部网络请求。

[![Listed on dsh-plugin.org](https://dsh-plugin.org/badges/listed.svg)](https://dsh-plugin.org/plugins/astephengoo-arch/dsh-task-deck)

<img width="3380" height="1840" alt="image" src="https://github.com/user-attachments/assets/6d22b22b-b99c-4d85-9611-f3ef6f1311ae" />

## License

MIT
