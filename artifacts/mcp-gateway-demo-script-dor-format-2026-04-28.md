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
| 1 | Linx — Live Activity | Sarah Cohen's "Sales Pipeline Bot" (n8n) calls `update_opportunity` on Salesforce via the gateway. Row appears in red — **DENIED**. Inline reason: *policy: pm-agents-readonly*. *[ Should show a live MCP call stream with color-coded outcomes and the policy reason inline ]* |
| 2 | Linx — Live Activity | Sarah herself accesses Salesforce directly. The same `update_opportunity` action is ingested through Linx's SFDC connector. Row appears in green — **ALLOWED** via her direct SFDC role. *Same person. Same action. Different actor — different outcome.* *[ Should make the contrast visible side-by-side with Stage 1 ]* |
| 3 | Linx — Live Activity | Scott Davis (VP Sales) — owner of *the same* "Sales Pipeline Bot" class — calls `update_opportunity`. Row appears in green — **ALLOWED**. Reason: *policy: vp-sales-agents-write*. Three rows now sit side-by-side on the same action. *[ Should reinforce: same agent, same call, different human → different outcome ]* |
| 4 | Maria's Dashboard | Switch to the security admin's view. Inventory shows agents under governance and the policies in effect. *[ Should show a rich inventory panel — at least 5 agents, 2 named policies, owners visible ]* |
| 5 | Audit Event Detail | Drill into Sarah's DENIED event. The full chain renders inline: **human (Sarah Cohen) → agent (Sales Pipeline Bot) → tool (`update_opportunity`) → policy (`pm-agents-readonly`) → outcome (DENIED)**. *[ Should show a single-click trace from any action all the way back to the human responsible ]* |
| 6 | Maria's Dashboard | Close: *"Every MCP call captured. Every action attributable. Every policy auditable."* Loop resets to Stage 1. *[ Should reset to the start state cleanly on each loop ]* |

## Cast

- **Sarah Cohen** — PM. Owner of one Sales Pipeline Bot.
- **Scott Davis** — VP Sales. Owner of one Sales Pipeline Bot (same class).
- **Maria** — security admin. Visible only in Stages 4–6.
- 5+ background agents in the inventory shot for richness.

## Build Notes

| # | Screen | Status (validate via Linx Claude w/ MCP) |
|---|---|---|
| 1 | Live Activity / Gateway View | New build or major extend of Logs view. Load-bearing. |
| 2 | Audit Event Detail (with chain) | Extend existing log-row drilldown — chain visualization is the new piece. |
| 3 | Inventory > Agents | Likely exists (M1). |
| 4 | Policy List | New build (Mor's Access Profiles P0). |

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
