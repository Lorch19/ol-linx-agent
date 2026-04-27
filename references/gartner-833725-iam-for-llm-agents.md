# Gartner G00833725 — IAM for LLM-Based AI Agents

**Published:** 12 June 2025  
**Author:** Homan Farahmand  
**Initiatives:** IAM for Technical Professionals; Build and Optimize Cybersecurity Programs  
**Ingested into repo:** 2026-04-27

---

## Why this doc matters

This is the **source-of-truth** for Linx's 10 capabilities framework. The Notion Agentic AI Identities epic references `IAM_for_LLM-Based_AI_Agents.pdf` as the basis for the 10-capability table — that PDF is this document. The 10 capabilities in our epic map 1:1 to Gartner's 10-step "Concept of Operations" (§ Concept of Operations below).

**Distinct from Gartner 833731** (`references/gartner-833731-summary.md`):
- 833725 (this doc) = foundational IAM framework for AI agents — 10-step concept of operations, requirements taxonomy, 3-layer architecture
- 833731 = "Securely Delegate Access From Humans to AI Agents" — narrow focus on OAuth delegation, names IBM/Ping/Transmit as strong vendors

Both are licensed to Niv. Use 833725 for product framework, 833731 for delegation specifics.

---

## Key Findings (Gartner)

1. LLM-based AI agents are autonomous, language-based software entities that perceive, decide, and act to achieve goals — distinct from traditional machine or human entities, challenging existing IAM systems.
2. Divergent approaches between AI tool providers and IAM industry create fragmented security policies, hindering visibility, accountability, and compliance.
3. Traditional IAM struggles with: lack of governance, poor observability, scale, static credentials, lack of context-aware controls, manual tasks, limited granular authorization, insufficient audit.
4. AI-specific protocols (MCP for tool calling, A2A for inter-agent) can enhance security via OAuth integration but complicate scalability (stateful servers, fragmented OAuth practices). **Inter-agent protocols too immature for production.**

## Recommendations (Gartner — for identity architects)

1. **Classify AI agents as workload application entities** — distinct constituency in IAM with own attributes, separate from humans and traditional applications.
2. **Establish unified governance and accountability framework** — discovery, ownership, policy, monitoring, audits. Human oversight critical for trust.
3. **Strong + dynamic authentication** — move away from static credentials. Adopt ABAC and PBAC over RBAC.
4. **Build incrementally:** OAuth foundation → MCP for tool calling → A2A/ACP for inter-agent. Adopt AI-specific protocols gradually as they mature.

---

## Concept of Operations — the 10 steps (= Linx's 10 capabilities)

| # | Step | Linx capability mapping |
|---|---|---|
| 1 | Registration and identification | #1 Registration and identification (M1) |
| 2 | Ownership assignment | #2 Ownership assignment (M1) |
| 3 | Authentication | #3 Authentication (M2) |
| 4 | Authorization and delegation | #4 Authorization and delegation (M2) |
| 5 | Human oversight and approval | #5 Human oversight and approval (M3) |
| 6 | Resource policy enforcement | #6 Resource policy enforcement (M3) |
| 7 | Credential issuance and life cycle management | #7 Credential lifecycle management (M4) |
| 8 | Auditability and logging | #8 Auditability and logging (M4) |
| 9 | Multiagent collaboration and trust boundaries | #9 Multi-agent collaboration (M4) |
| 10 | Visibility and observability | #10 Visibility and observability (M1 basic → M4 advanced) |

**Implication:** the 10 capabilities are not an opinion — they are an analyst-validated framework. When eng asks "why these 10," the answer is "Gartner Concept of Operations, June 2025." This is positioning ammunition.

---

## Key Use Cases (Gartner)

### 1. AI agents acting on behalf of human users
- Tasks: scheduling, payments, travel, business processes
- Operate with delegated authority + own distinct digital identity
- **Challenge:** ensuring agent acts within user's permissions + actions traceable back to user
- **Requires:** secure delegation, limited permissions, human oversight for sensitive ops, comprehensive auditing

### 2. AI agents operating with their own identities
- Function autonomously, interacting with other agents/apps/services
- Need distinct digital identities
- **Key aspects:** trust establishment, identification, mutual authentication, fine-grained authorization, credential lifecycle

### 3. Distributed multiagent system collaborations
- Multiple agents collaborating internally or across security domains
- **Requires:** mutual authentication, delegated trust, cross-organizational policy enforcement

