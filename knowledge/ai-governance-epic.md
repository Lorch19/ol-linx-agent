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

## What's open (for Omri's research to close)

1. **Tier-1 ambiguity.** Target list = tier-2 configured agents. Does "AI/LLM tools connected to your apps" include embedded copilots (Copilot-in-Word, Gemini-in-Gmail)? If yes, node-primary model can't capture them cleanly. If no, say so in customer-facing messaging before a buyer assumes otherwise.
2. **Customer pull validation.** Maria the CISO is a persona, not a sourced customer. Before June: one named Linx customer saying "we'd adopt this tomorrow." Otherwise vendor-push, not customer-pull.
3. **June → which milestone?** 8-month roadmap means June = M0 or early M1. Need clarity.
4. **Shadow AI gap.** Non-goal ("black box 3rd-party internal agents") = exactly what Clutch's wedge is. Competitive framing risk.
5. **10 capabilities coverage ≠ depth.** Shallow coverage across 10 capabilities is weaker than deep coverage on 3 that actually block a buyer. Which 3 is Linx betting on?
6. **Mor / Omri ownership split.** Who owns what piece of this epic — spec vs. research vs. competitive vs. delivery?
