# CIS Controls v8.1 — AI Agents Companion Guide: Structured Analysis for Linx

**Source document:** CIS Critical Security Controls v8.1 — Artificial Intelligence (AI) Agents Companion Guide v1.0  
**Extracted:** 2026-04-27  
**Purpose:** Compare CIS requirements against Gartner G00833725 framework; inform May 8 scope commit; counter/extend Astrix "CIS-aligned" claim

---

## §1 — Document Metadata

| Field | Value |
|---|---|
| **Full title** | Artificial Intelligence (AI) Agents Companion Guide v1.0 — CIS Critical Security Controls v8.1 |
| **Version** | v1.0 |
| **Publication date** | April 2026 |
| **Principal Author** | Jonathan Sander, **Astrix** |
| **Editors** | Andrew Dannenberger (CIS), Robin Regnier (CIS), Thomas Sager (CIS), Valecia Stocchetti (CIS) |
| **Contributors** | Abhishek Iyer (Cybersecurity Leader), Christopher Misra (Univ. of Massachusetts), Jack Zaldivar Jr. (Databricks), Jeremy Pelegrin (Univ. of Massachusetts), Michael Laing (Loblaw Companies Limited) |
| **Pages** | ~73 + appendices |
| **Stated audience** | Security engineers, architects, operators, developers, and security teams responsible for deploying or governing AI agent systems in enterprise environments |
| **Stated scope** | Systems that implement AI agents or multi-agent workflows — including those that perform task decomposition/planning, execute tools/APIs, interact with code interpreters/browsers/business data, maintain memory, access vector databases, run on hosted/cloud/event-driven systems, or use MCP. Explicitly **excludes** model training/fine-tuning, non-AI automation systems, evaluation of generative media authenticity, supply-chain validation of third-party model artifacts |

> ⚠️ **Competitive flag:** Jonathan Sander of **Astrix** is the principal author. When Astrix claims "CIS-aligned," they are claiming alignment with a document they wrote. The MCP Companion Guide (separate file) is the cleaner reference for Linx positioning — it was authored by CIS + Cequence, with Astrix as contributor only.

---

## §2 — Executive Summary (verbatim)

> "Artificial Intelligence (AI) agents represent a rapidly emerging class of systems that blend Large Language Models (LLMs) with orchestration logic, tool execution, data retrieval, and automated decision-making. Unlike stand-alone models, AI agents operate across multiple layers of an enterprise's environment, interacting with internal services, external APIs, sensitive data, and user workflows. This expanded operational footprint introduces new risks, including unauthorized actions, data leakage, and unintended system changes, that require security considerations beyond traditional model-centric safeguards.
>
> CIS Controls v8.1 offers foundational, prioritized cybersecurity best practices designed to help enterprises mitigate the most prevalent threats. However, applying these Controls directly to AI agents requires interpreting them through the lens of autonomous and semi-autonomous system behavior. Agent architectures often extend across identity layers, endpoint execution environments, knowledge stores, integration pipelines, and operational monitoring systems, meaning the Controls must be mapped to a broader attack surface than conventional software.
>
> This guide provides practical, actionable guidance for applying CIS Controls v8.1 to the agent layer specifically, the layer where planning, reasoning, tool invocation, and multi-step workflows occur. By aligning established security practices with the unique operational characteristics of AI agents, enterprises can strengthen their security posture while maintaining the flexibility and innovation that AI systems enable. Each section interprets relevant CIS Safeguards in the context of agent behavior, providing clarity on where traditional controls still apply and where new patterns must be considered.
>
> As enterprises adopt AI agents to streamline processes, enhance decision-making, and automate complex tasks, ensuring secure design and operation becomes essential. This guide aims to bridge the gap between standard cybersecurity frameworks and emerging AI agent architectures, helping teams implement controls that reduce risk while supporting responsible, reliable, and resilient use of AI technologies."

---

## §3 — Mapping to CIS Controls v8.1

### Which controls are extended?

All 18 CIS Controls are extended in sequence. No controls are skipped.

