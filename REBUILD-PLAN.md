# REBUILD-PLAN — Phase 0 Adversarial Audit
**Date:** 2026-06-11 · **Branch:** `claude/rebuild-brain-hands-split` · **Status:** awaiting Omri's approval of verdict table

---

## 0. The one finding that reframes everything

**The repo has been dead for 6 weeks.** Last commit to main: 2026-04-29. Last log.md entry: 2026-04-28. brief.md frozen at 2026-04-19. In its 31 active days (Mar 29 – Apr 29) the system produced 179 commits and substantial product output (demo script v0.1–v0.6, eng deck v1–v10, 2 master briefs, use-case mapping, 13 dense log entries). Then: nothing — through the exact window covering missions/02 (ends today, Jun 11) and the Identiverse demo (Jun 15, 4 days away).

This kills the external review's core thesis. The system did not collapse under maintenance tax — it produced heavily, then was **abandoned**. The failure is R6 (pull, not push): every gram of value required Omri to open a Claude Code session and drive. When his attention moved (demo crunch, new tooling — this session itself runs in Cowork with Calendar/Linear/Gmail/Grain MCPs the repo never had), the system had no way to reach him. Rebuild priority follows from that: push loops (H2/H3) are the point; document-shuffling (parts of H1/H4) is secondary hygiene.

---

## 1. Plumbing-to-product measurement (mandated by mission)

From `git log main` (179 commits, 2026-03-29 → 2026-04-29):

| Category | Count | Share |
|---|---|---|
| Merge/consolidation overhead | 31 | 17% |
| System-grooming (CLAUDE.md/SKILL.md edits, token optimization, hooks, Telegram bot, missions, disciplines, repo consolidation) | ~36 | 24% of non-merge |
| Linx work product (knowledge, artifacts, demo scripts, decks, briefs, extractions) | ~112 | 76% of non-merge |

log.md: 13 entries; ~2 are system-grooming (~15%).

**Verdict: plumbing share is 24% — below the 30% threshold the mission itself set. The maintenance-tax thesis is WEAK.** Plumbing was also front-loaded: the Telegram build was pre-Day-1 (Mar 29 – Apr 11) and 9 of the optimization commits landed in a single day (Apr 23). During actual work weeks, product dominated. Rebuild is scaled back accordingly: this is a **re-targeting** (pull→push), not a teardown. See DISSENT.md §1.

---

## 2. Inventory & classification

| File / dir | Class | Notes |
|---|---|---|
| CLAUDE.md (14KB) | BRAIN + HANDS mixed | Persona, 6 MANDATORY protocols, plus skill-management for a *different repo* (Omri-Linx-Skills) |
| SKILL.md (12KB, 10 behaviors) | BRAIN | Pure strategist persona — duplicates the now-installed linx role skills (positioning-linx, prd-partner-linx, discovery-interview-linx) |
| context-index.md | HANDS | Lazy-loading manifest — sound; the mandatory confirm-round-trip is the costly part |
| .claude/hooks/session-start-check.sh | HANDS | Orphan + staleness detection |
| .claude/hooks/stop-check.sh | HANDS | Blocking commit/push gate |
| telegram-bot.sh, notify.sh, linx.agent, .claude/settings.json | HANDS (live infra) | Untouchable per guardrails |
| .mcp.json | HANDS | Linear MCP only |
| ceremonies/ (4 files) | CRUFT | Built Apr 14; **zero instantiations ever** — no intake/spec/ship-review artifact exists; referenced only by CLAUDE.md/SKILL.md themselves |
| missions/05, 07 | CRUFT | Aspirational autonomy roadmaps, self-scored "7/10→10/10" with no validation; fail R3(c) |
| missions/00–04, 06 | KNOWLEDGE | Historical onboarding plans; 06 complete; 02/03 are the current calendar period |
| examples/ (3 files) | CRUFT | Referenced nowhere in CLAUDE.md, SKILL.md, or context-index.md |
| prompts/ (8 files) | HANDS | Mostly executed one-shots; 2–3 reusable (competitor-fetch, linx-claude-validation) |
| research-gameplan.md | CRUFT | Pre-onboarding era, superseded by discovery-plan.md |
| knowledge/, references/, artifacts/, customer-intel, log, commitments, brief, milestones, building-blocks, discovery-plan, linx-profile | KNOWLEDGE | Read-only per guardrails; the real asset |

---

## 3. Current system graded (R1–R7)

