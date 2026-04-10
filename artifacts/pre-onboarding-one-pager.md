# Pre-Onboarding Work Product — Omri Lorch
**Prepared before Day 1 (April 12, 2026)**

---

## What I Did Before Showing Up

**Domain ramp (2 weeks):** Identity stack fundamentals (IAM/IGA/PAM/ISPM/CIEM), NHI and agentic identity governance, legacy IGA failure modes, market dynamics. Read Gartner IGA Market Guide, 3 Linx onboarding papers, analyst reports.

**Competitive landscape mapped (12 vendors, 12 capabilities):** I segmented the market into four tiers rather than one long ranking — the dynamics inside each tier are what matter.

**Tier 1 — Legacy IGA (the incumbents we compete against on every enterprise deal):**
- **SailPoint (90/100)** — Re-IPO'd at $12.8B, >$1B ARR, shipped Agent Identity Security + MCP server at Navigate 2025. Still slow to deploy, dated UX. The "nobody gets fired" choice.
- **Saviynt (87/100)** — most underrated competitor. $700M Series B from KKR, $200M ARR, profitable, native convergence of IGA+PAM+NHI+agentic. Shipped Identity Security for AI at RSAC 2026. Treat as peer, not incumbent.

**Tier 2 — Platform Acquirers (the biggest near-term threat via bundling):**
- **PANW/CyberArk (88/100)** — $25B acquisition **closed Feb 11, 2026**. Identity now bundled into 80K+ PANW customer base at near-zero marginal cost. "Three architectures" problem (CyberArk + Zilla + Venafi) is evolving but not resolved.
- **ServiceNow/Veza (88/100)** — $1.25B deal **closed March 2, 2026**. Integration 5 weeks old. Potentially bundles identity into standard ServiceNow subscriptions across $10B+ customer base. NHI & AI Agent Security shipped.
- **CrowdStrike/SGNL (86/100)** — $740M acquisition **announced Jan 2026** (not yet closed). Identity as a feature of Falcon, not core. 29,000+ customers. ITDR + real-time authorization, weak on governance.

**Tier 3 — Modern Challengers (peer-level competitors, different plays):**
- **Silverfort (87/100)** — ⚠️ **the most important competitor I'd missed.** $222M raised, unicorn, 1000+ enterprises (UPS, Airbus). Building the **identical unified vision as Linx with a 5-year head start.** Israeli company — direct talent competitor. Their architectural weakness: cloud stack is acquired (Rezonate), not native. Their AI story is weaker than Autopilot.
- **C1 / ConductorOne rebrand (84/100)** — $111M+ total, revenue tripled (300%), NHI shipped (no longer vaporware), AI Access Management with 3,000+ MCP servers. Fastest mid-market execution in category.
- **Lumos (80/100)** — strong AI story on paper, but **Identity Security Agents are waitlist-only, not GA.** No new funding since 2023. Capital concerns growing.
- **Opal (76/100)** — JIT specialist, new CEO from Cyberhaven, capital constrained.

**Tier 4 — NHI Pure-Plays (converging toward Linx's positioning):**
- **Astrix Security (75/100)** — $85M raised, CEO explicitly plans human + NHI + AI agent coverage. On a collision course with Linx.
- **Oasis Security (73/100)** — $195M raised (most-funded pure NHI), 5x ARR growth, $120M Series B March 2026.

**Where Linx fits:**
- **Linx (72/100, up from 65 pre-Series B)** — $50M Series B closed March 31, 2026 (Insight Partners, $83M total). Autopilot GA at RSAC 2026. Fortune 500 contracts. ~100 employees, plan to double.
- **Wins:** identity coverage breadth, deployment speed, AI-native architecture, **autonomous remediation (Autopilot GA is the strongest Action layer in the market)**
- **Gaps:** governance depth vs. SailPoint/Saviynt, enterprise references vs. Silverfort, connector breadth vs. C1
- **The gap Linx fills:** the market is heavy on visibility and thin on action. Legacy IGA does governance but can't remediate autonomously. ISPM vendors (Veza) see problems but don't fix them. NHI pure-plays cover one identity type. Linx is the only vendor combining unified coverage (human + NHI + agentic) with autonomous remediation in GA today — shelf life on that claim is ~12 months.

**Positioning internalized:**
- "Only we" claim: unified human + NHI + agentic governance with **autonomous remediation (Autopilot GA)** on a single AI-native graph
- Shelf life: **~12 months** (shortened from 18) — Saviynt shipped AI agent governance at RSAC 2026, Silverfort has identical vision with 5-year head start
- Wedge: enter with visibility + autonomous remediation → expand to governance depth
- The one thing to weaponize: **Autopilot is GA. Lumos's Identity Security Agents are waitlisted. SailPoint/Saviynt talk AI-assisted. We're the only vendor shipping autonomous action in production.**

**Market read:**
- $29B identity security market today → $56B by 2029 (IDC). IGA sub-segment $8.6B, 10%+ CAGR
- **The Feb–Mar 2026 M&A wave changed everything:** PANW/CyberArk ($25B, closed Feb 11), ServiceNow/Veza ($1.25B, closed Mar 2), CrowdStrike/SGNL ($740M, announced Jan — not yet closed). Three largest security platforms now own major identity assets.
- **Standalone startup window: 12–24 months** before platform-bundled identity offerings mature. Clock started Feb 11, 2026.
- Authorization sprawl, not authentication, is the primary identity risk today
- Remediation is the underdeveloped layer — market is heavy on visibility, thin on action

---

## Questions I'm Bringing In

**Customer & business:**
- Walk me through a deal end to end — lead to close to expansion. Where does product lose visibility?
- Win rate — what's the #1 reason they chose us? #1 reason they didn't?
- Who's the customer I should shadow first?

**Data & metrics:**
- What's our metrics stack? What are we actually measuring vs. flying blind on?
- What metrics tell the Series B story? Where's the gap?

**Where I can help now:**
- What decision is on the table right now that I could contribute to?
- What's blocking you right now that a PM should own?

**AI-native:**
- What's our internal AI stack for product work? I want to plug in.
- Are we dogfooding our own product? What breaks?

---

## Where My Read Might Be Wrong

- Linx scored 72/100 on my external-only analysis (up from 65 after accounting for Series B, Autopilot GA, Fortune 500 contracts) — likely still missing internal capabilities, roadmap items, or deal-level intel
- **Silverfort read needs internal validation** — if we're seeing them in deals, I want to know win rate, loss reasons, and how we currently position against them. This is the #1 question I'm bringing in.
- Governance depth looks like the biggest capability gap vs. SailPoint/Saviynt — is the wedge strategy (visibility + autonomous action first, governance depth later) intentional or something we're racing to close?
- My NHI/agentic identity read is analyst-sourced — need to validate against what customers actually ask for in deals
- The "12-month shelf life" on our "only we" claim assumes Silverfort, Saviynt, and ServiceNow/Veza continue their current pace. If any of them stall, we have more runway. If PANW integrates CyberArk faster than expected, we have less.
