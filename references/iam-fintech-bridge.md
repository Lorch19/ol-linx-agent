# IAM ↔ Fintech Concept Bridge

Quick translation layer for Omri. When identity security jargon comes up, this maps it to fintech equivalents you already know.

## Core Concepts

| IAM Concept | Fintech Equivalent | What It Actually Means |
|---|---|---|
| **IGA** (Identity Governance & Administration) | KYC/AML compliance infrastructure | Managing who has access to what, proving it to auditors, and automating the lifecycle |
| **Identity lifecycle (JML)** — Joiner/Mover/Leaver | Customer onboarding/offboarding lifecycle | When someone joins, changes role, or leaves — their access must change accordingly |
| **Access certification / attestation** | Periodic KYC re-verification | Managers periodically review "does this person still need this access?" — like re-verifying customer identity |
| **Entitlements** | Transaction permissions / account limits | Specific things a user can do in a system (read, write, admin, approve) |
| **Segregation of Duties (SoD)** | Dual-control / maker-checker | Ensuring one person can't both initiate and approve (like payment approval workflows) |
| **Provisioning / deprovisioning** | Account activation / deactivation | Granting or revoking system access — like enabling/disabling payment capabilities |
| **Role mining** | Customer segmentation for permissions | Analyzing actual usage patterns to define standard access packages |
| **ISPM** (Identity Security Posture Management) | Risk scoring dashboard | Continuous assessment of identity-related risks across the organization |
| **NHI** (Non-Human Identities) | API keys / service tokens / webhooks | Service accounts, API keys, bots, certificates — machine-to-machine credentials |
| **PAM** (Privileged Access Management) | Admin/superuser access controls | Securing and monitoring accounts with elevated privileges (like treasury access) |
| **JIT Access** (Just-In-Time) | Temporary elevated permissions | Granting access only when needed, auto-revoking after — like temporary payment limits |
| **CIEM** (Cloud Infrastructure Entitlement Management) | Cloud resource permission management | Managing who can do what in AWS/Azure/GCP — fine-grained cloud permissions |
| **SCIM** | Standardized user provisioning API | Protocol for syncing user data between systems — like standardized KYC data sharing |
| **CAEP** (Continuous Access Evaluation Protocol) | Real-time transaction monitoring signals | Shared signals between systems to detect and respond to access risks in real-time |
| **Zero Trust** | "Never trust, always verify" | Every access request is verified regardless of network location — like re-authenticating every transaction |
| **Identity fabric** | Unified compliance infrastructure | Architecture approach that unifies identity services across the org — like a unified compliance platform |
| **Rubber-stamp reviews** | Compliance checkbox theater | Managers blindly approving all access reviews to clear their queue — the #1 problem in IGA |

## Buyer Personas (IAM ↔ Fintech mapping)

| IAM Buyer | Fintech Equivalent | What They Care About |
|---|---|---|
| **CISO** | Chief Compliance Officer | Risk reduction, audit readiness, breach prevention |
| **IAM Director** | Head of KYC/AML Operations | Operational efficiency, tool consolidation, team productivity |
| **IT Security Analyst** | Compliance analyst | Day-to-day operations, alert fatigue, false positives |
| **GRC Manager** | Regulatory affairs | Audit evidence, framework compliance, reporting |
| **CIO/CTO** | CTO | Platform consolidation, cost reduction, modernization |

## Key Market Dynamics (through fintech lens)

- **Integration challenge** = like connecting to hundreds of banks/PSPs. IGA tools need connectors to every app in the org. Legacy tools onboard ~10-20 apps/year; enterprises use thousands.
- **Deployment timeline** = like implementing a core banking system. Traditional IGA: 12-18 months. This is why "agentless" and "fast TTV" matter so much.
- **NHI explosion** = like the API economy in payments. Machine identities outnumber humans 17:1 and growing 44% YoY. No one governs them well.
- **Agentic AI identities** = like autonomous payment agents. AI agents that can take actions, escalate privileges, and chain operations. New category, no established governance.
