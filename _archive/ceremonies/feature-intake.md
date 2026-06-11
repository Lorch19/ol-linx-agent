# Feature Intake Template

> The "trade ticket" — structured triage before committing resources.
> Time to complete: ~10 min (agent pre-fills context).

---

## Feature: [Name]
**Date:** YYYY-MM-DD
**Source:** Customer / Competitor Pressure / Internal Vision / Market Shift
**Requested by:** [who surfaced this — customer name, stakeholder, self]

---

### 1. Problem Statement (not solution)

_What user pain does this address? Write it from the customer's perspective._

**Who feels this pain:** [persona — CISO, identity team lead, compliance officer, security engineer]
**How they feel it today:** [current workaround or unmet need]
**What happens if we don't build it:** [cost of inaction — churn risk, lost deals, compliance gap]

---

### 2. Evidence

_No evidence = no feature. What signals support this?_

- [ ] Customer signal(s): [quotes, requests, complaints — pull from `customer-intel.md`]
- [ ] Usage data: [if available — adoption patterns, feature requests in support tickets]
- [ ] Market signal: [analyst reports, market trends, regulatory changes]
- [ ] Competitive pressure: [who has this, who's building it]

**Evidence strength:** Strong (3+ customers) / Moderate (1-2 signals) / Weak (assumption)

---

### 3. Competitive Scan

_Agent auto-fills from `competitive-matrix.md` and `capability-landscape.md`._

| Competitor | Has this? | Quality | Notes |
|---|---|---|---|
| SailPoint | | | |
| CyberArk | | | |
| ConductorOne | | | |
| Veza | | | |
| Lumos | | | |
| Others | | | |

**Are we early or late?** Early (market-making) / On pace / Late (catching up)

---

### 4. Strategic Fit

| Check | Answer |
|---|---|
| **Positioning:** Does this strengthen the "only we" claim? | Yes / No / Neutral — why: |
| **Series B:** Does this support the fundraise narrative? | Yes / No / Neutral — why: |
| **Platform trajectory:** Does this move us from point solution → platform? | Yes / No — why: |
| **IGA maturity:** Does this close a known gap in `capability-landscape.md`? | Yes / No — which gap: |

---

### 5. Sizing (Gut Check)

| Dimension | Estimate |
|---|---|
| **Effort:** | S (days) / M (1-2 weeks) / L (sprint+) / XL (multi-sprint) |
| **Risk:** | Low / Medium / High — what could go wrong: |
| **Dependencies:** | [other features, infra, third-party, team availability] |

---

### 6. Decision

**Verdict:** Explore / Park / Kill

| Decision | What happens next |
|---|---|
| **Explore** | Write a `story-spec.md`. Target date: |
| **Park** | Revisit on [date]. Reason to wait: |
| **Kill** | Reason: [evidence-based, not opinion] |

**Decision made by:** [Omri / Omri + Niv / team]
**Dissenting view:** [if anyone disagreed, capture why — this is where learning happens]

---

### Agent Automation Notes

When running this template, the agent should:
1. Search `customer-intel.md` for signals related to this feature area
2. Pull competitive scores from `competitive-matrix.md` for the relevant capability
3. Check `capability-landscape.md` for where this sits in the IGA map
4. Check `positioning.md` to assess "only we" impact
5. Check `commitments.md` for conflicts or related promises
6. Pre-fill the competitive scan table
7. Flag if evidence strength is "Weak" — push for customer validation before Explore decision
