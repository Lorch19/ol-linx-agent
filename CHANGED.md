# CHANGED — rebuild on `claude/rebuild-brain-hands-split`
**2026-06-11** · 6 commits · zero read-only or live-infra files touched (verified by diff)

## Before / after

| | Before | After |
|---|---|---|
| Session-start orchestration load | CLAUDE.md 14KB + SKILL.md 12KB ≈ 6.5K tokens | CLAUDE.md 3.5KB (457 words) + SKILL.md 1.7KB ≈ 1.3K tokens |
| Context protocol | propose → **wait** → load (human turn per task) | propose → **proceed** |
| Push loops | 0 alive (brief.md frozen 2026-04-19) | 3 specced + scripted, inactive, instrumented against silent death |
| Stop hook | blocks session end | silent auto-commit-push, reviewable messages |
| Orchestration files | 30 (ceremonies, missions 05/07, examples, 8 prompts, 2 personas) | 17 active; 15 archived to `_archive/` (nothing deleted) |
| System metric | self-scored maturity 7/10→10/10 | hours-saved/week in `loops/README.md` |

## Verdict table outcomes
All 18 approved verdicts executed: 6 KEEP (incl. all knowledge/state files and live Telegram infra, untouched), 5 KILL→archive, 4 MODIFY (CLAUDE.md, SKILL.md, context-index.md, stop-check.sh), 4 BUILD (brain file + 3 loops), 1 DOWNGRADE (prd-reviewer → on-demand checklist, because it duplicated prd-partner-linx and ceremonies had zero uses to "replace").

## What this agent does now (5 lines)
1. **Repo = hands**: knowledge store, same-turn capture, loops. Strategy/sparring = claude.ai project (`brain/claude-project-instructions.md`) + installed linx skills.
2. **morning-brief** (inactive): calendar + Linear + overdue + competitor diff → Telegram, 07:00, timestamped, fails loudly.
3. **competitor-watch** (inactive): daily diff vs competitive-matrix, alert only on change.
4. **daily-extract** (inactive): nightly transcript → log/commitments/customer-intel, append-only, auto-committed.
5. **Nothing blocks, nothing dies silently**: stop hook auto-commits; every loop output opens with its timestamp.

## DISSENT.md highlights
Plumbing measured at **24%** — below the mission's own 30% threshold; the maintenance-tax thesis was wrong. The system was abandoned (6 weeks dark), not buried in upkeep — so the rebuild kept its teeth (loops, push) and dropped its premise. The blocking stop-hook was blamed without evidence: the repo's most productive 10 days came *after* the hooks landed. prd-reviewer was the plan's weakest loop — it duplicated an installed skill and "replaced" a ceremony system that was used exactly zero times. And the launchd state remains unverified: all "extend existing jobs" behavior is conditional probing, all stubs inactive.

## The ONE decision needed pre-merge
**Where do the loops deliver — and did the repo lose you to friction or to migration?** If you stopped using this repo because your work moved to Cowork/Linx Claude/claude.ai, the loops should push to those surfaces (Cowork scheduled tasks instead of launchd plists; brief delivered in chat, not brief.md) and the repo becomes the knowledge backend. If it was friction, activate the launchd stubs as built. Everything else merges cleanly either way.

## Stress test (per repo rule)
- **Weakest assumption:** loop run.sh scripts assume `claude -p` on the Mac can reach Calendar/Linear/Grain MCPs — unvalidated on this machine; first manual run of each script is the test.
- **What would prove this wrong:** a hidden live launchd job still writing somewhere — would make the stubs duplicates (probe step catches this at activation).
- **What breaks in 30 days:** the hours-saved column staying empty. If no loop is activated by mid-July, this rebuild was archaeology, not engineering — archive `loops/` per its own rule 3.
