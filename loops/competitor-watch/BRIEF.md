# competitor-watch

**Trigger:** daily 07:30 launchd (stub inactive)
**Inputs:**
- Competitor roster parsed from `knowledge/competitive-matrix.md` (canonical names — grep-stable per Data Recording Discipline)
- Web search per competitor: product launches, funding, analyst mentions, MCP/AI-governance moves (reuses the search guidance in `prompts/linx-claude-competitor-fetch.md`)
- Current claims in `knowledge/competitive-matrix.md` + `knowledge/battle-cards.md` as the diff baseline

**Output:**
- **Change detected** → one Telegram alert per change: competitor, what changed, which matrix/battle-card claim it contradicts, source URL. Diff written to `loops/competitor-watch/state/latest-diff.md` (consumed by morning-brief).
- **No change** → no message. Write timestamp to `state/last-run` only.

**Push target:** Telegram via `notify.sh`
**Metric:** zero-noise — every alert sent leads to a matrix/battle-card update or a deliberate "noted, no action". Two ignored alerts in a row = tune the filter.
**Health:** `state/last-run` timestamp; morning-brief flags if it's >48h old. Failure → "competitor-watch FAILED: <reason>" to Telegram.

## Why this loop (evidence)

SKILL.md mandated flagging >30-day-stale competitive data, but checking was pull-based — competitive-matrix.md has been stale since 2026-04-23 (49 days at audit). The freshness rule already exists; this loop is just its automation. Identiverse (Jun 15) and Series-B narrative both depend on current competitive claims.
