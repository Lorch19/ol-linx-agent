# Identity Security Competitive Matrix

**Date:** 2026-03-29
**Method:** Multi-agent web research with Gartner Market Guide calibration
**Scale:** 1-5 per dimension, weighted totals out of 100

---

## Gartner Calibration Notes

Scores were cross-referenced against the Gartner Market Guide for IGA (Oct 2025) and adjusted where agent research diverged from analyst findings:

- **Lumos Identity Coverage**: Adjusted 4 -> 3. Gartner explicitly notes Lumos does NOT extend to certificate/API-key governance for NHI.
- **CyberArk AI/Automation**: Adjusted 3 -> 3.5. Gartner confirms AI recommendations and role modeling via Zilla; original score underweighted these capabilities.
- **Saviynt Identity Coverage**: Adjusted 4 -> 4.5. Gartner confirms full platform (IGA+PAM+AAG+machine ID+ISPM) with AI agents as machine identities -- the broadest native coverage in the market.
- **ServiceNow/Veza Identity Coverage**: Score 5 confirmed. Gartner confirms Access Graph with governance + lifecycle + machine identity.
- **SailPoint Identity Coverage**: Score 4.5 confirmed. Gartner confirms full IGA + machine identity + DAG + CIEM + CAEP across three license tiers.

---

## Master Scoring Table

Weights: Identity Coverage (3x), AI/Automation (3x), Governance Depth (2x), Deployment Speed (2x), Platform Trajectory (2x), Integrations (2x), Compliance (1x), Scalability (1x), Pricing (1x), GTM (1x), Momentum (1x), Vendor Security (1x). Max weighted total = 100.

| Dimension (Weight) | SailPoint | CyberArk | Saviynt | ServiceNow/Veza | Lumos | ConductorOne | Zluri | Opal | Linx |
|---|---|---|---|---|---|---|---|---|---|
| **1. Identity Coverage (3x)** | 4.5 | 4 | 4.5 `G` | 5 | 3 `G-` | 4 | 4 | 4 | 4 |
| **2. AI/Automation (3x)** | 4 | 3.5 `G+` | 4 | 4 | 5 | 4 | 3 | 4 | 4 |
| **3. Governance Depth (2x)** | 5 | 4 | 5 | 5 | 4 | 4 | 4 | 4 | 2.5 |
| **4. Deployment Speed (2x)** | 2.5 | 3 | 3 | 3 | 5 | 5 | 5 | 4 | 5 |
| **5. Platform Trajectory (2x)** | 5 | 5 | 5 | 5 | 4 | 4 | 3 | 3 | 3 |
| **6. Integrations (2x)** | 5 | 5 | 4 | 5 | 5 | 5 | 5 | 3 | 3 |
| **7. Compliance (1x)** | 5 | 5 | 5 | 4 | 4 | 4 | 4 | 4 | 2 |
| **8. Scalability (1x)** | 5 | 5 | 5 | 5 | 3 | 4 | 3 | 3 | 3 |
| **9. Pricing (1x)** | 3.5 | 2 | 2 | 2 | 2 | 2 | 4 | 3 | 2 |
| **10. GTM (1x)** | 5 | 5 | 4 | 4 | 3 | 3 | 2 | 2 | 2 |
| **11. Momentum (1x)** | 5 | 5 | 5 | 5 | 4 | 5 | 4 | 4 | 3 |
| **12. Vendor Security (1x)** | 5 | 5 | 5 | 4 | 4 | 3 | 3 | 4 | 2 |
| **Weighted Total** | **89.0** | **83.5** | **85.5** | **87** | **80** | **81** | **75** | **72** | **65** |

Legend: `G+` = Gartner-adjusted upward, `G-` = Gartner-adjusted downward, `G` = Gartner-confirmed adjustment

### Weighted Total Calculation Detail

**SailPoint:** (4.5x3)+(4x3)+(5x2)+(2.5x2)+(5x2)+(5x2)+(5)+(5)+(3.5)+(5)+(5)+(5) = 13.5+12+10+5+10+10+5+5+3.5+5+5+5 = **89.0**

**CyberArk:** (4x3)+(3.5x3)+(4x2)+(3x2)+(5x2)+(5x2)+(5)+(5)+(2)+(5)+(5)+(5) = 12+10.5+8+6+10+10+5+5+2+5+5+5 = **83.5**

