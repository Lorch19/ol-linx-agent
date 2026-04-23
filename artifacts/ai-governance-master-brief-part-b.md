# AI Governance Master Brief — Part B: The Market
> Distilled from `knowledge/competitive-matrix.md`, `references/gartner-833731-summary.md`, `artifacts/ai-agent-identity-sme-brief-2026-04-21.md`.
> Designed for: 5-min read before any competitive or customer conversation.
> Written: 2026-04-23. Items marked `[verify]` are claims to cross-check in Gemini before relying on them publicly.

---

## The analyst lens — what Gartner actually says (and what it doesn't)

Gartner 833731 (Aug 2025, Nathan Harris + Akif Khan) is about **access delegation** — how humans should safely hand off access to AI agents. It is NOT about agent discovery or inventory. That's a narrower lens than Linx's scope.

**Three things worth quoting from it:**

1. **SoD validation:** *"Allowing the agentic AI software itself to manage what it is authorized to do on behalf of humans violates segregation of duties and will not pass any audit."* This is the single best analyst line Linx has. `[verify: still citable as Aug 2025 Gartner — confirm doc hasn't been superseded]`

2. **Incumbent gap:** Gartner names IBM, Ping Identity, Transmit Security as "strong" on human→agent delegation. **SailPoint, CyberArk, Okta, Entra, Saviynt are all absent.** That's the window Linx is pointed at.

3. **Credential-sharing timebomb:** *"By 2028, 90% of orgs that allow human-to-agent credential sharing will have to redo the design due to security/compliance."* `[verify: check if this has been updated in 2026 analyst coverage]`

**The Gartner trap to avoid:** their frame shrinks your story. Gartner covers delegation (one interaction pattern); Linx covers the full agent inventory regardless of delegation method. Use Gartner for the SoD/credential-sharing ammunition, not as the category definition.

---

## The competitive camps — six groups you'll encounter

### Camp A — NHI-rooted, expanding to agents
**Astrix** ($85M raised) and **Oasis** ($195M, most-funded pure NHI startup). Came from non-human identity discovery, now expanding toward AI agent coverage.

**Astrix threat level: ELEVATED.** They have Fortune Cyber 60 status, Workday/NetApp/Priceline as customers, and are explicitly building toward Linx's positioning from the NHI side. ⚠️ Cisco acquisition talks emerged Apr 10 ($250-350M) — if this closes, Astrix exits the standalone market and becomes a Cisco play. Watch RSAC 2026 (Apr 28). `[verify: has Cisco/Astrix deal been confirmed or denied post-Apr 10?]`

**Linx line vs. NHI players:** "Linx brings IGA + ISPM discipline on top of the NHI discovery layer. We're not competing with NHI platforms — we're the governance layer for what they've already found."

---

### Camp B — AM vendors owning the delegation protocol
**Ping Identity, IBM, Transmit Security.** Gartner-named as "strong" on human→agent delegation via OAuth/OBO flows.

**Not the battle to fight.** They own the delegation plumbing (AM layer). Linx is not an AM vendor. Linx governs agents *already delegated to* — posture management on top of what AM built. Frame them as complementary, not competitive.

---

### Camp C — Legacy IGA with marketing ahead of product
**SailPoint** (90/100), **Saviynt** (87/100), **CyberArk/PANW** (88/100).

**SailPoint:** Re-IPO'd at $12.8B, >$1B ARR. Shipped Agent Identity Security + MCP server at Navigate 2025. Now expanding connectors to Salesforce/ServiceNow/Snowflake AI agents (Apr 2026). The incumbent is NOT asleep — they shipped agentic identity before most challengers. Beat them on architecture (modern, agentless, fast deployment) not on claims. Customers call them "Old Guard" — $4.5M deployment cited, clunky UX, poor real-time cloud-native visibility.

**Saviynt — highest threat among incumbents.** $700M Series B (KKR), $200M ARR, profitable. At RSAC 2026 (Mar 2026), their CPO (Nitin Sonawane) published the company's AI agent security story verbatim with Linx's pitch: discovery/inventory/risk (Posture Management), registration/ownership/lifecycle governance, and a named **AI Access Gateway** for runtime enforcement. Their three-question framework — "Can you see your agents? Can you govern them? Are they accessing the right systems?" — is the same mental model Linx is building. They published it first as a CPO-authored narrative. `[verify: has Saviynt's AI Access Gateway shipped product, or is it still marketing? Check product pages.]`

**Where Saviynt is still beatable:** they haven't named which tier-2 platforms they actually cover (ChatGPT/Copilot/Cursor/N8N/ServiceNow — still vague). No SoD-for-AI-agents language. No orphan-agent/ownership-lifecycle specificity. Their runtime-gateway pitch ("thousands of decisions at machine speed") is more vulnerable to audit-first framing than governance-before-action. Full competitive teardown due Apr 30.

