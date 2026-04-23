# AI Governance Epic — Scope & Status

**Source:** Linear `governance-for-agentic-ai-07e946f01264` + Notion. Original framing as of 2026-04-20. **Current-state delta as of 2026-04-23 (see below).**
**Owner:** Mor Shabi (originating PM). Omri owns research + competitor workstream. Split TBD.
**Linear project lead:** Ben Bakhar (Experience). Teams: Experience, AI, Application, Analytics, Connectors, Product, UX/UI Design, Tech Leads.
**Deep reference:** `knowledge/ai-governance-deep.md` (10 capabilities, agent types, identity model)

---

## ⚠️ Current state (2026-04-23) — reality check + pivot

The Mar 3 Notion spec and earlier versions of this file frame things that have since shifted. Read this section before trusting the roadmap/platforms/scope sections below.

### What actually shipped in M1 (via Linear verification)

| Claim in this doc | Reality |
|---|---|
| M1 P0 platforms = ChatGPT Enterprise + Microsoft Copilot Studio | **Wrong.** ChatGPT Enterprise (CON-1733) still in Backlog. Copilot Studio direct connector (CON-1972) **Canceled** Jan 2026. |
| M1 shipped "2–4 agentic platforms" | **Correct — but different platforms.** Shipped: **Gemini, Vertex AI, Bedrock, n8n**. |
| M1 visibility layer live | **Confirmed.** Agent graph model, Discovery > Agents UI, agent entity page, built-in issues (AGENT_EXCESSIVE_PERMISSIONS, AGENT_OWNER_OFFBOARDED). Real data, not UI scaffolding. |

### M2 / M3 drift
- **M2 Access Intelligence:** 74% complete, 4 weeks overdue (target was Feb 27). The unfinished 26% is exactly where the generic-IAM-API approach broke.
- **M3 Governance & Control:** silently narrowed in Linear. **Struck through in the milestone description**: MCP server access controls, approval chains for sensitive ops, resource-level policies, least-privilege analysis, NHI remediation. **Remaining:** UARs for agents + JIT provisioning. Notion still shows the full M3 scope — docs drifted.

### The architectural pivot: MCP Gateway

Linx attempted to govern agents using the generic IAM APIs that power human + NHI governance. **Confirmed non-viable** — agent access flows (ephemeral, intent-driven, multi-hop through tools/MCP) don't fit the API surface.

**Pivot:** govern agents at the **MCP protocol layer** via an MCP Gateway, not at the IAM-API layer.
- **Status:** concept / whiteboard. No design doc yet.
- **Leaders:** Sarit (CTO) + Amir Ben Ami (Head of AI).
- **Already listed** as a Cycle 79 AI priority in `linx-product.md`.
- **What survives:** M1 visibility stack (fully valid). Parts of M2 (credential discovery, delegation mapping) likely feed the Gateway as inputs. Omri's assessment (2026-04-23): "not every part of the old spec is invalidated — be cautious about what you throw out."
- **What to figure out:** what M2 work to finish vs. pause, minimum viable Gateway surface, June 15 Identiverse demo scope.

### Sunday 2026-04-27 pre-kickoff
Eng pre-kickoff session with broader team. Not an announcement — everyone knows at some level. Deck is a working-session framing device. Plan: `~/.claude/plans/we-have-a-kick-humming-bumblebee.md`.

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