**Saviynt:** (4.5x3)+(4x3)+(5x2)+(3x2)+(5x2)+(4x2)+(5)+(5)+(2)+(4)+(5)+(5) = 13.5+12+10+6+10+8+5+5+2+4+5+5 = **85.5**

**ServiceNow/Veza:** (5x3)+(4x3)+(5x2)+(3x2)+(5x2)+(5x2)+(4)+(5)+(2)+(4)+(5)+(4) = 15+12+10+6+10+10+4+5+2+4+5+4 = **87**

**Lumos:** (3x3)+(5x3)+(4x2)+(5x2)+(4x2)+(5x2)+(4)+(3)+(2)+(3)+(4)+(4) = 9+15+8+10+8+10+4+3+2+3+4+4 = **80**

**ConductorOne:** (4x3)+(4x3)+(4x2)+(5x2)+(4x2)+(5x2)+(4)+(4)+(2)+(3)+(5)+(3) = 12+12+8+10+8+10+4+4+2+3+5+3 = **81**

**Zluri:** (4x3)+(3x3)+(4x2)+(5x2)+(3x2)+(5x2)+(4)+(3)+(4)+(2)+(4)+(3) = 12+9+8+10+6+10+4+3+4+2+4+3 = **75**

**Opal:** (4x3)+(4x3)+(4x2)+(4x2)+(3x2)+(3x2)+(4)+(3)+(3)+(2)+(4)+(4) = 12+12+8+8+6+6+4+3+3+2+4+4 = **72**

**Linx:** (4x3)+(4x3)+(2.5x2)+(5x2)+(3x2)+(3x2)+(2)+(3)+(2)+(2)+(3)+(2) = 12+12+5+10+6+6+2+3+2+2+3+2 = **65**

---

## Rank Order

| Rank | Vendor | Weighted Score | Tier |
|---|---|---|---|
| 1 | SailPoint | 89.0 | Incumbent Leader |
| 2 | ServiceNow/Veza | 87.0 | Platform Giant |
| 3 | Saviynt | 85.5 | Converged Leader |
| 4 | CyberArk | 83.5 | PAM-to-IGA Leader |
| 5 | ConductorOne | 81.0 | Modern Challenger |
| 6 | Lumos | 80.0 | AI-Native Challenger |
| 7 | Zluri | 75.0 | Agile Challenger |
| 8 | Opal | 72.0 | Dev-Native Niche |
| 9 | Linx | 65.0 | Early Disruptor |

---

## Per-Competitor Profiles

### SailPoint -- 89.0/100 (Incumbent Leader)

**Identity Coverage (4.5/5)** `HIGH confidence`
Full IGA with machine identity (NHI), Data Access Governance (DAG), CIEM, and CAEP. Three license tiers (Standard, Business, Business Plus). Gartner confirms broadest established coverage. NHI is their fastest-growing segment. Slight deduction: NHI capabilities are newer additions, not yet as battle-tested as core IGA.

**AI/Automation (4/5)** `HIGH confidence`
AI-powered access recommendations, predictive identity intelligence, and automated access certifications. SailPoint Identity AI uses ML for outlier detection and role discovery. Strong but still primarily recommendation-tier rather than fully autonomous remediation.

**Governance Depth (5/5)** `HIGH confidence`
The benchmark for IGA governance: full lifecycle (JML), access certifications, SoD, role management, access requests/approvals, password management. Primary reason enterprises buy IGA. Decades of maturation.

**Deployment Speed (2.5/5)** `HIGH confidence`
4-6+ months for full production deployment. Complex configuration and professional services required. This is SailPoint's primary competitive vulnerability.

**Platform Trajectory (5/5)** `HIGH confidence`
Atlas platform vision unifying IGA + NHI + DAG + CIEM. Strategic acquisitions and organic development. Re-IPO validates long-term platform commitment. $1.125B ARR.

**Integrations (5/5)** `HIGH confidence`
1,000+ pre-built connectors. The widest integration ecosystem in IGA. Deep enterprise application coverage including SAP, Workday, ServiceNow, and all major cloud providers.

