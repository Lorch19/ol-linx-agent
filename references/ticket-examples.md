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

---

## Example 2: "Identity Security Assessment for POV" (Feature Spec)

**Source:** Linx Notion — feature spec
**Type:** Feature spec with prioritized requirements (P0-P2)
**Context:** Automating security assessments to enable sales-led POVs without R&D involvement

### What works
- Business context is airtight: explains what a POV is, why it matters, the founder-led → sales-led transition. Zero-context reader can follow.
- Non-goals explicitly stated: "Not a breathing Security Assessment. Not for customers to use." Prevents scope creep.
- Named persona with vivid journey: "Lindsay is in a POV call with United Airlines" — concrete and testable.
- Definition of Done is measurable: "Run fully automated in less than 5 minutes, generate .xlsx." Time-bound, format-specified.
- Assessment table is exceptional: every query has type, name, explanation, exact output fields, and "exists in product?" column. Buildable detail.
- Open questions are strategic: especially #3 ("POV value vs. product value") — shows second-order thinking.
- Priority tiers (P0/P1/P2) within requirements are clear.

### What's not good enough
- **Goal statement is circular.** Restates the objective instead of defining a measurable outcome. Should be: "Enable sales to run POVs end-to-end without R&D involvement."
- **No success metrics beyond DoD.** DoD covers P0 output. No broader measure: R&D hours saved, POVs run independently, win rate impact.
- **Requirement IDs are empty.** Table has ID column, all blank. Can't reference specific requirements.
- **Risks section is thin.** One risk. Missing: bad prospect data, sales misinterpreting results, embarrassing findings in live demo.
- **Output specs inconsistent.** AuthN tables have exact fields. RBAC analyses describe complex formulas in prose — needs worked examples.
- **No technical constraints.** Where does this run? How does it hook into scan infra? Access control on output? Storage/retention?
- **Competitive grounding is weak.** One Rezonate link. No comparison to how competitors handle POV automation.

### Patterns to extract
| Keep | Fix |
|---|---|
| Non-goals section | Goal should be measurable, not circular |
| Named persona + vivid journey | Add success metrics beyond DoD |
| Measurable Definition of Done | Fill in requirement IDs |
| Assessment table with "exists?" column | Expand risks section |
| Strategic open questions | Use worked examples for complex logic |
| P0/P1/P2 priority tiers | Add technical constraints |

---

## Cross-example comparison

| Dimension | Ex 1 (Groups) | Ex 2 (Assessment) | Best practice |
|---|---|---|---|
| Problem framing | Good | Great | Lead with business context + sales motion |
| Non-goals | Missing | Explicit | Always include — prevents scope creep |
| User scenario | Generic | Named persona, vivid | Concrete personas > "As a user" |
| Definition of Done | Missing | Specific, measurable | Every spec needs a testable DoD |
| Requirements detail | Decent, inconsistent | Assessment table exceptional | Exact output fields + "exists?" column |
| Milestoning | M0-M6 phased | P0/P1/P2 priorities | Either works — but define the legend |
| Edge cases | Strong | Weak | Always cover destructive/failure paths |
| Success metrics | Missing | Missing | Both bad — every spec needs post-ship metrics |
| Competitive grounding | Strong | Weak | Include competitive refs when relevant |
