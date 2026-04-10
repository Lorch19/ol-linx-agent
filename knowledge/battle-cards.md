# Battle Cards — Key Competitors

> Last updated: 2026-04-10 (major overhaul post M&A wave)
> Confidence: Web-sourced April 2026. Refresh with deal-specific intel as it comes in.

---

## Silverfort ⚠️ NEW — HIGHEST PRIORITY

**One-liner:** Agentless universal identity security platform. Same unified vision as Linx, 5-year head start.

**Founded:** 2016 | **HQ:** Plano, TX (founded Tel Aviv) | **Funding:** $222M total (unicorn, Series D Jan 2024)
**Scale:** 589 employees, 1,000+ enterprise customers (UPS, Airbus)

**What they do well:**
- Agentless architecture — deploys without code changes or endpoint agents (proxy-based)
- Universal MFA for legacy systems (mainframes, command-line, service accounts)
- Acquired Rezonate (Nov 2024) for cloud identity / NHI / ISPM
- AI Agent Security product shipped June 2025
- CrowdStrike Falcon integration
- 100%+ YoY revenue growth
- Scale advantage — reference customers in Fortune 500 at enterprise-critical deployments

**Where they're vulnerable:**
- Cloud identity stack is **acquired (Rezonate)**, not native — architectural coherence is questionable
- Two products stitched together: legacy-focused Silverfort core + cloud-native Rezonate layer
- AI story is weaker than Linx's autonomous remediation pitch — they're primarily an enforcement layer, not a governance brain
- Agent-based requires network-layer deployment — some buyers prefer agentless data-layer approach
- Go-to-market still largely focused on MFA-for-legacy wedge

**When you'll face them:** Enterprise deals where the customer has significant on-prem/legacy identity (especially financial services, manufacturing, healthcare). Fortune 500 deployments. Any deal where "universal coverage" is the ask.

**How to win:**
- **Architecture story:** Native cloud-first identity data layer vs. their acquired stack. "We built the graph; they bought it."
- **Autonomous remediation:** Linx Autopilot (GA) vs. Silverfort's enforcement layer. "We don't just detect — we fix."
- **AI-native from inception:** Linx's data model and architecture were designed for AI-first operations. Silverfort retrofits.
- **Agentless data approach:** Depending on buyer preference, agentless data ingestion can beat their agent-based enforcement model.

**Warning:** This is a peer competitor with scale advantages. Don't underestimate. Study their customer deployments carefully.

---

## CyberArk (Palo Alto Networks business unit)

**One-liner:** PAM leader now a PANW business unit. Bundled into platform deals across 80K+ customers.

**Founded:** 1999 (CyberArk) | **HQ:** Newton, MA (now PANW subsidiary)
**Major event:** $25B PANW acquisition **closed Feb 11, 2026** — largest security M&A in history.

**What they do well:**
- Best-in-class PAM (vault, session management, privilege elevation)
- Zilla IGA integrated into platform (AI-assisted entitlement recommendations)
- Venafi machine identity shipped — strong certificate/secrets governance
- Secure AI Agents product GA Dec 2025
- Now backed by PANW's $1.44B ARR CyberArk business + 80K+ PANW customer base
- Combined: PAM + IGA + NHI + AI agent governance under one parent

**Where they're vulnerable:**
- **Three architectures problem evolving but not resolved:** CyberArk core + Zilla IGA + Venafi machine ID = integration debt
- Post-acquisition roadmap uncertainty during PANW integration (first 12 months)
- Speed to value is not their brand — complex implementations
- ISPM is not a core competency
- "Identity as a PANW feature" dilutes focus vs. purpose-built vendors

**When you'll face them:**
- PAM-adjacent deals expanding into IGA
- Any deal where the customer is already a PANW Cortex / Prisma Cloud customer
- Large enterprises evaluating "platform consolidation" strategies
- **New scenario:** Customer is getting identity bundled into their PANW platform renewal

**How to win:**
- **"Three architectures" critique** — CyberArk + Zilla + Venafi still feels like three products. Linx is one.
- **Speed and focus** — PANW integration will slow product velocity for the next 12 months
- **Independence argument** — "Do you want your identity security tied to your firewall vendor?"
- **Don't compete on PAM** — it's their turf. Compete on governance depth, autonomous remediation, and AI-native architecture.