| Control # | Name | AI Agent Relevance |
|---|---|---|
| 1 | Inventory and Control of Enterprise Assets | Agent runtimes, orchestration components, MCP servers, vector DBs as inventoriable assets |
| 2 | Inventory and Control of Software Assets | Orchestration frameworks, MCP clients/servers, vector DB clients, execution sandboxes |
| 3 | Data Protection | Agent working memory, scratchpads, tool I/O, long-term memory, RAG pipelines |
| 4 | Secure Configuration | Prompts-as-code, tool definition schemas, inference parameters, sandbox hardening |
| 5 | Account Management | Agent service accounts, API keys, delegated credentials, multi-agent identity chains |
| 6 | Access Control Management | Tool-level RBAC/ABAC, delegation (OBO flows), JIT elevation, agent-to-agent boundaries |
| 7 | Continuous Vulnerability Management | Framework CVEs, SDK patching, execution tool sandbox vulnerabilities |
| 8 | Audit Log Management | Agent action traces, tool invocation logs, memory access logs, behavioral drift detection |
| 9 | Email and Web Browser Protections | Browser automation tools, URL-fetch tools, email-retrieval APIs |
| 10 | Malware Defenses | Code execution tools, file retrieval workflows, RAG ingestion pipelines |
| 11 | Data Recovery | Long-term memory stores, vector databases, embedding indexes |
| 12 | Network Infrastructure Management | AI Gateways, mTLS, microsegmentation for agent runtimes |
| 13 | Network Monitoring and Defense | Tool invocation anomaly detection, SIEM correlation, behavioral anomaly |
| 14 | Security Awareness and Skills Training | Prompt injection as social engineering, delegated auth risks |
| 15 | Service Provider Management | Model inference providers, tool backends, hosted agent runtimes |
| 16 | Application Software Security | SAST/DAST on agent code, policy enforcement layer, guardrail middleware |
| 17 | Incident Response Management | Agent-specific playbooks, RAG poisoning remediation, runaway loop containment |
| 18 | Penetration Testing | Adversarial prompts, memory poisoning, multi-agent red team |

### New controls or safeguards introduced?

**None.** The guide explicitly states (Methodology, p. 4):

> "It does not introduce new top-level Controls or Safeguards; instead, it interprets each existing Control in the context of AI agents..."

### Implementation Groups

Uses existing IG1/IG2/IG3 framework. Key caveat (p. 5):

> "Agents with broad tool access, high autonomy, or significant operational impact may require safeguards from higher Implementation Groups regardless of the enterprise's general IG classification."

---

## §4 — Controls and Safeguards (AI Agent Interpretations)

The guide reuses standard CIS safeguard IDs (e.g., 1.1, 5.6) and provides new agent-specific applicability text under each. All quotes are direct from the guide with page references.

---

### Control 1: Inventory and Control of Enterprise Assets (pp. 10–12)

**1.1 — Establish and Maintain Detailed Enterprise Asset Inventory | IG1/2/3 | Identify**

> "Establish and maintain a detailed inventory of all agent assets, covering cloud-hosted platforms, on-premises orchestration servers, and embedded edge runtimes. The inventory must record the business owner responsible for the agent's actions, its approved connectivity paths to internal data stores (e.g., vector databases (DBs)) and external SaaS models (e.g., OpenAI, Anthropic), and the specific tools it is authorized to invoke. This includes tracking ephemeral agent workloads (serverless functions) and verifying that all agent instances map back to an authorized deployment pipeline and identity. Agents function as autonomous identities that bridge critical internal systems with external inference providers; without a comprehensive inventory that maps ownership, connectivity, and tool authorization, enterprises cannot effectively monitor for 'shadow agents,' manage the blast radius of a compromised agent, or enforce data egress policies across distributed and often ephemeral agent infrastructure."

**1.2 — Address Unauthorized Assets | IG1/2/3 | Protect**

> "Identify and quarantine unauthorized AI agent runtimes, including unapproved local agent tools on endpoints or rogue agent workloads in cloud environments. 'Shadow agents' running on unmanaged assets can bypass data loss prevention (DLP) controls, exfiltrate sensitive data to external model providers, or execute unauthorized actions on internal networks."

**1.3 — Utilize an Active Discovery Tool | IG2/3 | Identify**

> "Use active discovery tools to detect AI agent orchestration services, vector database endpoints, MCP servers, and internal tool APIs exposed on the network. Agents often expose internal APIs or memory stores to facilitate tool use through MCP or other mechanisms; active discovery ensures these interfaces are visible and properly secured against unauthorized access or exploitation."

**1.5 — Use a Passive Asset Discovery Tool | IG3 | Identify**

> "Deploy passive network monitoring to detect traffic patterns indicative of agent communication, such as high-frequency API calls to model endpoints, MCP servers, or vector stores. Passive discovery helps identify 'silent' or unmanaged agents that do not respond to active scans but are actively communicating with external tools or internal data systems."

Additional considerations (p. 12):

> "Tool integrations may require tracking operational entitlements, such as API keys, service accounts, or MCP tool registrations."

---

### Control 2: Inventory and Control of Software Assets (pp. 13–15)

**2.1 — Establish and Maintain a Software Inventory | IG1/2/3 | Identify**

> "Maintain a comprehensive inventory of all AI agents' core software stacks and authorized tools, including LLM dependencies, orchestration frameworks, MCP clients/servers, and execution environments. The inventory must document business owners, license types, and versions for all components, treating tools, whether local or network-hosted, as independent software assets with distinct access privileges. Since agents rely on composite stacks where changes to a SaaS model or a local library can alter decision-making, rigorous tracking of these utilities is essential to manage supply chain risks and prevent the emergence of unmanaged 'shadow software' that could be abused by a compromised agent."

