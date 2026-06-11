# Loops — registry

Every automated value-delivery loop lives here. One success metric each (R5: instrument every loop like production). The aggregate system metric is a single number — **hours saved/week** — replacing the archived missions' 7/10→10/10 maturity score.

| Loop | Status | Trigger | Push target | Success metric | Hours saved/wk |
|---|---|---|---|---|---|
| morning-brief | INACTIVE (stub) | daily 07:00 | Telegram via `notify.sh` | Omri skips manual planning session | — |
| competitor-watch | INACTIVE (stub) | daily 07:30 | Telegram, **only on change** | zero-noise: every alert sent is acted on | — |
| daily-extract | INACTIVE (stub) | daily 22:00 | repo commit (auto) | zero lost-context incidents; log entries/day ≥ meetings/day | — |
| prd-review-checklist | on-demand (no scheduler) | Omri asks | chat response | review completed <2 min | — |

## Rules

1. **No silent death.** Every loop output opens with `generated: <timestamp>`. On failure, the loop sends a one-line failure notice instead of nothing — v1 of morning-brief died silently and nobody noticed for 8 weeks (brief.md frozen 2026-04-19, discovered 2026-06-11).
2. **Inactive by default.** No plist is installed by any script in this directory. Activation = Omri copies the stub to `~/Library/LaunchAgents/` and runs `launchctl bootstrap` himself. Each `run.sh` checks for pre-existing `com.ol.linx-*` jobs first (missions/07 documented 11 scheduled tasks whose state is unverified — extend, don't duplicate).
3. **Update the hours column.** When a loop runs for a week, estimate hours saved and write the number here. A loop that saves 0 hours for two consecutive weeks gets archived — same standard the ceremonies failed.
4. **Alert-on-change only** for watch loops. A daily "no changes" message trains Omri to ignore the channel.