| Rule | Grade | Evidence |
|---|---|---|
| R1 Simplest thing | B− | Core = files + prompts (good). Overbuilt: stateful multi-project Telegram bot (8 commits) with no logged usage after Apr 8; ceremonies framework never used |
| R2 Workflow vs agent | B | Ceremonies/prompts/hooks are correctly workflows. Two-way Telegram chat is agent-shaped with no validated value |
| R3 Agent justification | D | missions/05+07 plan Level 3–4 autonomy ("agent acts, approval queue") with zero capability validation; fails (c) outright |
| R4 Context economy | C+ | Session-start load ~8.5K tokens — *already optimized* Apr 23 (12K→8.5K, documented). Remaining waste: CLAUDE.md carries another repo's ops manual; mandatory context round-trip costs a human turn per task |
| R5 Bounded autonomy | B− | Hooks are real guardrails, added after a documented 7-branch data loss (Apr 19). But zero instrumentation on any scheduled job — brief.md froze Apr 19 and nothing noticed. Merge discipline still failed post-hook (orphans dated Apr 23, Apr 28) |
| R6 Push > pull | **F** (as practiced) | The push layer (morning brief, evening extract, 11 scheduled tasks per missions/07) either never wrote to the repo or silently died — brief.md frozen 8 weeks. All value delivery required Omri to drive a session. Result: 6 weeks of silence |
| R7 Evidence over reasoning | A− | log.md discipline excellent while alive: dated, atomic, sourced. Mission self-ratings (7/10) are the exception — vibes, no metric |

---

## 4. Rebuild plan graded, hypothesis by hypothesis

### H1 Brain/hands split — **MODIFY**
R4-sound: a strategist persona doesn't need git mechanics, and repo CLAUDE.md doesn't need 10 behaviors of persona. **But the brain already half-migrated**: Omri-Linx-Skills ships positioning-linx, prd-partner-linx, discovery-interview-linx as installed skills, and CLAUDE.md §Omri-Linx-Skills manages that repo. A new claude.ai project instruction file must *complement* those skills (identity + routing + standing context), not duplicate their content — else H1 recreates the duplication it's solving (R1). CLAUDE.md rewrite <600 words: approved; must preserve persistence-discipline *function* (see H3) and lazy-loading function of context-index (propose-and-proceed replaces propose-and-wait — saves the human round-trip, keeps token economy).

### H2 Three loops

| Loop | R2 test | R3 test | Verdict |
|---|---|---|---|
| morning-brief | Repeatable, well-defined → workflow ✓ | Value real (brief.md was hand-built daily until Apr 19 — demand existed; abandoned = cost too high by hand). **Caveat:** a morning-brief scheduled task allegedly existed (missions/07) and silently died — v2 must ship with a health metric (R5) and use now-available Calendar/Linear MCPs, which v1 lacked ("no connection to real work tools" — missions/07) | **BUILD** (workflow + instrumentation) |
| competitor-watch | Diff-vs-matrix, alert-on-change-only → workflow ✓ | competitive-matrix.md stale since Apr 23; SKILL.md mandates >30-day staleness flags but staleness-checking was itself pull-based. Cheap, zero-noise by design | **BUILD** (workflow) |
| prd-reviewer | Triggered, fixed steps → workflow ✓ | **Fails R3(b) and R1:** duplicates the installed prd-partner-linx skill (iterative, adversarial, Linx PRD pattern). And its stated justification — "replaces ceremonies' function" — is hollow: ceremonies had zero usage; there is no function to replace. A scheduled reviewer of Linear issues nobody asked for = noise risk | **DOWNGRADE** to on-demand workflow: a checklist prompt (`loops/prd-review-checklist.md`) invokable from any session/skill. No trigger, no scheduler |

### H3 Capture automation — **BUILD, with one guardrail kept**
Steelman honored: persistence discipline exists because of documented Week-1 data loss (7 orphan branches, CLAUDE.md + session-start-check.sh header). Evidence says the *push* requirement worked — post-Apr-19 orphans were all pushed, nothing lost — but the *blocking* stop hook did not prevent merge-failure (orphans dated Apr 23/28) and likely added session friction. daily-extract (transcript → log/commitments/customer-intel) replaces the same-turn-scribe function with automation; softening stop-check from block → silent auto-commit-push preserves the never-lose-work function by construction rather than compliance. Auto-commit messages must embed a file-level diff summary so garbage commits are visible. Session-start orphan check: **KEEP** unchanged — orphans demonstrably recurred after every countermeasure.

### H4 Decommission — **BUILD, evidence-corrected**
Archive missions/05+07 (fail R3/R7), ceremonies/ (zero use — archived for non-use, *not* because H2 replaces them), examples/ (unreferenced), research-gameplan.md (superseded), executed one-shot prompts. Replace maturity score with hours-saved/week in loops/README ✓ (R7: a number, not a self-grade). Missions/00–04+06 stay — they're knowledge, cost nothing, and 02/03 describe the current calendar period.