**CyberArk (now PANW):** $25B acquisition closed Feb 11, 2026. Shipped Secure AI Agents GA Dec 2025. Platform bundling via Cortex XSIAM is the real risk — identity bundled into a platform deal, not purchased standalone. Architecture friction (CyberArk core + Zilla IGA + Venafi machine identity = three acquisitions, not native integration) is the near-term vulnerability.

---

### Camp D — Modern challengers (mid-market)
**C1 (ConductorOne rebranded)** — $79M Series B, 300%+ revenue growth. Shipped AI Access Management (Mar 2026) with 3,000+ hosted MCP servers. Fastest-executing mid-market competitor. Weaker on ISPM and regulated-industry depth.

**Silverfort** — the most important competitor NOT widely tracked by Linx yet. $222M raised, unicorn, 1,000+ enterprise customers (UPS, Airbus). Building the identical "unified human + NHI + AI agent" vision as Linx — with a 5-year head start and an Israeli HQ (direct talent competitor). Announced SentinelOne partnership Apr 21. Their AI story is weaker; their cloud identity stack is *acquired* (Rezonate), not native — that's the architectural vulnerability. `[verify: has Silverfort shipped a specific AI agent governance product, or is it bundled into their broader platform?]`

---

### Camp E — AI-native NHI startups
**Token Security** ($28M, Series A Jan 2025). Named The Information's 50 Most Promising Startups 2025.

Their AI agent lifecycle framing is operationally tighter than anything Linx has shipped today: auto-inventories managed + homegrown + personal AI agents including custom GPTs and MCP servers, assigns ownership, enforces least-privilege intent-based permissions, retires dormant agents. Launched AI Agent Identity Lifecycle Management Nov 2025. Also: industry-first MCP Server for NHI Security — security teams query/remediate machine identity risk via natural language (Claude, ChatGPT, Cursor).

**Smaller and NHI-focused (no human identity breadth).** But their AI agent narrative specificity is sharper than Linx's current external story. Needs a deep teardown before Identiverse. `[verify: has Token Security added human identity coverage since Jan 2025?]`

---

### Camp F — Complementary, not competitive
**Origin HQ** — "semantic observability" for the AI agent reasoning layer. Captures the full trace of every agent: originating prompt, reasoning chain, file reads, tool calls. Detects prompt injection, context-window poisoning, tool-call hijacking — attacks that leave no binary signature so EDR misses them.

**Not a Linx competitor.** Origin governs *what agents decide and why*; Linx governs *what credentials agents hold and what access those credentials grant*. Say: "They govern the reasoning layer; we govern the identity layer. Different stack levels." Potential partnership angle. `[verify: has Origin HQ expanded scope into identity/credential territory since Apr 2026?]`

---

## The platform-bundling clock

Three mega-deals closed in 60 days (Jan–Mar 2026):
- PANW closes CyberArk ($25B, Feb 11)
- CrowdStrike announces SGNL ($740M, Jan 8 — not yet closed) `[verify: has CrowdStrike/SGNL deal closed?]`
- ServiceNow closes Veza ($1.25B, Mar 2)

**The stakes:** standalone identity startups have ~12-24 months before platform-bundling motion fully matures. "Good enough identity bundled in your ServiceNow subscription" is the nightmare scenario. Linx's Series B window is exactly this window.

---

## The five competitive claims worth memorizing

1. **The Gartner SoD line** — *"violates segregation of duties and will not pass any audit."* No incumbent can say this against themselves.
2. **Named platform specificity** — Linx names the exact platforms: ChatGPT Enterprise, Copilot Studio, Cursor, N8N, ServiceNow AICT. Incumbents say "AI agents" with no platform list.
3. **Tool-as-first-class** — every MCP server + API endpoint gets a record with permissions, target URL, auth type. Blast radius becomes queryable. Nobody else does this.
4. **Autopilot GA** — autonomous remediation is shipped and in production. Lumos is waitlisted. Saviynt's AI features are marketing-stage. `[verify: confirm Autopilot status post-RSAC]`
5. **Deployment speed** — "sticker shock" on SailPoint ($4.5M cited by prospects). Linx's fast time-to-value is the modern wedge vs. legacy IGA.

---

## What to watch before any competitive meeting

- **RSAC 2026 (Apr 28):** Cisco/Astrix deal may be confirmed. Watch SailPoint, Saviynt, C1 for product announcements.
- **CrowdStrike/SGNL close** expected ~Apr 30.
- **Saviynt AI Access Gateway** — is it shipped product or marketing? Confirm before a room where Saviynt comes up.
- **Token Security** — needs a full teardown before Identiverse. Their AI agent lifecycle framing may become the reference frame buyers use.
