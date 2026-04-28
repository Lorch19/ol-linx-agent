# MCP Gateway Demo — Identiverse 2026 (June 15)

v0.5 — 2026-04-28. MVP screen triage locked. Format: Dor's Stage/Where/Story-Actions table.
3-min booth loop · hybrid auto-running w/ operator interjection · loops continuously.

## Key Takeaways

- The MCP Gateway turns every agent action into a chain with a **human at one end, a tool call at the other, and a policy in between** — the auditable answer to *"who is responsible?"*
- **Same agent class, different owner → different effective permissions.** Policy is parameterized by who's driving the agent.
- **Agents live under tighter rules than the humans who delegate to them.** SoD for AI — the principle every audit framework will require.

## Demo Flow

| Stage | Where | Story / Actions |
| --- | --- | --- |
| 1 | Agent Registry | Maria opens the registry. Each agent row: **owner · platform badge · policy · last activity**. Drill into "Sales Pipeline Bot" — two instances visible. Sarah Cohen (PM): `pm-agents-readonly`. Scott Davis (VP Sales): `vp-sales-agents-write`. *[ Establishes the cast and the policy contract before any action plays out ]* |
| 2 | Linx — Live Activity | Sarah's "Sales Pipeline Bot" calls `update_opportunity` on Salesforce via the gateway. Row appears **red — DENIED**. Inline reason: *policy: pm-agents-readonly*. *[ Color-coded MCP call stream; policy reason visible inline ]* |
| 3 | Linx — Live Activity | Sarah herself accesses Salesforce directly. Same `update_opportunity`, ingested via the SFDC connector. Row appears **green — ALLOWED** via her SFDC role. *Same person. Same action. Different actor — different outcome.* *[ Contrast is visible side-by-side with Stage 2 ]* |
| 4 | Linx — Live Activity | Scott's "Sales Pipeline Bot" — same agent class — calls `update_opportunity`. Row appears **green — ALLOWED**. Reason: *policy: vp-sales-agents-write*. Three rows now side-by-side on the same action. *[ Same agent, same call, different human → different outcome ]* |
| 5 | Audit Event Detail | Drill into Sarah's DENIED event. The full chain renders inline: **human (Sarah Cohen) → agent (Sales Pipeline Bot) → tool (`update_opportunity`) → policy (`pm-agents-readonly`) → outcome (DENIED)**. *[ One click from any action all the way back to the human responsible ]* |
| 6 | Agent Registry | Brief return to the registry — inventory shot with ≥5 agents, 2 named policies, owners visible. Close: *"Every MCP call captured. Every action attributable. Every policy auditable."* Loop resets to Stage 1. |

## Cast

- **Sarah Cohen** — PM. Owner of one Sales Pipeline Bot. Full SFDC role personally; agent capped at read-only.
- **Scott Davis** — VP Sales. Owner of one Sales Pipeline Bot (same class). Agent inherits write policy.
- **Maria** — security admin operating the demo. 5+ background agents in inventory for richness.

## On-Stage Screens (eng priority)

| Priority | Screen | Used in | Build status |
|---|---|---|---|
| P0 — build first | **Live Activity / Gateway View** — color-coded MCP call stream, reason inline | Stages 2–4 | **New build** or major extend of Logs. Load-bearing. Without this, demo has no spine. |
| P0 — build first | **Audit Event Detail** — chain rendering (human → agent → tool → policy → outcome) | Stage 5 | **Extend** existing log-row drilldown. Chain viz is the new piece. |
| P1 — validate first | **Agent Registry** — agent · owner · policy · last activity columns | Stages 1, 6 | Likely exists (M1 Inventory > Agents). Validate: does policy-attached column exist? |

## Off-Stage (build, don't show live)

- **Access Profiles editor** — where `pm-agents-readonly` and `vp-sales-agents-write` are defined. Needed for setup; not on screen during the loop.
- **Integration tab** — shows MCP servers and their specific tools. Needed for pre-demo configuration. Not on screen during the loop.

## Cut

- **Issues / Alerts page** — removed. No live JIT on stage; drama is the deny + contrast, not an alert firing.

## Build Prereqs

1. **Salesforce ingestion of human user activity** — Stage 3 requires SFDC connector to ingest Sarah's direct action as a rendered row. If not supported, Stage 3 falls back to operator narration.
2. **Two pre-registered agents** — same class (Sales Pipeline Bot), different owners (Sarah / Scott).
3. **Two pre-defined policies** — `pm-agents-readonly`, `vp-sales-agents-write`.
4. **OAuth caller → user mapping in the gateway** — must identify the human behind each agent call (RFC 8693 token exchange). Validated by Karan Sampath (Anthropic) — core gateway primitive.

## Open Items

1. Validate on-stage screens against actual Linx product state → use companion Claude prompt (`artifacts/linx-claude-validation-prompt-2026-04-28.md`).
2. Confirm Salesforce human-activity ingestion path (build prereq #1).
3. Caption rendering — on-screen text overlays vs operator narration?
4. Identiverse format confirmation (booth-loop assumption).

---

*v0.5 MVP triage: 3 on-stage screens (Live Activity, Audit Event Detail, Agent Registry). Issues page cut. Access Profiles + Integration = off-stage. Sources: `knowledge/anthropic-mcp-gateway-karan-sampath.md`, `knowledge/ai-governance-core.md`, `artifacts/mcp-gateway-demo-script-2026-04-27.md` v0.3.*