**Compliance (5/5)** `HIGH confidence`
SOC 1/2/3, ISO 27001/27017/27018/27701, Common Criteria, FedRAMP Moderate ATO. Most comprehensive certification stack in IGA.

**Scalability (5/5)** `HIGH confidence`
F500 proven at massive scale. $1.125B ARR. Financial institutions, healthcare, government deployments. AWS with FedRAMP for GovCloud.

**Pricing (3.5/5)** `MEDIUM confidence`
Three published suite tiers plus new "Navigators" consumption model (Dec 2025). Still quote-based and perceived as premium. Navigators improve flexibility but still require sales engagement.

**GTM (5/5)** `HIGH confidence`
Gartner MQ Leader for IGA (6th consecutive year). Gartner Peer Insights Customers' Choice (4.8/5). Global sales force, extensive partner ecosystem.

**Momentum (5/5)** `HIGH confidence`
Re-IPO'd Feb 2025. FY2026 ARR $1.125B (+28% YoY). SaaS ARR $746M (+38% YoY). FY2027 guidance: $1.36B ARR. Debt eliminated.

**Vendor Security (5/5)** `HIGH confidence`
SOC 1/2/3 Type 2, ISO 27001/27017/27018/27701, Common Criteria, FedRAMP Moderate (multiple products including Identity Security Cloud). AWS GovCloud available.

---

### CyberArk -- 83.5/100 (PAM-to-IGA Leader)

**Identity Coverage (4/5)** `MEDIUM confidence`
PAM-dominant with expanding IGA via Zilla acquisition (Feb 2025). Machine identity via Venafi acquisition. CIEM capabilities. Human + machine coverage. Gartner confirms cloud-native IGA + AI recommendations + CIEM. Deduction: Zilla integration is very recent and not yet fully proven as unified platform.

**AI/Automation (3.5/5)** `MEDIUM confidence` `G+`
Zilla brings AI-powered access recommendations and role modeling. CORA AI assistant across platform. Automated privilege discovery and session analytics. Originally scored 3; Gartner-adjusted to 3.5 given confirmed AI recommendation capabilities. Not yet autonomous remediation tier.

**Governance Depth (4/5)** `MEDIUM confidence`
Strong PAM governance (session recording, command logging, vaulting). IGA governance via Zilla still integrating -- access certifications, lifecycle management present but platform unification is in-progress.

**Deployment Speed (3/5)** `MEDIUM confidence`
Multi-module platform with complex deployments. Privilege Cloud can deploy faster but full platform (PAM + IGA + secrets + machine identity) requires months. Better than SailPoint but still enterprise-class complexity.

**Platform Trajectory (5/5)** `HIGH confidence`
Aggressive M&A-driven expansion: Zilla (IGA), Venafi (machine identity), plus pending ~$25B Palo Alto Networks acquisition. Clear vision to be THE identity security platform. Unmatched consolidation trajectory.

**Integrations (5/5)** `HIGH confidence`
C3 Alliance with 800+ partner integrations. Deep infrastructure integration across PAM, secrets, and identity. Broad enterprise coverage.

**Compliance (5/5)** `HIGH confidence`
SOC 2/3 Type II, ISO 27001/27017/27018, FedRAMP High (EPM + Workforce Identity), FIDO2 certified.

**Scalability (5/5)** `HIGH confidence`
10,000+ customers. 55%+ of Fortune 500. 35%+ of Global 2000. ~30% PAM market share. Unequivocally enterprise-proven.

**Pricing (2/5)** `MEDIUM confidence`
Opaque. Multiple product lines with custom quotes. Professional services add 30-70% on base. Reviews describe pricing model as confusing.

**GTM (5/5)** `HIGH confidence`
Gartner MQ Leader for PAM (7th consecutive year). Strongest Completeness of Vision in PAM. Pending PANW acquisition validates market position.

**Momentum (5/5)** `HIGH confidence`
FY2025 ARR $1.44B (+23% YoY). Subscription ARR $1.27B (+30%). ~$25B PANW acquisition. Hyper-growth at scale.

**Vendor Security (5/5)** `HIGH confidence`
SOC 2/3, ISO 27001/27017/27018, FedRAMP High, Dubai DECS certification. Exceeds enterprise requirements.

---

### Saviynt -- 85.5/100 (Converged Leader)

