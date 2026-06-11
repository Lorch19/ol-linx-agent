# Ship Review Template

> The "trade settlement" — did the feature deliver on its hypothesis?
> Time to complete: ~15 min. Run within 3 days of shipping.

---

## Feature: [Name]
**Ship date:** YYYY-MM-DD
**Intake ref:** [link to original feature-intake]
**Story spec ref:** [link to story-spec]
**Eng lead:** [who built it]

---

### 1. What Shipped vs. What Was Planned

| Planned (from story spec) | Shipped | Delta |
|---|---|---|
| [acceptance criteria 1] | Done / Partial / Cut | [why, if different] |
| [acceptance criteria 2] | Done / Partial / Cut | |
| [acceptance criteria 3] | Done / Partial / Cut | |

**Scope changes during build:** [anything added, removed, or changed mid-sprint — and why]

---

### 2. Customer Signal

_Did a customer see this? What was the reaction?_

- **Demo'd to:** [customer name, internal stakeholder, or "not yet"]
- **Reaction:** [actual quote or observation — not your interpretation]
- **Adoption signal:** [are they using it? asking about it? ignoring it?]
- **Follow-up needed:** [next step with this customer]

_If no customer has seen it yet, when will they? Put a date._

**Customer sees this by:** YYYY-MM-DD

---

### 3. Hypothesis Check

_Go back to the intake. Were the assumptions correct?_

| Assumption (from intake) | Validated? | Evidence |
|---|---|---|
| [the problem exists] | Yes / No / Partial | |
| [this persona cares] | Yes / No / Partial | |
| [this approach works] | Yes / No / Partial | |

---

### 4. What We Learned

_Three bullets max. What did this teach us that we didn't know before?_

1. 
2. 
3. 

---

### 5. What to Measure (30-Day Check)

_Set a 30-day reminder. What will tell us if this was worth building?_

| Metric | Baseline (today) | Target (30 days) | Check date |
|---|---|---|---|
| | | | |
| | | | |

---

### 6. Competitive Impact

- **Does this change our competitive scoring?** Yes / No — which competitor, which capability:
- **Does this affect the "only we" claim?** Strengthened / Unchanged / Weakened — why:
- **Update needed in knowledge files?** [ ] competitive-matrix.md [ ] capability-landscape.md [ ] battle-cards.md [ ] positioning.md

---

### 7. Next Iteration

**What's the immediate follow-up?** [bug fixes, UX polish, next phase]
**New intake needed?** Yes / No — if yes, for what:
**Park or kill anything?** [related features that this changes the priority of]

---

### 8. Process Retro (optional)

_Did the ceremony system work for this feature? 1 line each._

- **What helped:** [which template/gate caught something useful]
- **What was friction:** [what slowed us down without adding value]
- **Adjust:** [one change to make for next time]

---

### Agent Automation Notes

When running this template, the agent should:
1. Pull the original feature intake and story spec for comparison
2. Pre-fill the "Planned" column from story spec acceptance criteria
3. Check `customer-intel.md` for any signals related to this feature since intake
4. Set a 30-day reminder in `commitments.md` for the measurement check
5. Flag if competitive scoring in knowledge files needs updating
6. Log the outcome to `log.md` and update `linx-profile.yaml` decision journal
7. If process retro feedback suggests a ceremony change, flag it for weekly review
