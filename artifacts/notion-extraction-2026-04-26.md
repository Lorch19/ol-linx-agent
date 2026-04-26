# Notion Extraction — AI Governance / Agentic Identities

**Generated:** 2026-04-26
**Purpose:** Source-of-truth pull from Notion to feed May 8 requirements draft. Validates each page against the Apr 26 MCP Gateway pivot.
**Pivot context:** Cycle 79 introduces "MCP gateway — POC and how it works" as a new investigation track ([Cycle 79 priorities](https://www.notion.so/342259f6555980c495becd0d5d680680), edited 2026-04-24). M3-style governance scope (resource policy enforcement, MCP server access controls) likely shifts from Linx-side enforcement to gateway-mediated enforcement; this changes implementation but not the underlying user need.

---

## ⚠ Environment limitations (read this first)

Two parts of the request could not be executed in this environment and need a human:

1. **`ai-governance-core.md` (lines 131-145) reconciliation** — the file does not exist in the working directory and was not in the upload payload. I cannot diff its 10 user scenarios against the Notion source. I have, however, extracted the 10 Notion-side scenarios verbatim below (§7) so a human can do the diff in 30 seconds.
2. **`git commit && git push`** — there is no git repo initialized in `/home/claude` and no `.git` directory anywhere on the filesystem. The artifact has been produced at `/home/claude/artifacts/notion-extraction-2026-04-26.md` and surfaced via the file-presentation step. Please clone/check out the active branch locally and add the file.

Linear-side scope (the "Linear M3 narrowed/struck-through" diff) is not in scope for the Notion MCP and was not retrievable here — it needs a Linear MCP call or a manual look at the linked Linear project.

---

## 1. Agentic AI Identities — originating epic

- **URL:** https://www.notion.so/262259f655598091aaabfc5d58e38e96
- **Last edited:** 2026-03-03
- **PM owner:** assigned (user ref `244d872b-594c-8112-a19c-0002008f064c`)
- **Status:** In Product Design
- **Type:** Epic
- **Parent:** Product epics and stories database

**Content summary (architecture / spec):**
This is the canonical PRD for the Agentic AI Identities epic and doubles as the "Mar 3 PRD/spec" referenced in target #3 — there is no separate Mar 3 doc; this page **is** it. Objective: enable ISPM and IGA capabilities for Agentic AI Identities within Linx. Problem framed around four properties of agentic identities (ephemeral, autonomous, high-volume, context-dependent) and three customer questions (where are AI/LLM tools connected, how do I control agent access, who is accountable). Defines an MVP user story (visibility into LLM tools touching org resources), a hero use case ("The CISO's Blind Spot"), the canonical 10-capability table (§4 below), 10 user scenarios (§7 below), an M0–M4 milestone breakdown, and detailed M1 technical requirements (agent + tool data models, Discovery > Agents page filters, dashboard widgets).

**Validity post-Apr 26 pivot:** **PARTIALLY VALID.**
- M0, M1, M2 are unaffected — discovery, inventory, ownership, authentication/authorization visibility do not depend on the gateway.
- M3 is the affected milestone. Notion-side M3 deliverables include "Resource-level policies for agents", "MCP server access controls", "Agent access request workflows (JIT provisioning)", "Approval chains for sensitive operations", "User Access Reviews (UARs) for agents", "Least privilege analysis." With an MCP Gateway as the enforcement point, "Resource-level policies" and "MCP server access controls" become gateway-mediated rather than Linx-mediated; the user-visible capability is unchanged but the implementation surface and the integration story shift.
- Capability #6 ("Resource policy enforcement") explicitly calls out "Map and define MCP server resource policies (Access to MCP server should be part of the policy)" — this language is gateway-compatible but the architecture diagram needs updating.

---

## 2. AI Agents research — most recent (Apr 23)

- **URL:** https://www.notion.so/248259f6555980fdb580f06fb360c16e
- **Last edited:** 2026-04-23
- **Author/owner:** Amir (annotations throughout marked `[Amir - …]`)

**Content summary (other / context):**
A working research log, not a spec. Sections: general knowledge on RAG / MCP / A2A / Okta Cross-App-Access; types-of-AI-for-security taxonomy (Pure AI SaaS, SaaS using AI, Internal AI tools, Organizational AI Agent); explicit scope statement for what "AI agent security in Linx" means (discover agents, discover users/apps using them, per-account permissions); explicit out-of-scope (compromised agent attack surface, stolen-token misuse, PII handling in prompts); detailed competitor teardowns (Cyata, SGNL, Aim, Tenable, CyberArk, Lumos, Astrix, Conductor One, Veza); a sequence diagram of Slack → Orchestrator → LLM → MCP tool flow; an agent-type-vs-visibility matrix with 8 numbered TODOs; concrete next-step research tasks against Google Workspace OAuth/SAML logs, Snowflake `LOGIN_HISTORY` / `OAUTH_CLIENT_USAGE`, Jamf inventory, and MCP authorization spec; consolidated 5-goal vision: discover agents in use (managed + unmanaged), discover unused agents, discover identities using agents, discover resources/permissions used by agents, discover agent-to-agent connectivity.

**Validity post-Apr 26 pivot:** **VALID.**
Discovery-focused; orthogonal to the gateway question. SGNL/Aim sections directly inform gateway design (both vendors describe MCP-gateway-style enforcement) — these become more, not less, relevant. Strengthens the case for the pivot rather than being invalidated by it.

---

## 3. "Mar 3 PRD / spec" — same as target #1

There is no separate "Mar 3 PRD" page distinct from the Agentic AI Identities epic. The epic was last edited 2026-03-03 and is the spec. See §1 above.

A related concept doc exists at https://www.notion.so/256259f6555980cd88c6f828b34efaf3 ("Agentic AI Identity (WIP)", last edited 2025-11-09) — covered separately as §5 because it carries the abbreviated 5-capability framing.

---

## 4. The 10 capabilities (architecture-side capability list)

- **Source:** the "Which capabilities are needed for a great Agentic AI Identity solution?" table inside the [Agentic AI Identities epic](https://www.notion.so/262259f655598091aaabfc5d58e38e96)
- **Backing reference:** an attached PDF on the page, `IAM_for_LLM-Based_AI_Agents.pdf` (the page presents the 10 capabilities with a "Based on [PDF]" caption — the PDF is the source these were lifted from)

**Capabilities (name + description + scope tier):**

| # | Capability | Description | Milestone tier (per epic) |
|---|---|---|---|
| 1 | Registration and identification | Uniquely identify and register AI agents across platforms | M1 |
| 2 | Ownership assignment | Assign human accountability for agent actions | M1 |
| 3 | Authentication | Verify agent identity before resource access | M2 |
| 4 | Authorization and delegation | Determine what agents can do and on whose behalf | M2 |
| 5 | Human oversight and approval | Define when humans must approve agent actions | M3 |
| 6 | Resource policy enforcement | Implement access controls at the resource level | M3 |
| 7 | Credential lifecycle management | Issue, rotate, and revoke agent credentials | M4 |
| 8 | Auditability and logging | Track all agent actions with comprehensive logs | M4 |
| 9 | Multi-agent collaboration | Support agent-to-agent communication and trust | M4 |
| 10 | Visibility and observability | Continuously monitor agent behavior and detect threats | M1 (basic) → M4 (advanced) |

**Validity post-Apr 26 pivot:** **VALID, with two implementation notes.**
- #5 and #6 are the MCP-Gateway-impacted capabilities. Capability descriptions hold — what's enforced and approved doesn't change. The change is *where* enforcement runs (Linx as policy decision point + gateway as enforcement point, vs Linx-only).
- #7 (credential lifecycle) is partially affected if the gateway issues short-lived per-call credentials — Linx may consume rather than originate these.

---

## 5. The 5 capabilities (concept doc framing)

- **Source:** [Agentic AI Identity (WIP)](https://www.notion.so/256259f6555980cd88c6f828b34efaf3), last edited 2025-11-09, under the "Core Capabilities for Agentic AI Identities" heading

**Capabilities as written:**
1. Discovery and explainability
2. Represent Shadow AI applications
3. Provide Governance capabilities to Provision and Deprovision access and tools
4. Provide contextual insight for each AI Asset
5. Create Issues and reports for AI assets

**Validity post-Apr 26 pivot:** **PARTIALLY VALID — but flag for human review.** The framing is older (Nov 9, 2025) and was superseded by the Mar 3 epic's 10-capability framing for engineering planning. It is still useful as a sales/positioning narrative.

### ⚠ 10 vs 5 discrepancy — discussion

These are **not the same list at different granularities** — they are two different framings written for two different audiences:

- The **10 capabilities** are *technical IAM primitives* (registration, auth, authorization, policy enforcement, credential lifecycle, …). They map to the IAM-for-LLM-Based-AI-Agents PDF and are the basis for milestone planning.
- The **5 capabilities** are *Linx product surfaces* (discovery, shadow-AI representation, provision/deprovision, contextual insight, issues+reports). They map to existing Linx feature areas.

Approximate cross-walk (best-effort, not 1:1):

| 5-capability framing | Roughly maps to 10-capability item(s) |
|---|---|
| Discovery and explainability | #1 Registration + #10 Visibility |
| Represent Shadow AI applications | #1 Registration + #10 Visibility (shadow agent slice) |
| Provision/Deprovision access and tools | #5 Human oversight + #7 Credential lifecycle |
| Contextual insight for each AI Asset | #4 Authorization + #10 Visibility |
| Create Issues and reports | #8 Auditability + #10 Visibility (anomaly detection) |

**Recommendation:** Drop the 5-capability framing from internal planning docs and standardize on the 10. Keep the 5-framing only for outward-facing positioning. Flag with PM owner before deleting.

---

## 6. Cycle 79 — AI priorities and the MCP Gateway reference

- **URL:** https://www.notion.so/342259f6555980c495becd0d5d680680
- **Last edited:** 2026-04-24

**Content extracted (other / context — only MCP-Gateway-relevant items):**
- **Item #8 in the Features list:** "MCP getaway - POC and how it works — \[PM\] to schedule with Sarit and Amir B." This is the *only* explicit Cycle 79 entry referencing the MCP Gateway. It is scoped as a **POC and how-it-works investigation** — i.e. discovery / spike, not a build commitment.
- The cycle otherwise focuses on: Linx Groups, Monday ITSM agent, AWS S3 JIT, Linx user management/RBAC, Custom attributes provisioning, System logs (governance logs), Autopilot Tuner, Tags creation, AI assistant taking actions (UAR + provisioning expansion), assistant quality push, Autopilot rollout, smart navigation from agent, AI assistant UI fixes, SQL-based connectors.
- Tangentially related: NAF nice-to-have item to "Expose Add contractor action via Linx MCP" (deferred to next cycle) — note this is *Linx exposing tools via MCP*, not the MCP Gateway.

**Validity post-Apr 26 pivot:** **VALID.** This page *is* the source of the pivot signal. Item #8 codifies the MCP Gateway as a Cycle 79 investigation. Anything that says "M3 is locked to the original Notion scope" pre-dates this and should be re-validated.

---

## 7. The 10 user scenarios (Notion source-of-truth)

- **Source:** [Agentic AI Identities epic](https://www.notion.so/262259f655598091aaabfc5d58e38e96), "User scenario" toggle

**Personas and needs (verbatim from Notion):**

| # | Persona | Need |
|---|---|---|
| 1 | IGA / IT Administrator – Discovery | I need to discover all agentic AI identities across cloud/SaaS so I can eliminate blind spots and reduce shadow agent risk. |
| 2 | IGA / IT Administrator – Relationship & Credential Mapping | I need to map the credentials, resources, and relationships each agent has in my organization, and see which users can leverage it, so I can understand its blast radius and enforce least privilege. |
| 3 | IGA / IT Administrator – Directory | I need a central directory of all agentic identities so I can continuously audit, manage, and track them. |
| 4 | Security Admin – Permission Tracing | I need to see how an agent gained specific permissions so I can detect privilege escalation and enforce least privilege. |
| 5 | Compliance Officer – Reporting | I need reports on agentic identity access and usage so I can meet audit and regulatory requirements. |
| 6 | Security Analyst – Risk Detection | I need to detect suspicious or risky privileges in AI agents so I can prioritize threats and prevent misuse. |
| 7 | Security Admin – Lifecycle Management | I need to know when agentic identities are created, modified, or orphaned so I can prevent unmanaged or abandoned agents from persisting. |
| 8 | IT Admin – Ownership & Accountability | I need to assign owners to each agentic identity so I can enforce accountability and ensure proper oversight. |
| 9 | Security Analyst – Incident Response | I need to trace and investigate agent activity during a security incident so I can quickly contain malicious or compromised agents. |
| 10 | CISO / Security Leadership – Visibility Dashboard | I need a high-level view of agentic identity risks and trends so I can measure exposure and report risk posture to executives. |

**Validity post-Apr 26 pivot:** **VALID.** The scenarios are user-need statements that don't reference enforcement architecture. None are invalidated by an MCP Gateway pivot. Scenario #4 (permission tracing) and #2 (credential/blast-radius mapping) actually become *easier* to satisfy if a gateway is on-path because the gateway gives a single observation point.

**ai-governance-core.md reconciliation:** Cannot be performed in this environment (file not present). Use the table above as the canonical Notion list and diff against `ai-governance-core.md` lines 131-145 locally. **One known-divergence to look for:** the WIP concept doc (§5) lists only 9 user stories — it's missing scenario #2 ("Relationship & Credential Mapping"). If `ai-governance-core.md` was lifted from the WIP doc rather than the epic, scenario #2 will be the one missing.

---

## 8. Other Amir-prep pages

### 8a. High level multi-agents architecture

- **URL:** https://www.notion.so/2f0259f65559807f8e67c5fd018803ed
- **Last edited:** 2026-01-22
- **Parent:** Multi-Agent System epic

**Architecture / spec summary:** Defines the agent topology in two layers: a **Co-pilot / Linx agent** (single user-facing agent, manual-trigger only, swiss-knife scope, owns all chat) plus **Proactive agents** (specialized, can be triggered by schedule / Linx events / external calls, each with its own purpose, instructions, knowledge sources, tools, RBAC, and audit log). Adds **Linx Agentic Interfaces** as a third concern — the integration surface (MCP, Microsoft Security Skills, n8n node, OpenAPI service) that lets external agentic platforms call into Linx. Separately documents general-product AI capabilities (prompt-based AI enhancements, organizational knowledge as Custom Skills + Personalization), AI Backbone (graph-based identity fabric must be AI-native and AI-friendly), AI Infra (browsing agent, investigation agent, query builder agent), and innovation tracks (integration code builder, browser-based connector).

**Validity post-Apr 26 pivot:** **VALID.** The architecture treats MCP as one interface among several; gateway-style enforcement slots in cleanly under "Linx Agentic Interfaces" and the AI Infra layer. No rework needed.

### 8b. Multi-Agent System epic

- **URL:** https://www.notion.so/2cb259f6555980daa029d63adf59bc86
- **Last edited:** 2026-02-23
- **Status:** In Product Design
- **Tag:** MVP

**Architecture / spec summary:** Productizes the proactive-agent layer described in 8a. Specifies **6 specialized agents** (Security Guardian "Hawkeye", UAR Reviewer Agent, Access Request Approver Agent, Access Architect Agent, Knowledge Guide Agent, Task Orchestrator Agent), with the UI showing 5 specialized cards plus the main Linx AI agent. Defines a Crawl/Walk/Run roadmap across 9 dimensions (multi-agent, instructions/learning, knowledge source, triggers, custom limitations, output/tool use, task management, UI/approval flow, RBAC, agent management, monitoring). P0 functional requirements cover agent definitions, agent management UI, agent presentation/selection, chat history with agent context, per-tenant per-user agent storage, instruction free-text (1000 char), task scheduling, retry logic, task management ops, task completion UX, HTML report generation. P1+ covers custom agents, name editing, quotas, event-based triggers, advanced approval flows, RBAC. Includes ~25 use-case examples (privileged access drift, onboarding analysis, profile tuning, dormant accounts, etc.).

**Validity post-Apr 26 pivot:** **VALID.** Multi-agent product is a separate concern from the Agentic AI Identity discovery/governance epic. Gateway pivot doesn't touch it. ⚠ Note the naming-collision risk: "Multi-Agent System" (Linx's own agents) is easy to confuse in conversation with "Multi-agent collaboration" (capability #9 in §4 — *external* agent-to-agent governance).

### 8c. Linx AI Agent – Orchestration Capabilities

- **URL:** https://www.notion.so/25a259f655598031b860e9c448f44be2
- **Last edited:** 2025-09-08

**Content summary (capabilities + personas):** Sets the four-tier maturity model for Linx AI Agent (Investigation → Recommendation → Generation On-Demand → Autonomous Execution) and reports current state as "entering phase 3 while completing phase 2." Lists **5 Agent Infrastructure capabilities** (Saved Chats, Scheduled Queries & Action Flows, Delegated AI Assistants/RBAC, Graph & Widget Generation, Cross-System Governance Actions via MCP) and **8 Agent-Powered Features** (Create UAR Campaigns, Create Workflows from Natural Language, End-User Access Request Recommendation, Agent as Reviewer Policy, Create Custom Issues, Integration Walkthrough, Simulation & What-If Analysis, AI-Powered Adaptive Governance). Also lists **6 personas** (IGA/IT Admin, Compliance Officer, Application Owner, End User, Manager/Reviewer, CISO/Security Executive) with primary goals + key use cases each.

**Validity post-Apr 26 pivot:** **PARTIALLY VALID.** The "Cross-System Governance Actions (MCP)" infrastructure capability described it as "Build and maintain Linx MCP" with "AI maps intent to actions across systems." A gateway pivot would re-frame this as "Linx as the policy decision/management plane *over* the gateway" rather than "Linx ships its own MCP." Description of the capability is still right; ownership boundary needs adjusting.

⚠ Possible "5 capabilities" alternate candidate: the **5 Agent Infrastructure capabilities** in this doc could also be what the user's task refers to — they're a 5-item capability list and they appear in a doc clearly different from the 10-capability framing. The §5 framing (Agentic AI Identity WIP) is still the more likely intended target because it sits in the same conceptual territory as the 10 (governance of external AI agents) rather than the orchestration-of-Linx-own-agents territory. **Flag to PM owner to confirm.**

### 8d. Press release

- **URL:** https://www.notion.so/30b259f655598007b1d9c2c870d202f4
- **Last edited:** 2026-03-11
- **Owner:** Victoria; contributor Niv
- **Date / event:** RSA 2026, March 19, 2026 launch date

**Content summary (other / context):** PR draft for the **Autopilot** product launch (NOT for Agentic AI Identities). Positions Autopilot as continuous, independent AI execution for identity security — virtual security operator that monitors 24/7, evaluates risk in context, takes action in real time, with intelligent triggers (privileged access changes, departmental moves, responsibility shifts) and escalation to humans when oversight is required. Quotes from Dor Renert (VP Product), Niv Goldenberg (CPO), Israel Duanis (CEO).

**Validity post-Apr 26 pivot:** **VALID** for Autopilot (its own launch). **Not directly relevant to the Agentic AI Identities track** — included only because target #7 listed "Press release pages mentioned in Amir prep." If a separate Agentic AI Identities press release exists, it was not surfaced in the searches and may not yet be drafted.

---

## 9. User scenarios / personas / use cases for AI Governance — consolidated

Pulled from across the pages above:

**Personas with explicit use cases (from Linx AI Agent Orchestration Capabilities, §8c):**
- **IGA / IT Administrator** — Query integration sync status; create workflows/profiles/policies from natural language; maintain governance over time
- **Compliance Officer** — Auto-generate UAR campaigns; receive AI recommendations for reviews; configure AI as semi-autonomous reviewer
- **Application Owner** — Review user access recommendations for their app; configure JIT policies; auto-create downstream tickets
- **End User** — AI recommends access needed for role; auto-drafts access requests; view own current access
- **Manager / Reviewer** — Review access efficiently; track and execute on tasks
- **CISO / Security Executive** — Risk & trend insights; team performance tracking; governance health dashboards; strategic recommendations; build custom dashboards

**Personas for Agentic AI Identities specifically:** see §7 (10 user scenarios spanning IGA/IT Admin, Security Admin, Compliance Officer, Security Analyst, IT Admin, CISO).

**Validity post-Apr 26 pivot:** **VALID.** Persona-level needs are stable.

---

## 10. Reconciliation summary

| Reconciliation item | Status |
|---|---|
| 10 user scenarios in `ai-governance-core.md` (lines 131-145) vs Notion source | **NOT RECONCILED** — file not present in environment. §7 above provides the verbatim Notion list for offline diff. Watch for missing scenario #2 (Relationship & Credential Mapping) if the local file was lifted from the older WIP concept doc. |
| 10 capabilities (PDF / epic) vs 5 capabilities (concept doc) | **DISCREPANCY CONFIRMED & EXPLAINED** — see §5. They're two different framings (technical IAM primitives vs Linx product surfaces), not granularity variants. Ambiguity exists about whether the "5 capabilities" target refers to the WIP concept doc (§5) or the Orchestration Capabilities infra list (§8c). Flag to PM owner. |
| Notion M3 scope (full) vs Linear M3 scope (narrowed, struck-through) | **NOT RECONCILED** — Linear MCP not invoked. Notion M3 scope captured in §1 for offline diff against the linked Linear project. |

---

## 11. Net implication for the May 8 commit

Lift-and-validate is the right call. Concretely:
- **§4 (10 capabilities) and §7 (10 user scenarios)** are stable enough to ship into the requirements draft as-is, with one note appended to capabilities #5/#6 about gateway-mediated enforcement.
- **§1 milestone breakdown M0/M1/M2** can be lifted directly. M3 needs a delta paragraph describing the gateway pivot. M4 unaffected.
- **§8a architecture** is still correct as the umbrella picture; the gateway slots in under "Linx Agentic Interfaces."
- **§5 (5-capability framing)** should be deprecated from planning docs, kept only for outward narrative.
- **What still needs net-new drafting:** (1) MCP Gateway architecture deltas to M3, (2) reconciliation of "Cross-System Governance Actions (MCP)" capability ownership in §8c, (3) anything found in `ai-governance-core.md` that is *not* in §7 above.

---

## References (Notion sources cited above)

| # | Page | Last edited |
|---|---|---|
| 1 | [Agentic AI Identities (epic)](https://www.notion.so/262259f655598091aaabfc5d58e38e96) | 2026-03-03 |
| 2 | [AI Agents research](https://www.notion.so/248259f6555980fdb580f06fb360c16e) | 2026-04-23 |
| 3 | [Agentic AI Identity (WIP) — concept doc](https://www.notion.so/256259f6555980cd88c6f828b34efaf3) | 2025-11-09 |
| 4 | [Cycle 79 priorities](https://www.notion.so/342259f6555980c495becd0d5d680680) | 2026-04-24 |
| 5 | [Multi-Agent System (epic)](https://www.notion.so/2cb259f6555980daa029d63adf59bc86) | 2026-02-23 |
| 6 | [High level multi-agents architecture](https://www.notion.so/2f0259f65559807f8e67c5fd018803ed) | 2026-01-22 |
| 7 | [Linx AI Agent – Orchestration Capabilities](https://www.notion.so/25a259f655598031b860e9c448f44be2) | 2025-09-08 |
| 8 | [Press release (Autopilot)](https://www.notion.so/30b259f655598007b1d9c2c870d202f4) | 2026-03-11 |
