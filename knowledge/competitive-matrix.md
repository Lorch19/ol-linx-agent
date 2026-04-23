# Competitive Matrix — Identity Security Landscape

> Last updated: 2026-04-23 (added Token Security, Origin HQ; Niv-sourced research)
> Confidence: Estimated (web-sourced April 2026 + Gartner Oct 2025 IGA Market Guide). Validate against internal Linx intel before customer-facing use.
> Previous version: 2026-04-08 (pre-M&A-wave)

## Summary Scores (out of 100)

Quick-reference weighted scores. Methodology: weighted capability scoring normalized to 100 for readability.

| Vendor | Score (Apr 2026) | Δ vs Previous | Trajectory |
|---|---|---|---|
| SailPoint | 90 | +1 | Re-IPO'd at $12.8B, >$1B ARR, Agent Identity Security launch |
| CyberArk (Palo Alto Networks) | 88 | +3 | $25B PANW acquisition closed Feb 11, 2026 — platform bundling risk |
| ServiceNow/Veza | 88 | +1 | $1.25B deal closed March 2, 2026 — integration only 5 weeks old |
| Saviynt | 87 | +3 | $700M Series B (KKR), $200M ARR, Identity Security for AI at RSAC 2026 |
| Silverfort ⚠️ NEW | 87 | NEW | $222M raised, unicorn, 1000+ enterprises, building same unified vision as Linx |
| CrowdStrike/SGNL ⚠️ NEW | 86 | NEW | $740M deal announced Jan 2026 (not yet closed), identity via Falcon |
| C1 (ConductorOne rebrand) | 84 | +3 | $79M Series B, 300% revenue growth, AI Access Management shipped |
| Lumos | 80 | 0 | Identity Security Agents waitlist-only, capital concerns growing |
| Opal | 76 | +4 | New CEO Howard Ting, Risk Layer + Paladin shipped, capital-constrained |
| Astrix Security ⚠️ NEW | 75 | NEW | $85M raised, NHI leader expanding to human + AI agent coverage |
| Oasis Security ⚠️ NEW | 73 | NEW | $195M raised, most-funded pure NHI startup, 5x ARR growth |
| **Linx** | **72** | **+7** | **$50M Series B (Mar 31, 2026, Insight), $83M total, Autopilot GA, Fortune 500 contracts** |
| Zluri | 68 | -2 | "Next-Gen IGA" pivot without NHI, no new funding since 2023 |

## Detailed Capability Matrix

Scoring: 4=Best-in-class, 3=Strong, 2=Adequate, 1=Weak, 0=Absent

### Platform Acquirers

| Capability | Weight | PANW/CyberArk | ServiceNow/Veza | CrowdStrike/SGNL |
|---|---|---|---|---|
| Identity Visibility & Discovery | 15% | 3 | 4 | 3 |
| Access Graph / Relationship Mapping | 12% | 2 | 4 | 2 |
| IGA Core (lifecycle, certs, SoD) | 12% | 3 | 3 | 1 |
| NHI / Machine Identity Governance | 10% | 4 | 4 | 3 |
| AI/ML-Driven Automation | 10% | 3 | 3 | 3 |
| JIT / Least Privilege Enforcement | 8% | 4 | 3 | 3 |
| ISPM / Posture Management | 8% | 2 | 4 | 3 |
| Speed to Value / Deployment | 8% | 1 | 2 | 3 |
| Integration Breadth (connectors) | 7% | 3 | 4 | 4 |
| Compliance Automation | 5% | 3 | 3 | 2 |
| AI Agent / Agentic Identity | 3% | 3 | 3 | 3 |
| Data Access Governance | 2% | 2 | 3 | 1 |

### Legacy IGA

