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

---

## Example 3: "Governance At Linx Platform" (Vision/Platform Doc)

**Source:** Linx Notion — strategic vision document
**Type:** Platform-level vision doc with competitive framing
**Context:** Establishing actionable governance (workflow engine) as Linx's core competitive differentiator

### What works
- Opens with strategic "why" — frames actionability as a core platform value, not just a feature. Right altitude for this document type.
- Conceptual model is crisp: triggers → conditions → actions. One-sentence shared vocabulary for the whole org.
- Competitive gap analysis table (Veza, C1, Opal, Zluri) with strengths and gaps — immediately actionable for prioritization.
- Explicit "better than Okta/SailPoint" sections with specific differentiation angles (not just "we're better").
- Engine mapping table (workflow vs. UAR vs. access requests) prevents architectural confusion.
- Rich research: 17 references including competitors, OSS workflow engines, and embedded tools.

### What's not good enough
- **Not a spec — it's a vision doc with no spec inside.** No requirements, milestones, DoD, user stories, or acceptance criteria. Great *introduction* to a series of specs, but not buildable alone.
- **"Not prioritized" disclaimer is a cop-out.** 11 capabilities, 17 resources, nothing prioritized. That's research, not product management. The hard work (what's M0?) hasn't been done.
- **No user scenario or persona.** Who uses these workflows? IT admin? Security lead? Compliance officer? No "Lindsay at United Airlines" equivalent.
- **"What we'll do better" is aspirational, not evidence-based.** "We will provide the ability to completely automate remediation" — based on what? Marketing copy, not product planning.
- **Competitive analysis is one-sided.** Lists competitor gaps but never assesses where Linx is behind. A vision doc showing only upside is a pitch, not a plan.
- **No customer evidence.** Unlike Ex 1 (Monday) and Ex 2 (United Airlines), this is entirely internally driven. No customer pull cited.
- **Capability list mixes abstraction levels.** "Provision and Deprovision" (core capability) sits next to "Data manipulation" (technical detail) and "IT operations support" (use case category). These aren't peers.
- **No build-vs-buy evaluation.** Links to 4+ embeddable workflow engines but never evaluates them. Massive architectural decision left unaddressed.

### Patterns to extract
| Keep | Fix |
|---|---|
| Strategic "why" framing | Must lead to a buildable spec (not stop at vision) |
| Triggers → conditions → actions model | Prioritize the capability list — cut or sequence |
| Competitive gap analysis table | Add customer evidence driving the direction |
| "Better than X" differentiation sections | Honestly assess where Linx is behind |
| Engine mapping (which system handles what) | Evaluate build vs. buy for major components |
| Rich research links | Keep capability list at consistent abstraction level |

### Document type note
This is a **vision/platform doc**, not a feature spec or epic. Different document type = different quality bar. Vision docs need: strategic framing, competitive positioning, prioritized capability map, build-vs-buy evaluation. They do NOT need acceptance criteria or DoD. The eventual Skill should recognize document types and apply the right template.

---

## Example 4: "End-user Tasks" (Feature Spec / System Design)

**Source:** Linx Notion — feature spec with system design elements
**Type:** Feature spec with data model, capability map, and experience design
**Context:** Building an extensible task system for human-in-the-loop governance (approvals, reviews, manual actions)

### What works
- **"Why" is grounded in real workflows.** Not abstract — opens with 9 concrete scenarios (onboarding approval, dormant account remediation, orphan account management). Reader immediately understands the need.
- **Core vs. unique attributes separation.** Clearly distinguishes what all tasks share (type, assignee, status, SLA) from what varies by task type (decision schema, input requirements, post-action behavior). This is strong data modeling thinking.
- **Approval task object table is exceptional.** Every attribute has: description, example/configuration. An engineer can build from this. Best data specification across all 4 examples.
- **Three-layer architecture: source-level → task-level → user-level.** Routing logic lives at the source (workflow config), core attributes live on the task, experience lives in the UI. Clean separation of concerns.
- **End-user AND admin experience both specified.** Not just "what the system does" but "what each persona sees and can do." Filters, bulk actions, delegation, stuck task handling.
- **P0 vs. P1+ task types scoped.** Approval and Review tasks first, Manual and Custom later. Clear phasing.
- **Extensibility called out explicitly.** "Build tasks as extensible entities" — acknowledges this is a platform, not a one-off feature.
- **ITSM integration is bidirectional.** Not just "create tickets" but "listen for status changes, reflect in Linx, push updates back." Shows mature systems thinking.

