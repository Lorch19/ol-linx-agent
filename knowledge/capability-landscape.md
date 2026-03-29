# IGA Capability Landscape
*Last updated: 2026-03-29 | Source: Competitive matrix + Gartner Market Guide*

## Capability Matrix

**Legend:** Lead = category leader | Has = production capability | Building = announced/beta | Absent = no evidence

| Capability | SailPoint | CyberArk | Saviynt | SNOW/Veza | ConductorOne | Lumos | Zluri | Opal | **Linx** |
|---|---|---|---|---|---|---|---|---|---|
| **Risk Visibility (ISPM)** | Has | Has | Lead | Has | Has | Has | Has | Has | **Has** |
| **NHI Governance** | Has | Has (Venafi) | Has | Has | Building | Absent `G` | Building | Has | **Lead** |
| **Agentic AI Identity** | Building | Building | Has | Has | Building | Absent | Absent | Has | **Lead** |
| **AI-Powered Remediation** | Has | Has | Has | Has | Has | Lead | Has | Has | **Has** |
| **Autonomous Remediation** | Absent | Absent | Absent | Absent | Has | Lead | Absent | Has | **Has** |
| **Access Reviews/Certification** | Lead | Has | Lead | Has | Has | Has | Has | Has | Absent |
| **Governance & Policy Engine** | Lead | Has | Lead | Has | Has | Has | Has | Has | **Building** |
| **Access Approvals & Workflows** | Lead | Has | Lead | Has | Has | Has | Has | Has | Absent |
| **JIT Access** | Has | Has | Has | Has | Has | Has | Absent | Lead | Absent |
| **Compliance & Reporting** | Lead | Has | Lead | Has | Has | Has | Has | Has | Absent |
| **Identity Lifecycle (JML)** | Lead | Has | Lead | Has | Has | Has | Has | Absent | Absent |
| **SoD Controls** | Lead | Has | Lead | Has | Has | Has | Has | Has | Absent |
| **Role Mining / RBAC** | Lead | Has | Has | Has | Has | Has | Has | Has | Absent |
| **Provisioning/Deprovisioning** | Lead | Has | Lead | Has | Has | Has | Has | Has | Absent |
| **Password/Secret Management** | Has | Lead | Has | Has | Absent | Absent | Absent | Absent | Absent |

## Where Linx Leads Today

1. **NHI Governance** — Unified view of service accounts, API keys, bots. Most competitors either don't cover NHI (Lumos) or handle it through M&A bolt-ons (CyberArk/Venafi). Linx's graph-based approach provides native, cross-identity visibility.

2. **Agentic AI Identity Governance** — First-class treatment of AI agents as distinct identity types (not service account wrappers). Only Saviynt and SNOW/Veza have comparable coverage. Forrester called Linx "the top disruptor" here.

3. **Autonomous Remediation** — Autopilot goes beyond recommendations to autonomous action with guardrails. Only Lumos (Albus) and ConductorOne match this. But Linx's Autopilot combines it with cross-identity (human+NHI+agentic) context — no one else does both.

4. **Deployment Speed** — Agentless, hours-to-days for first value. Tied with ConductorOne and Zluri. Massive advantage vs. SailPoint (months) and CyberArk (months).

## Where Linx Has Critical Gaps

**The "IGA table stakes" gap:** 8 of 15 capabilities are Absent. These are the core IGA features that enterprise buyers expect:

| Gap | Impact | Who Leads | Priority |
|---|---|---|---|
| Access Reviews/Certification | Can't compete in compliance-driven deals | SailPoint, Saviynt | **Critical** — blocks enterprise sales |
| Governance & Policy Engine | Building V1.1 — need to ship | SailPoint, Saviynt | **Critical** — in progress |
| Access Approvals & Workflows | Required for any "governance" claim | ConductorOne, SailPoint | **High** |
| Identity Lifecycle (JML) | Core IGA feature, every incumbent has it | SailPoint, Saviynt | **High** |
| Compliance & Reporting | Blocks regulated industry deals (finance, healthcare) | SailPoint, Saviynt | **High** |
| JIT Access | Developer-friendly access pattern | Opal (leads) | **Medium** |
| SoD Controls | Compliance requirement for finance/SOX | SailPoint, Saviynt | **Medium** |
| Provisioning/Deprovisioning | Automation layer for lifecycle | SailPoint, Saviynt | **Medium** |

## Competitive Moats by Vendor

| Vendor | Moat | Why It's Hard to Copy |
|---|---|---|
| SailPoint | Connector breadth (1000+) + governance depth + analyst dominance | Decades of integration work, installed base |
| CyberArk | PAM dominance + M&A capital + 55% F500 penetration | $14B market cap funds acquisitions |
| Saviynt | Only natively converged IGA+PAM+AAG | Architecture decisions, not features |
| ServiceNow/Veza | ITSM distribution (85%+ F500) + Access Graph | Network effects of platform |
| ConductorOne | Speed + governance combined | Execution pace + investor backing |
| Lumos | AI autonomy depth (Albus) | Engineering talent + data flywheel |
| **Linx** | Cross-identity graph (human+NHI+agentic) + AI-native architecture | Can't be retrofitted onto legacy platforms |

## Linx's "Only We" Capability Claim

Only Linx unifies human + NHI + agentic identity governance with autonomous remediation on a single, AI-native graph. Competitors either:
- Have broad governance but weak NHI/agentic coverage (SailPoint, CyberArk)
- Have strong AI but limited identity coverage (Lumos — no NHI)
- Have NHI coverage but lack autonomous remediation (Saviynt, SNOW/Veza)
- Have fast deployment but limited scope (ConductorOne, Opal, Zluri)

**The risk:** This claim holds today but has a 12-18 month shelf life. SailPoint, Saviynt, and SNOW/Veza are building toward the same position. Linx's advantage is architectural (graph + AI-native + agentless) — harder to copy than features.
