# MCP Gateway Demo — Identiverse 2026 (June 15)

v0.1 draft for Dor — 2026-04-28. Two flow options below.

Locked: JIT + Access Profiles for agents + employee-agent (1:1 user binding) + tool-level granularity (the unit is the MCP tool, not the SaaS app).

---

## Flow A — Reactive (live JIT exception)

*Story: an agent hits a wall, admin resolves on stage.*

| # | Stage | Beat |
|---|---|---|
| 1 | Dashboard | 1 JIT request pending. |
| 2 | JIT Request | Sarah's agent needs `update_opportunity`; her agent profile only has `read_opportunity`. Show user→agent→tool chain. |
| 3 | Approve | Maria scopes: this tool, this user, 1 hour. Approve. |
| 4 | Confirm | Approval pinned to agent profile + audit. |

---

## Flow B — Proactive (Access Profile setup, gateway enforces silently)

*Story: admin sets the policy, gateway does the work, audit catches what's left.*

| # | Stage | Beat |
|---|---|---|
| 1 | Sarah's Agent | New agent registered for Sarah (1:1). Open its Access Profile — empty. |
| 2 | Tool Catalog | Salesforce MCP exposes 12 tools. Maria grants `read_opportunity`, `read_account`. Declines write tools. Save. |
| 3 | Live | Agent runs: read calls flow green. One write attempt → denied at the gateway, no human needed. |
| 4 | Audit | Maria sees the denial, decides profile stays as-is. |

---

## Which to pick

- **A** is dramatic, single live moment, fragile if the request fails on stage.
- **B** is calmer, shows the steady state ("this is how every day works"), no live approval risk.

Open for Dor: A, B, or A→B sequenced (start reactive, end proactive)?
