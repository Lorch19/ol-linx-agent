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

> **Vocabulary watch (added 2026-04-28 walkthrough):** the 7 Gartner categories below are *not* Dor's 3 chapters. Dor: Registration / Policy / Enforcement. Gartner: Observability, Governance & Administration, Issuance & Storage, Authentication, Authorization, Federation, Monitoring. "Enforcement" sounds like a Gartner category but isn't one — it's Dor's framing for the Authorization + Federation + parts of Authentication clusters. Keep vocabularies separate when speaking to Niv/Dor.

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

## §3 — Mapping Table (FIRST-PASS COMPLETE — 2026-04-27)

**Bold** = must-have. Plain = supporting/depth.

| UC | Persona | Dor chapter | Required (must-have) | Supporting | P0/P1/P2 | Reasoning |
|---|---|---|---|---|---|---|
| UC1 | IGA – Discovery | Registration | **R1, R2, R16** | R11, R14 | **P0** | "Discover all agents" = R1 + R16 by definition. R2 (metadata) is what makes discovery useful — a list of names without context is not a deliverable. |
| UC2 | IGA – Credential Mapping | Registration + Policy | **R1, R2, R14, R20, R22, R23** | R30, R31 | **P0** | THE wedge. "Which users can leverage it" = delegation (R23). "Resources" = R22. "Blast radius" needs graph (R2 + R14). C1 has IGA graph but not Linx's; Astrix has NHI graph but not multi-IdP. |
| UC3 | IGA – Directory | Registration | **R1, R11, R12, R14** | R6, R10, R31 | **P0** | The Inventory > Agents page. R11 is the conceptual foundation (agents as their own constituency). R12 is how they get in. R10 = "continuously audit." |
| UC4 | Security Admin – Permission Tracing | Policy | **R20, R22, R23, R29** | R6, R7, R30 | P1 | "How an agent gained" = lineage trace. Requires logging (R29) AND the policy/role substrate. Hard build, downstream of foundations. |
| UC5 | Compliance Officer – Reporting | Audit | **R10, R29, R30, R33** | R5, R9, R32 | P1 | UARs (R10) + log feed (R29) + delegated-action attribution (R30) + SoD/toxic-combo (R33). UARs are the M3 surviving item. |
| UC6 | Security Analyst – Risk Detection | Audit | **R3, R4, R5** | R2, R20, R22, R29 | P1 | Behavioral baselining (R3) is the heaviest lift in the framework. Linx Issues engine (M1) partially covers R5 (rules), not R3-R4 (real baselining). |
| UC7 | Security Admin – Lifecycle | Registration + Audit | **R6, R7, R10, R12** | R29, R31 | **P0** | JML for agents. Hero moment Option A candidate. AGENT_OWNER_OFFBOARDED already shipped (M1, building-block 4.2). Highest leverage on existing infra. |
| UC8 | IT Admin – Ownership | Registration | **R6, R7** | R10, R12 | **P0** | Pure governance metadata. Cheapest scenario in the set. Pre-requisite for UC7 (orphan detection needs ownership) and UC4 (accountability). |
| UC9 | Security Analyst – Incident Response | Enforcement + Audit | **R5, R29, R30, R31** | R4, R32, R33 | P1 | Trace + contain. Building block 4.3 (audit trace / search / replay) is OPEN. Logs need structured-for-query schema. P1 because dependency-blocked, not because low value. |
| UC10 | CISO – Visibility Dashboard | Cross-cutting | **R1, R2, R5, R10** | R3, R29 | **P0** (lite) | Falls out of P0 foundations nearly free. Counts + risk view + trend = aggregations over R1+R2+R5+R10. Demo opener. |

---

## §4 — Reverse View: Requirement Coverage

Count = `must-have UCs` + `supporting UCs` (must-haves weight more in verdict).

