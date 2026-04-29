# MCP Gateway — Competitive Research for Product Team Presentation

**Status:** Working draft. Materials phase, not slides. Started 2026-04-27 by Omri.
**Audience:** Linx product team (PMs + designers — Mor, Amir, Niv, Sarit, Dor, design).
**Goal:** Land on the player set + per-player narrative before format. No final commitments yet.

**Inputs already in repo:**
- `knowledge/mcp-gateway-competitive.md` (Apr 26) — categorizes by direct/generalist/catalog
- `knowledge/competitive-matrix.md` (Apr 23) — IGA/IAM scoring incl. MCP/agent-gateway capability rows
- `prompts/linx-claude-competitor-fetch.md` — 16-URL fetch already queued (commitment Apr 28)
- `artifacts/mcp-gateway-eng-bundle-2026-04-26.md` — eng references (Solo.io, Lunar, MS MCP Gateway)
- `artifacts/mcp-gateway-demo-script-2026-04-27.md` (orphan branch `claude/create-mcp-gateway-demo-UQQCv`) — Identiverse demo script v0.1, two flow options. Distinct effort, not duplicative.

---

## Three-bucket frame (Omri, 2026-04-27)

| Bucket | Definition | Why product team needs it |
|---|---|---|
| **A** | Linx IGA/identity competitors **that have built (or are building) an MCP Gateway** for agents | Peer group converging on the same architectural bet — validates the pivot |
| **B** | Linx IGA/identity competitors **using a different architecture** for AI agents (runtime auth, NHI extension, observability, IDP-extension) | What we're explicitly NOT doing — and what the architectural tradeoffs look like |
| **C** | Vendors **with MCP Gateway products that are NOT in our IGA competitive set** (gateway specialists, IDPs, infra/API gateways, OSS) | What an MCP Gateway looks like in pure form, before the IGA lens — sets vocabulary |

**Sequencing options for the deck (decide later):**
1. **C → A → B** — define the pattern, show peer group converging, contrast alternatives. Pedagogical for design audience.
2. **A → B → C** — peer group first, alternatives second, then pure form as the architectural reference. Better if audience already knows MCP.
3. **A → C → B** — peer group first, pure-form context, then alternatives last. Strongest "why we picked this path" arc.

---

## Bucket A — IGA/identity competitors with MCP Gateway

| Vendor | Product name | Status / launch | Source |
|---|---|---|---|
| **Saviynt** | Identity Security for AI — **Agent Access Gateway** | Launched RSAC 2026 (Mar 24, 2026) | competitive-matrix.md; Niv Slack drop |
| **ServiceNow / Veza** | Enterprise Identity Control Plane — **MCP Server Registry** | Feb 2026 update (post-acquisition closed Mar 2) | competitive-matrix.md |
| **C1 (ConductorOne)** | AI Access Management — **3,000+ hosted MCP servers** | Launched Mar 2026 | competitive-matrix.md |
| **SailPoint** | Agent Identity Security + **MCP server** | Navigate 2025 + Apr 2026 expansion (Salesforce, ServiceNow, Snowflake) | competitive-matrix.md |
| **Token Security** | **MCP Server for NHI Security** + AI Agent Identity Lifecycle | May 2025 (server) + Nov 2025 (lifecycle) | competitive-matrix.md (Niv drop, Apr 23) |
| **Opal** | Paladin (agentic authorization) + **MCP server support** | 2025 launch under new CEO Howard Ting | competitive-matrix.md |
| **CyberArk (PANW)** | Secure AI Agents (GA Dec 2025) — MCP component verify via fetch URL #10 | Dec 2025 | competitive-matrix.md |

**Token Security removed from Bucket A → moved to Bucket B (decision 2026-04-27).** Their architectural bet is NHI-extension (govern MCP servers as identities). The "MCP server for security teams" is a chat-query surface, not protocol enforcement.