**Identity Coverage (4.5/5)** `HIGH confidence` `G`
Natively converged IGA+PAM+AAG+machine identity+ISPM. Gartner confirms supports AI agents as machine identities -- one of only two vendors with explicit agentic identity coverage. Expanded NHI security in 2025 with discovery and contextual insights. Slight deduction: agentic identity coverage still emerging.

**AI/Automation (4/5)** `MEDIUM confidence`
AI-native ISPM, Intelligent Recommendations (ML-based, GA add-on), MCP Server for natural language, JIT access for zero standing privileges. Approaching autonomous but not fully there yet.

**Governance Depth (5/5)** `HIGH confidence`
The deepest governance in the comparison: full lifecycle, access requests/approvals, certifications, SoD, fine-grained SAP/Workday controls, session management, password vaulting, JIT access. IGA+PAM+AAG natively converged.

**Deployment Speed (3/5)** `MEDIUM confidence`
Agentless PAM deploys in days, but full IGA deployments are complex with significant implementation services. Typical enterprise rollouts take months. Reviewers note high services costs.

**Platform Trajectory (5/5)** `HIGH confidence`
Native converged platform built by design (not M&A). Gartner MQ Visionary for IGA, Challenger for PAM. Clear and deliberate platform trajectory.

**Integrations (4/5)** `MEDIUM confidence`
150+ OOTB connectors for non-Microsoft apps. Integration Exchange with BYOC framework. Deep SAP, Workday, and cloud coverage. Not quite 300+ breadth of leaders but strong enterprise depth.

**Compliance (5/5)** `HIGH confidence`
SOC 1/2 Type II, ISO 27001:2022, ISO 27017, FedRAMP Moderate. Fully audit-ready across major frameworks.

**Scalability (5/5)** `HIGH confidence`
F500 proven in regulated industries (healthcare, finance, government). ~$3B valuation. Gartner Peer Insights Customers' Choice 4 consecutive years.

**Pricing (2/5)** `MEDIUM confidence`
Subscription-based, typically 3-year terms. Not publicly listed. Significant implementation/services costs noted. Opaque for buyers.

**GTM (4/5)** `HIGH confidence`
Gartner MQ Visionary (IGA), Challenger (PAM), Peer Insights Customers' Choice 4 consecutive years. SPARK Matrix PAM Leader 2025. Strong but not the full MQ Leader that SailPoint holds.

**Momentum (5/5)** `HIGH confidence`
$700M Series B at ~$3B valuation (Dec 2025). Nearly $1.04B total raised. KKR + Sixth Street backing. Hyper-growth with massive capital infusion.

**Vendor Security (5/5)** `HIGH confidence`
SOC 1/2 Type II, ISO 27001:2022, ISO 27017, FedRAMP Moderate. All completed for 2025.

---

### ServiceNow/Veza -- 87.0/100 (Platform Giant)

**Identity Coverage (5/5)** `HIGH confidence`
Veza's AI-native Access Graph covers human + NHI + agentic AI identities. Full authorization metadata across all identity types. Gartner confirms Access Graph with governance + lifecycle + machine identity. Post-ServiceNow acquisition brings ITSM-native identity resolution.

**AI/Automation (4/5)** `MEDIUM confidence`
Veza Access AI with LLM-powered natural language queries, automated access reviews, intelligent recommendations. ServiceNow Now Assist AI integration. Strong but primarily at intelligence/recommendation tier, not fully autonomous remediation.

**Governance Depth (5/5)** `HIGH confidence`
Full lifecycle management, access certifications, SoD, entitlement management, privilege access governance. Combined with ServiceNow workflow engine for enterprise-grade governance automation.

**Deployment Speed (3/5)** `MEDIUM confidence`
300+ integrations enable broad coverage, but ServiceNow platform deployments are inherently complex. Enterprise rollouts require significant configuration. Post-acquisition integration adds uncertainty.

**Platform Trajectory (5/5)** `HIGH confidence`
ServiceNow's ~$200B market cap and platform vision make this the most formidable platform play. Identity security becomes a native ServiceNow capability alongside ITSM, SecOps, and HR workflows.

**Integrations (5/5)** `HIGH confidence`
Veza achieved 300+ integrations pre-acquisition. ServiceNow adds thousands of existing enterprise integrations via CMDB and workflow connectors. Combined ecosystem is unmatched.

