# Task Deck

[中文](README.zh.md) · English

**Task Deck is a personal mission control for DSH Desktop.** It reads the live DSH session catalog, turns every conversation into a task-shaped card, and keeps your attention on the next useful move.

Built for people who run many conversations and branches at once: see what is running, what is waiting on you, what is blocked, and what is ready for review — then continue, fork, or hand off without losing context.

## Features

- **Sidebar entry** — Task Deck in `sidebar.panellist`, with a badge for Blocked + Review.
- **Live Dashboard** — real DSH conversations grouped by state, with search and status filters.
- **Task Detail** — real session title / ID / workspace, running state, fork lineage, an editable personal Next Action, personal checklist, related conversations, review gate.
- **Task Thread** — a right-sidebar tab and conversation-header launcher bound to the current `sessionId`.
- **Continue / Fork / Handoff** — open the current conversation, create a real child session with `sessions.fork()`, or fork-and-mark-waiting for a parallel workflow.
- **Personal annotation layer** — status overrides, Next Action, checks, priority, branch label, and alias are yours; they never rewrite the conversation.
- **Idle auto-complete** — conversations idle from 1 hour to 30 days (default 14 days) move to Done automatically. Manual Waiting keeps one open; choose Auto to return to the rule.
- **Stats page** — per-conversation work time, wall-clock span, turns and token usage (input / cache read / cache write / output). A hand-drawn SVG chart set (no chart library, no external request) adds a stacked daily token trend, a daily work-time line, a 7×24 activity heatmap, a token donut, a conversation timeline and KPI sparklines. A **money dimension** prices cache-hit input, cache-miss input, cache-write and output separately, splits peak from off-peak hours (Beijing time, Mon–Fri 09:00–12:00 and 14:00–18:00 are peak; nights, weekends and statutory holidays are half price for DeepSeek models), and ships an editable price table. Work time and tokens are folded from the durable log by the Host half and served over `GET /task-deck/stats` (loopback only, numbers only).

## Install

### From a release tarball

Download `dsh-task-deck-1.5.0.tgz` from the latest Release, then ask your DSH agent to run:

```text
plugin_manager install_bundle /absolute/path/to/dsh-task-deck-1.5.0.tgz
```

Refresh the DSH Web GUI. The entry appears near the bottom of the sidebar, beside Plugins and Schedules.

### From a source checkout

```bash
git clone https://github.com/astephengoo-arch/dsh-task-deck.git
```

Then:

```text
plugin_manager install_bundle /absolute/path/to/dsh-task-deck
```

## How the data works

| Layer | Source |
|---|---|
| Session identity, title, workspace, running/idle, recent activity, fork parent | `ctx.sessions.list` |
| Status override, Next Action, checklist, priority, branch label, alias | Personal annotations in `localStorage` (`dsh.taskDeck.annotations.v1`) |
| Continue | `ctx.uiWorkspace.openSession(sessionId)` |
| Fork / Handoff | `ctx.sessions.fork({ sessionId, increaseTitle: true })` |

Task Deck never copies transcripts. `Active` is a live runtime fact: a session is Active while its agent is running, and returns to Waiting (or your manual Blocked / Review / Done) when it stops.

`Done` can be manual or automatic. Auto-done is derived from the last activity timestamp: a non-running session with no manual status becomes Done after the configured idle window. Set Waiting manually to keep it open, or choose Auto in the status field to return to the automatic rule.

## Requirements

- DSH `>= 0.2.1-rc.5`
- Web/Desktop Client with `sidebarRightTabs` and `sidebarRight`

## Development

The plugin is plain JavaScript and has no build step.

```bash
node --check client.js
node --check index.js
```

Design notes: [docs/DESIGN.md](docs/DESIGN.md). Publishing notes: [docs/PUBLISHING.md](docs/PUBLISHING.md). Handoff notes: [docs/HANDOFF.md](docs/HANDOFF.md).

## Privacy

- Reads DSH session metadata (title, id, workspace, running state, fork relation).
- Stores only personal annotations in browser `localStorage`.
- No transcript upload, no analytics, no external network calls.

<img width="3380" height="1840" alt="image" src="https://github.com/user-attachments/assets/6da077ea-be71-4d16-a081-751ab2a6e25a" />


[![Listed on dsh-plugin.org](https://dsh-plugin.org/badges/listed.svg)](https://dsh-plugin.org/plugins/astephengoo-arch/dsh-task-deck)


## License

MIT