| Req | Category | Must | Supp | Total | Verdict |
|---|---|---|---|---|---|
| R1 AI agent discovery | Observability | 4 (UC1, UC2, UC3, UC10) | 0 | **4** | **FOUNDATIONAL** |
| R2 Enhanced metadata capture | Observability | 3 (UC1, UC2, UC10) | 1 (UC6) | **4** | **FOUNDATIONAL** |
| R3 Behavioral baselining | Observability | 1 (UC6) | 1 (UC10) | 2 | P1 — heavy lift, single must-have UC |
| R4 Behavioral monitoring & anomaly | Observability | 1 (UC6) | 1 (UC9) | 2 | P1 — same cluster as R3 |
| R5 Threat detection & response | Observability | 3 (UC6, UC9, UC10) | 1 (UC5) | **4** | P0 — Issues engine (M1) partial cover |
| R6 Assigning ownership | Governance | 2 (UC7, UC8) | 2 (UC3, UC4) | **4** | **FOUNDATIONAL** |
| R7 Defining policies | Governance | 2 (UC7, UC8) | 1 (UC4) | 3 | P0 — but means metadata, not enforcement, in P0 |
| R8 Human oversight | Governance | 0 | 0 | **0** | **GAP — see §6 stress test** |
| R9 Governance frameworks | Governance | 0 | 1 (UC5) | 1 | Descope — documentation, not user-facing |
| R10 Reviews and audits | Governance | 4 (UC3, UC5, UC7, UC10) | 1 (UC8) | **5** | **FOUNDATIONAL** |
| R11 Agents as distinct constituency | Issuance | 1 (UC3) | 1 (UC1) | 2 | P0 plumbing — implicit in directory |
| R12 Registration & attestation | Issuance | 2 (UC3, UC7) | 1 (UC8) | 3 | P0 |
| R13 Leveraging existing protocols (OAuth) | Issuance | 0 | 0 | **0** | Plumbing — not a user scenario, but P0 by default for L2 |
| R14 Unique identifiers & metadata | Issuance | 2 (UC2, UC3) | 1 (UC1) | 3 | P0 |
| R15 Multiple credential types | Issuance | 0 | 0 | **0** | Descope for P0 — single token type acceptable |
| R16 Auto-discovery of agents | Issuance | 1 (UC1) | 0 | 1 | P0 — UC1 hero requirement |
| R17 Dynamic/JIT access | Authentication | 0 | 0 | **0** | **GAP — implicit in JIT approval hero** |
| R18 Strong authentication | Authentication | 0 | 0 | **0** | Plumbing — assume mTLS/JWT for P0 |
| R19 Mutual auth (multiagent) | Authentication | 0 | 0 | **0** | M4 defer — Gartner: "A2A immature" |
| R20 Fine-grained access control | Authorization | 2 (UC2, UC4) | 1 (UC6) | 3 | P0 — visibility scope (read), not enforcement scope |
| R21 Context-aware access control | Authorization | 0 | 0 | **0** | **GAP — runtime risk awareness missing from UCs** |
| R22 Resource-level access control | Authorization | 2 (UC2, UC4) | 1 (UC6) | 3 | P0 — needed for blast-radius graph |
| R23 Delegation of authority | Authorization | 2 (UC2, UC4) | 0 | 2 | P0 — UC2 is the wedge |
| R24 Human-in-the-loop authz flows | Authorization | 0 | 0 | **0** | **MAJOR GAP — JIT approval hero (Q7-C) has no UC sponsor** |
| R25 Rich authorization requests (RAR) | Authorization | 0 | 0 | **0** | Descope or M4 |
| R26 Trust agreement | Federation | 0 | 0 | **0** | M4 |
| R27 Workload federation | Federation | 0 | 0 | **0** | M4 |
| R28 Token exchange (RFC 8693) | Federation | 0 | 0 | **0** | **GAP — Ping's flagship; should Linx care?** |
| R29 Detailed logging | Monitoring | 3 (UC4, UC5, UC9) | 3 (UC6, UC7, UC10) | **6** | **FOUNDATIONAL — highest coverage** |
| R30 Tracking delegated actions | Monitoring | 2 (UC5, UC9) | 1 (UC4) | 3 | P0 |
| R31 Token activity monitoring | Monitoring | 1 (UC9) | 3 (UC2, UC3, UC7) | **4** | P0 |
| R32 Auditing delegation credentials | Monitoring | 0 | 2 (UC5, UC9) | 2 | P1 |
| R33 Enforcing SoD | Monitoring | 1 (UC5) | 1 (UC9) | 2 | P1 — toxic-combo differentiator (per `building-blocks` cross-cutting) |

