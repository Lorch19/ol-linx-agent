# MCP Gateway Demo — Identiverse 2026 (June 15)

v0.3 — 2026-04-28. Detailed flow + screen map. Spine locked w/ Dor.

## Spine
- 3-min booth loop · hybrid auto-running w/ operator interjection.
- All agents pre-registered (Dor P0).
- Policy model: **Owner role + Agent policy per app.** No org ceiling. Same agent class behaves differently when run by a PM vs a VP Sales.
- Centerpiece: **3 audit rows on the same `update_opportunity` action — different actors, different outcomes, every event traceable to a human.** SoD-for-agents in one frame.

```
14:23:01  Sarah Cohen (PM)        via Sales Pipeline Bot   update_opportunity   ✗ DENIED   policy: pm-agents-readonly
14:23:15  Sarah Cohen (PM)        direct (SFDC user)        update_opportunity   ✓ ALLOWED  via SFDC role
14:25:42  Scott Davis (VP Sales)  via Sales Pipeline Bot   update_opportunity   ✓ ALLOWED  policy: vp-sales-agents-write
```

## Cast
- **Sarah Cohen** — PM. Owns one Sales Pipeline Bot.
- **Scott Davis** — VP Sales. Owns one Sales Pipeline Bot (same agent class).
- **Maria** — security admin. Visible only in Beat 3.
- 5+ other agents in inventory (background richness for Beat 3).

## Flow

| # | Beat | ~t | What happens on screen |
|---|---|---|---|
| 1 | **Sarah's contrast** (PM) | 0–75s | Linx Live Activity view. Sarah's agent calls `update_opportunity` → row appears red/DENIED, reason "policy: pm-agents-readonly." 10s later: Sarah herself calls `update_opportunity` directly in SFDC → ingested via connector → row appears green/ALLOWED. **Caption:** *"Same person. Same action. Different actor — different outcome. Linx applies tighter policy to agents than to humans."* |
| 2 | **Scott's contrast** (VP Sales) | 75–135s | Same Live Activity view. Scott's agent calls the *same* `update_opportunity` → green/ALLOWED, reason "policy: vp-sales-agents-write." 3 rows now visible side by side. **Caption:** *"Same agent. Same call. Different human — different outcome. Policy is parameterized by who's behind it."* |
| 3 | **Maria's view** (audit chain) | 135–180s | Switch to Maria's dashboard. Drill into the Sarah-DENIED event. Audit chain renders: human → agent → tool → policy → outcome. Brief inventory glimpse (5+ agents, 2 policies). **Caption:** *"Every MCP call captured. Every action attributable. Every policy auditable. SoD for agents — the audit answer no other gateway can give."* |

## Screens (build map)

| # | Screen | Used in | Status (best guess — validate via Linx Claude) |
|---|---|---|---|
| 1 | **Live Activity / Gateway View** — rows of MCP calls, color-coded outcome, reason inline | Beats 1, 2 | **NEW BUILD or major extend of Logs view.** Load-bearing. |
| 2 | **Audit Event Detail** — single event w/ chain (human → agent → tool → policy → outcome) | Beat 3 | **Extend** existing log-row drilldown. Chain visualization is the new piece. |
| 3 | **Inventory > Agents** — gallery, owners visible | Beat 3 (background) | **Likely exists** (M1 shipped). |
| 4 | **Policy List** — agent policies (`pm-agents-readonly`, `vp-sales-agents-write`) | Beat 3 (background) | **New build** — Mor's Access Profiles P0. |

Cuttable to 3 screens if forced: combine Inventory + Policy List into one "agents-and-policies" sidebar.

## Build prereqs

1. **Salesforce ingestion of human user activity** (option (a) from the (a/b/c) flag) — assumed supported. *If not supported, demo falls back to narrating Sarah's direct call rather than rendering it.* Validate w/ Linx Claude.
2. **Two pre-registered agents** w/ same class, different owners (Sarah PM / Scott VP Sales).
3. **Two pre-defined policies** (`pm-agents-readonly`, `vp-sales-agents-write`).
4. **OAuth caller → user mapping** in the gateway — already core gateway capability per Anthropic Karan reference (`knowledge/anthropic-mcp-gateway-karan-sampath.md`).

## What this demo does *not* show (deliberate cuts)

- No live JIT approval — drama shifted to the deny + contrast image, removed choreography risk.
- No JML close — could be a v0.4 stretch beat in Beat 3 ("if Sarah leaves, all her agents lose their owner mapping").
- No agent discovery — Dor P0: pre-registered.
- No org-wide ceiling ring — collapsed into the per-agent policy model.

## Open items

1. Validate screens 1–4 against actual Linx product state (Linx Claude w/ MCP).
2. Confirm Salesforce user-activity ingestion path (build prereq #1).
3. Persona for Beat 3 — Maria CISO or operational admin?
4. Identiverse format confirmation (booth-loop assumption).
5. Caption rendering — on-screen text overlays vs operator narration?

---

*Sources locked: `knowledge/ai-governance-core.md` (Mor 4-26 scope), `knowledge/anthropic-mcp-gateway-karan-sampath.md` (Karan validates architecture + delegated identity), `knowledge/ai-governance-deep.md` (RFC 8693 token exchange = how gateway sees the human behind the agent).*
