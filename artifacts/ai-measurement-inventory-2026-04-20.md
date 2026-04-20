# AI Measurement Inventory — Internal Scoping

> Date: 2026-04-20
> Source: Linx Claude investigation across Linear, Notion, Slack, (Datadog + GitHub unreachable)
> Purpose: Scope existing AI measurement before Thursday deep dive with Amir Ben Ami

---

## TL;DR

Scaffolding exists, not stitched together or owned. Eval framework lives, every Assistant action is persisted, LLM traces stream to Datadog. What's missing: quality metrics on top of the plumbing. Amir has publicly acknowledged (Slack Apr 10) that accuracy isn't measured. A Sonnet upgrade shipped a Peloton regression two weeks ago (CON-3064) — customer caught it before Linx did. AI team backlog tripled in four months (65 → 187). Don't propose building from scratch — propose stitching, naming an owner, and sequencing two new metrics.

---

## What already exists

| Piece | Status | Evidence |
|---|---|---|
| `BaseEvalRunner` framework | Production, used across AI / UAR / Analytics teams | `common/linx_common/eval_runner_base.py`; sub-categories added via AI-255 (Done Oct 2025) |
| UAR LLM evaluator | Live | `segments/backend/uar_service/tests/evaluations/uar_llm_recommendation_evaluator.py`; used by ANA-1878 |
| Account classification evaluator | Live | `common/tests/evaluations/compare_account_classification_to_cache.py` |
| ArangoDB schema selector eval | Live | AI-169 (Done Oct 2025) |
| Assistant evaluator with explicit targets | Live | PRD-7202 targets: 95% precision L4L prod, 90% customer tenants, 90% consistency, 85% recall |
| Datadog LLM Observability | Live | Every LLM call traced. OTel metrics for success/fail, timeouts, tool usage, RBAC denials |
| `ai_assistant_tool_executions` / `ai_assistant_sessions` in ArangoDB | Live, not aggregated | Every Action-Observation pair persisted |
| AI-309 "AI Quality Observability Dashboard" | Marked Done Dec 11 2025 by Dudi | **Best inference: it's Datadog monitors → `#ai-alerts`. 15 min with Dudi to confirm actual scope.** |
| AI-491 "Check AI evaluations platforms" | **Backlog since Feb 2026** | Amir filed it — the vacuum is acknowledged, just not assigned |

**Models in use:** Claude 4.5 Sonnet on AWS Bedrock (primary, extended thinking) + Azure OpenAI (light) + Anthropic direct (alt).

---

## The smoking gun — Amir's Apr 10 Slack answer

