# Mission: Repo Consolidation — Retire linx-advisor, Harden ol-linx-agent

## Goal
Eliminate the duplicate `linx-advisor` repo. Migrate the one unique artifact,
harden credentials hygiene, and make `ol-linx-agent` the single source of truth.

## Timeline
- Completed: April 2026

## Why This Mattered
linx-advisor was a near-duplicate of ol-linx-agent (95% identical files) with two
meaningful differences: it lacked CLAUDE.md (the agent behavioral layer) and
missions/05-full-agent-roadmap.md, and its notify.sh had credentials hardcoded
in plaintext instead of sourced from .env. Keeping both repos created drift risk
and a live credentials exposure.

## Success Criteria
- [ ] study-tracker.json migrated from linx-advisor
- [ ] .env.example added to document required environment variables
- [ ] .gitignore confirmed to exclude .env
- [ ] Telegram bot token rotated via BotFather (manual)
- [ ] linx-advisor archived on GitHub (manual)
- [ ] Both repos set back to private on GitHub (manual)

## What Claude Code Did
1. Read and verified all files before acting
2. Copied study-tracker.json from linx-advisor
3. Created .env.example with required variable names
4. Verified .gitignore excludes .env
5. Created this mission file
6. Committed all changes

## What Omri Must Do Manually
1. **Rotate Telegram bot token** — open Telegram → BotFather → /mybots →
   select your bot → API Token → Revoke. Update .env with the new token.
2. **Archive linx-advisor** — GitHub → linx-advisor repo → Settings →
   Danger Zone → Archive repository
3. **Set both repos to private** — GitHub → each repo → Settings →
   Change visibility → Make private
