# Identity Foundations — Omri's Cheatsheet

> Living reference. Started April 12, 2026 (Day 1).
> Rule: if you learn something new, add it here. This is your notebook, not a textbook.

---

## The Category Zoo

*What each acronym solves — and how they connect.*

| Category | Full Name | What It Solves | Fintech Equivalent | Linx Relevance |
|---|---|---|---|---|
| **IGA** | Identity Governance & Administration | Who *should* have access? Lifecycle, certifications, provisioning, compliance | KYC/compliance ops | Core — Linx covers IGA workflows (early stage vs. SailPoint/Saviynt) |
| **ISPM** | Identity Security Posture Management | What's *already broken*? Misconfigs, dormant accounts, over-privileges | Risk scoring / exposure analytics | Core — Linx bridges IGA + ISPM on a single graph |
| **ITDR** | Identity Threat Detection & Response | Who's *behaving suspiciously* right now? Anomalous identity activity in real-time | Fraud detection / transaction monitoring | Adjacent — Linx touches via analytics, not primary focus |
| **PAM** | Privileged Access Management | Controls high-impact access (admin, root, break-glass) | Root access to core banking systems | Not Linx's space — CyberArk owns this |
| **CIEM** | Cloud Infrastructure Entitlement Management | Right-sizing permissions in cloud (AWS/Azure/GCP IAM) | Cloud cost optimization but for permissions | Not current Linx focus |
| **NHI** | Non-Human Identity (platforms) | Governing machine identities: service accounts, API keys, AI agents | API keys, trading bots, service accounts | Strategic — but Omer says Linx drawing away from NHI currently (validate with Dor) |
| **CNAPP** | Cloud-Native Application Protection Platform | Unified cloud security: workload protection, posture management, vulnerability scanning, runtime protection across cloud-native apps | Unified risk platform for cloud-native fintech infra | Adjacent — CNAPP vendors (Wiz, Palo Alto Prisma) increasingly touch identity (CIEM). Watch for convergence with identity security. |

**Key relationship:** IGA is about who *should* have access. ISPM is about what's *already broken*. ITDR is about who's *attacking* right now. They're layers, not competitors. A CISO needs all three but buys them separately — that's the buyer pain.

---

## Key Terms & Glossary

