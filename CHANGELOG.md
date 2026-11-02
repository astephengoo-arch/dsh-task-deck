# Changelog

## 1.1.6

- The conversation-header launcher always renders, even before the task list has resolved; with no task it opens the Task Deck panel instead of drawing nothing.

## 1.1.5

- Fixed the conversation-header Task Deck icon disappearing: the launcher no longer hides behind the optional right-sidebar services, and the right-pane tab type retries for 20s instead of being skipped when `sidebarRightTabs` mounts after this plugin.
- Fixed the list losing the conversation title (rows fell back to the raw `session-…` id): titles now read the `title` projection cell, request `refreshProjections` for sessions whose title has not loaded, and show a short `#key` instead of the full id.
- Rows show `Reading title…` while a title is still loading, and the workspace path in the title tooltip.

## 1.1.4

- Expanded idle auto-complete thresholds to hour-level options: 1h, 3h, 6h, 12h, 1d, 3d, 7d, 14d, 30d, Never.
- Migrated the previous `autoDoneDays` setting to `autoDoneHours`.
- Default remains 14 days (336 hours).
- Auto-done notices now use the same human-readable duration as the selector.

## 1.1.3

- Moved the Auto-complete threshold control from the low right rail into the task filter bar, so it is visible without scrolling and stays available on narrow layouts.
- Kept the control visible when the right rail is hidden; the sort label collapses first on small screens.

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
