# Use Case → Requirements Mapping (Option A)

**Generated:** 2026-04-27  
**Inputs:**
- 10 user scenarios from `knowledge/notion-extraction-ai-governance-2026-04-26.md` (canonical, sourced from Agentic AI Identities Notion epic)
- 33 requirements from `references/gartner-833725-iam-for-llm-agents.md` (Gartner G00833725 IAM Requirements Framework)

**Purpose:** Build the precision lens between Linx's user scenarios and Gartner's requirements taxonomy. Output is the decision input for the May 8 scope commit — which scenarios are P0, what requirements they imply, and where Linx has gaps.

**How to use this doc:** Fill in the mapping table (§3) one scenario at a time. For each scenario, tag the requirements that scenario *requires* in order to be satisfied. Then read §4 (reverse view) — requirements that no scenario covers are candidates to descope; requirements that *every* scenario depends on are foundational P0.

**Filter using Dor's 3 chapters** (Registration / Policy / Enforcement) when assigning P0/P1/P2.

---

## §1 — The 33 Requirements (Gartner Framework)

### Observability (5)
- **R1** AI agent discovery
- **R2** Enhanced metadata capture
- **R3** Agent-specific behavioral baselining
- **R4** Behavioral monitoring and anomaly detection
- **R5** Threat detection and response

### Governance and Administration (5)
- **R6** Assigning ownership
- **R7** Defining policies
- **R8** Human oversight
- **R9** Governance frameworks (documentation of AI systems, capabilities, decision processes)
- **R10** Reviews and audits (periodic re-evaluation of agents and permissions)

### Issuance and Storage (6)
- **R11** Agents as a distinct constituency (treat agents as workload identity, separate from humans/apps)
- **R12** Registration and attestation workflows
- **R13** Leveraging existing protocols (OAuth foundation)
- **R14** Unique identifiers and metadata
- **R15** Supporting multiple credential types (token, mTLS cert, JWT, etc.)
- **R16** Auto-discovery of agents

### Authentication (3)
- **R17** Dynamic and just-in-time access (short-lived, task-specific credentials)
- **R18** Enabling strong authentication (token-based, mTLS, private key JWT)
- **R19** Mutual authentication for multiagent collaboration

### Authorization (6)
- **R20** Fine-grained access control
- **R21** Context-aware access control (risk + real-time behavior)
- **R22** Resource-level access control
- **R23** Delegation of authority (mechanisms to delegate from human → agent)
- **R24** Human-in-the-loop authorization flows
- **R25** Rich authorization requests (RAR — agent describes intent in request)

### Federation (3)
- **R26** Trust agreement (between domains/orgs)
- **R27** Workload federation (workload identity → cross-domain token)
- **R28** Token exchange (preserve user identity as agent acts on their behalf)

### Monitoring (5)
- **R29** Detailed logging (all agent actions)
- **R30** Tracking delegated actions (clearly identify when agent acts for a specific user)
- **R31** Token activity monitoring (issuance, usage, revocation)
- **R32** Auditing delegation credentials
- **R33** Enforcing segregation of duties (SoD) (track which agents performed which actions, flag conflicts)

---

## §2 — The 10 User Scenarios (Notion epic)

| # | Persona | Need (verbatim) |
|---|---|---|
| **UC1** | IGA / IT Administrator – Discovery | I need to discover all agentic AI identities across cloud/SaaS so I can eliminate blind spots and reduce shadow agent risk. |
| **UC2** | IGA / IT Administrator – Relationship & Credential Mapping | I need to map the credentials, resources, and relationships each agent has in my organization, and see which users can leverage it, so I can understand its blast radius and enforce least privilege. |
| **UC3** | IGA / IT Administrator – Directory | I need a central directory of all agentic identities so I can continuously audit, manage, and track them. |
| **UC4** | Security Admin – Permission Tracing | I need to see how an agent gained specific permissions so I can detect privilege escalation and enforce least privilege. |
| **UC5** | Compliance Officer – Reporting | I need reports on agentic identity access and usage so I can meet audit and regulatory requirements. |
| **UC6** | Security Analyst – Risk Detection | I need to detect suspicious or risky privileges in AI agents so I can prioritize threats and prevent misuse. |
| **UC7** | Security Admin – Lifecycle Management | I need to know when agentic identities are created, modified, or orphaned so I can prevent unmanaged or abandoned agents from persisting. |
| **UC8** | IT Admin – Ownership & Accountability | I need to assign owners to each agentic identity so I can enforce accountability and ensure proper oversight. |
| **UC9** | Security Analyst – Incident Response | I need to trace and investigate agent activity during a security incident so I can quickly contain malicious or compromised agents. |
| **UC10** | CISO / Security Leadership – Visibility Dashboard | I need a high-level view of agentic identity risks and trends so I can measure exposure and report risk posture to executives. |

---

## §3 — Mapping Table (FILL THIS IN)

For each scenario, list the requirements (R1–R33) that the scenario depends on. Use **bold** for "must-have to satisfy this scenario", plain for "nice-to-have / depth dimension".

Pre-populated with first-pass guesses to seed thinking — challenge them, don't rubber-stamp.

