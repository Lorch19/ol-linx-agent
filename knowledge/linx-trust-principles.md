# Linx Trust Principles

> Source: Omri Lorch, 2026-06-15. Internal product philosophy — how Linx earns admin trust.
> Apply when: writing specs, evaluating features, doing positioning, reviewing recommendations, writing UAR/NHI/AI-companion product decisions.

Trust in security takes time to build and is almost impossible to rebuild once lost. A great product earns it through character and consistency — showing the reasoning, knowing the org, never letting a consequence be a surprise.

Six principles define how Linx earns that trust. Every new feature should be held to these.

---

## 1. Expertise

Linx brings real domain knowledge to every finding and recommendation. Rules and thresholds are calibrated to *this* org, not applied universally. A 7,000-person enterprise and a 50-person startup don't have the same normal. Linx knows the difference.

**Gap today:** Excessive privilege findings use the same rule for every tenant regardless of size or structure.
**Fix:** Learn what normal looks like for this specific org, by role and department, and flag only what deviates. Data infrastructure problem, not AI.

---

## 2. Integrity

Linx is explicit about the difference between what it observes and what it infers. A finding built on a computed or incomplete field should say so. Hiding uncertainty — silently excluding deduced accounts, treating an inferred app name as a confirmed fact — makes the product look more confident than it is. That is worse than the gap itself.

**Current model (offboarding only):** A partially-offboarded account surfaces by default and can only be dismissed through an explicit, logged action — making it impossible to remain unaware through inaction. **This is the target behavior for Integrity across the whole platform.**

**Gap today:** Inferred fields treated as facts (Sony); deduced accounts quietly excluded.
**Fix:** Every data field carries a provenance tag: observed / inferred / computed. Data model change that touches the whole platform.

---

## 3. Transparency

Linx shows its reasoning. A recommendation isn't just a verdict — it's an explanation the admin can evaluate, challenge, and learn from. This matters more in an AI-native product than anywhere else. If the admin can't see why Linx reached a conclusion, they can't trust it and they can't improve it.

**Gap today:** UAR recommendations don't surface what inputs drove the decision; wrong outputs can't be diagnosed.
**Fix:** LLM returns structured reasoning alongside recommendations; reasoning stored and surfaced consistently across surfaces.

---

## 4. Responsibility

Linx understands that acting has consequences beyond security and beyond what the admin intended. Two directions:

- **Before recommending removal:** know what depends on it. A dormant NHI flagged for cleanup might be the integration keeping Salesforce in sync with billing. A guess isn't a recommendation.
- **Before executing a broad action:** resolve and display the full scope. A NAF admin enabled Auto-Sync scoped to "branch managers" — it resolved to the entire active workforce and provisioned thousands of users before she could stop it. The action didn't exceed her permissions; it exceeded her understanding of what she was doing.

**Linx never lets an action's real scale be a surprise.**

**Gap today:** Dormant NHI cleanup shows no dependency map. Auto-Sync showed no scope preview.
**Fix:** (a) Full scope resolution before any broad action executes — exactly how many users/accounts affected. (b) Graph model of system dependencies for service account/machine credential removal.

---

## 5. Curiosity *(Phase 2)*

Linx treats every org as a new thing to understand. It builds a persistent model of this company's identity environment: the VIPs, the exceptions, the patterns that would look anomalous anywhere else. When an entitlement has been approved three times in a row, that's a signal. When a specific identity always carries 167 accounts, that's normal for this org.

**Gap today:** No persistent exception registry, no cross-campaign pattern detection, no shared memory between UAR and issues systems. New-hire provisioning against a peer profile inherits stale excess access. Analyst closes a benign login investigation; the next analyst starts from zero.
**Fix:** A new architectural layer — persistent memory outside any single feature, accessible across all of them. This is the hardest investment and the most foundational; it makes all other characteristics significantly easier.

---

## 6. Autonomy *(Phase 2, depends on Curiosity)*

The first five characteristics earn this one. Once an admin trusts that Linx is expert, honest, transparent, deeply familiar with their org, and aware of consequences, they are ready to delegate. Autonomy is built by observing consistent admin decisions over time and converting them into trusted automated actions. It isn't configured. It's learned.

**Gap today:** Decisions made in one surface don't propagate. Approving an admin role in a UAR campaign doesn't stop the issues system from re-flagging it two months later. Control theater enabled: campaigns hit 100% completion via bulk-approval at end of window; Linx captures the signals (velocity, risk flags, override patterns) but doesn't yet use them to interrupt or carry them forward.
**Fix:** Requires Curiosity first. Once shared memory exists, converting consistent decisions into automated rules becomes tractable.

---

## Application notes

These apply to Linx as a system, expressed differently per surface:
- **Companion (AI):** through language — how it explains and qualifies
- **UI:** through interaction and visual design — what it shows before you act
- **API:** through data contract — what provenance fields it exposes

**When evaluating a proposed feature:** ask which principle it advances, which it risks degrading, and whether it passes the "never a surprise" bar from Responsibility.
