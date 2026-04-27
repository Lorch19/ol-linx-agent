# Competitive Teardown Prompt — ConductorOne, Astrix, Ping Identity

**Use this in:** Claude.ai (web) with web search enabled, or via a Claude API research tool with browsing.  
**Output target:** `artifacts/competitive-teardown-c1-astrix-ping-2026-05-02.md`  
**Why this prompt:** Dor (VP Product) asked Omri for deep study of these three vs. Linx's AI Governance / MCP Gateway play. Linx is positioning at Gartner's Layer 2 (MCP) per G00833725. We need to know exactly how each of these three answers Dor's 3-chapter framing (Registration / Policy / Enforcement) before we lock the May 8 scope.

---

## Context to paste at top of Claude.ai conversation

You are helping a senior PM at Linx Security (Series-B identity governance vendor, ~6 months ahead of CyberArk on shipped roadmap, building toward Identiverse June 15 2026 demo). Linx is launching an AI Governance / MCP Gateway product and needs a rigorous teardown of three vendors.

The PM is becoming the in-house SME on AI agent governance. The output of this research will inform the May 8 scope commit and a deep competitive doc.

**The framework — Dor's 3 chapters:**

1. **Registration:** How are AI agents registered into the governance system?
   - In advance (manual, IaC, admin onboards before agent runs)?
   - On-the-fly (dynamic registration during a session — agent registers itself when it first acts)?
   - Both?
   - How is this presented in the UI? Is there a dedicated registration screen, or is it embedded in another flow?
   - What metadata is captured at registration?

2. **Policy management:** How does an admin define what an agent is allowed to do?
   - Existing IAM constructs (roles, access profiles, groups), or new agent-specific constructs?
   - Granularity — application level, resource level, tool level (down to the specific MCP tool call)?
   - Who authors policies — security admin, app owner, end user?
   - Where is the policy authoring UI?

3. **Enforcement:** How is policy actually enforced at runtime?
   - At provisioning (scoped credentials issued at agent creation)?
   - Inline at request time (proxy/gateway evaluates each call)?
   - Detection-only (alerts after the fact, no blocking)?
   - What is the technical architecture — proxy, sidecar, agent SDK, network inspection?

**Anchoring framework:** Use Gartner G00833725 ("IAM for LLM-Based AI Agents", June 2025) — specifically the 3-layer architecture (Layer 1 OAuth, Layer 2 MCP, Layer 3 A2A) and the 10-step Concept of Operations. Tag each vendor's coverage by Gartner layer.

---

## The research task

For each of these three vendors:

- **ConductorOne (C1)** — https://www.conductorone.com/, https://www.conductorone.com/solutions/nhi-governance/, plus any "Agentic" or "AI Agent" pages, blog posts, or webinars from the past 12 months
- **Astrix Security** — https://astrix.security/, https://astrix.security/use-cases/ai-agent-discovery-and-governance/, plus "Agent Control Plane (ACP)" content and the Bayer research piece. **Also fetch:** https://astrix.security/learn/blog/securing-llms-ai-agents-and-mcp-unpacking-the-new-cis-companion-guides/ — this post unpacks the new CIS companion guides and reveals how Astrix is positioning against CIS Controls v8.1 (an enterprise credibility play). The two CIS guides it references are also critical context: https://www.cisecurity.org/insights/white-papers/controls-v8-1-ai-agents-companion-guide and https://www.cisecurity.org/insights/white-papers/controls-v8-1-model-context-protocol-companion-guide — extract any requirements these define for AI agent governance and MCP security, as they may set vendor-neutral standards that buyers will use to evaluate Linx.
- **Ping Identity** — https://www.pingidentity.com/en/solution/agentic-ai-identity.html, plus any "Agent Gateway", "Runtime Identity", or PingOne for AI Agents documentation

**Don't stop at the seeded URLs.** The main vendor pages are marketing-sanitized. Supplement each vendor with:
- **Conference talks** (RSA, Identiverse, KubeCon, DevDay) in the past 18 months — engineers describe real architecture here, not marketing copy
- **G2 / Gartner Peer Insights reviews** — customers surface what's actually missing or broken
- **GitHub repos** — SPIFFE/OIDC integrations, MCP tooling, SDK examples reveal implementation depth
- **Press releases and partner pages** — capability announcements that haven't landed on the main site yet (e.g., Astrix×Wiz integration, Ping×SailPoint)
- **LinkedIn posts from product/eng leadership** — often announce features before docs are published
- Search query suggestions per vendor:
  - C1: `"ConductorOne" "AI agent" OR "agentic" OR "MCP" site:github.com OR site:g2.com OR site:youtube.com`
  - Astrix: `"Astrix" "Agent Control Plane" OR "ACP" OR "MCP" -site:astrix.security`
  - Ping: `"Ping Identity" "agent gateway" OR "agentic AI" OR "PingOne for agents" OR "runtime identity"`

If a question can't be answered from public sources after exhausting the above, say so explicitly — **do not infer or hallucinate capabilities**.

…answer all of the following with **direct quotes and source URLs**.