| UC | Persona | Dor chapter | Required (must-have) | Supporting (nice-to-have) | P0/P1/P2 | Notes |
|---|---|---|---|---|---|---|
| UC1 | IGA – Discovery | Registration | **R1, R16** | R2, R14 | **P0** | Foundation. Without this nothing works. |
| UC2 | IGA – Credential Mapping | Registration + Policy | **R1, R2, R14, R22** | R20, R31 | **P0** | "Blast radius" view requires graph + resource-level visibility. |
| UC3 | IGA – Directory | Registration | **R11, R12, R14** | R10 | **P0** | The "Inventory > Agents" page. M1 partially shipped per Linear. |
| UC4 | Security Admin – Permission Tracing | Policy | **R20, R22, R23** | R6, R7 | P1 | Requires lineage, not just current state. |
| UC5 | Compliance Officer – Reporting | (cross-cutting) | **R10, R29, R30, R33** | R5 | P1 | Audit + SoD. Slack channel intel says UARs are surviving M3 item. |
| UC6 | Security Analyst – Risk Detection | (cross-cutting) | **R3, R4, R5** | R2, R29 | P1 | Behavioral baselining + anomaly detection. Linx's Issues engine partially covers. |
| UC7 | Security Admin – Lifecycle Management | Registration | **R7, R10, R12** | R6, R31 | **P0** | "AGENT_OWNER_OFFBOARDED" issue exists per building-blocks 4.2. |
| UC8 | IT Admin – Ownership & Accountability | Registration | **R6, R7** | R10 | **P0** | Cheapest, highest-leverage scenario. Foundational to everything else. |
| UC9 | Security Analyst – Incident Response | Enforcement + Audit | **R5, R29, R30, R31** | R32, R33 | P1 | Requires logs structured for query (building block 4.3 is open). |
| UC10 | CISO – Visibility Dashboard | (cross-cutting) | **R1, R2, R10** | R5, R29 | **P0** (lite) | The "executive view." Often the demo opener but rarely the demo hero. |

---

## §4 — Reverse View: Requirement Coverage

Once §3 is filled in, count how many scenarios depend on each requirement. Requirements with **0 scenario dependencies** are candidates to descope. Requirements with **6+ dependencies** are foundational and must be P0 plumbing.

| Req | Category | # of UCs that need this | Verdict |
|---|---|---|---|
| R1 AI agent discovery | Observability | (count) | Foundational |
| R2 Enhanced metadata capture | Observability | (count) | |
| R3 Behavioral baselining | Observability | (count) | |
| R4 Behavioral monitoring & anomaly | Observability | (count) | |
| R5 Threat detection & response | Observability | (count) | |
| R6 Assigning ownership | Governance | (count) | Foundational |
| R7 Defining policies | Governance | (count) | |
| R8 Human oversight | Governance | (count) | |
| R9 Governance frameworks | Governance | (count) | |
| R10 Reviews and audits | Governance | (count) | |
| R11 Agents as distinct constituency | Issuance | (count) | |
| R12 Registration & attestation | Issuance | (count) | Foundational |
| R13 Leveraging existing protocols | Issuance | (count) | |
| R14 Unique identifiers & metadata | Issuance | (count) | |
| R15 Multiple credential types | Issuance | (count) | |
| R16 Auto-discovery of agents | Issuance | (count) | |
| R17 Dynamic/JIT access | Authentication | (count) | |
| R18 Strong authentication | Authentication | (count) | |
| R19 Mutual auth (multiagent) | Authentication | (count) | M4 — defer per Gartner "A2A immature" |
| R20 Fine-grained access control | Authorization | (count) | |
| R21 Context-aware access control | Authorization | (count) | |
| R22 Resource-level access control | Authorization | (count) | |
| R23 Delegation of authority | Authorization | (count) | |
| R24 Human-in-the-loop authz flows | Authorization | (count) | |
| R25 Rich authorization requests | Authorization | (count) | |
| R26 Trust agreement | Federation | (count) | M4 |
| R27 Workload federation | Federation | (count) | M4 |
| R28 Token exchange | Federation | (count) | |
| R29 Detailed logging | Monitoring | (count) | Foundational |
| R30 Tracking delegated actions | Monitoring | (count) | |
| R31 Token activity monitoring | Monitoring | (count) | |
| R32 Auditing delegation credentials | Monitoring | (count) | |
| R33 Enforcing SoD | Monitoring | (count) | |

---

## §5 — Decision Outputs (after §3 + §4 are complete)

Fill in these three answers — they ARE the May 8 scope commit:

1. **P0 scenarios:** _(list)_
2. **Foundational requirements (P0 plumbing):** _(list, drawn from §4 Foundational column)_
3. **Descoped scenarios + rationale:** _(list, with one-sentence justification each)_

---

## §6 — Stress Test (mandatory — apply before declaring done)

What's weakest in this analysis? Audit yourself against these:

- Did you over-rely on the Notion 10 scenarios? They're the Linx canon, but the **2026-04-26 EOD log entry** flagged that "only 2 of Mor's 5 sketch items are actual user-facing scenarios" — suggesting scenario hygiene is uneven.
- Did you under-weight the **Apr 26 MCP Gateway pivot**? Capabilities #5 and #6 (= R7, R8, R20, R22 in this taxonomy) became gateway-mediated. Several scenarios may be more or less feasible than they look on paper.
- Did you treat the 10 user scenarios as static, or did you add scenarios that **emerged from the competitive teardown** (e.g., "I want to revoke an agent in <5s when Datadog flags an anomaly" — currently nowhere)?
- A smart competitor at Niv's level would say: "your scenarios are all admin-side. Where's the developer / agent-author scenario? Where's the end-user-of-the-agent scenario?" — what's your answer?

---

## §7 — Sources

- 10 user scenarios: `knowledge/notion-extraction-ai-governance-2026-04-26.md` § 7
- 33 requirements: `references/gartner-833725-iam-for-llm-agents.md` § Key IAM Requirements Framework
- Dor's 3 chapters: `building-blocks.md` (top of file, 2026-04-27)
- Building blocks status: `building-blocks.md`
- Open scope-blocking questions: `discovery-plan.md` Q1, Q4, Q5, Q6, Q7