**Compliance (4/5)** `MEDIUM confidence`
ServiceNow holds SOC 2, ISO 27001, FedRAMP, and extensive certifications. Veza's own certifications were strong pre-acquisition but the combined identity product's specific cert status is still consolidating.

**Scalability (5/5)** `HIGH confidence`
ServiceNow serves 85%+ of Fortune 500. Enterprise scale is effectively unlimited. Veza already had F500 deployments pre-acquisition.

**Pricing (2/5)** `LOW confidence`
Enterprise ServiceNow pricing is notoriously opaque and bundled. No published identity-specific pricing. Expected to be premium given ServiceNow's market position.

**GTM (4/5)** `MEDIUM confidence`
ServiceNow's enterprise sales force is among the largest in B2B SaaS. Veza was recognized in Gartner Peer Insights VOC for IGA. Combined GTM is powerful but identity-specific analyst positioning is still forming post-acquisition.

**Momentum (5/5)** `HIGH confidence`
ServiceNow's ~$200B market cap and enterprise customer base make this acquisition a massive momentum event for Veza technology. Hyper-growth signal for the identity product line.

**Vendor Security (4/5)** `MEDIUM confidence`
ServiceNow holds comprehensive certifications (SOC 2, ISO 27001, FedRAMP, and more). Specific post-merger certification status for the combined identity product is still consolidating.

---

### ConductorOne -- 81.0/100 (Modern Challenger)

**Identity Coverage (4/5)** `MEDIUM confidence`
Covers human identities across SaaS, cloud infrastructure, and on-prem. NHI/agentic governance capabilities announced Feb 2025 but still early. Not yet at the depth of specialized NHI players.

**AI/Automation (4/5)** `MEDIUM confidence`
Multi-agent AI architecture with autonomous remediation workflows. AI-powered access reviews, recommendations, and policy enforcement. Among the most autonomous systems in the category.

**Governance Depth (4/5)** `MEDIUM confidence`
Access reviews, approval workflows, lifecycle management, automated provisioning/deprovisioning. SOX-specific reporting. Missing some traditional deep IGA features like fine-grained SoD and SAP controls.

**Deployment Speed (5/5)** `HIGH confidence`
Hours to weeks for production deployment. Agentless, API-first architecture. This is ConductorOne's primary differentiator against legacy IGA.

**Platform Trajectory (4/5)** `MEDIUM confidence`
Expanding rapidly from access reviews toward full identity governance platform. Strong vision and execution pace. Not yet at converged platform depth of Saviynt or SailPoint.

**Integrations (5/5)** `HIGH confidence`
300+ pre-built connectors. Rapidly expanding connector library with API-first approach. Among the broadest for a modern IGA vendor.

**Compliance (4/5)** `MEDIUM confidence`
SOX audit evidence collection, compliance reporting. SOC 2/ISO 27001/HIPAA workflow support. Focused on access review evidence rather than comprehensive GRC.

**Scalability (4/5)** `MEDIUM confidence`
DoorDash (300K+ identities), Instacart, Qualtrics, Zscaler, Brex, DigitalOcean. Strong tech logos but limited traditional F500/regulated industry presence. ~102 employees.

**Pricing (2/5)** `MEDIUM confidence`
Not publicly listed. Vendr data shows $4.3K-$20K annual range. Sales-driven pricing. AWS Marketplace provides some standardization.

**GTM (3/5)** `MEDIUM confidence`
Referenced in Gartner "light IGA" category. CrowdStrike Falcon Fund as strategic investor. Not in any Gartner MQ or Forrester Wave as leader. Niche "modern IGA challenger" positioning.

**Momentum (5/5)** `HIGH confidence`
$111M total raised. $79M Series B (Oct 2025) at $350M valuation. 400% YoY revenue growth. CrowdStrike + Accel + Felicis backing.

**Vendor Security (3/5)** `LOW confidence`
SOC 2 Type II confirmed (via Vanta). No public evidence of ISO 27001 or FedRAMP. Notable gap for an identity security vendor.

---

### Lumos -- 80.0/100 (AI-Native Challenger)