| Term | What It Means | Fintech Bridge | Why It Matters |
|---|---|---|---|
| **ITSM** | IT Service Management (ServiceNow, Jira Service Desk). The ticketing system IT uses to manage requests, incidents, changes. | Ops ticketing / support workflow | IGA provisioning often falls back to ITSM tickets when apps don't support SCIM. "Create a ticket for an admin to manually revoke" — slow but pragmatic. |
| **SCIM** | System for Cross-domain Identity Management. Standard API protocol for provisioning/deprovisioning users in SaaS apps. | PSD2 / Open Banking APIs but for identity | The "rails" that make automated provisioning possible. Not all apps support it — that's the connector problem. |
| **JML** | Joiner-Mover-Leaver. The identity lifecycle. | Client onboarding/offboarding | Movers are the disaster — they accumulate permissions from every role (entitlement creep). |
| **SoD** | Segregation of Duties. Rules preventing toxic access combinations. | Maker-checker controls | Same concept you lived in fintech. Emerging gap: SoD for AI agents — nobody enforces it yet. |
| **JIT Access** | Just-In-Time Access. Temporary elevated permissions that auto-revoke. | Temporary elevated permissions for ops | Zero Standing Privileges is the goal — all elevated access is requested, justified, time-bound. |
| **CAEP** | Continuous Access Evaluation Protocol. Real-time signals between systems to revoke/adjust access instantly. | Real-time fraud signals between banks | Enables "revoke this person's access NOW" across all systems simultaneously. |
| **IdP** | Identity Provider. The central authentication system (Okta, Entra ID, Google Workspace). | Core banking auth system | The IdP handles authentication (who are you?). IGA handles authorization (what can you do?). Different layers. |
| **Entitlement** | A specific permission or access right within a system. | Permission set / authorization scope | What a user CAN do vs. what they SHOULD do. The gap = risk. |
| **Entitlement Creep** | Accumulation of permissions over time as roles change, without cleanup. | Unclosed credit lines across accounts | The #1 source of over-privileging. JML "mover" problem. |
| **Effective vs. Granted Permissions** | Granted = what the system says you have. Effective = what you can *actually* do when all inheritance, groups, and nested roles resolve. | Credit limit says $10K, but through linked accounts you can spend $50K | The gap between these is where security risk hides. Discovery tools must resolve effective permissions. |
| **Rubber-stamping** | Blind approval of access reviews. 95%+ approval rates = governance theater. | Blind approval of compliance questionnaires | The universal IGA failure mode. AI-assisted reviews aim to fix this. |
| **Access Graph** | Visualization of relationships between identities, resources, and permissions. | Transaction/relationship graph (PayPal/Stripe risk models) | Linx's core architecture. Enables ReBAC and relationship-based risk scoring. |
| **Orphaned Account** | An account with no living owner — usually a former employee's service account or SaaS login that was never deprovisioned. | Dormant accounts with open positions | Veza reports 38% of IdP accounts are dormant. Each one is an attack vector. |
| **Shadow IT** | SaaS apps adopted by business units without IT/security approval. | Unauthorized trading platforms | 30-50% of SaaS spend is unmanaged. Identity teams don't know these apps exist. |
| **RAG** | In AI context: Retrieval-Augmented Generation — feeding an LLM relevant documents before generating answers. In IGA context: less common, sometimes "Role-Access Governance." | N/A | AI agents use RAG to access company data. The identity question: *what data should the agent be allowed to retrieve?* This is the IAM-for-AI problem. |
| **CNAPP** | Cloud-Native Application Protection Platform. Secures cloud-native apps end-to-end: workload protection (CWPP), cloud posture (CSPM), entitlements (CIEM), vulnerability scanning, runtime protection. Wiz, Prisma Cloud, Lacework are leaders. | Unified risk platform for all cloud infra | CNAPP vendors are expanding into identity (CIEM is already a CNAPP module). Identity + cloud security convergence is a market trend to watch. Linx competes adjacently where CIEM overlaps with identity governance. |
| **Identity Fabric** | Gartner concept: a unified identity data plane across all systems. Not a product — an architectural vision. | Financial data mesh / integration layer | Linx's graph is philosophically aligned with this concept. |
| **VIA Model** | Gartner's framework: Visibility → Intelligence → Action. Most vendors are strong on 1-2 layers, weak on the third. | See → Analyze → Act | Linx's Autopilot is the strongest "Action" layer in market (April 2026). Where to invest positioning. |
| **Connector** | Integration that lets an IGA platform read/write identity data from a target system (Salesforce, AWS, GitHub, etc.). | Bank integration / payment rails | Connector breadth is a competitive moat. SailPoint: 400+. ConductorOne: 300+. Linx: TBD (ask internally). |

---

## Authorization Models

*Three generations of answering "should this person have access?"*

### RBAC (Role-Based Access Control)
- **Logic:** You ARE a [role] → you GET [permissions]
- **Example:** You're an "Analyst" → read access to dashboards, Salesforce reports, Jira
- **Fintech equivalent:** Fixed tier permissions (Basic/Premium/Enterprise)
- **Strength:** Simple, auditable, easy to explain to auditors
- **Weakness:** Role explosion. 5K employees × 30 apps × 10 departments = thousands of roles. Doesn't scale.
- **Status:** Still dominant in enterprises. Being supplemented, not replaced.

### ABAC (Attribute-Based Access Control)
- **Logic:** IF [attributes match policy] → THEN [allow]
- **Attributes:** User (department, location, clearance) + Resource (classification, owner) + Context (time, device, network)
- **Example:** IF user.dept = "Finance" AND resource.class = "Confidential" AND time = "business hours" → ALLOW
- **Fintech equivalent:** Dynamic risk-based transaction limits
- **Strength:** Highly granular, no role explosion
- **Weakness:** Policies hard to write, harder to audit, nearly impossible to troubleshoot

