# Changelog

## 1.1.2

- Added idle auto-complete: non-running sessions with no manual status become Done after 7/14/30 days (default 14).
- Added an Auto-complete setting in the Dashboard catalog card.
- Auto-done is derived from the last activity timestamp, so new activity revives the session automatically.
- Manual Waiting keeps a session open; the new Auto status option clears the manual override.
- Added auto-done notices and a Reopen as Waiting action in Task Detail and Task Thread.
- Auto-done sessions are searchable and listed under the Done filter.

## 1.1.1

- Made `Active` a live runtime fact derived only from `summary.running`.
- Stopped persisting `active` when continuing or forking a session.
- Cleaned legacy persisted `active` annotations on load.
- Removed `Active` from manual status choices; manual choices are Waiting / Blocked / Review / Done.
- Fixed primary button text color being overridden by the generic button reset.
- Removed remaining demo-progress fields.

## 1.1.0

- Replaced demo tasks with the live DSH session catalog (`ctx.sessions.list`).
- Added a personal annotation layer for status, Next Action, checks, priority, branch label and alias.
- Continue now opens the real conversation through `ctx.uiWorkspace.openSession()`.
- Branch / Handoff now create real child sessions through `ctx.sessions.fork()`.
- Thread Panel now binds to the current `sessionId` instead of the previously selected task.
- Added real fork lineage to Task Detail.
- Added bilingual README and plugin metadata.

## 1.0.0

- Initial Task Deck UI prototype: sidebar entry, dashboard, task detail, thread panel and a three-step branch flow.
- Used local demo task data for visual evaluation.