### What's not good enough
- **Same "not prioritized" cop-out as Example 3.** 7 capability areas listed, unprioritized. The P0/P1+ split on task *types* is good, but the *capabilities* needed to support them aren't sequenced. What's the minimum viable task system?
- **No Definition of Done.** When is the task system "shipped"? Example 2 had "5 minutes, xlsx output." This has nothing comparable.
- **No success metrics.** How do you measure if this works? Task completion rates? Time-to-decision? Reduction in manual governance overhead? SLA compliance mentioned in the admin dashboard but not as a success criterion for the feature itself.
- **No named persona or user journey.** Example 2's "Lindsay at United Airlines" approach is missing. The admin vs. end-user split is good but abstract. Who is the end user — a team lead reviewing access? A manager approving onboarding? Show one complete journey.
- **"Stuck task" handling is underspecified.** Listed as a capability but the actual resolution logic is thin. What happens when an assignee is offboarded mid-approval chain? Auto-escalate to whom? Timeout behavior?
- **No risks section.** A task system touching workflows, UAR, JIT, and ITSM has significant integration risk. What if ITSM sync fails? What about task storms from bulk operations? No failure modes discussed.
- **Competitive grounding is absent.** References to C1, Opal, Apono at the bottom, but no "where do we differentiate" or "what do they do that we should learn from." Compare to Example 3's explicit competitive gap table.

### Patterns to extract
| Keep | Fix |
|---|---|
| Concrete scenario list as the "why" | Add Definition of Done |
| Core vs. unique attribute separation | Prioritize capabilities, not just task types |
| Detailed object attribute tables | Add success metrics |
| Three-layer architecture (source/task/UX) | Add a named persona with complete journey |
| Both end-user and admin experience specified | Add risks section with failure modes |
| Bidirectional ITSM integration design | Add competitive differentiation analysis |
| P0/P1+ phasing on task types | Specify stuck-task resolution logic |

---

## Cross-example comparison

| Dimension | Ex 1 (Groups) | Ex 2 (Assessment) | Ex 3 (Governance) | Ex 4 (Tasks) | Best practice |
|---|---|---|---|---|---|
| Problem framing | Good | Great | Strategic | Good (scenario-based) | Lead with business context or concrete scenarios |
| Non-goals | Missing | Explicit | Missing | Missing | Always include — prevents scope creep |
| User scenario | Generic | Named persona | Missing | Abstract personas | Concrete named personas > abstract roles |
| Definition of Done | Missing | Specific, measurable | N/A (vision doc) | Missing | Every spec needs a testable DoD |
| Requirements detail | Decent | Assessment table exceptional | Capabilities only | Object tables exceptional | Detailed attribute tables with examples |
| Milestoning | M0-M6 | P0/P1/P2 | Unprioritized | P0/P1+ (types only) | Prioritize capabilities AND deliverables |
| Edge cases | Strong | Weak | N/A | Mentioned (stuck tasks) but thin | Always cover failure/edge paths in detail |
| Success metrics | Missing | Missing | Missing | Missing | Universal gap — every doc needs post-ship metrics |
| Competitive grounding | Strong | Weak | Strong | Weak (refs only) | Include competitive analysis when relevant |
| Data modeling | Implicit | Output field specs | Conceptual model | Core/unique attribute split | Ex 4's approach is the gold standard |
| Document type | Feature epic | Feature spec | Vision doc | Feature spec + system design | Recognize type, apply right template |

## Emerging document types

| Type | Examples | Purpose | Must-have sections |
|---|---|---|---|
| **Feature epic** | Ex 1 (Groups) | Detailed buildable spec for a bounded feature | Requirements, milestones, acceptance criteria, edge cases |
| **Feature spec** | Ex 2 (Assessment), Ex 4 (Tasks) | Spec for a specific deliverable or system | Persona, DoD, detailed specs, success metrics |
| **Vision/platform doc** | Ex 3 (Governance) | Strategic direction for a capability area | Why now, competitive positioning, prioritized capability map |

## Universal gaps (found in ALL examples)
1. **No success metrics.** Not a single example defines how to measure if the feature worked post-ship.
2. **Prioritization often punted.** "Not prioritized" disclaimers appear without follow-through.
3. **Named personas rare.** Only Example 2 uses a concrete named persona. The rest use abstract roles.