---

## 5. Verdict table (approval gate — nothing below builds until Omri confirms)

| # | Component | Verdict | Evidence | Rubric |
|---|---|---|---|---|
| 1 | CLAUDE.md | **MODIFY** — rewrite <600 words, hands-only; move Omri-Linx-Skills ops section out of session-start path | 14KB loaded every session; ~40% of it is persona + another repo's ops manual | R4 |
| 2 | SKILL.md | **MODIFY** — strategist behaviors → `brain/claude-project-instructions.md`; repo keeps no duplicate persona | 12KB/session; duplicates installed linx role skills | R4, R1 |
| 3 | context-index.md | **KEEP**, drop mandatory wait-for-confirmation (propose-and-proceed) | Index is cheap (4.8KB) and works; the round-trip costs a human turn per task | R4 |
| 4 | session-start-check.sh | **KEEP** unchanged | Orphans recurred post-hook (Apr 23, Apr 28 branches) — visibility still earning its keep | R5 |
| 5 | stop-check.sh | **MODIFY** — blocking → silent auto-commit-push w/ diff-summary message | Block didn't fix merge discipline; auto-commit preserves the no-data-loss function by construction | R5 |
| 6 | telegram-bot.sh, notify.sh, linx.agent, settings.json | **KEEP** — untouched | Live launchd infra, multi-project blast radius | guardrail |
| 7 | ceremonies/ (4 files) | **KILL → _archive/** | Zero instantiations in 6 weeks of artifacts/log; only self-references | R1, R7 |
| 8 | missions/05, 07 | **KILL → _archive/**; maturity score → hours-saved/week in loops/README | Self-scored autonomy roadmap, no validation, fails R3(c) | R3, R7 |
| 9 | missions/00–04, 06 | **KEEP** | Knowledge tier; 02/03 = current period; zero session cost | R4 |
| 10 | examples/ (3 files) | **KILL → _archive/** | Referenced nowhere | R4 |
| 11 | prompts/ — executed one-shots (5) | **KILL → _archive/**; keep competitor-fetch, linx-claude-validation, use-case-walkthrough | One-shot extractions already ingested into knowledge/ | R4 |
| 12 | research-gameplan.md | **KILL → _archive/** | Pre-onboarding doc, superseded by discovery-plan.md | R4 |
| 13 | brain/claude-project-instructions.md | **BUILD** — pure strategist, no git language; routes to installed linx skills instead of duplicating them | SKILL.md behaviors 1–5, 8–9 are genuinely valuable persona — worth porting | R4, R1 |
| 14 | loops/morning-brief/ | **BUILD** — brief + script + inactive stub; calendar+Linear+overdue+competitor headlines; health metric: last-run timestamp surfaced in output; success metric: planning session skipped | Demand proven (hand-built daily until Apr 19); v1 died silently — instrument it | R2, R5, R6 |
| 15 | loops/competitor-watch/ | **BUILD** — diff vs competitive-matrix.md + battle-cards, alert only on change | Matrix stale since Apr 23; staleness rule exists but was pull-based | R2, R6 |
| 16 | loops/prd-reviewer/ | **DOWNGRADE** — on-demand checklist workflow, no trigger/scheduler | Duplicates prd-partner-linx skill; "replaces ceremonies" is moot (zero ceremony usage) | R1, R3(b) |
| 17 | loops/daily-extract/ | **BUILD** — spec + stub; replaces same-turn-scribe function | Documented data-loss origin honored; automation > compliance | R5, R6 |
| 18 | knowledge/, references/, artifacts/, all state files | **KEEP** — read-only | The compounding asset; untouched per guardrails | R7 |

---

## Stress test (per repo rule)

- **Weakest assumption:** that the launchd scheduled jobs are dead. Unverified — Omri couldn't run `launchctl list`. If the 11 jobs still fire daily against this repo, loop stubs must extend them, not coexist; activation step must check for the plists first.
- **What would prove this wrong:** finding fresh `.telegram-bot.log` entries or plists firing post-Apr-29; or Omri stating he's been working Linx product in another tool all along (then the repo isn't abandoned — it's *migrated from*, and the right move is exporting knowledge/, not rebuilding loops here).
- **What breaks in 30 days:** the loops themselves, the same way v1 broke — silently — if the health-metric line (last-run timestamp in every brief) gets cut as "noise" during implementation. It is the single non-negotiable feature of H2.