**When Linx loses:** Customer is already a PANW platform customer getting identity bundled in at near-zero marginal cost. In this case: focus on the "best-of-breed vs. bundled" narrative and extract whatever the platform can't do.

---

## ServiceNow/Veza

**One-liner:** Access Graph identity security absorbed into ServiceNow's workflow and security platform.

**Founded:** 2020 (Veza) | **HQ:** Los Gatos, CA (now ServiceNow subsidiary)
**Major event:** Acquisition **closed March 2, 2026** for ~$1.25B. Integration is 5 weeks old as of this update.

**What they do well:**
- Veza's Access Graph is genuinely differentiated — normalizes identity/permission data across all systems into unified graph
- NHI coverage was already industry-leading: OAuth tokens, service accounts, AI agents (Azure AI Foundry, GCP Vertex AI, MCP Server Registry)
- Feb 2026 Enterprise Identity Control Plane update added explicit NHI & AI Agent Security
- 30B+ access permissions managed across ~150 enterprise customers
- ServiceNow's $10B+ revenue and Security & Risk portfolio crossing $1B ACV
- Deep integration with ITSM workflows (access requests natively in ServiceNow tickets)

**Where they're vulnerable:**
- Acquisition is 5 weeks old — roadmap frozen or volatile
- Historically weaker on IGA workflow (lifecycle, provisioning) vs. pure visibility/analytics
- "ServiceNow-adjacent" positioning alienates non-ServiceNow shops (significant market segment)
- ServiceNow's sales motion is slow and enterprise-heavy — not fast-land
- Pricing may inflate as ServiceNow bundles identity into enterprise agreements

**When you'll face them:** F500 accounts already on ServiceNow, enterprise deals where ISPM + visibility is the primary use case, "platform consolidation" strategies.

**How to win:**
- **Independence and focus:** "Purpose-built identity security, not a feature inside a workflow platform."
- **Speed during integration chaos:** They can't match startup deployment speed while integrating with ServiceNow systems
- **Non-ServiceNow shops:** If the buyer isn't on ServiceNow, their acquisition is a liability, not an asset
- **Governance depth:** Veza was always lighter on IGA workflow depth — Linx can compete here

---

## C1 (formerly ConductorOne)

**One-liner:** AI-native IGA+IAM+PAM platform with fastest time-to-value. Rebranded to C1 in 2026.

**Founded:** 2020 | **HQ:** San Francisco | **Funding:** $111M+ total ($79M Series B at ~$350M valuation)
**CEO:** Alex Bovee (ex-Okta) | **CISO:** Will Bengtson (ex-Netflix, ex-HashiCorp) — new 2026 hire

**What they do well:**
- Speed: go-live in <4 weeks, 300+ OOTB connectors via Baton (open-source framework)
- **Revenue tripled (300%+)** — fastest grower in category
- **NHI governance shipped** (was "announced," now GA)
- **AI Access Management launched March 2026** with 3,000+ hosted MCP servers
- **CrowdStrike Falcon integration deepened** — strategic ecosystem positioning
- Unified IGA+IAM+PAM — not bolted together
- Strong enterprise logos: Zscaler, DoorDash, Instacart, Ramp, Brex, DigitalOcean, Qualtrics
- CrowdStrike Falcon Fund as investor signals security ecosystem integration

**Where they're vulnerable:**
- "AI-native" claim is marketing-heavy — differentiation is really connector speed + UX
- Less depth on NHI than Veza or Silverfort
- ISPM is weak — they're primarily IGA-focused
- No data access governance
- Still smaller than Silverfort or incumbents — enterprise proof points thinner

**When you'll face them:** Mid-market and growth-stage enterprises replacing legacy IGA. Tech-forward companies wanting modern UX. Any deal with a fast-deployment requirement.

**How to win:**
- **ISPM/visibility depth** — C1 is primarily IGA-focused, thin on posture management
- **AI-native architecture vs. marketing** — dig into the actual differentiation
- **Autonomous remediation (Autopilot)** — concrete capability vs. their MCP server count
- On speed-led deals, don't compete on speed — compete on what they can't do (governance depth, autonomous action)

---

## Lumos

**One-liner:** Autonomous Identity platform with Albus AI multi-agent system. Strong AI story, capital concerns.

**Founded:** 2020 | **HQ:** San Francisco | **Funding:** ~$65M total (Series B, 2023) — **no new round since**
**CEO:** Andrej Safundzic

