window.__ModuleLoader__.load({
  id: '@local/dsh-task-deck',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const PACKAGE = '@local/dsh-task-deck';
    const PANEL_ID = 'task-deck';
    const TAB_KIND = 'task-deck-thread';
    const NS = 'taskDeck';

    const EN = {
      'panel.label': 'Task Deck',
      'dashboard.eyebrow': 'PERSONAL WORKSPACE',
      'dashboard.title': 'Task Deck',
      'dashboard.subtitle': 'One calm place for every task, branch and conversation.',
      'dashboard.focus': 'Today’s focus',
      'dashboard.focusHint': 'Clear the blocker first, then push two active branches toward review.',
      'dashboard.active': 'Active',
      'dashboard.waiting': 'Waiting',
      'dashboard.blocked': 'Blocked',
      'dashboard.review': 'In review',
      'dashboard.overview': 'Overview',
      'dashboard.all': 'All tasks',
      'dashboard.reviewQueue': 'Review queue',
      'dashboard.insights': 'Stats',
      'insights.rangeAll': 'All time',
      'insights.range7': 'Last 7 days',
      'insights.range30': 'Last 30 days',
      'insights.refresh': 'Recalculate',
      'insights.refreshing': 'Calculating…',
      'insights.updatedAt': 'Updated {time}',
      'insights.error': 'Work-time stats are unavailable. Install the updated plugin on a host running the web server, then reload.',
      'insights.sessions': 'Conversations',
      'insights.runningHint': '{n} running now',
      'insights.totalTokens': 'Total tokens',
      'insights.measuredHint': '{n} measured',
      'insights.totalWork': 'Work time',
      'insights.workHint': 'Model and tool turns only',
      'insights.totalTurns': 'Turns',
      'insights.avgTurn': '{value} per turn',
      'insights.noData': 'No data yet',
      'insights.composition': 'Token composition',
      'insights.compositionHint': 'Cache reads dominate long conversations; output is what the model wrote.',
      'insights.cacheRead': 'Cache read',
      'insights.input': 'Input',
      'insights.output': 'Output',
      'insights.cacheWrite': 'Cache write',
      'insights.byTask': 'By conversation',
      'insights.sortTokens': 'Tokens',
      'insights.sortWork': 'Work time',
      'insights.sortTurns': 'Turns',
      'insights.sortRecent': 'Recent',
      'insights.colTask': 'Conversation',
      'insights.colTurns': 'Turns',
      'insights.colWork': 'Work',
      'insights.colSpan': 'Span',
      'insights.colTokens': 'Tokens',
      'insights.empty': 'No conversations in this range.',
      'insights.loading': 'Reading…',
      'insights.partial': '{n} conversation(s) could not be measured yet.',
      'insights.workspaces': 'By workspace',
      'insights.trend': 'Token trend',
      'insights.trendHint': 'Daily provider-reported usage, stacked by class. Click a legend entry to mute it.',
      'insights.workTrend': 'Daily work time',
      'insights.workTrendHint': 'Closed turns only; an open turn counts up to now.',
      'insights.heatmap': 'When you work',
      'insights.heatmapHint': 'Tokens by weekday and hour, in your time zone.',
      'insights.timeline': 'Conversation timeline',
      'insights.expand': 'Show more',
      'insights.collapse': 'Show less',
      'insights.totalShort': 'total',
      'insights.holidaysCount': '{n} holiday days',
      'pricing.peakDays': 'Peak weekdays',
      'pricing.peakWindows': 'Peak hours',
      'pricing.addWindow': 'Add hours',
      'pricing.removeWindow': 'Remove hours',
      'pricing.holidays': 'Holidays (one per line, or start~end)',
      'pricing.offPeakRate': 'Off-peak rate',
      'insights.metric': 'Metric',
      'insights.metricTokens': 'Tokens',
      'insights.metricCost': 'Money',
      'insights.pricing': 'Prices',
      'insights.totalCost': 'Spend',
      'insights.peakShare': '{value} at peak hours',
      'insights.peak': 'Peak and off-peak',
      'insights.peakHours': 'Peak',
      'insights.offPeakHours': 'Off-peak',
      'insights.offPeakWindow': 'Discount window',
      'insights.peakChart': 'Hourly spend',
      'insights.costTrend': 'Daily spend',
      'insights.colCost': 'Cost',
      'insights.sortCost': 'Cost',
      'pricing.title': 'Price table',
      'pricing.hint': 'Per 1M tokens. Defaults are illustrative — replace them with your own rates.',
      'pricing.currency': 'Currency',
      'pricing.offPeak': 'Off-peak from',
      'pricing.until': 'until',
      'pricing.discount': 'Multiplier',
      'pricing.model': 'Model',
      'pricing.add': 'Add',
      'pricing.addModel': 'model id',
      'pricing.remove': 'Remove',
      'pricing.reset': 'Reset',
      'pricing.save': 'Save',
      'dashboard.filterAll': 'All',
      'dashboard.sortUpdated': 'Updated recently',
      'dashboard.search': 'Search tasks, branches, sessions…',
      'dashboard.newBranch': 'New branch',
      'dashboard.nextActions': 'Next actions',
      'dashboard.nextActionsHint': 'The smallest useful move for each task.',
      'dashboard.waitingOn': 'Waiting on',
      'dashboard.waitingHint': 'Blocked elsewhere — do not keep these in your head.',
      'dashboard.taskCount': '{n} tasks',
      'dashboard.groupActive': 'In progress',
      'dashboard.groupWaiting': 'Waiting',
      'dashboard.groupBlocked': 'Blocked',
      'dashboard.groupReview': 'In review',
      'dashboard.groupDone': 'Done',
      'dashboard.noResults': 'No tasks match this view',
      'dashboard.noResultsHint': 'Try another status or clear the search.',
      'dashboard.clear': 'Clear filters',
      'dashboard.continue': 'Continue',
      'dashboard.open': 'Open',
      'dashboard.attention': '{n} need attention',
      'dashboard.allClear': 'All clear',
      'dashboard.progress': 'Progress',
      'dashboard.due': 'Due',
      'dashboard.branch': 'Branch',
      'dashboard.updated': 'Updated',
      'status.active': 'In progress',
      'status.waiting': 'Waiting',
      'status.blocked': 'Blocked',
      'status.review': 'In review',
      'status.done': 'Done',
      'priority.P0': 'P0',
      'priority.P1': 'P1',
      'priority.P2': 'P2',
      'detail.back': 'Back to Task Deck',
      'detail.breadcrumb': 'Task Deck',
      'detail.nextAction': 'Next action',
      'detail.markDone': 'Mark step done',
      'detail.focusSession': 'Open in session',
      'detail.continue': 'Continue task',
      'detail.newBranch': 'New branch',
      'detail.more': 'More actions',
      'detail.description': 'Context',
      'detail.checklist': 'Definition of done',
      'detail.branchMap': 'Branch map',
      'detail.sessions': 'Related conversations',
      'detail.activity': 'Activity',
      'detail.properties': 'Task properties',
      'detail.status': 'Status',
      'detail.priority': 'Priority',
      'detail.owner': 'Owner',
      'detail.sprint': 'Sprint',
      'detail.due': 'Due',
      'detail.workspace': 'Workspace',
      'detail.tags': 'Tags',
      'detail.parent': 'Parent task',
      'detail.children': 'Branches',
      'detail.workTime': 'Work time',
      'detail.tokenUsage': 'Tokens',
      'detail.turns': 'Turns',
      'detail.turnDetail': 'Per-turn cost',
      'detail.turnDetailHint': 'Latest 40 turns',
      'detail.turnPending': 'Per-turn data is not loaded yet.',
      'detail.turnOpen': 'running',
      'detail.cost': 'Spend',
      'detail.none': 'None',
      'detail.progress': 'Complete',
      'detail.reviewGate': 'Review gate',
      'detail.reviewHint': 'All checks complete. Ready for a human review before merge.',
      'detail.reviewRemaining': 'Review unlocks when every check is complete. {n} remaining.',
      'detail.reviewReady': 'Move to review',
      'detail.currentBranch': 'Current branch',
      'detail.openSession': 'Open session',
      'detail.activityEmpty': 'No activity yet.',
      'detail.subtasks': '{n} branches',
      'detail.checksDone': '{done}/{total} done',
      'detail.updated': 'Updated {when}',
      'detail.reason': 'Blocker',
      'thread.title': 'Task Thread',
      'thread.tabTitle': 'Task Thread',
      'thread.subtitle': 'Context pinned to this conversation',
      'thread.currentTask': 'Current task',
      'thread.nextAction': 'Do next',
      'thread.branch': 'Branch',
      'thread.sessions': 'Conversations',
      'thread.currentSession': 'This conversation',
      'thread.noSession': 'No session bound',
      'thread.quickActions': 'Quick actions',
      'thread.openDetail': 'Task detail',
      'thread.continue': 'Continue',
      'thread.branchAction': 'Branch',
      'thread.progress': 'Progress',
      'thread.unlinked': 'Open a task from Task Deck to pin it here.',
      'thread.blocker': 'Blocked',
      'thread.checks': 'Checks',
      'thread.review': 'Ready for review',
      'thread.openTaskDeck': 'Open Task Deck',
      'flow.title': 'Start from a task',
      'flow.subtitle': 'Carry the right context into a new conversation or branch.',
      'flow.step1': 'Choose a move',
      'flow.step2': 'Shape the context',
      'flow.step3': 'Start with a prompt',
      'flow.modeContinue': 'Continue task',
      'flow.modeContinueDesc': 'Open this conversation and copy a starter prompt for the composer.',
      'flow.modeBranch': 'New task branch',
      'flow.modeBranchDesc': 'Fork this conversation into a child session with its own Task Deck entry.',
      'flow.modeHandoff': 'Hand off to workflow',
      'flow.modeHandoffDesc': 'Fork and mark the child as waiting for a parallel workflow.',
      'flow.next': 'Continue',
      'flow.back': 'Back',
      'flow.create': 'Create & open',
      'flow.cancel': 'Cancel',
      'flow.source': 'Source task',
      'flow.workspace': 'Workspace',
      'flow.titleField': 'Title',
      'flow.branchName': 'Branch name',
      'flow.agent': 'Agent preset',
      'flow.includeContext': 'Bring with you',
      'flow.includeDescription': 'Task description and Next Action',
      'flow.includeDecisions': 'Recent decisions and activity',
      'flow.includeChecks': 'Checklist state',
      'flow.includeFiles': 'Branch and changed files',
      'flow.prompt': 'Starter prompt',
      'flow.promptHint': 'This becomes the first message in the new conversation.',
      'flow.summary': 'Summary',
      'flow.summaryMode': 'Mode',
      'flow.summaryBase': 'Base task',
      'flow.summaryDestination': 'Destination',
      'flow.summaryContext': 'Context',
      'flow.summaryItems': '{n} items',
      'flow.created': 'Branch created and pinned to Task Deck.',
      'flow.continued': 'New conversation added to the task.',
      'flow.handoff': 'Handoff task created and waiting.',
      'flow.newBranchTitle': '{title} · branch',
      'flow.continueTitle': '{title} · continued',
      'flow.handoffTitle': '{title} · handoff',
      'flow.suggest1': 'Read the task context, summarize what is done, then start from the Next Action.',
      'flow.suggest2': 'Review the current branch for risks and propose the next concrete change.',
      'flow.suggest3': 'Write an implementation plan for the remaining work and wait for my approval.',
      'toast.openSessionFirst': 'Open a conversation first, then try again.',
      'toast.threadOpened': 'Task Thread opened in this conversation.',
      'toast.stepDone': 'Nice — the next action moved forward.',
      'toast.reviewMoved': 'Task moved to review.',
      'common.cancel': 'Cancel',
      'common.close': 'Close',
      'common.done': 'Done',
      'common.task': 'Task',
      'common.you': 'You',
      'common.checks': 'checks',
      'common.min': 'min',
      'common.system': 'System',
      'time.justNow': 'just now',
      'time.minutesAgo': '{n}m ago',
      'time.hoursAgo': '{n}h ago',
      'time.daysAgo': '{n}d ago',
      'time.unknown': '—',
      'dashboard.running': 'Running',
      'dashboard.idle': 'Ready',
      'dashboard.blank': 'New',
      'dashboard.sessions': 'Sessions',
      'dashboard.runningNow': 'Running now',
      'dashboard.totalSessions': 'Total conversations',
      'dashboard.workspaces': 'Workspaces',
      'dashboard.loadingSessions': 'Loading conversations…',
      'dashboard.sessionModel': 'Live conversation catalog',
      'dashboard.sessionModelHint': 'Read directly from your DSH sessions.',
      'dashboard.noSessions': 'No conversations yet',
      'dashboard.noSessionsHint': 'Start a conversation from the sidebar; it will appear here automatically.',
      'session.blank': 'New conversation',
      'auto.title': 'Auto-complete',
      'auto.hint': 'Conversations idle beyond this window move to Done based on their last activity. Set Waiting to keep one open; choose Auto in status to return to this rule.',
      'auto.after': 'Idle after',
      'auto.days': '{n} days',
      'auto.dayOne': '1 day',
      'auto.hours': '{n} hours',
      'auto.hourOne': '1 hour',
      'auto.never': 'Never',
      'auto.doneLabel': 'Auto-completed after {duration} without activity.',
      'auto.reopen': 'Reopen as Waiting',
      'auto.manual': 'Kept open manually',
      'auto.doneShort': 'Auto-done',
      'auto.statusAuto': 'Auto (from activity)',
      'session.untitled': 'Untitled conversation',
      'session.titleLoading': 'Reading title…',
      'session.noWorkspace': 'No workspace',
      'session.conversation': 'Conversation',
      'session.nextBlank': 'Start this conversation with a concrete request',
      'session.nextRunning': 'Wait for the current turn, then review the result',
      'session.nextContinue': 'Open the conversation and continue from the latest context',
      'session.activityRunning': 'Agent is running in this session.',
      'session.activityIdle': 'Session is idle and ready to continue.',
      'session.activityFork': 'Forked from a parent conversation.',
      'session.noForks': 'No forks yet.',
      'session.forkedFrom': 'Forked from {title}',
      'detail.markReview': 'Mark for review',
      'detail.session': 'Session',
      'detail.lastActivity': 'Last activity',
      'detail.realTitle': 'Real session title',
      'detail.sessionDescription': 'This is a real DSH conversation. Task Deck keeps your personal Next Action and checks alongside it; it never copies the transcript.',
      'detail.sessionId': 'Session ID',
      'detail.running': 'Running now',
      'detail.idle': 'Idle',
      'detail.forks': 'Forks',
      'detail.related': 'Related conversations',
      'detail.noRelated': 'No forks yet. Create one from the session menu or the branch flow.',
      'detail.noChecks': 'No checks yet. Add the first outcome you need.',
      'detail.addCheck': 'Add check',
      'detail.addCheckPlaceholder': 'Add a concrete check…',
      'toast.statusUpdated': 'Status updated.',
      'detail.reviewNoChecks': 'No checks yet. You can still move this session to review.',
      'flow.alias': 'Task alias',
      'flow.aliasHint': 'Shown in Task Deck only; the session title stays unchanged.',
      'flow.forkInherit': 'Fork copies the full conversation through its latest completed turn.',
      'flow.working': 'Forking…',
      'flow.error': 'Could not create the branch: {message}',
      'flow.copyHint': 'The starter prompt is copied to your clipboard so you can paste it into the composer.',
      'flow.forkUnavailable': 'Session fork is unavailable right now.',
      'flow.agentInherit': 'Inherit from source session',
      'flow.continueInfo': 'This opens the current conversation. Your starter prompt is copied to the clipboard so you can paste it into the composer.',
      'flow.aliasHintShort': 'Only shown in Task Deck.',
      'dashboard.focusHint': 'Running sessions are active; everything else is waiting for your next move.',
    };

    const ZH = {
      'panel.label': 'Task Deck',
      'dashboard.eyebrow': '个人工作台',
      'dashboard.title': 'Task Deck',
      'dashboard.subtitle': '把任务、分支和会话收在一处，专注当下最重要的一步。',
      'dashboard.focus': '今日聚焦',
      'dashboard.focusHint': '先解阻塞，再把两个进行中的分支推进到评审。',
      'dashboard.active': '进行中',
      'dashboard.waiting': '等待',
      'dashboard.blocked': '阻塞',
      'dashboard.review': '待评审',
      'dashboard.overview': '总览',
      'dashboard.all': '全部任务',
      'dashboard.reviewQueue': '评审队列',
      'dashboard.insights': '统计',
      'insights.rangeAll': '全部',
      'insights.range7': '近 7 天',
      'insights.range30': '近 30 天',
      'insights.refresh': '重新计算',
      'insights.refreshing': '计算中…',
      'insights.updatedAt': '更新于 {time}',
      'insights.error': '耗时统计暂不可用。请在运行 Web 服务的主机上更新插件后重新加载。',
      'insights.sessions': '会话数',
      'insights.runningHint': '{n} 个正在运行',
      'insights.totalTokens': 'Token 总量',
      'insights.measuredHint': '{n} 个已统计',
      'insights.totalWork': '总耗时',
      'insights.workHint': '仅模型与工具轮次',
      'insights.totalTurns': '总轮数',
      'insights.avgTurn': '平均每轮 {value}',
      'insights.noData': '暂无数据',
      'insights.composition': 'Token 构成',
      'insights.compositionHint': '长对话以缓存读取为主，输出才是模型真正写出的内容。',
      'insights.cacheRead': '缓存读取',
      'insights.input': '输入',
      'insights.output': '输出',
      'insights.cacheWrite': '缓存写入',
      'insights.byTask': '各会话明细',
      'insights.sortTokens': 'Token',
      'insights.sortWork': '耗时',
      'insights.sortTurns': '轮数',
      'insights.sortRecent': '最近',
      'insights.colTask': '会话',
      'insights.colTurns': '轮数',
      'insights.colWork': '耗时',
      'insights.colSpan': '跨度',
      'insights.colTokens': 'Token',
      'insights.empty': '这个时间范围内没有会话。',
      'insights.loading': '读取中…',
      'insights.partial': '还有 {n} 个会话未能计算。',
      'insights.workspaces': '按工作区',
      'insights.trend': 'Token 趋势',
      'insights.trendHint': '按天堆叠的 provider 上报用量，点图例可隐藏某一类。',
      'insights.workTrend': '每日耗时',
      'insights.workTrendHint': '只统计已闭合的轮次，进行中的轮次计到此刻。',
      'insights.heatmap': '活跃时段',
      'insights.heatmapHint': '按星期与小时统计的 Token（按你的时区）。',
      'insights.timeline': '会话时间轴',
      'insights.expand': '展开更多',
      'insights.collapse': '收起',
      'insights.totalShort': '合计',
      'insights.holidaysCount': '{n} 天节假日',
      'pricing.peakDays': '高峰工作日',
      'pricing.peakWindows': '高峰时段',
      'pricing.addWindow': '加时段',
      'pricing.removeWindow': '删除时段',
      'pricing.holidays': '节假日（每行一个日期，或 起~止）',
      'pricing.offPeakRate': '低谷系数',
      'insights.metric': '口径',
      'insights.metricTokens': 'Token',
      'insights.metricCost': '金额',
      'insights.pricing': '价目',
      'insights.totalCost': '总花费',
      'insights.peakShare': '高峰时段占 {value}',
      'insights.peak': '高峰与低谷',
      'insights.peakHours': '高峰',
      'insights.offPeakHours': '低谷',
      'insights.offPeakWindow': '优惠时段',
      'insights.peakChart': '每小时花费',
      'insights.costTrend': '每日花费',
      'insights.colCost': '金额',
      'insights.sortCost': '金额',
      'pricing.title': '价目表',
      'pricing.hint': '单位：每 100 万 token。默认值仅为示例，请按你的实际价目修改。',
      'pricing.currency': '币种',
      'pricing.offPeak': '低谷开始',
      'pricing.until': '结束',
      'pricing.discount': '折扣系数',
      'pricing.model': '模型',
      'pricing.add': '添加',
      'pricing.addModel': '模型 id',
      'pricing.remove': '删除',
      'pricing.reset': '恢复默认',
      'pricing.save': '保存',
      'dashboard.filterAll': '全部',
      'dashboard.sortUpdated': '最近更新',
      'dashboard.search': '搜索任务、分支或会话…',
      'dashboard.newBranch': '新建分支',
      'dashboard.nextActions': '下一步',
      'dashboard.nextActionsHint': '每个任务最小、最有用的一步。',
      'dashboard.waitingOn': '等待中',
      'dashboard.waitingHint': '卡在别处的事，不必一直占用注意力。',
      'dashboard.taskCount': '{n} 个任务',
      'dashboard.groupActive': '进行中',
      'dashboard.groupWaiting': '等待中',
      'dashboard.groupBlocked': '阻塞',
      'dashboard.groupReview': '待评审',
      'dashboard.groupDone': '已完成',
      'dashboard.noResults': '没有匹配的任务',
      'dashboard.noResultsHint': '换一个状态，或清空搜索条件。',
      'dashboard.clear': '清空筛选',
      'dashboard.continue': '继续',
      'dashboard.open': '打开',
      'dashboard.attention': '{n} 个需要关注',
      'dashboard.allClear': '全部清空',
      'dashboard.progress': '进度',
      'dashboard.due': '截止',
      'dashboard.branch': '分支',
      'dashboard.updated': '更新',
      'status.active': '进行中',
      'status.waiting': '等待',
      'status.blocked': '阻塞',
      'status.review': '待评审',
      'status.done': '已完成',
      'priority.P0': 'P0',
      'priority.P1': 'P1',
      'priority.P2': 'P2',
      'detail.back': '返回 Task Deck',
      'detail.breadcrumb': 'Task Deck',
      'detail.nextAction': '下一步行动',
      'detail.markDone': '完成这一步',
      'detail.focusSession': '在会话中打开',
      'detail.continue': '继续任务',
      'detail.newBranch': '新建分支',
      'detail.more': '更多操作',
      'detail.description': '任务上下文',
      'detail.checklist': '完成标准',
      'detail.branchMap': '分支关系',
      'detail.sessions': '相关会话',
      'detail.activity': '动态',
      'detail.properties': '任务属性',
      'detail.status': '状态',
      'detail.priority': '优先级',
      'detail.owner': '处理人',
      'detail.sprint': '迭代',
      'detail.due': '截止',
      'detail.workspace': '工作区',
      'detail.tags': '标签',
      'detail.parent': '上级任务',
      'detail.children': '分支',
      'detail.workTime': '耗时',
      'detail.tokenUsage': 'Token',
      'detail.turns': '轮数',
      'detail.turnDetail': '每轮耗时',
      'detail.turnDetailHint': '最近 40 轮',
      'detail.turnPending': '还没有读取到逐轮数据。',
      'detail.turnOpen': '进行中',
      'detail.cost': '花费',
      'detail.none': '无',
      'detail.progress': '完成度',
      'detail.reviewGate': '评审门禁',
      'detail.reviewHint': '检查项已全部完成，可以进入人工评审。',
      'detail.reviewRemaining': '完成全部检查项后进入评审，还剩 {n} 项。',
      'detail.reviewReady': '移到待评审',
      'detail.currentBranch': '当前分支',
      'detail.openSession': '打开会话',
      'detail.activityEmpty': '暂无动态。',
      'detail.subtasks': '{n} 个分支',
      'detail.checksDone': '{done}/{total} 已完成',
      'detail.updated': '{when}更新',
      'detail.reason': '阻塞原因',
      'thread.title': 'Task Thread',
      'thread.tabTitle': 'Task Thread',
      'thread.subtitle': '与当前会话绑定的任务上下文',
      'thread.currentTask': '当前任务',
      'thread.nextAction': '下一步',
      'thread.branch': '分支',
      'thread.sessions': '会话',
      'thread.currentSession': '当前会话',
      'thread.noSession': '未绑定会话',
      'thread.quickActions': '快捷操作',
      'thread.openDetail': '任务详情',
      'thread.continue': '继续',
      'thread.branchAction': '分支',
      'thread.progress': '进度',
      'thread.unlinked': '从 Task Deck 打开一个任务，即可固定在这里。',
      'thread.blocker': '阻塞',
      'thread.checks': '检查项',
      'thread.review': '可进入评审',
      'thread.openTaskDeck': '打开 Task Deck',
      'flow.title': '从任务开始',
      'flow.subtitle': '把正确的上下文带进新会话或新分支。',
      'flow.step1': '选择方式',
      'flow.step2': '组织上下文',
      'flow.step3': '用一句话开始',
      'flow.modeContinue': '继续任务',
      'flow.modeContinueDesc': '打开当前会话，并把起始 Prompt 复制到输入框。',
      'flow.modeBranch': '新建任务分支',
      'flow.modeBranchDesc': 'Fork 出一个子会话，并生成独立的 Task Deck 条目。',
      'flow.modeHandoff': '交给工作流',
      'flow.modeHandoffDesc': 'Fork 子会话，并标记为等待并行工作流。',
      'flow.next': '继续',
      'flow.back': '上一步',
      'flow.create': '创建并打开',
      'flow.cancel': '取消',
      'flow.source': '来源任务',
      'flow.workspace': '工作区',
      'flow.titleField': '标题',
      'flow.branchName': '分支名',
      'flow.agent': 'Agent 预设',
      'flow.includeContext': '一并带上',
      'flow.includeDescription': '任务描述与 Next Action',
      'flow.includeDecisions': '最近决策与动态',
      'flow.includeChecks': '检查项进度',
      'flow.includeFiles': '分支与改动文件',
      'flow.prompt': '起始 Prompt',
      'flow.promptHint': '它会成为新会话里的第一条消息。',
      'flow.summary': '摘要',
      'flow.summaryMode': '方式',
      'flow.summaryBase': '基础任务',
      'flow.summaryDestination': '目标',
      'flow.summaryContext': '上下文',
      'flow.summaryItems': '{n} 项',
      'flow.created': '分支已创建，并固定到 Task Deck。',
      'flow.continued': '已为任务添加一段新会话。',
      'flow.handoff': '交接任务已创建，等待工作流接管。',
      'flow.newBranchTitle': '{title} · 分支',
      'flow.continueTitle': '{title} · 继续',
      'flow.handoffTitle': '{title} · 交接',
      'flow.suggest1': '先读取任务上下文，总结已完成和未完成的部分，从 Next Action 继续。',
      'flow.suggest2': '检查当前分支的改动，指出风险，并给出下一步最具体的修改。',
      'flow.suggest3': '为剩余工作写一份实现计划，等我确认后再开始。',
      'toast.openSessionFirst': '请先打开一个会话，再试一次。',
      'toast.threadOpened': 'Task Thread 已在当前会话打开。',
      'toast.stepDone': '很好，下一步已经向前推进。',
      'toast.reviewMoved': '任务已移到待评审。',
      'common.cancel': '取消',
      'common.close': '关闭',
      'common.done': '完成',
      'common.task': '任务',
      'common.you': '你',
      'common.checks': '项检查',
      'common.min': '分钟',
      'common.system': '系统',
      'time.justNow': '刚刚',
      'time.minutesAgo': '{n} 分钟前',
      'time.hoursAgo': '{n} 小时前',
      'time.daysAgo': '{n} 天前',
      'time.unknown': '—',
      'dashboard.running': '运行中',
      'dashboard.idle': '待继续',
      'dashboard.blank': '未开始',
      'dashboard.sessions': '会话',
      'dashboard.runningNow': '正在运行',
      'dashboard.totalSessions': '会话总数',
      'dashboard.workspaces': '工作区',
      'dashboard.loadingSessions': '正在载入会话…',
      'dashboard.sessionModel': '实时会话目录',
      'dashboard.sessionModelHint': '直接读取你的 DSH 会话，不再使用演示任务。',
      'dashboard.noSessions': '还没有会话',
      'dashboard.noSessionsHint': '从侧边栏开始一段对话，它会自动出现在这里。',
      'session.blank': '新会话',
      'auto.title': '自动完成',
      'auto.hint': '超过这个时间没有活动的对话，会按最近活动自动移到已完成。设为等待可保持打开；在状态里选「自动」可恢复此规则。',
      'auto.after': '空闲超过',
      'auto.days': '{n} 天',
      'auto.dayOne': '1 天',
      'auto.hours': '{n} 小时',
      'auto.hourOne': '1 小时',
      'auto.never': '从不',
      'auto.doneLabel': '超过 {duration} 没有活动，已自动标记为完成。',
      'auto.reopen': '重新打开为等待',
      'auto.manual': '已手动保持打开',
      'auto.doneShort': '自动完成',
      'auto.statusAuto': '自动（按活动判断）',
      'session.untitled': '未命名会话',
      'session.titleLoading': '标题读取中…',
      'session.noWorkspace': '未绑定工作区',
      'session.conversation': '会话',
      'session.nextBlank': '用一个具体请求开始这段对话',
      'session.nextRunning': '等待当前回合完成，然后查看结果',
      'session.nextContinue': '打开会话，从最新上下文继续',
      'session.activityRunning': 'Agent 正在这个会话中运行。',
      'session.activityIdle': '会话空闲，等待继续。',
      'session.activityFork': '从父会话派生。',
      'session.noForks': '暂无分支。',
      'session.forkedFrom': '派生自 {title}',
      'detail.markReview': '标记待评审',
      'detail.session': '会话',
      'detail.lastActivity': '最近活动',
      'detail.realTitle': '真实会话标题',
      'detail.sessionDescription': '这是一段真实的 DSH 会话。Task Deck 只在你身边保存个人 Next Action 和检查项，不复制对话正文。',
      'detail.sessionId': '会话 ID',
      'detail.running': '正在运行',
      'detail.idle': '空闲',
      'detail.forks': '分支',
      'detail.related': '相关会话',
      'detail.noRelated': '暂无分支。可在会话菜单或分支流程中创建一个。',
      'detail.noChecks': '还没有检查项。先添加一个需要交付的结果。',
      'detail.addCheck': '添加检查项',
      'detail.addCheckPlaceholder': '添加一个具体检查项…',
      'toast.statusUpdated': '状态已更新。',
      'detail.reviewNoChecks': '暂无检查项，也可以直接标记为待评审。',
      'flow.alias': '任务别名',
      'flow.aliasHint': '只显示在 Task Deck，不改动真实会话标题。',
      'flow.forkInherit': 'Fork 会继承截至最近完成回合的完整会话历史。',
      'flow.working': '正在创建分支…',
      'flow.error': '创建分支失败：{message}',
      'flow.copyHint': '起始 Prompt 会复制到剪贴板，方便你直接粘贴到输入框。',
      'flow.forkUnavailable': '当前无法创建会话分支。',
      'flow.agentInherit': '继承源会话',
      'flow.continueInfo': '这会打开当前会话。起始 Prompt 会复制到剪贴板，你可以直接粘贴到输入框。',
      'flow.aliasHintShort': '只显示在 Task Deck。',
      'dashboard.focusHint': '正在运行的会话是活跃项，其余都在等你决定下一步。',
    };

    const STATUS_ORDER = ['active', 'waiting', 'blocked', 'review', 'done'];
    const STATUS_TOKEN = {
      active: 'var(--dsw-alias-state-success-primary)',
      waiting: 'var(--dsw-alias-state-warn-primary)',
      blocked: 'var(--dsw-alias-state-error-primary)',
      review: 'var(--dsw-alias-brand-primary)',
      done: 'var(--dsw-alias-state-idle-primary)',
    };
    const STATUS_KEY = {
      active: 'status.active',
      waiting: 'status.waiting',
      blocked: 'status.blocked',
      review: 'status.review',
      done: 'status.done',
    };
    const PRIORITY_TOKEN = {
      P0: 'var(--dsw-alias-state-error-primary)',
      P1: 'var(--dsw-alias-state-warn-primary)',
      P2: 'var(--dsw-alias-state-idle-primary)',
    };

    function fmt(text, vars) {
      return String(text).replace(/\{(\w+)\}/g, (match, key) => (
        vars && vars[key] !== undefined ? String(vars[key]) : match
      ));
    }

    function statusStyle(status) {
      return { '--td-status': STATUS_TOKEN[status] || STATUS_TOKEN.active };
    }

    function priorityStyle(priority) {
      return { '--td-priority': PRIORITY_TOKEN[priority] || PRIORITY_TOKEN.P2 };
    }

    const ANNOTATION_KEY = 'dsh.taskDeck.annotations.v1';
    const SETTINGS_KEY = 'dsh.taskDeck.settings.v1';
    const STATS_KEY = 'dsh.taskDeck.stats.v1';
    const STATS_PATH = '/task-deck/stats';
    const STATS_BATCH = 8;
    const STATS_CACHE_LIMIT = 120;
    const PRICING_KEY = 'dsh.taskDeck.pricing.v1';
    const PRICE_FIELDS = ['input', 'cacheRead', 'cacheWrite', 'output'];
    // Illustrative defaults: the Stats page lets you replace every number with your own.
    // Peak hours: Beijing time, Monday–Friday excluding statutory holidays, 09:00–12:00 and
    // 14:00–18:00. DeepSeek models pay half price outside that window.
    // Keep in sync with DEFAULT_SCHEDULE in index.js: the client sends this table with every
    // request, so an empty list here would silently remove holidays from the pricing.
    const DEFAULT_SCHEDULE = {
      windows: [[540, 720], [840, 1080]],
      weekdays: [1, 2, 3, 4, 5],
      holidays: [
        '2025-01-01',
        '2025-01-28', '2025-01-29', '2025-01-30', '2025-01-31', '2025-02-01', '2025-02-02', '2025-02-03', '2025-02-04',
        '2025-04-04', '2025-04-05', '2025-04-06',
        '2025-05-01', '2025-05-02', '2025-05-03', '2025-05-04', '2025-05-05',
        '2025-05-31', '2025-06-01', '2025-06-02',
        '2025-10-01', '2025-10-02', '2025-10-03', '2025-10-04', '2025-10-05', '2025-10-06', '2025-10-07', '2025-10-08',
        '2026-01-01', '2026-01-02', '2026-01-03',
        '2026-02-16', '2026-02-17', '2026-02-18', '2026-02-19', '2026-02-20', '2026-02-21', '2026-02-22',
        '2026-04-04', '2026-04-05', '2026-04-06',
        '2026-05-01', '2026-05-02', '2026-05-03', '2026-05-04', '2026-05-05',
        '2026-06-19', '2026-06-20', '2026-06-21',
        '2026-09-25', '2026-09-26', '2026-09-27',
        '2026-10-01', '2026-10-02', '2026-10-03', '2026-10-04', '2026-10-05', '2026-10-06', '2026-10-07',
      ],
    };
    const DEFAULT_PRICING = {
      currency: 'CNY',
      unit: 1_000_000,
      default: { input: 2, cacheRead: 0.2, cacheWrite: 0, output: 8, offPeak: 1 },
      models: { 'deepseek-flash': { input: 2, cacheRead: 0.2, cacheWrite: 0, output: 3, offPeak: 0.5 } },
      schedule: DEFAULT_SCHEDULE,
    };
    const AUTO_DONE_HOURS_OPTIONS = [0, 1, 3, 6, 12, 24, 72, 168, 336, 720];
    const DEFAULT_AUTO_DONE_HOURS = 336;
    const EMPTY_LIST = Object.freeze({
      ids: [],
      byId: {},
      phase: 'pending',
      projectionsBySession: {},
    });

    function pathBase(value) {
      if (!value) return '';
      const text = String(value).replace(/[\\/]+$/, '');
      const parts = text.split(/[\\/]/);
      return parts[parts.length - 1] || text;
    }

    // A full session id swamps a 300px row; the tail is what stays unique and readable.
    function shortSessionKey(id) {
      const raw = String(id || '').replace(/^session-/, '');
      return raw.length > 8 ? raw.slice(-8) : raw;
    }

    function tokenNumber(value) {
      return typeof value === 'number' && Number.isFinite(value) && value > 0 ? value : 0;
    }

    // The wire projection names the uncached prompt bucket `uncachedInputTokens`; keep one
    // client shape so the list, the insights table and the detail row all agree.
    function normalizeTokens(usage) {
      const input = tokenNumber(usage && (usage.uncachedInputTokens ?? usage.inputTokens));
      const output = tokenNumber(usage && usage.outputTokens);
      const cacheRead = tokenNumber(usage && usage.cacheReadTokens);
      const cacheWrite = tokenNumber(usage && usage.cacheWriteTokens);
      return {
        input,
        output,
        cacheRead,
        cacheWrite,
        total: input + output + cacheRead + cacheWrite,
      };
    }

    function formatTokens(value) {
      const n = tokenNumber(value);
      if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 0 : 1)}M`;
      if (n >= 1_000) return `${(n / 1_000).toFixed(n >= 10_000 ? 0 : 1)}k`;
      return String(Math.round(n));
    }

    // Durations stay at two units at most: "3s", "4m 12s", "2h 5m", "3d 4h".
    function formatDuration(ms) {
      const value = Math.max(0, Number(ms) || 0);
      if (value < 1000) return `${Math.round(value)}ms`;
      const seconds = Math.round(value / 1000);
      if (seconds < 60) return `${seconds}s`;
      const minutes = Math.floor(seconds / 60);
      const restSeconds = seconds % 60;
      if (minutes < 60) return restSeconds ? `${minutes}m ${restSeconds}s` : `${minutes}m`;
      const hours = Math.floor(minutes / 60);
      const restMinutes = minutes % 60;
      if (hours < 24) return restMinutes ? `${hours}h ${restMinutes}m` : `${hours}h`;
      const days = Math.floor(hours / 24);
      const restHours = hours % 24;
      return restHours ? `${days}d ${restHours}h` : `${days}d`;
    }

    function normalizePriceEntry(raw, fallback) {
      const source = raw && typeof raw === 'object' ? raw : {};
      const out = {};
      for (const field of PRICE_FIELDS) {
        const value = Number(source[field]);
        out[field] = Number.isFinite(value) && value >= 0 ? value : fallback[field];
      }
      const multiplier = Number(source.offPeak);
      out.offPeak = Number.isFinite(multiplier) && multiplier >= 0 && multiplier <= 1
        ? multiplier
        : fallback.offPeak;
      return out;
    }

    function normalizeScheduleInput(raw) {
      const source = raw && typeof raw === 'object' ? raw : {};
      const windows = [];
      const rawWindows = Array.isArray(source.windows) ? source.windows : DEFAULT_SCHEDULE.windows;
      for (const window of rawWindows) {
        if (!Array.isArray(window) || window.length !== 2) continue;
        const start = Number(window[0]);
        const end = Number(window[1]);
        if (!Number.isFinite(start) || !Number.isFinite(end)) continue;
        if (start < 0 || start >= 1440 || end <= 0 || end > 1440 || end <= start) continue;
        windows.push([Math.round(start), Math.round(end)]);
      }
      const weekdays = Array.from(new Set((Array.isArray(source.weekdays) ? source.weekdays : DEFAULT_SCHEDULE.weekdays)
        .map((value) => Number(value))
        .filter((value) => Number.isInteger(value) && value >= 1 && value <= 7))).sort((a, b) => a - b);
      const holidays = (Array.isArray(source.holidays) ? source.holidays : [])
        .filter((value) => typeof value === 'string' && value.trim() !== '')
        .map((value) => value.trim())
        .slice(0, 400);
      return {
        windows: windows.length ? windows : DEFAULT_SCHEDULE.windows,
        weekdays: weekdays.length ? weekdays : DEFAULT_SCHEDULE.weekdays,
        holidays,
      };
    }

    function normalizePricingInput(raw) {
      const source = raw && typeof raw === 'object' ? raw : {};
      const models = {};
      const rows = source.models && typeof source.models === 'object' ? source.models : {};
      for (const [model, entry] of Object.entries(rows)) {
        if (!model || model.length > 120) continue;
        models[model] = normalizePriceEntry(entry, DEFAULT_PRICING.default);
      }
      for (const [model, entry] of Object.entries(DEFAULT_PRICING.models)) {
        if (!models[model]) models[model] = normalizePriceEntry(entry, DEFAULT_PRICING.default);
      }
      return {
        currency: typeof source.currency === 'string' && source.currency ? source.currency.slice(0, 8) : DEFAULT_PRICING.currency,
        unit: DEFAULT_PRICING.unit,
        default: normalizePriceEntry(source.default, DEFAULT_PRICING.default),
        models,
        schedule: normalizeScheduleInput(source.schedule),
      };
    }

    function loadPricing() {
      try {
        const raw = window.localStorage.getItem(PRICING_KEY);
        if (!raw) return normalizePricingInput(DEFAULT_PRICING);
        return normalizePricingInput(JSON.parse(raw));
      } catch (error) {
        return normalizePricingInput(DEFAULT_PRICING);
      }
    }

    function savePricing(pricing) {
      try {
        window.localStorage.setItem(PRICING_KEY, JSON.stringify(pricing));
      } catch (error) {
        /* prices stay in memory for this session */
      }
    }

    function encodePricing(pricing) {
      try {
        const json = JSON.stringify(pricing);
        const bytes = new TextEncoder().encode(json);
        let binary = '';
        for (const byte of bytes) binary += String.fromCharCode(byte);
        return window.btoa(binary);
      } catch (error) {
        return '';
      }
    }

    function moneySymbol(currency) {
      if (currency === 'CNY' || currency === 'RMB') return '¥';
      if (currency === 'USD') return '$';
      if (currency === 'EUR') return '€';
      return `${currency || ''} `;
    }

    function formatMoney(value, currency) {
      const amount = Number(value) || 0;
      const symbol = moneySymbol(currency);
      if (amount === 0) return `${symbol}0`;
      if (amount >= 1000) return `${symbol}${Math.round(amount).toLocaleString()}`;
      if (amount >= 0.1) return `${symbol}${amount.toFixed(2)}`;
      if (amount >= 0.01) return `${symbol}${amount.toFixed(3)}`;
      return `${symbol}${amount.toFixed(4)}`;
    }

    function formatMoneyAxis(value, currency) {
      const amount = Number(value) || 0;
      const symbol = moneySymbol(currency);
      if (amount >= 1000) return `${symbol}${(amount / 1000).toFixed(1)}k`;
      if (amount >= 1) return `${symbol}${amount.toFixed(0)}`;
      if (amount >= 0.01) return `${symbol}${amount.toFixed(2)}`;
      return `${symbol}${amount.toFixed(3)}`;
    }

    function formatMinuteOfDay(minute) {
      const value = Math.max(0, Math.min(1439, Math.round(minute || 0)));
      return `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
    }

    function parseMinuteOfDay(text, fallback) {
      const match = /^(\d{1,2}):(\d{2})$/.exec(String(text || '').trim());
      if (!match) return fallback;
      const hour = Number(match[1]);
      const minute = Number(match[2]);
      if (hour > 23 || minute > 59) return fallback;
      return hour * 60 + minute;
    }

    function timezoneOffset() {
      try {
        return new Date().getTimezoneOffset();
      } catch (error) {
        return 0;
      }
    }

    function loadStatsCache() {
      try {
        const raw = window.localStorage.getItem(STATS_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        if (!parsed || typeof parsed !== 'object' || !parsed.byId) return {};
        // Day/hour buckets are cut in one time zone; a moved user must not see stale ones.
        if (parsed.v !== 2 || parsed.tz !== timezoneOffset()) return {};
        const out = {};
        for (const [id, value] of Object.entries(parsed.byId)) {
          if (!value || typeof value !== 'object') continue;
          if (!Number.isFinite(value.workMs) && !Number.isFinite(value.tokens?.total)) continue;
          out[id] = value;
        }
        return out;
      } catch (error) {
        return {};
      }
    }

    function statsPayload(byId) {
      const entries = Object.entries(byId)
        .filter(([, value]) => value && typeof value === 'object')
        .sort((a, b) => (b[1].computedAt || 0) - (a[1].computedAt || 0))
        .slice(0, STATS_CACHE_LIMIT);
      return { v: 2, tz: timezoneOffset(), byId: Object.fromEntries(entries) };
    }

    function saveStatsCache(byId) {
      try {
        window.localStorage.setItem(STATS_KEY, JSON.stringify(statsPayload(byId)));
      } catch (error) {
        // Quota is usually spent on the day/hour series, so fall back to summary numbers only.
        try {
          const slim = {};
          for (const [id, value] of Object.entries(byId)) {
            if (!value || typeof value !== 'object') continue;
            const { daily, hours, perTurn, ...rest } = value;
            slim[id] = rest;
          }
          window.localStorage.setItem(STATS_KEY, JSON.stringify(statsPayload(slim)));
        } catch (second) {
          /* A storage that refuses both writes must not break the page. */
        }
      }
    }

    function loadAnnotations() {
      try {
        window.localStorage.removeItem('dsh.taskDeck.v3');
      } catch (error) {
        /* The obsolete demo key is best-effort cleanup. */
      }
      try {
        const raw = window.localStorage.getItem(ANNOTATION_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
        const cleaned = {};
        for (const [sessionId, annotation] of Object.entries(parsed)) {
          if (!annotation || typeof annotation !== 'object') continue;
          const next = { ...annotation };
          // `active` is a live runtime fact, never a durable personal status.
          if (next.status === 'active') delete next.status;
          cleaned[sessionId] = next;
        }
        return cleaned;
      } catch (error) {
        return {};
      }
    }

    function saveAnnotations(annotations) {
      try {
        window.localStorage.setItem(ANNOTATION_KEY, JSON.stringify(annotations));
      } catch (error) {
        /* Personal annotations remain usable in memory when storage is unavailable. */
      }
    }

    function autoWindowLabel(hours, t) {
      if (!hours) return t('auto.never');
      if (hours === 24) return t('auto.dayOne');
      if (hours % 24 === 0) return fmt(t('auto.days'), { n: hours / 24 });
      if (hours === 1) return t('auto.hourOne');
      return fmt(t('auto.hours'), { n: hours });
    }

    function loadSettings() {
      try {
        const raw = window.localStorage.getItem(SETTINGS_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        const hours = parsed && Number(parsed.autoDoneHours);
        const legacyDays = parsed && Number(parsed.autoDoneDays);
        const resolved = Number.isFinite(hours) && hours >= 0
          ? hours
          : (Number.isFinite(legacyDays) && legacyDays >= 0 ? legacyDays * 24 : DEFAULT_AUTO_DONE_HOURS);
        return {
          autoDoneHours: AUTO_DONE_HOURS_OPTIONS.includes(resolved) ? resolved : DEFAULT_AUTO_DONE_HOURS,
        };
      } catch (error) {
        return { autoDoneHours: DEFAULT_AUTO_DONE_HOURS };
      }
    }

    function saveSettings(settings) {
      try {
        window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      } catch (error) {
        /* Preferences remain usable in memory when storage is unavailable. */
      }
    }

    function relativeTime(timestamp, t) {
      if (!Number.isFinite(timestamp) || timestamp <= 0) return t('time.unknown');
      const difference = Math.max(0, Date.now() - timestamp);
      if (difference < 60_000) return t('time.justNow');
      const minutes = Math.floor(difference / 60_000);
      if (minutes < 60) return fmt(t('time.minutesAgo'), { n: minutes });
      const hours = Math.floor(minutes / 60);
      if (hours < 24) return fmt(t('time.hoursAgo'), { n: hours });
      const days = Math.floor(hours / 24);
      if (days < 7) return fmt(t('time.daysAgo'), { n: days });
      try {
        return new Date(timestamp).toLocaleDateString();
      } catch (error) {
        return fmt(t('time.daysAgo'), { n: days });
      }
    }

    function defaultNextAction(summary, t) {
      if (summary.blank) return t('session.nextBlank');
      if (summary.running) return t('session.nextRunning');
      return t('session.nextContinue');
    }

    function buildTasks(listSnapshot, annotations, settings, t, now) {
      const list = listSnapshot || EMPTY_LIST;
      const ids = Array.isArray(list.ids) ? list.ids : [];
      const byId = list.byId || {};
      const projections = list.projectionsBySession || {};
      const tasks = [];

      for (const id of ids) {
        const summary = byId[id];
        if (!summary || summary.origin === 'subagent') continue;
        const annotation = annotations[id] || {};
        const workspace = pathBase(summary.cwd);
        // A row's `displayTitle` degrades to the raw id (or the cwd basename) while the durable
        // title projection has not landed, so read the projection cell first and only accept
        // the row title when it actually says something about this conversation.
        const projection = projections[id];
        const projected = (projection && projection.values ? projection.values.title : null)
          || (summary.projectionValues ? summary.projectionValues.title : null);
        const projectedTitle = typeof projected === 'string' ? projected.trim() : '';
        const rowTitle = typeof summary.title === 'string' ? summary.title.trim() : '';
        const displayTitle = typeof summary.displayTitle === 'string' ? summary.displayTitle.trim() : '';
        const placeholder = !displayTitle
          || displayTitle === id
          || displayTitle === `session/${id}`
          || displayTitle === id.replace(/^session-/, '')
          || (workspace && displayTitle === workspace);
        const realTitle = projectedTitle || rowTitle || (placeholder ? '' : displayTitle)
          || `${t('session.untitled')}${workspace ? ` · ${workspace}` : ''}`;
        const titleKnown = !!(projectedTitle || rowTitle || (placeholder ? '' : displayTitle));
        const title = annotation.alias || (
          summary.blank
            ? `${t('session.blank')}${workspace ? ` · ${workspace}` : ''}`
            : realTitle
        );
        const manualStatus = annotation.status
          && annotation.status !== 'active'
          && STATUS_ORDER.includes(annotation.status)
          ? annotation.status
          : null;
        const lastActivity = summary.updatedAt || 0;
        const idleMs = lastActivity > 0 ? Math.max(0, now - lastActivity) : 0;
        const autoDone = !summary.running
          && !manualStatus
          && settings.autoDoneHours > 0
          && lastActivity > 0
          && idleMs >= settings.autoDoneHours * 3_600_000;
        const status = summary.running ? 'active' : (manualStatus || (autoDone ? 'done' : 'waiting'));
        const parentId = summary.parentId || null;
        const forks = [];
        tasks.push({
          id,
          sessionId: id,
          title,
          realTitle,
          titleKnown,
          alias: annotation.alias || '',
          project: 'DSH',
          status,
          priority: annotation.priority || 'P2',
          branch: annotation.branch || `${parentId ? 'fork' : 'main'}/${id.slice(0, 6)}`,
          workspace: workspace || t('session.noWorkspace'),
          workspacePath: summary.cwd || '',
          sprint: t('session.conversation'),
          due: '—',
          updated: relativeTime(summary.updatedAt, t),
          updatedAt: summary.updatedAt || 0,
          autoDone,
          idleDays: Math.floor(idleMs / 86_400_000),
          manualStatus,
          owner: t('common.you'),
          tags: annotation.tags || (parentId ? ['fork'] : []),
          parentId,
          nextAction: annotation.nextAction !== undefined
            ? annotation.nextAction
            : defaultNextAction(summary, t),
          description: annotation.description || '',
          checks: Array.isArray(annotation.checks) ? annotation.checks : [],
          sessions: [],
          children: [],
          activity: [],
          running: !!summary.running,
          blank: !!summary.blank,
          origin: summary.origin || '',
          cwd: summary.cwd || '',
          retainedBy: summary.retainedBy || {},
          tokens: normalizeTokens(
            (projection && projection.values ? projection.values.tokenUsage : null)
            || (summary.projectionValues ? summary.projectionValues.tokenUsage : null),
          ),
          annotation,
          forks,
        });
      }

      const byParent = new Map();
      for (const task of tasks) {
        if (!task.parentId) continue;
        const group = byParent.get(task.parentId) || [];
        group.push(task);
        byParent.set(task.parentId, group);
      }
      for (const task of tasks) {
        task.children = (byParent.get(task.id) || []).sort((a, b) => b.updatedAt - a.updatedAt);
        task.sessions = task.children.map((child) => ({
          id: child.id,
          title: child.title,
          state: child.running ? 'active' : child.status,
          when: child.updated,
        }));
        const activity = [
          {
            who: t('common.system'),
            text: task.running ? t('session.activityRunning') : t('session.activityIdle'),
            when: task.updated,
            kind: 'session',
          },
        ];
        if (task.parentId) {
          activity.push({
            who: t('common.system'),
            text: t('session.activityFork'),
            when: task.updated,
            kind: 'branch',
          });
        }
        task.activity = activity;
      }
      return tasks;
    }

    function createDeckStore(services, t) {
      const sessionList = services.sessions && services.sessions.list;
      let listSnapshot = sessionList && typeof sessionList.getSnapshot === 'function'
        ? sessionList.getSnapshot()
        : EMPTY_LIST;
      let annotations = loadAnnotations();
      let settings = loadSettings();
      let view = 'dashboard';
      let activeTaskId = null;
      let sessionTaskId = null;
      let cached = null;
      let disposed = false;
      let titleTimer = 0;
      const titleRequests = new Set();
      const titleQueue = [];
      const listeners = new Set();
      let pricing = loadPricing();
      let statsById = loadStatsCache();
      let statsSchedule = null;
      let statsStatus = 'idle';
      let statsError = '';
      let statsInflight = null;
      let statsPoll = 0;

      // Rows only carry the durable title once its projection has been read from the Host.
      // Ask for the missing ones (once per session) so the list stops showing raw ids.
      function scheduleTitleRefresh(tasks) {
        if (!services.sessions || typeof services.sessions.refreshProjections !== 'function') return;
        for (const task of tasks) {
          if (task.titleKnown || task.blank || titleRequests.has(task.sessionId)) continue;
          titleRequests.add(task.sessionId);
          titleQueue.push(task.sessionId);
        }
        if (!titleQueue.length || titleTimer) return;
        titleTimer = window.setTimeout(() => {
          titleTimer = 0;
          const batch = titleQueue.splice(0, titleQueue.length);
          let index = 0;
          // Stagger the projection reads: a workspace can hold dozens of unopened sessions.
          function step() {
            if (disposed) return;
            const id = batch[index];
            index += 1;
            if (!id) return;
            try {
              const request = services.sessions.refreshProjections(id);
              if (request && typeof request.catch === 'function') request.catch(() => titleRequests.delete(id));
            } catch (error) {
              titleRequests.delete(id);
            }
            if (index < batch.length) window.setTimeout(step, 90);
          }
          step();
        }, 300);
      }

      const unsubscribe = sessionList && typeof sessionList.subscribe === 'function'
        ? sessionList.subscribe(() => {
          listSnapshot = sessionList.getSnapshot();
          notify();
        })
        : () => {};

      // Work time only exists on the Host (durable header + turn boundaries), so this half
      // batches ids over the same-origin route and keeps the last answer for an instant paint.
      function mergeStats(records) {
        if (!records.length) return;
        const next = { ...statsById };
        for (const record of records) {
          if (!record || typeof record.id !== 'string') continue;
          next[record.id] = record;
        }
        statsById = next;
        saveStatsCache(statsById);
      }

      function requestStats(ids, fresh, detail) {
        let chain = Promise.resolve([]);
        const collected = [];
        const query = [
          `tz=${timezoneOffset()}`,
          `p=${encodePricing(pricing)}`,
          fresh ? 'fresh=1' : '',
          detail ? 'detail=1' : '',
        ].filter(Boolean).join('&');
        for (let index = 0; index < ids.length; index += STATS_BATCH) {
          const chunk = ids.slice(index, index + STATS_BATCH);
          chain = chain.then(() => {
            if (disposed) return undefined;
            const url = `${STATS_PATH}?ids=${encodeURIComponent(chunk.join(','))}&${query}`;
            return window.fetch(url, { headers: { accept: 'application/json' } })
              .then((response) => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
              })
              .then((body) => {
                if (!body || body.ok !== true) throw new Error('bad payload');
                // The Host echoes the billing schedule it actually priced with.
                if (body.schedule) statsSchedule = body.schedule;
                for (const record of body.sessions || []) collected.push(record);
              });
          });
        }
        return chain.then(() => collected);
      }

      function loadStats(options) {
        const opts = options || {};
        if (disposed) return Promise.resolve();
        if (statsInflight) return statsInflight;
        const ids = (cached ? cached.tasks : []).map((task) => task.id).filter(Boolean);
        if (!ids.length) {
          statsStatus = 'ready';
          return Promise.resolve();
        }
        statsStatus = 'loading';
        statsError = '';
        notify();
        const run = requestStats(ids, !!opts.fresh, false)
          .then((records) => {
            const stamped = records.map((record) => ({ ...record, computedAt: Date.now() }));
            mergeStats(stamped);
            statsStatus = 'ready';
          })
          .catch((error) => {
            statsStatus = 'error';
            statsError = String((error && error.message) || error || '');
          })
          .then(() => {
            statsInflight = null;
            notify();
          });
        statsInflight = run;
        return run;
      }

      // Per-turn rows are only needed on one task at a time, so they are fetched on demand
      // and merged into the same record instead of riding along with every list batch.
      function loadTurnDetail(sessionId) {
        if (disposed || !sessionId) return Promise.resolve();
        const existing = statsById[sessionId];
        if (existing && Array.isArray(existing.perTurn)) return Promise.resolve();
        return requestStats([sessionId], false, true)
          .then((records) => {
            const record = records[0];
            if (!record) return;
            const previous = statsById[sessionId] || {};
            mergeStats([{ ...previous, ...record, perTurn: record.perTurn || [], computedAt: Date.now() }]);
            notify();
          })
          .catch(() => {
            /* The detail chart simply stays empty; the rest of the page is unaffected. */
          });
      }

      function rebuild() {
        const tasks = buildTasks(listSnapshot, annotations, settings, t, Date.now());
        const has = (id) => tasks.some((task) => task.id === id);
        if (!has(sessionTaskId)) {
          const running = tasks.find((task) => task.running);
          sessionTaskId = running ? running.id : (tasks[0] ? tasks[0].id : null);
        }
        if (!has(activeTaskId)) activeTaskId = sessionTaskId;
        if (view === 'detail' && !activeTaskId) view = 'dashboard';
        cached = {
          view,
          activeTaskId,
          sessionTaskId,
          tasks,
          phase: listSnapshot.phase || 'pending',
          annotations,
          autoDoneHours: settings.autoDoneHours,
          stats: { byId: statsById, status: statsStatus, error: statsError, schedule: statsSchedule },
          pricing,
        };
        scheduleTitleRefresh(tasks);
        return cached;
      }

      function notify() {
        if (disposed) return;
        rebuild();
        for (const listener of listeners) listener();
      }

      function persistAnnotations(next) {
        annotations = next;
        saveAnnotations(annotations);
        notify();
      }

      function updateAnnotation(taskId, patch) {
        const existing = annotations[taskId] || {};
        persistAnnotations({
          ...annotations,
          [taskId]: { ...existing, ...patch },
        });
      }

      rebuild();

      return {
        getState() {
          return cached || rebuild();
        },
        subscribe(listener) {
          listeners.add(listener);
          return () => listeners.delete(listener);
        },
        dispose() {
          disposed = true;
          unsubscribe();
          listeners.clear();
          if (titleTimer) window.clearTimeout(titleTimer);
          titleTimer = 0;
          titleQueue.length = 0;
          statsInflight = null;
        },
        localeChanged() {
          notify();
        },
        loadStats(options) {
          return loadStats(options);
        },
        loadTurnDetail(sessionId) {
          return loadTurnDetail(sessionId);
        },
        setPricing(next) {
          pricing = normalizePricingInput(next);
          savePricing(pricing);
          // Money is derived from prices, so every cached record is stale now.
          statsById = {};
          saveStatsCache({});
          notify();
          return loadStats({ fresh: true });
        },
        resetPricing() {
          pricing = normalizePricingInput(DEFAULT_PRICING);
          savePricing(pricing);
          statsById = {};
          saveStatsCache({});
          notify();
          return loadStats({ fresh: true });
        },
        refreshStats() {
          return loadStats({ fresh: true });
        },
        openInsights() {
          view = 'insights';
          notify();
          return loadStats();
        },
        setAutoDoneHours(hours) {
          const value = Number(hours);
          settings = {
            ...settings,
            autoDoneHours: AUTO_DONE_HOURS_OPTIONS.includes(value) ? value : DEFAULT_AUTO_DONE_HOURS,
          };
          saveSettings(settings);
          notify();
        },
        openTask(taskId) {
          if (!cached.tasks.some((task) => task.id === taskId)) return;
          view = 'detail';
          activeTaskId = taskId;
          notify();
        },
        backToDashboard() {
          view = 'dashboard';
          notify();
        },
        setSessionTask(taskId) {
          if (!cached.tasks.some((task) => task.id === taskId)) return;
          sessionTaskId = taskId;
          activeTaskId = taskId;
          notify();
        },
        updateNextAction(taskId, nextAction) {
          updateAnnotation(taskId, { nextAction });
        },
        setPriority(taskId, priority) {
          updateAnnotation(taskId, { priority });
        },
        setStatus(taskId, status, label) {
          updateAnnotation(taskId, {
            status,
            activity: [
              { who: t('common.you'), text: `${label || status}`, when: t('time.justNow'), kind: 'status' },
              ...((annotations[taskId] && annotations[taskId].activity) || []),
            ],
          });
        },
        clearStatus(taskId) {
          const existing = annotations[taskId];
          if (!existing) return;
          const next = { ...existing };
          delete next.status;
          persistAnnotations({ ...annotations, [taskId]: next });
        },
        addCheck(taskId, text) {
          const value = String(text || '').trim();
          if (!value) return;
          const existing = (annotations[taskId] && annotations[taskId].checks) || [];
          updateAnnotation(taskId, {
            checks: [...existing, { text: value, done: false }],
          });
        },
        toggleCheck(taskId, index) {
          const existing = (annotations[taskId] && annotations[taskId].checks) || [];
          const checks = existing.map((check, i) => (
            i === index ? { ...check, done: !check.done } : check
          ));
          const done = checks.filter((check) => check.done).length;
          const allDone = checks.length > 0 && done === checks.length;
          updateAnnotation(taskId, {
            checks,
            ...(allDone ? { status: 'review' } : {}),
          });
        },
        completeNext(taskId) {
          const task = cached.tasks.find((item) => item.id === taskId);
          if (!task) return;
          const index = task.checks.findIndex((check) => !check.done);
          if (index >= 0) {
            this.toggleCheck(taskId, index);
            return;
          }
          updateAnnotation(taskId, {
            status: 'review',
            activity: [
              { who: t('common.you'), text: t('detail.markReview'), when: t('time.justNow'), kind: 'status' },
              ...((annotations[taskId] && annotations[taskId].activity) || []),
            ],
          });
        },
        async createFromTask(taskId, payload) {
          const source = cached.tasks.find((task) => task.id === taskId);
          if (!source) throw new Error('Task not found');
          if (payload.mode === 'continue') {
            const prompt = String(payload.prompt || '');
            if (prompt) {
              try {
                if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                  await navigator.clipboard.writeText(prompt);
                }
              } catch (error) {
                /* Clipboard denial must not block navigation. */
              }
            }
            const uiWorkspace = services.getUiWorkspace ? services.getUiWorkspace() : services.uiWorkspace;
            if (uiWorkspace) uiWorkspace.openSession(taskId);
            return taskId;
          }
          if (!services.sessions || typeof services.sessions.fork !== 'function') {
            throw new Error(t('flow.forkUnavailable'));
          }
          const childId = await services.sessions.fork({
            sessionId: taskId,
            increaseTitle: true,
          });
          const prompt = String(payload.prompt || '');
          updateAnnotation(childId, {
            alias: String(payload.title || '').trim() || `${source.title} · ${t('thread.branchAction')}`,
            branch: String(payload.branchName || '').trim() || `fork/${childId.slice(0, 6)}`,
            ...(payload.mode === 'handoff' ? { status: 'waiting' } : {}),
            nextAction: source.nextAction,
            description: prompt,
            tags: ['fork'],
            checks: [],
          });
          if (cached.tasks.some((task) => task.id === childId)) {
            activeTaskId = childId;
            sessionTaskId = childId;
            notify();
          }
          if (prompt) {
            try {
              if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                await navigator.clipboard.writeText(prompt);
              }
            } catch (error) {
              /* Clipboard denial must not fail the fork. */
            }
          }
          const uiWorkspace = services.getUiWorkspace ? services.getUiWorkspace() : services.uiWorkspace;
          if (uiWorkspace) uiWorkspace.openSession(childId);
          return childId;
        },
      };
    }

    function useDeck(store) {
      return React.useSyncExternalStore(
        (listener) => store.subscribe(listener),
        () => store.getState(),
        () => store.getState(),
      );
    }

    function useLocale(ctx) {
      React.useSyncExternalStore(
        (listener) => ctx.locale.subscribe(listener),
        () => ctx.locale.getSnapshot().revision,
        () => 0,
      );
      return ctx.locale.bind(NS);
    }

    const ICONS = {
      deck: [
        ['rect', { x: 3.5, y: 4.5, width: 17, height: 5, rx: 1.7 }],
        ['rect', { x: 5.5, y: 11, width: 13, height: 5, rx: 1.7, opacity: 0.7 }],
        ['path', { d: 'M8.5 18.5h5' }],
      ],
      search: [
        ['circle', { cx: 10.5, cy: 10.5, r: 6.5 }],
        ['path', { d: 'm16 16 4.5 4.5' }],
      ],
      plus: [['path', { d: 'M12 5v14M5 12h14' }]],
      arrowRight: [['path', { d: 'M5 12h14m-5-5 5 5-5 5' }]],
      arrowUpRight: [['path', { d: 'M7 17 17 7M8 7h9v9' }]],
      chevronDown: [['path', { d: 'm6 9 6 6 6-6' }]],
      chevronLeft: [['path', { d: 'm15 6-6 6 6 6' }]],
      more: [
        ['circle', { cx: 5, cy: 12, r: 1.2, fill: 'currentColor', stroke: 'none' }],
        ['circle', { cx: 12, cy: 12, r: 1.2, fill: 'currentColor', stroke: 'none' }],
        ['circle', { cx: 19, cy: 12, r: 1.2, fill: 'currentColor', stroke: 'none' }],
      ],
      branch: [
        ['circle', { cx: 6.5, cy: 5.5, r: 2 }],
        ['circle', { cx: 17.5, cy: 18.5, r: 2 }],
        ['path', { d: 'M6.5 7.5v4a6 6 0 0 0 6 6h3M17.5 9.5v7' }],
        ['circle', { cx: 17.5, cy: 7.5, r: 2 }],
      ],
      play: [['path', { d: 'm9 6 9 6-9 6V6Z' }]],
      message: [['path', { d: 'M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3-.6L4 20l1.6-4.2A7.2 7.2 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z' }]],
      check: [['path', { d: 'm5 12.5 4.2 4.2L19 7' }]],
      clock: [
        ['circle', { cx: 12, cy: 12, r: 8 }],
        ['path', { d: 'M12 7.5V12l3 1.8' }],
      ],
      alert: [
        ['path', { d: 'M12 4 3.8 19h16.4L12 4Z' }],
        ['path', { d: 'M12 9v4.5M12 16.8v.2' }],
      ],
      review: [
        ['path', { d: 'M4.5 5.5h15v13h-15z' }],
        ['path', { d: 'm8 12 2.5 2.5L16.5 9' }],
      ],
      user: [
        ['circle', { cx: 12, cy: 8, r: 3.2 }],
        ['path', { d: 'M5 20a7 7 0 0 1 14 0' }],
      ],
      calendar: [
        ['rect', { x: 4, y: 5.5, width: 16, height: 14, rx: 2.5 }],
        ['path', { d: 'M8 3.5v4M16 3.5v4M4 10h16' }],
      ],
      folder: [['path', { d: 'M3.5 6.5A2.5 2.5 0 0 1 6 4h4l2 2h6.5A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-10Z' }]],
      tag: [
        ['path', { d: 'M4 5.5V12l7.5 7.5L20 11l-6.5-6.5H4Z' }],
        ['circle', { cx: 8, cy: 8, r: 1 }],
      ],
      link: [
        ['path', { d: 'M10 13.5a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7L11 6.8' }],
        ['path', { d: 'M14 10.5a4 4 0 0 0-5.7 0l-2.3 2.3a4 4 0 0 0 5.7 5.7l1.3-1.3' }],
      ],
      close: [['path', { d: 'm6 6 12 12M18 6 6 18' }]],
      filter: [['path', { d: 'M4 6h16M7 12h10M10 18h4' }]],
      spark: [['path', { d: 'M12 3.5 13.7 9l5.3 1.7-5.3 1.8L12 18l-1.7-5.5L5 10.7 10.3 9 12 3.5Z' }]],
      command: [['path', { d: 'M9 9h6v6H9zM9 9H7.5A2.5 2.5 0 1 1 10 6.5V9M15 9h1.5A2.5 2.5 0 1 0 14 6.5V9M9 15H7.5A2.5 2.5 0 1 0 10 17.5V15M15 15h1.5a2.5 2.5 0 1 1-2.5 2.5V15' }]],
      session: [
        ['path', { d: 'M5 5.5h14v10H9l-4 3v-13Z' }],
        ['path', { d: 'M8 9h8M8 12h5' }],
      ],
      terminal: [
        ['rect', { x: 3.5, y: 5, width: 17, height: 14, rx: 2.5 }],
        ['path', { d: 'm7 10 2.5 2L7 14M12.5 14H17' }],
      ],
      target: [
        ['circle', { cx: 12, cy: 12, r: 8 }],
        ['circle', { cx: 12, cy: 12, r: 3.2 }],
      ],
      layers: [
        ['path', { d: 'm12 3 9 5-9 5-9-5 9-5Z' }],
        ['path', { d: 'm3 12 9 5 9-5M3 16l9 5 9-5' }],
      ],
      pause: [['path', { d: 'M9 5v14M15 5v14' }]],
      x: [['path', { d: 'm7 7 10 10M17 7 7 17' }]],
      inbox: [
        ['path', { d: 'M4 5h16l-2 12H6L4 5Z' }],
        ['path', { d: 'M9 11h6' }],
      ],
      refresh: [
        ['path', { d: 'M20 11a8 8 0 1 0-2.3 5.7' }],
        ['path', { d: 'M20 4v7h-7' }],
      ],
    };

    function Icon(props) {
      const name = props.name;
      const size = props.size || 16;
      const nodes = ICONS[name] || [];
      return h(
        'svg',
        {
          width: size,
          height: size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: props.strokeWidth || 1.7,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          'aria-hidden': true,
          focusable: false,
          style: { display: 'block', flex: 'none' },
        },
        nodes.map((node, index) => h(node[0], { key: index, ...node[1] })),
      );
    }

    function StatusChip(props) {
      const t = props.t;
      const status = props.status || 'active';
      return h(
        'span',
        { className: 'td-status-chip', style: statusStyle(status) },
        h('span', { className: 'td-status-dot' }),
        t(STATUS_KEY[status] || STATUS_KEY.active),
      );
    }

    function PriorityChip(props) {
      const priority = props.priority || 'P2';
      return h('span', { className: 'td-priority', style: priorityStyle(priority) }, priority);
    }

    function ProgressBar(props) {
      const value = Math.max(0, Math.min(100, Number(props.value) || 0));
      return h(
        'div',
        { className: 'td-progress', 'aria-label': `${value}%`, role: 'progressbar', 'aria-valuenow': value, 'aria-valuemin': 0, 'aria-valuemax': 100 },
        h('span', { style: { width: `${value}%` } }),
      );
    }

    function EmptyState(props) {
      return h(
        'div',
        { className: 'td-empty' },
        h('div', { className: 'td-empty-icon' }, h(Icon, { name: props.icon || 'search', size: 18 })),
        h('div', { className: 'td-empty-title' }, props.title),
        props.hint ? h('div', { className: 'td-empty-hint' }, props.hint) : null,
        props.action ? props.action : null,
      );
    }

    function Toast(props) {
      return h(
        'div',
        { className: 'td-toast', role: 'status', 'aria-live': 'polite' },
        h('span', { className: 'td-toast-icon' }, h(Icon, { name: 'check', size: 14 })),
        h('span', null, props.message),
      );
    }

    function useFlash() {
      const [message, setMessage] = React.useState('');
      const timer = React.useRef(0);
      React.useEffect(() => () => window.clearTimeout(timer.current), []);
      function flash(next) {
        setMessage(next);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setMessage(''), 2800);
      }
      return [message, flash];
    }

    function TaskRow(props) {
      const t = props.t;
      const task = props.task;
      function activate() {
        props.onOpen(task.id);
      }
      return h(
        'div',
        { className: 'td-row' },
        h(
          'button',
          { type: 'button', className: 'td-row-main td-row-main-btn', onClick: activate },
          h(
            'div',
            { className: 'td-row-top' },
            h('span', { className: 'td-row-dot', style: statusStyle(task.status) }),
            h('span', { className: 'td-key', title: task.id }, `#${shortSessionKey(task.id)}`),
            h('span', { className: 'td-task-title', title: `${task.title}\n${task.workspacePath || task.workspace}` }, task.title),
            task.titleKnown || task.blank || task.alias
              ? null
              : h('span', { className: 'td-title-pending' }, t('session.titleLoading')),
            h(PriorityChip, { priority: task.priority }),
          ),
          h(
            'div',
            { className: 'td-nextline' },
            h(Icon, { name: task.status === 'blocked' ? 'alert' : 'arrowRight', size: 13 }),
            h('span', { className: 'td-next-text' }, task.nextAction),
          ),
        ),
        h(
          'div',
          { className: 'td-row-branch' },
          h('span', { className: 'td-branch-chip', title: task.branch },
            h(Icon, { name: 'branch', size: 12 }),
            h('span', null, task.branch.replace(/^(feat|design)\//, '')),
          ),
        ),
        h(
          'div',
          { className: 'td-row-side' },
          h(
            'span',
            { className: `td-row-state${task.running ? ' is-live' : ''}` },
            h('span', { className: 'td-row-state-dot' }),
            task.running ? t('dashboard.running') : task.blank ? t('dashboard.blank') : t('dashboard.idle'),
          ),
          h(
            'div',
            { className: 'td-row-side-meta' },
            h('span', null, task.updated),
            h(
              'button',
              {
                type: 'button',
                className: 'td-row-continue',
                title: t('dashboard.continue'),
                'aria-label': `${t('dashboard.continue')} ${task.title}`,
                onClick: (event) => {
                  event.stopPropagation();
                  props.onContinue(task.id);
                },
              },
              h(Icon, { name: 'arrowUpRight', size: 14 }),
            ),
          ),
        ),
      );
    }

    function findTask(state, taskId) {
      return state.tasks.find((task) => task.id === taskId);
    }

    function priorityWeight(priority) {
      return priority === 'P0' ? 0 : priority === 'P1' ? 1 : 2;
    }

    function currentTaskOf(state) {
      return findTask(state, state.activeTaskId) || state.tasks[0];
    }

    function BranchNode(props) {
      const task = props.task;
      const t = props.t;
      const current = !!props.current;
      const interactive = !!props.onOpen;
      return h(
        'div',
        {
          className: `td-bnode${current ? ' is-current' : ''}`,
          role: interactive ? 'button' : undefined,
          tabIndex: interactive ? 0 : undefined,
          onClick: interactive ? () => props.onOpen(task.id) : undefined,
          onKeyDown: interactive ? (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              props.onOpen(task.id);
            }
          } : undefined,
        },
        h('span', { className: 'td-bdot' }),
        h(
          'div',
          { className: 'td-bcopy' },
          h(
            'div',
            { className: 'td-btitle' },
            h('span', null, task.title),
            h(PriorityChip, { priority: task.priority }),
          ),
          h(
            'div',
            { className: 'td-bmeta' },
            h('span', null, task.id),
            h('span', { className: 'td-bbranch' }, task.branch),
            h(StatusChip, { status: task.status, t }),
          ),
        ),
      );
    }

    /* ------------------------------------------------------------------ charts */

    function useChartWidth(fallback) {
      const ref = React.useRef(null);
      const [width, setWidth] = React.useState(fallback || 640);
      React.useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;
        function apply(next) {
          if (Number.isFinite(next) && next > 0) setWidth(Math.round(next));
        }
        apply(node.getBoundingClientRect ? node.getBoundingClientRect().width : 0);
        if (typeof window.ResizeObserver !== 'function') return undefined;
        const observer = new window.ResizeObserver((entries) => {
          const rect = entries[0] && entries[0].contentRect;
          if (rect) apply(rect.width);
        });
        observer.observe(node);
        return () => observer.disconnect();
      }, []);
      return [ref, width];
    }

    // Round an axis maximum up to a 1/2/5·10^n step so tick labels stay readable.
    function niceMax(value) {
      const raw = Number(value);
      if (!(raw > 0)) return 1;
      const exponent = Math.floor(Math.log10(raw));
      const base = Math.pow(10, exponent);
      const scaled = raw / base;
      const step = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10;
      return step * base;
    }

    function axisTicks(max, count) {
      const ticks = [];
      const steps = Math.max(1, count || 3);
      for (let index = 0; index <= steps; index += 1) ticks.push((max / steps) * index);
      return ticks;
    }

    function ChartTip(props) {
      const tip = props.tip;
      if (!tip) return null;
      return h(
        'div',
        {
          className: 'td-chart-tip',
          style: {
            left: `${tip.x}px`,
            top: `${tip.y}px`,
            transform: tip.flip ? 'translate(-100%, -50%)' : 'translate(8px, -50%)',
          },
        },
        tip.title ? h('div', { className: 'td-chart-tip-title' }, tip.title) : null,
        (tip.rows || []).map((row) => h(
          'div',
          { className: 'td-chart-tip-row', key: row.label },
          h('span', { className: `td-chart-dot ${row.className || ''}` }),
          h('span', { className: 'td-chart-tip-label' }, row.label),
          h('strong', null, row.value),
        )),
      );
    }

    function chartPointer(event, node) {
      if (!node || !node.getBoundingClientRect) return { x: 0, y: 0 };
      const rect = node.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top, width: rect.width };
    }

    /** Stacked area over daily buckets: one series per token class, bottom-up. */
    function StackedAreaChart(props) {
      const series = props.series || [];
      const labels = props.labels || [];
      const [ref, width] = useChartWidth(props.fallbackWidth || 640);
      const [hover, setHover] = React.useState(-1);
      const height = props.height || 190;
      const pad = { top: 10, right: 10, bottom: 20, left: 40 };
      const innerW = Math.max(10, width - pad.left - pad.right);
      const innerH = Math.max(10, height - pad.top - pad.bottom);
      const count = labels.length;
      const totals = labels.map((_, index) => series.reduce((sum, item) => sum + (item.values[index] || 0), 0));
      const max = niceMax(Math.max(1, ...totals));
      const fmtValue = props.formatValue || formatTokens;
      const xOf = (index) => (count <= 1 ? pad.left + innerW / 2 : pad.left + (innerW * index) / (count - 1));
      const yOf = (value) => pad.top + innerH - (Math.max(0, value) / max) * innerH;

      const stack = [];
      let running = labels.map(() => 0);
      for (const item of series) {
        const lower = running.slice();
        running = running.map((value, index) => value + (item.values[index] || 0));
        stack.push({ item, lower, upper: running.slice() });
      }

      function pathFor(lower, upper) {
        let path = '';
        for (let index = 0; index < count; index += 1) {
          const x = xOf(index);
          path += `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${yOf(upper[index]).toFixed(1)} `;
        }
        for (let index = count - 1; index >= 0; index -= 1) {
          path += `L${xOf(index).toFixed(1)} ${yOf(lower[index]).toFixed(1)} `;
        }
        return `${path}Z`;
      }

      function move(event) {
        const point = chartPointer(event, ref.current);
        if (!count) return;
        const ratio = (point.x - pad.left) / Math.max(1, innerW);
        const index = Math.max(0, Math.min(count - 1, Math.round(ratio * (count - 1))));
        setHover(index);
      }

      const tipIndex = hover >= 0 && hover < count ? hover : -1;
      const tip = tipIndex >= 0
        ? {
          x: xOf(tipIndex),
          y: height / 2,
          flip: xOf(tipIndex) > width * 0.6,
          title: labels[tipIndex],
          rows: series.map((item) => ({
            label: item.label,
            value: fmtValue(item.values[tipIndex] || 0),
            className: item.className,
          })),
        }
        : null;

      return h(
        'div',
        { className: 'td-chart', ref },
        h(
          'svg',
          {
            width: '100%',
            height,
            role: 'img',
            'aria-label': props.ariaLabel || '',
            onMouseMove: move,
            onMouseLeave: () => setHover(-1),
          },
          h('title', null, props.ariaLabel || ''),
          axisTicks(max, 3).map((tick, index) => h('g', { key: `tick-${index}` },
            h('line', { className: 'td-chart-grid', x1: pad.left, x2: width - pad.right, y1: yOf(tick), y2: yOf(tick) }),
            h('text', { className: 'td-chart-axis', x: pad.left - 6, y: yOf(tick) + 3, textAnchor: 'end' }, fmtValue(tick)))),
          stack.map((entry) => h('path', {
            key: entry.item.key,
            className: `td-chart-area ${entry.item.className || ''}`,
            d: pathFor(entry.lower, entry.upper),
          })),
          count > 1 ? labels.map((label, index) => (count <= 8 || index % Math.ceil(count / 6) === 0
            ? h('text', {
              key: `x-${label}`,
              className: 'td-chart-axis',
              x: xOf(index),
              y: height - 6,
              textAnchor: index === 0 ? 'start' : index === count - 1 ? 'end' : 'middle',
            }, label.slice(5))
            : null)) : null,
          tipIndex >= 0
            ? h('line', {
              className: 'td-chart-guide',
              x1: xOf(tipIndex),
              x2: xOf(tipIndex),
              y1: pad.top,
              y2: pad.top + innerH,
            })
            : null,
          tipIndex >= 0
            ? series.map((item, seriesIndex) => {
              const cumulative = series
                .slice(0, seriesIndex + 1)
                .reduce((sum, other) => sum + (other.values[tipIndex] || 0), 0);
              return h('circle', {
                key: `dot-${item.key}`,
                className: `td-chart-point ${item.className || ''}`,
                cx: xOf(tipIndex),
                cy: yOf(cumulative),
                r: 2.6,
              });
            })
            : null,
        ),
        h(ChartTip, { tip }),
      );
    }

    /** A single daily series (work time) with the same x scale as the area chart. */
    function LineChart(props) {
      const values = props.values || [];
      const labels = props.labels || [];
      const [ref, width] = useChartWidth(props.fallbackWidth || 640);
      const [hover, setHover] = React.useState(-1);
      const height = props.height || 120;
      const pad = { top: 10, right: 10, bottom: 18, left: 44 };
      const innerW = Math.max(10, width - pad.left - pad.right);
      const innerH = Math.max(10, height - pad.top - pad.bottom);
      const max = niceMax(Math.max(1, ...values));
      const fmtValue = props.formatValue || formatDuration;
      const count = labels.length;
      const xOf = (index) => (count <= 1 ? pad.left + innerW / 2 : pad.left + (innerW * index) / (count - 1));
      const yOf = (value) => pad.top + innerH - (Math.max(0, value) / max) * innerH;

      let line = '';
      values.forEach((value, index) => {
        line += `${index === 0 ? 'M' : 'L'}${xOf(index).toFixed(1)} ${yOf(value).toFixed(1)} `;
      });
      const area = count > 0
        ? `${line}L${xOf(count - 1).toFixed(1)} ${(pad.top + innerH).toFixed(1)} L${xOf(0).toFixed(1)} ${(pad.top + innerH).toFixed(1)} Z`
        : '';

      function move(event) {
        const point = chartPointer(event, ref.current);
        if (!count) return;
        const ratio = (point.x - pad.left) / Math.max(1, innerW);
        setHover(Math.max(0, Math.min(count - 1, Math.round(ratio * (count - 1)))));
      }

      const tipIndex = hover >= 0 && hover < count ? hover : -1;
      const tip = tipIndex >= 0
        ? {
          x: xOf(tipIndex),
          y: height / 2,
          flip: xOf(tipIndex) > width * 0.6,
          title: labels[tipIndex],
          rows: [{ label: props.label || '', value: fmtValue(values[tipIndex] || 0), className: 'is-work' }],
        }
        : null;

      return h(
        'div',
        { className: 'td-chart', ref },
        h(
          'svg',
          {
            width: '100%',
            height,
            role: 'img',
            'aria-label': props.ariaLabel || '',
            onMouseMove: move,
            onMouseLeave: () => setHover(-1),
          },
          h('title', null, props.ariaLabel || ''),
          axisTicks(max, 2).map((tick, index) => h('g', { key: `tick-${index}` },
            h('line', { className: 'td-chart-grid', x1: pad.left, x2: width - pad.right, y1: yOf(tick), y2: yOf(tick) }),
            h('text', { className: 'td-chart-axis', x: pad.left - 6, y: yOf(tick) + 3, textAnchor: 'end' }, fmtValue(tick)))),
          area ? h('path', { className: 'td-chart-area is-work', d: area }) : null,
          line ? h('path', { className: 'td-chart-line is-work', d: line }) : null,
          tipIndex >= 0
            ? h('line', { className: 'td-chart-guide', x1: xOf(tipIndex), x2: xOf(tipIndex), y1: pad.top, y2: pad.top + innerH })
            : null,
          tipIndex >= 0
            ? h('circle', { className: 'td-chart-point is-work', cx: xOf(tipIndex), cy: yOf(values[tipIndex] || 0), r: 3 })
            : null,
        ),
        h(ChartTip, { tip }),
      );
    }

    function donutArcs(values, cx, cy, radius, thickness) {
      const total = values.reduce((sum, value) => sum + Math.max(0, value), 0);
      if (!(total > 0)) return [];
      let angle = -Math.PI / 2;
      const arcs = [];
      values.forEach((value, index) => {
        const share = Math.max(0, value) / total;
        if (share <= 0) {
          arcs.push({ index, d: '', share });
          return;
        }
        const sweep = share * Math.PI * 2;
        const start = angle;
        const end = angle + sweep;
        angle = end;
        const point = (a, r) => [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
        const outerStart = point(start, radius);
        const outerEnd = point(end, radius);
        const innerEnd = point(end, radius - thickness);
        const innerStart = point(start, radius - thickness);
        const large = sweep > Math.PI ? 1 : 0;
        arcs.push({
          index,
          share,
          d: [
            `M${outerStart[0].toFixed(2)} ${outerStart[1].toFixed(2)}`,
            `A${radius} ${radius} 0 ${large} 1 ${outerEnd[0].toFixed(2)} ${outerEnd[1].toFixed(2)}`,
            `L${innerEnd[0].toFixed(2)} ${innerEnd[1].toFixed(2)}`,
            `A${(radius - thickness)} ${(radius - thickness)} 0 ${large} 0 ${innerStart[0].toFixed(2)} ${innerStart[1].toFixed(2)}`,
            'Z',
          ].join(' '),
        });
      });
      return arcs;
    }

    function DonutChart(props) {
      const items = props.items || [];
      const [hover, setHover] = React.useState(-1);
      const size = props.size || 168;
      const radius = size / 2 - 4;
      const thickness = Math.max(14, Math.round(radius * 0.34));
      const values = items.map((item) => item.value);
      const arcs = donutArcs(values, size / 2, size / 2, radius, thickness);
      const total = values.reduce((sum, value) => sum + value, 0);
      const active = hover >= 0 ? items[hover] : null;
      const formatItem = (item) => (item && item.display ? item.display : formatTokens(item ? item.value : 0));
      const centerText = active ? formatItem(active) : (props.centerValue || formatTokens(total));

      return h(
        'div',
        { className: 'td-donut' },
        h(
          'svg',
          { width: size, height: size, viewBox: `0 0 ${size} ${size}`, role: 'img', 'aria-label': props.ariaLabel || '' },
          h('title', null, props.ariaLabel || ''),
          h('circle', {
            className: 'td-donut-track',
            cx: size / 2,
            cy: size / 2,
            r: radius - thickness / 2,
            fill: 'none',
            strokeWidth: thickness,
          }),
          arcs.map((arc) => (arc.d
            ? h('path', {
              key: arc.index,
              className: `td-donut-seg ${items[arc.index].className || ''}${hover === arc.index ? ' is-hot' : ''}`,
              d: arc.d,
              onMouseEnter: () => setHover(arc.index),
              onMouseLeave: () => setHover(-1),
            })
            : null)),
          h('text', {
            className: 'td-donut-value',
            x: size / 2,
            y: size / 2 + 1,
            textAnchor: 'middle',
          }, centerText),
          h('text', {
            className: 'td-donut-label',
            x: size / 2,
            y: size / 2 + 17,
            textAnchor: 'middle',
          }, active ? active.label : (props.centerLabel || '')),
        ),
        h(
          'div',
          { className: 'td-donut-legend' },
          items.map((item, index) => h(
            'button',
            {
              key: item.key || index,
              type: 'button',
              className: `td-chart-legend${hover === index ? ' is-hot' : ''}`,
              onMouseEnter: () => setHover(index),
              onMouseLeave: () => setHover(-1),
            },
            h('span', { className: `td-chart-dot ${item.className || ''}` }),
            h('span', { className: 'td-chart-legend-label' }, item.label),
            h('strong', null, formatItem(item)),
            h('span', { className: 'td-chart-legend-share' }, `${total ? Math.round((item.value / total) * 100) : 0}%`),
          )),
        ),
      );
    }

    const WEEKDAY_LABELS = ['一', '二', '三', '四', '五', '六', '日'];

    function HeatmapChart(props) {
      const values = props.values || [];
      const [ref, width] = useChartWidth(props.fallbackWidth || 640);
      const [hover, setHover] = React.useState(null);
      const rows = 7;
      const cols = 24;
      const gap = 2;
      const leftPad = 16;
      const cell = Math.max(4, (width - leftPad - (cols - 1) * gap) / cols);
      const height = rows * (cell + gap);
      const max = Math.max(1, ...values);

      function tipFor(row, col) {
        const index = row * 24 + col;
        return {
          x: leftPad + col * (cell + gap) + cell / 2,
          y: row * (cell + gap) + cell / 2,
          flip: col > 16,
          title: `${props.weekdayLabels ? props.weekdayLabels[row] : WEEKDAY_LABELS[row]} ${String(col).padStart(2, '0')}:00`,
          rows: [{ label: props.label || '', value: props.formatValue ? props.formatValue(values[index] || 0) : String(values[index] || 0), className: 'is-read' }],
        };
      }

      return h(
        'div',
        { className: 'td-chart', ref },
        h(
          'svg',
          { width: '100%', height, role: 'img', 'aria-label': props.ariaLabel || '' },
          h('title', null, props.ariaLabel || ''),
          Array.from({ length: rows }).flatMap((_, row) => Array.from({ length: cols }).map((__, col) => {
            const index = row * 24 + col;
            const value = values[index] || 0;
            const ratio = value / max;
            return h('rect', {
              key: `${row}-${col}`,
              className: 'td-heat-cell',
              x: leftPad + col * (cell + gap),
              y: row * (cell + gap),
              width: cell,
              height: cell,
              rx: 2,
              style: { fillOpacity: value > 0 ? 0.12 + ratio * 0.88 : 0.06 },
              onMouseEnter: () => setHover(tipFor(row, col)),
              onMouseLeave: () => setHover(null),
            });
          })),
          Array.from({ length: rows }).map((_, row) => h('text', {
            key: `lbl-${row}`,
            className: 'td-chart-axis',
            x: 0,
            y: row * (cell + gap) + cell / 2 + 3,
            textAnchor: 'start',
          }, WEEKDAY_LABELS[row])),
        ),
        h(ChartTip, { tip: hover }),
      );
    }

    function Sparkline(props) {
      const values = props.values || [];
      const width = props.width || 92;
      const height = props.height || 22;
      if (values.length < 2) return h('div', { className: 'td-spark is-empty' });
      const max = Math.max(1, ...values);
      const step = width / (values.length - 1);
      let line = '';
      values.forEach((value, index) => {
        line += `${index === 0 ? 'M' : 'L'}${(index * step).toFixed(1)} ${(height - 2 - (value / max) * (height - 4)).toFixed(1)} `;
      });
      const area = `${line}L${width} ${height} L0 ${height} Z`;
      return h(
        'svg',
        { className: 'td-spark', width, height, viewBox: `0 0 ${width} ${height}`, role: 'img', 'aria-label': props.ariaLabel || '' },
        h('title', null, props.ariaLabel || ''),
        h('path', { className: 'td-spark-area', d: area }),
        h('path', { className: 'td-spark-line', d: line }),
      );
    }

    function GanttChart(props) {
      const rows = props.rows || [];
      const [ref, width] = useChartWidth(props.fallbackWidth || 640);
      const [hover, setHover] = React.useState(null);
      const rowHeight = 22;
      const barHeight = 10;
      const labelWidth = Math.min(200, Math.max(120, Math.round(width * 0.32)));
      const trackWidth = Math.max(40, width - labelWidth - 8);
      const times = rows.flatMap((row) => [row.start, row.end].filter((value) => value > 0));
      const min = times.length ? Math.min(...times) : 0;
      const max = times.length ? Math.max(...times) : 0;
      const span = Math.max(1, max - min);
      const height = Math.max(rowHeight, rows.length * rowHeight);
      const xOf = (time) => labelWidth + ((time - min) / span) * trackWidth;

      return h(
        'div',
        { className: 'td-chart', ref },
        h(
          'svg',
          { width: '100%', height, role: 'img', 'aria-label': props.ariaLabel || '' },
          h('title', null, props.ariaLabel || ''),
          rows.map((row, index) => {
            const y = index * rowHeight;
            const start = xOf(row.start || min);
            const end = Math.max(start + 2, xOf(row.end || max));
            return h('g', {
              key: row.id,
              className: 'td-gantt-row',
              onMouseEnter: () => setHover({
                x: start,
                y: y + rowHeight / 2,
                flip: start > width * 0.6,
                title: row.title,
                rows: [
                  { label: props.workLabel || '', value: formatDuration(row.workMs || 0), className: 'is-work' },
                  { label: props.spanLabel || '', value: formatDuration(row.spanMs || 0), className: 'is-read' },
                ],
              }),
              onMouseLeave: () => setHover(null),
            },
            h('text', { className: 'td-gantt-label', x: 0, y: y + rowHeight / 2 + 3, textAnchor: 'start' }, row.title),
            h('rect', { className: 'td-gantt-track', x: labelWidth, y: y + (rowHeight - barHeight) / 2, width: trackWidth, height: barHeight, rx: 4 }),
            h('rect', {
              className: `td-gantt-bar ${row.className || ''}`,
              x: start,
              y: y + (rowHeight - barHeight) / 2,
              width: end - start,
              height: barHeight,
              rx: 4,
            }));
          }),
        ),
        h(ChartTip, { tip: hover }),
      );
    }

    function TurnBars(props) {
      const turns = props.turns || [];
      const [ref, width] = useChartWidth(props.fallbackWidth || 420);
      const [hover, setHover] = React.useState(-1);
      const height = props.height || 120;
      const pad = { top: 8, right: 6, bottom: 16, left: 34 };
      const innerW = Math.max(10, width - pad.left - pad.right);
      const innerH = Math.max(10, height - pad.top - pad.bottom);
      const count = turns.length;
      const max = niceMax(Math.max(1, ...turns.map((turn) => turn.ms || 0)));
      const slot = innerW / Math.max(1, count);
      const barWidth = Math.max(3, slot - 3);
      const yOf = (value) => pad.top + innerH - (Math.max(0, value) / max) * innerH;

      return h(
        'div',
        { className: 'td-chart', ref },
        h(
          'svg',
          { width: '100%', height, role: 'img', 'aria-label': props.ariaLabel || '' },
          h('title', null, props.ariaLabel || ''),
          [0, 0.5, 1].map((ratio, index) => h('g', { key: `t-${index}` },
            h('line', { className: 'td-chart-grid', x1: pad.left, x2: width - pad.right, y1: yOf(max * ratio), y2: yOf(max * ratio) }),
            h('text', { className: 'td-chart-axis', x: pad.left - 6, y: yOf(max * ratio) + 3, textAnchor: 'end' }, formatDuration(max * ratio)))),
          turns.map((turn, index) => {
            const x = pad.left + index * slot + (slot - barWidth) / 2;
            const top = yOf(turn.ms || 0);
            return h('rect', {
              key: turn.n,
              className: `td-turn-bar${turn.open ? ' is-open' : ''}${hover === index ? ' is-hot' : ''}`,
              x,
              y: top,
              width: barWidth,
              height: Math.max(2, pad.top + innerH - top),
              rx: 2,
              onMouseEnter: () => setHover(index),
              onMouseLeave: () => setHover(-1),
            });
          }),
          Array.from({ length: count }).map((_, index) => (count <= 10 || index % Math.ceil(count / 6) === 0
            ? h('text', {
              key: `x-${index}`,
              className: 'td-chart-axis',
              x: pad.left + index * slot + slot / 2,
              y: height - 4,
              textAnchor: 'middle',
            }, `#${turns[index].n}`)
            : null)),
        ),
        hover >= 0 && turns[hover]
          ? h(ChartTip, {
            tip: {
              x: pad.left + hover * slot + slot / 2,
              y: height / 2,
              flip: hover > count * 0.6,
              title: `#${turns[hover].n}${turns[hover].open ? ` · ${props.openLabel || ''}` : ''}`,
              rows: [
                { label: props.workLabel || '', value: formatDuration(turns[hover].ms || 0), className: 'is-work' },
                { label: props.tokenLabel || '', value: formatTokens(turns[hover].tokens || 0), className: 'is-read' },
                ...(props.showCost ? [{ label: props.costLabel || '', value: formatMoney(turns[hover].cost || 0, props.currency), className: 'is-output' }] : []),
              ],
            },
          })
          : null,
      );
    }

    /** 24-hour money bars with the discounted window shaded behind them. */
    function HourCostBars(props) {
      const values = props.values || [];
      const [ref, width] = useChartWidth(props.fallbackWidth || 640);
      const [hover, setHover] = React.useState(-1);
      const height = props.height || 108;
      const pad = { top: 8, right: 6, bottom: 16, left: 46 };
      const innerW = Math.max(10, width - pad.left - pad.right);
      const innerH = Math.max(10, height - pad.top - pad.bottom);
      const max = niceMax(Math.max(1, ...values));
      const slot = innerW / 24;
      const barWidth = Math.max(2, slot - 3);
      const yOf = (value) => pad.top + innerH - (Math.max(0, value) / max) * innerH;
      const xOfHour = (hour) => pad.left + hour * slot;
      const windows = Array.isArray(props.windows) ? props.windows : [];

      return h(
        'div',
        { className: 'td-chart', ref },
        h(
          'svg',
          { width: '100%', height, role: 'img', 'aria-label': props.ariaLabel || '' },
          h('title', null, props.ariaLabel || ''),
          windows.map((window) => {
            const x = xOfHour(window[0] / 60);
            const width = xOfHour(window[1] / 60) - x;
            return width > 0
              ? h('rect', { key: `band-${window[0]}`, className: 'td-chart-band', x, y: pad.top, width, height: innerH, rx: 4 })
              : null;
          }),
          [0, 0.5, 1].map((ratio, index) => h('g', { key: `t-${index}` },
            h('line', { className: 'td-chart-grid', x1: pad.left, x2: width - pad.right, y1: yOf(max * ratio), y2: yOf(max * ratio) }),
            h('text', { className: 'td-chart-axis', x: pad.left - 6, y: yOf(max * ratio) + 3, textAnchor: 'end' },
              props.formatValue ? props.formatValue(max * ratio) : formatTokens(max * ratio)))),
          values.map((value, hour) => {
            const top = yOf(value);
            return h('rect', {
              key: hour,
              className: `td-hour-bar${hover === hour ? ' is-hot' : ''}`,
              x: pad.left + hour * slot + (slot - barWidth) / 2,
              y: top,
              width: barWidth,
              height: Math.max(1, pad.top + innerH - top),
              rx: 2,
              onMouseEnter: () => setHover(hour),
              onMouseLeave: () => setHover(-1),
            });
          }),
          [0, 6, 12, 18, 23].map((hour) => h('text', {
            key: `h-${hour}`,
            className: 'td-chart-axis',
            x: xOfHour(hour) + slot / 2,
            y: height - 4,
            textAnchor: 'middle',
          }, String(hour).padStart(2, '0'))),
        ),
        h(ChartTip, {
          tip: hover >= 0
            ? {
              x: xOfHour(hover) + slot / 2,
              y: height / 2,
              flip: hover > 16,
              title: `${String(hover).padStart(2, '0')}:00`,
              rows: [{
                label: props.label || '',
                value: props.formatValue ? props.formatValue(values[hover] || 0) : String(values[hover] || 0),
                className: 'is-read',
              }],
            }
            : null,
        }),
      );
    }

    function TokenBar(props) {
      const tokens = props.tokens || {};
      const total = tokens.total || 0;
      const segments = [
        ['cacheRead', tokens.cacheRead, 'is-read'],
        ['input', tokens.input, 'is-input'],
        ['output', tokens.output, 'is-output'],
        ['cacheWrite', tokens.cacheWrite, 'is-write'],
      ];
      if (!total) return h('div', { className: 'td-ins-bar is-empty', 'aria-hidden': true });
      return h(
        'div',
        { className: 'td-ins-bar', title: props.title || '' },
        segments.map(([key, value, cls]) => (value > 0
          ? h('span', {
            key,
            className: `td-ins-seg ${cls}`,
            style: { width: `${Math.max(1.5, (value / total) * 100)}%` },
          })
          : null)),
      );
    }

    function PricingEditor(props) {
      const t = props.t;
      const effective = props.schedule || (props.pricing && props.pricing.schedule) || DEFAULT_SCHEDULE;
      const [draft, setDraft] = React.useState(() => JSON.parse(JSON.stringify({
        ...props.pricing,
        schedule: effective,
      })));
      const [newModel, setNewModel] = React.useState('');
      const [holidayText, setHolidayText] = React.useState(() => (effective.holidays || []).join('\n'));

      function update(patch) {
        setDraft({ ...draft, ...patch });
      }

      function updateModel(model, field, value) {
        const next = { ...draft.models, [model]: { ...draft.models[model], [field]: value } };
        setDraft({ ...draft, models: next });
      }

      function updateWindow(index, side, minute) {
        const windows = draft.schedule.windows.map((window, cursor) => (cursor === index
          ? (side === 0 ? [minute, window[1]] : [window[0], minute])
          : window));
        update({ schedule: { ...draft.schedule, windows } });
      }

      function addWindow() {
        update({ schedule: { ...draft.schedule, windows: [...draft.schedule.windows, [1080, 1260]] } });
      }

      function removeWindow(index) {
        const windows = draft.schedule.windows.filter((_, cursor) => cursor !== index);
        if (!windows.length) return;
        update({ schedule: { ...draft.schedule, windows } });
      }

      function toggleWeekday(day) {
        const has = draft.schedule.weekdays.includes(day);
        const weekdays = has
          ? draft.schedule.weekdays.filter((value) => value !== day)
          : [...draft.schedule.weekdays, day].sort((a, b) => a - b);
        if (!weekdays.length) return;
        update({ schedule: { ...draft.schedule, weekdays } });
      }

      function addModel() {
        const name = newModel.trim();
        if (!name || draft.models[name]) return;
        setDraft({ ...draft, models: { ...draft.models, [name]: { ...draft.default } } });
        setNewModel('');
      }

      function removeModel(model) {
        if (model === 'deepseek-flash') return;
        const next = { ...draft.models };
        delete next[model];
        setDraft({ ...draft, models: next });
      }

      function numberField(value, onChange, step, extra) {
        return h('input', {
          type: 'number',
          className: 'td-price-input',
          min: 0,
          step: step || 0.1,
          value: String(value),
          onChange: (event) => onChange(Number(event.target.value)),
          ...extra,
        });
      }

      function save() {
        const holidays = holidayText
          .split(/[\n,]/)
          .map((value) => value.trim())
          .filter(Boolean);
        props.onSave({ ...draft, schedule: { ...draft.schedule, holidays } });
        props.onClose();
      }

      return h(
        'div',
        { className: 'td-card td-price-panel' },
        h('div', { className: 'td-ins-card-head' },
          h('div', { className: 'td-ins-card-title' }, t('pricing.title')),
          h('span', { className: 'td-ins-foot' }, t('pricing.hint'))),
        h('div', { className: 'td-price-row' },
          h('label', { className: 'td-price-field' },
            h('span', null, t('pricing.currency')),
            h('input', {
              type: 'text',
              className: 'td-price-input',
              value: draft.currency,
              maxLength: 8,
              onChange: (event) => update({ currency: event.target.value.toUpperCase() }),
            })),
          h('div', { className: 'td-price-field td-price-weekdays' },
            h('span', null, t('pricing.peakDays')),
            h('div', { className: 'td-price-chips' }, WEEKDAY_LABELS.map((label, index) => h(
              'button',
              {
                key: label,
                type: 'button',
                className: 'td-price-chip',
                'aria-pressed': draft.schedule.weekdays.includes(index + 1),
                onClick: () => toggleWeekday(index + 1),
              },
              label,
            ))))),
        h('div', { className: 'td-price-field td-price-windows' },
          h('span', null, t('pricing.peakWindows')),
          h('div', { className: 'td-price-windows-list' }, draft.schedule.windows.map((window, index) => h(
            'div',
            { key: index, className: 'td-price-window' },
            h('input', {
              type: 'time',
              className: 'td-price-input',
              value: formatMinuteOfDay(window[0]),
              onChange: (event) => updateWindow(index, 0, parseMinuteOfDay(event.target.value, window[0])),
            }),
            h('span', { className: 'td-price-dash' }, '–'),
            h('input', {
              type: 'time',
              className: 'td-price-input',
              value: formatMinuteOfDay(window[1]),
              onChange: (event) => updateWindow(index, 1, parseMinuteOfDay(event.target.value, window[1])),
            }),
            draft.schedule.windows.length > 1
              ? h('button', {
                type: 'button',
                className: 'td-price-remove',
                'aria-label': t('pricing.removeWindow'),
                onClick: () => removeWindow(index),
              }, '×')
              : null,
          )),
          h('button', { type: 'button', className: 'td-btn td-btn-sm', onClick: addWindow }, t('pricing.addWindow')))),
        h('label', { className: 'td-price-field td-price-holidays' },
          h('span', null, t('pricing.holidays')),
          h('textarea', {
            className: 'td-price-input td-price-textarea',
            rows: 3,
            value: holidayText,
            placeholder: '2026-10-01\n2026-02-16~2026-02-22',
            onChange: (event) => setHolidayText(event.target.value),
          })),
        h('div', { className: 'td-price-head' },
          h('span', null, t('pricing.model')),
          h('span', null, t('insights.input')),
          h('span', null, t('insights.cacheRead')),
          h('span', null, t('insights.cacheWrite')),
          h('span', null, t('insights.output')),
          h('span', null, t('pricing.offPeakRate')),
          h('span', null, '')),
        Object.keys(draft.models).map((model) => h('div', { key: model, className: 'td-price-head td-price-model' },
          h('span', { className: 'td-price-name', title: model }, model),
          PRICE_FIELDS.map((field) => numberField(draft.models[model][field], (value) => updateModel(model, field, value), 0.1, { key: field })),
          numberField(draft.models[model].offPeak, (value) => updateModel(model, 'offPeak', Math.max(0, Math.min(1, value))), 0.05, { key: 'offPeak' }),
          h('button', {
            type: 'button',
            className: 'td-price-remove',
            'aria-label': `${t('pricing.remove')} ${model}`,
            disabled: model === 'deepseek-flash',
            onClick: () => removeModel(model),
          }, '×'))),
        h('div', { className: 'td-price-row' },
          h('input', {
            type: 'text',
            className: 'td-price-input',
            placeholder: t('pricing.addModel'),
            value: newModel,
            onChange: (event) => setNewModel(event.target.value),
            onKeyDown: (event) => { if (event.key === 'Enter') addModel(); },
          }),
          h('button', { type: 'button', className: 'td-btn td-btn-sm', onClick: addModel }, t('pricing.add')),
          h('span', { style: { flex: 1 } }),
          h('button', {
            type: 'button',
            className: 'td-btn td-btn-sm',
            onClick: () => { props.onReset(); props.onClose(); },
          }, t('pricing.reset')),
          h('button', {
            type: 'button',
            className: 'td-btn td-btn-primary td-btn-sm',
            onClick: save,
          }, t('pricing.save')),
        ),
      );
    }

    function InsightsBody(props) {
      const t = props.t;
      const state = props.state;
      const store = props.store;
      const [sort, setSort] = React.useState('tokens');
      const [range, setRange] = React.useState('all');
      const [busy, setBusy] = React.useState(false);
      const [hidden, setHidden] = React.useState({});
      const [ganttOpen, setGanttOpen] = React.useState(false);
      const [metric, setMetric] = React.useState('tokens');
      const [priceOpen, setPriceOpen] = React.useState(false);
      const pricing = state.pricing || DEFAULT_PRICING;
      const schedule = (state.stats && state.stats.schedule) || pricing.schedule || DEFAULT_SCHEDULE;
      const priceMode = metric === 'cost';
      const scheduleSummary = [
        (schedule.windows || []).map((window) => `${formatMinuteOfDay(window[0])}–${formatMinuteOfDay(window[1])}`).join(' / '),
        (schedule.weekdays || []).map((day) => WEEKDAY_LABELS[day - 1]).join(''),
        fmt(t('insights.holidaysCount'), { n: (schedule.holidays || []).length }),
      ].filter(Boolean).join(' · ');

      React.useEffect(() => {
        store.loadStats();
        const timer = window.setInterval(() => {
          const tasks = store.getState().tasks;
          if (tasks.some((task) => task.running)) store.loadStats();
        }, 30_000);
        return () => window.clearInterval(timer);
      }, [store]);

      const now = Date.now();
      const rangeMs = range === 'all' ? 0 : Number(range) * 86_400_000;
      const cutoffTime = rangeMs ? now - rangeMs : 0;
      const rows = state.tasks
        .filter((task) => !rangeMs || (task.updatedAt > 0 && now - task.updatedAt <= rangeMs))
        .map((task) => ({ task, stat: state.stats.byId[task.id] || null }));

      const totals = rows.reduce((acc, row) => {
        acc.tokens += row.stat ? row.stat.tokens.total : 0;
        acc.work += row.stat ? row.stat.workMs : 0;
        acc.turns += row.stat ? row.stat.turns : 0;
        if (row.stat && row.stat.cost) {
          acc.cost += row.stat.cost.total || 0;
          acc.peak += row.stat.cost.peak || 0;
          acc.offPeak += row.stat.cost.offPeak || 0;
          for (const field of PRICE_FIELDS) {
            acc.byClass[field] += (row.stat.cost.byClass && row.stat.cost.byClass[field]) || 0;
          }
        }
        if (row.task.running) acc.running += 1;
        if (row.stat) acc.measured += 1;
        return acc;
      }, {
        tokens: 0,
        work: 0,
        turns: 0,
        running: 0,
        measured: 0,
        cost: 0,
        peak: 0,
        offPeak: 0,
        byClass: { input: 0, cacheRead: 0, cacheWrite: 0, output: 0 },
      });

      const sorted = rows.slice().sort((a, b) => {
        if (sort === 'cost') {
          return (b.stat && b.stat.cost ? b.stat.cost.total : -1) - (a.stat && a.stat.cost ? a.stat.cost.total : -1);
        }
        if (sort === 'work') return (b.stat ? b.stat.workMs : -1) - (a.stat ? a.stat.workMs : -1);
        if (sort === 'turns') return (b.stat ? b.stat.turns : -1) - (a.stat ? a.stat.turns : -1);
        if (sort === 'recent') return b.task.updatedAt - a.task.updatedAt;
        return (b.stat ? b.stat.tokens.total : -1) - (a.stat ? a.stat.tokens.total : -1);
      });

      const composition = rows.reduce((acc, row) => {
        if (!row.stat) return acc;
        acc.input += row.stat.tokens.input;
        acc.output += row.stat.tokens.output;
        acc.cacheRead += row.stat.tokens.cacheRead;
        acc.cacheWrite += row.stat.tokens.cacheWrite;
        acc.total += row.stat.tokens.total;
        return acc;
      }, { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 });

      // --- time series -----------------------------------------------------
      const dayMap = new Map();
      for (const row of rows) {
        if (!row.stat || !Array.isArray(row.stat.daily)) continue;
        for (const day of row.stat.daily) {
          if (!day || typeof day.d !== 'string') continue;
          const bucket = dayMap.get(day.d) || {
            d: day.d,
            ms: 0,
            turns: 0,
            cost: 0,
            costByClass: { input: 0, cacheRead: 0, cacheWrite: 0, output: 0 },
            tokens: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
          };
          bucket.ms += day.ms || 0;
          bucket.turns += day.turns || 0;
          bucket.cost += day.cost || 0;
          for (const field of PRICE_FIELDS) {
            bucket.costByClass[field] += day.costByClass ? day.costByClass[field] || 0 : 0;
          }
          bucket.tokens.input += day.tokens ? day.tokens.input : 0;
          bucket.tokens.output += day.tokens ? day.tokens.output : 0;
          bucket.tokens.cacheRead += day.tokens ? day.tokens.cacheRead : 0;
          bucket.tokens.cacheWrite += day.tokens ? day.tokens.cacheWrite : 0;
          dayMap.set(day.d, bucket);
        }
      }
      const allDays = Array.from(dayMap.values()).sort((a, b) => (a.d < b.d ? -1 : 1));
      const cutoffDay = cutoffTime ? new Date(cutoffTime - timezoneOffset() * 60_000).toISOString().slice(0, 10) : '';
      const days = (cutoffDay ? allDays.filter((day) => day.d >= cutoffDay) : allDays).slice(-120);
      const dayLabels = days.map((day) => day.d);
      const areaSeries = [
        { key: 'cacheRead', label: t('insights.cacheRead'), className: 'is-read' },
        { key: 'input', label: t('insights.input'), className: 'is-input' },
        { key: 'output', label: t('insights.output'), className: 'is-output' },
        { key: 'cacheWrite', label: t('insights.cacheWrite'), className: 'is-write' },
      ].map((series) => ({
        ...series,
        values: days.map((day) => (priceMode ? day.costByClass[series.key] : day.tokens[series.key])),
      })).filter((series) => !hidden[series.key]);
      const workValues = days.map((day) => day.ms);

      const hourTokens = new Array(168).fill(0);
      const hourCost = new Array(168).fill(0);
      const hourOfDayCost = new Array(24).fill(0);
      for (const row of rows) {
        if (!row.stat || !row.stat.hours) continue;
        for (let index = 0; index < 168; index += 1) {
          hourTokens[index] += (row.stat.hours.tokens && row.stat.hours.tokens[index]) || 0;
          const cost = (row.stat.hours.cost && row.stat.hours.cost[index]) || 0;
          hourCost[index] += cost;
          hourOfDayCost[index % 24] += cost;
        }
      }

      const byWorkspace = new Map();
      for (const row of rows) {
        if (!row.stat) continue;
        const key = row.task.workspace || t('session.noWorkspace');
        const bucket = byWorkspace.get(key) || { workspace: key, tokens: 0, work: 0, count: 0 };
        bucket.tokens += row.stat.tokens.total;
        bucket.work += row.stat.workMs;
        bucket.count += 1;
        byWorkspace.set(key, bucket);
      }
      const workspaceRows = Array.from(byWorkspace.values())
        .sort((a, b) => b.tokens - a.tokens)
        .slice(0, 6);
      const workspaceMax = workspaceRows.reduce((max, row) => Math.max(max, row.tokens), 0) || 1;

      const ganttRows = rows
        .filter((row) => row.stat && row.stat.firstAt > 0)
        .sort((a, b) => (b.stat.lastAt || 0) - (a.stat.lastAt || 0))
        .slice(0, ganttOpen ? 24 : 10)
        .map((row) => ({
          id: row.task.id,
          title: row.task.title,
          start: row.stat.firstAt || row.stat.createdAt,
          end: row.stat.lastAt || row.stat.firstAt,
          workMs: row.stat.workMs,
          spanMs: row.stat.spanMs,
          className: `is-${row.task.status}`,
        }));

      const sparkTokens = days.slice(-14).map((day) => day.tokens.cacheRead + day.tokens.input + day.tokens.output + day.tokens.cacheWrite);
      const sparkWork = days.slice(-14).map((day) => day.ms);
      const sparkTurns = days.slice(-14).map((day) => day.turns);

      const latest = rows.reduce((max, row) => Math.max(max, row.stat ? row.stat.computedAt || 0 : 0), 0);
      const failed = state.stats.status === 'error';
      const loading = state.stats.status === 'loading';
      const unmeasured = rows.length - totals.measured;
      const hasSeries = days.length > 1;

      async function refresh() {
        setBusy(true);
        try {
          await store.refreshStats();
        } finally {
          setBusy(false);
        }
      }

      function sortButton(key, label) {
        return h(
          'button',
          {
            type: 'button',
            className: 'td-ins-sort',
            'aria-pressed': sort === key,
            onClick: () => setSort(key),
          },
          label,
        );
      }

      function legendButton(series) {
        return h(
          'button',
          {
            key: series.key,
            type: 'button',
            className: `td-ins-legend-item ${series.className}${hidden[series.key] ? ' is-off' : ''}`,
            'aria-pressed': !hidden[series.key],
            onClick: () => setHidden({ ...hidden, [series.key]: !hidden[series.key] }),
          },
          h('span', { className: 'td-ins-dot' }),
          h('span', null, series.label),
          h('strong', null, priceMode
            ? formatMoney(totals.byClass[series.key], pricing.currency)
            : formatTokens(composition[series.key])),
        );
      }

      const allSeries = [
        { key: 'cacheRead', label: t('insights.cacheRead'), className: 'is-read' },
        { key: 'input', label: t('insights.input'), className: 'is-input' },
        { key: 'output', label: t('insights.output'), className: 'is-output' },
        { key: 'cacheWrite', label: t('insights.cacheWrite'), className: 'is-write' },
      ];

      return h(
        'div',
        { className: 'td-insights' },
        h(
          'div',
          { className: 'td-ins-toolbar' },
          h(
            'div',
            { className: 'td-ins-chips' },
            [['all', t('insights.rangeAll')], ['7', t('insights.range7')], ['30', t('insights.range30')]].map(([value, label]) => h(
              'button',
              {
                key: value,
                type: 'button',
                className: 'td-chip',
                'aria-pressed': range === value,
                onClick: () => setRange(value),
              },
              label,
            )),
          ),
          h('span', { style: { flex: 1 } }),
          h(
            'div',
            { className: 'td-ins-metric', role: 'group', 'aria-label': t('insights.metric') },
            [['tokens', t('insights.metricTokens')], ['cost', t('insights.metricCost')]].map(([value, label]) => h(
              'button',
              {
                key: value,
                type: 'button',
                className: 'td-ins-metric-btn',
                'aria-pressed': metric === value,
                onClick: () => setMetric(value),
              },
              label,
            )),
          ),
          latest
            ? h('span', { className: 'td-ins-stamp' }, fmt(t('insights.updatedAt'), {
              time: new Date(latest).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
            }))
            : null,
          h(
            'button',
            { type: 'button', className: 'td-btn td-btn-sm', 'aria-expanded': priceOpen, onClick: () => setPriceOpen(!priceOpen) },
            h(Icon, { name: 'tag', size: 12 }),
            t('insights.pricing'),
          ),
          h(
            'button',
            {
              type: 'button',
              className: 'td-btn td-btn-sm',
              disabled: busy,
              onClick: refresh,
            },
            h(Icon, { name: 'clock', size: 12 }),
            busy ? t('insights.refreshing') : t('insights.refresh'),
          ),
        ),
        failed
          ? h('div', { className: 'td-ins-notice is-error' }, h(Icon, { name: 'alert', size: 13 }), h('span', null, t('insights.error')))
          : null,
        priceOpen
          ? h(PricingEditor, {
            t,
            pricing,
            schedule,
            onSave: (next) => store.setPricing(next),
            onReset: () => store.resetPricing(),
            onClose: () => setPriceOpen(false),
          })
          : null,
        h(
          'div',
          { className: 'td-ins-kpis' },
          h('div', { className: 'td-ins-kpi' },
            h('div', { className: 'td-ins-kpi-label' }, t('insights.sessions')),
            h('div', { className: 'td-ins-kpi-value' }, rows.length),
            h('div', { className: 'td-ins-kpi-foot' },
              h('span', { className: 'td-ins-kpi-hint' }, fmt(t('insights.runningHint'), { n: totals.running })))),
          h('div', { className: 'td-ins-kpi' },
            h('div', { className: 'td-ins-kpi-label' }, t('insights.totalCost')),
            h('div', { className: 'td-ins-kpi-value' }, formatMoney(totals.cost, pricing.currency)),
            h('div', { className: 'td-ins-kpi-hint' }, fmt(t('insights.peakShare'), {
              value: totals.cost > 0 ? `${Math.round((totals.peak / totals.cost) * 100)}%` : '—',
            }))),
          h('div', { className: 'td-ins-kpi' },
            h('div', { className: 'td-ins-kpi-label' }, t('insights.totalTokens')),
            h('div', { className: 'td-ins-kpi-value' }, formatTokens(composition.total)),
            h('div', { className: 'td-ins-kpi-foot' },
              h(Sparkline, { values: sparkTokens, ariaLabel: t('insights.totalTokens') }))),
          h('div', { className: 'td-ins-kpi' },
            h('div', { className: 'td-ins-kpi-label' }, t('insights.totalWork')),
            h('div', { className: 'td-ins-kpi-value' }, formatDuration(totals.work)),
            h('div', { className: 'td-ins-kpi-foot' },
              h(Sparkline, { values: sparkWork, ariaLabel: t('insights.totalWork') }))),
          h('div', { className: 'td-ins-kpi' },
            h('div', { className: 'td-ins-kpi-label' }, t('insights.totalTurns')),
            h('div', { className: 'td-ins-kpi-value' }, totals.turns),
            h('div', { className: 'td-ins-kpi-foot' },
              h(Sparkline, { values: sparkTurns, ariaLabel: t('insights.totalTurns') }))),
        ),
        h(
          'div',
          { className: 'td-card td-ins-card' },
          h('div', { className: 'td-ins-card-head' },
            h('div', { className: 'td-ins-card-title' }, t('insights.peak')),
            h('span', { className: 'td-ins-foot' }, scheduleSummary)),
          h('div', { className: 'td-ins-peaks' },
            h('div', { className: 'td-ins-peak-item is-peak' },
              h('span', { className: 'td-ins-peak-label' }, t('insights.peakHours')),
              h('strong', null, formatMoney(totals.peak, pricing.currency)),
              h('span', { className: 'td-ins-peak-share' }, totals.cost > 0 ? `${Math.round((totals.peak / totals.cost) * 100)}%` : '—')),
            h('div', { className: 'td-ins-peak-item is-off' },
              h('span', { className: 'td-ins-peak-label' }, t('insights.offPeakHours')),
              h('strong', null, formatMoney(totals.offPeak, pricing.currency)),
              h('span', { className: 'td-ins-peak-share' }, totals.cost > 0 ? `${Math.round((totals.offPeak / totals.cost) * 100)}%` : '—'))),
          h(HourCostBars, {
            values: hourOfDayCost,
            windows: schedule.windows,
            label: t('insights.colCost'),
            formatValue: (value) => formatMoneyAxis(value, pricing.currency),
            ariaLabel: t('insights.peakChart'),
          }),
        ),
        h(
          'div',
          { className: 'td-ins-split' },
          h(
            'div',
            { className: 'td-card td-ins-card' },
            h(
              'div',
              { className: 'td-ins-card-head' },
              h('div', { className: 'td-ins-card-title' }, priceMode ? t('insights.costTrend') : t('insights.trend')),
              h('div', { className: 'td-ins-legend' }, allSeries.map(legendButton)),
            ),
            hasSeries
              ? h(StackedAreaChart, {
                series: areaSeries,
                labels: dayLabels,
                ariaLabel: priceMode ? t('insights.costTrend') : t('insights.trend'),
                height: 200,
                formatValue: priceMode ? (value) => formatMoneyAxis(value, pricing.currency) : undefined,
              })
              : h('div', { className: 'td-ins-empty' }, h(Icon, { name: 'clock', size: 16 }), h('span', null, t('insights.noData'))),
            h('div', { className: 'td-ins-foot' }, t('insights.trendHint')),
          ),
          h(
            'div',
            { className: 'td-card td-ins-card' },
            h('div', { className: 'td-ins-card-head' }, h('div', { className: 'td-ins-card-title' }, t('insights.composition'))),
            (priceMode ? totals.cost : composition.total) > 0
              ? h(DonutChart, {
                items: allSeries.map((series) => ({
                  ...series,
                  value: priceMode ? totals.byClass[series.key] : composition[series.key],
                  display: priceMode
                    ? formatMoney(totals.byClass[series.key], pricing.currency)
                    : formatTokens(composition[series.key]),
                })),
                centerValue: priceMode ? formatMoney(totals.cost, pricing.currency) : undefined,
                centerLabel: t('insights.totalShort'),
                ariaLabel: t('insights.composition'),
              })
              : h('div', { className: 'td-ins-empty' }, h(Icon, { name: 'layers', size: 16 }), h('span', null, t('insights.noData'))),
          ),
        ),
        h(
          'div',
          { className: 'td-card td-ins-card' },
          h('div', { className: 'td-ins-card-head' },
            h('div', { className: 'td-ins-card-title' }, t('insights.workTrend')),
            h('span', { className: 'td-ins-foot' }, t('insights.workTrendHint'))),
          hasSeries
            ? h(LineChart, {
              values: workValues,
              labels: dayLabels,
              label: t('insights.colWork'),
              ariaLabel: t('insights.workTrend'),
              height: 128,
            })
            : h('div', { className: 'td-ins-empty' }, h(Icon, { name: 'clock', size: 16 }), h('span', null, t('insights.noData'))),
        ),
        h(
          'div',
          { className: 'td-card td-ins-card' },
          h('div', { className: 'td-ins-card-head' },
            h('div', { className: 'td-ins-card-title' }, t('insights.heatmap')),
            h('span', { className: 'td-ins-foot' }, t('insights.heatmapHint'))),
          (priceMode ? totals.cost : totals.tokens) > 0
            ? h(HeatmapChart, {
              values: priceMode ? hourCost : hourTokens,
              label: priceMode ? t('insights.colCost') : t('insights.colTokens'),
              formatValue: priceMode
                ? (value) => formatMoneyAxis(value, pricing.currency)
                : formatTokens,
              ariaLabel: t('insights.heatmap'),
            })
            : h('div', { className: 'td-ins-empty' }, h(Icon, { name: 'clock', size: 16 }), h('span', null, t('insights.noData'))),
        ),
        ganttRows.length > 0
          ? h(
            'div',
            { className: 'td-card td-ins-card' },
            h('div', { className: 'td-ins-card-head' },
              h('div', { className: 'td-ins-card-title' }, t('insights.timeline')),
              ganttRows.length >= 10
                ? h('button', {
                  type: 'button',
                  className: 'td-ins-sort',
                  onClick: () => setGanttOpen(!ganttOpen),
                }, ganttOpen ? t('insights.collapse') : t('insights.expand'))
                : null),
            h(GanttChart, {
              rows: ganttRows,
              ariaLabel: t('insights.timeline'),
              workLabel: t('insights.colWork'),
              spanLabel: t('insights.colSpan'),
            }),
          )
          : null,
        h(
          'div',
          { className: 'td-card td-ins-card' },
          h(
            'div',
            { className: 'td-ins-card-head' },
            h('div', { className: 'td-ins-card-title' }, t('insights.byTask')),
            h(
              'div',
              { className: 'td-ins-sorts' },
              sortButton('cost', t('insights.sortCost')),
              sortButton('tokens', t('insights.sortTokens')),
              sortButton('work', t('insights.sortWork')),
              sortButton('turns', t('insights.sortTurns')),
              sortButton('recent', t('insights.sortRecent')),
            ),
          ),
          rows.length === 0
            ? h('div', { className: 'td-ins-empty' }, h(Icon, { name: 'search', size: 16 }), h('span', null, t('insights.empty')))
            : h(
              'div',
              { className: 'td-ins-table' },
              h(
                'div',
                { className: 'td-ins-tr td-ins-thead' },
                h('span', null, t('insights.colTask')),
                h('span', null, t('insights.colTurns')),
                h('span', null, t('insights.colWork')),
                h('span', null, t('insights.colSpan')),
                h('span', null, t('insights.colTokens')),
                h('span', null, t('insights.colCost')),
              ),
              sorted.map((row) => h(
                'button',
                {
                  key: row.task.id,
                  type: 'button',
                  className: 'td-ins-tr td-ins-row',
                  onClick: () => store.openTask(row.task.id),
                },
                h(
                  'span',
                  { className: 'td-ins-task' },
                  h('span', { className: 'td-row-dot', style: statusStyle(row.task.status) }),
                  h('span', { className: 'td-ins-task-title' }, row.task.title),
                  h('span', { className: 'td-ins-task-key' }, `#${shortSessionKey(row.task.id)}`),
                ),
                h('span', { className: 'td-ins-num' }, row.stat ? row.stat.turns : '—'),
                h('span', { className: 'td-ins-num' }, row.stat ? formatDuration(row.stat.workMs) : '—'),
                h('span', { className: 'td-ins-num td-ins-muted' }, row.stat ? formatDuration(row.stat.spanMs) : '—'),
                h(
                  'span',
                  { className: 'td-ins-tokens' },
                  row.stat
                    ? h('span', { className: 'td-ins-token-total' }, formatTokens(row.stat.tokens.total))
                    : h('span', { className: 'td-ins-muted' }, loading ? t('insights.loading') : '—'),
                  row.stat ? h(TokenBar, { tokens: row.stat.tokens }) : null,
                ),
                h('span', { className: 'td-ins-num td-ins-cost' },
                  row.stat && row.stat.cost ? formatMoney(row.stat.cost.total, pricing.currency) : '—'),
              )),
            ),
          unmeasured > 0 && !failed
            ? h('div', { className: 'td-ins-notice' }, h(Icon, { name: 'clock', size: 12 }), h('span', null, fmt(t('insights.partial'), { n: unmeasured })))
            : null,
        ),
        workspaceRows.length > 0
          ? h(
            'div',
            { className: 'td-card td-ins-card' },
            h('div', { className: 'td-ins-card-head' }, h('div', { className: 'td-ins-card-title' }, t('insights.workspaces'))),
            workspaceRows.map((row) => h(
              'div',
              { key: row.workspace, className: 'td-ins-ws' },
              h('span', { className: 'td-ins-ws-name', title: row.workspace }, row.workspace),
              h('span', { className: 'td-ins-ws-bar' }, h('span', { style: { width: `${(row.tokens / workspaceMax) * 100}%` } })),
              h('span', { className: 'td-ins-num' }, formatTokens(row.tokens)),
              h('span', { className: 'td-ins-num td-ins-muted' }, formatDuration(row.work)),
            )),
          )
          : null,
      );
    }


    function Dashboard(props) {
      const ctx = props.ctx;
      const store = props.store;
      const t = useLocale(ctx);
      const state = useDeck(store);
      const [tab, setTab] = React.useState('overview');
      const [filter, setFilter] = React.useState('all');
      const [query, setQuery] = React.useState('');
      const [flow, setFlow] = React.useState(null);
      const [toast, flash] = useFlash();
      const searchRef = React.useRef(null);
      const task = findTask(state, state.activeTaskId);
      const activeTask = currentTaskOf(state);

      React.useEffect(() => {
        function onKeyDown(event) {
          if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            if (searchRef.current) searchRef.current.focus();
          }
        }
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
      }, []);

      const counts = {
        active: state.tasks.filter((item) => item.status === 'active').length,
        waiting: state.tasks.filter((item) => item.status === 'waiting').length,
        blocked: state.tasks.filter((item) => item.status === 'blocked').length,
        review: state.tasks.filter((item) => item.status === 'review').length,
        done: state.tasks.filter((item) => item.status === 'done').length,
      };
      const attention = counts.blocked + counts.review;
      const activeStatus = tab === 'review' ? 'review' : filter;

      function openFlow(taskId, mode) {
        if (!findTask(state, taskId)) return;
        setFlow({ taskId, mode: mode || null, step: mode ? 2 : 1 });
      }

      function focusInSession(taskId) {
        store.setSessionTask(taskId);
        const uiWorkspace = ctx.get('uiWorkspace');
        try {
          if (uiWorkspace) uiWorkspace.openSession(taskId);
          else ctx.get('layout')?.selectPanel(null);
        } catch (error) {
          /* The conversation remains reachable from the sidebar. */
        }
      }

      function selectStat(status) {
        setTab('all');
        setFilter(status);
      }

      const normalized = query.trim().toLowerCase();
      let visible = state.tasks.filter((item) => {
        if (activeStatus !== 'all' && item.status !== activeStatus) return false;
        if (!normalized) return true;
        return [
          item.id,
          item.title,
          item.realTitle,
          item.nextAction,
          item.branch,
          item.project,
          item.workspace,
          item.workspacePath,
          ...(item.tags || []),
        ].join(' ').toLowerCase().includes(normalized);
      });
      visible = visible.slice().sort((a, b) => {
        const priority = priorityWeight(a.priority) - priorityWeight(b.priority);
        if (priority !== 0) return priority;
        const status = STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status);
        if (status !== 0) return status;
        return b.updatedAt - a.updatedAt;
      });

      const onlyDone = visible.length > 0 && visible.every((item) => item.status === 'done');
      const groups = STATUS_ORDER
        .map((status) => ({
          status,
          tasks: visible.filter((item) => item.status === status),
        }))
        .filter((group) => group.tasks.length > 0)
        .filter((group) => tab !== 'overview' || filter !== 'all' || group.status !== 'done' || onlyDone || normalized);

      if (state.view === 'detail' && task) {
        return h(
          'div',
          { className: 'td-root', 'data-taskdeck-root': 'detail' },
          h(TaskDetail, {
            task,
            state,
            t,
            ctx,
            store,
            flash,
            onBack: () => store.backToDashboard(),
            onOpenTask: (id) => store.openTask(id),
            onOpenFlow: openFlow,
            onFocusSession: focusInSession,
          }),
          flow ? h(BranchFlow, {
            key: `${flow.taskId}-${flow.mode || 'new'}-${flow.step}`,
            ctx,
            store,
            t,
            task: findTask(state, flow.taskId) || task,
            initialMode: flow.mode,
            onClose: () => setFlow(null),
            onCreated: (mode) => {
              setFlow(null);
              flash(mode === 'continue' ? t('flow.continued') : mode === 'handoff' ? t('flow.handoff') : t('flow.created'));
            },
          }) : null,
          toast ? h(Toast, { message: toast }) : null,
        );
      }

      const attentionRank = { blocked: 0, active: 1, review: 2, waiting: 3, done: 4 };
      const nextActions = state.tasks
        .filter((item) => item.status !== 'done')
        .sort((a, b) => {
          const rank = (attentionRank[a.status] ?? 4) - (attentionRank[b.status] ?? 4);
          if (rank !== 0) return rank;
          const priority = priorityWeight(a.priority) - priorityWeight(b.priority);
          if (priority !== 0) return priority;
          return b.updatedAt - a.updatedAt;
        })
        .slice(0, 3);
      const waitingTasks = state.tasks.filter((item) => item.status === 'waiting').slice(0, 3);

      return h(
        'div',
        { className: 'td-root', 'data-taskdeck-root': 'dashboard' },
        h(
          'div',
          { className: 'td-shell' },
          h(
            'div',
            { className: 'td-inner' },
            h(
              'header',
              { className: 'td-topbar' },
              h(
                'div',
                { className: 'td-title-wrap' },
                h(
                  'div',
                  { className: 'td-eyebrow' },
                  h('span', { className: 'td-eyebrow-mark' }, h(Icon, { name: 'deck', size: 11, strokeWidth: 2 })),
                  t('dashboard.eyebrow'),
                ),
                h('h1', { className: 'td-title' }, t('dashboard.title')),
                h('p', { className: 'td-subtitle' }, t('dashboard.subtitle')),
              ),
              h(
                'div',
                { className: 'td-actions' },
                h(
                  'label',
                  { className: 'td-search' },
                  h(Icon, { name: 'search', size: 14 }),
                  h('input', {
                    ref: searchRef,
                    type: 'search',
                    value: query,
                    placeholder: t('dashboard.search'),
                    'aria-label': t('dashboard.search'),
                    onChange: (event) => setQuery(event.target.value),
                  }),
                  h('span', { className: 'td-kbd' }, '⌘K'),
                ),
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'td-btn td-btn-primary',
                    disabled: !activeTask,
                    onClick: () => activeTask && openFlow(activeTask.id, null),
                  },
                  h(Icon, { name: 'plus', size: 14 }),
                  t('dashboard.newBranch'),
                ),
              ),
            ),
            h(
              'div',
              { className: 'td-focus' },
              h(
                'div',
                { className: 'td-focus-copy' },
                h('span', { className: 'td-pulse' }),
                h(
                  'div',
                  null,
                  h(
                    'div',
                    { className: 'td-focus-label' },
                    t('dashboard.focus'),
                    h('span', { className: 'td-focus-count' }, attention > 0 ? fmt(t('dashboard.attention'), { n: attention }) : t('dashboard.allClear')),
                  ),
                  h('div', { className: 'td-focus-hint' }, t('dashboard.focusHint')),
                ),
              ),
              h(
                'div',
                { className: 'td-stats' },
                h(
                  'button',
                  { type: 'button', className: 'td-stat', style: { '--td-stat': STATUS_TOKEN.active }, onClick: () => selectStat('active') },
                  h('div', { className: 'td-stat-value' }, h('span', { className: 'td-stat-dot' }), counts.active),
                  h('div', { className: 'td-stat-label' }, t('dashboard.active')),
                ),
                h(
                  'button',
                  { type: 'button', className: 'td-stat', style: { '--td-stat': STATUS_TOKEN.waiting }, onClick: () => selectStat('waiting') },
                  h('div', { className: 'td-stat-value' }, h('span', { className: 'td-stat-dot' }), counts.waiting),
                  h('div', { className: 'td-stat-label' }, t('dashboard.waiting')),
                ),
                h(
                  'button',
                  { type: 'button', className: 'td-stat', style: { '--td-stat': STATUS_TOKEN.blocked }, onClick: () => selectStat('blocked') },
                  h('div', { className: 'td-stat-value' }, h('span', { className: 'td-stat-dot' }), counts.blocked),
                  h('div', { className: 'td-stat-label' }, t('dashboard.blocked')),
                ),
                h(
                  'button',
                  { type: 'button', className: 'td-stat', style: { '--td-stat': STATUS_TOKEN.review }, onClick: () => selectStat('review') },
                  h('div', { className: 'td-stat-value' }, h('span', { className: 'td-stat-dot' }), counts.review),
                  h('div', { className: 'td-stat-label' }, t('dashboard.review')),
                ),
              ),
            ),
            h(
              'nav',
              { className: 'td-nav', role: 'tablist', 'aria-label': t('dashboard.title') },
              h('button', { type: 'button', className: 'td-nav-tab', role: 'tab', 'aria-selected': state.view !== 'insights' && tab === 'overview', onClick: () => { store.backToDashboard(); setTab('overview'); setFilter('all'); } }, t('dashboard.overview')),
              h('button', { type: 'button', className: 'td-nav-tab', role: 'tab', 'aria-selected': state.view !== 'insights' && tab === 'all', onClick: () => { store.backToDashboard(); setTab('all'); } }, t('dashboard.all')),
              h('button', { type: 'button', className: 'td-nav-tab', role: 'tab', 'aria-selected': state.view !== 'insights' && tab === 'review', onClick: () => { store.backToDashboard(); setTab('review'); setFilter('all'); } }, t('dashboard.reviewQueue'), h('span', { className: 'td-nav-count' }, counts.review)),
              h('button', { type: 'button', className: 'td-nav-tab', role: 'tab', 'aria-selected': state.view === 'insights', onClick: () => store.openInsights() }, t('dashboard.insights')),
            ),
            state.view === 'insights'
              ? h(InsightsBody, { t, state, store })
              : h(
              'div',
              { className: 'td-grid' },
              h(
                'div',
                null,
                h(
                  'div',
                  { className: 'td-filterbar' },
                  h(
                    'div',
                    { className: 'td-chips' },
                    ['all', 'active', 'waiting', 'blocked', 'review', 'done'].map((status) => h(
                      'button',
                      {
                        key: status,
                        type: 'button',
                        className: 'td-chip',
                        'aria-pressed': activeStatus === status,
                        onClick: () => {
                          setTab('all');
                          setFilter(status);
                        },
                      },
                      status === 'all' ? t('dashboard.filterAll') : t(STATUS_KEY[status]),
                      h('span', { className: 'td-chip-count' }, status === 'all' ? state.tasks.length : counts[status]),
                    )),
                  ),
                  h(
                    'div',
                    { className: 'td-filter-actions' },
                    h(
                      'label',
                      { className: 'td-auto-inline', title: t('auto.hint') },
                      h(Icon, { name: 'clock', size: 12 }),
                      h('span', { className: 'td-auto-inline-label' }, t('auto.title')),
                      h(
                        'select',
                        {
                          value: state.autoDoneHours,
                          'aria-label': t('auto.title'),
                          onChange: (event) => store.setAutoDoneHours(Number(event.target.value)),
                        },
                        AUTO_DONE_HOURS_OPTIONS.map((hours) => h(
                          'option',
                          { key: hours, value: hours },
                          autoWindowLabel(hours, t),
                        )),
                      ),
                    ),
                    h(
                      'div',
                      { className: 'td-sort' },
                      h(Icon, { name: 'filter', size: 12 }),
                      t('dashboard.sortUpdated'),
                      h(Icon, { name: 'chevronDown', size: 12 }),
                    ),
                  ),
                ),
                groups.length === 0
                  ? (state.tasks.length === 0
                    ? h(EmptyState, {
                      title: state.phase === 'pending' ? t('dashboard.loadingSessions') : t('dashboard.noSessions'),
                      hint: t('dashboard.noSessionsHint'),
                      icon: 'deck',
                    })
                    : h(EmptyState, {
                      title: t('dashboard.noResults'),
                      hint: t('dashboard.noResultsHint'),
                      icon: 'search',
                      action: h(
                        'button',
                        {
                          type: 'button',
                          className: 'td-btn td-btn-secondary td-btn-sm',
                          style: { marginTop: 12 },
                          onClick: () => { setQuery(''); setFilter('all'); setTab('overview'); },
                        },
                        t('dashboard.clear'),
                      ),
                    }))
                  : groups.map((group) => h(
                    'section',
                    { className: 'td-group', key: group.status },
                    h(
                      'div',
                      { className: 'td-group-head' },
                      h(
                        'div',
                        { className: 'td-group-title', style: statusStyle(group.status) },
                        h('span', { className: 'td-row-dot' }),
                        t(STATUS_KEY[group.status]),
                        h('span', { className: 'td-group-count' }, group.tasks.length),
                      ),
                      h('span', { className: 'td-group-line' }),
                    ),
                    h(
                      'div',
                      { className: 'td-list' },
                      group.tasks.map((item) => h(TaskRow, {
                        key: item.id,
                        task: item,
                        t,
                        onOpen: (id) => store.openTask(id),
                        onContinue: (id) => openFlow(id, 'continue'),
                      })),
                    ),
                  )),
                normalized
                  ? h('div', { className: 'td-sort', style: { marginTop: 10 } }, fmt(t('dashboard.taskCount'), { n: visible.length }))
                  : null,
              ),
              h(
                'aside',
                { className: 'td-rail' },
                h(
                  'div',
                  { className: 'td-railcard' },
                  h(
                    'div',
                    { className: 'td-rail-head' },
                    h('div', { className: 'td-rail-title' }, t('dashboard.nextActions')),
                    h('span', { className: 'td-chip-count' }, nextActions.length),
                  ),
                  h('p', { className: 'td-rail-hint' }, t('dashboard.nextActionsHint')),
                  nextActions.map((item, index) => h(
                    'button',
                    {
                      key: item.id,
                      type: 'button',
                      className: 'td-mini-action',
                      onClick: () => store.openTask(item.id),
                    },
                    h('span', { className: 'td-mini-num' }, index + 1),
                    h(
                      'span',
                      { className: 'td-mini-copy' },
                      h('span', { className: 'td-mini-title' }, item.title),
                      h(
                        'span',
                        { className: 'td-mini-next' },
                        h(Icon, { name: item.status === 'blocked' ? 'alert' : 'arrowRight', size: 11 }),
                        h('span', null, item.nextAction),
                      ),
                    ),
                  )),
                ),
                h(
                  'div',
                  { className: 'td-railcard' },
                  h(
                    'div',
                    { className: 'td-rail-head' },
                    h('div', { className: 'td-rail-title' }, t('dashboard.waitingOn')),
                    h('span', { className: 'td-chip-count' }, counts.waiting),
                  ),
                  h('p', { className: 'td-rail-hint' }, t('dashboard.waitingHint')),
                  waitingTasks.map((item) => h(
                    'button',
                    {
                      key: item.id,
                      type: 'button',
                      className: 'td-mini-action',
                      onClick: () => store.openTask(item.id),
                    },
                    h('span', { className: 'td-modeicon', style: { width: 20, height: 20, borderRadius: 5, color: 'var(--dsw-alias-state-warn-primary)' } }, h(Icon, { name: 'clock', size: 12 })),
                    h(
                      'span',
                      { className: 'td-mini-copy' },
                      h('span', { className: 'td-mini-title' }, item.title),
                      h('span', { className: 'td-mini-next' }, item.nextAction),
                    ),
                  )),
                  h(
                    'button',
                    { type: 'button', className: 'td-rail-link', onClick: () => selectStat('waiting') },
                    t('dashboard.all'),
                    h(Icon, { name: 'arrowRight', size: 11 }),
                  ),
                ),
                h(
                  'div',
                  { className: 'td-railcard' },
                  h(
                    'div',
                    { className: 'td-rail-head' },
                    h('div', { className: 'td-rail-title' }, t('dashboard.sessionModel')),
                    h('span', { className: 'td-chip-count' }, state.phase === 'pending' ? '…' : state.tasks.length),
                  ),
                  h('p', { className: 'td-rail-hint' }, t('dashboard.sessionModelHint')),
                  h(
                    'div',
                    { className: 'td-session-fact' },
                    h('span', null, t('dashboard.totalSessions')),
                    h('strong', null, state.tasks.length),
                  ),
                  h(
                    'div',
                    { className: 'td-session-fact' },
                    h('span', null, t('dashboard.runningNow')),
                    h('strong', null, counts.active),
                  ),
                  h(
                    'div',
                    { className: 'td-session-fact' },
                    h('span', null, t('dashboard.workspaces')),
                    h('strong', null, new Set(state.tasks.map((item) => item.workspace)).size),
                  ),
                ),
              ),
            ),
          ),
        ),
        flow ? h(BranchFlow, {
          key: `${flow.taskId}-${flow.mode || 'new'}-${flow.step}`,
          ctx,
          store,
          t,
          task: findTask(state, flow.taskId) || activeTask,
          initialMode: flow.mode,
          onClose: () => setFlow(null),
          onCreated: (mode) => {
            setFlow(null);
            flash(mode === 'continue' ? t('flow.continued') : mode === 'handoff' ? t('flow.handoff') : t('flow.created'));
          },
        }) : null,
        toast ? h(Toast, { message: toast }) : null,
      );
    }

    function TaskDetail(props) {
      const task = props.task;
      const state = props.state;
      const t = props.t;
      const store = props.store;
      const flash = props.flash;
      const parent = task.parentId ? findTask(state, task.parentId) : null;
      const children = state.tasks.filter((item) => item.parentId === task.id);
      const checks = task.checks || [];
      const done = checks.filter((check) => check.done).length;
      const ready = checks.length > 0 && done === checks.length;
      const stat = state && state.stats ? state.stats.byId[task.id] || null : null;
      const turnData = stat && Array.isArray(stat.perTurn) ? stat.perTurn : null;

      // Per-turn rows are a detail-only read, so ask for them the first time this task opens.
      React.useEffect(() => {
        if (!stat || turnData) return;
        store.loadTurnDetail(task.id);
      }, [task.id, stat, turnData, store]);
      const [nextDraft, setNextDraft] = React.useState(task.nextAction || '');
      const [checkDraft, setCheckDraft] = React.useState('');

      React.useEffect(() => {
        setNextDraft(task.nextAction || '');
        setCheckDraft('');
      }, [task.id, task.nextAction]);

      return h(
        'div',
        { className: 'td-detail', 'data-taskdeck-root': 'task-detail' },
        h(
          'div',
          { className: 'td-detail-bar' },
          h(
            'div',
            { style: { display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 } },
            h(
              'button',
              { type: 'button', className: 'td-back', onClick: props.onBack },
              h(Icon, { name: 'chevronLeft', size: 14 }),
              t('detail.back'),
            ),
            h('span', { className: 'td-crumb-sep' }, '/'),
            h(
              'div',
              { className: 'td-crumb' },
              h('span', null, t('detail.breadcrumb')),
              h('span', { className: 'td-crumb-sep' }, '/'),
              h('span', null, task.id),
            ),
          ),
          h(
            'div',
            { className: 'td-detail-actions' },
            h(
              'button',
              { type: 'button', className: 'td-btn td-btn-secondary td-btn-sm', onClick: () => props.onOpenFlow(task.id, 'continue') },
              h(Icon, { name: 'play', size: 12 }),
              h('span', null, t('detail.continue')),
            ),
            h(
              'button',
              { type: 'button', className: 'td-btn td-btn-primary td-btn-sm', onClick: () => props.onOpenFlow(task.id, 'branch') },
              h(Icon, { name: 'branch', size: 12 }),
              h('span', null, t('detail.newBranch')),
            ),
            h(
              'button',
              { type: 'button', className: 'td-iconbtn', title: t('detail.more'), 'aria-label': t('detail.more') },
              h(Icon, { name: 'more', size: 16 }),
            ),
          ),
        ),
        h(
          'div',
          { className: 'td-detail-hero' },
          h(
            'div',
            { className: 'td-detail-kicker' },
            h(StatusChip, { status: task.status, t }),
            h(PriorityChip, { priority: task.priority }),
            h('span', { className: 'td-detail-key' }, task.id),
            h('span', { className: 'td-detail-key' }, '·'),
            h('span', { className: 'td-detail-key' }, fmt(t('detail.updated'), { when: task.updated })),
          ),
          h('h1', { className: 'td-detail-title' }, task.title),
          task.realTitle && task.realTitle !== task.title
            ? h('div', { className: 'td-real-title' }, `${t('detail.realTitle')} · ${task.realTitle}`)
            : null,
          h(
            'div',
            { className: 'td-detail-meta' },
            h('span', null, h(Icon, { name: 'user', size: 13 }), task.owner),
            h('span', null, h(Icon, { name: 'session', size: 13 }), task.running ? t('detail.running') : t('detail.idle')),
            h('span', null, h(Icon, { name: 'clock', size: 13 }), task.updated),
            h('span', null, h(Icon, { name: 'folder', size: 13 }), task.workspace),
            h('span', null, h(Icon, { name: 'branch', size: 13 }), task.branch),
            h('span', null, h(Icon, { name: 'message', size: 13 }), (task.sessions || []).length),
          ),
          task.autoDone ? h(
            'div',
            { className: 'td-auto-note' },
            h(Icon, { name: 'clock', size: 13 }),
            h('span', null, fmt(t('auto.doneLabel'), { duration: autoWindowLabel(state.autoDoneHours, t) })),
            h(
              'button',
              {
                type: 'button',
                className: 'td-btn td-btn-secondary td-btn-sm',
                onClick: () => {
                  store.setStatus(task.id, 'waiting', t('status.waiting'));
                  flash(t('toast.statusUpdated'));
                },
              },
              t('auto.reopen'),
            ),
          ) : null,
        ),
        h(
          'div',
          { className: 'td-detail-grid' },
          h(
            'div',
            { className: 'td-detail-main' },
            h(
              'div',
              { className: 'td-nextcard' },
              h(
                'div',
                { className: 'td-nextcard-label' },
                h(Icon, { name: task.status === 'blocked' ? 'alert' : 'spark', size: 12 }),
                t('detail.nextAction'),
              ),
              h(
                'div',
                { className: 'td-nextcard-row' },
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'td-check-btn',
                    disabled: task.running && checks.length === 0,
                    title: checks.length ? t('detail.markDone') : t('detail.markReview'),
                    'aria-label': checks.length ? t('detail.markDone') : t('detail.markReview'),
                    onClick: () => {
                      store.completeNext(task.id);
                      flash(t('toast.stepDone'));
                    },
                  },
                  h(Icon, { name: 'check', size: 11 }),
                ),
                h('input', {
                  className: 'td-next-input',
                  value: nextDraft,
                  placeholder: t('detail.nextAction'),
                  'aria-label': t('detail.nextAction'),
                  onChange: (event) => setNextDraft(event.target.value),
                  onBlur: () => store.updateNextAction(task.id, nextDraft.trim()),
                  onKeyDown: (event) => {
                    if (event.key === 'Enter') event.currentTarget.blur();
                  },
                }),
              ),
              h(
                'div',
                { className: 'td-nextcard-actions' },
                h('div', { className: 'td-nextcard-note' }, checks.length
                  ? (ready ? t('thread.review') : fmt(t('detail.checksDone'), { done, total: checks.length }))
                  : `${task.running ? t('detail.running') : t('detail.idle')} · ${task.updated}`),
                h(
                  'div',
                  { className: 'td-nextcard-btns' },
                  h(
                    'button',
                    {
                      type: 'button',
                      className: 'td-btn td-btn-ghost td-btn-sm',
                      onClick: () => props.onFocusSession(task.id),
                    },
                    h(Icon, { name: 'message', size: 12 }),
                    t('detail.focusSession'),
                  ),
                  h(
                    'button',
                    {
                      type: 'button',
                      className: 'td-btn td-btn-primary td-btn-sm',
                      onClick: () => props.onOpenFlow(task.id, 'continue'),
                    },
                    t('detail.continue'),
                    h(Icon, { name: 'arrowRight', size: 12 }),
                  ),
                ),
              ),
            ),
            h(
              'section',
              { className: 'td-section' },
              h('div', { className: 'td-section-head' }, h('div', { className: 'td-section-title' }, t('detail.description'))),
              h('div', { className: 'td-card' }, h('div', { className: 'td-description' }, task.description || t('detail.sessionDescription'))),
            ),
            h(
              'section',
              { className: 'td-section' },
              h(
                'div',
                { className: 'td-section-head' },
                h('div', { className: 'td-section-title' }, t('detail.turnDetail')),
                h('div', { className: 'td-section-meta' }, turnData && turnData.length ? t('detail.turnDetailHint') : t('insights.noData')),
              ),
              h(
                'div',
                { className: 'td-card' },
                turnData && turnData.length
                  ? h(TurnBars, {
                    turns: turnData,
                    ariaLabel: t('detail.turnDetail'),
                    workLabel: t('insights.colWork'),
                    tokenLabel: t('insights.colTokens'),
                    openLabel: t('detail.turnOpen'),
                    showCost: true,
                    costLabel: t('insights.colCost'),
                    currency: (state.pricing || DEFAULT_PRICING).currency,
                  })
                  : h('div', { className: 'td-ins-empty' }, h(Icon, { name: 'clock', size: 16 }), h('span', null, t('detail.turnPending'))),
              ),
            ),
            h(
              'section',
              { className: 'td-section' },
              h(
                'div',
                { className: 'td-section-head' },
                h('div', { className: 'td-section-title' }, t('detail.checklist')),
                h('div', { className: 'td-section-meta' }, checks.length ? fmt(t('detail.checksDone'), { done, total: checks.length }) : t('detail.noChecks')),
              ),
              h(
                'div',
                { className: 'td-card', style: { padding: '9px 10px' } },
                checks.length > 0
                  ? h(ProgressBar, { value: Math.round((done / checks.length) * 100) })
                  : null,
                checks.length === 0
                  ? h('div', { className: 'td-description', style: { padding: '7px 5px 9px' } }, t('detail.noChecks'))
                  : h(
                    'div',
                    { className: 'td-checklist', style: { marginTop: 8 } },
                    checks.map((check, index) => h(
                      'div',
                      {
                        key: index,
                        className: `td-check-row${check.done ? ' is-done' : ''}`,
                        role: 'checkbox',
                        tabIndex: 0,
                        'aria-checked': !!check.done,
                        onClick: () => store.toggleCheck(task.id, index),
                        onKeyDown: (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            store.toggleCheck(task.id, index);
                          }
                        },
                      },
                      h('span', { className: 'td-check-box' }, h(Icon, { name: 'check', size: 11, strokeWidth: 2.2 })),
                      h('span', { className: 'td-check-text' }, check.text),
                    )),
                  ),
                h(
                  'form',
                  {
                    className: 'td-add-check',
                    onSubmit: (event) => {
                      event.preventDefault();
                      store.addCheck(task.id, checkDraft);
                      setCheckDraft('');
                    },
                  },
                  h('input', {
                    value: checkDraft,
                    placeholder: t('detail.addCheckPlaceholder'),
                    'aria-label': t('detail.addCheck'),
                    onChange: (event) => setCheckDraft(event.target.value),
                  }),
                  h(
                    'button',
                    { type: 'submit', className: 'td-btn td-btn-secondary td-btn-sm', disabled: !checkDraft.trim() },
                    h(Icon, { name: 'plus', size: 11 }),
                    t('detail.addCheck'),
                  ),
                ),
              ),
            ),
            h(
              'section',
              { className: 'td-section' },
              h(
                'div',
                { className: 'td-section-head' },
                h('div', { className: 'td-section-title' }, t('detail.branchMap')),
                h('div', { className: 'td-section-meta' }, fmt(t('detail.subtasks'), { n: children.length })),
              ),
              h(
                'div',
                { className: 'td-card' },
                h(
                  'div',
                  { className: 'td-branchmap' },
                  parent ? h(BranchNode, { task: parent, t, onOpen: props.onOpenTask }) : h(BranchNode, { task, t, current: true }),
                  parent ? h(BranchNode, { task, t, current: true }) : null,
                  children.slice(0, 5).map((item) => h(BranchNode, { key: item.id, task: item, t, onOpen: props.onOpenTask })),
                  children.length === 0 && !parent
                    ? h('div', { className: 'td-description', style: { padding: '6px 4px' } }, t('detail.none'))
                    : null,
                ),
              ),
            ),
            h(
              'section',
              { className: 'td-section' },
              h(
                'div',
                { className: 'td-section-head' },
                h('div', { className: 'td-section-title' }, t('detail.sessions')),
                h('div', { className: 'td-section-meta' }, (task.sessions || []).length),
              ),
              h(
                'div',
                { className: 'td-card', style: { padding: '4px 12px' } },
                (task.sessions || []).length === 0
                  ? h('div', { className: 'td-description', style: { padding: '10px 0' } }, t('detail.noRelated'))
                  : (task.sessions || []).map((session) => h(
                    'div',
                    { className: 'td-session-row', key: session.id },
                    h('span', { className: 'td-session-icon' }, h(Icon, { name: 'session', size: 14 })),
                    h(
                      'div',
                      { className: 'td-session-copy' },
                      h('div', { className: 'td-session-title' }, session.title),
                      h(
                        'div',
                        { className: 'td-session-meta' },
                        h('span', { className: 'td-row-dot', style: statusStyle(session.state || 'active') }),
                        session.when,
                      ),
                    ),
                    h(
                      'button',
                      {
                        type: 'button',
                        className: 'td-session-open',
                        title: t('detail.openSession'),
                        'aria-label': t('detail.openSession'),
                        onClick: () => props.onFocusSession(session.id),
                      },
                      h(Icon, { name: 'arrowUpRight', size: 13 }),
                    ),
                  )),
              ),
            ),
            h(
              'section',
              { className: 'td-section' },
              h('div', { className: 'td-section-head' }, h('div', { className: 'td-section-title' }, t('detail.activity'))),
              h(
                'div',
                { className: 'td-card' },
                (task.activity || []).length === 0
                  ? h('div', { className: 'td-description' }, t('detail.activityEmpty'))
                  : (task.activity || []).slice(0, 7).map((entry, index) => h(
                    'div',
                    { className: 'td-activity-row', key: index },
                    h('span', { className: 'td-activity-avatar' }, entry.who === t('common.system') ? h(Icon, { name: 'session', size: 12 }) : '你'),
                    h(
                      'div',
                      { className: 'td-activity-body' },
                      h('div', { className: 'td-activity-text' }, h('strong', null, entry.who), ' ', entry.text),
                      h('div', { className: 'td-activity-when' }, entry.when),
                    ),
                  )),
              ),
            ),
          ),
          h(
            'aside',
            { className: 'td-detail-rail' },
            h(
              'div',
              { className: 'td-session-card' },
              h(
                'div',
                { className: `td-session-live${task.running ? ' is-live' : ''}` },
                h('span', { className: 'td-row-state-dot' }),
                task.running ? t('detail.running') : t('detail.idle'),
              ),
              h('div', { className: 'td-session-real' }, task.realTitle),
              h('div', { className: 'td-session-id' }, task.id),
              h('div', { className: 'td-session-meta' }, `${t('detail.lastActivity')} · ${task.updated}`),
            ),
            task.blocker ? h(
              'div',
              { className: 'td-blocker' },
              h('div', { className: 'td-blocker-title' }, h(Icon, { name: 'alert', size: 12 }), t('detail.reason')),
              h('div', { className: 'td-blocker-text' }, task.blocker),
            ) : null,
            h(
              'div',
              { className: `td-reviewcard${ready ? ' is-ready' : ''}` },
              h(
                'div',
                { className: 'td-review-top', style: { color: ready ? 'var(--dsw-alias-state-success-primary)' : 'var(--dsw-alias-label-primary)' } },
                h(Icon, { name: ready ? 'check' : 'review', size: 13 }),
                ready ? t('detail.reviewGate') : checks.length ? fmt(t('detail.checksDone'), { done, total: checks.length }) : t('detail.noChecks'),
              ),
              h('div', { className: 'td-review-hint' }, ready ? t('detail.reviewHint') : checks.length ? fmt(t('detail.reviewRemaining'), { n: Math.max(0, checks.length - done) }) : t('detail.reviewNoChecks')),
              ready && !task.running && task.status !== 'review' && task.status !== 'done' ? h(
                'button',
                {
                  type: 'button',
                  className: 'td-btn td-btn-secondary td-btn-sm',
                  style: { width: '100%' },
                  onClick: () => {
                    store.setStatus(task.id, 'review', t('status.review'));
                    flash(t('toast.reviewMoved'));
                  },
                },
                t('detail.reviewReady'),
              ) : h(StatusChip, { status: task.status, t }),
            ),
            h(
              'div',
              { className: 'td-props', style: { marginTop: 10 } },
              h(
                'div',
                { className: 'td-props-head' },
                h('span', null, t('detail.properties')),
                h(Icon, { name: 'chevronDown', size: 13 }),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, t('detail.status')),
                h(
                  'select',
                  {
                    className: 'td-status-select',
                    value: task.manualStatus || 'auto',
                    disabled: task.running,
                    title: task.running ? t('detail.running') : t('detail.status'),
                    'aria-label': t('detail.status'),
                    onChange: (event) => {
                      const value = event.target.value;
                      if (value === 'auto') {
                        store.clearStatus(task.id);
                        flash(t('toast.statusUpdated'));
                        return;
                      }
                      store.setStatus(task.id, value, t(STATUS_KEY[value]));
                      flash(value === 'review' ? t('toast.reviewMoved') : t('toast.statusUpdated'));
                    },
                  },
                  h('option', { value: 'auto' }, t('auto.statusAuto')),
                  STATUS_ORDER.filter((status) => status !== 'active').map((status) => h('option', { key: status, value: status }, t(STATUS_KEY[status]))),
                ),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, t('detail.priority')),
                h(
                  'select',
                  {
                    className: 'td-status-select',
                    value: task.priority,
                    'aria-label': t('detail.priority'),
                    onChange: (event) => store.setPriority(task.id, event.target.value),
                  },
                  ['P0', 'P1', 'P2'].map((priority) => h('option', { key: priority, value: priority }, priority)),
                ),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'user', size: 11 }), t('detail.owner')),
                h('span', { className: 'td-prop-value' }, task.owner),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'session', size: 11 }), t('detail.sessionId')),
                h('span', { className: 'td-prop-value td-mono' }, `${task.id.slice(0, 10)}…`),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'clock', size: 11 }), t('detail.lastActivity')),
                h('span', { className: 'td-prop-value' }, task.updated),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'folder', size: 11 }), t('detail.workspace')),
                h('span', { className: 'td-prop-value' }, task.workspace),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'branch', size: 11 }), t('detail.currentBranch')),
                h('span', { className: 'td-branch-chip', title: task.branch }, task.branch),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'tag', size: 11 }), t('detail.tags')),
                h(
                  'span',
                  { className: 'td-prop-value', style: { gap: 4, flexWrap: 'wrap', justifyContent: 'flex-end' } },
                  (task.tags || []).map((tag) => h('span', { className: 'td-chip', key: tag, style: { height: 19, padding: '0 6px', background: 'var(--dsw-alias-bg-layer-2)', pointerEvents: 'none' } }, tag)),
                ),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'layers', size: 11 }), t('detail.parent')),
                parent
                  ? h(
                    'button',
                    { type: 'button', className: 'td-rail-link', style: { marginTop: 0, fontSize: 10.5 }, onClick: () => props.onOpenTask(parent.id) },
                    parent.title,
                  )
                  : h('span', { className: 'td-prop-value' }, t('detail.none')),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'branch', size: 11 }), t('detail.children')),
                h('span', { className: 'td-prop-value' }, children.length),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'clock', size: 11 }), t('detail.workTime')),
                h('span', { className: 'td-prop-value', title: stat ? `${t('insights.colSpan')} ${formatDuration(stat.spanMs)}` : '' }, stat ? formatDuration(stat.workMs) : '—'),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'layers', size: 11 }), t('detail.tokenUsage')),
                h('span', { className: 'td-prop-value', title: stat ? `${t('insights.input')} ${stat.tokens.input} · ${t('insights.cacheRead')} ${stat.tokens.cacheRead} · ${t('insights.output')} ${stat.tokens.output}` : '' }, stat ? formatTokens(stat.tokens.total) : formatTokens(task.tokens && task.tokens.total)),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'check', size: 11 }), t('detail.turns')),
                h('span', { className: 'td-prop-value' }, stat ? stat.turns : '—'),
              ),
              h(
                'div',
                { className: 'td-prop' },
                h('span', { className: 'td-prop-label' }, h(Icon, { name: 'tag', size: 11 }), t('detail.cost')),
                h('span', {
                  className: 'td-prop-value',
                  title: stat && stat.cost
                    ? `${t('insights.peakHours')} ${formatMoney(stat.cost.peak, stat.cost.currency)} · ${t('insights.offPeakHours')} ${formatMoney(stat.cost.offPeak, stat.cost.currency)}`
                    : '',
                }, stat && stat.cost ? formatMoney(stat.cost.total, stat.cost.currency) : '—'),
              ),
            ),
          ),
        ),
      );
    }

    const FLOW_MODES = [
      { key: 'continue', icon: 'play', title: 'flow.modeContinue', desc: 'flow.modeContinueDesc' },
      { key: 'branch', icon: 'branch', title: 'flow.modeBranch', desc: 'flow.modeBranchDesc' },
      { key: 'handoff', icon: 'layers', title: 'flow.modeHandoff', desc: 'flow.modeHandoffDesc' },
    ];

    function BranchFlow(props) {
      const task = props.task;
      const t = props.t;
      const initial = props.initialMode || 'continue';
      const [step, setStep] = React.useState(props.initialMode ? 2 : 1);
      const [mode, setMode] = React.useState(initial);
      const [title, setTitle] = React.useState('');
      const [branchName, setBranchName] = React.useState(task.branch);
      const [prompt, setPrompt] = React.useState('');
      const [busy, setBusy] = React.useState(false);
      const [error, setError] = React.useState('');
      const dialogRef = React.useRef(null);

      function titleFor(nextMode) {
        const key = nextMode === 'branch'
          ? 'flow.newBranchTitle'
          : nextMode === 'handoff'
            ? 'flow.handoffTitle'
            : 'flow.continueTitle';
        return fmt(t(key), { title: task.title });
      }

      function branchFor(nextMode) {
        if (nextMode === 'continue') return task.branch;
        if (nextMode === 'handoff') return `handoff/${String(task.id).slice(0, 8)}`;
        return `fork/${String(task.id).slice(0, 8)}`;
      }

      function promptFor(nextMode) {
        const branch = branchFor(nextMode);
        return `任务 ${task.id}「${task.title}」\n当前分支：${branch}\n下一步：${task.nextAction}\n\n${t('flow.suggest1')}`;
      }

      React.useEffect(() => {
        setTitle(titleFor(mode));
        setBranchName(branchFor(mode));
        setPrompt(promptFor(mode));
      }, [mode, task.id]);

      React.useEffect(() => {
        function onKeyDown(event) {
          if (event.key === 'Escape') {
            event.preventDefault();
            props.onClose();
          }
        }
        window.addEventListener('keydown', onKeyDown);
        if (dialogRef.current) dialogRef.current.focus();
        return () => window.removeEventListener('keydown', onKeyDown);
      }, []);

      async function create() {
        if (busy) return;
        setBusy(true);
        setError('');
        try {
          await props.store.createFromTask(task.id, {
            mode,
            title,
            branchName,
            prompt,
          });
          props.onCreated(mode);
        } catch (failure) {
          setError(failure && failure.message ? failure.message : String(failure));
        } finally {
          setBusy(false);
        }
      }

      const selectedMode = FLOW_MODES.find((item) => item.key === mode) || FLOW_MODES[0];

      return h(
        'div',
        {
          className: 'td-modal-root',
          onMouseDown: (event) => {
            if (event.target === event.currentTarget) props.onClose();
          },
        },
        h(
          'div',
          {
            className: 'td-modal',
            role: 'dialog',
            'aria-modal': 'true',
            'aria-labelledby': 'td-flow-title',
            ref: dialogRef,
            tabIndex: -1,
          },
          h(
            'div',
            { className: 'td-modal-head' },
            h(
              'div',
              null,
              h('div', { className: 'td-modal-kicker' }, `${task.id} · ${task.workspace}`),
              h('h2', { className: 'td-modal-title', id: 'td-flow-title' }, t('flow.title')),
              h('p', { className: 'td-modal-sub' }, t('flow.subtitle')),
            ),
            h(
              'button',
              { type: 'button', className: 'td-iconbtn', onClick: props.onClose, 'aria-label': t('common.close'), title: t('common.close') },
              h(Icon, { name: 'close', size: 16 }),
            ),
          ),
          h(
            'div',
            { className: 'td-steps' },
            [1, 2, 3].map((number, index) => h(
              React.Fragment,
              { key: number },
              index > 0 ? h('span', { className: 'td-step-sep' }) : null,
              h(
                'div',
                { className: `td-step${step === number ? ' is-active' : step > number ? ' is-done' : ''}` },
                h('span', { className: 'td-step-num' }, step > number ? h(Icon, { name: 'check', size: 9, strokeWidth: 2.4 }) : number),
                h('span', null, t(`flow.step${number}`)),
              ),
            )),
          ),
          h(
            'div',
            { className: 'td-modal-body' },
            step === 1 ? h(
              'div',
              null,
              h(
                'div',
                { className: 'td-sourcecard' },
                h('span', { className: 'td-session-icon', style: { background: 'var(--dsw-alias-bg-layer-2)' } }, h(Icon, { name: 'deck', size: 14 })),
                h(
                  'div',
                  { className: 'td-sourcecopy' },
                  h('div', { className: 'td-sourcetitle' }, task.title),
                  h('div', { className: 'td-sourcemeta' }, `${t('flow.source')} · ${task.id} · ${task.branch}`),
                ),
                h(StatusChip, { status: task.status, t }),
              ),
              h(
                'div',
                { className: 'td-modegrid', style: { marginTop: 12 } },
                FLOW_MODES.map((item) => h(
                  'button',
                  {
                    key: item.key,
                    type: 'button',
                    className: `td-modecard${mode === item.key ? ' is-selected' : ''}`,
                    onClick: () => setMode(item.key),
                    'aria-pressed': mode === item.key,
                  },
                  h('span', { className: 'td-modeicon' }, h(Icon, { name: item.icon, size: 15 })),
                  h('span', { className: 'td-modetitle' }, t(item.title)),
                  h('span', { className: 'td-modedesc' }, t(item.desc)),
                )),
              ),
            ) : null,
            step === 2 ? h(
              'div',
              null,
              h(
                'div',
                { className: 'td-sourcecard' },
                h('span', { className: 'td-session-icon' }, h(Icon, { name: selectedMode.icon, size: 14 })),
                h(
                  'div',
                  { className: 'td-sourcecopy' },
                  h('div', { className: 'td-sourcetitle' }, t(selectedMode.title)),
                  h('div', { className: 'td-sourcemeta' }, `${t('flow.source')} · ${task.id} · ${task.title}`),
                ),
                h(StatusChip, { status: task.status, t }),
              ),
              mode === 'continue' ? h(
                'div',
                { className: 'td-flow-note' },
                h(Icon, { name: 'message', size: 14 }),
                h('span', null, t('flow.continueInfo')),
              ) : h(
                'div',
                { className: 'td-formgrid' },
                h(
                  'div',
                  { className: 'td-field is-wide' },
                  h('label', { htmlFor: 'td-flow-title-field' }, t('flow.alias')),
                  h('input', {
                    id: 'td-flow-title-field',
                    className: 'td-input',
                    value: title,
                    onChange: (event) => setTitle(event.target.value),
                  }),
                  h('div', { className: 'td-field-hint' }, t('flow.aliasHintShort')),
                ),
                h(
                  'div',
                  { className: 'td-field' },
                  h('label', { htmlFor: 'td-flow-branch' }, t('flow.branchName')),
                  h('input', {
                    id: 'td-flow-branch',
                    className: 'td-input',
                    value: branchName,
                    onChange: (event) => setBranchName(event.target.value),
                  }),
                ),
                h(
                  'div',
                  { className: 'td-field is-wide' },
                  h('div', { className: 'td-flow-note' },
                    h(Icon, { name: 'branch', size: 14 }),
                    h('span', null, t('flow.forkInherit')),
                  ),
                ),
              ),
            ) : null,
            step === 3 ? h(
              'div',
              null,
              h(
                'div',
                { className: 'td-field' },
                h('label', { htmlFor: 'td-flow-prompt' }, t('flow.prompt')),
                h('textarea', {
                  id: 'td-flow-prompt',
                  className: 'td-textarea',
                  value: prompt,
                  onChange: (event) => setPrompt(event.target.value),
                }),
                h('div', { className: 'td-field-hint' }, t('flow.copyHint')),
                h('div', { className: 'td-suggestions' },
                  ['flow.suggest1', 'flow.suggest2', 'flow.suggest3'].map((key) => h(
                    'button',
                    {
                      key,
                      type: 'button',
                      className: 'td-suggestion',
                      onClick: () => setPrompt(t(key)),
                    },
                    t(key),
                  )),
                ),
              ),
              h(
                'div',
                { className: 'td-psummary' },
                h('div', { className: 'td-psummary-title' }, t('flow.summary')),
                h(
                  'div',
                  { className: 'td-psummary-grid' },
                  h('div', { className: 'td-psummary-item' }, h('div', { className: 'td-psummary-label' }, t('flow.summaryMode')), h('div', { className: 'td-psummary-value' }, t(selectedMode.title))),
                  h('div', { className: 'td-psummary-item' }, h('div', { className: 'td-psummary-label' }, t('flow.summaryBase')), h('div', { className: 'td-psummary-value' }, `${task.id} · ${task.title}`)),
                  h('div', { className: 'td-psummary-item' }, h('div', { className: 'td-psummary-label' }, t('flow.branchName')), h('div', { className: 'td-psummary-value' }, branchName)),
                  h('div', { className: 'td-psummary-item' }, h('div', { className: 'td-psummary-label' }, t('flow.summaryDestination')), h('div', { className: 'td-psummary-value' }, `${task.workspace} · ${mode === 'continue' ? t('thread.continue') : t('thread.branchAction')}`)),
                ),
              ),
            ) : null,
            error ? h('div', { className: 'td-flow-error' }, fmt(t('flow.error'), { message: error })) : null,
          ),
          h(
            'div',
            { className: 'td-modal-foot' },
            h('span', { className: 'td-modal-hint' }, step === 3 ? t('flow.promptHint') : t('flow.subtitle')),
            h(
              'div',
              { className: 'td-modal-foot-right' },
              step === 1
                ? h('button', { type: 'button', className: 'td-btn td-btn-ghost', onClick: props.onClose }, t('common.cancel'))
                : h('button', { type: 'button', className: 'td-btn td-btn-ghost', onClick: () => setStep(step - 1) }, t('flow.back')),
              step < 3
                ? h('button', {
                  type: 'button',
                  className: 'td-btn td-btn-primary',
                  disabled: mode !== 'continue' && (!title.trim() || !branchName.trim()),
                  onClick: () => setStep(step + 1),
                }, t('flow.next'), h(Icon, { name: 'arrowRight', size: 13 }))
                : h('button', {
                  type: 'button',
                  className: 'td-btn td-btn-primary',
                  disabled: busy || !prompt.trim(),
                  onClick: create,
                }, busy ? t('flow.working') : t('flow.create'), busy ? null : h(Icon, { name: 'arrowUpRight', size: 13 })),
            ),
          ),
        ),
      );
    }

    function ThreadPanel(props) {
      const ctx = props.ctx;
      const store = props.store;
      const t = useLocale(ctx);
      const state = useDeck(store);
      const [flow, setFlow] = React.useState(null);
      const [toast, flash] = useFlash();
      const sessionId = props.sessionId || '';
      const task = findTask(state, sessionId)
        || findTask(state, state.sessionTaskId)
        || currentTaskOf(state);
      const checks = task ? (task.checks || []) : [];
      const done = checks.filter((check) => check.done).length;

      function openDetail() {
        if (!task) return;
        store.openTask(task.id);
        try {
          const layout = ctx.get('layout');
          if (layout) layout.selectPanel(PANEL_ID);
        } catch (error) {
          /* The Task Deck entry remains available in the sidebar. */
        }
      }

      if (!task) {
        return h(
          'div',
          { className: 'td-thread' },
          h(
            'div',
            { className: 'td-thread-unlinked' },
            h('div', { className: 'td-empty-icon', style: { margin: '0 auto 10px' } }, h(Icon, { name: 'deck', size: 18 })),
            h('div', { className: 'td-empty-title' }, t('thread.title')),
            h('p', null, t('thread.unlinked')),
            h('button', { type: 'button', className: 'td-btn td-btn-secondary td-btn-sm', onClick: openDetail }, t('thread.openTaskDeck')),
          ),
        );
      }

      const currentSessionRow = h(
        'div',
        { className: 'td-thread-session is-current' },
        h('span', { className: 'td-thread-session-dot' }),
        h(
          'div',
          { className: 'td-thread-session-copy' },
          h('div', { className: 'td-thread-session-title' }, sessionId ? t('thread.currentSession') : t('thread.noSession')),
          h('div', { className: 'td-thread-session-meta' }, sessionId ? `${sessionId.slice(0, 8)}…` : task.updated),
        ),
      );

      return h(
        React.Fragment,
        null,
        h(
          'div',
          { className: 'td-thread', 'data-taskdeck-root': 'thread' },
        h(
          'div',
          { className: 'td-thread-head' },
          h(
            'div',
            null,
            h('div', { className: 'td-thread-heading' }, h(Icon, { name: 'deck', size: 15 }), t('thread.title')),
            h('div', { className: 'td-thread-sub' }, t('thread.subtitle')),
          ),
          h(
            'button',
            { type: 'button', className: 'td-iconbtn', title: t('thread.openDetail'), 'aria-label': t('thread.openDetail'), onClick: openDetail },
            h(Icon, { name: 'arrowUpRight', size: 14 }),
          ),
        ),
        h(
          'div',
          { className: 'td-thread-card' },
          h(
            'div',
            { className: 'td-thread-task-top' },
            h('span', { className: 'td-thread-key' }, task.id),
            h(StatusChip, { status: task.status, t }),
          ),
          h('div', { className: 'td-thread-task-title' }, task.title),
          h(
            'div',
            { className: 'td-thread-meta' },
            h(PriorityChip, { priority: task.priority }),
            h('span', { className: 'td-branch-chip', title: task.branch }, h(Icon, { name: 'branch', size: 11 }), h('span', null, task.branch)),
          ),
          task.autoDone ? h(
            'div',
            { className: 'td-thread-auto' },
            h(Icon, { name: 'clock', size: 12 }),
            h('span', null, fmt(t('auto.doneLabel'), { duration: autoWindowLabel(state.autoDoneHours, t) })),
            h(
              'button',
              {
                type: 'button',
                onClick: () => {
                  store.setStatus(task.id, 'waiting', t('status.waiting'));
                  flash(t('toast.statusUpdated'));
                },
              },
              t('auto.reopen'),
            ),
          ) : null,
          h(
            'div',
            { className: 'td-thread-live' },
            h('span', { className: `td-thread-live-dot${task.running ? ' is-live' : ''}` }),
            h('span', null, task.running ? t('detail.running') : t('detail.idle')),
            h('span', { className: 'td-thread-live-time' }, task.updated),
          ),
        ),
        h(
          'div',
          { className: 'td-thread-section' },
          h('div', { className: 'td-thread-label' }, t('thread.nextAction')),
          h(
            'div',
            { className: 'td-thread-action' },
            h(
              'button',
              {
                type: 'button',
                className: 'td-check-btn',
                disabled: task.running && checks.length === 0,
                title: checks.length ? t('detail.markDone') : t('detail.markReview'),
                'aria-label': checks.length ? t('detail.markDone') : t('detail.markReview'),
                onClick: () => {
                  store.completeNext(task.id);
                  flash(t('toast.stepDone'));
                },
              },
              h(Icon, { name: 'check', size: 10 }),
            ),
            h(
              'div',
              { className: 'td-thread-action-copy' },
              h('div', null, task.nextAction),
              h(
                'button',
                { type: 'button', onClick: () => setFlow({ mode: 'continue' }) },
                t('thread.continue'),
                h(Icon, { name: 'arrowRight', size: 11 }),
              ),
            ),
          ),
        ),
        task.blocker ? h(
          'div',
          { className: 'td-thread-section' },
          h('div', { className: 'td-thread-label' }, t('thread.blocker')),
          h(
            'div',
            { className: 'td-blocker', style: { marginTop: 0 } },
            h('div', { className: 'td-blocker-text' }, task.blocker),
          ),
        ) : null,
        h(
          'div',
          { className: 'td-thread-section' },
          h(
            'div',
            { className: 'td-thread-label' },
            h('span', null, t('thread.sessions')),
            h('span', null, t('thread.currentSession')),
          ),
          currentSessionRow,
          (task.sessions || []).slice(0, 2).map((session) => h(
            'div',
            { className: 'td-thread-session', key: session.id },
            h('span', { className: 'td-thread-session-dot', style: { background: 'var(--dsw-alias-label-secondary)', opacity: .55 } }),
            h(
              'div',
              { className: 'td-thread-session-copy' },
              h('div', { className: 'td-thread-session-title' }, session.title),
              h('div', { className: 'td-thread-session-meta' }, `${session.when} · ${task.id}`),
            ),
          )),
        ),
        h(
          'div',
          { className: 'td-thread-section' },
          h('div', { className: 'td-thread-label' }, t('thread.quickActions')),
          h(
            'div',
            { className: 'td-thread-actions' },
            h(
              'button',
              { type: 'button', className: 'td-btn td-btn-primary', onClick: () => setFlow({ mode: 'continue' }) },
              h(Icon, { name: 'play', size: 12 }),
              t('thread.continue'),
            ),
            h(
              'button',
              { type: 'button', className: 'td-btn td-btn-secondary', onClick: () => setFlow({ mode: 'branch' }) },
              h(Icon, { name: 'branch', size: 12 }),
              t('thread.branchAction'),
            ),
            h(
              'button',
              { type: 'button', className: 'td-btn td-btn-ghost', onClick: openDetail },
              h(Icon, { name: 'arrowUpRight', size: 12 }),
              t('thread.openDetail'),
            ),
          ),
        ),
        h(
          'div',
          { className: 'td-thread-footer' },
          h(
            'button',
            { type: 'button', onClick: () => { store.openTask(task.id); try { ctx.get('layout')?.selectPanel(PANEL_ID); } catch (error) {} } },
            h(Icon, { name: 'deck', size: 12 }),
            t('thread.openTaskDeck'),
          ),
          h('span', { style: { flex: 1 } }),
          h('span', { title: fmt(t('detail.checksDone'), { done, total: checks.length }) }, `${done}/${checks.length}`),
        ),
        ),
        flow ? h(BranchFlow, {
          key: `thread-${task.id}-${flow.mode}`,
          ctx,
          store,
          t,
          task,
          initialMode: flow.mode,
          onClose: () => setFlow(null),
          onCreated: (mode) => {
            setFlow(null);
            flash(mode === 'continue' ? t('flow.continued') : mode === 'handoff' ? t('flow.handoff') : t('flow.created'));
          },
        }) : null,
        toast ? h(Toast, { message: toast }) : null,
      );
    }

    function ThreadLauncher(props) {
      const ctx = props.ctx;
      const store = props.store;
      const t = useLocale(ctx);
      const state = useDeck(store);
      const task = findTask(state, props.sessionId)
        || findTask(state, state.sessionTaskId)
        || currentTaskOf(state);
      function openPanelOnly() {
        try {
          const layout = ctx.get('layout');
          if (layout && typeof layout.selectPanel === 'function') layout.selectPanel(PANEL_ID);
        } catch (error) {
          /* the panel may not be selectable yet */
        }
      }
      function open() {
        if (!task) {
          openPanelOnly();
          return;
        }
        store.setSessionTask(task.id);
        try {
          const rightbar = ctx.get('sidebarRight');
          if (rightbar && typeof rightbar.openTab === 'function') {
            rightbar.openTab(TAB_KIND);
            return;
          }
        } catch (error) {
          /* fall through to the Task Deck panel below */
        }
        // No right sidebar in this build: land on the task so its thread actions stay reachable.
        try {
          store.openTask(task.id);
        } catch (error) {
          /* the store may already be rebuilding */
        }
        openPanelOnly();
      }
      return h(
        'button',
        {
          type: 'button',
          className: `td-headbtn${task ? '' : ' is-idle'}`,
          title: t('thread.title'),
          'aria-label': t('thread.title'),
          onClick: open,
        },
        h(Icon, { name: 'deck', size: 15 }),
        task ? h('span', { className: 'td-headdot', style: { background: STATUS_TOKEN[task.status] } }) : null,
      );
    }

    const CSS = String.raw`
      .td-root {
        height: 100%;
        min-height: 100%;
        overflow: auto;
        background: var(--dsw-alias-bg-base);
        color: var(--dsw-alias-label-primary);
        font-size: 13px;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
      }
      .td-root *, .td-modal-root * { box-sizing: border-box; }
      .td-root :where(button), .td-modal-root :where(button) { font: inherit; color: inherit; }
      .td-root :focus-visible, .td-modal-root :focus-visible {
        outline: 2px solid var(--dsw-alias-brand-primary);
        outline-offset: 2px;
      }
      .td-shell { height: 100%; min-height: 100%; }
      .td-inner { max-width: 1180px; margin: 0 auto; padding: 28px 32px 56px; }
      .td-topbar { display: flex; align-items: flex-start; justify-content: space-between; gap: 24px; }
      .td-title-wrap { min-width: 0; }
      .td-eyebrow {
        display: flex; align-items: center; gap: 7px;
        color: var(--dsw-alias-label-secondary);
        font-size: 10px; font-weight: 650; letter-spacing: .13em; text-transform: uppercase;
      }
      .td-eyebrow-mark {
        width: 17px; height: 17px; display: grid; place-items: center;
        border-radius: 5px; background: var(--dsw-alias-label-primary); color: var(--dsw-alias-bg-base);
      }
      .td-title { margin: 7px 0 0; font-size: 26px; line-height: 1.18; font-weight: 620; letter-spacing: -.025em; }
      .td-subtitle { margin: 7px 0 0; color: var(--dsw-alias-label-secondary); font-size: 12.5px; max-width: 560px; }
      .td-actions { display: flex; align-items: center; gap: 8px; flex: none; padding-top: 3px; }
      .td-search {
        display: flex; align-items: center; gap: 8px;
        width: 248px; height: 34px; padding: 0 10px;
        border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px;
        background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-secondary);
        transition: border-color .14s ease, background .14s ease, box-shadow .14s ease;
      }
      .td-search:focus-within {
        border-color: color-mix(in srgb, var(--dsw-alias-brand-primary) 46%, var(--dsw-alias-border-l1));
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent);
      }
      .td-search input {
        width: 100%; min-width: 0; border: 0; outline: 0; background: transparent;
        color: var(--dsw-alias-label-primary); font: inherit; font-size: 12.5px;
      }
      .td-search input::placeholder { color: var(--dsw-alias-label-secondary); opacity: .82; }
      .td-kbd {
        display: inline-flex; align-items: center; gap: 2px; flex: none;
        height: 19px; padding: 0 5px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 5px;
        color: var(--dsw-alias-label-secondary); font-size: 10px; background: var(--dsw-alias-bg-base);
      }
      .td-btn {
        display: inline-flex; align-items: center; justify-content: center; gap: 7px;
        height: 34px; padding: 0 13px; border: 1px solid transparent; border-radius: 9px;
        font-size: 12.5px; font-weight: 560; white-space: nowrap; cursor: pointer;
        transition: background .14s ease, border-color .14s ease, transform .14s ease, opacity .14s ease;
      }
      .td-btn:active { transform: translateY(.5px); }
      .td-btn:disabled { opacity: .45; cursor: not-allowed; }
      .td-root .td-btn-primary, .td-modal-root .td-btn-primary {
        background: var(--dsw-alias-label-primary); color: var(--dsw-alias-bg-base);
      }
      .td-root .td-btn-primary:hover, .td-modal-root .td-btn-primary:hover { opacity: .86; }
      .td-btn-secondary {
        border-color: var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary);
      }
      .td-btn-secondary:hover { background: var(--dsw-alias-bg-layer-2); border-color: var(--dsw-alias-border-l2); }
      .td-btn-ghost { background: transparent; color: var(--dsw-alias-label-secondary); }
      .td-btn-ghost:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-btn-sm { height: 29px; padding: 0 10px; font-size: 12px; border-radius: 8px; }
      .td-iconbtn {
        width: 30px; height: 30px; padding: 0; display: inline-grid; place-items: center;
        border: 1px solid transparent; border-radius: 8px; background: transparent;
        color: var(--dsw-alias-label-secondary); cursor: pointer;
      }
      .td-iconbtn:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-focus {
        margin-top: 21px; display: flex; align-items: stretch; justify-content: space-between; gap: 22px;
        padding: 14px 15px 14px 16px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 14px;
        background:
          radial-gradient(130% 180% at 0% 0%, color-mix(in srgb, var(--dsw-alias-brand-primary) 7%, transparent) 0%, transparent 55%),
          var(--dsw-alias-bg-layer-1);
      }
      .td-focus-copy { display: flex; align-items: flex-start; gap: 10px; min-width: 0; padding: 4px 0; }
      .td-pulse {
        position: relative; width: 8px; height: 8px; margin-top: 6px; flex: none;
        border-radius: 50%; background: var(--dsw-alias-state-success-primary);
      }
      .td-pulse::after {
        content: ''; position: absolute; inset: -4px; border-radius: 50%;
        border: 1px solid color-mix(in srgb, var(--dsw-alias-state-success-primary) 32%, transparent);
        animation: td-pulse 2.2s ease-out infinite;
      }
      @keyframes td-pulse {
        0% { transform: scale(.6); opacity: .9; }
        80%, 100% { transform: scale(1.5); opacity: 0; }
      }
      .td-focus-label { display: flex; align-items: center; gap: 8px; font-size: 12.5px; font-weight: 620; }
      .td-focus-count { padding: 1px 6px; border-radius: 5px; background: color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent); color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-weight: 520; }
      .td-focus-hint { margin-top: 2px; color: var(--dsw-alias-label-secondary); font-size: 12px; }
      .td-stats { display: flex; align-items: stretch; flex: none; }
      .td-stat {
        min-width: 72px; padding: 2px 15px; border: 0; border-left: 1px solid var(--dsw-alias-border-l1);
        background: transparent; text-align: left; cursor: pointer; border-radius: 8px;
        transition: background .14s ease;
      }
      .td-stat:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent); }
      .td-stat-value { display: flex; align-items: center; gap: 6px; font-size: 20px; line-height: 1.1; font-weight: 600; letter-spacing: -.02em; font-variant-numeric: tabular-nums; }
      .td-stat-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--td-stat, var(--dsw-alias-state-idle-primary)); }
      .td-stat-label { margin-top: 3px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-nav { display: flex; align-items: center; gap: 2px; margin-top: 19px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
      .td-nav-tab {
        position: relative; height: 35px; padding: 0 11px; border: 0; background: transparent;
        color: var(--dsw-alias-label-secondary); font-size: 12.5px; font-weight: 540; cursor: pointer;
      }
      .td-nav-tab:hover { color: var(--dsw-alias-label-primary); }
      .td-nav-tab[aria-selected='true'] { color: var(--dsw-alias-label-primary); }
      .td-nav-tab[aria-selected='true']::after {
        content: ''; position: absolute; left: 8px; right: 8px; bottom: -1px; height: 2px;
        border-radius: 2px 2px 0 0; background: var(--dsw-alias-label-primary);
      }
      .td-nav-count {
        display: inline-grid; place-items: center; min-width: 17px; height: 17px; margin-left: 5px;
        padding: 0 4px; border-radius: 5px; background: var(--dsw-alias-bg-layer-2);
        color: var(--dsw-alias-label-secondary); font-size: 10px; font-variant-numeric: tabular-nums;
      }
      .td-grid { display: grid; grid-template-columns: minmax(0, 1fr) 286px; gap: 24px; padding-top: 16px; }
      .td-filterbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 30px; margin-bottom: 9px; flex-wrap: wrap; }
      .td-filter-actions { display: flex; align-items: center; justify-content: flex-end; gap: 12px; flex-wrap: wrap; }
      .td-auto-inline { display: inline-flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; white-space: nowrap; cursor: pointer; }
      .td-auto-inline select { height: 24px; padding: 0 5px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 6px; outline: 0; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-secondary); font: inherit; font-size: 10px; cursor: pointer; }
      .td-auto-inline select:focus { border-color: var(--dsw-alias-brand-primary); }
      .td-chips { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; }
      .td-chip {
        display: inline-flex; align-items: center; gap: 6px; height: 27px; padding: 0 9px;
        border: 1px solid transparent; border-radius: 7px; background: transparent;
        color: var(--dsw-alias-label-secondary); font-size: 11.5px; cursor: pointer;
      }
      .td-chip:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-chip[aria-pressed='true'] {
        border-color: var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1);
        color: var(--dsw-alias-label-primary); box-shadow: 0 1px 1px color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent);
      }
      .td-chip-count { color: var(--dsw-alias-label-secondary); font-size: 10.5px; font-variant-numeric: tabular-nums; }
      .td-sort { display: flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; white-space: nowrap; }
      .td-group { margin-bottom: 17px; }
      .td-group-head { display: flex; align-items: center; gap: 8px; padding: 5px 2px 8px; }
      .td-group-title { display: flex; align-items: center; gap: 7px; font-size: 11.5px; font-weight: 620; letter-spacing: .01em; }
      .td-group-count { color: var(--dsw-alias-label-secondary); font-size: 10.5px; font-variant-numeric: tabular-nums; }
      .td-group-line { flex: 1; height: 1px; background: var(--dsw-alias-border-l1); opacity: .7; }
      .td-list {
        border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; overflow: hidden;
        background: var(--dsw-alias-bg-layer-1);
      }
      .td-row {
        display: grid; grid-template-columns: minmax(0, 1fr) 142px 96px; gap: 14px; align-items: center;
        min-height: 59px; padding: 10px 14px; border-bottom: 1px solid var(--dsw-alias-border-l1);
        cursor: pointer; transition: background .12s ease;
      }
      .td-row:last-child { border-bottom: 0; }
      .td-row:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 3.2%, var(--dsw-alias-bg-layer-1)); }
      .td-row-main { min-width: 0; }
      .td-row-main-btn { width: 100%; padding: 0; border: 0; background: transparent; color: inherit; text-align: left; cursor: pointer; }
      .td-row-top { display: flex; align-items: center; gap: 7px; min-width: 0; }
      .td-row-dot { width: 7px; height: 7px; flex: none; border-radius: 50%; background: var(--td-status); box-shadow: 0 0 0 3px color-mix(in srgb, var(--td-status) 12%, transparent); }
      .td-key { color: var(--dsw-alias-label-secondary); font-size: 10.5px; font-variant-numeric: tabular-nums; letter-spacing: .015em; flex: none; }
      .td-task-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12.8px; font-weight: 560; letter-spacing: -.005em; }
      .td-title-pending { flex: none; color: var(--dsw-alias-label-secondary); opacity: .75; font-size: 10px; font-weight: 500; animation: td-pulse 1.6s ease-in-out infinite; }
      @keyframes td-pulse { 0%, 100% { opacity: .45; } 50% { opacity: .95; } }
      .td-priority {
        display: inline-grid; place-items: center; height: 17px; min-width: 25px; padding: 0 5px;
        border-radius: 4px; flex: none; background: color-mix(in srgb, var(--td-priority) 12%, transparent);
        color: var(--td-priority); font-size: 9.5px; font-weight: 650; letter-spacing: .02em;
      }
      .td-nextline { display: flex; align-items: center; gap: 5px; margin-top: 4px; padding-left: 14px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; min-width: 0; }
      .td-nextline svg { opacity: .72; }
      .td-next-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .td-row-branch { min-width: 0; }
      .td-branch-chip {
        display: inline-flex; align-items: center; gap: 4px; max-width: 100%;
        height: 20px; padding: 0 6px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 5px;
        color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-base);
        font-size: 10px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; white-space: nowrap; overflow: hidden;
      }
      .td-branch-chip span { overflow: hidden; text-overflow: ellipsis; }
      .td-row-updated { display: block; margin-top: 4px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-row-side { min-width: 0; }
      .td-row-state {
        display: inline-flex; align-items: center; gap: 5px; height: 20px; padding: 0 7px;
        border: 1px solid var(--dsw-alias-border-l1); border-radius: 5px;
        color: var(--dsw-alias-label-secondary); background: var(--dsw-alias-bg-base);
        font-size: 9.5px; white-space: nowrap;
      }
      .td-row-state-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--dsw-alias-label-secondary); opacity: .6; }
      .td-row-state.is-live { color: var(--dsw-alias-state-success-primary); border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 24%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 6%, var(--dsw-alias-bg-base)); }
      .td-row-state.is-live .td-row-state-dot { background: var(--dsw-alias-state-success-primary); opacity: 1; box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-success-primary) 15%, transparent); }
      .td-progress { height: 3px; border-radius: 2px; overflow: hidden; background: var(--dsw-alias-bg-layer-2); }
      .td-progress > span { display: block; height: 100%; border-radius: inherit; background: var(--dsw-alias-brand-primary); transition: width .25s ease; }
      .td-row-side-meta { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; color: var(--dsw-alias-label-secondary); font-size: 10px; font-variant-numeric: tabular-nums; }
      .td-row-continue {
        width: 22px; height: 22px; padding: 0; display: grid; place-items: center;
        border: 0; border-radius: 6px; background: transparent; color: var(--dsw-alias-label-secondary);
        opacity: 0; cursor: pointer; transition: opacity .12s ease, background .12s ease, color .12s ease;
      }
      .td-row:hover .td-row-continue, .td-row:focus-within .td-row-continue { opacity: 1; }
      .td-row-continue:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-rail { min-width: 0; }
      .td-railcard { margin-bottom: 10px; padding: 13px 13px 11px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); }
      .td-rail-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .td-rail-title { font-size: 11.5px; font-weight: 620; }
      .td-rail-hint { margin: 3px 0 9px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 1.45; }
      .td-mini-action { display: flex; align-items: flex-start; gap: 8px; width: 100%; padding: 7px 4px; border: 0; border-radius: 7px; background: transparent; text-align: left; cursor: pointer; }
      .td-mini-action:hover { background: var(--dsw-alias-bg-layer-2); }
      .td-mini-num { display: grid; place-items: center; width: 17px; height: 17px; flex: none; margin-top: 1px; border-radius: 5px; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-variant-numeric: tabular-nums; }
      .td-mini-copy { min-width: 0; }
      .td-mini-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11.5px; font-weight: 520; }
      .td-mini-next { display: flex; align-items: center; gap: 4px; margin-top: 2px; overflow: hidden; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-mini-next span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .td-rail-link { display: flex; align-items: center; gap: 4px; margin-top: 5px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; cursor: pointer; background: transparent; border: 0; padding: 2px; }
      .td-rail-link:hover { color: var(--dsw-alias-label-primary); }
      .td-sprint-top { display: flex; align-items: center; justify-content: space-between; }
      .td-sprint-name { display: flex; align-items: center; gap: 6px; font-size: 11.5px; font-weight: 600; }
      .td-sprint-pct { color: var(--dsw-alias-label-secondary); font-size: 10px; font-variant-numeric: tabular-nums; }
      .td-sprint-bar { display: flex; gap: 2px; height: 5px; margin: 10px 0 7px; }
      .td-sprint-bar span { flex: 1; border-radius: 2px; background: var(--dsw-alias-bg-layer-2); }
      .td-sprint-bar span.on { background: var(--dsw-alias-brand-primary); }
      .td-sprint-meta { display: flex; justify-content: space-between; color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-session-fact { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 27px; border-top: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-session-fact:first-of-type { border-top: 0; }
      .td-session-fact strong { color: var(--dsw-alias-label-primary); font-size: 11px; font-weight: 600; font-variant-numeric: tabular-nums; }
      .td-auto-note { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 13px; padding: 9px 10px; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-idle-primary) 24%, var(--dsw-alias-border-l1)); border-radius: 8px; background: color-mix(in srgb, var(--dsw-alias-state-idle-primary) 5%, transparent); color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 1.5; }
      .td-auto-note > span { flex: 1; min-width: 180px; }
      .td-thread-auto { display: flex; align-items: flex-start; gap: 6px; flex-wrap: wrap; margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); font-size: 9.5px; line-height: 1.45; }
      .td-thread-auto > span { flex: 1; min-width: 140px; }
      .td-thread-auto button { padding: 0; border: 0; background: transparent; color: var(--dsw-alias-brand-primary); font-size: 9.5px; font-weight: 600; cursor: pointer; }
      .td-empty { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 220px; padding: 28px; text-align: center; }
      .td-empty-icon { display: grid; place-items: center; width: 36px; height: 36px; margin-bottom: 10px; border-radius: 10px; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); }
      .td-empty-title { font-size: 12.5px; font-weight: 600; }
      .td-empty-hint { margin-top: 4px; max-width: 260px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; }
      .td-status-chip {
        display: inline-flex; align-items: center; gap: 5px; height: 22px; padding: 0 8px; border-radius: 6px;
        border: 1px solid color-mix(in srgb, var(--td-status) 22%, transparent);
        background: color-mix(in srgb, var(--td-status) 10%, transparent);
        color: var(--td-status); font-size: 10.5px; font-weight: 580; white-space: nowrap;
      }
      .td-status-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--td-status); }

      /* Task Detail */
      .td-detail { max-width: 1120px; margin: 0 auto; padding: 20px 32px 64px; }
      .td-detail-bar { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
      .td-back { display: inline-flex; align-items: center; gap: 6px; height: 30px; padding: 0 8px 0 5px; border: 0; border-radius: 7px; background: transparent; color: var(--dsw-alias-label-secondary); font-size: 11.5px; cursor: pointer; }
      .td-back:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-crumb { display: flex; align-items: center; gap: 5px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-crumb-sep { opacity: .45; }
      .td-detail-actions { display: flex; align-items: center; gap: 6px; }
      .td-detail-hero { margin-top: 17px; padding-bottom: 20px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
      .td-detail-kicker { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
      .td-detail-key { color: var(--dsw-alias-label-secondary); font-size: 10.5px; font-variant-numeric: tabular-nums; }
      .td-detail-title { max-width: 820px; margin: 9px 0 0; font-size: 26px; line-height: 1.26; font-weight: 620; letter-spacing: -.025em; }
      .td-detail-meta { display: flex; align-items: center; gap: 13px; flex-wrap: wrap; margin-top: 11px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; }
      .td-detail-meta span { display: inline-flex; align-items: center; gap: 5px; }
      .td-detail-grid { display: grid; grid-template-columns: minmax(0, 1fr) 294px; gap: 30px; margin-top: 22px; }
      .td-detail-main { min-width: 0; }
      .td-nextcard {
        padding: 15px 16px; border: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 26%, var(--dsw-alias-border-l1));
        border-radius: 13px;
        background:
          radial-gradient(120% 160% at 0% 0%, color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent), transparent 65%),
          var(--dsw-alias-bg-layer-1);
      }
      .td-nextcard-label { display: flex; align-items: center; gap: 6px; color: var(--dsw-alias-brand-primary); font-size: 10px; font-weight: 650; letter-spacing: .07em; text-transform: uppercase; }
      .td-nextcard-row { display: flex; align-items: flex-start; gap: 10px; margin-top: 8px; }
      .td-nextcard-copy { flex: 1; min-width: 0; font-size: 14px; line-height: 1.45; font-weight: 540; letter-spacing: -.008em; }
      .td-next-input {
        flex: 1; min-width: 0; margin: -4px -6px; padding: 4px 6px;
        border: 1px solid transparent; border-radius: 7px; outline: 0;
        background: transparent; color: var(--dsw-alias-label-primary);
        font: inherit; font-size: 14px; font-weight: 540; line-height: 1.45; letter-spacing: -.008em;
      }
      .td-next-input:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 4%, transparent); }
      .td-next-input:focus { border-color: var(--dsw-alias-brand-primary); background: var(--dsw-alias-bg-base); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent); }
      .td-check-btn {
        width: 21px; height: 21px; flex: none; margin-top: 1px; display: grid; place-items: center;
        border: 1.5px solid var(--dsw-alias-border-l2); border-radius: 50%; background: transparent;
        color: var(--dsw-alias-label-secondary); cursor: pointer;
      }
      .td-check-btn:hover { border-color: var(--dsw-alias-brand-primary); color: var(--dsw-alias-brand-primary); background: color-mix(in srgb, var(--dsw-alias-brand-primary) 8%, transparent); }
      .td-check-btn:disabled { opacity: .35; cursor: not-allowed; }
      .td-check-btn:disabled:hover { border-color: var(--dsw-alias-border-l2); color: var(--dsw-alias-label-secondary); background: transparent; }
      .td-nextcard-actions { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 12px; padding-top: 11px; border-top: 1px solid color-mix(in srgb, var(--dsw-alias-brand-primary) 16%, var(--dsw-alias-border-l1)); }
      .td-nextcard-note { color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-nextcard-btns { display: flex; gap: 6px; }
      .td-section { margin-top: 24px; }
      .td-section-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 9px; }
      .td-section-title { display: flex; align-items: center; gap: 7px; font-size: 12px; font-weight: 620; }
      .td-section-meta { color: var(--dsw-alias-label-secondary); font-size: 10.5px; font-variant-numeric: tabular-nums; }
      .td-card { padding: 15px 16px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); }
      .td-description { color: var(--dsw-alias-label-secondary); font-size: 12.5px; line-height: 1.7; white-space: pre-wrap; }
      .td-checklist { display: flex; flex-direction: column; gap: 1px; }
      .td-check-row { display: flex; align-items: flex-start; gap: 9px; padding: 8px 5px; border-radius: 7px; cursor: pointer; }
      .td-check-row:hover { background: var(--dsw-alias-bg-layer-2); }
      .td-check-box {
        width: 17px; height: 17px; flex: none; margin-top: 1px; display: grid; place-items: center;
        border: 1.4px solid var(--dsw-alias-border-l2); border-radius: 5px; background: transparent;
        color: transparent;
      }
      .td-check-row.is-done .td-check-box { border-color: var(--dsw-alias-brand-primary); background: var(--dsw-alias-brand-primary); color: var(--dsw-alias-bg-base); }
      .td-check-row.is-done .td-check-text { color: var(--dsw-alias-label-secondary); text-decoration: line-through; text-decoration-color: color-mix(in srgb, var(--dsw-alias-label-secondary) 45%, transparent); }
      .td-check-text { font-size: 12.5px; line-height: 1.5; }
      .td-add-check { display: flex; align-items: center; gap: 7px; margin-top: 8px; padding: 8px 5px 2px; border-top: 1px solid var(--dsw-alias-border-l1); }
      .td-add-check input { flex: 1; min-width: 0; height: 28px; padding: 0 8px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 7px; outline: 0; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); font: inherit; font-size: 11.5px; }
      .td-add-check input:focus { border-color: var(--dsw-alias-brand-primary); }
      .td-real-title { margin-top: 7px; color: var(--dsw-alias-label-secondary); font-size: 11px; }
      .td-mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 10px; }
      .td-status-select { height: 24px; max-width: 150px; padding: 0 6px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 6px; outline: 0; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); font: inherit; font-size: 10.5px; }
      .td-status-select:focus { border-color: var(--dsw-alias-brand-primary); }
      .td-status-select:disabled { opacity: .55; cursor: not-allowed; }
      .td-branchmap { display: flex; flex-direction: column; }
      .td-bnode { position: relative; display: flex; align-items: flex-start; gap: 9px; padding: 7px 4px; border-radius: 7px; }
      .td-bnode[role='button'] { cursor: pointer; }
      .td-bnode[role='button']:hover { background: var(--dsw-alias-bg-layer-2); }
      .td-bnode:not(:last-child)::before { content: ''; position: absolute; left: 9px; top: 24px; bottom: -7px; width: 1px; background: var(--dsw-alias-border-l1); }
      .td-bdot { position: relative; z-index: 1; width: 11px; height: 11px; flex: none; margin-top: 4px; border-radius: 50%; border: 2px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-1); }
      .td-bnode.is-current .td-bdot { border-color: var(--dsw-alias-brand-primary); background: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent); }
      .td-bcopy { min-width: 0; flex: 1; }
      .td-btitle { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 540; }
      .td-btitle span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .td-bmeta { display: flex; align-items: center; gap: 8px; margin-top: 3px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-bbranch { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }
      .td-session-row { display: flex; align-items: center; gap: 9px; padding: 9px 4px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
      .td-session-row:last-child { border-bottom: 0; }
      .td-session-icon { display: grid; place-items: center; width: 26px; height: 26px; flex: none; border-radius: 7px; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); }
      .td-session-copy { min-width: 0; flex: 1; }
      .td-session-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11.5px; font-weight: 520; }
      .td-session-meta { display: flex; align-items: center; gap: 6px; margin-top: 2px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-session-open { width: 24px; height: 24px; display: grid; place-items: center; border: 0; border-radius: 6px; background: transparent; color: var(--dsw-alias-label-secondary); cursor: pointer; }
      .td-session-open:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-activity-row { display: flex; gap: 10px; padding: 8px 0; }
      .td-activity-avatar { width: 24px; height: 24px; flex: none; display: grid; place-items: center; border-radius: 50%; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-weight: 600; }
      .td-activity-body { min-width: 0; }
      .td-activity-text { font-size: 11.5px; line-height: 1.5; color: var(--dsw-alias-label-secondary); }
      .td-activity-text strong { color: var(--dsw-alias-label-primary); font-weight: 560; }
      .td-activity-when { margin-top: 2px; color: var(--dsw-alias-label-secondary); font-size: 9.5px; opacity: .8; }
      .td-detail-rail { min-width: 0; }
      .td-props { border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); overflow: hidden; }
      .td-props-head { display: flex; align-items: center; justify-content: space-between; padding: 11px 13px 9px; border-bottom: 1px solid var(--dsw-alias-border-l1); font-size: 11.5px; font-weight: 620; }
      .td-prop { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 34px; padding: 6px 13px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
      .td-prop:last-child { border-bottom: 0; }
      .td-prop-label { display: flex; align-items: center; gap: 6px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-prop-value { display: flex; align-items: center; gap: 5px; min-width: 0; font-size: 11px; font-weight: 520; text-align: right; }
      .td-prop-value .td-branch-chip { max-width: 150px; }
      .td-ring-card { display: flex; flex-direction: column; align-items: center; padding: 15px 13px 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); }
      .td-ring {
        width: 82px; height: 82px; display: grid; place-items: center; border-radius: 50%;
        background: conic-gradient(var(--dsw-alias-brand-primary) calc(var(--p) * 1%), var(--dsw-alias-bg-layer-2) 0);
      }
      .td-ring-inner { width: 68px; height: 68px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 50%; background: var(--dsw-alias-bg-layer-1); }
      .td-ring-value { font-size: 17px; line-height: 1; font-weight: 620; letter-spacing: -.03em; font-variant-numeric: tabular-nums; }
      .td-ring-label { margin-top: 3px; color: var(--dsw-alias-label-secondary); font-size: 9px; }
      .td-session-card { display: flex; flex-direction: column; align-items: flex-start; padding: 14px 14px 13px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); }
      .td-session-live { display: inline-flex; align-items: center; gap: 6px; height: 22px; padding: 0 8px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 6px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-session-live.is-live { color: var(--dsw-alias-state-success-primary); border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 24%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 6%, transparent); }
      .td-session-live.is-live .td-row-state-dot { background: var(--dsw-alias-state-success-primary); }
      .td-session-real { width: 100%; margin-top: 9px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; font-weight: 560; }
      .td-session-id { width: 100%; margin-top: 3px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--dsw-alias-label-secondary); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 9.5px; }
      .td-session-meta { margin-top: 8px; color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-reviewcard { margin-top: 10px; padding: 12px 13px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); }
      .td-reviewcard.is-ready { border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 28%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 4%, var(--dsw-alias-bg-layer-1)); }
      .td-review-top { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; }
      .td-review-hint { margin: 5px 0 9px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 1.5; }
      .td-blocker { margin-top: 10px; padding: 11px 12px; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 24%, var(--dsw-alias-border-l1)); border-radius: 10px; background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 6%, var(--dsw-alias-bg-layer-1)); }
      .td-blocker-title { display: flex; align-items: center; gap: 5px; color: var(--dsw-alias-state-error-primary); font-size: 10.5px; font-weight: 600; }
      .td-blocker-text { margin-top: 4px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 1.5; }

      /* Right thread panel */
      .td-thread { height: 100%; overflow-y: auto; padding: 13px 13px 30px; background: var(--dsw-alias-bg-base); container-type: inline-size; }
      .td-thread-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; padding: 1px 1px 11px; }
      .td-thread-heading { display: flex; align-items: center; gap: 7px; font-size: 12.5px; font-weight: 620; }
      .td-thread-sub { margin-top: 2px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-thread-card { padding: 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 11px; background: var(--dsw-alias-bg-layer-1); }
      .td-thread-task-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .td-thread-key { color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-variant-numeric: tabular-nums; }
      .td-thread-task-title { margin-top: 7px; font-size: 13px; line-height: 1.38; font-weight: 590; letter-spacing: -.01em; }
      .td-thread-meta { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
      .td-thread-progress { margin-top: 10px; }
      .td-thread-progress-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; color: var(--dsw-alias-label-secondary); font-size: 9.5px; }
      .td-thread-progress-top strong { color: var(--dsw-alias-label-primary); font-weight: 600; font-variant-numeric: tabular-nums; }
      .td-thread-live { display: flex; align-items: center; gap: 6px; margin-top: 10px; padding-top: 9px; border-top: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-thread-live-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--dsw-alias-label-secondary); opacity: .55; }
      .td-thread-live-dot.is-live { background: var(--dsw-alias-state-success-primary); opacity: 1; box-shadow: 0 0 0 2px color-mix(in srgb, var(--dsw-alias-state-success-primary) 15%, transparent); }
      .td-thread-live-time { margin-left: auto; }
      .td-thread-section { margin-top: 10px; }
      .td-thread-label { display: flex; align-items: center; justify-content: space-between; margin: 0 1px 5px; color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-weight: 620; letter-spacing: .06em; text-transform: uppercase; }
      .td-thread-action { display: flex; align-items: flex-start; gap: 8px; padding: 10px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px; background: var(--dsw-alias-bg-layer-1); }
      .td-thread-action-copy { min-width: 0; flex: 1; font-size: 11.5px; line-height: 1.45; }
      .td-thread-action-copy button { display: inline-flex; align-items: center; gap: 3px; margin-top: 6px; padding: 0; border: 0; background: transparent; color: var(--dsw-alias-brand-primary); font-size: 10.5px; font-weight: 600; cursor: pointer; }
      .td-thread-session { display: flex; align-items: center; gap: 8px; padding: 7px 8px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; background: var(--dsw-alias-bg-layer-1); }
      .td-thread-session + .td-thread-session { margin-top: 5px; }
      .td-thread-session.is-current { border-color: color-mix(in srgb, var(--dsw-alias-state-success-primary) 26%, var(--dsw-alias-border-l1)); background: color-mix(in srgb, var(--dsw-alias-state-success-primary) 5%, var(--dsw-alias-bg-layer-1)); }
      .td-thread-session-copy { min-width: 0; flex: 1; }
      .td-thread-session-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10.5px; font-weight: 520; }
      .td-thread-session-meta { margin-top: 1px; color: var(--dsw-alias-label-secondary); font-size: 9px; }
      .td-thread-session-dot { width: 5px; height: 5px; flex: none; border-radius: 50%; background: var(--dsw-alias-state-success-primary); }
      .td-thread-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
      .td-thread-actions .td-btn { width: 100%; height: 31px; padding: 0 8px; font-size: 11px; }
      .td-thread-actions .td-btn:last-child { grid-column: 1 / -1; }
      .td-thread-footer { display: flex; align-items: center; gap: 8px; margin-top: 14px; padding: 10px 2px 0; border-top: 1px solid var(--dsw-alias-border-l1); }
      .td-thread-footer button { display: inline-flex; align-items: center; gap: 4px; padding: 0; border: 0; background: transparent; color: var(--dsw-alias-label-secondary); font-size: 10px; cursor: pointer; }
      .td-thread-footer button:hover { color: var(--dsw-alias-label-primary); }
      .td-thread-unlinked { padding: 20px 12px; text-align: center; }
      .td-thread-unlinked p { margin: 8px 0 12px; color: var(--dsw-alias-label-secondary); font-size: 11px; line-height: 1.5; }
      .td-thread-card .td-branch-chip { max-width: 100%; }
      @container (max-width: 330px) {
        .td-thread { padding: 10px 10px 24px; }
        .td-thread-actions { grid-template-columns: 1fr; }
        .td-thread-actions .td-btn:last-child { grid-column: auto; }
      }

      /* Branch flow modal */
      .td-modal-root { position: fixed; inset: 0; z-index: 80; display: flex; align-items: center; justify-content: center; padding: 22px; background: color-mix(in srgb, var(--dsw-alias-label-primary) 23%, transparent); backdrop-filter: blur(3px); }
      .td-modal { width: min(752px, 100%); max-height: min(780px, calc(100vh - 44px)); overflow: auto; border: 1px solid var(--dsw-alias-border-l1); border-radius: 17px; background: var(--dsw-alias-bg-layer-1); box-shadow: 0 24px 80px color-mix(in srgb, var(--dsw-alias-label-primary) 20%, transparent); animation: td-rise .18s ease-out both; }
      @keyframes td-rise { from { opacity: 0; transform: translateY(7px) scale(.995); } to { opacity: 1; transform: none; } }
      .td-modal-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; padding: 19px 21px 0; }
      .td-modal-kicker { color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-weight: 650; letter-spacing: .11em; text-transform: uppercase; }
      .td-modal-title { margin: 5px 0 0; font-size: 19px; line-height: 1.25; font-weight: 620; letter-spacing: -.02em; }
      .td-modal-sub { margin: 5px 0 0; color: var(--dsw-alias-label-secondary); font-size: 11.5px; max-width: 500px; }
      .td-steps { display: flex; align-items: center; gap: 6px; margin: 17px 21px 0; padding-bottom: 14px; border-bottom: 1px solid var(--dsw-alias-border-l1); }
      .td-step { display: flex; align-items: center; gap: 6px; min-width: 0; color: var(--dsw-alias-label-secondary); font-size: 10.5px; }
      .td-step-num { display: grid; place-items: center; width: 18px; height: 18px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 50%; font-size: 9px; flex: none; }
      .td-step.is-active { color: var(--dsw-alias-label-primary); font-weight: 560; }
      .td-step.is-active .td-step-num { border-color: var(--dsw-alias-label-primary); background: var(--dsw-alias-label-primary); color: var(--dsw-alias-bg-base); }
      .td-step.is-done .td-step-num { border-color: var(--dsw-alias-state-success-primary); color: var(--dsw-alias-state-success-primary); }
      .td-step-sep { width: 22px; height: 1px; background: var(--dsw-alias-border-l1); flex: none; }
      .td-modal-body { padding: 18px 21px 4px; }
      .td-modegrid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 9px; }
      .td-modecard { display: flex; flex-direction: column; align-items: flex-start; gap: 7px; min-height: 146px; padding: 13px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 11px; background: var(--dsw-alias-bg-base); text-align: left; cursor: pointer; transition: border-color .14s ease, background .14s ease, transform .14s ease; }
      .td-modecard:hover { border-color: var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-2); }
      .td-modecard.is-selected { border-color: var(--dsw-alias-label-primary); background: var(--dsw-alias-bg-layer-2); box-shadow: 0 0 0 1px var(--dsw-alias-label-primary) inset; }
      .td-modeicon { display: grid; place-items: center; width: 29px; height: 29px; border-radius: 8px; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-modecard.is-selected .td-modeicon { background: var(--dsw-alias-label-primary); color: var(--dsw-alias-bg-base); }
      .td-modetitle { font-size: 12px; font-weight: 600; }
      .td-modedesc { color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 1.48; }
      .td-sourcecard { display: flex; align-items: center; gap: 9px; padding: 10px 11px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px; background: var(--dsw-alias-bg-base); }
      .td-sourcecopy { min-width: 0; flex: 1; }
      .td-sourcetitle { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11.5px; font-weight: 560; }
      .td-sourcemeta { margin-top: 2px; color: var(--dsw-alias-label-secondary); font-size: 9.5px; }
      .td-formgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 11px; margin-top: 13px; }
      .td-field { min-width: 0; }
      .td-field.is-wide { grid-column: 1 / -1; }
      .td-field label { display: block; margin-bottom: 5px; color: var(--dsw-alias-label-secondary); font-size: 10px; font-weight: 560; }
      .td-field-hint { margin-top: 5px; color: var(--dsw-alias-label-secondary); font-size: 9.5px; line-height: 1.45; }
      .td-flow-note { display: flex; align-items: flex-start; gap: 8px; margin-top: 12px; padding: 10px 11px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-secondary); font-size: 10.5px; line-height: 1.5; }
      .td-flow-note svg { margin-top: 1px; flex: none; }
      .td-flow-error { margin-top: 11px; padding: 9px 10px; border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary) 28%, var(--dsw-alias-border-l1)); border-radius: 8px; background: color-mix(in srgb, var(--dsw-alias-state-error-primary) 6%, transparent); color: var(--dsw-alias-state-error-primary); font-size: 10.5px; line-height: 1.5; }
      .td-input, .td-select, .td-textarea {
        width: 100%; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px;
        background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary);
        font: inherit; font-size: 11.5px; outline: 0;
      }
      .td-input, .td-select { height: 33px; padding: 0 9px; }
      .td-textarea { min-height: 112px; padding: 9px; resize: vertical; line-height: 1.55; }
      .td-input:focus, .td-select:focus, .td-textarea:focus { border-color: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--dsw-alias-brand-primary) 11%, transparent); }
      .td-checks { display: grid; grid-template-columns: 1fr 1fr; gap: 5px 10px; margin-top: 6px; }
      .td-check-option { display: flex; align-items: center; gap: 6px; color: var(--dsw-alias-label-secondary); font-size: 10.5px; cursor: pointer; }
      .td-check-option input { accent-color: var(--dsw-alias-brand-primary); }
      .td-suggestions { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 6px; }
      .td-suggestion { height: 24px; padding: 0 7px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 6px; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-secondary); font-size: 9.5px; cursor: pointer; }
      .td-suggestion:hover { border-color: var(--dsw-alias-border-l2); color: var(--dsw-alias-label-primary); }
      .td-psummary { margin-top: 13px; padding: 11px 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px; background: var(--dsw-alias-bg-base); }
      .td-psummary-title { color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-weight: 650; letter-spacing: .06em; text-transform: uppercase; }
      .td-psummary-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 14px; margin-top: 7px; }
      .td-psummary-item { min-width: 0; }
      .td-psummary-label { color: var(--dsw-alias-label-secondary); font-size: 9px; }
      .td-psummary-value { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 1px; font-size: 10.5px; }
      .td-modal-foot { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-top: 15px; padding: 13px 21px 18px; border-top: 1px solid var(--dsw-alias-border-l1); }
      .td-modal-foot-right { display: flex; gap: 6px; }
      .td-modal-hint { color: var(--dsw-alias-label-secondary); font-size: 9.5px; }

      /* Toast */
      .td-toast {
        position: fixed; left: 50%; bottom: 24px; z-index: 90; transform: translateX(-50%);
        display: flex; align-items: center; gap: 7px; max-width: calc(100vw - 40px);
        padding: 9px 12px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px;
        background: var(--dsw-alias-bg-overlay); color: var(--dsw-alias-label-primary);
        box-shadow: 0 10px 30px color-mix(in srgb, var(--dsw-alias-label-primary) 14%, transparent);
        font-size: 11.5px; animation: td-rise .16s ease-out both;
      }
      .td-toast-icon { display: grid; place-items: center; width: 17px; height: 17px; border-radius: 50%; background: var(--dsw-alias-state-success-primary); color: var(--dsw-alias-bg-base); }

      /* Sidebar and header entry points */
      .td-navicon { position: relative; display: inline-grid; place-items: center; }
      .td-navicon-badge {
        position: absolute; top: -4px; right: -5px; display: grid; place-items: center;
        min-width: 12px; height: 12px; padding: 0 3px; border-radius: 6px;
        background: var(--dsw-alias-state-error-primary); color: var(--dsw-alias-bg-base);
        font-size: 8px; line-height: 1; font-weight: 700; font-variant-numeric: tabular-nums;
        box-shadow: 0 0 0 1.5px var(--dsw-specific-sidebar-fill);
      }
      .td-headbtn {
        position: relative; width: 30px; height: 30px; display: grid; place-items: center;
        padding: 0; border: 1px solid transparent; border-radius: 8px; background: transparent;
        color: var(--dsw-alias-label-secondary); cursor: pointer;
      }
      .td-headbtn:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-headbtn.is-idle { opacity: .78; }
      .td-headbtn .td-headdot {
        position: absolute; right: 4px; top: 4px; width: 5px; height: 5px; border-radius: 50%;
        background: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 1.5px var(--dsw-alias-bg-base);
      }

      /* Insights */
      .td-insights { display: grid; gap: 12px; padding-top: 16px; }
      .td-ins-toolbar { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
      .td-ins-chips { display: flex; align-items: center; gap: 6px; }
      .td-ins-stamp { color: var(--dsw-alias-label-secondary); font-size: 10.5px; font-variant-numeric: tabular-nums; }
      .td-ins-notice {
        display: flex; align-items: center; gap: 7px;
        padding: 9px 11px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px;
        background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-secondary); font-size: 11.5px;
      }
      .td-ins-notice.is-error { color: var(--dsw-alias-state-error-primary); border-color: color-mix(in srgb, var(--dsw-alias-state-error-primary) 34%, var(--dsw-alias-border-l1)); }
      .td-ins-kpis { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
      .td-ins-kpi {
        min-width: 0; padding: 12px 13px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 10px;
        background: var(--dsw-alias-bg-layer-1);
      }
      .td-ins-kpi-label { color: var(--dsw-alias-label-secondary); font-size: 10.5px; font-weight: 560; }
      .td-ins-kpi-value { margin-top: 5px; font-size: 21px; font-weight: 620; letter-spacing: -.02em; font-variant-numeric: tabular-nums; }
      .td-ins-kpi-hint { margin-top: 3px; color: var(--dsw-alias-label-secondary); font-size: 10px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .td-ins-card { padding: 13px 14px 15px; }
      .td-ins-card-head { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; }
      .td-ins-card-title { font-size: 10.5px; font-weight: 650; letter-spacing: .06em; text-transform: uppercase; color: var(--dsw-alias-label-secondary); }
      .td-ins-legend { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
      .td-ins-legend-item { display: flex; align-items: center; gap: 5px; font-size: 10.5px; color: var(--dsw-alias-label-secondary); }
      .td-ins-legend-item strong { color: var(--dsw-alias-label-primary); font-weight: 600; font-variant-numeric: tabular-nums; }
      .td-ins-dot { width: 7px; height: 7px; border-radius: 2px; }
      .td-ins-legend-item.is-read .td-ins-dot, .td-ins-seg.is-read { background: var(--dsw-alias-brand-primary); }
      .td-ins-legend-item.is-input .td-ins-dot, .td-ins-seg.is-input { background: color-mix(in srgb, var(--dsw-alias-label-primary) 42%, transparent); }
      .td-ins-legend-item.is-output .td-ins-dot, .td-ins-seg.is-output { background: var(--dsw-alias-state-success-primary); }
      .td-ins-legend-item.is-write .td-ins-dot, .td-ins-seg.is-write { background: var(--dsw-alias-state-warn-primary); }
      .td-ins-bar {
        display: flex; align-items: stretch; gap: 1px; height: 9px; margin-top: 11px;
        border-radius: 5px; overflow: hidden; background: var(--dsw-alias-bg-layer-2);
      }
      .td-ins-bar.is-empty { background: var(--dsw-alias-bg-layer-2); }
      .td-ins-seg { display: block; height: 100%; }
      .td-ins-table { display: grid; margin-top: 10px; }
      .td-ins-tr {
        display: grid; grid-template-columns: minmax(0, 1fr) 42px 68px 68px 124px 78px;
        align-items: center; gap: 10px; padding: 7px 2px;
      }
      .td-ins-thead {
        color: var(--dsw-alias-label-secondary); font-size: 10px; letter-spacing: .05em; text-transform: uppercase;
        border-bottom: 1px solid var(--dsw-alias-border-l1); padding-bottom: 5px;
      }
      .td-ins-row {
        width: 100%; border: 0; border-bottom: 1px solid color-mix(in srgb, var(--dsw-alias-border-l1) 62%, transparent);
        background: transparent; text-align: left; cursor: pointer; border-radius: 0; padding: 8px 2px;
      }
      .td-ins-row:last-child { border-bottom: 0; }
      .td-ins-row:hover { background: color-mix(in srgb, var(--dsw-alias-label-primary) 3.2%, transparent); }
      .td-ins-task { display: flex; align-items: center; gap: 7px; min-width: 0; }
      .td-ins-task-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12.2px; font-weight: 540; }
      .td-ins-task-key { flex: none; color: var(--dsw-alias-label-secondary); font-size: 10px; font-variant-numeric: tabular-nums; }
      .td-ins-num { font-size: 11.5px; font-variant-numeric: tabular-nums; text-align: right; }
      .td-ins-muted { color: var(--dsw-alias-label-secondary); }
      .td-ins-tokens { display: grid; gap: 4px; }
      .td-ins-token-total { font-size: 11.5px; font-weight: 560; font-variant-numeric: tabular-nums; text-align: right; }
      .td-ins-tokens .td-ins-bar { height: 5px; margin-top: 0; }
      .td-ins-sorts { display: flex; align-items: center; gap: 3px; }
      .td-ins-sort {
        padding: 3px 8px; border: 1px solid transparent; border-radius: 999px; background: transparent;
        color: var(--dsw-alias-label-secondary); font-size: 10.5px; cursor: pointer;
      }
      .td-ins-sort:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-ins-sort[aria-pressed='true'] { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); font-weight: 580; }
      .td-ins-empty { display: flex; align-items: center; gap: 7px; padding: 16px 2px; color: var(--dsw-alias-label-secondary); font-size: 11.5px; }
      .td-ins-ws { display: grid; grid-template-columns: minmax(0, 1fr) 120px 62px 62px; align-items: center; gap: 10px; padding: 6px 0; }
      .td-ins-ws-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 11.5px; }
      .td-ins-ws-bar { height: 6px; border-radius: 4px; background: var(--dsw-alias-bg-layer-2); overflow: hidden; }
      .td-ins-ws-bar span { display: block; height: 100%; background: color-mix(in srgb, var(--dsw-alias-brand-primary) 72%, transparent); }

      /* Charts */
      .td-chart { position: relative; margin-top: 10px; }
      .td-chart svg { display: block; overflow: visible; }
      .td-chart-grid { stroke: var(--dsw-alias-border-l1); stroke-width: 1; }
      .td-chart-axis { fill: var(--dsw-alias-label-secondary); font-size: 9.5px; }
      .td-chart-guide { stroke: var(--dsw-alias-label-secondary); stroke-width: 1; stroke-dasharray: 3 3; opacity: .45; }
      .td-chart-area.is-read { fill: color-mix(in srgb, var(--dsw-alias-brand-primary) 30%, transparent); }
      .td-chart-area.is-input { fill: color-mix(in srgb, var(--dsw-alias-label-primary) 22%, transparent); }
      .td-chart-area.is-output { fill: color-mix(in srgb, var(--dsw-alias-state-success-primary) 34%, transparent); }
      .td-chart-area.is-write { fill: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 34%, transparent); }
      .td-chart-area.is-work { fill: color-mix(in srgb, var(--dsw-alias-brand-primary) 12%, transparent); }
      .td-chart-line.is-work { fill: none; stroke: var(--dsw-alias-brand-primary); stroke-width: 1.6; stroke-linejoin: round; }
      .td-chart-point { fill: var(--dsw-alias-brand-primary); stroke: var(--dsw-alias-bg-layer-1); stroke-width: 1.5; }
      .td-chart-point.is-output { fill: var(--dsw-alias-state-success-primary); }
      .td-chart-tip {
        position: absolute; z-index: 3; pointer-events: none; min-width: 116px;
        padding: 7px 9px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px;
        background: var(--dsw-alias-bg-overlay); box-shadow: 0 6px 20px rgba(0, 0, 0, .16);
      }
      .td-chart-tip-title { color: var(--dsw-alias-label-secondary); font-size: 9.5px; font-variant-numeric: tabular-nums; }
      .td-chart-tip-row { display: flex; align-items: center; gap: 6px; margin-top: 3px; font-size: 10.5px; }
      .td-chart-tip-label { color: var(--dsw-alias-label-secondary); }
      .td-chart-tip-row strong { margin-left: auto; font-weight: 600; font-variant-numeric: tabular-nums; }
      .td-chart-dot { width: 7px; height: 7px; border-radius: 2px; background: var(--dsw-alias-label-secondary); flex: none; }
      .td-chart-dot.is-read { background: var(--dsw-alias-brand-primary); }
      .td-chart-dot.is-input { background: color-mix(in srgb, var(--dsw-alias-label-primary) 42%, transparent); }
      .td-chart-dot.is-output { background: var(--dsw-alias-state-success-primary); }
      .td-chart-dot.is-write { background: var(--dsw-alias-state-warn-primary); }
      .td-chart-dot.is-work { background: var(--dsw-alias-brand-primary); }
      .td-ins-split { display: grid; grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); gap: 12px; }
      .td-ins-kpi-foot { margin-top: 6px; display: flex; justify-content: flex-end; }
      .td-ins-foot { color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-ins-legend-item.is-off { opacity: .4; }
      .td-ins-legend { flex-wrap: wrap; }
      .td-spark { display: block; }
      .td-spark-line { fill: none; stroke: var(--dsw-alias-brand-primary); stroke-width: 1.4; stroke-linecap: round; }
      .td-spark-area { fill: color-mix(in srgb, var(--dsw-alias-brand-primary) 14%, transparent); }
      .td-spark.is-empty { height: 22px; }
      .td-donut { display: flex; align-items: center; gap: 16px; margin-top: 12px; flex-wrap: wrap; }
      .td-donut-track { stroke: var(--dsw-alias-bg-layer-2); }
      .td-donut-seg { cursor: pointer; transition: opacity .14s ease; }
      .td-donut-seg.is-hot { opacity: .78; }
      .td-donut-value { fill: var(--dsw-alias-label-primary); font-size: 16px; font-weight: 620; font-variant-numeric: tabular-nums; }
      .td-donut-label { fill: var(--dsw-alias-label-secondary); font-size: 9.5px; }
      .td-donut-legend { display: grid; gap: 2px; flex: 1; min-width: 150px; }
      .td-chart-legend {
        display: flex; align-items: center; gap: 6px; width: 100%;
        padding: 3px 2px; border: 0; border-radius: 6px; background: transparent;
        color: var(--dsw-alias-label-secondary); font-size: 10.5px; text-align: left; cursor: pointer;
      }
      .td-chart-legend.is-hot { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
      .td-chart-legend strong { margin-left: auto; color: var(--dsw-alias-label-primary); font-weight: 580; font-variant-numeric: tabular-nums; }
      .td-chart-legend-share { width: 30px; text-align: right; opacity: .65; font-variant-numeric: tabular-nums; }
      .td-heat-cell { fill: var(--dsw-alias-brand-primary); }
      .td-gantt-label { fill: var(--dsw-alias-label-primary); font-size: 10.5px; }
      .td-gantt-track { fill: var(--dsw-alias-bg-layer-2); }
      .td-gantt-bar { fill: color-mix(in srgb, var(--dsw-alias-brand-primary) 55%, transparent); }
      .td-gantt-bar.is-active { fill: var(--dsw-alias-state-success-primary); }
      .td-gantt-bar.is-waiting { fill: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 82%, transparent); }
      .td-gantt-bar.is-blocked { fill: var(--dsw-alias-state-error-primary); }
      .td-gantt-bar.is-review { fill: var(--dsw-alias-brand-primary); }
      .td-gantt-bar.is-done { fill: var(--dsw-alias-state-idle-primary); }
      .td-gantt-row { cursor: default; }
      .td-turn-bar { fill: color-mix(in srgb, var(--dsw-alias-brand-primary) 48%, transparent); transition: fill .12s ease; }
      .td-turn-bar.is-open { fill: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 72%, transparent); }
      .td-turn-bar.is-hot { fill: var(--dsw-alias-brand-primary); }

      /* Money */
      .td-ins-metric { display: flex; align-items: center; gap: 2px; padding: 2px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; background: var(--dsw-alias-bg-layer-1); }
      .td-ins-metric-btn {
        padding: 3px 9px; border: 0; border-radius: 6px; background: transparent;
        color: var(--dsw-alias-label-secondary); font-size: 10.5px; cursor: pointer;
      }
      .td-ins-metric-btn[aria-pressed='true'] { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); font-weight: 580; }
      .td-ins-cost { font-weight: 560; font-variant-numeric: tabular-nums; }
      .td-ins-peaks { display: flex; gap: 12px; margin-top: 10px; flex-wrap: wrap; }
      .td-ins-peak-item {
        flex: 1 1 160px; display: grid; gap: 2px; padding: 9px 11px;
        border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px; background: var(--dsw-alias-bg-layer-1);
      }
      .td-ins-peak-label { color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-ins-peak-item strong { font-size: 16px; font-weight: 620; font-variant-numeric: tabular-nums; }
      .td-ins-peak-share { color: var(--dsw-alias-label-secondary); font-size: 10px; }
      .td-ins-peak-item.is-off { border-color: color-mix(in srgb, var(--dsw-alias-state-warn-primary) 38%, var(--dsw-alias-border-l1)); }
      .td-ins-peak-item.is-off strong { color: var(--dsw-alias-state-warn-primary); }
      .td-chart-band { fill: color-mix(in srgb, var(--dsw-alias-brand-primary) 10%, transparent); stroke: color-mix(in srgb, var(--dsw-alias-brand-primary) 26%, transparent); stroke-dasharray: 3 3; }
      .td-hour-bar { fill: color-mix(in srgb, var(--dsw-alias-brand-primary) 52%, transparent); transition: fill .12s ease; }
      .td-hour-bar.is-hot { fill: var(--dsw-alias-brand-primary); }
      .td-price-panel { margin-top: 2px; }
      .td-price-row { display: flex; align-items: flex-end; gap: 10px; flex-wrap: wrap; margin-top: 10px; }
      .td-price-field { display: grid; gap: 3px; font-size: 10px; color: var(--dsw-alias-label-secondary); }
      .td-price-input {
        width: 96px; height: 26px; padding: 0 7px;
        border: 1px solid var(--dsw-alias-border-l1); border-radius: 6px;
        background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); font-size: 11px;
      }
      .td-price-input:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }
      .td-price-head {
        display: grid; grid-template-columns: minmax(90px, 1fr) repeat(5, 88px) 26px;
        align-items: center; gap: 8px; margin-top: 8px;
        color: var(--dsw-alias-label-secondary); font-size: 10px; letter-spacing: .04em; text-transform: uppercase;
      }
      .td-price-model { text-transform: none; letter-spacing: 0; font-size: 11px; color: var(--dsw-alias-label-primary); }
      .td-price-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
      .td-price-remove {
        width: 22px; height: 22px; border: 0; border-radius: 6px; background: transparent;
        color: var(--dsw-alias-label-secondary); cursor: pointer;
      }
      .td-price-remove:hover:not(:disabled) { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-state-error-primary); }
      .td-price-remove:disabled { opacity: .25; cursor: default; }
      .td-price-weekdays { min-width: 200px; }
      .td-price-chips { display: flex; gap: 3px; }
      .td-price-chip {
        width: 24px; height: 24px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 6px;
        background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-secondary);
        font-size: 10.5px; cursor: pointer;
      }
      .td-price-chip[aria-pressed='true'] { background: var(--dsw-alias-brand-primary); color: var(--dsw-alias-bg-base); border-color: transparent; }
      .td-price-windows { flex: 1 1 100%; }
      .td-price-windows-list { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
      .td-price-window { display: flex; align-items: center; gap: 4px; }
      .td-price-dash { color: var(--dsw-alias-label-secondary); }
      .td-price-holidays { flex: 1 1 100%; }
      .td-price-textarea {
        width: 100%; height: auto; min-height: 54px; padding: 6px 7px;
        font-family: inherit; line-height: 1.5; resize: vertical;
      }

      /* Responsive */
      @container (max-width: 900px) {
        .td-grid { grid-template-columns: 1fr; }
        .td-rail { display: none; }
        .td-detail-grid { grid-template-columns: 1fr; }
        .td-detail-rail { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: start; }
        .td-detail-rail > * { margin: 0; }
      }
      @media (max-width: 900px) {
        .td-ins-kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .td-ins-split { grid-template-columns: minmax(0, 1fr); }
        .td-ins-tr { grid-template-columns: minmax(0, 1fr) 42px 66px 118px; }
        .td-ins-tr > :nth-child(4) { display: none; }
      }
      @media (max-width: 760px) {
        .td-inner, .td-detail { padding-left: 18px; padding-right: 18px; }
        .td-ins-kpis { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .td-ins-ws { grid-template-columns: minmax(0, 1fr) 80px 58px; }
        .td-ins-ws > :nth-child(4) { display: none; }
        .td-filter-actions { width: 100%; justify-content: space-between; }
        .td-sort { display: none; }
        .td-auto-inline-label { display: none; }
        .td-topbar { flex-direction: column; gap: 14px; }
        .td-actions { width: 100%; }
        .td-search { width: 100%; flex: 1; }
        .td-row { grid-template-columns: minmax(0, 1fr) 86px; }
        .td-row-branch { display: none; }
        .td-focus { flex-direction: column; gap: 12px; }
        .td-stats { border-top: 1px solid var(--dsw-alias-border-l1); padding-top: 11px; }
        .td-stat { flex: 1; min-width: 0; }
        .td-detail-title { font-size: 23px; }
        .td-detail-rail { grid-template-columns: 1fr; }
        .td-modegrid { grid-template-columns: 1fr; }
        .td-modecard { min-height: 0; }
        .td-formgrid, .td-psummary-grid, .td-checks { grid-template-columns: 1fr; }
        .td-modal { max-height: calc(100vh - 28px); }
        .td-modal-root { padding: 14px; }
      }
      @media (max-width: 520px) {
        .td-inner, .td-detail { padding-left: 14px; padding-right: 14px; }
        .td-ins-kpis { grid-template-columns: minmax(0, 1fr); }
        .td-price-head { grid-template-columns: minmax(48px, 1fr) repeat(5, 48px) 18px; gap: 4px; }
        .td-price-head .td-price-input { width: 100%; }
        .td-price-row .td-price-input { width: 100%; }
        .td-ins-tr { grid-template-columns: minmax(0, 1fr) 62px 100px; }
        .td-ins-tr > :nth-child(2) { display: none; }
        .td-ins-card-head { align-items: flex-start; }
        .td-row { grid-template-columns: minmax(0, 1fr); gap: 7px; }
        .td-row-side { display: flex; align-items: center; gap: 10px; padding-left: 14px; }
        .td-row-side .td-progress { flex: 1; }
        .td-row-side-meta { margin-top: 0; gap: 5px; }
        .td-row-continue { opacity: 1; }
        .td-stats { flex-wrap: wrap; }
        .td-stat { flex: 1 1 42%; border-left: 0; border-top: 1px solid var(--dsw-alias-border-l1); padding: 9px 4px; }
        .td-stat:nth-child(-n + 2) { border-top: 0; }
        .td-detail-actions .td-btn span { display: none; }
      }
      @media (prefers-reduced-motion: reduce) {
        .td-root *, .td-modal-root * { animation-duration: .01ms !important; transition-duration: .01ms !important; }
      }
    `;

    return {
      inject: ['slots', 'locale', 'sessions'],
      apply(ctx) {
        const t = ctx.locale.bind(NS);

        ctx.effect(() => ctx.locale.register(NS, 'en', EN));
        ctx.effect(() => ctx.locale.register(NS, 'zh', ZH));

        const store = createDeckStore({
          sessions: ctx.sessions,
          getUiWorkspace: () => ctx.get('uiWorkspace'),
        }, t);

        ctx.effect(() => ctx.locale.subscribe(() => store.localeChanged()));
        ctx.effect(() => () => store.dispose());
        store.localeChanged();
        if (typeof queueMicrotask === 'function') queueMicrotask(() => store.localeChanged());

        ctx.effect(() => {
          const style = document.createElement('style');
          style.dataset.dshPlugin = PACKAGE;
          style.textContent = CSS;
          document.head.appendChild(style);
          return () => style.remove();
        });

        function NavIcon(props) {
          const state = useDeck(store);
          const attention = state.tasks.filter((task) => task.status === 'blocked' || task.status === 'review').length;
          return h(
            'span',
            { className: 'td-navicon', 'aria-hidden': true },
            h(Icon, { name: 'deck', size: props.size || 18, strokeWidth: props.active ? 1.9 : 1.65 }),
            attention > 0 ? h('span', { className: 'td-navicon-badge' }, attention > 9 ? '9+' : String(attention)) : null,
          );
        }

        function DashboardBound(props) {
          return h(Dashboard, { ...props, ctx, store });
        }

        function ThreadBound(props) {
          return h(ThreadPanel, { ...props, ctx, store });
        }

        function ThreadLauncherBound(props) {
          return h(ThreadLauncher, { ...props, ctx, store });
        }

        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist',
          id: PANEL_ID,
          order: 20,
          label: () => t('panel.label'),
        }, NavIcon));

        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main',
          key: PANEL_ID,
        }, DashboardBound));

        // The conversation-header launcher must never depend on the right sidebar being
        // installed or already mounted: it is the only way into the Thread panel.
        ctx.effect(() => ctx.slots.inject('conversation.session.header.utilities', () => ctx.slots.register({
          name: 'conversation.session.header.utilities',
          id: 'task-deck-thread',
          order: -2,
          label: () => t('thread.title'),
        }, ThreadLauncherBound)));

        // The pane body stands on its own too; only the tab TYPE needs the tab registry.
        ctx.effect(() => ctx.slots.inject('sidebar.right.pane.tab', () => ctx.slots.register({
          name: 'sidebar.right.pane.tab',
          key: PACKAGE,
        }, ThreadBound)));

        // `sidebarRightTabs` is provided by the right-sidebar plugin, which may mount after
        // this one. Poll briefly instead of skipping the tab type for the whole session.
        ctx.effect(() => {
          let disposeType = null;
          let stopped = false;
          let timer = 0;
          function disposeRegistered() {
            if (!disposeType) return;
            const dispose = disposeType;
            disposeType = null;
            try {
              dispose();
            } catch (error) {
              /* a failing disposer must not break unload */
            }
          }
          function attempt() {
            if (stopped || disposeType) return true;
            const tabs = ctx.get('sidebarRightTabs');
            if (!tabs || typeof tabs.register !== 'function') return false;
            try {
              disposeType = tabs.register({
                id: PACKAGE,
                kind: TAB_KIND,
                title: () => t('thread.tabTitle'),
                keepMounted: true,
              });
            } catch (error) {
              disposeType = null;
            }
            return !!disposeType;
          }
          if (attempt() || typeof window.setInterval !== 'function') return disposeRegistered;
          timer = window.setInterval(() => {
            if (attempt()) window.clearInterval(timer);
          }, 1000);
          const giveUp = window.setTimeout(() => window.clearInterval(timer), 20000);
          return () => {
            stopped = true;
            window.clearInterval(timer);
            window.clearTimeout(giveUp);
            disposeRegistered();
          };
        });
      },
    };
  },
});
