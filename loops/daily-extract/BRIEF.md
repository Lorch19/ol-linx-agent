# daily-extract

**Trigger:** daily 22:00 launchd (stub inactive)
**Inputs:**
- Today's Claude Code session transcripts (`~/.claude/projects/<this-repo-slug>/*.jsonl`, mtime = today)
- Today's meeting transcripts via Grain MCP, when connected
- Existing `log.md` tail (to avoid duplicating what same-turn capture already wrote)

**Output:** append-only updates — `log.md` (today's header), `commitments.md` (detected commitments, `action — date — owner`), `customer-intel.md` (customer signals under the right account). Committed with an `(auto-extract)` tag, pushed.
**Push target:** the repo itself + one-line Telegram summary ("daily-extract: 3 log entries, 1 commitment, 0 customer signals").
**Metric:** zero lost-context incidents; log entries/day ≥ meetings/day on workdays.
**Health:** timestamped commit; failure → "daily-extract FAILED: <reason>" to Telegram.

## Function replacement (the steelman rule)

This loop replaces the *enforcement* half of the same-turn-scribe discipline. The discipline existed because of documented Week-1 data loss (7 orphan branches — see `.claude/hooks/session-start-check.sh` header). Same-turn capture remains the stated primary mechanism in CLAUDE.md; this loop and the softened Stop hook are the two nets under it. Nothing was removed without its function being covered twice.

## Guardrails (R5)

- **Append-only.** Never rewrites or deletes existing entries. Bad extractions are visible and revertable via the `(auto-extract)` commit tag.
- **Commit isolation.** Auto-extract commits touch only log.md / commitments.md / customer-intel.md — never knowledge/ or artifacts/.
- **Dedup.** Skips anything same-turn capture already logged for today.
