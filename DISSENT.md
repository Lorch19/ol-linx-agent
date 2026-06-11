# DISSENT — where the evidence contradicts the rebuild plan and the external review
**Date:** 2026-06-11 · Companion to REBUILD-PLAN.md

## 1. The maintenance-tax thesis fails its own test
The mission set the bar: if system-grooming is <30% of output, the thesis is weak. Measured: ~24% of non-merge commits, ~15% of log.md entries. The repo's 31 active days produced demo scripts through v0.6, a 10-version eng deck, two master briefs, a 33-requirement mapping, and 13 dense log entries. "Plumbing ate the product" is not what happened. What happened is **abandonment**: zero activity Apr 29 → Jun 11. The rebuild framing should be "add push, cut pull-dependence," not "strip the bloat." Bloat-stripping is real but secondary (~5 files of genuine cruft).

## 2. "prd-reviewer replaces ceremonies' function" — there is no function to replace
Ceremonies were created Apr 14 and instantiated **zero times**: no feature-intake, story-spec, or ship-review artifact exists anywhere in the repo. The external review treats them as a load-bearing process to be automated. They are dead code. Archiving them needs no replacement; building an automated reviewer *because* of them inherits a justification that never existed. The reviewer also duplicates the installed `prd-partner-linx` skill — violating R1 twice over. Downgraded to an on-demand checklist.

## 3. H1 partially rebuilds a brain that already exists
The review prescribes "strategy/sparring → claude.ai project" as if greenfield. Omri already extracted the brain once: the Omri-Linx-Skills repo ships positioning-linx, prd-partner-linx, discovery-interview-linx, drifter-investigation as installed skills with a shared role-context sync system. A claude-project-instructions file that restates Linx positioning and PRD methodology would be the *third* copy of this brain. H1 survives only as a thin identity + routing + standing-context layer that points at those skills.

## 4. The blocking stop-hook is being blamed without evidence
The plan's implication: friction from the hooks contributed to abandonment. The record: hooks were added Apr 19 after a documented 7-orphan-branch data loss; from Apr 19 to Apr 29 the system had its most productive stretch (demo v0.1–v0.6, deck v1–v10), and post-hook orphan branches were all *pushed* — nothing was lost again. The hook did its job. Abandonment coincides with the Identiverse crunch and a tooling migration (this audit itself arrives via Cowork with Calendar/Linear/Gmail/Grain MCPs the repo never had), not with hook fatigue. I still accept the block→auto-commit softening — automation beats compliance — but as an improvement, not a post-mortem fix.

## 5. "Extend existing launchd jobs" rests on an unverified premise
Omri couldn't run `launchctl list`. missions/07 (Apr 8) claims 11 scheduled tasks existed; brief.md frozen since Apr 19 says whatever existed stopped writing to this repo. Dead, external, or never-wired — unknown. All H2 language about extending existing jobs is conditional; the stubs I build will probe for the plists (`com.ol.linx-*`) before installing anything, and remain inactive regardless.

## 6. The 6-week gap might not mean what the plan needs it to mean
Alternative read: Omri kept doing Linx product work — in Linx Claude, Cowork, Figma, Linear — and only the *repo* fell out of the workflow. If true, the repo's real residual value is its knowledge corpus (competitive matrix, customer intel, building blocks), and the highest-leverage move is making that corpus reachable from wherever Omri now works (skills, MCP, claude.ai project) rather than pulling him back into Claude Code sessions with better loops. The rebuild hedges toward this: H1 brain file + knowledge intact + loops that *push out* rather than demand sessions. But if Omri confirms this reading, loops/morning-brief should source from and deliver to his current tools, with the repo as archive — worth stating before building.

## 7. Timing dissent
Identiverse is June 15 — four days out — and the repo's last live workstream was the demo script (v0.6, open items for Dor still listed). missions/02 ends today with unreviewed success criteria. An infrastructure rebuild in this exact window is the kind of plumbing-over-product choice the mission itself warns about. Phase 0 docs cost little; executing H1–H4 before June 15 is Omri's call to make explicitly.

## Stress test
- **Weakest dissent:** §6 — inferred from one Cowork session's MCP roster, not from Omri's testimony. He may simply have been heads-down.
- **What would prove this wrong:** Omri saying "I stopped because every session opened with warnings and context rituals" — that would resurrect the friction thesis (§4) and justify a deeper strip.
- **What breaks in 30 days:** if loops ship and Omri's workflow has genuinely moved to Cowork/claude.ai, repo-resident loops deliver briefs into a repo he doesn't open — same silent death as v1. Push target must be a channel he actually sees (Telegram via existing notify.sh, or Cowork scheduled tasks), never a file.