| Capability | Weight | SailPoint | Saviynt |
|---|---|---|---|
| Identity Visibility & Discovery | 15% | 3 | 3 |
| Access Graph / Relationship Mapping | 12% | 2 | 2 |
| IGA Core (lifecycle, certs, SoD) | 12% | 4 | 4 |
| NHI / Machine Identity Governance | 10% | 2 | 3 |
| AI/ML-Driven Automation | 10% | 3 | 3 |
| JIT / Least Privilege Enforcement | 8% | 2 | 2 |
| ISPM / Posture Management | 8% | 2 | 3 |
| Speed to Value / Deployment | 8% | 1 | 2 |
| Integration Breadth (connectors) | 7% | 4 | 3 |
| Compliance Automation | 5% | 4 | 4 |
| AI Agent / Agentic Identity | 3% | 2 | 3 |
| Data Access Governance | 2% | 3 | 3 |

### Modern Challengers

| Capability | Weight | Silverfort | C1 | Lumos | Opal | Linx |
|---|---|---|---|---|---|---|
| Identity Visibility & Discovery | 15% | 4 | 3 | 3 | 2 | 3 |
| Access Graph / Relationship Mapping | 12% | 3 | 3 | 3 | 2 | 3 |
| IGA Core (lifecycle, certs, SoD) | 12% | 2 | 3 | 3 | 2 | 2 |
| NHI / Machine Identity Governance | 10% | 3 | 3 | 2 | 1 | 2 |
| AI/ML-Driven Automation | 10% | 3 | 4 | 4 | 2 | 3 |
| JIT / Least Privilege Enforcement | 8% | 3 | 4 | 3 | 4 | 2 |
| ISPM / Posture Management | 8% | 3 | 2 | 3 | 2 | 3 |
| Speed to Value / Deployment | 8% | 3 | 4 | 4 | 3 | 3 |
| Integration Breadth (connectors) | 7% | 3 | 4 | 3 | 2 | 2 |
| Compliance Automation | 5% | 2 | 3 | 3 | 2 | 2 |
| AI Agent / Agentic Identity | 3% | 3 | 2 | 2 | 2 | 3 |
| Data Access Governance | 2% | 2 | 1 | 1 | 0 | 1 |

### NHI-Pure Plays

| Capability | Weight | Astrix | Oasis | Token Security |
|---|---|---|---|---|
| Identity Visibility & Discovery | 15% | 3 | 3 | 3 |
| Access Graph / Relationship Mapping | 12% | 3 | 3 | 2 |
| IGA Core (lifecycle, certs, SoD) | 12% | 1 | 1 | 1 |
| NHI / Machine Identity Governance | 10% | 4 | 4 | 4 |
| AI/ML-Driven Automation | 10% | 3 | 3 | 3 |
| JIT / Least Privilege Enforcement | 8% | 2 | 3 | 3 |
| ISPM / Posture Management | 8% | 3 | 2 | 2 |
| Speed to Value / Deployment | 8% | 3 | 3 | 3 |
| Integration Breadth (connectors) | 7% | 2 | 2 | 2 |
| Compliance Automation | 5% | 2 | 2 | 1 |
| AI Agent / Agentic Identity | 3% | 3 | 3 | 4 |
| Data Access Governance | 2% | 1 | 1 | 1 |

---

## Vendor Deep Dives

### SailPoint — 90/100 (+1)
Re-IPO'd at $12.8B valuation, surpassed $1B ARR. Launched **Agent Identity Security + MCP server** at Navigate 2025. CrowdStrike Falcon integration deepened. Acquired Imprivata's IGA business. Gap remains: deployment speed and UI. Still the "nobody gets fired" choice.

**April 2026 (post-matrix):** Expanded Agent Identity Security connectors to include SaaS versions of Salesforce, ServiceNow, and Snowflake — AI agents running in those platforms now discoverable and governable. New adaptive identity features announced. Breadth motion is accelerating.

**Key insight:** The incumbent is not asleep. They shipped agentic identity before most challengers. Don't assume innovation lag — compete on architecture, not claims.

**Customer voice (Apr 2026, 6 prospect calls):** Prospects call SailPoint the "Old Guard" — respected for depth but seen as over-engineered, expensive ($4.5M deployment cited), clunky UX, and poor at real-time cloud-native visibility. Active desire for modern alternative. Use "Too Big to Succeed" and "sticker shock" angles in mid-market deals.

