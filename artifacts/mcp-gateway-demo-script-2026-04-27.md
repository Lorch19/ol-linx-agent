# MCP Gateway Demo — Identiverse 2026 (June 15)

v0.2 draft for Dor — 2026-04-28.

## Spine
- 1:1 employee-agent binding · Access Profile per agent · tool-level granularity · JIT.
- **Visual centerpiece — 3 rings:** Sarah's perms · admin ceiling for agents · this agent's profile. Effective = innermost. *Pure-gateway competitors (Strata, Lunar, Ping) can't draw the outer ring — no IGA graph behind them.*

## Two options
Both share stages 1, 2, 4. Differ only on stage 3.

| # | Stage | Beat |
|---|---|---|
| 1 | **Detect** | **Live.** Sarah's agent (Sales Pipeline Bot, n8n) just made its first MCP call. Gateway auto-bound it to Sarah via OAuth caller, applied the default agent profile. Lands on Maria's dashboard in real time. |
| 2 | **Bind** | Agent profile. Three rings — Sarah (SFDC admin) · agent ceiling (no delete) · this profile (read-only). Effective = inner ring. |
| 3 | *(differs — see below)* | |
| 4 | **Trace** | Audit row → one click → chain: Sarah → agent → tool → policy → outcome. *Who is responsible* in one frame. |

### Option A — Deterministic denial *(recommended)*
**Stage 3:** Agent attempts `delete_account`. Denied by policy. Sarah herself could; her agent can't.

### Option B — Live JIT approval
**Stage 3:** Agent requests `update_opportunity` for a real deal. Maria scopes down to `update_amount` only, 1h, this account. Approves on stage. The binding makes the scope-down visible — she's narrowing within the agent ceiling, not opening Sarah's full perms.

## Trade-off

| | A (denial) | B (live JIT) |
|---|---|---|
| Defensibility | Strong — single image | Same image + action |
| Choreography risk | None | Live approval can fail on stage |
| Story | "Linx blocks what Sarah herself could do" | "Linx narrows what Sarah's agent needs, in the moment" |
| Build cost | Lower | + JIT request flow |

## Why this beats prior drafts (A/B from v0.1)
- Prior flows were demoable by every gateway competitor. This one isn't — the outer ring requires the IGA graph.
- The 1:1 binding now does work on stage instead of being narrated.
- Discovery (stage 1) answers the CISO's first question — prior drafts ducked it.
- Lands on audit chain (stage 4) — Gartner SoD-for-agents wedge, unclaimed by Saviynt.

## Opens for Dor
1. Option A or B?
2. Persona — Maria CISO, or operational admin?
3. Identiverse slot — keynote / breakout / booth? Drives 5 / 10 / 20 min cut.
4. Cast — 1 agent on stage (Sarah's), 5+ in inventory shot for scale?
5. Stretch close — *"You have 47 agents under management. Maria approved 3 today. Gateway handled the rest."*