**2.6 — Allowlist Authorized Libraries | IG3 | Protect**

> "Enforce allowlists for agent-related libraries, including specific versions of orchestration frameworks (e.g., LangChain), tool adapters, MCP clients and servers, and vector store clients. Agents often pull dependencies dynamically; unauthorized libraries can introduce supply-chain vulnerabilities or malicious tool capabilities that compromise the agent's autonomy and security."

**2.7 — Allowlist Authorized Scripts | IG3 | Protect**

> "Restrict execution of scripts by agents (e.g., Python code generated by the agent) to only authorized, signed, or sandboxed scripts. Agents capable of generating and executing code (e.g., code interpreters) present a massive risk; allowlisting ensures that they cannot execute arbitrary malicious scripts on the host system."

---

### Control 3: Data Protection (pp. 16–19)

**3.1 — Establish and Maintain a Data Management Process | IG1/2/3 | Protect**

> "A robust management process must treat tool outputs with the same rigor as production databases, applying strict access and retention controls to prevent the leakage of the agent's confidential 'thought process' and environmental access details. Enforce strict validation on external data ingestion and protect all sensitive tool execution outputs."

**3.3 — Configure Data Access Control Lists | IG1/2/3 | Protect**

> "Enforce strict least-privilege boundaries for agent actions and apply granular Access Control Lists (ACLs) to all memory stores. Agents effectively act as digital employees; their access to tools, APIs, and data sources must be explicitly bounded by policy to prevent any form of unrestricted or overly broad authority. Simultaneously, the data the agent generates, its working memory, vector indexes, and interaction history, accumulates highly sensitive context. These memory repositories must be protected by rigorous ACLs and retention limits to prevent this sensitive 'thought process' data from persisting indefinitely or being accessed by unauthorized entities, such as other agents or lower-privileged users."

**3.11 — Encrypt Sensitive Data at Rest | IG2/3 | Protect**

> "Encrypt all agent memory and enforce secure, isolated storage for credentials and sensitive configurations. Agent architectures store highly sensitive 'thought processes' in vector databases and session logs, which must be encrypted to prevent context leakage. Treat API keys, tokens, and other credentials as sensitive data that must never exist in unencrypted form within prompts, code, or logs where they can be extracted by the model. To prevent exposure, utilize secure secret management systems to inject credentials only at runtime, ensuring that plaintext secrets are strictly excluded from the agent's memory and execution traces."

**3.12 — Segment Data Processing and Storage Based on Sensitivity | IG2/3 | Protect**

> "Separate sensitive data across agent workspaces and contexts. Ensure that agents serving different departments, workflows, or trust zones cannot access or leak data across boundaries. Segregate memory stores, retrieval scopes, tool permissions, and execution environments."

**3.14 — Log Sensitive Data Access | IG3 | Detect**

> "Log all instances where an agent accesses sensitive data stores, including vector databases, internal APIs, and regulated file systems. Agents can access data at high speed and scale; logging sensitive access provides the necessary audit trail to detect unauthorized data harvesting or policy violations by autonomous agents."

---

### Control 4: Secure Configuration (pp. 20–23)

**4.1 — Establish and Maintain a Secure Configuration Process | IG1/2/3 | Protect**

> "Maintain an inventory of agent configurations including prompts, tool lists, operational parameters, and policy settings. Version configurations and ensure they are traceable to specific agents and deployments."

**4.6 — Securely Manage Enterprise Assets and Software | IG1/2/3 | Protect**

> "Manage agent runtimes and configurations (e.g., prompts, tool definitions) via version-controlled Infrastructure-as-Code (IaC) to ensure they are tamper-evident and reproducible. Isolate code execution tools in ephemeral, hardened sandboxes (such as containers or VMs) with disabled networking and restricted system calls. Treating these tools as untrusted software ensures model-generated code remains contained within a disposable environment, preventing unauthorized host access or lateral movement."

**4.8 — Uninstall or Disable Unnecessary Services | IG1/2/3 | Protect**

> "Restrict browser automation tools to approved domains and disable unnecessary plugins or JavaScript capabilities. Agents utilizing 'headless' browsers for research or navigation present a massive attack surface... administrators must disable unnecessary features, like file uploads or experimental APIs, and enforce 'Safe Browsing' policies that allowlist only essential domains."

Additional considerations (p. 23):

> "Prompt-as-Configuration: Treat system prompts and agent definitions as software. They should be stored in version control (e.g., Git), subject to peer review, and deployed via automated pipelines, never manually edited in a production console."

> "Configuration Drift: Agent behavior can drift if the underlying model changes, even if the configuration stays the same. 'Configuration Management' for agents implies continuous monitoring of behavioral outputs against the expected baseline."

---

### Control 5: Account Management (pp. 24–26)