### CyberArk (Palo Alto Networks) — 88/100 (+3)
**Major event:** $25B PANW acquisition **closed Feb 11, 2026** (largest security M&A ever). Record $1.36B CyberArk revenue, $1.44B ARR at close. Zilla IGA integrated, Venafi machine identity shipped, Secure AI Agents GA Dec 2025.

**Platform bundling risk:** PANW has 80K+ customers. Identity can now be bundled into Cortex XSIAM / Prisma Cloud deals. The "three architectures" critique (CyberArk core + Zilla + Venafi) is *evolving but not resolved*. Integration friction is the nearest-term vulnerability.

### ServiceNow/Veza — 88/100 (+1)
**Major event:** Acquisition **closed March 2, 2026** for ~$1.25B. Veza manages 30B+ access permissions across ~150 enterprise customers. Feb 2026 Enterprise Identity Control Plane update added NHI & AI Agent Security with **MCP Server Registry** support.

**Current state:** Integration is 5 weeks old as of this update. Roadmap is frozen or volatile. ServiceNow has $10B+ revenue and Security & Risk crossing $1B ACV — this is their identity play for the AI era.

**Strategic caution:** "Good enough identity bundled in your ServiceNow subscription" is the nightmare scenario for every standalone player. Clock started March 2.

### Saviynt — 87/100 (+3)
**Most underrated competitor.** $700M Series B from KKR at ~$3B valuation. $200M ARR, **profitable**, 600+ enterprises. Shipped Integration & Onboarding Agent using Computer Using Agent technology. RSAC 2026: launched **Identity Security for AI** (ISPM for AI + Agent Access Gateway). Named Gartner Peer Insights Customers' Choice 5 years running. IPO signals strong.

**Why they're dangerous:** Native convergence (IGA + IdP + PAM + NHI + agentic) without the integration debt of acquirers. Explicit agentic identity roadmap. Strong in regulated industries.

### Silverfort — 87/100 (NEW — CRITICAL MISSING COMPETITOR)
**The most important new addition.** $222M raised, unicorn valuation ($1B+), 589 employees, **1,000+ enterprise customers** including UPS, Airbus. Acquired Rezonate (Nov 2024) for cloud identity/NHI/ISPM.

**Product:** Agentless identity security platform enforcing universal MFA on legacy systems. Human MFA/PAM/ITDR + NHI security + **AI Agent Security (June 2025)** + Identity Graph. CrowdStrike Falcon integration. 100%+ YoY revenue growth.

**April 2026 (post-matrix):** Announced strategic partnership with SentinelOne (Apr 21, 2026) — joint coverage across identities, endpoints, cloud workloads, and AI applications. Runtime security narrative expanding. Silverfort is building ecosystem gravity faster than Linx.

**Why this matters for Linx:**
- Building **identical** "unified identity security platform" vision as Linx — with a 5-year head start
- Israeli company — **direct talent competitor** in Tel Aviv market
- Their cloud identity stack is *acquired* (Rezonate), not native — that's the main architectural vulnerability
- Their AI story is weaker than Linx's autonomous remediation pitch
- Their architecture is **agent-based** (lightweight connector on endpoints/servers) vs. Linx's agentless approach — depending on buyer preference, either can be a wedge

### CrowdStrike/SGNL — 86/100 (NEW)
⚠️ **Status:** $740M acquisition **announced Jan 8, 2026** — NOT YET CLOSED as of this update. Expected to close during CrowdStrike's Q1 FY27. Source correction vs. previous brief wording.

**What it means:** Extends Falcon with continuous context-aware authorization for human/NHI/AI agent identities. Real-time access revocation. 29,000+ customers. Combined with existing Falcon Identity Protection (ITDR). Partnerships with SailPoint, C1, Silverfort create identity ecosystem gravity.

**How they'll compete:** Identity as a feature of the security platform, not the core. They optimize for ITDR + authorization, not governance depth. Winnable on governance, tough to beat on security ecosystem integration.

### C1 (ConductorOne rebrand) — 84/100 (+3)
**Rebranded to C1** (c1.ai). $79M Series B at ~$350M valuation. **Revenue tripled (300%+)**. NHI governance shipped (was previously announced). **AI Access Management launched March 2026** with 3,000+ hosted MCP servers. CrowdStrike Falcon integration deepened. New CISO hire: Will Bengtson (ex-Netflix, ex-HashiCorp). Enterprise logos: Zscaler, DoorDash, Ramp, Brex.

