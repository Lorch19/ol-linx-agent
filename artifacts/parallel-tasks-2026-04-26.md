# Parallel Tasks — Run Tonight / Tomorrow Morning

Two independent threads to advance discovery while Omri is offline. Each is self-contained — paste the prompt and run.

---

## Task A — Existing screens validation (Claude.ai or Claude Code terminal, with Linx Notion + Linear MCP)

**Goal:** validate the 4 existing screens AI Governance needs to land on or extend, and produce a single mapping doc.

**Output file:** `artifacts/existing-screens-mapping-2026-04-26.md`

### Prompt

```
Using the Linx Notion + Linear MCP connections, validate and document the following four screens. For each: confirm it exists today, capture the current model (entities, fields, key relationships), and identify the AI-Governance delta we'll need to add.

1. **Access Profiles screen**
   - Current state: which entity it governs (Applications? Roles? Users?), what fields it has, how it's authored.
   - AI-Gov delta: needs to express access for (a) connected Applications and (b) Tools within them, scoped per agent.
   - Source: search Notion + Linear for "Access Profile" or related epics.

2. **Inventory > Agents tab**
   - Suspected to exist (M1 shipped: Gemini, Vertex AI, Bedrock, n8n connectors per Linear governance-for-agentic-ai project).
   - Current state: confirm tab exists, what columns/fields, drill-down depth.
   - AI-Gov delta: gaps for the 5 use cases from Mor (access controls, JML, inherent perms, policy enforcement, roles).
   - Source: Linear governance-for-agentic-ai project; Notion AI Agents research page.

3. **Integration tab**
   - Current state: covers API-based integrations today.
   - AI-Gov delta: needs to represent integrations connected through the MCP Gateway. Decide: new connector type in same tab, a new sub-tab, or a separate surface?
   - Source: search Notion + Linear for "Integration" tab, "Connectors", "MCP Gateway".

4. **Logs — three streams**
   - System Logs · Governance Logs · All Access Logs (per Sarit Apr 23 P0).
   - Confirm whether each exists in Linx today or is net-new for AI Governance.
   - Source: Notion + Linear search.

For each, output:
- Source link (Notion page URL or Linear ticket ID)
- Current state (1-2 paragraphs)
- AI-Gov delta (bulleted list of what changes)
- Open questions (what's unclear, who can answer)

Save the result as `artifacts/existing-screens-mapping-2026-04-26.md`. Commit and push to the active branch.
```

---

## Task B — Figma Make: prototype the JML cross-cutting flow

**Goal:** clickable prototype of the strongest hero-moment candidate (Agent JML) to show Mor + Niv this week.

**Why JML:** exercises all 4 building blocks (Inventory → Govern → Enforce → Audit). Lowest dev risk per the hero-moment table. If it lands, becomes the Identiverse demo backbone.

### Prompt for Figma Make

```
Prototype an "Agent JML" flow for the Linx AI Governance product. Generate 5–7 frames that tell a complete story:

Setup:
- Persona: Maria, CISO at an enterprise customer.
- Trigger: HR system fires "employee.terminated" for Sarah (a Sales Ops manager).
- Sarah owned 4 AI agents across ChatGPT Enterprise + Cursor that had access to Slack, Salesforce, and Datadog via Linx MCP Gateway.

Frames:
1. **Notification:** Maria opens Linx and sees an alert: "4 unowned agents detected — owner Sarah Cohen offboarded."
2. **Inventory drill-in:** click into the alert → Inventory > Agents filtered by "owner = Sarah Cohen". 4 rows. Each shows: agent name, platform, last active, scoped credentials (Slack/SFDC/DD), risk indicator.
3. **Per-agent detail:** click on "Sales Forecasting Agent" → entity page showing identity (delegated: Sarah + agent), permissions (`agent_perms = user_perms ∩ admin_ceiling`), recent actions (last 30 days), tools accessed.
4. **Bulk action:** back to inventory, select all 4 → "Revoke all credentials" button → confirmation modal showing what will be revoked (Slack OAuth tokens, SFDC service account, DD API key).
5. **Confirmation:** action complete → 4 agents now show "credentials revoked" status. New audit log entry created.
6. **Audit trace:** click into the audit log entry → shows: who triggered, when, which credentials, target SaaS reached, success/failure per credential.

Style: match the existing Linx product visual language (search Linx Figma library if accessible). Otherwise: clean enterprise SaaS, dense data tables, dark accent for risk states.

Output: shareable Figma Make link + 1-paragraph speaker notes per frame.
```

**Where to run:** Figma Make app, with Claude as the LLM partner. If Figma library access is available, point Make at the existing Linx design system.

---

## Task B' — Figma Make: prototype the JIT approval flow (live-control moment)

**Goal:** clickable prototype of the live-control hero moment. Now feasible because Q2 resolved as inline-for-everything (Linx in the request loop). This is the dramatic stage demo for Identiverse.

### Prompt for Figma Make

```
Prototype an "Agent JIT Approval" flow for the Linx AI Governance product. Generate 5–7 frames showing live in-the-loop enforcement as it happens.

Setup:
- Persona: Maria, CISO at an enterprise customer.
- Scenario: Sarah (Sales Ops manager) prompts her "Sales Forecasting Agent" (running on Cursor) to update a deal stage in Salesforce. The agent calls the Salesforce write tool via MCP.
- Linx is in the request loop and intercepts the tool call.
- Admin policy: agents may NOT write to Salesforce without explicit approval per request.

Frames:
1. **Agent triggers a tool call:** show the agent context — the user prompt, the agent's plan, the tool it's about to call (sfdc.opportunities.update). Visual cue: "intercepted by Linx Gateway."
2. **Policy evaluation:** Linx evaluates the request against the policy. Show: identity (Sarah + agent), requested scope (sfdc.write on opportunity 4521), admin ceiling (no agent write to SFDC). Result: "approval required."
3. **Approval routed:** Maria's approval inbox in Linx (or Slack notification). Card shows: who, what, why, blast radius (1 record? all opportunities?), recommended decision.
4. **Maria approves with scope:** Maria clicks Approve → modal lets her narrow scope (just this opportunity, expires in 15 min). Confirms.
5. **Ephemeral credential issued:** Linx issues a narrow, time-boxed Salesforce credential to the agent. Agent retries the call. Action succeeds.
6. **Audit entry:** simultaneous audit log entry — full trace: user, agent, tool, scope, approver, decision, target, result.
7. **Credential auto-revokes:** 15 minutes later, credential expires. Show the lifecycle event in audit.

Style: same as Task B (Linx product visual language, dense data tables, dark accent for risk states). The "Approve" moment should feel decisive — single primary CTA.

Output: shareable Figma Make link + 1-paragraph speaker notes per frame.
```

**Why both (B + B'):**
- B (JML) exercises all 4 building blocks → strongest *complete* narrative
- B' (JIT) is the *live* moment → strongest *stage* moment
- Show both to Mor + Niv on May 5; pick the primary, the other becomes secondary frame in the demo

---

## What I do with the outputs when you're back

- **Task A output (`existing-screens-mapping`):** drives the requirements doc Omer asked for (use cases + screens + journeys). Each existing screen becomes a section.
- **Task B output (Figma prototype):** becomes the visual artifact for the May 5 hero-moment alignment with Mor + Niv. Doubles as the rough demo storyboard for June 15.

Both feed into the May 8 scope commit.