SE Alexander Stilian (#tech-field-discussions, Apr 10 2026): *"Prospects have been asking me more and more… how is agent performance measured? What metrics are tracked? (accuracy, latency, success rate, cost per run)."*

Amir's verbatim list of what's currently measured:

> "Success/failure rate, iteration count per run, tool usage frequency, timeout rate, content violation rate, error categorization — all sliced by agent type, tenant, and internal vs. customer users."

**Accuracy is not in the list.** Neither is hallucination rate, correctness, user sentiment, or override rate. Andrew Senko asked Amir to write this up as a Notion page for future SEs — meaning "we don't measure accuracy" is on track to become the canonical sales enablement answer.

---

## CON-3064 — the case study to lead with

- **Date:** Apr 14 2026. Urgent. Done.
- **What happened:** Sonnet model upgrade shipped a Peloton Shopify conversion regression. *"AI is inserting data where it does not belong… I reproduced this after the Sonnet upgrade."*
- **Who caught it:** The customer. Before any internal system flagged it.
- **What would have caught it:** A 50-line regression eval against existing `BaseEvalRunner` scaffolding, run pre-deploy against model version bumps.
- **Why this matters:** Cleanest possible "why we do this" case in front of Amir.

---

## Backlog is the leading indicator

AI team open ticket count:

| Month | Open |
|---|---|
| Sep 2025 | 25 |
| Dec 2025 | 65 |
| Jan 2026 | 106 (intake jumped 7× that month) |
| Apr 2026 | **187** |

Throughput is fine (median 7 days completion). **Intake is the constraint.** Every month in 2026 has shipped less than it's taken in. Quality-keyword tickets (`hallucinat`, `inaccurate`, `incorrect`, `wrong`, `fabricat`, `contradict`) are 3× higher Jan-Apr 2026 vs Jul-Dec 2025.

---

## Sharpened 4-layer framework

| Layer | What exists | What's missing |
|---|---|---|
| Coverage | Tool usage frequency | Per-tenant adoption, active-user counts |
| **Correctness** | Content violation rate, error categorization | **Accuracy. Hallucination rate. Override rate. Per-tenant slicing.** |
| Containment | Iteration count, timeout, retries | p50/p95 latency on user-perceived path |
| Consequence | (none aggregated) | Customer-disable requests (EXP-1515), ticket volume per tenant trend |

**Per-tenant slicing is non-negotiable.** Sony = ~10× Monday on issue rate. Aggregate hides that.

---

## Two proposed instrumentation asks (no new infra)

1. **Pre-deploy regression suite** against model upgrades. Uses `BaseEvalRunner`. Seed corpus = Peloton + Sony tickets. Framing: "what would have caught CON-3064?"
2. **Override-rate instrumentation** for the Reviewer Agent when AI-431/432/433 ship. Zero Slack mentions of "overruled" in 90 days = no habit, no infra. The PRD already specifies it. Peloton audit / GSK / WestRock all ask for it.

---

## Customer signal map (AI-specific)

| Customer | Status | AI-specific signal | Source |
|---|---|---|---|
| **Sony** | Existing | ~10 AI on-calls; hallucinations, contradictions; *"cannot use for security investigations"*; questions accuracy of UI/Assistant/dashboards | AI-437, 450, 480, 502, 521, 550, 569 + 3 Slack threads |
| **Achieve** | Existing | ~8 AI on-calls. NEW TO RADAR. Wrong Applications-by-department data; 24h UAR rec hang | AI-358, APP-1847 |
| **monday.com** | Existing | **Positive AI reference.** IT used Assistant to identify access for a new system; *"results were spot on"* | #customer-monday Jan 26 (Mor Shabi) |
| **Peloton** | Existing | Disabled AI UAR recs (EY auditor pushback on "maybe"/"likely" language); CON-3064 Sonnet regression; Apr 19 hallucination loop | EXP-1515, CON-3064, #customer-peloton Apr 5 + Apr 19 |
| **Precor** | Existing | AI stuck in error loop; disabled AI UAR recs alongside Peloton | CON-3099, EXP-1515 |
| **SHL** | Escalation | AI recommendation accuracy — Netskope engineers surfaced for "further review" incorrectly | #esc-shl-march-2026 Mar 18 |
| **DT (Tyler)** | Existing | AI docs search failure (older); no recent AI-quality complaints | AI-86 |
| **CalPrivate Bank** | POV | AI-assisted ingestion failed on iCore; flat-file upload = audit-trust concern | FEA-204, Raphael Feb 9 |
| **GSK** | Prospect | Gating criteria: hallucination control, RBAC on agent actions, auditability + versioning of AI configs. *"AI must be assistive and explainable, not autonomous."* | #opp-gsk Feb 3-5 |
| **WestRock** | Prospect | SOX-driven; "auditor-defensible evidence artifacts" around AI recommendations is a buy criterion | #opp-westrock Feb 11 |
| **Regulated industries** | Prospect class | BYO LLM asked — embedded models unacceptable even with no-training DPA | FEA-247 (Apr 17) |

**Peloton Apr 5 concrete product ask (small-win candidate):**
- Report showing AI-sourced vs API-sourced descriptions
- Remove "maybe"/"unlikely" language from AI-generated permission descriptions

---

## Ownership landscape (no named owner for AI measurement)

- **Amir Ben Ami** — AI team lead. De facto owner. Filed AI-491 (still Backlog).
- **Dror Hadas** — implements most eval machinery (AI-4, 109, 169, 171, 255, 299, 571). De facto eval engineer.
- **Dudi** — built AI-309 Quality Dashboard. 15 min with him unlocks what actually shipped.
- **Shawn Shchory** — Reviewer Agent + Access Request implementer.
- **alexanderu@linxsecurity.io** — newer AI team engineer.

---

## Access gaps in this investigation

- Datadog MCP unreachable (claims about Datadog are inferred from Linear + Notion + Slack)
- GitHub nucleus repo 404 from `Omri-Lorch` account
- Notion page `AI-assistant-evaluation-set` returns 404 — may contain current eval set inventory
- Linear 250-ticket API cap on both queries — total exceeds 250

---

## Reviewer Agent PRD — aspirational, not implemented

AI-431, AI-432, AI-433 all **Backlog** since Jan 2026. PRD specifies:
- Peloton UAR diff testing
- Run-to-run consistency checks
- Claude-baseline comparison
- Override-stats feedback loop
- CI regression evals

None of this is built. If Reviewer ships without it, this becomes the next Sony/Peloton wave.

---

## Thursday playbook

1. Open with Amir's own Apr 10 Slack answer + CON-3064.
2. Pitch: assign AI-491 to the function being scoped.
3. Sequence two deliverables — pre-deploy regression + override-rate instrumentation.
4. Ask for 15 min with Dudi to confirm AI-309 scope.
5. Ask Dror for read-only access to the eval scaffolding files.
6. Establish per-tenant slicing as non-negotiable.

## Thursday open questions

1. Which is true today — public docs ("AI Agent" singular, HITL, drafts-not-commits), press release ("continuous and independent AI execution"), or Notion Multi-Agent epic?
2. Where does user-feedback data from the Assistant UI ("provide feedback") land, and who reviews it? (Parked per Omri Apr 20 — known gap, not a Thursday priority.)
3. `tools_used[]` in the API response — Multi-Agent System leaking through, or primitive tool-calling?
4. RBAC — does the Agent respect the calling user's permissions, or run elevated?
5. When does Autopilot appear in public docs?
