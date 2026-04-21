# AI-Agent Identity Security — SME Brief (v0.3)

> Purpose: the one document Omri carries into any room (Niv, sales, analyst, customer) to sound like the matter expert on the external/market/competitive side of the Agentic AI Identity epic. Technical depth is owned by Amir Ben Ami.
> Authored 2026-04-21, v0.1. Updated same day to v0.2 with Slack `#governance-of-agentic-ai` extraction. Bumped to v0.3 same day with Saviynt CPO (Nitin Sonawane) LinkedIn post — CPO-authored RSAC narrative, See/Govern/Enforce framework, named AI Access Gateway. Sources: repo knowledge files + Gartner 833731 + PMs Agent output (2026-04-20) + `knowledge/slack-governance-channel-extraction-2026-04-21.md` + Saviynt CPO LinkedIn (quoted in `log.md` 2026-04-21). Nothing outside this list is assumed.

---

## 1. Problem space — one paragraph you can say out loud

Enterprises are pushing AI agents into production faster than identity systems can model them. An agent is a new kind of actor — it holds credentials, takes actions across many apps, inherits human permissions via delegation, and disappears before an access review can run. Classic IAM built three things that all assume stable long-lived accounts attached to a human: an IDP (who are you), an IGA platform (who should have access), and a PAM vault (how to protect the keys). None of those three answer the questions a CISO is now being asked: *where are the agents, who owns them, what can they reach, and who signs off when they act?* Agentic AI identity security is the emerging category that has to answer those four questions — and there is no incumbent.

## 2. Why now — four forces compressing at once

1. **Supply shock.** Every major SaaS shipped an agent platform in <12 months: ChatGPT Enterprise GPTs, Copilot Studio, Cursor, Salesforce Agentforce, ServiceNow AICT, N8N. Tier-2 "configured agents" have gone from zero to the default way enterprises extend their apps.
2. **Protocol shock (MCP).** Model Context Protocol became the de-facto agent-to-tool interface in 2025. It runs on OAuth 2.1 + PKCE at the server boundary but **MCP authorization is optional in spec**. Gartner 833731 explicitly calls MCP a credential-sharing risk vector. [→ knowledge/ai-governance-epic.md §MCP authentication]
3. **Regulatory shock.** Gartner SPA: *"by 2028, 90% of organizations that allow human-to-agent credential sharing will have to redo the design."* First auditor to ask "show me your agent inventory" prints a market. [→ references/gartner-833731-summary.md]
4. **Incumbent silence.** Gartner 833731 names only IBM, Ping, Transmit as "strong" on human→agent delegation. **SailPoint, CyberArk, Okta, Entra, Saviynt are absent.** No ISPM/IGA vendor is named as strong in this space. That is the empty lane.

## 3. Market state — what we actually know

| Signal | Evidence | Confidence |
|---|---|---|
| Identity security is the fastest-growing cyber segment | Gartner Oct 2025 | confirmed |
| IGA market grew 9.2% '23→'24, 10.7% forecast '24→'25, ~55 vendors | Gartner 2Q25 | confirmed |
| NHIs outnumber humans 10–50× in typical enterprises | Veza 2025 | estimated |
| 70% of CISOs will use an IVIP by 2028 | Gartner SPA | confirmed |
| ServiceNow/Veza, CyberArk/Zilla, Palo Alto/CyberArk — platform consolidation in <12 months | Press releases | confirmed |
| Dedicated "AI agent identity" TAM | **Not sized by any analyst we've seen** | gap |
| Customer pull ("we'd buy this tomorrow") | **Not yet validated for Linx** — Maria CISO is a persona | gap |

**Read:** the market is real and moving, but nobody has sized specifically the "agent identity" slice. Expect a Gartner Emerging Tech note within 12 months. First named leader in a Gartner doc wins analyst gravity. That's a positioning target, not just a research task.

## 4. Standards landscape — what's actually standard today