**Identity Coverage (3/5)** `HIGH confidence` `G-`
Access graph with full lifecycle for human identities and SaaS. Gartner explicitly notes Lumos does NOT extend to certificate/API-key governance for NHI. Agent originally scored 4; adjusted to 3 per Gartner. This is a meaningful gap as the market shifts toward NHI.

**AI/Automation (5/5)** `HIGH confidence`
The most AI-forward IGA vendor. Albus multi-agent AI system with autonomous remediation. Identity Security Agents (March 2026). Genuinely autonomous -- not just recommendations but execution. Best-in-class.

**Governance Depth (4/5)** `MEDIUM confidence`
Full lifecycle management, access reviews, automated provisioning/deprovisioning. Good governance for cloud-native environments. Less depth than SailPoint/Saviynt in traditional IGA controls (SAP, SoD).

**Deployment Speed (5/5)** `HIGH confidence`
Cloud-native, 300+ native integrations, agentless. Weeks-scale deployment. Among the fastest in the category alongside ConductorOne.

**Platform Trajectory (4/5)** `MEDIUM confidence`
Autonomous Identity Platform (April 2025), Albus (June 2025), Agentic Access Reviews (late 2025), Identity Security Agents (March 2026). Rapid organic development. Fastgen acquisition. Strong trajectory but still building toward full platform.

**Integrations (5/5)** `HIGH confidence`
300+ native integrations. Broad SaaS and cloud coverage. Fastgen acquisition expanded custom connector capabilities.

**Compliance (4/5)** `MEDIUM confidence`
Supports SOX, SOC 2, ISO 27001, HIPAA compliance workflows. ChargePoint uses Lumos for FedRAMP/SOX/SOC 2 processes. Lumos itself is not FedRAMP authorized.

**Scalability (3/5)** `MEDIUM confidence`
Pinterest, MongoDB, GitHub, Anduril, ChargePoint. Strong tech/growth companies but primarily mid-market to large tech. Limited F500 non-tech enterprise deployments.

**Pricing (2/5)** `LOW confidence`
Not publicly listed. Custom/contract-based. AWS Marketplace available. Typical enterprise opacity.

**GTM (3/5)** `MEDIUM confidence`
Named in 2025 Gartner Market Guide for IGA as representative vendor. Gartner Peer Insights presence. Emerging recognition but not a category leader.

**Momentum (4/5)** `MEDIUM confidence`
$35M Series B (May 2024) at $175M valuation. $65M+ total funding. 9x revenue growth. Fastgen acquisition. Strong but not yet hyper-growth/unicorn scale.

**Vendor Security (4/5)** `MEDIUM confidence`
SOC 2 Type II + ISO 27001. Regular penetration testing. GDPR/CCPA compliant. No FedRAMP.

---

### Zluri -- 75.0/100 (Agile Challenger)

**Identity Coverage (4/5)** `MEDIUM confidence`
Recently pivoted from SaaS management into full identity security with NHI coverage. Human + service account + API key discovery. Expanding but depth is still developing.

**AI/Automation (3/5)** `MEDIUM confidence`
AI-powered SaaS discovery and optimization. Automated access reviews. Less advanced than Lumos or ConductorOne on autonomous remediation. Primarily at recommendation/workflow tier.

**Governance Depth (4/5)** `MEDIUM confidence`
Access reviews, lifecycle management (JML), automated provisioning. SOX/SOC 2/HIPAA workflow support. Solid but not at Saviynt/SailPoint depth.

**Deployment Speed (5/5)** `HIGH confidence`
Agentless, cloud-native. Fast deployment in days-to-weeks. Strong SaaS-first approach. Among the fastest deploying platforms.

**Platform Trajectory (3/5)** `MEDIUM confidence`
Expanding from SaaS management into identity security (March 2026 platform expansion). Still building toward full platform identity play. Organic R&D focused.

**Integrations (5/5)** `HIGH confidence`
300+ pre-built connectors. Strong SaaS discovery and integration breadth. Roots in SaaS management provide deep application coverage.

**Compliance (4/5)** `MEDIUM confidence`
SOC 2, SOX ITGC, HIPAA, PCI DSS, ISO 27001 audit workflows. Customers report 90% audit-time reduction. Not yet FedRAMP.

**Scalability (3/5)** `MEDIUM confidence`
~250 customers, mid-market and some large enterprises. Not yet proven at F500 scale or heavily regulated verticals.

