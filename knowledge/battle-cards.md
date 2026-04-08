# Battle Cards — Key Competitors

> Last updated: 2026-04-08
> Confidence: Estimated. Refresh with deal-specific intel as it comes in.

---

## Veza (→ ServiceNow)

**One-liner:** Access Graph pioneer, now being absorbed by ServiceNow for enterprise-scale identity security.

**Founded:** 2020 | **HQ:** Los Gatos, CA | **Funding:** $235M total ($108M Series D, Apr 2025, $808M valuation)
**Acquisition:** ServiceNow announced intent to acquire, Dec 2025.

**What they do well:**
- Access Graph is genuinely differentiated — ingests and normalizes identity/permission data across all systems into a unified graph model
- NHI coverage is industry-leading: OAuth tokens, service accounts, AI agents (Azure AI Foundry, GCP Vertex AI, MCP Server Registry)
- ISPM dashboards with 2,400+ OOTB risk queries across 8 risk categories
- Key stat from their research: avg worker holds 96K entitlements, 38% of IdP accounts are dormant, only 55% of permissions are safe/compliant

**Where they're vulnerable:**
- Acquisition creates uncertainty: roadmap freeze? Integration delays? Pricing changes?
- Historically weaker on IGA workflow (lifecycle, provisioning) vs. pure visibility/analytics
- Enterprise-heavy sales motion — long cycles, not fast-land
- ServiceNow integration may alienate non-ServiceNow shops

**When you'll face them:** Enterprise deals where ISPM + visibility is the primary use case. F500 accounts already on ServiceNow.