---

## §5 — Decision Outputs (FIRST-PASS — 2026-04-27)

### 1. P0 scenarios — 6 of 10

- **UC1 Discovery** — without it nothing else works
- **UC2 Credential Mapping** — THE wedge. Multi-IdP graph + delegation + resource-level visibility. C1 has graph-not-Linx's, Astrix has NHI graph not multi-IdP, Ping has neither
- **UC3 Directory** — the Inventory > Agents page. M1 partially shipped
- **UC7 Lifecycle / JML** — Hero moment Option A candidate. AGENT_OWNER_OFFBOARDED already exists
- **UC8 Ownership** — cheapest in the set, prerequisite for UC4 + UC7
- **UC10 CISO Dashboard (lite)** — falls out of P0 foundations nearly free; demo opener

### 2. Foundational requirements (P0 plumbing — must build, unlocks 6/10 UCs)

Five requirements with ≥4 scenario dependencies AND must-have weight:

- **R29 Detailed logging** (6 UCs) — highest coverage, the substrate for UC4/5/9 lineage and audit
- **R10 Reviews and audits** (5 UCs) — the directory's "continuous audit" + UAR hook
- **R1 AI agent discovery** (4 UCs) — discovery as a primitive
- **R2 Enhanced metadata capture** (4 UCs) — what makes discovery useful
- **R6 Assigning ownership** (4 UCs) — accountability spine for UC4/7/8

Plus three P0-tier supporting plumbing (each in 3 P0 UCs):
- **R12 Registration & attestation** (UC3, UC7, UC8 supp)
- **R14 Unique identifiers & metadata** (UC2, UC3, UC1 supp)
- **R31 Token activity monitoring** (UC9 + UC2/3/7 supp)

### 3. Sequenced (P1) — not descoped, but post-P0

- **UC4 Permission Tracing** — needs lineage on top of R29 + R20-23. Hard build.
- **UC5 Compliance Reporting** — UAR layer on top of foundational logging. M3 surviving item.
- **UC6 Risk Detection** — R3-R4 (behavioral baselining) is the heaviest framework lift; Issues engine partial cover acceptable for v1
- **UC9 Incident Response** — building block 4.3 (audit trace / search / replay) is OPEN; logs need structured-for-query schema first

### 4. M4 / out-of-scope (Gartner-aligned)

- **R19, R26, R27** — A2A / cross-domain federation. Gartner says "A2A immature for production." Defer.
- **R25** — Rich authorization requests. M4 or descope.

### 5. Pure descope (zero-coverage with no strategic backstop)

- **R9 Governance frameworks documentation** — back-office docs, not user-facing
- **R15 Multiple credential types** — single token type sufficient for P0
- **R18 Strong authentication** — assume mTLS/JWT plumbing, not a UC

---

## §6 — Stress Test (with concrete findings)

### Finding 1 — FOUR requirements have zero UC coverage but are strategically critical

