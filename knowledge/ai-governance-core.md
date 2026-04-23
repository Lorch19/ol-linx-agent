# AI Governance Epic — Scope & Status

**Source:** Linear `governance-for-agentic-ai-07e946f01264` + Notion. As of 2026-04-20.
**Owner:** Mor Shabi (originating PM). Omri owns research + competitor workstream. Split TBD.
**Deep reference:** `knowledge/ai-governance-deep.md` (10 capabilities, agent types, identity model)

---

## Goal

Bring ISPM + IGA to Agentic AI Identities on the Linx platform.

**MVP scope:** Visibility (discover, inventory, attribute ownership) + JIT (provision/deprovision). NOT: behavioral analytics, A2A enforcement, credential rotation (all M4).

## The 3 buyer questions

1. Where are AI/LLM tools connected to my apps? (visibility)
2. How do I control agent access? (governance)
3. Who is accountable when an agent acts? (audit)

## Milestone roadmap (8 months, 2 months each)

| M | Goal | What ships |
|---|---|---|
| **M0** | Detect AI-related identities | "AI Assets" flag; dashboard widgets; filters across Discovery/Reports/UARs |
| **M1** | "I can see my agents" | Agent model + graph; Tool model; 2-4 platforms; inventory UI; dashboards |
| **M2** | "I know what my agents can access" | Credential discovery; NHI→agent map; OAuth scope viz; delegation chain |
| **M3** | "I can control my agents" | JIT workflows; approval chains; resource policies; MCP access controls; UARs |
| **M4** | "I can manage lifecycle + detect threats" | Rotation/revocation; A2A; behavioral analytics; shadow agent; risk scoring |

## M1 target platforms

- OpenAI ChatGPT Enterprise (GPTs) — **P0**
- Microsoft Copilot Studio — **P0**
- Anthropic, Cursor AI, N8N, ServiceNow AICT

## Hero use case (M1 demo target)

**"The CISO's Blind Spot" — Maria, CISO.** Opens Linx → Agent Inventory → 23 agents across ChatGPT/Anthropic/Cursor/Copilot/N8N/Bedrock/Vertex. Drills into "Sales Automation Agent": owner, users, platform, connected apps, model. Insights: 7 unowned, 4 idle 60+ days, 3 on prod DBs. 10-min journey: blind → informed → prioritized.

## Tensions (Omri's read, 2026-04-20)

1. **Shadow agents: in or out?** Non-goal says "black box." Concept doc lists Shadow Agents as first-class. Clutch's entire wedge lives here.
2. **Ephemeral headline vs. persistent node model.** "Agents spin up/down in seconds" but implementation models Agent as persistent graph node. Either add session-level edge records or retire the framing.
3. **JAMF/browser agents in detection vectors but not M1 platforms.** Device-layer = aspiration, not MVP.
4. **10 capabilities (PDF) ≠ 5 capabilities (concept doc).** External story must pick one.
5. **Nov 5 "no dedicated UI" vs. M1 hero flow.** Mor's position contradicts the Maria CISO journey (requires dedicated Agent Inventory surface).

## Scope lock (as of 2026-04-20)

- **Agents only** (tier-2 configured): ChatGPT Enterprise GPTs, Copilot Studio, Cursor, N8N, ServiceNow AICT.
- **IGA scope = visibility + JIT.** M4 items explicitly deferred.
- **Niv is CPO-engaged.** Mor Shabi = active PM. Yoad = technical gate on credential pipelines.

## Analyst-validated frameworks (Software Analyst Cyber Research — 2026-04-23)

**Source:** softwareanalyst.substack.com — 5 relevant articles extracted by agent. Niv-sourced.

**4-phase governance model** (AIAP framework — "new SSO for agents"):
1. Discover/inventory agents
2. Define allowed actions deterministically
3. Provision access ephemerally
4. Enforce continuous revocation

Maps directly to Linx's M0–M3 roadmap. Use as external validation in customer and analyst conversations.

**144:1 NHI-to-human ratio** — credible enterprise benchmark (sourced from SACR analysis). A single human operator can spin up multiple agents, each with distinct identities. Manual oversight structurally impossible at this scale. Use in CISO conversations to quantify why human-centric governance breaks.

**Intent-aware access** — analyst frames this as the emerging differentiator beyond inventory/visibility. Identity + behavior + context + data sensitivity evaluated continuously. LLMs used to model and drift-detect behavioral intent over time. This is M4 territory for Linx — but worth naming as the vision horizon.

**JIT-TRUST** — analyst framing as Zero Trust successor: Zero Trust answered "who can access what"; JIT-TRUST answers "how long, under what conditions, for what exact purpose." Ephemeral Access Grants, narrowly scoped per task. Requires cryptographically strong identity fabric. Maps to Linx's JIT access pillar.

**ISPM vs. periodic IGA** — stolen credentials = 31% of breaches (Verizon 2025 DBIR). ISPM surfaces misconfigurations, stale accounts, insecure OAuth grants, and toxic permission combos in real-time — IGA periodic cert cycles miss these. Analyst validation for Linx's ISPM positioning.

---

## Open items (Omri's research agenda)

1. Tier-1 ambiguity: does scope include embedded copilots (Copilot-in-Word, Gemini-in-Gmail)?
2. Customer pull: Maria is a persona. Need one named customer "we'd adopt this" before June demo.
3. June target: M0 or early M1?
4. Shadow AI gap vs. Clutch: competitive risk of the non-goal framing.
5. Which 3 of the 10 capabilities actually block a buyer?
6. Mor/Omri ownership split: spec vs. research vs. competitive vs. delivery.
