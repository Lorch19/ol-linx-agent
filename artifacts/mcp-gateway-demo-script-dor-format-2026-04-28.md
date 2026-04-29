# MCP Gateway Demo — Identiverse 2026 (June 15)

v0.6 — 2026-04-28. 3-min booth loop. Validated via Linx Claude.

## Flow

| # | Where | Action |
|---|---|---|
| 1 | Agent Inventory | Maria opens inventory. Two agents both named "Sales Pipeline Bot" — Sarah (PM) with `pm-agents-readonly`, Scott (VP Sales) with `vp-sales-agents-write`. |
| 2 | Live Activity | Sarah's bot calls `update_opportunity` → **DENIED**, *policy: pm-agents-readonly*. |
| 3 | Live Activity (narrated) | *"Sarah herself in SFDC can do this. Same person, different actor, different outcome."* No row. |
| 4 | Live Activity | Scott's bot — same name, different owner — calls `update_opportunity` → **ALLOWED**, *policy: vp-sales-agents-write*. |
| 5 | Audit Event Detail | Drill into Sarah's DENIED → chain: human → agent → tool → policy → outcome. |
| 6 | Agent Inventory | Recap shot. *"Every MCP call captured. Every action attributable. Every policy auditable."* Loop. |

## Cast

- **Sarah Cohen** — PM. Owns a Sales Pipeline Bot. Full SFDC role; agent read-only.
- **Scott Davis** — VP Sales. Owns a Sales Pipeline Bot. Agent write.
- **Maria** — Security Admin operating the demo.

## Screens

| Screen | Used | Status |
|---|---|---|
| Live Activity / Gateway View | 2, 4 | **MISSING.** Net-new build. Load-bearing. |
| Audit Event Detail (chain viz) | 5 | **MISSING.** Extend log detail. |
| Agent Inventory | 1, 6 | **PARTIAL.** Add: platform badge, policy column, last-activity. |

**Off-stage MVP (build, don't show):** Agent Registry · Access Profiles editor · Integrations tab.
**Cut:** Issues page · Maria review/approve.

## Open for Dor

1. Confirm w/ Mor: do current Access Profiles support agent-scoped policies, or user-IGA only?
2. Captions on-screen or operator-only?

*Stage 3 narrated: SFDC human-activity ingestion (SEC-200) blocked until Aug 2026. Removed from prereqs.*
