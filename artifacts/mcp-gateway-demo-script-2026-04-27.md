# MCP Gateway Demo — Identiverse 2026 (June 15)

**Status:** v0.1 draft for Dor review (2026-04-28).
**Author:** Omri.
**Adapted from:** Dor's Drifter RSAC2026 demo skeleton — *shape* kept (admin's day → dashboard → drill-in → detail → broader view → return), *substance* flipped (gateway-enforcement-led, not agent-experience-led).

---

## Demo at a glance

| | |
|---|---|
| **Length** | 8–12 min target. Compressible to 5 (booth loop) / expandable to 20 (breakout w/ Q&A). |
| **Spine** | JIT-led — admin approves a live agent request on stage. |
| **Persona** | Maria — CISO/IGA Admin (default; open for Dor). |
| **Medium** | Real Linx environment. ~5–6 screens minimum scope. |
| **Reset** | Re-queue the JIT request + reset audit cursor. (Detail TBD with eng.) |

## Key takeaways for the audience

1. **Linx governs every MCP call inline** — not after the fact, not via vendor APIs that don't exist for agents.
2. **Admin keeps oversight without becoming a bottleneck** — policies handle the volume; humans handle the exceptions.
3. **One pane for agents from any platform** — gateway is platform-agnostic; n8n / Bedrock / Vertex / Anthropic / Copilot all flow through the same lens.
4. **Audit is built-in, not bolted on** — every MCP call is captured, queryable, and tied to the human who delegated.

---

## Demo flow

| Stage | Where | Story / Actions |
|---|---|---|
| 1 | Main Dashboard | Maria opens her Monday. The gateway has been enforcing through the weekend. *[Live tiles: Agents under governance · Policies in effect · MCP calls (24h) · Denials (24h) · **1 JIT request pending your approval**]* Recent activity feed shows green flow + 2 weekend denials. She clicks the pending request. |
| 2 | JIT Request — Detail | A request from "**Sales Pipeline Bot**" (n8n, owner: Sarah Cohen). Sarah just asked the agent to update an opportunity in Salesforce. Agent's Access Profile caps it at READ on Opportunities; the operation needs WRITE. *[Show: requesting agent + owner, requested tool (`update_opportunity`), requested scope, current ceiling, why escalation, full delegation chain user→agent→tool, policy that fired.]* Maria scopes the grant — 1 hour, this user's session only — and approves. Confirmation. **(This is the live stage moment.)** |
| 3 | Agent Detail | Switch from the request to Sales Pipeline Bot's profile. *[Show: owner, platform badge (n8n), MCP tools attached (Salesforce, Slack), Access Profile in effect, last 50 MCP calls inline w/ green/red, the just-approved escalation visible at the top.]* This is where the audit story lives — the agent's full activity, queryable. |
| 4 | Access Log (3-stream) | Drop into the unified Access Log. *[Show: 1,200 MCP calls in 24h, 14 denials, 3 JIT escalations. Filter by agent / app / user.]* Surface a *different* denial — **"Datadog Triage Agent attempted `delete_monitor` on prod-checkout — denied by policy."** That's the "we caught something" without a notification needing to fire. Switch to Inventory. |
| 5 | Inventory > Agents | The gallery. ~5 agents transiting the gateway, mixed platforms (n8n, Bedrock, Vertex). Sort by risk, by activity. Drive home: **the gateway sees agents uniformly, regardless of where they live.** Click into the Integration tab. |
| 6 | Integration > MCP Servers | Show the connected MCP servers: Salesforce MCP, Slack MCP, Datadog MCP, Snowflake MCP. Architectural beat — the gateway sits between any agent platform and any target SaaS, enforcing on every call. Return to main. |
| 7 | Main Dashboard | Maria closes the loop. Sarah's session is running with the temp grant; audit will capture it; the JIT timer will revoke automatically. *[Pending count: 0. Recent activity feed updated with the new approval event.]* End on the steady state. |

---

## Cast (named entities)

**Persona on stage:** **Maria** — CISO/IGA Admin.

**End-user character:** **Sarah Cohen** — Sales rep. Owner of Sales Pipeline Bot. (Already used in Figma Make JML prototype — keep continuity.)

**Agents in the gateway (5):**

| Agent | Platform | Owner | Target apps (MCP tools) |
|---|---|---|---|
| Sales Pipeline Bot | n8n | Sarah Cohen | Salesforce read (R), Slack DM |
| Customer Insights Agent | Bedrock | Sarah Cohen | Salesforce R, Slack R |
| Datadog Triage Agent | Bedrock | Ops | Datadog R, PagerDuty W *[the denial we surface in stage 4]* |
| Slack Digest Bot | n8n | Marketing | Slack R |
| Snowflake Reporter | Vertex | Finance | Snowflake R |

