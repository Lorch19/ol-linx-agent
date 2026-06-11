# PRD review checklist — on-demand workflow

> Downgraded from a triggered loop per verdict #16: an automated reviewer would duplicate the installed **prd-partner-linx** skill, and the "replaces ceremonies" rationale was hollow (ceremonies had zero recorded uses). This is the 2-minute version for when full prd-partner-linx iteration is overkill.

**Invoke:** "run the PRD checklist on <doc/Linear issue>" — from any session.
**Metric:** review delivered in <2 minutes of Omri's time.

For drafting or deep iterative review, use **prd-partner-linx** instead. This checklist is for a fast gate.

## The checklist

1. **Competitive** — does any claim contradict `knowledge/competitive-matrix.md`? Does a named competitor already ship this? (cite the matrix row + date; flag if >30 days stale)
2. **Buyer credibility** — would the buying CISO find the problem statement credible? Is the persona someone who exists at a Linx customer (`customer-intel.md`)?
3. **Customer evidence** — named customer signal, or assumption? "No evidence = flag it" — quote `customer-intel.md` or say there's nothing to quote.
4. **Series B** — does this advance the platform narrative (NHI → AI-agent governance trajectory), or is it a side quest? One sentence.
5. **Eng-readiness** — acceptance criteria testable? Dependencies named? Edge cases (empty/auth/scale) addressed?
6. **Jargon bridge** — any IAM term Omri's fintech-native readers (or Omri) would trip on?

## Output format

Six numbered verdicts, one line each: PASS / FLAG + the evidence. Then a single overall call: **ship to eng / fix first / kill**. No prose beyond that.
