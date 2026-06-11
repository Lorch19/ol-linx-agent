# Replay eval — old vs new orchestration, 2026-06-11

**Method:** 4 scenarios reconstructed from real log.md history, each run by a fresh agent under (A) `_archive/CLAUDE-md-pre-rebuild.md` + `_archive/SKILL-md-pre-rebuild.md` and (B) current CLAUDE.md + SKILL.md. Identical prompts otherwise. n=1 per cell. Judged by the rebuild author — bias noted.

## Results

| # | Scenario | Old | New | Call |
|---|---|---|---|---|
| S1 | JIT-at-Identiverse scope challenge | Stalled at context proposal — no verdict turn 1 | One-turn verdict, cited Sarit Apr 23 descope + C1/Opal evidence + Figma-as-vision-beat; drafted log+commitment writes | NEW |
| S2 | Mor call capture (2 facts + 1 commitment) | All 3 files, same-turn ✓ | All 3 files, same-turn ✓ | tie |
| S3 | CISO call prep vs ConductorOne | Stalled at context proposal | Full one-turn prep from battle-cards/matrix/positioning | NEW |
| S4 | PRD gate (Agent Registry stub) | Solid review; referenced now-archived ceremonies path | Solid review, deeper auth-model questions, routed to checklist | slight NEW |

**Round-trips to value:** old 2 turns in 2/4 scenarios (always the strategy/research ones — the proposal protocol's trigger set); new 1 turn in 4/4.
**Instruction load:** old 26.1KB, new 5.2KB.

## Defects found → fixed same day

1. **Both** conditions filed Mor (internal colleague) into customer-intel.md. Pre-existing, not a regression. Fix: customers-only line in CLAUDE.md data discipline.
2. **New** (S3) used 49-day-old competitive claims without a staleness flag — rule survived the rewrite but was stated too weakly. Fix: inline as-of-date requirement in SKILL.md.

## Limitations (honest)

- n=1 per cell — single-run variance unmeasured.
- Sandbox replay: hooks didn't run, sub-agents aren't his Mac's Claude Code.
- Judge = builder. Counter-bias: both defects found were in the new system's favor to hide; both reported.
- Tests H1 only. Loops (H2/H3) are untestable by replay — they're new capability, not changed behavior. Their test is `loops/README.md`'s hours-saved column after a week of real use.

## Stress test

- **Weakest assumption:** S1/S3 stalls generalize — the old proposal protocol might have been waved through fast in practice ("yes go") rather than costing real time.
- **What would prove this wrong:** Omri saying the confirmation step routinely caught wrong file loads — then it was a quality gate, not a tax.
- **What breaks in 30 days:** nothing in this file — but if the two rule-fixes don't change behavior in the next real capture/prep session, rules-as-text is the wrong fix layer and the checks belong in daily-extract's prompt instead.
