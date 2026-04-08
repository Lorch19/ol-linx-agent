# Mission 07: Linx Agent — From Notification System to Real Agent

## Current State (April 8, 2026)

**What exists:**
- Knowledge files: competitive matrix, battle cards, positioning, market context, product docs
- Scheduled tasks: morning brief, evening extract, daily lesson, weekly review, competitor scan, industry digest (11 total)
- Telegram: one-way notifications + two-way chat (stateless — each message is a fresh Claude invocation, no memory between messages)
- Daily log pipeline: log.md → evening extract → routes to commitments, customer-intel, profile yaml
- `linx.agent` CLI for bot control
- launchd service keeps bot running

**What's broken / missing:**
- Telegram chat is **stateless** — every message spawns a new `claude -p` with no context from previous messages
- No connection to real work tools (Calendar, Slack, Jira, Gong, email)
- No event-driven triggers — everything runs on cron schedules
- No approval/action queue — agent can observe and notify, but can't act
- Bot name on Telegram is "My OpenClaw Agent" (shared across all use cases — keep as-is)
- Commitments have no automated overdue detection beyond the morning brief
- No feedback loop — agent doesn't learn from Omri's corrections

**Honest rating: 4/10 — a scheduled notification system with a chat wrapper**

## Target State

### Phase A — Pre-Day-1 (now through April 11)
Get the basics reliable. You start at Linx on April 12 with a working Telegram advisor.

- Bot stable, no spam, clean restart behavior
- Telegram commands menu (`/brief`, `/commitments`, `/overdue`, `/log`, `/prep`, `/compete`, `/status`) working
- Morning brief includes real overdue detection
- Bot stays "My OpenClaw Agent" (shared bot — Linx is one persona)
- All scheduled tasks confirmed working with correct paths

**Rating after Phase A: 5/10 — reliable notification system + interactive Q&A**

### Phase A.5 — First 48 Hours at Linx (April 12-13)
Discovery only. No building.

- Map internal tooling: Slack vs Teams, Jira vs Linear, wiki system, Gong access
- Observe how meetings flow, where decisions happen, how PMs communicate
- Note what information you wished the agent had surfaced
- Update this mission with real tool targets (replace all "[OPEN]" decisions possible)

**No rating change — this phase produces decisions, not features.**

### Phase B — Weeks 1-2 at Linx (April 14-25): Read-Only Observer
Connect to real systems. Agent sees what you see.

- Google Calendar → morning brief with real meeting context + auto-prep triggers
- [Slack/Teams] (read-only) → monitor product, customer, competitor channels
- Google Drive → read PRDs, meeting notes as they're created
- Stateful Telegram conversations (conversation memory persists across messages)

**Kill switch checkpoint — end of week 2:** If you're spending more time fixing the agent than it saves you, explicitly decide to pause agent development and focus on role performance. No shame. The worst outcome is splitting attention and doing both poorly.

**Rating after Phase B: 7/10 — context-aware advisor with real-time signals**

### Phase C — Weeks 3-4 (April 26 — May 9): Active Processor
Agent processes raw signals into structured intelligence.

- [Gong/manual fallback] → auto-extract customer intel from every call
- [Jira/Linear] → sprint awareness, blockers, dependency tracking
- Gmail → catch commitments from email threads
- Commitment auto-detection: "You wrote 'I'll send that by Friday' in the Aramark thread"

**Rating after Phase C: 8/10 — autonomous intelligence processor**

### Phase D — Month 2+ (May 10+): Autonomous with Guardrails
Directional north star, not a commitment. Scope TBD based on Phase B/C learnings.

- Draft follow-up emails after customer calls → approve/edit/reject in Telegram
- Update project management tool with context → approve in Telegram
- Push battle card updates when competitor scan finds changes → review diff
- Schedule prep sessions when big meetings are 2 days out
- Telegram becomes a command center: alerts + approval queue

**Rating after Phase D: 9/10 — autonomous agent with earned trust per action type**

## Weekly Checkpoints

| Week | Success Criteria |
|------|-----------------|
| 1 | Agent prepped 3+ meetings correctly. Calendar integration attempted. |
| 2 | Calendar integration stable, zero missed briefs. Kill switch decision. |
| 3 | First auto-extracted customer intel from a real call or meeting. |
| 4 | Full 30-day eval: prep coverage, intel quality, time saved vs. time spent. |

## 30-Day Success Criteria

- Agent preps every meeting without being asked
- Customer intel auto-updates after every call
- Commitments tracked from conversations, not manual entry
- Omri rates agent suggestions as useful 80%+ of the time
- **Net positive ROI on time: agent saves more hours than it consumes in maintenance**

## Open Decisions

1. **[OPEN → Decide in Phase A.5] Slack vs Teams** — Unknown until Day 1. Architecture should be tool-agnostic (MCP adapter pattern).

2. **[OPEN → Decide in Phase A.5] Project management tool** — Jira, Linear, or other. Same adapter approach.

3. **[OPEN → Decide in Phase A.5] Gong access timeline** — May not get access in first weeks. Fallback: manual call notes → structured extraction.

4. **[OPEN] Stateful Telegram conversations** — Options: (a) sqlite db storing conversation history per user, (b) file-based conversation log passed to `claude -p`, (c) long-running Claude session. Tradeoff: simplicity vs quality.

5. **[OPEN] Telegram approval UX** — Inline keyboards require webhook mode (not polling). Options: (a) text-based approve/reject, (b) lightweight webhook server, (c) python-telegram-bot framework. Defer until Phase D is real.

6. **[RESOLVED] Bot identity** — Keep "My OpenClaw Agent" as the shared bot. Linx advisor is one persona routed through it.

7. **[OPEN] Where to run the bot long-term** — Currently local Mac (launchd). Options: (a) keep local, (b) VPS, (c) hybrid. Defer until stability is proven.

8. **[OPEN] How to measure "useful"** — The 80% usefulness target needs operationalization. Options: (a) weekly 5-min rating session, (b) thumbs up/down in Telegram per suggestion, (c) proxy metric — did Omri act on the suggestion within 2 hours?
