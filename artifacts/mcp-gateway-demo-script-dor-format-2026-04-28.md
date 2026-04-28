# MCP Gateway Demo — Identiverse 2026 (June 15)

Format adapted from Dor's RSAC2026 Drifter demo skeleton.
3-min booth loop · hybrid auto-running w/ operator interjection · loops continuously.

## Key Takeaways from the Demo

- The MCP Gateway turns every agent action into a chain with a **human at one end, a tool call at the other, and a policy in between** — the auditable answer to *"who is responsible?"*
- **Same agent class, different owner → different effective permissions.** Policy is parameterized by who's driving the agent.
- **Agents live under tighter rules than the humans who delegate to them.** Segregation-of-duties for AI agents — the principle every audit framework will require, no other gateway enforces.
- Every MCP call captured. Every action attributable. Every policy auditable.

## Demo Flow

| Stage | Where | Story / Actions |
| --- | --- | --- |
| 1 | Agent Registry | Maria opens the registry. Each agent appears with its **single human owner** and the **policy attached to it**. Drill into "Sales Pipeline Bot": two instances visible — one owned by **Sarah Cohen (PM)** with `pm-agents-readonly`, one owned by **Scott Davis (VP Sales)** with `vp-sales-agents-write`. *[ Should show a clean registry: agent · owner · platform · policy · last activity. Establishes the cast and the policy contract before any action plays out ]* |
| 2 | Linx — Live Activity | Sarah's "Sales Pipeline Bot" calls `update_opportunity` on Salesforce via the gateway. Row appears in red — **DENIED**. Inline reason: *policy: pm-agents-readonly*. *[ Should show a live MCP call stream with color-coded outcomes and the policy reason inline ]* |
| 3 | Linx — Live Activity | Sarah herself accesses Salesforce directly. The same `update_opportunity` action is ingested via Linx's SFDC connector. Row appears in green — **ALLOWED** via her direct SFDC role. *Same person. Same action. Different actor — different outcome.* *[ Should make the contrast visible side-by-side with Stage 2 ]* |
| 4 | Linx — Live Activity | Scott's "Sales Pipeline Bot" — *the same agent class* — calls `update_opportunity`. Row appears in green — **ALLOWED**. Reason: *policy: vp-sales-agents-write*. Three rows now sit side-by-side on the same action. *[ Should reinforce: same agent, same call, different human → different outcome ]* |
| 5 | Maria's Dashboard | Switch to the security admin's overview. Inventory + policy panel recap with all of today's activity. *[ Should show ≥5 agents, 2 named policies, owners visible ]* |
| 6 | Audit Event Detail | Drill into Sarah's DENIED event. The full chain renders inline: **human (Sarah Cohen) → agent (Sales Pipeline Bot) → tool (`update_opportunity`) → policy (`pm-agents-readonly`) → outcome (DENIED)**. *[ Should show a single-click trace from any action all the way back to the human responsible ]* |
| 7 | Maria's Dashboard | Close: *"Every MCP call captured. Every action attributable. Every policy auditable."* Loop resets to Stage 1. *[ Should reset to the start state cleanly on each loop ]* |

## Cast

- **Sarah Cohen** — PM. Owner of one Sales Pipeline Bot.
- **Scott Davis** — VP Sales. Owner of one Sales Pipeline Bot (same class).
- **Maria** — security admin. Visible only in Stages 4–6.
- 5+ background agents in the inventory shot for richness.

## Build Notes

| # | Screen | Used in | Status (validate via Linx Claude w/ MCP) |
|---|---|---|---|
| 1 | Agent Registry — agent · owner · policy · last activity | Stage 1 | Likely exists (M1 Inventory > Agents). May need policy-attached column. |
| 2 | Live Activity / Gateway View — color-coded MCP call stream | Stages 2–4 | New build or major extend of Logs. Load-bearing. |
| 3 | Maria's Dashboard — inventory + policies panel | Stages 5, 7 | Likely exists; may need policy panel. |
| 4 | Audit Event Detail — full chain rendering | Stage 6 | Extend existing log-row drilldown — chain viz is the new piece. |

**Build prereq:** Salesforce ingestion of *human-user* activity (option a). If not supported, Stage 2 falls back to operator narration of Sarah's direct action rather than a rendered row.

## Deliberate Cuts

- No live JIT approval on stage (drama replaced by deterministic deny + role contrast — removes choreography risk).
- No agent discovery (Dor P0: pre-registered).
- No org-wide ceiling (collapsed into per-agent role policy).
- No JML close (potential v0.4 stretch).

## Open Items

1. Validate screen existence + SFDC user-activity ingestion via Linx Claude.
2. Persona for Stages 4–6 — Maria CISO or operational security admin?
3. Identiverse format confirmation (assuming booth-loop).
4. Caption rendering — on-screen overlays vs operator narration?

---

*Substance carried over from `artifacts/mcp-gateway-demo-script-2026-04-27.md` v0.3. This file is the Dor-format rendition for sharing.*
