# Linx AI — MCP Gateway Context File
*For use in the AI Discovery claude.ai project. Last updated: 2026-04-27.*

---

## What this file is

A factual knowledge dump for Claude to draw on when Omri asks about the MCP Gateway, AI Governance, or the broader Linx AI domain. Not a narrative — a queryable record. Refer back when answering anything about roadmap, architecture, stakeholders, or open questions.

---

## Company & team

- **Linx Security** — post-Series B identity security + governance platform. Core product: a unified identity graph across SaaS/cloud/on-prem, with AI-powered insights and autonomous remediation.
- **Key players:**
  - Dor Renert — VP Product (Omri's boss, assigned AI mandate)
  - Niv Goldenberg — CPO
  - Sarit — CTO (driving MCP Gateway architecture)
  - Amir Ben Ami — Head of AI
  - Mor Shabi — PM on AI Governance (originating PM; ownership transferring to Omri)
  - Yoad — technical gate on credential pipelines

---

## The 4 AI product surfaces Omri owns

| Surface | What it is |
|---|---|
| AI Enhancement | Behind-the-scenes AI on shared prompt infra — classification, generation, correlation |
| AI Assistant (Co-Pilot) | Conversational surface in the Linx dashboard. Orchestrator for all agents. |
| Autopilots | Autonomous agents (Drifter, Profile Tuner, Reviewer) running under guardrails, output into Co-Pilot |
| AI Governance / Agentic AI Identities | Governing *customers'* AI agents — this is what the MCP Gateway is about |

Company-internal AI (dev automation, Linear management) is a separate initiative, not in scope.

---

## AI Governance — what shipped and what didn't

### What actually shipped in M1 (verified in Linear, Apr 2026)

- Agent graph model, Discovery > Agents UI, agent entity page — **live with real data**
- Built-in issues: `AGENT_EXCESSIVE_PERMISSIONS`, `AGENT_OWNER_OFFBOARDED` — **live**
- Platforms shipped: **Gemini, Vertex AI, Bedrock, n8n**
- ChatGPT Enterprise (CON-1733): still Backlog. Copilot Studio direct connector (CON-1972): **Canceled** Jan 2026.

### M2 / M3 status (as of Apr 2026)

- **M2 Access Intelligence:** 74% complete, 4 weeks overdue. The unfinished 26% is where the generic-IAM-API approach failed.
- **M3 Governance & Control:** silently narrowed in Linear. Struck through: MCP server access controls, approval chains, resource-level policies, least-privilege analysis, NHI remediation. Remaining: UARs for agents + JIT provisioning. Notion docs still show full M3 scope — docs drifted from Linear.

---

## The architectural pivot: MCP Gateway

### Why the pivot happened

Linx tried to govern agents using the same IAM APIs that govern humans and NHIs. **Confirmed non-viable.** Agent access flows are ephemeral, intent-driven, and multi-hop through tools and MCP servers — they don't fit the IAM-API surface.

Sarit's framing: *"We counted on the IdPs to identify connectors, but it didn't work. The MCP Gateway is our new approach."*

### What the MCP Gateway does

Linx sits **in the MCP protocol layer** between agents and their tools/resources. Instead of trying to see what agents do after the fact, Linx intercepts and enforces at the point of access.

The enforcement model: **`agent_perms = user_perms ∩ admin_agent_ceiling`**
- Admin sets a hard ceiling on what agents can do (regardless of which user invokes them)
- The invoking user's permissions are the upper bound the agent inherits
- Both bounds apply simultaneously

### P0 scope (confirmed by Sarit, Apr 23)

1. **Gateway core** — the intercept + enforcement layer
2. **Policy Agent — Access profiles for agents**
   - Access scoped to the specific MCP server / platform
   - **AND** tool-level granularity within it (not just platform-level) — *feasibility-gated per Mor Apr 26; reconcile with eng*
3. **Screens:**
   - "Integration" tab for MCPs
   - Three log types: System Logs · Governance Logs · All Access Logs

### Post-P0 (future)

1. JIT with gateway — on-the-fly approval with or without human intervention
2. JML for agents (joiner/mover/leaver)
3. Onboarding UI — connecting apps to the Gateway + secured setup
4. Agent Intent

### Deadline

**Identiverse, June 15.** Hard deadline. Goal: connect the team to the story/vision and start building.

---

## Two "platform" types — don't conflate them

| | Agent platform | Target SaaS |
|---|---|---|
| Definition | Where the agent *lives / runs* | Where the agent *acts* |
| Examples | ChatGPT Enterprise, Copilot Studio, Cursor, n8n, Bedrock, Vertex, Anthropic | Slack, Salesforce, Datadog, Jira, GitHub, Snowflake |
| Governance maturity | Low — vendor-specific, opaque APIs | High — mature RBAC, OAuth, audit |

**Original M1 framing:** visibility-first across agent platforms.
**Apr 26 direction:** enforcement-first at target SaaS. Admin scopes agent capability per app.
Implication: enforcement happens via credential scoping at JIT/provisioning time. Agent platforms become identity-ingestion points, not enforcement points.

---

## Confirmed decisions (as of Apr 26)

- Demo target = customers at Identiverse June 15
- Customer voice for June 15: executive call — treat as granted
- Discovery = "ugly flow" for MVP — acknowledged
- MCP traffic-flow position (sidecar / inline / observer): **pending eng discovery**

---

## Open questions (unresolved)

1. **Tool-level granularity in P0**: Sarit named it explicitly on Apr 23. Mor flagged feasibility risk on Apr 26. Need eng answer before locking P0 scope.
2. **MCP traffic-flow position**: Is Linx inline (blocking), sidecar (observing), or provisioning-only? Determines enforcement capability vs. risk of becoming a bottleneck/failure point.
3. **Agent platform ingestion**: How does Linx discover agent intent/identity when agent platforms are opaque?
4. **Shadow agents**: In or out of scope? Competitor Clutch's entire wedge lives here.
5. **Auditability timing**: Should be M3 (can't enforce policy without audit trails) but currently marked M4 in some docs.
6. **Platform owner vs. agent owner**: Same role? Separate fields in the data model?

---

## Key use cases (Mor + Omri, Apr 26)

1. Access controls — the policy engine core
2. **Employee leaves → what happens to their agents** (JML; lights up existing `AGENT_OWNER_OFFBOARDED` issue type — strongest concrete demo seed)
3. Inherit human permissions (resolved: `agent_perms = user_perms ∩ admin_ceiling`)
4. **Enforce admin policies in critical platforms: Slack / Salesforce / Datadog as P0 starting set**
5. Additional access profile level (roles for agents)

---

## Competitive context

Competitors named in this space: **Astrix, Oasis, ConductorOne, Natoma, Clutch**.
- Clutch's wedge: shadow agents (personal AI tools — the unmanaged, ungoverned tier)
- ConductorOne: positioned as "Evolution of Identity — Agentic AI era" (Mor: "frames the problem beautifully")
- Astrix × Bayer "Touchpoints Between AI and NHIs": cited as strong competitive reference doc

Linx differentiation: enforcement at the MCP protocol layer (not IAM-API post-hoc), tool-level granularity, graph-based blast radius mapping.

---

## Source hierarchy (for this project)

1. Linx internal: Notion, Linear, Slack, docs.linxsecurity.io
2. Customer signal: Grain calls, escalations, Linear needs (Monday.com = named AI governance signal)
3. Best-practice AI/LLM evaluation literature (Anthropic, Willison, Shankar, Yan, Lee)
4. Competitor public docs (ConductorOne, Lumos, SailPoint, CyberArk)

Never let a template or external best practice override real Linx data.