**5.1 — Establish and Maintain an Inventory of Accounts | IG1/2/3 | Identify**

> "Inventory all user accounts, service accounts, API keys, or delegated credentials used by the agent, including those attached to tools or retrieval systems."

**5.2 — Use Unique Passwords | IG1/2/3 | Protect**

> "Agents integrate distinct architectural components, vector databases (memory), LLM APIs (brain), and execution sandboxes (hands), that must not share credentials. Enforce unique, cryptographically strong authentication tokens for each layer. Specifically, ensure that credentials for vector stores, which hold long-term knowledge, are distinct from those used by runtime engines or tool plugins. This segmentation ensures that if an agent's execution environment is compromised via a tool, the attacker cannot use those same credentials to pivot and exfiltrate the agent's entire history or knowledge base."

**5.5 — Establish and Maintain an Inventory of Service Accounts | IG2/3 | Identify**

> "Manage tool and API credentials used by agents. Ensure any credentials used to invoke tools, APIs, or MCP capabilities are managed securely. Bind credentials to specific capabilities, rotate them regularly, and store them using secure mechanisms."

**5.6 — Centralize Account Management | IG2/3 | Protect**

> "Manage all agent and tool identities through a centralized identity provider (IdP), prioritizing federated identity and passwordless authentication, such as Certificate Authorities or OAuth with refresh tokens, to mitigate the risks of exploiting passwords or other credentials, including API keys, tokens, and secrets. Centralization provides a single point of control for automated provisioning and simplified revocation, which reduces the risk of orphaned accounts or leaked secrets retaining access to AI assets.
>
> In multi-agentic architectures, the system must propagate the invoking user's identity and privilege context across the entire agent chain. This propagation prevents unintentional privilege escalation that occurs when interconnected agents utilize service accounts with higher permissions than the end user. Each agent must be restricted to the user's specific authorization, performing nothing more or less than the user is permitted to do. For non-repudiation, every interaction must be identifiable as either a human action or a non-human (agent) action performed on behalf of a user, ensuring that security personnel can distinguish between human intent and autonomous execution traces within the centralized audit log."

Additional considerations (p. 26):

> "Agents must never autonomously create new user or service accounts unless specifically authorized with controlled delegation."

> "Delegated user identities must include time limits, scope limits, and revocation paths."

> "Avoid embedding credentials in prompts, memory, RAG sources, or intermediate reasoning."

---

### Control 6: Access Control Management (pp. 27–30)

**6.1 — Establish an Access Granting Process | IG1/2/3 | Protect**

> "Provision persistent, unique identities for agents, using ephemeral credentials where possible or managed secrets where necessary. Agents must operate as distinct digital entities with a persistent identity (e.g., a unique Client ID) to ensure accountability and traceability. While the identity persists, the access methods should ideally be ephemeral (short-lived tokens) to eliminate credential theft risks. Where infrastructure limitations require static credentials (e.g., legacy API keys), these must be strictly governed via secure secret management systems with automated rotation policies. This ensures that every agent action is attributable to a specific identity, regardless of the underlying authentication method."

**6.2 — Establish an Access Revoking Process | IG1/2/3 | Protect**

> "Immediately revoke identities and purge entitlements upon agent retirement, reconfiguration, or scope change. Agents leave behind 'digital exhaust' in the form of service accounts and API keys. Without a rigorous offboarding process, these credentials become 'orphaned' entitlements that persist long after the agent has stopped running. A formal revocation workflow must ensure that whenever an agent is decommissioned or moved to a new environment, its specific identity is disabled and all associated tokens are invalidated/rotated to prevent 'zombie' access by attackers."

**6.3 — Require MFA for Externally-Exposed Applications | IG1/2/3 | Protect**

> "Enforce MFA for access to any externally exposed agent interfaces, management consoles, or tool gateways. Agents often have powerful capabilities; MFA adds a critical layer of defense against unauthorized access to these high-risk interfaces, protecting against credential theft."

**6.7 — Centralize Access Control | IG2/3 | Protect**

> "Manage agent identities via central directory services or single sign-on (SSO), avoiding scattered local credentials. Agent identities should not exist as 'ghost' accounts scattered across local configuration files or proprietary tool databases. Instead, they must be provisioned and managed within the enterprise's central directory service (e.g., Active Directory, Lightweight Directory Access Protocol (LDAP), or Identity Provider (IdP)) just like human employees."

**6.8 — Define and Maintain Role-Based Access Control | IG2/3 | Protect**

