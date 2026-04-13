# Ticket & Epic Examples
<!-- Collecting real examples to eventually build a ticket-writing Skill. -->
<!-- For each example: paste the original, then note what works and what doesn't. -->

---

## Example 1: "Dynamic group management using Linx" (Epic)

**Source:** Linx Linear — feature epic
**Type:** Epic with milestoned requirements (M0-M6)
**Context:** Replaces Okta group management, driven by Monday.com customer requirements

### What works
- Problem framing is strong: background → business justification → objective → use cases. Reader knows *why* before *what*.
- Customer grounding: Grain recording linked, Monday's actual requirements summarized, competitive references (Okta push groups, ConductorOne).
- Milestoned delivery (M0-M6): engineering can ship incrementally.
- Edge cases on destructive actions: deletion checks, downstream impact warnings, unlink flows.
- Open questions surfaced explicitly, some already resolved inline — shows the spec evolved through real discussion.

### What's not good enough
- **Structure collapses halfway.** Top is clean, then devolves into a flat requirements dump with inconsistent formatting. Requirements, open questions, brainstorm notes, and meeting notes interleaved.
- **No acceptance criteria.** Requirements say *what* but not *done when*. No pass/fail conditions for QA.
- **Milestone definitions undefined.** No legend explaining what M0 vs. M1 vs. M2 means (timeline? priority? dependency?).
- **No success metrics.** No way to measure if the feature worked post-ship.
- **"Why now" is thin.** Business justification = "competitors have it." Missing: how many customers asking, deal impact, revenue risk.
- **No non-functional requirements.** "Near realtime" sync undefined. No scale, performance, or failure expectations.
- **Raw discussion notes mixed into spec.** "Brainstorm" and meeting notes should be appendix or synthesized into requirements.
- **Vague requirements.** "The AI assistant will know the Linx groups" — what does that mean concretely?

### Patterns to extract
| Keep | Fix |
|---|---|
| Problem → why → what ordering | Add acceptance criteria per requirement |
| Customer evidence upfront | Define milestone legend |
| Competitive references | Separate decided vs. exploring |
| Phased milestones in spec | Add success metrics |
| Explicit open questions | Add non-functional requirements |
| Edge case thinking on destructive ops | Clean break between spec and discussion notes |