### ReBAC (Relationship-Based Access Control)
- **Logic:** Access determined by your RELATIONSHIP to the resource, not your role
- **Example:** You manage Alice → you can see Alice's access reviews. You're on Team X → you access Team X's project docs.
- **Fintech equivalent:** Social/relationship graphs in P2P payments
- **Foundation:** Google Zanzibar (powers Drive, YouTube, etc.)
- **Strength:** Models how access actually works. Graph-native.
- **Weakness:** Requires a relationship graph. Most orgs don't have one.
- **Linx relevance:** Linx's identity graph IS a ReBAC-compatible architecture. Aligned with market direction.

**Industry direction:** RBAC → RBAC+ABAC hybrid → ReBAC. The graph wins long-term.

---

## The 7 Core IGA Use Cases

*The foundational workflows every IGA vendor is measured against.*

### UC1: Identity Lifecycle Management (JML)
- **What:** Joiner (hire) → Mover (role change) → Leaver (termination)
- **Fintech:** Client onboarding/offboarding
- **The killer problem:** Movers accumulate permissions. After 3 role changes = god-mode access. Entitlement creep.
- **Scale:** 5K-person company ≈ 2,500 role changes/year. 10% create orphaned permissions = 250 ticking bombs.

### UC2: Access Request & Approval
- **What:** Employee needs access → submits request → manager approves → system provisions
- **Fintech:** Wire transfer maker-checker workflows
- **Two failure modes:** Too slow (people find workarounds) or rubber-stamping (95%+ approval rates = theater)
- **What good looks like:** AI-assisted recommendations that reduce decision fatigue

### UC3: Access Certification (Access Reviews)
- **What:** Periodic campaigns where managers review all access their reports have
- **Fintech:** Periodic account reconciliation
- **#1 IGA pain point.** Manager gets 500 entitlements to review → doesn't understand half → approves all → auditor checks box → zero risk reduced
- **What good looks like:** Risk-based certs. AI handles obvious decisions. Humans decide edge cases. Linx Autopilot thesis.

### UC4: Provisioning & Deprovisioning
- **What:** Actually granting/revoking access in target systems. The "last mile."
- **Fintech:** Settlement — you approved it, but did it actually execute?
- **Key challenge:** Connector breadth. Each SaaS app needs an integration. SCIM helps but not universal.

### UC5: Role Management & Role Mining
- **What:** Defining roles, using analytics to discover natural role patterns from access data
- **Fintech:** Customer segmentation — discovering that similar users all use the same features → formalize a tier
- **The problem:** Role explosion. One bank: 14,000 roles for 20,000 employees. Nobody knows what half do.

### UC6: Segregation of Duties (SoD)
- **What:** Preventing toxic access combinations. Can't both create AND approve a payment.
- **Fintech:** Maker-checker controls (direct map)
- **Emerging gap:** SoD for AI agents — if an agent can read sensitive data AND send external emails, that's a toxic combination. Nobody enforces this yet.

### UC7: Compliance Reporting & Audit
- **What:** Generating evidence for auditors (SOX, SOC2, HIPAA, PCI-DSS, ISO 27001)
- **Fintech:** Regulatory reporting
- **Key tension:** Compliance ≠ security. Orgs can pass every audit while having massive identity risk. Market shifting from compliance-driven → security-driven purchasing.

---

## SaaS Governance Challenges

| Challenge | What It Means | Scale |
|---|---|---|
| **Fragmented permission models** | Every SaaS app has its own role/permission language | Average enterprise: 200+ SaaS apps |
| **Shadow IT** | Business units adopt SaaS without IT approval | 30-50% of SaaS spend is unmanaged |
| **No central audit log** | Each app logs events differently | Compliance teams spend weeks correlating |
| **Admin sprawl** | Local admins grant access outside IGA system | IGA says "revoked" but app says "still active" |
| **OAuth token sprawl** | Users grant 3rd-party apps access via OAuth | Average employee: 10-20 OAuth grants |
| **Offboarding gaps** | HR terminates in Workday, IdP disables in Okta, but 40 SaaS apps with local accounts? Manual cleanup. | 38% of IdP accounts are dormant (Veza) |