**Why this cast:** mixed platforms (proves protocol-layer governance), one agent owned by a leaver-in-waiting (Sarah — sets up a JML follow-up if we add one), one with WRITE elsewhere (Triage's PagerDuty W — gives the denial story teeth).

---

## Minimum screen scope (eng ask)

Each screen below is build-once, show-many. Ranked by demo-criticality.

| # | Screen | Must-have elements |
|---|---|---|
| 1 | **Dashboard** | KPI tiles · pending JIT banner · recent activity feed · 1 entry point per other screen |
| 2 | **JIT Request — Detail** | Agent + owner header · requested tool/scope · current ceiling · delegation chain · policy that fired · approve / scope-down / deny actions w/ duration picker |
| 3 | **Agent Detail** | Header (owner, platform, last seen) · Tools tab · Access Profile tab · Activity log tab (collapses 3 streams) |
| 4 | **Access Log** | Unified table · filters (agent, app, user, outcome) · row drill-in to MCP call detail |
| 5 | **Inventory > Agents** | Cards or table · platform badge · risk + activity sort · click → Agent Detail |
| 6 | **Integration > MCP Servers** | List of connected MCP servers · per-server config + status |

**Cuttable to 4 if forced:** collapse #5+#6 into one "infrastructure" screen; collapse #4 into a tab on #3. Recommend keeping all 6 — each is one earned beat in the script.

**Not in scope for v0.1:** policy authoring UI, agent onboarding flow, lifecycle/JML automation surface, role/profile builder. Those are story-only references, not interactable.

---

## "Only we" line for this demo

> *"Every other vendor governs agents through the apps they reach or the platforms they live on. Linx governs them at the wire — every MCP call, inline, with full delegation context. That's why we can answer where, who, what, and who-signed-off in one pane."*

(Explicit framing only if asked. Default: let the product show it.)

---

## Stress test — what's weakest in this draft

1. **Live JIT approval is the riskiest moment on stage.** If the request doesn't appear, doesn't approve cleanly, or the timer logic glitches, the demo breaks. Need a deterministic path + a backup recording.
2. **5 agents may feel thin** for a "rich" inventory shot. If eng can stub 8–10 cheaply, do it.
3. **The denial in stage 4 is told, not lived** — Maria points at it; she doesn't experience it. A stronger version would have the denial fire live during the demo, but that adds choreography risk. Hold for v0.2.
4. **No JML beat.** Mor's hero menu had JML as primary, JIT as live moment. This draft is JIT-only. Risk: we leave the AGENT_OWNER_OFFBOARDED story on the table, which is the existing built-in issue type that already has data. Could add a 30-second JML close in stage 7 ("by the way — if Sarah leaves, all five of these agents get contained automatically"). Decision for Dor.
5. **No competitive frame.** Drops Saviynt See/Govern/Enforce response by design (per Omri Apr 27). Risk: customers leave the demo without a way to differentiate us in their head.
6. **Persona ambiguity.** Maria reads as CISO; the actions she takes (approving JIT requests, scoping policies) are operational-admin work. A real CISO wouldn't be in the queue every morning. Either rename to "IGA Admin" or accept the abstraction.

---

## Open questions for Dor

1. **Persona** — Maria CISO (matches M1 hero) or operational IGA Admin (matches the actions on stage)?
2. **Identiverse slot/format** — keynote, sponsor breakout, or booth lead? Determines whether we cut to 5 min, hold at 10, or expand to 20.
3. **JML close in stage 7** — add a 30-second JML teaser ("if Sarah leaves, watch this") or hold strictly to JIT for v0.1?
4. **Competitive framing** — opt out (current draft), or layer a See/Govern/Enforce/**Audit** beat as Saviynt counter?
5. **Live approval interaction** — Maria physically approves on stage, or scripted/timed approval? Affects choreography risk.
6. **Cast size** — hold at 5 agents or push eng for 8–10 to make stage 5 feel rich?
7. **Reset path** — what's the boundary? Re-queue the JIT request only, or re-seed audit log + activity feed too?

---

*Source files: `knowledge/ai-governance-core.md` (M1/M2/MCP Gateway pivot, Mor 4-26 scope, hero menu), `knowledge/ai-governance-deep.md` (10 capabilities, identity model, tool-as-first-class), `artifacts/ai-agent-identity-sme-brief-2026-04-21.md` (Saviynt CPO See/Govern/Enforce, "only we" line), `knowledge/positioning.md`, `knowledge/slack-governance-channel-extraction-2026-04-21.md`. Tail of `log.md` 2026-04-26.*
