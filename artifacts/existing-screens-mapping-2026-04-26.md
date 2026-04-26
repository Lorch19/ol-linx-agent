# Existing Screens — AI Governance Mapping

**Date:** 2026-04-26
**Author:** Generated from Notion + Linear MCP audit (Task A output)
**Scope:** Validate today's product surfaces against the AI Governance ask, capture the delta needed.

---

## Summary

All four screens were located. Three exist in production today (Access Profiles, Integrations gallery, Audit Logs page). One — **Inventory > Agents** — is the M1 deliverable from the *Governance for Agentic AI* project and is also live (shipped Dec 2025 in `EXP-335`). The "MCP Gateway" surface referenced in the AI-Gov delta is **not a documented screen yet** — it appears only as a discussion topic in a 1:1 doc ([Dor<>Omri](https://www.notion.so/968259f655598281b12b81b14419d1b1)) [[12]](https://www.notion.so/968259f655598281b12b81b14419d1b1). The audit logs are already three-stream (System / Governance / User Activity); "All Access Logs" appears to be Sarit's renaming of the existing **User Activity** stream — needs confirmation.

---

## 1. Access Profiles screen

**Source:** Notion [Access profiles (product concept)](https://www.notion.so/260259f655598072a27ac56b1234a218) [[1]](https://www.notion.so/260259f655598072a27ac56b1234a218) · Notion [[One-Pager] Access Profiles](https://www.notion.so/179259f655598087ac23c28b5fd726e8) [[2]](https://www.notion.so/179259f655598087ac23c28b5fd726e8) · Notion [Access profiles (RBAC)](https://www.notion.so/151259f655598024a530e19b3e1e0b8d) [[3]](https://www.notion.so/151259f655598024a530e19b3e1e0b8d)

### Current state

The Access Profiles screen governs **Humans** (users). A profile groups humans (by attribute filters, IDP groups, or explicit include/exclude lists) and binds them to **entitlements expressed as PL Roles and PL Groups** inside connected Applications [[2]](https://www.notion.so/179259f655598087ac23c28b5fd726e8). Authoring is CRUD via `access-management-service` (`POST/PUT/GET/DELETE /access-profiles`). The `access_profiles` collection schema today is `{ name, description, member_attributes { filters, traversalFilters, columnFilters, idp_groups[] }, include_human_ids[], exclude_human_ids[], settings { auto_sync_members, auto_provision_access, auto_deprovision } }` with edges to humans (members) and to `access_entitlements` of type `PL_GROUP` or `PL_ROLE` [[2]](https://www.notion.so/179259f655598087ac23c28b5fd726e8).

The vision frames this as the foundation for JML, RBAC enforcement, UAR scoping, and access-request approvals, with a Crawl/Walk/Run path toward AI-generated profiles [[1]](https://www.notion.so/260259f655598072a27ac56b1234a218). Today the entitlement vocabulary is **Application + Role/Group** — there is no concept of an Agent or a Tool.

### AI-Gov delta

- Extend the `access_entitlements` edge type set beyond `PL_GROUP` / `PL_ROLE` to include **`AGENT_TOOL`** (and possibly `AGENT_PLATFORM`) so a profile can grant "use of Tool X on Agent Y."
- Member side: today members are humans only. Decide whether profiles can also have **Agents as members** (so an Agent inherits the same access scope as a job role) — alternative is keeping members human and treating agents as a delegated identity.
- Per-agent scoping: the delta is "express access for (a) connected Applications and (b) Tools within them, **scoped per agent**." This implies a 3-tuple `(human|agent, application, tool[])` rather than today's 2-tuple `(human, application-role)`. Likely needs a new `agent_scope` block on entitlements.
- Authoring UI: profile editor needs an "Agents & Tools" picker driven by the new Agent inventory (see §2). Tool list comes from each agent's `Tools` array (type API/MCP) — not from the existing app role catalog.
- Backing for `APP-2131` ([Create Access Profiles via Linx API](https://linear.app/linxsecurity/issue/APP-2131/feature-request-create-access-profiles-via-linx-api)) [[4]](https://linear.app/linxsecurity/issue/APP-2131/feature-request-create-access-profiles-via-linx-api) and `AI-597` ([traversal_filters in list_profiles MCP](https://linear.app/linxsecurity/issue/AI-597/add-traversal-filters-to-list-profiles-mcp-tool-for-access-profile)) [[5]](https://linear.app/linxsecurity/issue/AI-597/add-traversal-filters-to-list-profiles-mcp-tool-for-access-profile) means the schema change must propagate to the public API and the MCP tool surface.
- Governance-log handler `access_profiles_governance_logs` already supports `ACCESS_PROVISIONED / ACCESS_DEPROVISIONED / MEMBER_ADDED / MEMBER_REMOVED` [[2]](https://www.notion.so/179259f655598087ac23c28b5fd726e8) — needs new actions for `AGENT_TOOL_GRANTED / REVOKED`.

### Open questions

- Are agents *members of profiles* or *resources granted to profiles*? Mor / Ofek Chen — they own the entity model.
- Does `evaluate-user-access` need a sibling `evaluate-agent-access` flow, or do we generalise it? Owners: Ofek Chen + Application team.
- Do M3 *Agent access request policies* (`APP-1912`) sit on top of profiles or in parallel? Mor.

---

## 2. Inventory > Agents tab

**Source:** Linear project [Governance for Agentic AI](https://linear.app/linxsecurity/project/governance-for-agentic-ai-07e946f01264) [[6]](https://linear.app/linxsecurity/project/governance-for-agentic-ai-07e946f01264) · Linear [EXP-335 Agent inventory UI](https://linear.app/linxsecurity/issue/EXP-335/feature-agent-inventory-ui) [[7]](https://linear.app/linxsecurity/issue/EXP-335/feature-agent-inventory-ui) · Linear [EXP-583 New ai agents entity page](https://linear.app/linxsecurity/issue/EXP-583/new-ai-agents-entity-page) [[8]](https://linear.app/linxsecurity/issue/EXP-583/new-ai-agents-entity-page) · Notion [Agentic AI Identities (epic)](https://www.notion.so/262259f655598091aaabfc5d58e38e96) [[9]](https://www.notion.so/262259f655598091aaabfc5d58e38e96)

### Current state

**Confirmed live.** M1 of *Governance for Agentic AI* shipped to L4L on 2025-12-21 (milestone progress 100%, parent issue `EXP-335` Done). The surface is **Discovery > Agents** (not nested under a generic "Inventory") with sibling tabs added on Resources (`EXP-594`) and Humans (`EXP-593`) entity pages [[6]](https://linear.app/linxsecurity/project/governance-for-agentic-ai-07e946f01264).

Per the M1 spec [[9]](https://www.notion.so/262259f655598091aaabfc5d58e38e96), each Agent record carries: `Identifier (name), Type=AI Agent, Application (the agentic platform), Owner (Human/group), Shared with (accounts), Resources, Tools, Created at, Status`. Drill-down opens the Agent entity page with tabs **Info · Tools (incl. MCP) · Resources · Shared with Human accounts · AI Agents · Issues** (Access graph deferred). Filters cover Agent name, Application, Owner, Description, Tool name, Resource, Shared-with, Created-at, and Model. Connectors shipped/in flight at M2: OpenAI, Anthropic, Microsoft Copilot, Cursor, n8n, Vertex AI (`CON-2438` Done), Bedrock (`CON-2437` Done), Gemini.

The Tool sub-entity has its own model: `{ name, type: API|MCP, authentication_type, permissions[], target_url, target_application_name }` [[9]](https://www.notion.so/262259f655598091aaabfc5d58e38e96).

### AI-Gov delta (gaps vs. Mor's 5 use cases)

- **Access controls** — Today the Agents tab is read-only discovery. There is no UI to grant or restrict Agent access to a tool/app from this page. M3 (`APP-1902` UAR for agents, `APP-1912` Agent access request policies) is in backlog [[10]](https://linear.app/linxsecurity/issue/APP-1912/feature-agent-access-request-policies). Action column / "Restrict tool" row action missing.
- **JML (Joiner-Mover-Leaver)** — No lifecycle state on the Agent entity beyond `Status`. No transition events (created → owner-assigned → orphaned → revoked) and no integration with the existing JML evaluation flow that drives Access Profiles.
- **Inherent permissions** — Tools have a `permissions[]` field but `ANA-1763 Map agents tools to permissions in apps` is still in Backlog — i.e. the join from Tool permission strings to actual app entitlements isn't materialised yet.
- **Policy enforcement** — No policy column, no "blocked by policy" indicator, no link to the Linx workflow engine. Resource policy enforcement is the explicit M3 capability (#6 in the epic) and is unbuilt.
- **Roles** — The Agent record has `Owner` (Human/group), but no concept of *organisational role for the agent itself* and no way to bind an Agent to an Access Profile (see §1 delta). The Roles sub-tab listed in the user-flow draft is currently empty/redirect.

### Open questions

- Should the Agents page move from `Discovery > Agents` to a unified `Inventory > Agents` to match the framing in this exercise? Ben Bakhar (owner of `EXP-335`).
- Where do *agent-to-agent* relationships render? `PRD-8654` (A2A protocols) was cancelled; the surface is currently overloaded into the "Tools" filter.
- For inherent permissions, do we trust the agent platform's reported scopes or compute them via NHI mapping (`PRD-8791`)? Mor / Amir Hamenahem.

---

## 3. Integration tab

**Source:** Notion [Integrations gallery page](https://www.notion.so/1beb6725be554aaab24458b55c4dccb1) [[11]](https://www.notion.so/1beb6725be554aaab24458b55c4dccb1) · Notion [API connectors](https://www.notion.so/83cb47f823ff43d0813cdd254c566c77) · Notion [Connectors (catalog)](https://www.notion.so/4e3744996f6f4c0aacea72f60fc19519)

### Current state

The Integrations gallery is the place where an admin discovers, connects, and monitors **API-based connectors** to external systems (Okta, AWS, Salesforce, Workday, Snowflake, Jira, Azure AD, GCP, etc.) [[11]](https://www.notion.so/1beb6725be554aaab24458b55c4dccb1). Each row is a connector instance authored through a connection wizard; the page also surfaces health/status (recent improvements landed via `EXP-215`) and links into System Logs filtered by integration (`EXP-793` Done Jan 2026). The connector typology recognised today is API connectors only (with sub-types CSV / Spreadsheet / On-Prem agent-fed). The Notion connectors index lists the same set of connector kinds: IdP, CSP, Business app, ITSM, HR, SCM, DB, Ops.

### AI-Gov delta

The agent ecosystem connects to apps via the **MCP Gateway** — a concept that today exists only as a discussion topic in the 2026-04-21 [Dor <> Omri 1:1](https://www.notion.so/968259f655598281b12b81b14419d1b1) [[12]](https://www.notion.so/968259f655598281b12b81b14419d1b1) and a sentence inside the [AI Agents research](https://www.notion.so/248259f6555980fdb580f06fb360c16e) page. There is **no Linear ticket, no one-pager, and no Figma yet**.

Surface decision (recommendation, to be ratified):

- **Option A — New connector type in the same tab.** Cheapest. Add a "Source" filter (`API` / `MCP Gateway`) and a connector-type chip on each row. Reuses existing health/status, governance log linkage, and the `EXP-793` "View system logs" action. Fits naturally with the unified `LinxAuditLog` schema which already enumerates `ActorType.AI_AGENT` [[14]](https://www.notion.so/2a6259f6555980bbbd50c2853135d58d).
- **Option B — New sub-tab `Integrations > MCP Gateway`.** Better if MCP integrations carry materially different fields (per-agent scoping, request-level policy, traffic logs) that pollute the API-connector row.
- **Option C — Separate top-level surface (`Agent Gateway` under Discovery or Settings).** Right call if MCP is also a runtime traffic plane (proxy/intercept) rather than just a connector registry, because the operational mental model diverges from "scheduled sync connector."

The product framing in `Agentic AI Identities` [[9]](https://www.notion.so/262259f655598091aaabfc5d58e38e96) explicitly lists "Tools — can include both API and MCP integrations" on the Agent entity, which argues that **Option A** is internally consistent: a Tool is the thing that has type `API|MCP`, and an Integration is the underlying connector. Recommend Option A unless the MCP surface needs runtime policy controls (then B).

### Open questions

- Is there a runtime MCP Gateway component planned (proxy/intercept), or only a registration/visibility surface? Dor + Omri (mentioned as agenda topic, no decision yet).
- Do MCP integrations authenticate per-agent (different credentials than API integrations) — if so the connection wizard needs a different field set.
- Does the existing connector manifest abstraction support an `MCP` provider type, or do we need a new manifest schema? Connectors team (Omer Blechman).

---

## 4. Logs — three streams

**Source:** Linear project [Linx System and Governance Logs](https://linear.app/linxsecurity/project/linx-system-and-governance-logs-9bce38a91432) [[13]](https://linear.app/linxsecurity/project/linx-system-and-governance-logs-9bce38a91432) · Notion [[One-Pager] Linx Pla Audit Logging System](https://www.notion.so/2a6259f6555980bbbd50c2853135d58d) [[14]](https://www.notion.so/2a6259f6555980bbbd50c2853135d58d) · Notion [Governance logs (epic)](https://www.notion.so/286259f6555980b89a03ee86ede5774b) [[15]](https://www.notion.so/286259f6555980b89a03ee86ede5774b)

### Current state

Linx already operates a **unified audit logging system with three event categories** matching Sarit's framing: `SYSTEM | GOVERNANCE | USER_ACTIVITY`. Schema is `LinxAuditLog` (10 fields: `id, event_category, target_entity_type, action_type, actor_type, status, created_at, summary, span_id, metadata`); enums include 25+ entity types and 40+ action types; `actor_type` already enumerates `AI_AGENT` alongside USER/SYSTEM/WORKFLOW/API_TOKEN/SLACK_BOT [[14]](https://www.notion.so/2a6259f6555980bbbd50c2853135d58d).

Per-stream status:

- **System Logs — exists.** Captured via `AuditClient` for connector sync start/complete/fail, integration auth, etc. UI shipped via `EXP-588` (Done 2026-01-12) and integration-page deep-link via `EXP-793` (Done 2026-01-19) [[13]](https://linear.app/linxsecurity/project/linx-system-and-governance-logs-9bce38a91432).
- **Governance Logs — exists.** Provision/deprovision, entitlement changes, policy enforcement events. Backlog item `PRD-8704` extends coverage to SOD violations, UAR campaigns and reviews. Per-feature collection (`access_profiles_governance_logs`) already in place from the Access Profiles one-pager [[2]](https://www.notion.so/179259f655598087ac23c28b5fd726e8).
- **All Access Logs — exists as `USER_ACTIVITY` stream.** `EXP-818` (Done 2026-01-19) added UI handling for `USER_ACTIVITY_LOGS`, and `ANA-1456` (Done 2026-01-11) migrated the existing user-actions Streaming API content into the new infra. The label "All Access Logs" does not appear verbatim in the existing docs — strong inference is that Sarit's third stream = the User Activity stream, possibly rebranded for the AI-Gov framing.

External access today: REST API exposed via `ANA-1572` (Done 2026-02-23). SIEM streaming, webhooks, OSCF/ECS schemas are explicit "Walk/Run" deferred work [[15]](https://www.notion.so/286259f6555980b89a03ee86ede5774b).

### AI-Gov delta

- **Stream naming** — "All Access Logs" is not the current name. Either align AI-Gov spec to existing `USER_ACTIVITY` terminology or rename the stream platform-wide. Pick one before customer-facing docs ship.
- **Entity types** — `target_entity_type` enum needs `AGENT`, `AGENT_TOOL`, `MCP_GATEWAY` (and probably `MCP_INTEGRATION`). Today none of these exist [[14]](https://www.notion.so/2a6259f6555980bbbd50c2853135d58d).
- **Action types** — extend with `AGENT_REGISTERED`, `AGENT_OWNER_CHANGED`, `AGENT_TOOL_INVOKED`, `AGENT_ACCESS_REQUESTED`, `AGENT_ACCESS_APPROVED|DENIED`, `MCP_TOOL_CALL`. Maps to M4 capability *Auditability and logging* in the Agentic AI epic [[9]](https://www.notion.so/262259f655598091aaabfc5d58e38e96).
- **High-volume "All Access" semantics** — agent traffic through MCP Gateway will dwarf human user activity in event count. Today's User Activity stream retention is 1 month (per Crawl plan [[15]](https://www.notion.so/286259f6555980b89a03ee86ede5774b)); the AI-Gov use case will need a separate per-agent retention policy or sampling strategy.
- **Filtering** — Need to filter all three streams by `actor_type=AI_AGENT` and by specific Agent ID. Schema supports it (it's metadata.actor_id) but UI filters today are scoped to top-level fields only.
- **No new collection needed** — the unified `LinxAuditLog` schema is intentionally extensible without migrations [[14]](https://www.notion.so/2a6259f6555980bbbd50c2853135d58d), so the AI-Gov delta is enum + metadata convention work, not new tables.

### Open questions

- Confirm with Sarit (Apr 23 P0 message): is "All Access Logs" a rename, a re-scope of `USER_ACTIVITY`, or a fourth stream merging Governance + User Activity for the agent context?
- Retention/sampling per agent — needs Mor + Ofek Chen sign-off.
- Are MCP-Gateway traffic logs "System" (it's our infra) or "Governance" (it represents enforced policy)? Recommend Governance, but needs confirmation.

---

## Source index

| # | Source | Last updated |
|---|---|---|
| 1 | [Notion · Access profiles (concept)](https://www.notion.so/260259f655598072a27ac56b1234a218) | 2025-10-09 |
| 2 | [Notion · [One-Pager] Access Profiles](https://www.notion.so/179259f655598087ac23c28b5fd726e8) | 2025-02-06 |
| 3 | [Notion · Access profiles (RBAC)](https://www.notion.so/151259f655598024a530e19b3e1e0b8d) | 2025-08-26 |
| 4 | [Linear · APP-2131 Create Access Profiles via Linx API](https://linear.app/linxsecurity/issue/APP-2131/feature-request-create-access-profiles-via-linx-api) | 2026-04-13 |
| 5 | [Linear · AI-597 traversal_filters in list_profiles MCP tool](https://linear.app/linxsecurity/issue/AI-597/add-traversal-filters-to-list-profiles-mcp-tool-for-access-profile) | 2026-04-15 |
| 6 | [Linear · Project — Governance for Agentic AI](https://linear.app/linxsecurity/project/governance-for-agentic-ai-07e946f01264) | 2026-04-21 |
| 7 | [Linear · EXP-335 [Feature] Agent inventory UI](https://linear.app/linxsecurity/issue/EXP-335/feature-agent-inventory-ui) | 2025-12-21 |
| 8 | [Linear · EXP-583 New ai agents entity page](https://linear.app/linxsecurity/issue/EXP-583/new-ai-agents-entity-page) | 2025-12-15 |
| 9 | [Notion · Agentic AI Identities (epic)](https://www.notion.so/262259f655598091aaabfc5d58e38e96) | 2026-03-03 |
| 10 | [Linear · APP-1912 Agent access request policies](https://linear.app/linxsecurity/issue/APP-1912/feature-agent-access-request-policies) | 2026-02-16 |
| 11 | [Notion · Integrations gallery page](https://www.notion.so/1beb6725be554aaab24458b55c4dccb1) | 2023-09-18 |
| 12 | [Notion · Dor <> Omri 1:1 (MCP gateway agenda)](https://www.notion.so/968259f655598281b12b81b14419d1b1) | 2026-04-21 |
| 13 | [Linear · Project — Linx System and Governance Logs](https://linear.app/linxsecurity/project/linx-system-and-governance-logs-9bce38a91432) | 2026-04-25 |
| 14 | [Notion · [One-Pager] Linx Pla Audit Logging System](https://www.notion.so/2a6259f6555980bbbd50c2853135d58d) | 2025-11-24 |
| 15 | [Notion · Governance logs (epic)](https://www.notion.so/286259f6555980b89a03ee86ede5774b) | 2025-11-03 |
