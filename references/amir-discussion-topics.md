# Amir Ben Ami — Running Discussion Topics

> Maintained list. Not all for any single meeting — cover over multiple sessions.
> First deep dive: Thursday 2026-04-23.
> Sources: `artifacts/ai-overview-omer-efroni-2026-04-19.md`, `artifacts/ai-measurement-inventory-2026-04-20.md`, log.md 2026-04-19 onwards.

---

## Strategic framing

- **3-reality gap.** Public docs say "AI Agent" (singular, HITL, drafts-not-commits). Press release says "continuous and independent AI execution." Notion describes Multi-Agent System with 6 specialized agents. Which is the canonical story today?
- **Feb 8 NYC AI roadmap** — doc returns 404. Need access. Where does that roadmap stand 2.5 months later?
- **Scope confirmation.** Omri owns Enhancement + Assistant + Autopilots + Governance (4 surfaces). Shared understanding?
- **Co-Pilot vs Autopilot UI convergence.** "Linx AI" nav (Drifter design) — single surface or parallel inbox + chat?
- **AI Enhancement ownership post-Omer.** Who picks up the prompt infrastructure + evaluation tooling?

## Measurement (v0 pitch)

- Lead with Amir's own Apr 10 Slack answer + CON-3064 Peloton regression case.
- Assign **AI-491** ("Check AI evaluations platforms," Amir's own ticket, Backlog since Feb) to the measurement function being scoped.
- Sequence two deliverables: pre-deploy regression gate + override-rate instrumentation.
- **15 min with Dudi** to confirm AI-309 actual scope (best inference: Datadog monitors → `#ai-alerts`).
- **Dror** — read-only access to eval scaffolding (`eval_runner_base.py`, `uar_llm_recommendation_evaluator.py`, `compare_account_classification_to_cache.py`).
- Per-tenant slicing non-negotiable (Sony ~10× Monday on issues).

## Architecture / technical gaps

- **"No context management"** (Omer's flag). Root cause: architectural debt, missing infra, or not prioritized? Likely #1 technical lever for bucket 1 reliability.
- What % of Sony's failures trace to context gap vs. accuracy/helpfulness tuning?
- **SQL scripts instead of API querying** — deliberate, tech debt, or scaling bottleneck?
- **`tools_used[]`** in public API response — Multi-Agent System leaking through, or primitive tool-calling?
- **RBAC** — does the Assistant respect the calling user's permissions, or run elevated?
- **Admin-only gating on Assistant** — trust, UX, or security? Category question per Omer.

## Customer-linked asks

- **HITL as product bet.** GSK: "AI must be assistive and explainable, not autonomous." WestRock: "auditor-defensible evidence artifacts." Regulated industries (FEA-247): BYO LLM. Is HITL the bet, or are we under pressure to go more autonomous?
- **Peloton concrete asks (Apr 5 — small-win candidates):** source-attribution report (AI-generated vs API-sourced descriptions) + remove "maybe"/"likely" language. On roadmap?
- **Where does Assistant user feedback land** (thumbs-up/down collected via UI)? Parked Apr 20 — known gap, revisit.

## Agent ideas / whitespace

Per Omer's invitation ("think of another agent"). Bring one well-framed idea, not five half-baked.

- **Find Unconnected Apps Agent** (Omri, Apr 20) — discovers apps used in the customer's org that aren't yet connected to Linx. Feeds the unified-graph value prop directly: the more complete the graph, the better everything else (UARs, drift detection, access reviews) performs. Signal sources to consider: SSO logs, expense / SaaS management data, browser telemetry, M365 app registrations.
- **Context / Memory Agent** — addresses "no context management" gap directly.
- **Reliability / QA Agent** — monitors other agents' outputs, catches false confirmations (Sony reframing).
- **Onboarding Agent** — learns a new customer's setup post-sign.
- **Migration Agent** — ties to the SailPoint/Saviynt displacement wedge from Dor 1:1.

## Parked / known gaps

- Feedback data pipeline — what's collected, where it lands, who reviews it (parked Apr 20).