**Remaining open classification questions:**
- **CyberArk Secure AI Agents:** verify gateway architecture vs. credential vaulting. Default A pending Apr 28 fetch (URL #10).
- **C1's "3,000+ hosted MCP servers"** — gateway, marketplace, or connector library? Need their March 2026 launch material.

**What to extract per Bucket-A vendor (consistent schema):**
- Gateway architecture: inline proxy / sidecar / catalog-only / federation layer
- Discovery mechanism: IDP-scrape / connector-extend / MCP introspection / manual registration
- Identity propagation: OBO (on-behalf-of) tokens / fresh credentials / impersonation
- Tool-level vs. server-level granularity
- Known customer references
- Launch date + production-readiness signal (GA / waitlist / preview)
- Closest verbatim phrase to Linx pitch

---

## Bucket B — IGA/identity competitors using different architectures

**Five architectural families** (clean slide structure):

| Architecture | Vendor(s) | Their bet | Source |
|---|---|---|---|
| **Runtime-auth** | Silverfort | Agent-based universal MFA at the auth-protocol layer (not MCP-protocol) | competitive-matrix.md |
| **ITDR-extension** | CrowdStrike / SGNL | Context-aware authorization extending Falcon; identity as feature of security platform | competitive-matrix.md |
| **NHI-extension** | Astrix, Oasis, **Token Security** | Treat agents/MCP-servers as NHIs; inventory + lifecycle, not protocol-inline | competitive-matrix.md |
| **Agent-automation of IGA** | Lumos | Identity Security Agents (waitlist) automate workflows; not a protocol gateway | competitive-matrix.md |
| **Detection-first** | Clutch | Shadow AI / Shadow MCP discovery, not enforcement-inline | ai-governance-deep.md |

**Adjacent (not a Linx competitor — separate slide / footnote):** Origin HQ — semantic observability of agent reasoning; governs *decisions*, not *credentials*. Complementary stack.

**Remaining verification (low priority):**
- **Astrix**: do they have any MCP-aware enforcement, or pure NHI-discovery? Fetch URLs #1, #3, #4 confirm.
- **Lumos**: any MCP component announced beyond agent-automation? Default B pending verification.

**What to extract per Bucket-B vendor:**
- Their architectural alternative (what they DO instead)
- Their pitch on why their approach is better (incumbent objection)
- What they CAN'T do that an MCP Gateway can (the architectural counter-pitch)
- What they CAN do that an MCP Gateway can't (the architectural risk to acknowledge)

---

## Bucket C — MCP Gateway players outside our IGA competitive set

| Vendor | Lane | Source |
|---|---|---|
| **Strata Maverics — AI Identity Gateway** | Identity-federation / IDP-extension | mcp-gateway-competitive.md |
| **Ping Identity Agent Gateway** | IDP doing gateway play. **Confirmed Bucket C 2026-04-27** — Ping is an IDP not in our IGA matrix; the "why not just use Ping?" objection is exactly what Bucket C addresses. | mcp-gateway-competitive.md |
| **Lunar MCPX** | OSS, governance-first, MIT-licensed (~400 stars) | eng-bundle |
| **Operant MCP Gateway** | Threat-detection framing | mcp-gateway-competitive.md |
| **Microsoft MCP Gateway** | Kubernetes-native reverse proxy (OSS) | eng-bundle |
| **Docker MCP Gateway** | OSS dev-baseline | mcp-gateway-competitive.md |
| **IBM ContextForge** | Federation, virtual servers, retries | mcp-gateway-competitive.md |
| **Kong AI Gateway** | "API gateway for agents" mental model | mcp-gateway-competitive.md |
| **TrueFoundry MCP Gateway** | Cleanest OAuth 2.0 OBO writeup | mcp-gateway-competitive.md |
| **Solo.io / Gloo** | "MCP Authorization the Hard Way" tutorial; gateway product | eng-bundle |
| **Cloudflare AI Gateway** | Hyperscaler edge | candidate — not yet researched |
| **Pomerium** | Identity-aware proxy (zero trust) | candidate — not yet researched |
| **Auth0 / Okta — Auth for GenAI** | IDP extension for agents | candidate — not yet researched |
| **Lasso Security** | LLM/agent security gateway | candidate — not yet researched |
| **MCP Manager / Obot / Runlayer** | Catalog/registry — different problem | mcp-gateway-competitive.md (cut) |

**Catalog reference:** `github.com/e2b-dev/awesome-mcp-gateways` — bookmark, not a read.

**Sub-segmentation within C** (proposed for the deck):
- **C1 — IDP-extension gateways:** Strata, Ping, Auth0/Okta. Buyers ask: "why not just use my IDP?"
- **C2 — OSS reference implementations:** Lunar, Microsoft, Docker, IBM. Engineers' baseline.
- **C3 — Infrastructure/API-gateway extensions:** Kong, Cloudflare, Solo.io, TrueFoundry. "MCP is just an API."
- **C4 — Detection / posture-shaped gateways:** Operant, Lasso. Adjacent to ITDR.

This sub-segmentation actually does the architecture-tradeoff work for the audience.

---

## What's missing to land the story

**Research gaps (priority order):**
1. Confirm Bucket A classifications via primary source for each vendor (the Apr 28 fetch covers most of these — Astrix, Oasis, ConductorOne, Ping, CyberArk, CrowdStrike).
2. **Saviynt deep-dive** — already on commitments for Apr 30. Should now also score Strata/Ping/Lunar against the same rubric (per log Apr 26 EOD).
3. **Bucket C candidates not yet researched:** Cloudflare AI Gateway, Pomerium, Auth0/Okta Auth for GenAI, Lasso Security. ~30 min each via WebFetch.
4. Verify CyberArk Secure AI Agents architecture (A vs B classification).
5. Confirm Token Security MCP Server as Bucket A (two-sided play).

**Narrative gaps:**
1. **The "why MCP Gateway, why now" framing slide** — needs a single quote or stat. Strata's Clutch-derived stat is candidate: "~3,000 unconverted MCP deployments per 10k-employee company." Verify.
2. **Linx's positioning vs. each bucket** — for product team, this is where designers will care most. Where do we differentiate within Bucket A? Against Bucket B? Against Bucket C?
3. **Architecture tradeoff slide** — inline proxy vs. sidecar vs. federation vs. catalog. Visual, not bulleted.

---

## Linx's draft counter-position (from `mcp-gateway-competitive.md`)

> *"MCP Gateway is the delivery mechanism for the graph's value at agent-execution time, not the value itself."*

Sharpened for product team:
- Bucket C wins on **gateway as product** — Linx loses if framed as gateway-vs-gateway
- Bucket A is the convergence — everyone is building this
- Bucket B is the architectural fork — bet on credentials/runtime/observability instead
- **Linx's edge is the graph context the gateway uses to make decisions** (humans + NHIs + agents in one identity model)
- Validate this with Niv before May 5 hero-moment alignment (per `mcp-gateway-competitive.md`)

---

## Stress test — what's weakest in this analysis

1. **Bucket A vs. Bucket C boundary is fuzzy at IDPs.** Ping Identity is an IDP (Bucket C-1) AND has Agent Gateway (eats Bucket A). Same risk for Auth0/Okta if their Agentic Identity matures. Decide: is the bucket about "who they sell against" or "what shape their product takes"?
2. **"Has an MCP Gateway" is binary, but the products aren't.** Saviynt's "Agent Access Gateway" might be a proxy, a registry, or a reverse-proxy — same word, different shapes. Need the per-vendor architecture row to make Bucket A meaningful.
3. ~~**Customer signal absent.**~~ **Reframed 2026-04-27.** Asking for "customer X bought Y's MCP gateway" is a 2027 quote in 2026 — category is too new. Replace with: pull *competitor reference customers* per bucket from existing matrix (HiBob/Lunar, Saviynt 600+, SailPoint enterprise list) as proof-points the category is shipping. Linx-side problem-validation quote is a separate workstream (commitment line 26, before June demo).
4. **CyberArk and Token Security might both straddle A and B** depending on how strictly we define "MCP Gateway." Risk: bucket A inflates with vendors who just say "MCP" in marketing.
5. **No mention of Anthropic's own role.** Anthropic owns the MCP spec. Are they shipping a reference gateway? If yes, that's the canonical Bucket C entry and the audience will ask.

---

## Next steps (proposed)

1. **Today / tomorrow:** run the 16-URL fetch (already queued). Output goes to `knowledge/ai-governance-competitor-landscape.md`. Adds primary-source data to Buckets A and B.
2. **By Apr 30:** Saviynt deep-dive (`artifacts/saviynt-teardown-2026-04-30.md`). Score Strata/Ping/Lunar in same teardown.
3. **By May 2:** WebFetch the 4 unresearched Bucket C candidates (Cloudflare, Pomerium, Auth0, Lasso). Add Anthropic check.
4. **By May 5:** lock bucket assignments. Validate Linx counter-position with Niv.
5. **By May 8:** decide presentation format (slides vs. doc vs. matrix). First draft.

Owner: Omri throughout. Niv signoff on counter-position. Product team is audience, not co-author.
