# AI Governance / MCP Gateway — Functional Building Blocks

**Purpose:** functional anatomy of the product. Each block is the smallest unit where (a) discovery sequencing, (b) scope decision, (c) eng ownership, (d) demo storyboarding all make sense. Walk through block-by-block to identify gaps.

**Naming convention adopted from Mor (2026-04-26):** Inventory · Govern · Enforce · Audit. Maps to AIAP analyst framework (discover → define → provision → enforce + audit).

**JML and JIT approval are not blocks — they are cross-cutting flows that exercise multiple blocks.**

---

## 1. INVENTORY — find agents, MCPs, credentials

What exists in the customer's stack.

| Sub-block | Status | Notes / questions |
|---|---|---|
| 1.1 Agent discovery (from agent platforms) | partially shipped (M1) | Currently: Gemini, Vertex, Bedrock, n8n. Future scope TBD per pivot. |
| 1.2 MCP / tool discovery | open | Q1 — what tool-level introspection does MCP spec expose? |
| 1.3 Credential mapping | open | Was M2 work, partially deferred. Tied to enforcement (3.2). |

## 2. GOVERN — policies & identity model

What rules apply, and how an agent identity is represented.

| Sub-block | Status | Notes / questions |
|---|---|---|
| 2.1 Identity model (delegated: agent + user) | decided | `agent_perms = user_perms ∩ admin_agent_ceiling` |
| 2.2 Permission rule | decided (Apr 26) | Same as above, confirm Q4 default model |
| 2.3 Policy authoring (admin UI) | open | Surface, scope of policies, who authors |

## 3. ENFORCE — put policy into effect

What physically allows or blocks an agent action.

| Sub-block | Status | Notes / questions |
|---|---|---|
| 3.1 Target SaaS connectors (Slack, SFDC, Datadog) | confirmed in scope (Apr 26) | Per-app integration depth TBD |
| 3.2 Credential issuance (JIT, scoped tokens) | open | Mechanism per connector |
| 3.3 Enforcement point (Q2) | partial answer | Mor: "in the request loop, approve/deny/JIT" — pulls toward Option A inline. Eng to confirm exact arch. |

## 4. AUDIT — see, prove, react

What we can show after the fact and during.

| Sub-block | Status | Notes / questions |
|---|---|---|
| 4.1 Logs (system / governance / access) | confirmed P0 (Sarit Apr 23 + Mor Apr 26) | 3 distinct streams |
| 4.2 Risk / issues engine | partially shipped (M1) | AGENT_OWNER_OFFBOARDED, AGENT_EXCESSIVE_PERMISSIONS exist |
| 4.3 Audit trace (search / replay) | open | Dependency: logs structured for query |
| 4.4 UARs for agents | open (M3 surviving item) | Periodic vs. event-triggered |

---

## Cross-cutting flows (compose blocks)

| Flow | Blocks touched | Use case # | P0? |
|---|---|---|---|
| Agent JML | 1 → 2 → 3 → 4 | UC #2 | Yes (strongest demo seed) |
| JIT approval | 2 → 3 → 4 | UC implicit | TBD on Q2 |
| Toxic combo detection | 1 → 4 | implicit | TBD |
| Policy enforcement at target SaaS | 2 → 3 → 4 | UC #4 | Yes |

---

## How we use this map

- **Discovery sequencing:** walk Inventory → Govern → Enforce → Audit, identify gaps per leaf
- **Scope decisions:** each leaf gets `decided` / `open` / `TBD-eng` / `deferred`
- **Eng ownership:** assign per block (or per sub-block where domains differ)
- **Demo storyboarding:** map hero moment to the blocks it touches; check each block has the dev work to support it
- **Onboarding new joiner:** read top-to-bottom, you're caught up