**Implication for Linx use case work:** the 10 user scenarios from Notion all sit under use case #1 (acting on behalf of humans) and use case #2 (own identities). Use case #3 (multiagent) is largely capability #9 — M4 territory, not P0.

---

## Current Challenges and Risks (gaps in traditional IAM)

- **Verifiable digital identities** — agents need unique, cryptographically verifiable identities (workload identity)
- **Static credentials** — passwords/API keys increase attack surface
- **Fine-grained context-aware controls** — RBAC struggles with dynamic agent interactions
- **Implementation complexity** — technical, use case, capability diversity

### IAM industry vs AI tool providers — points of divergence
- Manual identity/credential management vs agility AI requires
- Inadequate AI-specific discovery, logging, audit
- Poor multiagent + trust boundary handling
- Model-specific vs enterprise access management
- Limited token exchange + delegation
- Varied policy enforcement and resource scoping
- Differing auditability/accountability views
- Integration challenges with existing IAM

---

## Key IAM Requirements Framework (Figure 2)

Much more granular than the 10 capabilities. **Use this for use case mapping precision.**

### Observability (5)
- AI agent discovery
- Enhanced metadata capture
- Agent-specific behavioral baselining
- Behavioral monitoring and anomaly detection
- Threat detection and response

### Governance and Administration (5)
- Assigning ownership
- Defining policies
- Human oversight
- Governance frameworks
- Reviews and audits

### Issuance and Storage (6)
- Agents as a distinct constituency
- Registration and attestation workflows
- Leveraging existing protocols (OAuth)
- Unique identifiers and metadata
- Supporting multiple credential types
- Auto-discovery of agents

### Authentication (3)
- Dynamic and just-in-time access
- Enabling strong authentication (token-based, mTLS, private key JWT)
- Mutual authentication for multiagent collaboration

### Authorization (6)
- Fine-grained access control
- Context-aware access control
- Resource-level access control
- Delegation of authority
- Human-in-the-loop authorization flows
- Rich authorization requests (RAR)

### Federation (3)
- Trust agreement
- Workload federation
- Token exchange

### Monitoring (5)
- Detailed logging
- Tracking delegated actions
- Token activity monitoring
- Auditing delegation credentials
- Enforcing segregation of duties (SoD)

**Total: ~33 specific requirements across 7 categories.** This is the precision lens for evaluating Linx coverage and competitive parity.

---

## Emerging Architecture Strategy — 3 Layers

**This is the framing Linx's MCP Gateway needs.**

### Layer 1 — OAuth Services (foundation)
- Treat agents as OAuth clients with unique identifiers
- Registration: manual, REST API, Dynamic Client Registration, IaC
- Mutual authentication essential
- OAuth scope mechanism for permissions
- Token Exchange (RFC 8693) for inter-agent delegation
- Human-in-the-loop via consent flows, CIBA, or dedicated approval workflows

### Layer 2 — Tool Calling (MCP)
- **Hosts:** AI agents that start connections
- **MCP clients:** connectors within the agent
- **MCP servers:** services representing tools/data
- **Benefits:** standardized framework, OAuth integration for scope-based authorization
- **Cautions (CRITICAL for Linx):**
  - MCP servers required to be **stateful** — complicates scalability
  - Each MCP server must expose **its own OAuth endpoints** — fragments OAuth discovery
  - Deviates from established enterprise best practices

### Layer 3 — Inter-agent Calling (A2A)
- Builds on HTTP, Server-Sent Events (SSE), JSON-RPC
- **Steps:** Discovery (Agent Card JSON metadata) → Authentication (OAuth + JWT) → Authorization (claims in tokens)
- **Benefits:** breaks silos in multiagent ecosystems, supports long-running async tasks
- **Cautions:** boundary vulnerabilities between A2A and MCP. Each access token must have audience claim. Agent Card must be secured against prompt injection.

### Additional standards mentioned
- **SPIFFE** — identity registration via JWT or X.509 SVIDs
- **OpenID SSF + CAEP** — session revocation, assurance changes, token claims changes
- **OpenID AuthZen** — interoperable runtime authorization (PEPs/PDPs)

**Strategic implication for Linx:**
- The 3-layer model is the rationale for the MCP Gateway. Layer 1 exists today (OAuth providers). Layer 2 (MCP) is where Linx is positioning. Layer 3 (A2A) is future.
- Gartner explicitly flags MCP's stateful + fragmented-OAuth issues as scalability risks. Linx's gateway can position as the layer that **fixes these scalability gaps** — central OAuth discovery, unified policy plane across stateful MCP servers.

