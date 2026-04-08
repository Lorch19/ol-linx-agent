# Market Context — Identity Security

> Last updated: 2026-04-08
> Sources: Gartner IGA Market Guide (Oct 2025), Gartner IAM Attack Surface report (Oct 2025), vendor press releases, analyst coverage.

## Market Size & Growth

- IGA market grew 9.2% (2023→2024), forecast 10.7% (2024→2025) per Gartner 2Q25
- Gartner estimates 55+ vendors in the IGA market overall
- Identity security (broader than IGA) is the fastest-growing segment of cybersecurity

## Key Market Forces (from Gartner Oct 2025)

1. **Shift to cloud/SaaS delivery** — even conservative sectors accelerating cloud-native IGA. Hybrid remains a requirement in certain regions/industries.
2. **Security and business enablement overtaking compliance** as primary adoption drivers. Organizations now implement IGA for risk reduction and productivity, not just audit.
3. **AI/GenAI integration accelerating** — AI-enabled governance not yet standard, but demand growing rapidly for identity lifecycle, anomaly detection, entitlement reviews.
4. **Machine identity explosion** — NHI (AI agents, service accounts, IoT, RPA bots, API keys) outnumber human identities. Most IGA solutions only govern service accounts today. Gap = opportunity.

## The Identity Attack Surface Problem

Per Gartner (Oct 2025):
- IAM infrastructure is fragmented across disconnected tools and silos
- Business units make IAM decisions without IAM leader oversight → misconfigs, exposed credentials, disabled MFA, orphaned accounts
- Buyers are overwhelmed by crowded ISPM/hygiene/ITDR market — hard to discern which solution fits

**Gartner strategic assumption:** By 2028, 70% of CISOs will use an IVIP (Identity Visibility & Intelligence Platform) to shrink their IAM attack surface.

Per Veza State of Identity Report (Dec 2025):
- Average worker holds ~96,000 entitlements
- 38% of IdP accounts are dormant
- Only 55% of permissions are safe and compliant
- 16.5% of total permissions belong to inactive users

Per IDSA 2024 Trends Report (cited by Lumos):
- 90% of organizations experienced an identity-related incident in the past year
- 84% of those had direct business impact

Per Gartner IAM Leadership Survey 2024:
- 54% of organizations saw increase in identity-related breaches
- 1 in 3 experienced business interruptions, financial loss, or regulatory penalties from identity incidents
- 44% of IAM leaders say IAM team is primarily responsible for machine identities
- 62% of organizations experienced at least one deepfake attack involving social engineering

## Buyer Dynamics

**Who buys identity security:**
- CISO (security budget) — increasingly the economic buyer for ISPM/visibility
- IAM Director/VP (IT budget) — traditional IGA buyer, compliance-driven
- IT Operations — influenced by deployment speed and operational burden

**What's changed:**
- Identity has moved from IT back-office to boardroom security priority
- "Identity-first security" is now Gartner's recommended architectural approach
- Compliance is necessary but no longer sufficient to justify IGA investment
- Speed to value is a top-3 buying criterion for new purchases (legacy IGA burned buyers with 2-year implementations)

## M&A Activity (Signal: Market Consolidation)

| Date | Acquirer | Target | Signal |
|---|---|---|---|
| Feb 2025 | CyberArk | Zilla Security | PAM leader buying IGA |
| Apr 2025 | Palo Alto Networks | CyberArk (announced) | Platform consolidation — identity into network security |
| Dec 2025 | ServiceNow | Veza | Workflow platform buying identity visibility |

**Pattern:** Identity security is being pulled into larger platforms (security, ITSM, network). This is both a threat (platform bundling) and a validation (identity is foundational infrastructure). Startups that haven't landed key accounts before integration completes lose the window.

## What This Means for Linx

1. **The window is open but closing.** ServiceNow/Veza integration will take 12-18 months. CyberArk/Zilla is still integrating. This is the period where purpose-built vendors can land accounts before "good enough" platform features arrive.

2. **Compete on identity security outcomes, not IGA features.** The market is moving from "manage identities" to "reduce identity risk." Linx's positioning should be about shrinking the attack surface, not running certification campaigns.

3. **Speed to value is table stakes.** ConductorOne set the bar at <4 weeks. Any new IGA/identity security vendor that requires months of implementation will lose.

4. **NHI and AI agent governance are the new frontier.** Most vendors are early. The first vendor to deliver real, production-grade NHI lifecycle governance (not just discovery) at enterprise scale wins a durable position.

5. **The "AI for IAM" vs "IAM for AI" distinction matters.** Linx's assignment focused on "AI for IAM" (AI agents helping IAM teams). The market is also demanding "IAM for AI" (governing AI agent identities). Both are needed.