> "Assign granular role-based access control (RBAC) roles to agent identities and bind delegated user permissions to ephemeral session contexts. Agent identities must map to defined organizational roles with least-privilege sets, explicitly defining which roles are permitted to invoke specific tools or APIs. When acting on behalf of a human, the framework must enforce Delegated RBAC (where agent authority is cryptographically bound to the user session). High-impact operations, such as modifying production data, executing code, or initiating financial transactions, require Attribute-Based Access Control (ABAC) overlays or Just-in-Time (JIT) role elevation via explicit policy checks or human-in-the-loop approval.
>
> In multi-agentic systems, role-defined boundaries must govern peer-to-peer communication and task delegation to prevent low-privilege agents from escalating authority by prompting high-privilege peers. RBAC policies must also enforce data ingress limits, ensuring that agents do not ingest data classified above their role's clearance level, to prevent agents from exceeding their defined clearance, hallucinating unauthorized write operations, or persisting authority beyond the active workflow."

Additional considerations (p. 30):

> "Context-Aware Scoping: Access control should be context-aware. An agent acting as a 'Developer' should only have access to the specific repository relevant to the current ticket, not all repositories."

> "Delegated Authority: When an agent acts on behalf of a user, it should use Delegated Authorization (e.g., On-Behalf-Of flows) rather than a broad service account. This ensures the agent's permissions are capped by the user's own entitlements."

> "Credential Exclusion from Checkpoints: Agents often serialize their state (memory and scratchpads) to disk to 'pause' and 'resume' workflows. Ensure that active access tokens are stripped from this state before serialization to prevent creating static secrets on disk/database."

> "Attribution and Non-Repudiation: Access logs must distinguish between a direct user action and an agent action. Use distinct user-agent strings or dedicated identity claims (e.g., 'acted_by: agent_id') to ensure forensic attribution."

> "Tool-Level Credential Isolation: Avoid sharing a single 'Agent Identity' across all tools. Where possible, inject credentials only into the specific tool environment (sandbox) that needs them, ensuring the 'Weather Tool' cannot access the credentials of the 'Database Tool'."

> "Human-in-the-Loop Gates: For sensitive operations (e.g., financial transfers, data deletion), access control should require an out-of-band human approval step."

---

### Control 7: Continuous Vulnerability Management (pp. 31–33)

**7.1 — Establish and Maintain a Vulnerability Management Process | IG1/2/3 | Identify**

> "Inventory vulnerability sources for agent components. Identify the sources of vulnerabilities affecting agent frameworks, tool adapters, memory systems, SDKs, and runtime environments. Track disclosure channels such as vendor advisories, package-manager feeds, Common Vulnerabilities and Exposures (CVE) databases, or upstream repositories."

**7.5 — Perform Automated Vulnerability Scans of Internal Enterprise Assets | IG2/3 | Detect**

> "Continuously scan agent codebases, containers, model clients, and transitive dependencies for known vulnerabilities. Agent architectures rely on deep, complex dependency trees, including heavy frameworks, model SDKs, vector store connectors, and transport clients (gRPC/REST). These components often introduce significant transitive risk, where a vulnerability in a buried dependency exposes the entire agent."

---

### Control 8: Audit Log Management (pp. 34–37)

**8.1 — Establish and Maintain an Audit Log Management Process | IG1/2/3 | Detect**

> "Establish an audit log management process that logs all agent reasoning, tool interactions, and memory access while enforcing strict redaction and anti-tamper controls. Agents operate as non-deterministic systems; understanding 'why' they took an action requires deep visibility into their reasoning chains, tool inputs/outputs, and memory retrieval operations. The management process must mandate this comprehensive traceability for forensics and compliance. However, because agents often process raw PII or credentials in working memory, logs must be vigorously sanitized, redacting secrets and sensitive data before they are written to disk. Furthermore, the process must secure logs against tampering (specifically preventing the agent itself from modifying its own history) and require re-validation of logging pipelines after any configuration update."

**8.2 — Collect Audit Logs | IG1/2/3 | Detect**

> "Log agent access decisions by recording agent tool calls, data accesses, authorization decisions, and attempted policy violations."

**8.5 — Collect Detailed Audit Logs | IG2/3 | Detect**

> "Log and preserve comprehensive agent activity, including tool call histories, memory interaction logs, retrieval traces, and model inputs/outputs where policy permits, to enable forensic investigation and behavior reconstruction. Record all tool calls, capturing timestamps, identity used, parameters passed, and outcomes, alongside significant reads and writes to working memory, long-term memory, and vector stores. Retrieval events must be documented by recording the sources queried and the high-level nature of retrieved content without exposing raw sensitive data."

**8.11 — Conduct Audit Log Reviews | IG2/3 | Detect**

> "Regularly review logs to detect identity misuse, behavioral anomalies, and unexpected decision paths. Agents operate with significant autonomy, making standard log reviews insufficient. Security teams must analyze logs not just for error rates, but for 'behavioral drift.' This involves detecting anomalies in identity usage (e.g., unexpected privilege elevation or delegated access misuse) and operational logic (e.g., accessing sensitive memory retrieval paths or invoking tools in unapproved sequences). Unlike deterministic software, agents may 'decide' to take high-risk actions that technically succeed but violate intent. Regular reviews are essential to identify these subtle patterns of misuse, hallucination, or prompt injection, allowing enterprises to tune access policies and interrupt potential 'confused deputy' attacks before they escalate into full compromises."