**What they do well:**
- Albus AI agent system: multi-agent architecture for access decisions, RBAC/ABAC from usage data
- Closed-loop architecture: discover → intelligence → agent-driven remediation → durable policy
- Agentic UARs (Dec 2025): AI-driven first pass on access reviews, claimed 6x faster campaigns
- Strong cloud-native/tech customer base: Pinterest, Anduril, GitHub
- Gartner IGA Market Guide inclusion (Oct 2025)

**Where they're vulnerable:**
- **Identity Security Agents are waitlist-only, not GA** — the marquee product is vaporware to most buyers
- **No new funding since 2023** — capital position weak vs. C1, Silverfort, Linx
- NHI gap narrowed (discovery + visibility) but **cert/API-key lifecycle governance still missing**
- Enterprise penetration thinner — strong in tech, less proven in F500 regulated
- No PAM capabilities
- "Autonomous" messaging may scare risk-averse buyers

**When you'll face them:** Cloud-first tech companies, IGA replacement deals in tech sector, AI-driven governance pitches.

**How to win:**
- **"Our agents are GA, theirs are waitlisted"** — Linx Autopilot vs. Lumos Identity Security Agents
- **Enterprise readiness** — compliance depth, regulated industry support where Lumos is thin
- **NHI gap:** Point at the certificate/API-key lifecycle gap Gartner confirmed
- **Capital concerns:** Raise the runway question subtly in evaluation — buyers care about vendor stability

---

## CrowdStrike/SGNL ⚠️ NEW

**One-liner:** Identity security as a feature of the Falcon platform. ITDR + real-time authorization, not governance.

**Founded:** 2021 (SGNL) | **Status:** $740M acquisition **announced Jan 8, 2026** — not yet closed (expected Q1 FY27)
**Scale (post-close):** CrowdStrike 29,000+ customers, ~$4B+ ARR overall

