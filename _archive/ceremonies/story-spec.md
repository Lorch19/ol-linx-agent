# Story Spec Template

> The blueprint eng builds from. Clear enough that someone can start without a meeting.
> Time to complete: ~20-30 min (agent pre-fills context).

---

## Story: [Name]
**Date:** YYYY-MM-DD
**Intake ref:** [link to feature-intake if one exists]
**Owner:** [PM owner]
**Eng lead:** [if assigned]

---

### 1. Job Story

_Not "as a user I want" — that's too vague. Use the job story format:_

**When** [situation/trigger — what's happening when the user needs this],
**I want to** [action/capability — what they're trying to do],
**So I can** [outcome — the business result they're after].

**Example:** When a compliance audit is due in 30 days and I need to prove which identities have access to what, I want to generate a point-in-time access report across all identity types (human, service, agent), so I can submit evidence to auditors without manually pulling data from 5 systems.

---

### 2. Who

**Primary persona:** [CISO / Identity team lead / Compliance officer / Security engineer / DevOps]
**Context:** [What does their day look like? What tools do they use today? What's broken?]
**Customer evidence:** [Which customers match this persona? Pull from `customer-intel.md`]

---

### 3. Why Now

_What makes this worth building in this sprint vs. next quarter?_

- **Customer urgency:** [upcoming renewal, audit deadline, expansion blocker]
- **Competitive window:** [competitor launching similar, market gap closing]
- **Platform dependency:** [other features blocked until this ships]
- **If we wait:** [what specifically gets worse]

---

### 4. Success Criteria

_How do we know this worked? Not vanity metrics — real signals._

| Signal | How we measure | Target |
|---|---|---|
| [User behavior change] | | |
| [Customer feedback] | | |
| [Business metric] | | |

---

### 5. Acceptance Criteria

_Specific, testable conditions. Eng uses these to know when they're done._

- [ ] [Given X, when Y, then Z]
- [ ] [Given X, when Y, then Z]
- [ ] [Given X, when Y, then Z]
- [ ] [Edge case: what happens when...]
- [ ] [Error case: what happens when...]

---

### 6. Scope

**In scope:**
- [Bullet list of what's included]

**Out of scope (explicitly):**
- [What we're NOT building — prevents scope creep]
- [What's deferred to a future iteration]

---

### 7. Dependencies

| Dependency | Status | Owner | Impact if not ready |
|---|---|---|---|
| [API / service / infra] | Ready / In progress / Not started | | |
| [Design / UX] | | | |
| [Third-party integration] | | | |

---

### 8. Competitive Context

_Agent auto-fills from knowledge files. How do competitors handle this same job?_

| Competitor | How they solve it | Strength | Weakness |
|---|---|---|---|
| | | | |
| | | | |

**Our angle:** [Why Linx's approach is different/better — ties back to positioning]

---

### 9. Technical Notes

_Optional. Eng lead fills this in during refinement, not the PM._

- Architecture considerations:
- Known risks:
- Suggested approach:

---

### 10. Ready Gate

_All boxes checked before eng starts. No exceptions._

- [ ] **Customer evidence exists** — at least 1 real signal, not just internal opinion
- [ ] **Job story is testable** — eng can read it and know what to build
- [ ] **Acceptance criteria are specific** — Given/When/Then, not vague descriptions
- [ ] **Scope is explicit** — "out of scope" section filled, not just "in scope"
- [ ] **Dependencies identified** — no known blockers, or blockers have a plan
- [ ] **Eng has reviewed for feasibility** — sizing confirmed, no hidden complexity
- [ ] **No conflict with current sprint** — checked against `commitments.md`
- [ ] **Positioning check passed** — doesn't weaken the "only we" claim

**Gate passed:** Yes / No — if No, what's missing:

---

### Agent Automation Notes

When running this template, the agent should:
1. Pull persona context and customer evidence from `customer-intel.md`
2. Check `knowledge/linx-product.md` for architecture dependencies
3. Fill competitive context from `knowledge/competitive-matrix.md` and `knowledge/battle-cards.md`
4. Check `commitments.md` for sprint conflicts
5. Check `knowledge/positioning.md` for positioning alignment
6. Run the ready gate checklist and flag any unchecked items before eng handoff
7. If ready gate fails, list exactly what's missing — don't let it slide