---

### Control 12: Network Infrastructure Management (pp. 47–49)

**12.2 — Establish and Maintain a Secure Network Architecture | IG2/3 | Protect**

> "Segment agent runtimes and enforce private, authenticated connectivity for memory and model services. Agents act as the central orchestrator, integrating highly sensitive components like vector databases (memory) and LLM inference endpoints. A secure network architecture must place the agent runtime in a dedicated trust zone, enforcing strict ingress filtering, via ACLs/firewalls, to prevent unauthorized entities from invoking the agent. Furthermore, the connections between the agent and its 'brain' (models) or 'memory' (retrieval systems) must function over private, authenticated backbones (e.g., PrivateLink, mTLS) rather than public networks. This segmentation ensures that the agent's core logic is shielded from direct internet exposure and protects sensitive retrieval traffic from interception.
>
> Furthermore, isolate high-risk execution tools in restricted network sandboxes to prevent lateral movement. Tools that execute dynamic code or interact with the open web (e.g., Python interpreters, headless browsers) inherently introduce high risk. These components must be treated as untrusted and placed in isolated network sandboxes with zero trust access to the internal corporate network."

**12.5 — Centralize Network Authentication, Authorization, and Auditing (AAA) | IG2/3 | Protect**

> "Centralize network AAA for all agent-to-agent and agent-to-tool communications by integrating agent identities and user roles into network-layer access policies. In multi-agent architectures, enforce zero-trust network segmentation to strictly govern task delegation, state sharing, and data ingestion. Network controls must be context-aware, mapping specific agent RBAC roles to authorized network boundaries, to prevent low-privilege agents from laterally communicating with or prompting high-privilege peers.
>
> Furthermore, implement data-aware network filtering to enforce ingress limits, blocking the transmission of data classified above an agent's defined security tier."

---

### Control 16: Application Software Security (pp. 60–63)

**16.10 — Apply Secure Design Principles in Application Architectures | IG2/3 | Protect**

> "Harden agent orchestration logic by applying standard application security testing (including SAST, DAST, and dependency scanning) to the framework while addressing unique cognitive vulnerabilities. Implement strict circuit breakers to detect and terminate recursion or runaway action chains... The system must maintain secure failure modes by failing 'closed,' ensuring that model timeouts or tool errors terminate the session safely without exposing stack traces or falling back to insecure defaults.
>
> Establish rigorous hygiene at every interface by validating all tool inputs and outputs to prevent shell injection or the poisoning of the agent's working memory. Enforce regex-based scrubbing to ensure secrets and credentials are never written to logs, memory, or user outputs. Treat multimodal inputs, including images and audio, as highly untrusted, requiring transcription and safety filtering to detect visual jailbreaks before content enters the reasoning loop.
>
> Mandate deterministic defense-in-depth by isolating dangerous capabilities (specifically code interpreters, shell tools, and browser automation) in ephemeral, network-restricted sandboxes... implement a deterministic policy enforcement layer, or guardrail middleware, to intercept every agent action before execution. This layer must validate tool calls against static policies, such as 'Allow Read' or 'Deny Write,' and block high-risk requests regardless of the agent's intent or generated reasoning."

---

### Control 17: Incident Response Management (pp. 64–66)

**17.4 — Establish and Maintain an Incident Response Process | IG1/2/3 | Respond**

> "Integrate agent-specific threat scenarios and remediation protocols into enterprise incident response plans. Traditional incident response playbooks often fail to address the speed and autonomy of AI agents. Enterprises must update IR frameworks to explicitly cover agent-specific attack vectors, such as prompt injection, hallucinatory data leakage, recursive loop exhaustion, and vector store poisoning. The process must define specialized remediation steps for non-deterministic systems, specifically purging poisoned embeddings from memory stores, rotating compromised tool credentials, and rebuilding tainted runtime environments."

---

### Control 18: Penetration Testing (pp. 67–69)

**18.5 — Perform Periodic Internal Penetration Tests | IG2/3 | Identify**

> "Simulate adversarial prompts, memory poisoning, and autonomous workflow exploits to validate reasoning limits... Internal testing must target the reasoning engine using Red Team scenarios that simulate adversarial prompts, ambiguous instructions, and recursive logic traps designed to force policy bypasses. Testers must attack the agent's memory by injecting conflicting or malicious content into retrieval corpora, such as RAG poisoning, to verify if the agent hallucinates or acts on untrusted data.
>
> Beyond the prompt, testers must treat tool interfaces, including Python interpreters, API connectors, and browser drivers, as hostile entry points. Tests should attempt to manipulate API parameters to force unauthorized tool calls, escape sandboxes, or escalate privileges within the execution environment... testing must stress-test autonomy by attempting to trigger unbounded loops or multi-step chains."