**Pricing (4/5)** `MEDIUM confidence`
Published per-user tiers (Standard/Professional/Enterprise) starting ~$4-8/user/mo. AWS Marketplace available. Most transparent pricing in the comparison.

**GTM (2/5)** `LOW confidence`
KuppingerCole Executive View coverage. G2 presence. Not in Gartner MQ for IGA. Niche recognition with growing awareness.

**Momentum (4/5)** `MEDIUM confidence`
~$15M revenue (2024). 250 customers. $32M total funding (Series B, Lightspeed). Strong growth from 2020 founding. Not yet hyper-growth tier.

**Vendor Security (3/5)** `LOW confidence`
References SOC 2 readiness and helps customers with compliance. No clear public evidence of SOC 2 Type II + ISO 27001 for Zluri itself.

---

### Opal Security -- 72.0/100 (Dev-Native Niche)

**Identity Coverage (4/5)** `MEDIUM confidence`
Human identities, service accounts, and agentic AI authorization via Risk Layer (April 2025) and Paladin autonomous agent. Positioned for AI agents, humans, and service accounts. Slightly less proven at NHI depth.

**AI/Automation (4/5)** `MEDIUM confidence`
OpalQuery (AI-assisted visibility), OpalScript (policy-as-code), Paladin (autonomous enforcement agent). Paladin goes beyond recommendations to autonomous action. Market validation is early.

**Governance Depth (4/5)** `MEDIUM confidence`
JIT access, approval workflows, SoD constraints, break-glass procedures, automated UARs, evidence collection. OpalScript enables policy-as-code. Missing some traditional IGA lifecycle breadth.

**Deployment Speed (4/5)** `MEDIUM confidence`
Cloud-native, API-first, developer-friendly. Terraform, Slack, Jira integrations. Weeks-scale for cloud-forward teams.

**Platform Trajectory (3/5)** `MEDIUM confidence`
Evolving from JIT access toward full identity governance platform (March 2026 unified launch). Still building toward full platform. Currently a strong point solution evolving organically.

**Integrations (3/5)** `MEDIUM confidence`
~25-40 pre-built integrations (AWS, GCP, Azure, Okta, GitHub, Jira, Salesforce, MongoDB). Custom connector API. Solid for cloud-native but significantly behind 300+ leaders.

**Compliance (4/5)** `MEDIUM confidence`
SOC 2 + ISO 27001:2013 certified. Automates UARs and evidence collection. Reports available under NDA.

**Scalability (3/5)** `MEDIUM confidence`
Databricks, Figma, Scale AI. Hypergrowth mid-market/early enterprise. ~40 customers. 99.9%+ uptime SLA. Not yet F500 breadth.

**Pricing (3/5)** `LOW confidence`
SaaS subscription based on employee count and integrated apps. Published model structure but not transparent per-unit pricing.

**GTM (2/5)** `LOW confidence`
Niche presence in developer-centric and cloud-native security. Not in analyst MQ/Wave leadership. Limited enterprise brand recognition.

**Momentum (4/5)** `MEDIUM confidence`
$32M Series B (Greylock, Battery, Coatue). Rapid product expansion in 12 months. Strong growth trajectory but not yet hyper-growth at enterprise scale.

**Vendor Security (4/5)** `MEDIUM confidence`
SOC 2 + ISO 27001:2013 certified. Azure-hosted with multi-region redundancy.

---

### Linx Security -- 65.0/100 (Early Disruptor)

**Identity Coverage (4/5)** `MEDIUM confidence`
Unified view of human + NHI + agentic identities. Discovery and inventory across identity types. Genuine differentiation on breadth of identity types covered. However, depth of NHI governance (beyond discovery) is still developing.

**AI/Automation (4/5)** `MEDIUM confidence`
Autopilot (launched RSA 2026) for autonomous identity security operations. MCP Server for natural language interactions. Genuinely innovative but Autopilot is newly launched -- not yet battle-tested with extensive customer evidence.

**Governance Depth (2.5/5)** `HIGH confidence`
This is the critical gap. JML (joiners/movers/leavers), SoD, access approvals, JIT, and compliance reporting are all roadmap items. Cannot yet compete head-to-head against SailPoint, Saviynt, or CyberArk on core IGA buying criteria. Discovery and visibility are strong but governance execution is thin.

