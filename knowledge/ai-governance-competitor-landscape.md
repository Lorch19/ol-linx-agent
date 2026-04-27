# AI Governance Competitor Landscape

**Generated:** 2026-04-27 (from ChatGPT research, 2 reports)  
**Note:** Not all entries are direct competitors — some are players in the adjacent space. Ping Identity and a few others may be missing from competitive-matrix.md; flag for next scoring pass.

---

## Per-Vendor Breakdown

### Astrix
- **Thesis:** Full NHI + AI agent inventory, governance, policy enforcement. "Agent Control Plane (ACP)" issues JIT, short-lived, scoped credentials at provision time.
- **Capabilities:** Real-time inventory of agents + MCP servers + NHIs; excessive privilege remediation; secure-by-design provisioning; continuous auditing (shadow AI removal, lifecycle).
- **Discovery:** Agentless scanning / connectors (AWS, Azure, GCP, major SaaS).
- **Identity model:** Agents as managed identities in graph; short-lived credentials via ACP.
- **Customer proof:** Workday, Xerox, HubSpot. Xerox quote on posture improvement.
- **Thin:** Discovery of truly unknown/ephemeral agents beyond connectors; no crypto-attestation; no stateless identity discussion.

### Oasis Security
- **Thesis:** Continuous NHI + AI governance with identity-based policy enforcement. AI-SPM (Security Posture Management) layer.
- **Capabilities:** Inventory (real-time NHI view); ownership mapping; AI-SPM (configs, permissions, risk posture); agentic intent + time-bound access; safe secret rotation; lifecycle mgmt; anomaly detection.
- **Discovery:** Deep metadata analysis + vendor API integrations.
- **Identity model:** Identity profiles with static + dynamic secrets. "Unified NHI graph" implied.
- **Thin:** Heavy on posture/inventory; unclear runtime enforcement. Local endpoint discovery not addressed.

### ConductorOne (now C1)
- **Thesis:** Unified IGA platform extended to NHIs + AI agents. "AI-Native Identity Governance."
- **Capabilities:** NHI inventory via lightweight connectors (cloud + on-prem); ownership + relationship mapping; real-time risk alerts; lifecycle governance (onboard, rotate, retire); dynamic access policies.
- **Discovery:** API connectors to AWS, Azure, GCP, etc.
- **Identity model:** NHIs as managed entities in graph. Focuses on long-lived NHIs (service accounts, keys). Ephemeral agent handling not explicit.
- **Thought leadership:** Argues RBAC is dead for agents; JIT task-based authorization is the future (agents outnumber humans 25:1+).
- **Thin:** Inventory + IGA focus; no shadow AI local discovery; no attack-path analysis.

### Clutch Security
- **Thesis:** First-in-market MCP server discovery on developer endpoints. Shadow AI focus.
- **Capabilities:** Local MCP server discovery (all endpoints); identity mapping (which credentials each MCP server accesses); legitimacy verification (official vs malicious); AI agent attribution (Copilot, Claude, Cursor).
- **Discovery:** Endpoint scanning/monitoring.
- **Identity model:** MCP server processes as nodes; edges = credentials accessed.
- **Thin:** Very niche — developer endpoints only. No cloud/SaaS agent coverage.

### Ping Identity
- **Thesis:** "Runtime Identity for the Agentic Era." Per-action, contextual authorization. Agents as first-class identities with continuous runtime enforcement.
- **Capabilities:** Agent Lifecycle Management (provision agents as first-class identities); Contextual Authorization at Runtime (per-action, risk/intent/context); Agent Gateway for MCP servers (least-privilege, runtime enforcement); Detection & Classification (good vs bad agents); Per-Action Audit.
- **Discovery:** "Discover and track AI agents across digital ecosystem" — log/integration based, not detailed.
- **Identity model:** Agents as OAuth clients with unique credentials + dynamic scopes.
- **Auth approach:** OAuth2 (client credentials, auth code, PKCE). Delegated access, not static creds.
- **Customer proof:** Toyota, Philips, HP logos.
- **Thin:** Heavy on ideals, light on specifics. No detail on agent onboarding or discovery. Policy enforcement focused.
- **⚠ NOT in competitive-matrix.md — needs adding.**

### CyberArk
- **Thesis:** "Identity-first" AI agent security. AI Agent Gateway as enforcement proxy. Zero standing privileges.
- **Capabilities:** Discovery across SaaS, cloud, dev environments (with context: owner, purpose, permissions); AI Agent Gateway (task-scoped permissions, auto-revoke, zero standing privilege); lifecycle + compliance (audit by user, suspension of misbehaving agents); threat detection.
- **Discovery:** IAM logs + application registries (via PAM suite connectors). Also open-source Agent Watch + Agent Guard.
- **Identity model:** Agents as privileged identities. Ephemeral, per-task access.
- **Auth:** Scoped tokens via gateway. Certificates or short-term tokens per approved task.
- **Thin:** Discovery + non-CyberArk integration glossed over. Mainly covers agents that use CyberArk infrastructure.

