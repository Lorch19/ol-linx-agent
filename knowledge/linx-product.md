# Linx Security — Product Profile

> Last updated: 2026-04-19
> Source: Notion extraction (13 pages) via Linx Claude. See `log.md` 2026-04-19 for ingest details.

## Company

- **Pitch:** Next-gen Identity Security & Governance — unified graph + autonomous remediation.
- **Stage:** Post-Series B. Focus: execution, market position, path to next round.
- **Leaders:** CEO Israel Duanis · CPO Niv Goldenberg · VP Product Dor Renert · CTO Sarit · Head of AI Amir Ben Ami · AI TL Shon.
- **Public positioning (Mar 2026, Autopilot launch):** *"from AI assistance to continuous and independent AI execution"* — responsible autonomy.

## Core Capabilities

1. Identity data ingestion + normalization (unified graph)
2. Contextualized insights (risk-aware, not raw)
3. Workflow automation (remediation + governance)
4. Continuous posture management (not point-in-time)
5. Compliance gap identification

## AI Architecture (6 layers)

1. **Co-Pilot (Linx agent)** — orchestrator. All agent interactions go through Co-Pilot. Manual-trigger only. Single user-facing surface; autonomous agents do NOT talk to humans directly.
2. **Proactive agents** — OOTB + custom. Per-agent: triggers (manual/scheduled/event/external), instructions, knowledge sources, tools, monitoring, RBAC.
3. **Agentic interfaces** — outbound integrations: MCP, n8n, Microsoft Security Skills, Claude, GPTs. Powered by OpenAPI service.
4. **Product AI capabilities** — (a) AI Enhancements (classification/generation/correlation on shared prompt infra, tunable via Co-Pilot evals); (b) Organizational Knowledge (Custom Skills + Personalization/Memory).
5. **AI Backbone** — "Linx Graph-Based Identity Fabric should be AI Native and AI friendly." Data is visible, queryable, self-explainable for agents.
6. **AI Infra** — Browsing Agent, Investigation Agent, Query Builder Agent, Integration Code Builder, Browser-Based Connector (for API-less apps).

## AI Maturity Model (4 tiers)

1. **Investigation** (assistive search)
2. **Recommendation** (decision support)
3. **Generation On-Demand** (action prep, e.g. UAR campaign from NL)
4. **Autonomous Execution** (human-in-loop governance)

Self-assessment Aug 2025: *entering phase 3 while still completing phase 2.*

## Autopilot (launched Mar 19, 2026)

Brand rollup of Multi-Agent System + specialized autonomous agents.

### Six built-in agents
Security Guardian · UAR Reviewer · Access Request Approver · Access Architect · Knowledge Guide · Task Orchestrator.

### Agent status
| Agent | Status | Owner | Next step |
|---|---|---|---|
| Drifter (privileged drift detection) | In Product Design → rollout Cycle 78-79 | Omer Efroni | Rollout Plan active |
| Profile Tuner | In Product Design | Omer Efroni | Shawn starts next month |
| Reviewer Agent (UAR + access requests) | In Product Design | Omer Efroni | Has strongest testing section of any PRD |
| AI governance-Agent (taking actions) | Ready for Dev | Omer Efroni | P0 = single + bulk remediation |
| Multi-Agent System (epic) | In Product Design | Omer Efroni | MVP — 6 agents + Co-Pilot orchestration |

### Marketing-reality gap
Press release implies Autopilot is live. Underlying epics are still "In Product Design." Drifter is the first to roll out.

## Agentic AI Identities (Option B — separate workstream)

- **Owner:** Omri (confirmed Apr 20 — transferring from Mor as part of the AI leadership mandate).
- **Objective:** ISPM + IGA for customers' AI agents.
- **10-capability framework** (from "IAM for LLM-Based AI Agents" paper): Registration, Ownership, AuthN, AuthZ/delegation, Human oversight, Resource policy enforcement, Credential lifecycle, Auditability, Multi-agent collaboration, Visibility/observability.
- **Milestones (~8 months total):**
  - M0 — AI asset discovery (filter "AI Asset:Yes" across Discovery/Reports/UARs/Workflows)
  - M1 — Agent Discovery & Visibility (2mo)
  - M2 — Access Intelligence (2mo)
  - M3 — Governance & Control (2mo)
  - M4 — Advanced Governance (2mo)