---

## §5 — Identity, Access, and Authorization Controls (Linx-Relevant Subset)

### Agent Identity / Registration / Discovery

**6.1 (p. 28):**
> "Provision persistent, unique identities for agents, using ephemeral credentials where possible or managed secrets where necessary. Agents must operate as distinct digital entities with a persistent identity (e.g., a unique Client ID)..."

**Linx coverage:** Core NHI discovery and identity lifecycle. "Unique Client ID per agent" = canonical entity tracking. **P0 covers.**

---

### Authentication (Token, mTLS, OAuth)

**5.6 (p. 25):** OAuth with refresh tokens / federated identity / passwordless for agent identities.

**6.3 (p. 28):** MFA for externally-exposed agent interfaces.

**12.2 (p. 48):** mTLS for agent ↔ model/memory backbone connections.

**Linx coverage:** Linx observes and governs OAuth tokens/API keys; doesn't issue them. Gap between CIS-prescribed token issuance controls and what Linx enforces inline vs. detects. **Clarify: is Linx an enforcement point or a detection/governance layer for auth?**

---

### Authorization (RBAC, ABAC, Scopes)

**6.8 (p. 29):** Tool-level RBAC, ABAC for high-impact ops, JIT elevation.

**6.8 additional (p. 30):** Context-aware scoping — agent as "Developer" should only access the specific repo for the current ticket.

**Linx coverage:** Tool-level RBAC = Linx core differentiator. **P0 must cover. The ABAC requirement is IG3 — valid post-P0 roadmap item.**

---

### Delegation (Human → Agent, Agent → Agent)

**5.6 (p. 25):** Identity propagation across the entire agent chain; each agent capped at the invoking user's entitlements.

**6.8 additional (p. 30):** On-Behalf-Of flows; agent authority cryptographically bound to user session.

**Linx coverage:** **Likely partial.** Single-agent OBO: probably in scope. Multi-agent chain propagation: confirm with eng whether P0 covers or if this is a post-P0 roadmap item.

---

### Logging / Audit / Monitoring

**8.5 (p. 35):** Tool call histories, memory interaction logs, retrieval traces; timestamps, identity used, parameters passed, outcomes.

**8.11 (p. 36):** Behavioral drift detection — anomalies in identity usage and tool invocation sequences.

**Linx coverage:** Audit logging of tool calls and access decisions = Linx core. **Strong. Claim explicitly.**

---

### Lifecycle (Provisioning, Deprovisioning, JML)

**6.2 (p. 28):** Revoke immediately on retirement/reconfiguration/scope change; "orphaned entitlements" = zombie access risk.

**5.3 (p. 25):** Disable dormant accounts after 45 days.

**Linx coverage:** Orphaned NHI credential cleanup = Linx core use case. **Strong fit. "Orphaned agent credentials" should be a named buyer pain in sales materials.**

---

## §6 — Vendor Expectations

Statements prescribing what a tool/platform must support (distinct from what the organization must do):

**6.1 (p. 28):**
> "Agents must operate as distinct digital entities with a persistent identity (e.g., a unique Client ID)..." — prescribes platform identity architecture.

**6.8 (p. 29):**
> "High-impact operations... require Attribute-Based Access Control (ABAC) overlays or Just-in-Time (JIT) role elevation via explicit policy checks or human-in-the-loop approval." — prescribes enforcement capability at the platform layer.

**16.10 (p. 62):**
> "implement a deterministic policy enforcement layer, or guardrail middleware, to intercept every agent action before execution. This layer must validate tool calls against static policies, such as 'Allow Read' or 'Deny Write,' and block high-risk requests regardless of the agent's intent or generated reasoning." — prescribes inline enforcement, not detection-only.

**5.6 additional (p. 26):**
> "Agents must never autonomously create new user or service accounts unless specifically authorized with controlled delegation." — prescribes a platform capability gate.

---

## §7 — References to Specific Protocols and Standards