---

## NHI (Non-Human Identities) — The Emerging Frontier

**What counts as NHI:** Service accounts, API keys, OAuth tokens, bot accounts, CI/CD pipelines, AI agents.

**Scale:** NHIs outnumber humans 10-50x. 5K employees → 50K-250K NHIs.

| Problem | Why Dangerous |
|---|---|
| **No owner** | Created by someone who left 3 years ago. Nobody knows what it does. |
| **No lifecycle** | Human leaves → Okta disables. Service account? Nobody tells it to stop. |
| **Shared credentials** | API keys shared via Slack. One compromised = lateral movement. |
| **Over-privileged** | Devs grant admin "to make it work." Never scoped down. |
| **Long-lived credentials** | Human passwords expire. Service account keys? Sometimes never rotated. |
| **No MFA** | Service accounts can't do MFA. Static secrets only. |
| **Invisible** | Not in IdP. Not in HR system. Exist only in individual app configs. |

**AI agent twist:** Agents with read access to customer data + write access to CRM + ability to send emails + no session timeout + no SoD = breach waiting to happen.

**Linx internal context (April 2026):** Omer (lead PM) says Linx is drawing away from NHIs at the moment. Validate strategic direction with Dor (Thursday meeting). Keep monitoring — NHI market is hot regardless of current Linx focus.

---

## Competitor Quick Reference

*For deep dives, see `knowledge/battle-cards.md` and `knowledge/competitive-matrix.md`.*

| Competitor | Core Thesis | Primary Strength | Study Priority |
|---|---|---|---|
| **ConductorOne** | Autonomous IGA — AI-native, fast deployment | 300+ open-source connectors, <4 week time-to-value, thorough public docs | HIGH — study their docs for IGA best practices |
| **Lumos** | Autonomous Identity Platform for SaaS governance | Strong on human identity governance, SaaS-native | HIGH — main competitor on human identities |
| **Silverfort** | Universal identity security, agentless | Unified vision closest to Linx, 5yr head start, 1000+ customers | HIGH — existential competitor |
| **SailPoint** | Enterprise IGA incumbent | Deepest IGA workflows, 400+ connectors | MEDIUM — understand the benchmark |
| **Saviynt** | Converged IGA + PAM + CIEM | Breadth of coverage | MEDIUM |
| **Veza** (now ServiceNow) | Access graph / authorization metadata | Best access visualization, "who can do what" | MEDIUM — acquired by ServiceNow Dec 2025 |
| **Noma Security** | AI/ML security platform | AI-specific governance and security | RESEARCH — learn their approach to AI agent governance |

---

## Key Stats to Remember

- Average worker holds **~96,000 entitlements** (Veza 2025)
- **38%** of IdP accounts are dormant (Veza 2025)
- Only **55%** of permissions are safe and compliant (Veza 2025)
- **90%** of orgs had an identity-related incident in the past year (IDSA 2024)
- **84%** of those had direct business impact
- IGA market growing at **9.2%** (Gartner 2Q25)
- **55+** vendors in IGA market (Gartner)
- NHIs outnumber humans **10-50x** in typical enterprises

---

## Mental Models That Transfer from Fintech

**Directly applicable:**
- Transaction monitoring → identity behavior monitoring
- Fraud prevention → identity threat detection
- Compliance automation → IGA workflow automation
- API-first architecture → connector-first identity platform
- Real-time risk scoring → continuous posture assessment

**Where fintech instincts can mislead:**
- Fintech users are external. IAM users are internal. Trust model is inverted.
- Fintech regulations are clear (PCI-DSS, SOX). IAM compliance varies wildly by industry.
- Fintech: speed of transaction matters. IAM: speed of deployment / time-to-value matters.
- Fintech: fraud is adversarial. IAM: most risk is accidental (overprovisioning, orphaned accounts, config drift). Entropy > malice.

---

*Last updated: 2026-04-12*
*Next review: after first week of Linx system access*