**How to win:** Speed to value (they can't match startup deployment speed during acquisition integration). Emphasize that Linx is purpose-built for identity security, not a feature inside a workflow platform. If the buyer isn't a ServiceNow shop, the acquisition is a liability, not an asset.

---

## ConductorOne

**One-liner:** AI-native platform unifying IGA + IAM + PAM with fastest time-to-value in category.

**Founded:** 2020 | **HQ:** San Francisco | **Funding:** $100M+ ($79M Series B, Oct 2025)
**CEO:** Alex Bovee (ex-Okta, led auth/security/PAM/federal product lines)

**What they do well:**
- Speed: go-live in <4 weeks, 300+ OOTB connectors via Baton (open-source framework)
- Claims 95% reduction in IT effort for access requests, "work of 2 FTEs"
- Unified IGA+IAM+PAM in single platform — not bolted together
- Strong customer logos: Zscaler, DoorDash, Instacart, Ramp, DigitalOcean, Qualtrics
- CrowdStrike Falcon Fund as strategic investor signals security ecosystem integration

**Where they're vulnerable:**
- "AI-native" claim is marketing-heavy — the AI capabilities are strong but the underlying differentiation is connector speed + UX, not unique AI IP
- Less depth on NHI than Veza
- ISPM is weak — they're primarily IGA-focused
- No data access governance
- Smaller company (101 employees as of late 2025)

**When you'll face them:** Mid-market and growth-stage enterprises replacing legacy IGA. Tech-forward companies who want modern UX.

**How to win:** Depth of identity visibility and posture insights where ConductorOne is thin. If the deal is ISPM-led, they're not competitive. On IGA-led deals, compete on differentiated intelligence, not just speed.

---

## Lumos

**One-liner:** Autonomous Identity platform with Albus AI multi-agent system for self-improving governance.

**Founded:** 2020 | **HQ:** San Francisco | **Funding:** ~$60M (Series B, 2023)
**CEO:** Andrej Safundzic

**What they do well:**
- Albus AI agent system: multi-agent architecture that reasons through access decisions, builds RBAC/ABAC policies from usage data, explains recommendations in natural language
- Closed-loop architecture: discover → intelligence → agent-driven remediation → durable policy
- Agentic UARs (Dec 2025): AI runs first pass on access reviews, 6x faster campaigns
- Identity Security Agents (Mar 2026): continuous background monitoring + automated remediation
- Strong cloud-native/tech customer base: Pinterest, Anduril, GitHub
- Gartner IGA Market Guide inclusion (Oct 2025) — legitimacy marker

**Where they're vulnerable:**
- Enterprise penetration thinner than Veza/ConductorOne — strong in tech, less proven in F500 regulated industries
- NHI governance less mature than Veza
- No PAM capabilities
- "Autonomous" messaging may scare risk-averse buyers (CISOs want control, not autonomy)
- Connector depth likely lags ConductorOne's 300+

**When you'll face them:** Cloud-first companies, IGA replacement deals in tech sector, anywhere the buyer is drawn to AI-driven governance.

**How to win:** Enterprise readiness, compliance depth, and hybrid environment support where Lumos is lighter. On the AI front, don't try to out-AI them — compete on trust, control, and explainability for regulated industries.

---

## SailPoint

**One-liner:** The IGA incumbent. Deepest feature set, longest implementation cycles, strongest compliance story.

**Founded:** 2005 | **HQ:** Austin, TX | **Public** (went private via Thoma Bravo 2022, re-IPO 2024)
**Products:** Identity Security Cloud (SaaS), IdentityIQ (on-prem)

**What they do well:**
- Most complete IGA feature set in market (SOD, role mining, certification, provisioning)
- Massive connector library and partner ecosystem
- Strong compliance/audit story — the safe choice for regulated industries
- Data access governance (structured + unstructured)
- CAEP/shared signals support
- Atlas SaaS platform modernization effort

**Where they're vulnerable:**
- Implementation complexity: 12-18 month deployments are common, massive PS dependency
- Innovation pace lags next-gen vendors — AI capabilities feel bolted on, not native
- UX is dated — end-user experience doesn't match modern expectations
- Cloud migration path (IdentityIQ → Identity Security Cloud) is painful for existing customers
- ISPM is not a strength
- NHI governance mostly limited to service accounts

**When you'll face them:** Every enterprise IGA deal. They're the "nobody gets fired for buying SailPoint" option.

**How to win:** Speed to value and modern architecture. Time-to-first-insight vs. time-to-first-certification-campaign. Frame as "SailPoint for compliance, Linx for security" — don't compete on IGA completeness, compete on identity security outcomes.

---

## CyberArk (Zilla Security acquisition)

**One-liner:** PAM leader acquiring its way into IGA via Zilla Security (Feb 2025).

**Founded:** 1999 (CyberArk) / 2019 (Zilla) | **HQ:** Newton, MA / Israel
**Note:** Palo Alto Networks announced intent to acquire CyberArk — massive M&A activity.

**What they do well:**
- PAM is best-in-class — vault, session management, privilege elevation
- Zilla brought cloud-native IGA with AI-assisted entitlement recommendations
- CIEM capabilities native
- Combined platform story: PAM + IGA + machine identity under one roof
- Enterprise installed base is enormous

**Where they're vulnerable:**
- Integration of Zilla is ongoing — product coherence is a question mark
- IGA maturity post-acquisition is untested at scale
- The Palo Alto acquisition adds another layer of uncertainty
- ISPM is not a core competency
- Speed to value is not their brand — CyberArk implementations are traditionally complex

**When you'll face them:** PAM-adjacent deals that expand into IGA, large enterprises already in the CyberArk ecosystem.

**How to win:** Don't compete on PAM — it's their turf. Compete on identity visibility, ISPM, and the fact that identity security shouldn't be owned by the PAM vendor. The acquisition stack (Palo Alto → CyberArk → Zilla) means 3 layers of integration risk.

---

## Quick Reference: Positioning by Deal Type

| Deal Type | Primary Threat | Linx Angle |
|---|---|---|
| IGA replacement | SailPoint, Saviynt | Speed, modern architecture, identity security (not just compliance) |
| ISPM / visibility | Veza (ServiceNow) | Purpose-built, independent vendor vs. platform feature |
| Cloud-first IGA | Lumos, ConductorOne | Enterprise readiness, hybrid support, deeper visibility |
| PAM expansion | CyberArk | Identity security is broader than PAM; avoid vendor lock-in |
| NHI governance | Veza, Saviynt | Depends on Linx roadmap — validate current NHI capabilities |
| AI agent security | Veza (early), Lumos (emerging) | Linx AI agent governance (from assignment) — validate roadmap fit |
