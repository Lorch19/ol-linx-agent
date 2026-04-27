# MCP Gateway Demo — Identiverse 2026 (June 15)

v0.1 draft for Dor — 2026-04-28.

## Flow

| Stage | Where | Story / Actions |
|---|---|---|
| 1 | Dashboard | Maria opens her Monday. *[Tiles: agents under governance · policies · MCP calls 24h · denials 24h · **1 JIT pending**]* Activity feed: green flow + 2 weekend denials. Click the pending request. |
| 2 | JIT Request — Detail | "Sales Pipeline Bot" (n8n, owner: Sarah Cohen) needs WRITE on Salesforce Opportunities; profile caps at READ. *[Show: requested tool, current ceiling, delegation chain user→agent→tool, policy that fired.]* Maria scopes — 1h, this user — and approves. **Live stage moment.** |
| 3 | Agent Detail | Sales Pipeline Bot profile: owner, platform badge, MCP tools, Access Profile, last 50 calls inline w/ green/red, the just-approved escalation pinned at top. |
| 4 | Access Log | Unified 3-stream view. 1,200 calls / 14 denials / 3 JIT in 24h. Surface a *different* denial: "Datadog Triage Agent attempted `delete_monitor` on prod-checkout — denied." Caught without a notification firing. |
| 5 | Inventory > Agents | ~5 agents, mixed platforms (n8n, Bedrock, Vertex). Gateway sees them uniformly regardless of platform. |
| 6 | Integration > MCP Servers | The 4 connected MCPs (Salesforce, Slack, Datadog, Snowflake). Architectural beat: gateway sits between any agent platform and any target SaaS. |
| 7 | Dashboard | Pending: 0. Sarah's session running w/ temp grant; JIT timer revokes automatically. End on steady state. |

## Cast

- **Maria** — admin on stage.
- **Sarah Cohen** — sales rep, owns Sales Pipeline Bot. Reuses Figma Make JML name for continuity.

| Agent | Platform | Owner | Tools |
|---|---|---|---|
| Sales Pipeline Bot | n8n | Sarah Cohen | Salesforce R, Slack DM |
| Customer Insights | Bedrock | Sarah Cohen | Salesforce R, Slack R |
| Datadog Triage | Bedrock | Ops | Datadog R, PagerDuty W *(stage 4 denial)* |
| Slack Digest | n8n | Marketing | Slack R |
| Snowflake Reporter | Vertex | Finance | Snowflake R |

## Screens (eng ask)

1. **Dashboard** — KPI tiles, pending banner, activity feed.
2. **JIT Request Detail** — agent + owner, requested tool/scope, ceiling, delegation chain, policy fired, approve / scope-down / deny w/ duration.
3. **Agent Detail** — header, Tools tab, Access Profile tab, Activity log tab (3 streams collapsed).
4. **Access Log** — table + filters (agent / app / user / outcome) + row drill-in.
5. **Inventory > Agents** — cards w/ platform badge, sort by risk + activity.
6. **Integration > MCP Servers** — list + per-server status.

Cuttable to 4 if forced: collapse 5+6 → "infrastructure"; collapse 4 → tab on 3.

## Risks

- Live JIT is the fragile beat — need backup recording.
- Stage 4 denial is told, not lived. Strong v0.2 candidate.
- No JML — Mor's menu had JML primary. Deliberate cut, flag to Dor.

## Opens for Dor

1. Persona — Maria CISO or operational IGA Admin?
2. Identiverse slot — keynote / breakout / booth? Drives 5 / 10 / 20-min cut.
3. Add 30-sec JML teaser at stage 7?
4. Saviynt See/Govern/Enforce counter — in or out?
5. Live approval — Maria's hand or scripted timer?
6. Cast — 5 or push eng to 8–10?
7. Reset boundary — JIT only, or audit log + feed too?