**Still weaker on:** ISPM, enterprise-regulated depth. Fastest-executing mid-market competitor.

### Lumos — 80/100 (unchanged)
Albus launched as announced. Identity Security Agents **announced but waitlist-only** (not GA). NHI gap narrowed (discovery + visibility) but **cert/API-key lifecycle governance still missing**. **No new funding since Series B** (~$65M total). Capital concerns growing vs. C1's $111M total.

**Counter-positioning opportunity:** "Our autonomous agents (Autopilot) are GA in production; theirs are waitlisted."

### Opal — 76/100 (+4)
**New CEO: Howard Ting** (Dec 2025, grew Cyberhaven to $1B+). Shipped Risk Layer (ISPM), Paladin (agentic authorization), MCP server support. Only $32M raised total — **capital constrained** relative to peers. JIT specialty remains the core strength.

### Zluri — 68/100 (-2)
Pivoted to "Next-Gen IGA" with Zluri 2.0 but **no NHI support**, no new funding since July 2023, ~$4.3M revenue, headcount possibly halved. Structurally disadvantaged in the current capital environment. Watch list for distressed acquisition target.

### Astrix Security — 75/100 (NEW)
$85M raised ($45M Series B Dec 2024). **NHI market leader expanding to human identity monitoring.** Fortune Cyber 60. Customers: Workday, NetApp, Priceline. AI Agent Control Plane. CEO explicitly plans human + NHI + AI agent unified coverage — **converging on Linx's positioning** from the NHI side.

⚠️ **April 10, 2026 — Cisco acquisition talks:** Reports emerged that Cisco is in advanced negotiations to acquire Astrix for **$250-350M** (The Information, SiliconAngle, Calcalist). Deal NOT yet announced or closed. If confirmed, Astrix exits the standalone market and becomes a Cisco security play. Implications: (1) removes a direct competitor, (2) validates the NHI + AI agent space valuation, (3) Cisco/Astrix together would be a credible mid-market identity entrant. Watch RSAC 2026 (Apr 28) for any confirmation.

### Token Security — 63/100 (NEW — 2026-04-23)
$28M total ($22M Series A, Jan 2025, Notable Capital). Named to The Information's 50 Most Promising Startups of 2025.

**Product:** NHI security platform (service accounts, API keys, OAuth tokens, certs) with AI agent lifecycle management as primary 2026 vector. Launched **AI Agent Identity Lifecycle Management** (Nov 2025) — auto-inventories managed, home-grown, and personal AI agents including custom GPTs and MCP servers; assigns ownership; enforces least-privilege intent-based permissions; retires dormant agents.

**Differentiator: MCP two-sided play.** Launched industry-first **MCP Server for NHI Security** (May 2025) — security teams query/remediate machine identity risk via natural language (Claude, ChatGPT, Cursor). AND they secure MCP servers as identities. No competitor has announced both sides of this.

**vs. Linx:** Smaller, earlier-stage, NHI-focused without human identity breadth. But their AI agent lifecycle framing is tighter and more operationalized than anything Linx has shipped. Worth a deeper teardown before Identiverse.

**Source:** Niv Goldenberg drop, 2026-04-23.

### Oasis Security — 73/100 (NEW)
$195M raised total ($120M Series B March 2026, Craft Ventures). **Most funded pure NHI startup.** 5x ARR growth. NHI + Agentic Access Management focus. Not yet expanding to human identity but watch closely. Most likely to pivot to unified coverage next.

### Linx — 72/100 (+7)
**Series B closed March 31, 2026** — $50M led by Insight Partners, continued participation from Cyberstarts and Index Ventures. Total funding $83M. **Autopilot launched at RSAC 2026** (autonomous remediation). New CTO: **Sarit Reiner Frumkes** (ex-Payoneer). Fortune 500 contracts across banks, healthcare. Plans to double ~100 person workforce.