- **Hero use case:** CISO Maria sees "23 agents across ChatGPT, Anthropic, Cursor, Copilot, N8N, Bedrock, Vertex AI" — owners, last-active, model, connected resources.
- **Convergence with Autopilot:** currently parallel workstreams, not convergent.

## Strategic POV — A / B / C

| Option | Status |
|---|---|
| **A — Linx's own AI products (Autopilot/Co-Pilot)** | Dominant + public. Owned by Omer Efroni. |
| **B — Govern customers' AI agents (Agentic AI Identities)** | Real, funded, in design. **Owned by Omri** (confirmed Apr 20). |
| **C — Compliance wedge (EU AI Act / NIST AI RMF / ISO 42001)** | **Absent.** No Notion references. Open question for Dor. |

**Tension to surface:** Linx publicly markets autonomous AI (A) while separately building govern-other-people's-AI (B). No doc explains why customers should trust Linx's own agents under the same lens.

## Roadmap Operating Model

- **Cadence:** 2-week cycles. Currently in Cycle 79.
- **Allocation policy (Q4 2025):** 60% roadmap / 30% customer commitments + on-call / 10% buffer.
- **AI team capacity:** 16 weeks/qtr — **smallest allocation** (Connectors 52.5, Application 35, Analytics 19, ExperiencePlatform 16.5). Tension with "every team does AI" mindset.
- **Three-interface mandate (Q3 2025, reaffirmed Q4):** every capability ships GUI + API + AI-agent.

### Cycle 79 AI priorities (active now)
- Drifter rollout
- Tuner kickoff (next month, Shawn)
- MCP gateway POC (Sarit + Amir Ben Ami)
- Taking-actions expansion to UAR (Dror)
- Assistant quality push: investigation tool DB→API, scheduled-reports caching fix, loading/reasoning UX
- Portuguese support
- Smart navigation from Agent

## Known Gaps in Strategic Artifacts

- **No written AI POV / strategy doc.** Closest = Sep 2025 Orchestration Capabilities (stale, milestones empty) + Mar 2026 press release.
- **No 2026 OKRs doc.** Strategic objectives layer above Cycles not formally documented.
- **AI Workshop Feb 8 NYC page returns 404.** Ask Amir/Niv for access.
- **No AI reliability/quality dashboard.** Sony RCA is one-off Draft.
- **Most PRDs missing success metrics.** Drifter, Tuner, Multi-Agent System all have empty DoD.

## PRD Standards

- **No Linx-customized template.** De-facto structure (present in most PRDs):
  - Objective (one sentence)
  - Business justification
  - Non-goal / out of scope
  - User scenario + journey
  - Functional requirements (table: Category | Requirement | Priority P0-P3, sometimes P0.5)
  - Definition of done
  - Design (often Figma link)
  - Relevant resources
- **Often present, sometimes empty:** Crawl/Walk/Run table, Open Questions, Risks, Testing, Example queries.
- **Reusable templates spotted:** Reviewer Agent PRD (testing section). AI governance-Agent PRD (18 example queries).
- **Style:** practical, granular, dry. Actual UI copy, character limits, button labels named. First-name personas (Bill, Maria, John, Yafit).
- **Quality bar to raise:** success metrics + testing sections should be mandatory.

## Reliability — Sony RCA (Aug 27, 2025)

- **Status:** Draft 7 months later. Action items never formally tracked.
- **Root cause:** deployment-process failure. Service deploy skipped (saved-chats refactor wasn't ready), manual HiBob tenant config added, AI assistant service raised Pydantic validation error on unknown SystemName enum value. 19-min fix once identified.
- **NOT an AI quality issue.** Separate from Michael Melo's 6-month quality escalation (false confirmations, accuracy failures).
- **Systemic issue:** skipping service deploys under deadline pressure. No tracker for AI incidents, no SLA doc, no eval results page.

## Open Questions

1. Convergence plan for A + B — when/how does one product line consume the other?
2. Option C decision — considered and rejected, or never considered?
3. 2026 OKRs — do they exist?
4. AI team capacity vs "every team does AI" — how does this scale?
5. Autopilot pricing/packaging — separate SKU or bundled?
6. PRD template formalization — Niv buy-in to mandate success metrics + testing sections?
