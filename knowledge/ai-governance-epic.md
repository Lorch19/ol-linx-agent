# AI Governance Epic — Intelligence Summary

**Source:** Linear `governance-for-agentic-ai-07e946f01264` + Notion `Agentic-AI-Identity-WIP`. As of 2026-04-20.
**Full extraction:** git history (commit before 2026-04-23).
**Owner:** Mor Shabi (originating PM). Omri owns research + competitor workstream. Split TBD.

---

## Goal

Bring ISPM + IGA to Agentic AI Identities on the Linx platform.

**MVP scope:** Visibility (discover, inventory, attribute ownership) + JIT (provision/deprovision). NOT: behavioral analytics, A2A enforcement, credential rotation (all M4).

## The 3 buyer questions

1. Where are AI/LLM tools connected to my apps? (visibility)
2. How do I control agent access? (governance)
3. Who is accountable when an agent acts? (audit)

## Agent types (ordered by discoverability)

| Type | Access path | Example | Detection |
|---|---|---|---|
| Managed by Org | IDP service provider | ChatGPT Enterprise | IDP scan |
| Used by managed apps | Native 3p integration | GitHub Copilot, Salesforce | Connector scan |
| 3rd-party agents | OAuth/unmanaged | Custom OAuth apps | Credential scan |
| Shadow agents | Not org-managed; no org data access | Personal Claude | Unclear |
| On-prem agents | Dashboard BE apps | — | — |

*4 research tickets already exist: PRD-8563/64/65/66. Check before duplicating.*

## 10 capabilities (framework from "IAM for LLM-Based AI Agents" PDF)

| # | Capability | What Linx does |
|---|---|---|
| 1 | Registration & identification | Discover agents, expose Agent model |
| 2 | Ownership assignment | Extract owners, map to humans, flag orphans |
| 3 | Authentication | Credential discovery (OAuth/API keys/JWT), NHI mapping |
| 4 | Authorization & delegation | OAuth scopes (requested vs granted), delegation chains, token exchange (RFC 8693), MCP authz |
| 5 | Human oversight & approval | JIT requests, approval chains, UARs for agents |
| 6 | Resource policy enforcement | Resource policies, MCP policies, least privilege, SoD |
| 7 | Credential lifecycle | Issue / rotate / step up/down / revoke |
| 8 | Auditability & logging | Agent action logs, delegation trails |
| 9 | Multi-agent collaboration | A2A/ACP/LMOS protocol detection, mutual auth, trust boundaries |
| 10 | Visibility & observability | Real-time monitoring, baselines, anomaly detection, shadow-agent detection |

## Milestone roadmap (8 months total, 2 months each)

| M | Goal | Capabilities |
|---|---|---|
| **M0** | Detect AI-related identities | Pre-M1 "AI Assets" flag; dashboard widgets; filter across Discovery/Reports/UARs |
| **M1** | "I can see my agents" | #1, #2, #10 basic — Agent model + graph; Tool model; 2-4 platforms; inventory UI; basic dashboards |
| **M2** | "I know what my agents can access" | #3, #4 — Credential discovery; NHI→agent map; OAuth scope viz; delegation chain |
| **M3** | "I can control my agents" | #5, #6 — JIT workflows; approval chains; resource policies; MCP access controls; UARs |
| **M4** | "I can manage lifecycle + detect threats" | #7, #9, #10 advanced, #8 — Rotation/revocation; A2A; behavioral analytics; shadow agent; risk scoring |

## M1 target platforms

- OpenAI ChatGPT Enterprise (GPTs) — **P0**
- Microsoft Copilot Studio — **P0**
- Anthropic, Cursor AI, N8N, ServiceNow AICT

## Hero use case (M1 demo target)

**"The CISO's Blind Spot" — Maria, CISO.** Opens Linx → Agent Inventory → 23 agents across ChatGPT/Anthropic/Cursor/Copilot/N8N/Bedrock/Vertex. Drills into "Sales Automation Agent": owner, users, platform, connected apps, model. Insights: 7 unowned, 4 idle 60+ days, 3 on prod DBs. 10-min journey: blind → informed → prioritized.

## Identity model — DECIDED: node-primary

Agent = first-class graph entity (not an edge). Properties: Platform, Name/Description/Prompt, Owner, Accounts shared with, Agent-to-agent edges, Entitlements, Tools (API+MCP), Capabilities, Model, Timestamps.

**Tool** = first-class entity. Properties: Name, Type (API/MCP), Auth type, Permissions, Target URL, Target app. Linx maps blast radius by enumerating every tool surface, not just aggregate app access.

## Key competitors named in tickets

Astrix, Oasis, ConductorOne, Natoma, Clutch — implementation ticket.
CyberArk, CrowdStrike, SailPoint — concept doc additions.
Full scoring: see `knowledge/competitive-matrix.md`.

---

## Tensions (Omri's read, 2026-04-20)

1. **Shadow agents: in or out?** Non-goal says "black box." Concept doc lists Shadow Agents as first-class type. Clutch's entire wedge lives here. Needs resolution.
2. **Ephemeral headline vs. persistent node model.** Lead differentiator = agents spin up/down in seconds. But implementation models Agent as persistent graph node. Either add session-level edge records or retire the ephemeral framing.
3. **JAMF/browser agents in detection vectors but not M1 platforms.** Device-layer = aspiration, not MVP. Name it explicitly.
4. **10 capabilities (PDF) ≠ 5 capabilities (concept doc).** Two non-isomorphic frameworks. External story must pick one.
5. **Nov 5 "no dedicated UI" vs. M1 hero flow.** Mor's position contradicts the Maria CISO journey (requires Agent Inventory surface). First thing to clarify with Mor.

## Scope lock (as of 2026-04-20)

- **Agents only** (tier-2 configured): ChatGPT Enterprise GPTs, Copilot Studio, Cursor, N8N, ServiceNow AICT.
- **IGA scope = visibility + JIT.** M4 items (behavioral anomaly, A2A, credential rotation) explicitly deferred.
- **Niv is personally engaged** (CPO-visible). Mor Shabi = active PM. Yoad = technical gate on credential pipelines.

## Open items (Omri's research agenda)

1. Tier-1 ambiguity: does scope include embedded copilots (Copilot-in-Word, Gemini-in-Gmail)?
2. Customer pull: Maria is a persona, not a named customer. Need one "we'd adopt this tomorrow" before June.
3. June target milestone: M0 or early M1?
4. Shadow AI gap vs. Clutch: competitive risk of non-goal framing.
5. Which 3 of the 10 capabilities actually block a buyer? Linx's bet needs to be stated.
6. Mor/Omri ownership split: spec vs. research vs. competitive vs. delivery.

## Yoad signal (Apr 20)

Mor explored fetching 1Password-stored agent creds via existing connectors. Yoad: **doesn't exist currently.** Concrete evidence for "connectors need work" problem statement.

## Key research sources

- Astrix × Bayer "Touchpoints Between AI and NHIs" — Mor: "great document"
- ConductorOne "Evolution of Identity — Agentic AI era 2025+" — Mor: "frames the problem beautifully"
- Gartner doc 833731 "How to Securely Delegate Access From Humans to AI Agents" — summary in `references/gartner-833731-summary.md`
- "IAM for LLM-Based AI Agents" PDF — source of the 10-capability framework; need copy
- unmitigatedrisk.com/?p=1075 — counter-school: ephemeral crypto-attested identities (TPM/SGX/SPIFFE)