---

## Best Practices (Gartner top 10)

1. Adopt workload identity approach — short-lived, JIT credentials
2. **Put humans first** — human oversight required to establish trust
3. Establish governance + accountability — ownership, liability, oversight, SoD, audits
4. Comprehensive discovery, visibility, observability — scan registries, inspect repos, monitor tokens, track delegated actions, anomaly detection, secrets discovery
5. Least privilege — minimum necessary permissions
6. Leverage and extend existing IAM protocols (OAuth foundation)
7. Strong + dynamic authentication
8. Secure multiagent collaboration (A2A, ACP)
9. Fine-grained context-aware authorization (ABAC, PBAC)
10. Investigate natural-language-to-structured-permission translation

---

## Strategic implications for Linx

### Positioning ammunition
- The 10 capabilities are analyst-validated. Cite Gartner 833725 directly when defending the framework against scope debates.
- Gartner explicitly identifies the gap that Linx fills: traditional IAM lacks AI-specific discovery, logging, audit. SailPoint/Okta/CyberArk are not named as solving this — Linx can plant the flag.
- The "stateful MCP servers + fragmented OAuth" problem is a real vendor pain point. Linx MCP Gateway positioned as **OAuth unification across stateful MCP servers** is a defensible wedge.

### Scope guidance
- **M1 (discovery + identification + ownership + basic visibility) = Layer 0** — does not require OAuth/MCP/A2A protocol work. Pure inventory + graph. Lowest risk for June 15 Identiverse demo.
- **M2 (auth + authorization) = Layer 1 (OAuth)** — leverages existing protocols, well-trodden territory.
- **M3 (oversight + policy + JIT) = Layer 2 (MCP)** — post-Apr 26 pivot, this becomes gateway-mediated.
- **M4 (credential lifecycle + audit + multiagent + advanced obs) = Layer 3 (A2A) territory** — Gartner says A2A is "too immature for production." So M4 timing aligns with protocol maturity. Don't promise A2A coverage before the standard stabilizes.

### Use case mapping (next step)
The 10 Notion user scenarios should be mapped against Gartner's ~33 specific requirements to:
- Identify which Notion scenarios are over- vs under-specified
- Spot gaps where Linx has user need but no requirement (or vice versa)
- Generate phase-appropriate user stories for eng

### Competitive lens (refines competitor landscape)
- Astrix's "ACP" = Layer 1 + partial Layer 2
- Ping's "Agent Gateway" = explicit Layer 2 play (per Gartner framing)
- CyberArk's "AI Agent Gateway" = Layer 2 + privilege focus
- Clutch = Layer 0 (pre-OAuth, endpoint discovery)
- ConductorOne = Layer 0 + Layer 1 (inventory + governance, not yet Layer 2)
- **None are clearly at Layer 3** — A2A is open white space, but Gartner says "too immature."

---

## Acronym key (selected)

| Acronym | Definition |
|---|---|
| ABAC | Attribute-based access control |
| A2A | Google's Agent2Agent Protocol |
| ACP | AGNTCY's Agent Connect Protocol |
| MCP | Anthropic's Model Context Protocol |
| mTLS | Mutual Transport Layer Security |
| PBAC | Policy-based access control |
| RBAC | Role-based access control |
| SPIFFE | Secure Production Identity Framework for Everyone |
| CAEP | Continuous Access Evaluation Profile |
| SSF | OpenID Shared Signals Framework |
| CIBA | Client-Initiated Backchannel Authentication |
| RAR | Rich Authorization Requests |
| SoD | Segregation of Duties |
| JIT | Just-In-Time |
| IaC | Infrastructure-as-Code |
| RFC 8693 | OAuth 2.0 Token Exchange |

---

## Source visuals

Three figures referenced in the report (not extracted as images here):
- **Figure 1:** AI Agents IAM Concept of Operation — the 10-step circular diagram showing Owner/User/Auditor → AI agent → Resources, with governance activities (oversight, audit) and agent-to-agent communication
- **Figure 2:** AI Agents Key IAM Requirements Framework — the 7-category taxonomy table (Observability/Governance/Issuance/Auth/Authz/Federation/Monitoring)
- **Figure 3:** Architecture Strategy with OAuth, MCP, A2A — sequence diagram showing User → Agent → MCP client → MCP server → Applications/Data/Infrastructure, with MCP authorization flow detail