| Layer | Standard in use | Status | Gap |
|---|---|---|---|
| Authentication (agent → SaaS) | OAuth 2.0 / 2.1 + PKCE | de-facto standard; what MCP runs on | no standard for *delegation* to agent specifically |
| Delegation | RFC 8693 token exchange; OAuth on-behalf-of flows | spec exists, adoption thin | Gartner names only IBM/Ping/Transmit as strong implementers |
| Cryptographic workload identity | SPIFFE/SPIRE; TPM/SGX attestation | mature in cloud-native, absent in SaaS | the "ephemeral attested" school (unmitigatedrisk.com) sits here |
| Agent-to-tool | MCP (JSON-RPC 2.0 over HTTP/SSE or STDIO) | emerging dominant — Anthropic-backed | MCP authz is **optional**; credential sharing common |
| Agent-to-agent | A2A / ACP / LMOS | nascent; competing proposals | no enforced mutual-auth or trust-boundary standard |
| Provisioning / lifecycle | SCIM; CAEP for revocation signals | standard for humans; patchy for NHIs | no SCIM-equivalent for agents |
| Governance framework | "10 capabilities for IAM of LLM agents" (PDF, source of Linx's model) | academic + vendor literature | no certification or audit standard yet |

**The line to carry:** the plumbing exists (OAuth 2.1 + MCP + SCIM + SPIFFE). What's missing is the **governance layer** that translates all of it into audit, ownership, and SoD. That's the ISPM/IGA gap Linx is pointed at.

## 5. Two identity-model schools — pick a side knowingly

| School | Thesis | Who's in it | Strength | Weakness |
|---|---|---|---|---|
| **Node-primary** (graph) | An agent is a first-class node with owner, tools, model, capabilities. Governance is graph-native. | Linx (decided), Astrix, ConductorOne, most IGA-adjacent | Fits existing IGA/ISPM workflows; auditable | Struggles with ephemeral agents (minutes-lived) — core of the Linx tension in `ai-governance-epic.md §Tensions` |
| **Ephemeral / crypto-attested** | Identity is a short-lived, cryptographically attested session. SPIFFE/TPM/SGX. No persistent agent record. | unmitigatedrisk.com, cloud-native security thinkers, some CNAPP vendors | Mathematically clean; handles agent churn | No retrofit path to existing IGA; no UI for "agent inventory" |

**Omri-speaking position:** "Linx is node-primary because that's what a CISO can run an access review against. The ephemeral-attested school is correct about the physics of agents — we'll extend the graph with session-level edges when M4 lands. We are not religious about the model; we are religious about the audit outcome."

**Internal signal worth knowing:** Niv dropped the ephemeral-attested blog (unmitigatedrisk.com) into `#governance-of-agentic-ai` on Aug 24 with a 🙏 reaction and no pushback. CPO-level receptive to the counter-school — don't dismiss ephemeral-attested in a room with Niv. [→ `knowledge/slack-governance-channel-extraction-2026-04-21.md` §2]

## 6. Competitive camps — who you'll bump into, grouped

Not a vendor list — the framing you'll use in a room. Confidence on each camp is based on what's in `ai-governance-epic.md`, `competitive-matrix.md`, `battle-cards.md`, and the 16-URL competitor fetch still pending via Linx Claude (`prompts/linx-claude-competitor-fetch.md`).

**Camp A — AI Agent Control Plane (NHI-rooted).** Astrix, Oasis. Rooted in non-human identity discovery, now rebranding toward agents. Astrix's Bayer-authored "Touchpoints Between AI and NHIs" is the reference artifact for this frame. **Strength:** credibility in NHI; customer logos. **Linx line:** Linx is the IGA+ISPM discipline on top of the NHI layer — not a competing NHI platform.

**Camp B — AM vendors extending to delegation.** Ping, IBM, Transmit. Named by Gartner 833731 as "strong." **Strength:** the delegation protocol itself (OAuth/OBO). **Linx line:** we don't play in the delegation protocol; we are the posture + inventory layer for agents that have already been delegated to. Complement, not substitute.

**Camp C — IGA/PAM incumbents with marketing ahead of capability.** CyberArk ("Secure Agentic AI"), SailPoint (BrightTALK webcast), CrowdStrike ("secures AI agents across SaaS"), Okta ("Identity Security Fabric," Sep 2025). **Strength:** distribution + CISO relationships. **Linx line:** Gartner did *not* name any of them as strong on delegation; marketing ahead of product is the exact window Linx is exploiting.

**Camp C-prime — Saviynt, flagged separately because the claim parity is unusually high.** Saviynt's Mar 24, 2026 RSAC post announces discovery + inventory + access graph + risk detection + UARs + **MCP gateway** + real-time access control — Linx's pitch almost verbatim. Niv shared it in-channel with "Very impressive," zero replies. [→ `slack-governance-channel-extraction-2026-04-21.md` §3 #24]

Saviynt's CPO (Nitin Sonawane) followed up with a LinkedIn post calling it *"the biggest launch in Saviynt's history"* and framing the product around three questions: **(1) Can you see your AI agents? (2) Can you govern your AI agents? (3) Are your AI agents accessing the right systems — and are you enforcing policies in real time?** Three named pillars: **Posture Management for AI agents** (discovery/inventory/risk), **AI agent lifecycle governance** (registration/ownership/scope/lifecycle), and a named **AI Access Gateway** for runtime enforcement. The post explicitly argues *"you cannot secure AI agents without all three"* and that Saviynt *"deliberately decided not to stay in our traditional swimlane."*

**Why it matters:** (a) CPO-authored = company-level strategic bet, not a feature release. (b) Three-question framework is the mental model Saviynt wants CISOs to adopt — if it lands first, Linx answers their frame instead of setting one. (c) "AI Access Gateway" is a named runtime product that parallels Amir Ben Ami's MCP gateway work; Saviynt shipped the marketing, Linx hasn't. (d) "You cannot secure AI agents without all three" is the same category-collapsing argument Linx is building — **Saviynt got it to market first as a narrative.**

**Gaps in Saviynt's claim that are Linx openings:** no named tier-2 platforms (ChatGPT/Copilot/Cursor/N8N/ServiceNow AICT — still vague *which* agents); no SoD-for-AI-agents framing (Gartner 833731 wedge still open); no orphan-agent / ownership-lifecycle language; runtime-gateway posture ("thousands of decisions at machine speed") is easier to undercut with audit-first framing than governance-before-action. **Threat priority upgraded from medium to high. Full competitive teardown before June demo — commitments.md Apr 30.**

**Camp D — Shadow-AI detection.** Clutch ("Shadow AI discovery"), parts of Zenity/Prompt Security. **Strength:** a wedge CISOs can buy in a quarter. **Linx line/risk:** the ticket's non-goal ("3p internal agents as black box") is Clutch's entire wedge. If we leave this uncovered, Clutch wins the visibility conversation first. [→ ai-governance-epic.md §Tensions #1]

**Camp E — LLM app-security.** Noma, Prompt Security, Lasso, Credal. **Positioning:** prompt / PII / data-layer. Not our category but named alongside us constantly — bridge by saying "they govern what the model says; we govern what the agent can reach."

**Camp F — "AI agent + NHI" converged startups.** Natoma, Token Security, Aembit. **Strength:** identity-native, agent-native from day one. **Linx line:** our discovery breadth (12 connectors, M365/Entra in 58% of tenants per PMs Agent 2026-04-20) is the asymmetry; they have narrower app coverage today.

## 7. Linx's lane — the tight positioning statement

**"Linx is the inventory and governance layer for agents already delegated to enterprise systems. We are not the delegation protocol, not the prompt guardrail, not the shadow-AI sniffer in isolation — we are the one pane where a CISO can answer *where, who, what, and who signs off.*"**

The three moves that make this credible:

1. **Node-primary graph extended with Tool-as-first-class.** Each tool (API or MCP server) gets a record with target URL + permissions. Blast radius becomes queryable. This is already in the epic spec.
2. **Amir Ben Ami's MCP telemetry bet.** Two gaps this potentially solves:
   - **App-side:** Salesforce, ServiceNow, Atlassian don't expose OAuth-app enumeration today (PMs Agent 2026-04-20).
   - **Agent-platform side:** Amir Hamenahem's Sep 9 API-availability scan logged Claude, Gemini, and Microsoft Copilot as "no API" for agent discovery. [→ `slack-governance-channel-extraction-2026-04-21.md` §5] MSFT Entra Agent ID (Oct 21) partially unblocks the Copilot side. **For Claude + Gemini, MCP may be the only discovery path.** That makes Amir Ben Ami's MCP work potentially the primary vector for two of the tier-2 M1 platforms — confirm scope at Thursday Apr 23 deep dive before leaning on it externally.
3. **SoD for AI agents as the analyst-endorsed wedge.** Gartner: *"allowing the agentic AI software itself to manage what it is authorized to do on behalf of humans… violates segregation of duties and will not pass any audit."* No one else is saying this in product language yet. [→ gartner-833731-summary.md]

## 8. The four customer questions — map each to Linx evidence

| Question | Owning milestone | Evidence today |
|---|---|---|
| Where are my agents? | M1 discovery + inventory | 12 connectors; M365/Entra 58% tenant coverage; AI-vendor SystemName enums exist (ANTHROPIC, CHATGPT, CURSOR, DEVIN) but no classification logic ships yet |
| Who owns them? | M1 ownership assignment | Node-primary Owner property on Agent; orphan-flagging logic exists in graph-analyzer |
| What can they reach? | M2 authz & delegation | OAuth scope viz + delegation chain viz planned; depends on connector API depth |
| Who signs off when they act? | M3 approval chains + UARs for agents | Slice of IGA workflow reused; not yet built for agent persona |

## 9. Future vision — what to say when asked "where does this go"

12 months: every F500 has an agent inventory as a compliance requirement; first regulator (EU AI Act enforcement, NYDFS, SEC cyber) requires audit evidence. IGA RFPs start including an "AI agent governance" section.

24 months: delegation standard consolidates (OAuth 2.1 + RFC 8693 + MCP-authz extension wins, or a new spec emerges from IETF/OpenID). The node-primary vs ephemeral-attested debate resolves into a hybrid — persistent agent records with session-level edges. A2A protocol becomes a governance question, not a technical one.

36 months: one of three things happens to this market: (a) an incumbent (SailPoint/CyberArk/Okta) acquires a leader and rebrands; (b) a hyperscaler (MSFT, Google, AWS) bundles it into the agent platform itself; (c) a standalone leader with CISO brand-recognition IPOs. Linx's Series B bet is on (c) — be the leader before (a) or (b) closes the window.

## 10. Open questions Omri still owns

1. **Shadow-AI scope.** Non-goal or M4? Clutch will weaponize this if we leave it ambiguous. [→ ai-governance-epic.md §Tensions #1; `slack-governance-channel-extraction-2026-04-21.md` §4 — Shadow MCP flagged Sep 8 by Niv, never followed up]
2. **Mor's Nov 5 "no dedicated AI discovery UI" position vs. the M1 hero flow.** Maria CISO journey requires an Agent Inventory surface. Either Mor's position evolves or the hero flow changes. First thing to clarify with Mor. [→ `slack-governance-channel-extraction-2026-04-21.md` §2]
3. **JIT is in the epic name but discussed nowhere in channel.** Either scope is narrower than "visibility + JIT" implies, or JIT design is happening outside `#governance-of-agentic-ai`. Confirm with Mor or Sarit.
4. **Customer pull evidence.** Monday.com is the only named reference customer in the entire channel; it is a research subject, not a voice saying "we'd buy this tomorrow." Need a customer quote by June.
5. **Amir Ben Ami's MCP discovery scope.** Which SaaS vendors + which agent platforms does it cover? Confirm at Thu Apr 23.
6. **The 16-URL competitor fetch** is drafted but not yet executed. Camp A–F framing tightens once the extraction lands.
7. **60-day Slack silence (Feb 20 → Apr 21).** Project lost momentum, or work migrated to another venue? Ask Niv or Sarit before planning on top of in-channel decisions.
8. **R&D start date never confirmed.** Mor surfaced this Nov 11; Sarit replied in-thread but never in-channel. Get a date.
9. **Dor's posture on this epic.** Added Feb 27 for Veza review, zero posts. Observer? Waiting for Omri? Ask directly.
10. **Gartner "AI agent" Emerging Tech note** — is one scheduled? If so, who's the author? Brief them before they brief us.
11. **Ownership split with Mor.** Research vs. spec vs. competitive vs. delivery. Unresolved.

## 11. Stress test — what's weak in this brief

- **No sized TAM for "agent identity."** Analyst gap; don't pretend it exists.
- **Saviynt claim parity is the most concrete near-term threat, and it escalated.** Mar 24 RSAC feature list already overlapped Linx's pitch almost verbatim; CPO Nitin Sonawane's follow-up LinkedIn post adds a named three-question framework (See / Govern / Enforce), a named runtime product (AI Access Gateway), and an explicit "you cannot secure AI agents without all three" category attack. That's the mental model Linx is building — published by a public-company CPO first. If their product ships what their marketing claims, Linx's "only we" needs a sharper differentiator than "we govern, they audit." Likely wedges still open: named tier-2 platform coverage, SoD-for-agents, orphan/ownership lifecycle, audit-first framing over runtime detection.
- **Camp F is thin.** Natoma/Token/Aembit haven't been scored in `competitive-matrix.md`. "Agent-native from day one" could be the biggest positioning threat, not an aside.
- **Amir Ben Ami's MCP bet is load-bearing but unscoped.** Claim that MCP discovery covers Claude + Gemini + Copilot gaps depends on MCP actually being adopted inside customer SaaS. If adoption is slower than assumed, the "independent of vendor APIs" claim collapses.
- **Internal tension: Mor's "no dedicated UI" vs. the hero flow.** Not just a branding issue — affects whether the June demo is credible to a CISO who needs a visible pane of glass.
- **60-day Slack silence.** Brief treats the epic as live. If the project is actually stalled or has moved off-channel, planning on top of in-channel decisions is planning on stale state.
- **Gartner's frame is human→agent delegation, narrower than Linx's scope.** Don't let their lens shrink our story in a room; use them for the SoD/credential-sharing ammunition, not the category definition.
- **Ephemeral-attested school is not just an academic footnote.** Niv endorsed it with a 🙏. If a CNAPP vendor (Wiz, Palo Alto) ships SPIFFE-attested agent identity inside their agent-runtime story, the node-primary graph becomes a reporting layer, not the identity layer. Monthly re-check.

---

*Sources: `knowledge/ai-governance-epic.md`, `knowledge/market-context.md`, `knowledge/identity-foundations.md`, `knowledge/positioning.md`, `knowledge/slack-governance-channel-extraction-2026-04-21.md`, `references/gartner-833731-summary.md`, PMs Agent output 2026-04-20 (connector map + NHI classification), `prompts/linx-claude-competitor-fetch.md` (pending execution). Nothing fetched externally from this env (WebFetch gated).*