### Section 1 — Registration

1.1. Does the vendor support advance registration? Describe the flow.  
1.2. Does the vendor support on-the-fly / dynamic registration? Describe the trigger and mechanism.  
1.3. What metadata is captured at registration (owner, purpose, scopes, environment, connected tools, etc.)?  
1.4. Is there a dedicated UI screen for agent registration, or is it merged with another flow?  
1.5. Does registration require integration with an existing IdP (Okta, Auth0, etc.) or is it standalone?  
1.6. Quote the strongest claim the vendor makes about registration. Quote the strongest claim a customer makes.

### Section 2 — Policy management

2.1. Does the vendor extend an existing IAM construct (roles, access profiles, OAuth scopes) or introduce a new agent-specific construct? Name the construct.  
2.2. What is the finest granularity of policy authorable — application level, resource level (table/file/endpoint), tool level (specific MCP tool), action level (read/write/admin within a tool)?  
2.3. Who is the persona authoring policies — security admin, app owner, end user, developer?  
2.4. Where does policy authoring live in the product UI? Is there a screenshot or demo video showing it?  
2.5. Are there pre-built policy templates? If yes, list 3–5 examples.  
2.6. How does the vendor handle policy conflicts (agent has owner-granted permission AND app-owner-imposed restriction)?  
2.7. Is policy declarative (YAML/JSON/UI form) or imperative (code)?

### Section 3 — Enforcement

3.1. **What is the enforcement architecture?** (Proxy/gateway, agent SDK, sidecar, post-hoc detection only?)  
3.2. Is enforcement **inline at request time**, or **at provisioning** (scoped credentials at agent creation), or **detection-only**?  
3.3. If gateway-based: what protocol does the gateway speak (MCP, OAuth, proprietary)? Stateful or stateless? Latency/throughput claims?  
3.4. How does the vendor handle the case where an agent is talking to a non-vendor MCP server directly (i.e., bypassing the vendor's gateway)?  
3.5. What is the human-in-the-loop / approval flow architecture? Is approval inline (request blocks until human responds) or async (request denied, human can approve later)?  
3.6. What is the audit/logging story — what is captured per enforcement decision, how is it queried?

### Section 4 — Gartner layer mapping

4.1. Which Gartner layers does the vendor explicitly target? (Layer 1 OAuth foundation / Layer 2 MCP tool calling / Layer 3 A2A inter-agent)  
4.2. How does the vendor handle the MCP scalability concerns Gartner flags (stateful servers, fragmented OAuth endpoints)?  
4.3. Does the vendor name SPIFFE, OpenID SSF/CAEP, OpenID AuthZen, OAuth Token Exchange (RFC 8693)? If yes, in what context?

### Section 5 — Differentiation against Linx

Linx's wedge:
- Identity graph (multi-IdP, NHI + AI agent + human in one access graph)
- Inline MCP Gateway proxying every tool call
- Built on existing Linx Inventory + Logs (3-stream LinxAuditLog) + Issues engine

5.1. For each vendor, name the **single feature** that most directly competes with Linx's gateway+graph play.  
5.2. For each vendor, name the **single feature** Linx does NOT have (or has weakest) that the vendor leads on.  
5.3. White space — which of Dor's 3 chapters does each vendor leave **incomplete**, and why?

### Section 6 — Customer evidence

6.1. List named customers (logos, case studies, quotes) for each vendor — specifically for the AI agent / MCP / agentic offering, not the vendor's broader product.  
6.2. Are there public references for an AI Governance use case being deployed to production at scale (>1000 agents, named industry vertical)?

### Section 7 — Pricing & packaging signals

7.1. Pricing model (per agent, per call, per seat, flat platform fee)?  
7.2. Is the AI agent capability bundled with the vendor's broader IGA/PAM/IDP offering, or sold separately?  
7.3. Free tier or trial available?

---

## Output format

Produce one section per vendor (C1, Astrix, Ping), each ~500-800 words, with direct quotes and inline source URLs. Then produce a comparison table:

| Dimension | ConductorOne | Astrix | Ping Identity | Linx (current) |
|---|---|---|---|---|
| Registration model (advance / dynamic / both) | | | | both, partially shipped |
| Policy granularity (app / resource / tool / action) | | | | TBD per Q1 |
| Enforcement architecture | | | | inline gateway (Apr 26 confirmed) |
| Gartner layer (1 / 2 / 3) | | | | targeting L2 |
| Strongest claim | | | | (skip) |
| Biggest gap | | | | (skip) |

Close with a 200-word "what this means for Linx's May 8 scope" section.

---

## What you (Omri) should do with the output

1. Save the Claude.ai output verbatim to `artifacts/competitive-teardown-c1-astrix-ping-2026-05-02.md`
2. Cross-reference against `knowledge/ai-governance-competitor-landscape.md` — flag anything that contradicts the existing summary
3. Update `knowledge/competitive-matrix.md` to add Ping Identity (currently missing)
4. Run a stress-test: for each vendor's "single feature Linx doesn't have", decide — defend, copy, or descope.