- **R8 Human oversight** — 0 UCs. The Notion 10 are all admin-side (discover, audit, govern). Where's the *agent author* or *agent end user* perspective?
- **R17 Dynamic / JIT access** — 0 UCs. But this is implicit in any "scoped credential at session start" architecture (Astrix's model). If P0 issues credentials at all, R17 is in P0 by stealth.
- **R21 Context-aware access control** — 0 UCs. Runtime risk-awareness ("agent is making 100 calls/min, throttle") is entirely missing from the user-facing scenario set. This is what Datadog/runtime competitors will use to differentiate.
- **R24 Human-in-the-loop authz flows** — 0 UCs. **This is the single most important gap.** Q7 hero moment Option C ("JIT approval — agent requests sensitive write, admin approves live") depends entirely on R24, but no UC sponsors it. Either:
  - **(a) Add UC11** — "Security Admin – Live approval: I need to approve sensitive agent actions in real time so I can demonstrate live control." This makes Option C a legitimate P0.
  - **(b) Drop Option C** as a hero candidate and lean on UC7 JML (Option A) instead.

**Recommendation:** Resolve before May 8. Currently the hero moment menu is decoupled from the scenario set.

### Finding 2 — R28 (Token exchange / RFC 8693) has zero coverage but is Ping's flagship

Ping's "Agent IAM Core" is built on RFC 8693 token exchange and OBO flows. If Linx ignores R28, every Ping side-by-side comparison ends with "Linx doesn't preserve user identity in delegated calls." Either:
- **(a)** Add R28 to P0 plumbing (modest lift if delegation graph already exists) — wins the comparison
- **(b)** Accept the gap and counter with: "we expose delegation in the graph, Ping exposes it in the token — different layer of the stack"

**Recommendation:** Discuss with Niv/Dor — this is positioning, not engineering.

### Finding 3 — All 10 UCs are admin-side. Where are the developer / agent-author / end-user scenarios?

A smart competitor at Niv's level will say: "your scenarios assume someone has already built and deployed an agent. Where's the developer who's *registering* the agent for the first time? Where's the end user of the agent who needs visibility into what the agent is doing on their behalf?"

The Notion epic was written from the IT/security buyer perspective. That's defensible — that's the buyer. But the demo will fall flat if no one ever sees the registration flow from the developer's side, or the consent/visibility flow from the end-user side.

**Recommendation:** Add 1-2 non-admin scenarios for completeness, even if they're P2:
- **UC11 (proposed)** — Developer/agent-author: "I need to register my agent for an environment so it can access tools without my admin manually granting each scope"
- **UC12 (proposed)** — End user of agent: "I need visibility into actions the agent took on my behalf so I can trust and audit it"

### Finding 4 — Apr 26 MCP Gateway pivot didn't fundamentally change the mapping

R20, R22, R7 (the "policy at gateway" capabilities) only land as supporting, not must-have, in the user-facing scenarios — because the 10 UCs are about visibility/governance, not enforcement. **The MCP Gateway is the eng story; the user scenarios are still inventory + audit.** This is fine — but be honest in framing: P0 is "we see and govern," not "we block." Blocking-as-hero (Option D) needs a UC sponsor too.

### Finding 5 — Notion scenario hygiene check

Per 2026-04-26 EOD log: "only 2 of Mor's 5 sketch items are actual user-facing scenarios." Worth re-reading the 10 UCs to confirm UC4/UC9/UC10 are truly user scenarios and not capability descriptions in scenario clothing. Quick check: each UC is a 1st-person need with a clear "so I can [outcome]" — the 10 listed pass that test. ✓

---

## §7 — What this means for May 8 scope

**Recommended P0 scope statement (for the May 8 commit doc):**

> "Linx P0 covers Discover (UC1) → Map (UC2) → Govern (UC3 + UC7 + UC8) → Surface (UC10). Built on five foundational requirements (R1, R2, R6, R10, R29). Permission tracing (UC4), compliance reporting (UC5), risk detection (UC6), and incident response (UC9) are P1 — sequenced after foundations land. JIT live-approval (Option C hero) requires a new UC11 sponsor or it's not really P0."

**One-line summary:** 6 P0 scenarios, 5 foundational requirements, 1 unsponsored hero moment that needs a UC11 decision before May 8.

**Three things to take to Dor before May 8:**
1. Confirm 6 P0 / 4 P1 split is right — or push back which UC moves
2. Decide UC11 (live approval) — add or drop hero moment Option C
3. Decide R28 (token exchange) — close the Ping gap or accept it as positioning

---

## §8 — Sources

- 10 user scenarios: `knowledge/notion-extraction-ai-governance-2026-04-26.md` § 7
- 33 requirements: `references/gartner-833725-iam-for-llm-agents.md` § Key IAM Requirements Framework
- Dor's 3 chapters: `building-blocks.md` (top of file, 2026-04-27)
- Building blocks status: `building-blocks.md`
- Open scope-blocking questions: `discovery-plan.md` Q1, Q4, Q5, Q6, Q7