**Deployment Speed (5/5)** `HIGH confidence`
Agentless architecture. Hours-to-days deployment for initial discovery and inventory. Best-in-class for time-to-first-value on identity visibility.

**Platform Trajectory (3/5)** `MEDIUM confidence`
Clear vision toward unified identity security platform. Forrester Landscape inclusion (Q4 2025). Expanding from discovery into governance. Trajectory is promising but execution is early-stage.

**Integrations (3/5)** `MEDIUM confidence`
Available on AWS and Microsoft marketplaces. Specific connector count is not publicly documented. No public integration catalog. This is a gap vs. vendors with 300+ connectors.

**Compliance (2/5)** `LOW confidence`
No public evidence of compliance automation features beyond basic audit trails. No NIST or framework-specific compliance modules. Significant gap for regulated enterprise buyers.

**Scalability (3/5)** `LOW confidence`
At least one F500 customer named. ~60 employees (mid-2025). Limited public evidence of enterprise-scale deployments. Series A stage limits support capacity.

**Pricing (2/5)** `LOW confidence`
No published pricing. AWS and Microsoft marketplace listings exist but specific pricing not transparent. Opaque.

**GTM (2/5)** `LOW confidence`
Included in Forrester Workforce Identity Security Platforms Landscape Q4 2025. Cybersecurity Excellence Awards nomination. RSA 2026 presence. NOT in Gartner Market Guide for IGA. Analyst presence is emerging/niche.

**Momentum (3/5)** `MEDIUM confidence`
$33M seed/Series A (July 2024). Wiz founders as angel investors. ~60 employees with plans to double. CTO hired March 2025. Strong founding team and investor signal but no public ARR, Series B, or rapid logo acquisition evidence.

**Vendor Security (2/5)** `LOW confidence`
No public trust center. No SOC 2, ISO 27001, or FedRAMP certifications publicly documented. Notable gap for a security vendor. Possible that certifications exist but are not publicized.

---

## Strategic Implications for Linx

### Path from 65 to 80+

The 15-point gap between Linx (65) and the modern challengers (80-81) maps to four primary execution gaps:

1. **Governance Depth (2.5 -> 4)**: Ship JML, SoD, access approvals, and compliance reporting. This is the single highest-impact area given 2x weight. Potential gain: +3 weighted points.

2. **Integrations (3 -> 4.5)**: Build and publish a 100+ connector catalog. Each integration broadens addressable market. Potential gain: +3 weighted points.

3. **Vendor Security (2 -> 4)**: Achieve and publicize SOC 2 Type II + ISO 27001. Non-negotiable for enterprise deals. Potential gain: +2 weighted points.

4. **Compliance (2 -> 4)**: Build compliance automation modules for SOX, SOC 2, HIPAA, NIST frameworks. Potential gain: +2 weighted points.

Combined potential: 65 + 10 = **75** through execution alone, before factoring in GTM/momentum improvements from Series B, customer wins, and analyst recognition.

### Linx Competitive Advantages to Protect

- **Identity Coverage breadth** (human + NHI + agentic) is genuinely differentiated and matches or exceeds most incumbents on scope.
- **Deployment Speed** (5/5) is shared only with ConductorOne and Zluri among challengers.
- **AI/Automation** (4/5) via Autopilot is competitive with all but Lumos.

### Top Competitive Threats

1. **ServiceNow/Veza** (87): Identity coverage + ServiceNow distribution = most dangerous new entrant.
2. **ConductorOne** (81): Most direct competitor in modern/fast-deploying IGA with stronger governance and momentum.
3. **Lumos** (80): AI leadership narrative competition. Lumos lacks NHI but leads on autonomous AI.

---

## Confidence Legend

- `HIGH confidence`: Multiple corroborating sources, consistent with Gartner data, clear public evidence
- `MEDIUM confidence`: Some corroborating sources, minor gaps in evidence or slight uncertainty
- `LOW confidence`: Limited public evidence, score based on inference or single source
- `G+`: Score adjusted upward based on Gartner Market Guide data
- `G-`: Score adjusted downward based on Gartner Market Guide data
- `G`: Score set/confirmed based on Gartner Market Guide data