### CrowdStrike
- **Thesis:** Unified identity security across human + NHI + AI + SaaS. Zero Standing Privileges (ZSP). Real-time threat detection.
- **Capabilities:** Comprehensive identity protection (all types); ZSP with JIT + dynamic provisioning/revocation; AI-powered threat detection; real-time correlation across identity/endpoint/cloud.
- **Discovery:** Falcon sensors + integrations (FalconIdentity). Acquired SGNL for identity signals.
- **Identity model:** Unified identity graph (Falcon Identity Threat Graph). AI agents as part of identity continuum.
- **Thin:** High-level marketing; no specifics on agent discovery. Threat domain focus more than agent workflow.

### Duo (Cisco)
- **Thesis:** Multi-layered identity defense against AI-powered attacks (defender side, not agent governance). Adjacent space.
- **Relevant angle:** Cisco AI Access for shadow AI network-traffic discovery. ITDR + posture management.
- **Not a direct competitor** — human identity focus, not agentic AI governance.

---

## Thematic Synthesis (from Report 2)

### Why traditional IAM breaks for AI agents
- Agents are dynamic, autonomous, non-deterministic — no fixed department/role, so RBAC doesn't map.
- ~144 NHIs per human today; AI adoption explodes this.
- Agents hide in code, APIs, CI/CD, shadow SaaS — invisible to HR-fed IAM directories.
- They don't "clock out" — persistent, multi-instance, spawned outside normal provisioning flows.

### Threat patterns (concrete)
- **Semantic protocol confusion:** Agents with browsing tools follow HTML redirects as real HTTP — novel failure mode.
- **Memory "brainworm":** Malicious instructions hidden in conversation history hijack future agent actions.
- **MCP poisoning:** 72.8% success in tool poisoning against public MCP servers using static secrets.
- **LOTL via AI NHIs:** Attackers blend malicious actions into flood of agent-driven requests.
- **Shadow SaaS "maker identity":** No-code agents (Copilot Studio, Salesforce Agentforce) inherit creator's credentials — agent actions indistinguishable from human's.

### Identity model camps
- **Ephemeral/session-based:** UnmitigatedRisk (crypto-attested "identity discs"), Ping + CyberArk (runtime per-task tokens), CrowdStrike ZSP.
- **Traditional with controls:** 1Password + ConductorOne (scoped vault tokens, service accounts).
- **Crypto-attested:** UnmitigatedRisk only — AWS Nitro, Intel SGX, Apple Secure Enclave, Kubernetes attestations.
- **Hybrid:** Most vendors — connector-based inventory + short sessions.

### Governance phases (consensus framework)
1. **Discovery & inventory** — find all agents + credentials
2. **Identity & access policy** — least privilege, explicit scopes, JIT rules
3. **Credential brokering & delegation** — short-lived tokens, OAuth on-behalf-of, delegation chains
4. **Runtime enforcement & observability** — real-time policy evaluation, behavioral analytics

### Where solutions are heading
- Ephemeral, crypto-bound credentials (millisecond-TTL tokens)
- MCP security proxies / agent gateway services
- Behavioral monitoring / "agent EDR"
- JIT-Trust (continuous re-authorization per session)
- Unified identity fabrics (human + machine in single control plane)

### Okta's response
- Extending existing IAM/IGA to machine identities. "Okta for AI Agents" + "Auth0 for AI Agents" + Cross-App Access Protocol.
- Still identity-centric (accounts, logs, reviews) — not behavioral. No intent analysis or agent proxies yet.
- Arguably "papering the problem" — won't fully close the intent-vs-authorization gap at runtime.

### White space for Linx
1. **Crypto-attested ephemeral credentials** — no vendor offers full attestation-based issuance
2. **Agent-to-user entanglement mapping** — unified user-agent traceability at scale
3. **Cross-layer shadow AI detection** — correlate network/API + endpoint + app logs
4. **Policy-as-code for agents** — governance DSL that translates into cloud/IDP configs automatically

### Key terms to know cold
- **NHI (Non-Human Identity):** machine/service identity (API key, service account, OAuth app, AI agent)
- **JIT Trust:** access granted only at moment of need, continuously re-evaluated
- **Intent-aware access / Access Fabric:** policy evaluated against action intent, not just identity
- **Identity Control Plane:** identity (credentials) as central control point for agents (since network + code are opaque)
- **MCP (Model Context Protocol):** interfaces agents use for tool execution — primary security focal point
- **Shadow AI / Shadow Agents:** unmanaged agents bypassing official controls
- **LOTL (Living off the Land):** attackers misuse legitimate AI identities to blend into normal agent traffic
- **Ephemeral credential:** short-lived token granted per action/session
- **ZSP (Zero Standing Privileges):** no permanent privileged accounts; always JIT

### 3 things a PM in this space must know
1. Identity is the control plane for AI — securing agent credentials is the only governance lever.
2. Continuous intent evaluation ≠ one-time auth — real-time contextual checks per action, not static RBAC.
3. Discovery + lifecycle governance are non-negotiable — you can't govern what you can't see.
