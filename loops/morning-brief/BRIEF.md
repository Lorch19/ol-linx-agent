# morning-brief

**Trigger:** daily 07:00 launchd (stub inactive — see `com.ol.linx-morning-brief.plist.stub`)
**Inputs:**
- Google Calendar — today's events (Calendar MCP / gcalcli; v1 failed partly because it had no real tool access — _archive/07-agent-evolution.md: "no connection to real work tools")
- Linear — issues assigned to Omri, in-progress + due (Linear MCP, configured in `.mcp.json`)
- `commitments.md` — overdue items (date < today, unchecked)
- `loops/competitor-watch/state/` — yesterday's diff, if any

**Output:** regenerate `brief.md` (timestamped first line), push condensed version (<15 lines) to Telegram via `notify.sh`
**Push target:** Telegram (existing bot channel — Omri already reads it)
**Metric:** Omri skips his manual planning session. Proxy until measured: brief acted on ≥4 of 5 weekdays.
**Health:** first line is `generated: <ISO timestamp>`. On any input failure, send "morning-brief FAILED: <reason>" instead of silence.

## Why this loop (evidence)

brief.md was hand-maintained daily until 2026-04-19 — demand is proven. It froze when the manual cost exceeded the value. A scheduled version allegedly existed (_archive/07-agent-evolution.md, Apr 8) and died silently. v2 differences: real tool inputs, push to a channel Omri reads, failure-notice instead of silent death.

## Activation (manual, Omri only)

```bash
# 1. verify no existing job conflicts:
launchctl list | grep com.ol.linx
# 2. copy stub, strip .stub suffix and comment markers, fix paths
# 3. launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.ol.linx-morning-brief.plist
```
