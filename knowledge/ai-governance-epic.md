# AI Governance Epic — Linear ticket + Notion (as of 2026-04-20)

**Source:** [Linear project](https://linear.app/linxsecurity/project/governance-for-agentic-ai-07e946f01264/overview) + linked Notion ([Agentic AI Identity WIP](https://www.notion.so/Agentic-AI-Identity-WIP-256259f6555980cd88c6f828b34efaf3)).

**Owner context:** Mor appears to be the originating PM for this epic. Omri is now picking up the research + competitor workstream. Handoff dynamics with Mor still unclear — need to clarify.

---

## Goal (one line)

Bring ISPM + IGA to Agentic AI Identities on the Linx platform.

## Problem framing

Agents are:
- **Ephemeral** — lifecycle measured in minutes/hours
- **Autonomous** — act without human approval in the loop
- **High-volume** — massive scale, across many apps at once
- **Context-dependent** — permissions shift by task/time/data sensitivity

Security risk framed as: *"agents operate like employees with unlimited permissions and no fear of consequences."* Compromise → data exfil / resource modification / cascade failures, all without human oversight.

## The 3 customer questions this epic answers

1. Where are AI/LLM tools connected to my apps? (visibility)
2. How do I control agent access to sensitive resources? (governance)
3. Who is accountable when an agent acts? (ownership + audit)

## Non-goals (explicit)

- Prompt security / PII in prompts → Lasso, Prompt Security territory
- Discovering *third-party's* internal agents + their communications → treated as a black box

---

## Identity model — DECIDED: node-primary

Agent is a first-class graph entity (not an edge). Ticket specifies the properties:

- Platform (application)
- Name, Description, Prompt
- Owner (Human / users / group)
- Accounts shared with
- Agents it communicates with (agent-to-agent edges)
- Entitlements (user permissions/roles *to* the agent)
- Tools (API + MCP; modeled as first-class entity, see below)
- Capabilities (text)
- Model (e.g., "Claude Sonnet 4.5")
- Origin ID
- Timestamps: Created / Modified / Last used

## Tool model — also first-class

A **Tool** = action surface an agent can invoke.

- Name
- Type: API / MCP
- Authentication type (API key, OAuth, etc.)
- Permissions (list)
- Target URL
- Target application name

This is a meaningful bet: Linx is going to map an agent's blast radius by enumerating every tool surface it can hit, not just aggregate "what apps can it reach."

---

## The 10 capabilities (framework)

| # | Capability | What Linx does |
|---|---|---|
| 1 | Registration & identification | Connect to agentic platforms, discover agents, expose the Agent model |
| 2 | Ownership assignment | Extract owners, map to Linx humans, flag orphans + leavers |
| 3 | Authentication | Credential discovery (OAuth / API keys / certs / JWT), NHI mapping |
| 4 | Authorization & delegation | OAuth scopes (requested vs granted), delegation chains, RBAC/ABAC/PBAC detection, token exchange (RFC 8693), MCP authz |
| 5 | Human oversight & approval | JIT requests, approval chains, UARs for agents |
| 6 | Resource policy enforcement | Resource-level policies, MCP server policies, least privilege, SoD |
| 7 | Credential lifecycle | Issue / rotate / step up/down / revoke |
| 8 | Auditability & logging | Agent action logs, delegation trails |
| 9 | Multi-agent collaboration | A2A/ACP/LMOS protocol detection, mutual auth, trust boundaries |
| 10 | Visibility & observability | Real-time monitoring, baselines, anomaly detection, shadow-agent detection, dashboards |

Source PDF: `IAM for LLM-Based AI Agents.pdf` (linked in Notion — need to get a copy).

---

## Milestone roadmap (8 months total, 2 months each)

| M | Goal | Capabilities | Key deliverables |
|---|---|---|---|
| **M0** | Detect AI-related identities (apps + NHIs) | Pre-M1 "AI Assets" | Flag apps/NHIs as AI; dashboard widgets; filter by "AI Asset:Yes" across Discovery / Reports / UARs / Workflows |
| **M1** | "I can see my agents" | #1, #2, #10 basic | Agent model + graph mapping; Tool model; connect 2–4 platforms; agent inventory UI with owners; basic activity dashboards |
| **M2** | "I know what my agents can access" | #3, #4 | Credential discovery; NHI → agent mapping; OAuth scope viz; delegation chain viz; authz model detection |
| **M3** | "I can control my agents" | #5, #6 | JIT access workflows; approval chains; resource policies; MCP access controls; UARs for agents |
| **M4** | "I can manage lifecycle + detect threats" | #7, #9, #10 advanced, #8 | Credential rotation/revocation; A2A discovery; trust boundaries; behavioral analytics; shadow agent detection; risk scoring |

## M1 target platforms (2–4 of these)

Tier-2 "configured agents" only:
- OpenAI ChatGPT Enterprise (GPTs) — **P0**
- Microsoft Copilot Studio — **P0**
- Anthropic
- Cursor AI
- N8N
- ServiceNow AI Control Tower (AICT)

## M2 platforms (additive)

- Cursor AI
- Vertex AI
- Entra (Microsoft copilot agents) — "ask MSFT team"
- Gemini
- Bedrock

---

## Hero use case (M1 demo target)

**"The CISO's Blind Spot" — Maria, CISO.**

Before: knows agents exist (devs mention ChatGPT, Bedrock, N8N), can't inventory them.

After M1: opens Linx → Agent Inventory →
- 23 agents discovered across ChatGPT / Anthropic / Cursor / Copilot / N8N / Bedrock / Vertex
- Drill into "Sales Automation Agent": owner John Doe; users Jessy + Jessica; platform N8N; connected to Salesforce + Google Sheets + Gmail; last active 2h ago; model Claude Sonnet 4.5
- Insights: 7 unowned agents, 4 idle 60+ days, 3 connect to prod DBs

10-minute journey from blind → informed → prioritized.

## Leading MVP user story

"All users are using LLM. Linx can identify when such tools are connected to your organization resources. Linx can tell when users gain access to resources that they should not get via LLM tools."

## User flows specified

1. Discovery → Agents (list, filter, click-through)
2. Agent page: Info / Tools / Resources / Shared-with accounts / AI Agents / Access graph / Issues tabs
3. Change owner (edit button in Info tab)

## User scenarios (personas defined)

Discovery, Relationship & Credential Mapping, Directory, Permission Tracing, Reporting, Risk Detection, Lifecycle Management, Ownership, Incident Response, CISO Dashboard.

---

## Competitors named in the ticket

| Competitor | Angle | URL |
|---|---|---|
| Astrix | AI Agent Control Plane | astrix.security/learn/blog/meet-ai-agent-control-plane |
| Oasis | AI solution page | oasis.security/solutions/ai |
| ConductorOne | NHI Governance | conductorone.com/solutions/nhi-governance |
| Natoma | Access control + policies | (no URL given) |
| Clutch | Shadow AI discovery | clutch.security/use-cases/shadow-ai-discovery |

**Not in ticket but in our competitive-matrix to check:** Zenity, Noma, Prompt Security, Token Security, Lasso, Credal, Aembit, SailPoint/CyberArk AI extensions.

---

## Open items flagged in the ticket

- Built-in issues for AI agents (Mor to list)
- Accounts ↔ agents relationship — TBD
- Risks + mitigations — blank
- Competition section incomplete
- Definition of done — only "For example SLAs" placeholder

## Figmas referenced (can't fetch from this side)

- Discover / Agents list: `figma.com/design/afuWsXgrVekMgGtsKKh7WE/Discover?node-id=6285-8410`
- Dashboard widgets: `figma.com/design/afuWsXgrVekMgGtsKKh7WE/Discover?node-id=6739-187465`

## Related resources

- Customers VS Connector prioritization (Sep 17, 2025) — Notion
- "IAM for LLM-Based AI Agents.pdf" — theoretical backbone for the 10 capabilities
- Linear ticket [AI-331](https://linear.app/linxsecurity/issue/AI-331) — add agent collections to the AI Assistant

---

# Parent concept doc — "Agentic AI Identity (WIP)" Notion

**Source:** `Agentic-AI-Identity-WIP-256259f6555980cd88c6f828b34efaf3`. This is the concept/framing doc that sits upstream of the Linear implementation epic.

## Why traditional IAM fails (framing)

- Static identity models break on ephemeral agents (appear/disappear in seconds)
- Tools assume stable long-lived accounts; agents are task-specific + context-based
- Human-in-loop approvals can't match machine speed
- RBAC doesn't scale to thousands of dynamic agents

## Agent types taxonomy (5 types, ordered by discoverability)

| Type | How they get access | Example | Detection path | Linear research ticket |
|---|---|---|---|---|
| Managed by Org (IDP / Connectors) | IDP service provider; inherit user permissions | ChatGPT Enterprise | IDP scan | [PRD-8564](https://linear.app/linxsecurity/issue/PRD-8564) |
| Agents used by managed Apps | Through native integration w/ 3p apps | GitHub, Salesforce | Connector scan | [PRD-8565](https://linear.app/linxsecurity/issue/PRD-8565) |
| 3p Agents | Get permissions from managed apps in unmanaged process | (custom OAuth apps) | Credential scan in connectors | [PRD-8566](https://linear.app/linxsecurity/issue/PRD-8566), [PRD-8563](https://linear.app/linxsecurity/issue/PRD-8563) |
| Shadow Agents | Not managed by org; SaaS + org account; **no access to org data** per the doc | Personal Claude integration | ??? (unclear) | — |
| On-prem agents | (e.g., dashboard BE apps) | — | — | — |

**Note:** 4 research tickets already exist in Linear (PRD-8563/64/65/66). Someone may have started this work already. Check before duplicating.

## Use cases by scope

- **Company AI Agents** — embedded in core business systems (Salesforce lead qualifier, GitHub compliance bot). Risk: over-privileged agents break multi-tool workflows.
- **Employee AI Agents** — act on behalf of individuals, span many apps (email drafting, reports, data retrieval). Risk: inherit full user permissions, need "sub-user" model.
- **Agent-to-Agent** — agents coordinating (Finance validates with CRM before transaction). Risk: audit gap, trust propagation.

## Authentication methods matrix

| Auth method / NHI type | AI categories using it | Example uses |
|---|---|---|
| OAuth apps / tokens | Chatbots, Enterprise AI | Chatbot access to support tools; enterprise AI ↔ corporate auth |
| API keys | Chatbots, RAG, Cloud Models, API-to-LLM, Enterprise AI | Programmatic access to LLMs, DBs, managed model services |
| Webhooks | Chatbot AI | Trigger workflows between AI ↔ apps |
| DB service accounts | RAG | Document retrieval pipelines |
| IAM roles / managed identities | Cloud models (SageMaker, Vertex) | Scoped access to deploy/manage cloud AI |
| User service accounts | Browser / computer agents | Machine-level actions on behalf of users |
| Session tokens | Browser / computer agents | Maintain authenticated sessions |
| Local service account passwords | Computer agents | Machine-level install/execute |

## MCP authentication (the emerging standard to track)

- **OAuth 2.1** with PKCE as primary protocol
- **API keys** at the MCP server boundary
- **HTTPS everywhere** + **JSON-RPC 2.0** over HTTP/SSE (remote) or STDIO (local)
- Session-bound tokens after OAuth exchange; refresh mechanics
- MCP authz is **optional** today — no enforced standard. Governance gap.

## How Linx can detect agents (detection vectors)

1. IDP
2. Connectors
3. Tools management experience
4. **JAMF** (device mgmt — implies browser/computer agents in scope eventually)

## Core capabilities (concept doc's own framing, differs slightly from the 10)

1. Discovery + explainability
2. Represent Shadow AI applications
3. Governance: provision + deprovision access and tools
4. Contextual insight per AI asset
5. Issues + reports for AI assets

## Open questions listed in the concept doc

- Continuous verification vs. periodic reviews — how?
- Task-scoped authz vs. RBAC — best practice?
- Balance autonomous approval with security controls?
- Standards for agent provenance + lineage?
- Governance for ephemeral identities?
- How is this different from bots? (ticket says: *check Astrix*)
- Detecting agent-to-agent + agent-to-bot comm via API tokens/OAuth + their permissions?
- Do we care whether data is used for training?
- Should we represent agent tools in UI?
- Is "GPT auth with GCP" credential sharing?

## Competitor list (concept doc, broader than the implementation ticket)

| Competitor | Link |
|---|---|
| Astrix | astrix.security/use-cases/agentic-ai/ |
| **CyberArk** | cyberark.com/solutions/secure-agentic-ai/ + AWS Marketplace AI Agents category |
| Clutch | clutch.security/use-cases/shadow-ai-discovery |
| Oasis | oasis.security/solutions/ai |
| **CrowdStrike** | "secures AI agents across SaaS stack" (press release) |
| **SailPoint** | BrightTALK webcast (link in doc) |

**New vs. implementation-ticket list:** CyberArk, CrowdStrike, SailPoint enter here. Missing from concept doc but present in ticket: ConductorOne, Natoma.

## External references worth pulling

- Gartner: "How to Securely Delegate..." (doc ID 833731)
- Gartner: "IAM for LLM-Based AI Agents" (the capabilities framework source)
- Blog: unmitigatedrisk.com/?p=1075 — argues for ephemeral cryptographically attested identities (TPM, SGX, SPIFFE) as the right primitive. Different school of thought from the node-primary model.

---

## Tensions I see between the two docs (for Omri to resolve)

1. **Shadow agents: in or out?** Implementation ticket non-goal = "3rd-party internal agents as black box." Concept doc lists Shadow Agents as a first-class type + user stories include "reduce shadow agent risk." Either the non-goal is narrower than it reads, or the concept doc over-scopes. Clutch's entire positioning lives in this gap.
2. **Ephemeral headline vs. persistent model.** Concept doc's lead differentiator = agents spin up/down in seconds. Implementation models Agent as a persistent graph node with editable owner. Either the model needs session-level records (edges) or the ephemeral framing isn't the actual use case we're solving for.
3. **JAMF + browser/computer agents are in the detection vector list but not the M1 platforms.** Suggests device-layer agents are aspiration, not MVP. Worth naming.
4. **Capability framework #1 vs #2.** Linear has "the 10 capabilities" from the PDF; concept doc lists 5 different capabilities. Overlapping but not isomorphic. Whichever Linx leads with externally has to be one story, not two.
5. **PRD-8563/64/65/66 already exist.** Possibly in-flight research. Need to check status before restarting.

---

# Scope lock (as of 2026-04-20)

## Gap 1 — Agent definition: **Agents only** (challengeable)

Scope is tier-2 configured agents (ChatGPT Enterprise GPTs, Copilot Studio, Cursor, N8N, ServiceNow AICT). Not tier-1 embedded copilots. Not tier-3 shadow. Room to challenge later with evidence.

## Gap 4 — Identity model / governance depth: **IGA scope = visibility + JIT**

Two pillars:
1. **Visibility** — discover, inventory, attribute ownership, graph the access
2. **JIT (Just-in-Time access)** — govern provisioning + deprovisioning

Not in MVP scope:
- Real-time behavioral anomaly detection (M4)
- Agent-to-agent trust enforcement (M4)
- Credential issuance / rotation lifecycle (M4)
- Edge-level action logging as primary model (though audit logs will feed visibility)

**Net:** M1 (discovery) + approval-chain slice of M3 (JIT). Clean IGA story, not the full 10-capability buildout.

## Stakeholder signals

- **Niv (Co-Founder & CPO) is personally engaged** — dropped Duo + Ping Identity references in `#governance-of-agentic-ai` Slack channel. CPO-visible initiative.
- **Mor Shabi** is the active PM — sharing docs, Hebrew Slack messages ("I talked to Yoad.. it doesn't exist right now" — likely re: 1Password integration for agent cred fetch).
- **Yoad** likely holds the technical gap answer on whether current credential pipelines can capture agent creds.

---

# Research sources — annotated bibliography

**Primary Slack channel:** `#governance-of-agentic-ai` (Linx internal). Ask PMs Agent or Linx Claude to scrape relevant context.

## Tier 1 — read first

| Source | Why | Link |
|---|---|---|
| Astrix × Bayer: "Touchpoints Between AI and NHIs" | Mor flagged "a great document." Real customer (Bayer) co-authored. Direct to the NHI ↔ agent overlap Linx wants to own. | astrix.security/learn/blog/astrix-research-presents-touchpoints-between-ai-and-non-human-identities |
| ConductorOne: "Evolution of Identity — Agentic AI era 2025+" | Mor: "they frame the problem world very nicely." Use for positioning language. | conductorone.com/guides/the-evolution-of-identity/#the-agentic-ai-era-2025-and-beyond |
| Gartner: "How to Securely Delegate Access From Humans to AI Agents" (doc 833731) | Analyst framing. Already referenced in concept doc. Ask Omri for a copy. | (Gartner portal) |
| IAM for LLM-Based AI Agents (PDF) | Source of the 10-capability framework Linx is using. Must read for internal alignment. | Linked in concept doc — need copy |

## Tier 2 — competitor / vendor positioning

| Source | Why | Link |
|---|---|---|
| Astrix: AI Agent Discovery & Governance use case | Core competitor positioning page | astrix.security/use-cases/ai-agent-discovery-and-governance/ |
| Astrix: "The MCP Shift Part 3 — The Future" | Forward-looking; MCP gap Linx also sees | astrix.security/learn/blog/the-mcp-shift-part-3-the-future/ |
| Oasis: AI solutions | Secondary competitor | oasis.security/solutions/ai |
| Ping Identity: Agentic AI Identity | Identity-giant framing; shared by Niv | pingidentity.com/en/solution/agentic-ai-identity.html |
| Duo: 5 Ways to Defend Against AI Identity Threats | Shared by Niv; likely incumbent framing for CPO-level thinking | duo.com/blog/five-ways-to-defend-against-ai-powered-identity-threats-with-duo |

## Tier 3 — technical / protocol

| Source | Why | Link |
|---|---|---|
| YouTube: Jared Hanson on OAuth for agents (Keycard, Passport.js) | Authoritative technical overview of OAuth ↔ agents pattern | youtube.com/watch?v=blmAkayzE8M |
| 1Password blog: Service accounts + SDKs for agentic AI | Practical: how creds flow. Mor's read: could Linx fetch these creds via existing pipeline? Identify agents via 1Password logs? | blog.1password.com/service-accounts-sdks-agentic-ai |
| 1Password demo (Reprise) | Interactive demo of the flow above | app.getreprise.com/launch/3nvY4K6 |
| unmitigatedrisk.com — ephemeral attested identities | Counter-school: argues identity should be ephemeral + crypto-attested (TPM/SGX/SPIFFE), not node-in-graph | unmitigatedrisk.com/?p=1075 |

## Gap in current Linx capability (Mor + Yoad, Apr 20)

Mor explored whether Linx could fetch 1Password-stored agent creds the same way existing connectors fetch creds. Answer from Yoad: **doesn't exist currently.** Concrete evidence for the "connectors need work" problem statement.

---

## What's open (for Omri's research to close)

1. **Tier-1 ambiguity.** Target list = tier-2 configured agents. Does "AI/LLM tools connected to your apps" include embedded copilots (Copilot-in-Word, Gemini-in-Gmail)? If yes, node-primary model can't capture them cleanly. If no, say so in customer-facing messaging before a buyer assumes otherwise.
2. **Customer pull validation.** Maria the CISO is a persona, not a sourced customer. Before June: one named Linx customer saying "we'd adopt this tomorrow." Otherwise vendor-push, not customer-pull.
3. **June → which milestone?** 8-month roadmap means June = M0 or early M1. Need clarity.
4. **Shadow AI gap.** Non-goal ("black box 3rd-party internal agents") = exactly what Clutch's wedge is. Competitive framing risk.
5. **10 capabilities coverage ≠ depth.** Shallow coverage across 10 capabilities is weaker than deep coverage on 3 that actually block a buyer. Which 3 is Linx betting on?
6. **Mor / Omri ownership split.** Who owns what piece of this epic — spec vs. research vs. competitive vs. delivery?