| Protocol / Standard | Citations |
|---|---|
| **OAuth / OAuth 2.1** | "prioritizing federated identity and passwordless authentication, such as Certificate Authorities or OAuth with refresh tokens" (5.6, p. 25) |
| **mTLS** | "the connections between the agent and its 'brain' (models) or 'memory' (retrieval systems) must function over private, authenticated backbones (e.g., PrivateLink, mTLS)" (12.2, p. 48) |
| **On-Behalf-Of (OBO) flows** | "Delegated Authorization (e.g., On-Behalf-Of flows)" (6.8 additional, p. 30) — not cited by RFC number |
| **RBAC / ABAC** | Extensively cited in Control 6 |
| **LDAP / Active Directory** | "Active Directory, Lightweight Directory Access Protocol (LDAP), or Identity Provider (IdP)" (6.7, p. 28) |
| **TLS** | Referenced throughout for data-in-transit (Control 3) |
| **MCP (Model Context Protocol)** | Cited as an agent asset type requiring inventory (1.1), tool registration mechanism (5.5), and software allowlisting (2.6); this guide defers detailed MCP guidance to the MCP Companion Guide |
| **gRPC / REST** | Referenced as transport client types in vulnerability scanning context (7.5, p. 32) |
| **SAML, SCIM, SPIFFE/SPIRE, OpenID SSF/CAEP/AuthZen, A2A** | **Not referenced** |
| **Gartner** | **Not referenced** |
| **NIST** | **Not referenced** by name; CIS Controls Navigator maps to NIST SP 800-53 (appendix only) |
| **OWASP** | Referenced as example training resource in 14.9 only |
| **MITRE ATT&CK** | Referenced only in CIS Controls Navigator link (appendix) |

---

## §8 — Gaps and Cautions the Guide Flags

**RAG integrity as behavioral dependency, not just storage (Scope, p. 3):**
> "A compromised RAG index does not just leak data; it can alter an agent's decision logic, such as by retrieving a fake policy to bypass a guardrail. Therefore, this guide treats RAG not as a storage component, but as a behavioral dependency."

**Configuration drift (Control 4 Additional, p. 23):**
> "Agent behavior can drift if the underlying model changes, even if the configuration stays the same. 'Configuration Management' for agents implies continuous monitoring of behavioral outputs against the expected baseline."

**Multi-agent autonomous account creation (Control 5 Additional, p. 26):**
> "Agents must never autonomously create new user or service accounts unless specifically authorized with controlled delegation."

**Credential serialization risk (Control 6 Additional, p. 30):**
> "Agents often serialize their state (memory and scratchpads) to disk to 'pause' and 'resume' workflows. Ensure that active access tokens are stripped from this state before serialization to prevent creating static secrets on disk/database."

**Execution tools as highest-risk surface (Control 4 Additional, p. 23):**
> "Tools that execute code (e.g., Python interpreters) are the highest risk surface. Configuration must explicitly disable networking and restrict filesystem access within these sandboxes unless strictly necessary."

**Retrieval poisoning silent failure (Control 11 Additional, p. 46):**
> "Corruption of vector stores or retrieval indexes can degrade reasoning silently. Recovery testing must validate semantic correctness, not just byte-level integrity."

---

## §9 — Single Most Important Takeaway (≤100 words)

A buyer using this guide as a checklist should prioritize: (1) deterministic policy enforcement at the agent layer — a guardrail middleware that intercepts every tool call against static "Allow/Deny" policies, independent of model reasoning; (2) persistent unique agent identity with ephemeral credentials and full lifecycle governance; (3) centralized IAM with identity propagation across multi-agent chains. Descope: model training governance, non-agentic automation, stdio/endpoint agent patterns (low enterprise risk tier), ABAC overlays (IG3). The P0 must cover tool-level RBAC and orphaned credential cleanup — everything else is IG2/IG3 roadmap.

---

## §10 — Open Questions for Linx PM (before May 8 Scope Commit)

**Q1 — Does P0 enforce tool-level RBAC or provide visibility only?**
CIS 6.8: "RBAC policies should... grant permissions at the level of individual tools or resources and specific action types, including read, write, and irreversible operations." If Linx enforces at the tool level in P0, this is a direct claim. If P0 is detection + governance without inline block, document that gap explicitly.

**Q2 — Does P0 include inline enforcement (guardrail middleware) or is it post-P0?**
CIS 16.10: "implement a deterministic policy enforcement layer, or guardrail middleware, to intercept every agent action before execution... block high-risk requests regardless of the agent's intent." This is inline enforcement, not detection-only. Confirm with eng which side of the line P0 is on.

**Q3 — Is multi-agent identity chain propagation (OBO flows) in P0 scope?**
CIS 5.6: "the system must propagate the invoking user's identity and privilege context across the entire agent chain." This is OAuth Token Exchange / OBO flows across hops. If P0 only handles single-agent identity, multi-agent chain enforcement is a named roadmap gap — state it explicitly rather than letting buyers discover it.

**Q4 — How is the Astrix author conflict disclosed in competitive conversations?**
Astrix (Jonathan Sander) authored this guide. When a prospect says "we follow CIS guidance," they may be referencing a document shaped by your competitor. Linx should be prepared to distinguish: Astrix wrote the framing; Linx builds the product the framework describes. The MCP guide (separate analysis file) is the better independent CIS reference.

**Q5 — Is "orphaned agent credentials" explicitly named as a buyer pain in Linx's ICP messaging?**
CIS 6.2 names this directly as "zombie access." The guide describes the exact use case Linx addresses: agents decommissioned but credentials persisting. If this language isn't already in discovery questions and value messaging, add it.
