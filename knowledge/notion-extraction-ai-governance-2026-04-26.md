# Notion Extraction — AI Governance / Agentic Identities

**Generated:** 2026-04-26  
**Ingested into repo:** 2026-04-27  
**Source:** Linx Claude MCP against Omer's 15-page Notion list  
**Purpose:** Source-of-truth pull from Notion to feed May 8 requirements draft.

---

## The 10 Capabilities (canonical — sourced from Agentic AI Identities epic)

Based on `IAM_for_LLM-Based_AI_Agents.pdf` (attached to epic).

| # | Capability | Description | Milestone |
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

Post-Apr 26 pivot notes: #5 and #6 become gateway-mediated enforcement (Linx = policy decision point, gateway = enforcement point). #7 partially affected if gateway issues short-lived per-call credentials.

---

## The 10 User Scenarios (canonical — sourced from Agentic AI Identities epic)

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

Known divergence: WIP concept doc (Nov 2025) listed only 9 — missing #2 (Relationship & Credential Mapping). If ai-governance-core.md was lifted from WIP, #2 will be absent.

---

## Milestone Breakdown (M0–M4)

From Agentic AI Identities epic (last edited 2026-03-03). M0/M1/M2 unaffected by Apr 26 MCP Gateway pivot. M3 partially affected.

- **M0:** Foundation/infrastructure
- **M1:** Discovery, inventory, ownership, basic visibility (capabilities #1, #2, #10 basic)
- **M2:** Authentication, authorization visibility (capabilities #3, #4)
- **M3:** Human oversight, resource policy enforcement, JIT, UARs, least-privilege analysis (capabilities #5, #6) — enforcement now gateway-mediated post-pivot
- **M4:** Credential lifecycle, full auditability, multi-agent collaboration, advanced observability (capabilities #7, #8, #9, #10 advanced)

---

## 5-Capability Framing (older — positioning use only)

Source: Agentic AI Identity WIP (last edited 2025-11-09). Superseded by 10-capability framing for engineering planning. Keep only for outward-facing positioning.

1. Discovery and explainability → maps to #1 + #10
2. Represent Shadow AI applications → maps to #1 + #10 (shadow slice)
3. Governance: Provision and Deprovision → maps to #5 + #7
4. Contextual insight per AI Asset → maps to #4 + #10
5. Issues and reports → maps to #8 + #10

Recommendation: drop from internal planning, standardize on 10.

---

## Cycle 79 — MCP Gateway Signal

Source: Notion Cycle 79 priorities (last edited 2026-04-24).

- Item #8: "MCP gateway - POC and how it works — [PM] to schedule with Sarit and Amir B."
- Scoped as **investigation/spike**, not a build commitment.
- This is the source of the Apr 26 pivot signal. M3 scope should be re-validated against this.

---

## Architecture Pages (Amir prep)

**High level multi-agents architecture** (Jan 2026): Two layers — Co-pilot/Linx agent (manual-trigger, swiss-knife) + Proactive agents (specialized, schedule/event triggered). Linx Agentic Interfaces = MCP, Microsoft Security Skills, n8n, OpenAPI. Gateway slots under "Linx Agentic Interfaces." Still valid post-pivot.

**Multi-Agent System epic** (Feb 2026): 6 specialized agents — Security Guardian "Hawkeye", UAR Reviewer, Access Request Approver, Access Architect, Knowledge Guide, Task Orchestrator. ⚠ Naming-collision risk: "Multi-Agent System" (Linx's own agents) vs "Multi-agent collaboration" (capability #9 — external agent-to-agent governance).

**Linx AI Agent Orchestration Capabilities** (Sep 2025): 4-tier maturity — Investigation → Recommendation → Generation On-Demand → Autonomous Execution. Current state: entering phase 3. "Cross-System Governance Actions via MCP" needs reframing post-pivot: Linx as policy decision/management plane over the gateway, not Linx ships its own MCP.

**Press release** (Mar 2026): Autopilot launch at RSA 2026. NOT Agentic AI Identities. No separate AI Governance press release found.

---

## Personas (from Orchestration Capabilities doc)

- IGA/IT Admin — query sync, create workflows/profiles/policies from natural language
- Compliance Officer — UAR campaigns, AI recommendations, semi-autonomous reviewer config
- Application Owner — review access recs, configure JIT, auto-create tickets
- End User — AI recommends access, auto-drafts requests, view own access
- Manager/Reviewer — efficient reviews, task execution
- CISO/Security Executive — risk insights, governance health, strategic recs, custom dashboards

---

## Net Implication for May 8 Commit

- §4 (10 capabilities) and §7 (10 user scenarios): stable, ship as-is with gateway note on #5/#6
- M0/M1/M2 milestone breakdown: lift directly
- M3: needs delta paragraph on gateway pivot
- M4: unaffected
- 5-capability framing: deprecate from planning docs
- Still needs net-new drafting: (1) MCP Gateway architecture deltas to M3, (2) "Cross-System Governance Actions" ownership reconciliation, (3) anything in ai-governance-core.md not in user scenarios above

---

## Notion Sources

| Page | Last edited |
|---|---|
| Agentic AI Identities (epic / canonical PRD) | 2026-03-03 |
| AI Agents research (Amir) | 2026-04-23 |
| Agentic AI Identity WIP (concept doc) | 2025-11-09 |
| Cycle 79 priorities | 2026-04-24 |
| Multi-Agent System epic | 2026-02-23 |
| High level multi-agents architecture | 2026-01-22 |
| Linx AI Agent Orchestration Capabilities | 2025-09-08 |
| Press release (Autopilot, not AI Gov) | 2026-03-11 |