**What they'll do well:**
- Real-time access revocation integrated with Falcon threat detection
- Context-aware authorization for human/NHI/AI agent identities (SGNL's core IP)
- Continuous identity security tied to risk signals from the Falcon platform
- Ecosystem gravity: existing partnerships with SailPoint, C1, Silverfort create Falcon-as-hub dynamic
- 29,000+ existing customers for easy cross-sell
- Identity bundled into Falcon subscriptions at near-zero marginal cost

**Where they're vulnerable:**
- **Identity is a feature of the security platform**, not the core product. They optimize for ITDR + authorization, not governance.
- SGNL was pre-revenue relative to peers ($30M raised) — limited product maturity
- **Acquisition not yet closed** — integration motion is months away
- Governance depth (certifications, SoD, lifecycle) is minimal
- No connector ecosystem comparable to SailPoint or C1

**When you'll face them:** Deals where the customer is a CrowdStrike Falcon customer and identity bundles in. ITDR-led evaluations that expand into identity.

**How to win:**
- **Governance depth:** Linx covers IGA lifecycle + autonomous remediation. SGNL is an authorization engine.
- **Purpose-built vs. feature:** "Identity shouldn't be a side-car on your EDR platform."
- **Cross-stack coverage:** Linx governs identity across all systems, not just where Falcon agents run
- **Don't compete on threat detection** — that's Falcon's turf. Compete on governance, lifecycle, and autonomous action.

---

## SailPoint

**One-liner:** The IGA incumbent. Re-IPO'd, $1B+ ARR, shipped Agent Identity Security. Still the benchmark.

**Founded:** 2005 | **HQ:** Austin, TX | **Public** (re-IPO 2024 at $12.8B)
**Products:** Identity Security Cloud (SaaS), IdentityIQ (on-prem)

**What they do well:**
- **>$1B ARR** — largest pure-play identity vendor
- Most complete IGA feature set (SOD, role mining, certification, provisioning)
- **Agent Identity Security + MCP server** launched at Navigate 2025
- **CrowdStrike Falcon integration** — deeper ecosystem positioning
- Acquired Imprivata's IGA business — healthcare vertical depth
- Massive connector library and partner ecosystem
- Strong compliance/audit story — safe choice for regulated industries
- Data access governance (structured + unstructured)
- CAEP/shared signals support
- Atlas SaaS platform modernization effort

**Where they're vulnerable:**
- Implementation complexity: 12-18 month deployments are still common
- UX is dated — end-user experience lags modern expectations
- Cloud migration path (IdentityIQ → Identity Security Cloud) is painful for existing customers
- ISPM is not a strength
- AI capabilities feel "added" rather than native-first

**When you'll face them:** Every enterprise IGA deal. "Nobody gets fired for buying SailPoint."

**How to win:**
- **Speed to value** — "time-to-first-insight vs. time-to-first-certification-campaign"
- **Modern architecture** — native AI, graph-based data model, autonomous remediation
- **Frame as "SailPoint for compliance, Linx for security"** — don't compete on IGA completeness
- **Don't attack them head-on** on governance depth — find the adjacent wedge

---

## Saviynt

**One-liner:** Native convergence of IGA + IdP + PAM + NHI + agentic. Most underrated competitor.

**Founded:** 2010 | **HQ:** El Segundo, CA | **Funding:** $700M Series B (KKR, ~$3B valuation)
**Scale:** $200M ARR, **profitable**, 600+ enterprises, IPO signals strong

**What they do well:**
- **Native convergence** — IGA + IdP + PAM + NHI + agentic without acquisition integration debt
- **$700M Series B from KKR** — strong capital position
- **Profitable** — rare among identity vendors
- Shipped Integration & Onboarding Agent using Computer Using Agent technology
- **Identity Security for AI (RSAC 2026):** ISPM for AI + Agent Access Gateway
- **Gartner Peer Insights Customers' Choice 5 consecutive years**
- Strong regulated industry references
- IPO-ready

**Where they're vulnerable:**
- Broad but historically not differentiated on any single axis
- Legacy architecture underneath the modern UX in parts
- Less aggressive on speed-to-value than C1
- Weaker analyst visibility than SailPoint despite product strength

**When you'll face them:** Enterprise deals with convergence requirements (IGA + PAM + NHI), regulated industries, any deal where "fewest vendors" is a buyer criterion.

**How to win:**
- **AI-native architecture story** — their agentic products are newer, less proven than claimed
- **Speed of innovation** — large company with slower ship cadence
- **Specific capability depth** — find the one thing Saviynt does at "adequate" level that Linx does at "strong"
- **Treat as peer, not incumbent** — don't underestimate

---

## Opal

**One-liner:** JIT access specialist pivoting toward broader ISPM + agentic authorization under new CEO.

**Founded:** 2020 | **HQ:** San Francisco | **Funding:** $32M total — **capital constrained**
**CEO:** Howard Ting (Dec 2025, ex-Cyberhaven, grew to $1B+)

**What they do well:**
- JIT access / zero standing privilege is their strength
- New leadership with proven scale track record
- Shipped Risk Layer (ISPM) and Paladin (agentic authorization)
- MCP server support shipped

**Where they're vulnerable:**
- **Capital constrained** — $32M raised total, much less than peers
- Narrow JIT specialty limits TAM without successful platform expansion
- New products (Risk Layer, Paladin) are early — not battle-tested
- No large-scale enterprise references

**When you'll face them:** Tech companies with specific JIT access requirements, cloud-first deployments.

**How to win:** Compete on breadth. Opal is strong in one lane; Linx covers the full stack. Raise capital concerns if appropriate.

---

## Quick Reference: Positioning by Deal Type (Updated April 2026)

| Deal Type | Primary Threat | Linx Angle |
|---|---|---|
| IGA replacement (enterprise) | SailPoint, Saviynt, Silverfort | Modern architecture, AI-native, Autopilot, speed |
| IGA replacement (mid-market) | C1, Lumos | Depth of visibility + posture, enterprise readiness |
| ISPM / visibility | ServiceNow/Veza | Purpose-built, independent, not a workflow feature |
| PAM expansion | PANW/CyberArk | Identity ≠ PAM; independence from firewall vendor |
| NHI governance | Veza, Silverfort, Astrix, Oasis | Unified coverage (human + NHI + agentic), Autopilot |
| AI agent security | Veza, SailPoint, Saviynt, Silverfort | AI-native from inception, not retrofitted |
| Platform consolidation | PANW, ServiceNow, CrowdStrike | Best-of-breed value; focus on what bundled offerings can't do |
| Unified vision (head-to-head) | **Silverfort** | Native vs. acquired stack; agentless vs. agent; Autopilot GA |
