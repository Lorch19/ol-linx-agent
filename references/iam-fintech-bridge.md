# IAM ↔ Fintech Concept Bridge

> Purpose: Translate identity security jargon into fintech equivalents Omri already understands.

| IAM Concept | Fintech Equivalent | Why It Clicks |
|---|---|---|
| **Identity Governance (IGA)** | Compliance/KYC operations | Both ensure the right entity has the right access/permissions, with audit trails |
| **Access Certification** | Periodic account reconciliation | Reviewing who has what, confirming it's still justified |
| **Least Privilege** | Need-to-know data access in trading systems | Minimize blast radius of a compromise |
| **Provisioning/Deprovisioning** | Account onboarding/offboarding | Lifecycle management with SLA expectations |
| **Entitlements** | Permission sets / authorization scopes | What a user CAN do vs. what they SHOULD do |
| **SOD (Segregation of Duties)** | Maker-checker controls | Prevent one person from both initiating and approving |
| **ISPM (Identity Security Posture)** | Risk scoring / exposure analytics | Continuous measurement of security posture, not point-in-time |
| **NHI (Non-Human Identity)** | API keys, service accounts, trading bots | Machine actors that authenticate and authorize |
| **JIT Access** | Temporary elevated permissions for ops | Time-boxed access that auto-revokes |
| **Identity Fabric** | Financial data mesh / integration layer | Unified identity data plane across systems |
| **ITDR (Identity Threat Detection)** | Fraud detection / transaction monitoring | Behavioral analytics to catch anomalous identity activity |
| **PAM (Privileged Access)** | Admin/root access to core banking systems | High-impact access that needs extra controls |
| **CIEM** | Cloud cost optimization but for permissions | Right-sizing entitlements in cloud infrastructure |
| **CAEP/Shared Signals** | Real-time fraud signals between banks | Cross-system event sharing for continuous access evaluation |
| **Zero Standing Privileges** | No persistent admin access | All elevated access is requested, justified, and time-bound |
| **Rubber-stamping (access reviews)** | Blind approval of compliance questionnaires | The universal governance failure mode |
| **Access Graph** | Transaction/relationship graph (like PayPal/Stripe risk models) | Map all relationships between entities and their permissions |
| **SCIM** | Standardized API for user provisioning | Like PSD2/Open Banking APIs but for identity |
| **Identity Attack Surface** | Fraud exposure surface | Sum of all identity-related vulnerabilities |

## Mental Models That Transfer Well

**Omri's fintech PM instincts that directly apply:**
- Transaction monitoring → identity behavior monitoring (same analytical approach)
- Fraud prevention → identity threat detection (same risk calculus)
- Compliance automation → IGA workflow automation (same buyer pain)
- API-first architecture → connector-first identity platform (same integration philosophy)
- Real-time risk scoring → continuous posture assessment (same data pipeline challenge)

**Where fintech instincts can mislead:**
- Fintech: users are external customers. IAM: users are internal employees/contractors/machines. The trust model is inverted.
- Fintech: regulatory frameworks are clear (PCI-DSS, PSD2, SOX). IAM: compliance requirements vary wildly by industry and are often ambiguous.
- Fintech: speed of transaction is critical. IAM: speed of deployment and time-to-value is the equivalent metric.
- Fintech: fraud is adversarial. IAM: most identity risk is accidental (overprovisioning, orphaned accounts, config drift). The threat model is more entropy than malice.