**Where Linx wins:** identity coverage breadth, deployment speed, AI-native architecture, autonomous remediation.
**Where Linx gaps:** governance depth, connector breadth, enterprise references vs. Silverfort.

---

## Strategic Notes

### The Feb-March 2026 Reshuffle
Three mega-deals closed or were announced in 60 days:
- **Feb 11, 2026:** PANW closes CyberArk ($25B)
- **Jan 8, 2026:** CrowdStrike announces SGNL ($740M, not yet closed)
- **March 2, 2026:** ServiceNow closes Veza (~$1.25B)

Combined: the three largest security platforms now own major identity assets. **Standalone identity startups have 12-24 months before the platform-bundling motion fully matures.**

### The Real Head-to-Head: Linx vs. Silverfort
Silverfort is the most important new entry on this matrix. Same vision (unified human + NHI + agentic), same geography (Israeli), 5-year head start. This is the competitor to study most carefully. Key battle dimensions:
- **Agentless (Linx) vs. agent-based (Silverfort)** — architectural difference that buyers care about
- **Native cloud identity (Linx) vs. acquired (Silverfort via Rezonate)** — architectural coherence argument
- **Autonomous remediation (Autopilot, Linx) vs. enforcement layer (Silverfort)** — positioning difference
- **Scale gap:** Silverfort 1000+ customers, 589 employees; Linx ~100 employees, fewer reference customers

### Category Definitions Are Shifting
- Gartner transitioned IGA from Magic Quadrant to **Market Guide** (Oct 2025, 9.2% category growth) — category is evolving, not consolidating
- Forrester introduced **Workforce Identity Security Platforms** category
- IVIP (Identity Visibility & Intelligence Platforms) and ITDR continue as separate categories but converging
- **AI Agent Identity Governance** is emerging whitespace — not yet a defined Gartner category

### "AI-Native" Is Fully Commoditized
ConductorOne/C1, Lumos, Veza, Saviynt, CyberArk, CrowdStrike all claim AI-native. **Differentiation must move from "we use AI" to measurable outcomes:** time-to-remediation, toil eliminated, autonomous actions per day, policy violations caught per week. Linx's **Autopilot GA** is a concrete claim to make vs. Lumos's waitlisted agents.

### Adjacent / Complementary Players (not direct competitors — 2026-04-23)

**Origin HQ** — Endpoint security for the AI agent reasoning layer ("semantic observability"). Captures the full trace of every agent: originating prompt, reasoning chain, file reads, processes, connections. Detects prompt injection, context-window poisoning ("Brainworm"), tool-call hijacking at the reasoning layer — attacks that leave no binary signature, so EDR tools miss them entirely.

**Not a Linx competitor.** Origin governs *what agents decide and why*; Linx governs *what credentials agents hold and what access those credentials grant*. Complementary stack. Potential partnership angle — their observability + Linx's identity governance = full-stack AI agent security. Watch for scope expansion.

**Source:** Niv Goldenberg drop, 2026-04-23.

---

### Capital Position Matters Now
With the M&A wave compressing the standalone window, raised capital = survival runway. Rough rankings:
- **Well-capitalized:** Silverfort ($222M), Oasis ($195M), Linx ($83M), C1 ($111M+), Saviynt ($700M Series B)
- **Under-capitalized:** Lumos (no new round since ~$65M), Opal ($32M), Zluri (distressed)
- **Acquisition-tracked:** Astrix ($85M raised, advanced Cisco talks at $250-350M — may exit standalone market)

### April 2026 Signals (post-Apr-10 update)
- **Cisco/Astrix advanced talks** (Apr 10): If closed, removes NHI-pure competitor; validates $250-350M NHI valuation floor. Watch RSAC 2026 (Apr 28).
- **Silverfort + SentinelOne partnership** (Apr 21): Ecosystem gravity building; runtime + identity coverage expanding.
- **SailPoint April connector expansion**: Salesforce, ServiceNow, Snowflake AI agent governance — deepening breadth moat.
- **CrowdStrike/SGNL close pending** (expected by Apr 30): Still open. Once closed, CrowdStrike becomes a fully integrated identity + security competitor.
