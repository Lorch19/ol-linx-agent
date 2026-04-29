# CIS Controls v8.1 — Model Context Protocol (MCP) Companion Guide: Structured Analysis for Linx

**Source document:** CIS Critical Security Controls v8.1 — Model Context Protocol (MCP) Companion Guide v1.0  
**Extracted:** 2026-04-27  
**Purpose:** Compare CIS requirements against Gartner G00833725 framework; inform May 8 scope commit; counter/extend Astrix "CIS-aligned" claim

---

## §1 — Document Metadata

| Field | Value |
|---|---|
| **Full title** | Model Context Protocol (MCP) Companion Guide v1.0 — CIS Critical Security Controls v8.1 |
| **Version** | v1.0 |
| **Publication date** | April 2026 |
| **Principal Authors** | Andrew Dannenberger (CIS), Shreyans Mehta (Cequence Security) |
| **Editors** | Robin Regnier (CIS), Thomas Sager (CIS), Valecia Stocchetti (CIS) |
| **Contributors** | Abhishek Iyer (Cybersecurity Leader), Christopher Misra (Univ. of Massachusetts), Geoff Hancock (Cyber Bridge Solutions), Jack Zaldivar Jr. (Databricks), Jonathan Sander (Astrix) |
| **Pages** | ~75 + appendices A–E |
| **Stated audience** | Enterprises deploying MCP systems; security architects, engineers, and compliance teams governing AI tool integrations |
| **Stated scope** | Local stdio and remote Streamable HTTP MCP deployments across enterprise-controlled and third-party servers, including state-changing write operations. Covers hosts, clients, servers, and gateways. **Excludes** general LLM security topics (AI LLM Companion Guide); agent-level orchestration and planning above the MCP protocol layer (AI Agent Companion Guide) |

> ✅ **Competitive note:** Unlike the AI Agents guide (principally authored by Astrix's Jonathan Sander), this guide was authored by CIS + Cequence Security. Astrix appears only as a contributor. **This is the cleaner independent CIS reference for Linx positioning.** It reaches the same gateway-enforcement conclusions without Astrix's fingerprints.

---

## §2 — Executive Summary (verbatim)

> "The Model Context Protocol (MCP) is an open standard designed to let artificial intelligence (AI) systems interact consistently with external tools, data sources, and services. Rather than relying on proprietary or model-specific integrations, MCP provides a common, interoperable framework so that different models, agents, and platforms can access the same set of capabilities in a controlled way. This increases modularity, improves auditability, and makes integration behavior (discovery, invocation, and logging) more predictable across models and platforms.
>
> At its core, MCP defines how an AI model can request information, call tools, read structured documents, or interact with a system, without requiring bespoke, model-specific plugin implementations for each tool or data source. For enterprises operating in sensitive or complex environments, this creates a scalable and policy-aligned way to connect AI to internal systems while maintaining visibility and control over what the model can access.
>
> A defining characteristic of MCP is its focus on explicit permissions, clear interface contracts, and auditable actions. Rather than broad or opaque access, each capability (whether retrieving data, running a command, or submitting a task) is granted individually.
>
> More broadly, MCP helps standardize how AI agents operate in enterprise environments by abstracting away model-specific differences and providing a predictable communication layer. This supports consistent, safe integration across products, platforms, and vendors.
>
> This guide provides practical, actionable guidance for applying CIS Controls v8.1 to systems that implement MCP. In CIS terms, MCP primarily expands the identity, access control, logging, and application security surfaces by formalizing how AI systems discover and invoke privileged capabilities. MCP introduces operational and security considerations that differ significantly from traditional integration models, requiring protections tailored to agent driven tool execution and context management."

---

## §3 — Mapping to CIS Controls v8.1

### Which controls are extended?

All 18 CIS Controls are extended in sequence.

| Control # | Name | MCP Relevance |
|---|---|---|
| 1 | Inventory and Control of Enterprise Assets | MCP hosts, clients, servers, gateways, tool/resource/prompt registries as inventoriable assets |
| 2 | Inventory and Control of Software Assets | Server executables, SDKs, OAuth libraries, JSON-RPC frameworks, tool wrappers |
| 3 | Data Protection | Tool inputs/outputs, resource payloads, sampling artifacts, session caches |
| 4 | Secure Configuration | OAuth/PKCE config, Origin validation, capability baselines, server registries |
| 5 | Account Management | OAuth client registrations, service accounts, downstream API keys |
| 6 | Access Control Management | Tool-level RBAC, OAuth scopes, gateway-mediated enforcement, token audience binding |
| 7 | Continuous Vulnerability Management | SDK CVEs, MCP-specific CVE table (Appendix B), protocol upgrade handling |
| 8 | Audit Log Management | Tool invocation logs, resource access, session/request correlation |
| 9 | Email and Web Browser Protections | URL allowlists for MCP server connections, DNS filtering |
| 10 | Malware Defenses | Server binary scanning, content inspection for retrieved resources |
| 11 | Data Recovery | Session state, task state, caches, context stores |
| 12 | Network Infrastructure Management | Gateway architecture, TLS enforcement, Origin validation, microsegmentation |
| 13 | Network Monitoring and Defense | Traffic anomaly detection for MCP invocation patterns |
| 14 | Security Awareness and Skills Training | Tool poisoning awareness, delegated auth risks, unvetted server risks |
| 15 | Service Provider Management | Third-party MCP server vetting, rug pull monitoring |
| 16 | Application Software Security | SAST/DAST on server code, parameter validation, sandbox isolation |
| 17 | Incident Response Management | Session termination, tool disabling, kill switch procedures |
| 18 | Penetration Testing | Tool injection, DNS rebinding, sandbox escape, session hijacking |

### New controls or safeguards introduced?

**None.** The guide explicitly states (Methodology, p. 3):

> "It does not introduce new Controls or Safeguards. Instead, it interprets each Safeguard for MCP deployments by identifying the MCP components affected and the operational evidence that can demonstrate the Safeguard is working."

### Implementation Groups

Uses existing IG1/IG2/IG3 framework. Key caveat (How to Use This Guide, p. 5):

> "Enterprises deploying MCP in high-impact workflows may require Safeguards from higher Implementation Groups regardless of their overall IG classification."

### The prescribed architecture — critical for Linx

> "For high-impact workflows, **gateway-mediated deployments are the recommended default** to centralize identity binding, policy enforcement, logging, and kill-switch controls." (Methodology, p. 4)

---

## §4 — Controls and Safeguards (MCP-Specific Interpretations)

All quotes are direct from the guide with page references.

---

### Control 1: Inventory and Control of Enterprise Assets (pp. 9–11)

**1.1 — Establish and Maintain Detailed Enterprise Asset Inventory | IG1/2/3 | Identify**

> "Maintain an enterprise inventory of MCP components and a server registry as the authoritative record. Establish the registry and keep it current through routine reviews and updates when changes occur. Track all hosts, clients, servers, and gateways. Include named owner, escalation contact, and decommission planning for each component.
>
> For each component, record the deployment type, declared capabilities, authorization details, transport and supported protocol versions, and version. For third-party servers, record the source and approval status. For each server, also record: risk tier (read-only vs. write vs. irreversible), containment lever owner (who can disable tools, server, gateway), and capability baseline snapshot (hash or versioned export of tools, resources, prompts)."

**1.2 — Address Unauthorized Assets | IG1/2/3 | Protect**

> "Detect and remove or quarantine unauthorized MCP servers, clients, and gateways, and treat unauthorized capability expansions (new tools, resources, prompts on a known server) as unauthorized assets requiring immediate review and re-approval before production use."

**1.3 — Utilize an Active Discovery Tool | IG2/3 | Identify**

> "Use active discovery to identify stdio MCP server executables, JSON configuration files, and running processes across endpoints. During initialization, capture configured capabilities such as tool schemas and resource URI patterns for security review.
>
> Cross-reference actively discovered servers against the approved enterprise registry. Flag unknown MCP server binaries and configurations, unexpected execution paths, and any server found in the environment that lacks a corresponding, integrity-verified entry in the registry including any capability declarations that do not match the approved registry baseline."

**1.5 — Use a Passive Asset Discovery Tool | IG3 | Identify**

> "Passive network analysis identifies MCP communications across enterprise segments. Focus on session initialization and capability negotiation messages to confirm exposed server features. Monitor authentication and authorization events associated with MCP access.
>
> Alert on unknown or unauthorized MCP endpoints and on unusual volumes or sequences of tool invocation... Alert on anomalous tool invocation sequences (new tool names, unusual call order, high-frequency bursts), and on authentication failures that indicate enumeration or replay."

Additional considerations (p. 11):

> "Treat `listChanged` notifications as inventory signals. Unexpected changes to a server's declared tools, resources, or prompts must be cross-referenced against the approved registry entry. Deviations should trigger investigation and re-validation against the authorized baseline."

> "Default policy should be deny-by-default for newly declared capabilities until re-approved, especially in production."

> "Leverage the functional metadata within the registry to perform static inventory validation. If a server's capability declaration (tools, resources, prompts) during initialization differs from its registered profile, treat the event as unauthorized asset expansion or a potential 'Rug Pull' attack."

---

### Control 2: Inventory and Control of Software Assets (pp. 12–14)

**2.1 — Establish and Maintain a Software Inventory | IG1/2/3 | Identify**

> "Maintain an inventory of MCP software assets: server executables, client libraries and SDKs, gateway components, OAuth libraries, and JSON-RPC frameworks. For each component, record package name and version, source registry or repository, integrity data such as hashes or signatures, and the MCP specification version supported. Include third-party servers with source and approval status."

> "Maintain an SBOM/dependency manifest for MCP components, including transitive dependencies, to accelerate vulnerability response. Verify integrity at intake and again at provisioning and deployment to detect tampering."

**2.5 — Allowlist Authorized Software | IG2/3 | Protect**

> "Enforce an allowlist for MCP servers and tool wrappers using versioned entries with integrity verification, deny-by-default per Control 1. Install only from enterprise approved registries or vetted artifact repositories, block direct URL, personal registry, and local source installs in production, and verify signatures or hashes at intake and again at provisioning.
>
> Allowlisting must cover both the server artifact and the approved capability set; capability expansions are blocked until reviewed and promoted."

**2.7 — Allowlist Authorized Scripts | IG3 | Protect**

> "For MCP servers implemented in Python, JavaScript, TypeScript, or shell, enforce strict script execution controls by allowing only pre-approved scripts and dependencies. Verify integrity with cryptographic hashing or code signing."

---

### Control 3: Data Protection (pp. 15–18)

**3.3 — Configure Data Access Control Lists | IG1/2/3 | Protect**

> "Enforce access control server-side (and/or at the gateway) for each tool and resource using an ACL scoped by resource, action, and authenticated identity. For Streamable HTTP, validate identity and claims, including scopes and audience, and enforce the ACL so that only permitted principals can act on protected resources. For stdio, bind tool and resource access to the OS identity and restrict file roots and environment access by policy."

**3.4 — Enforce Data Retention | IG1/2/3 | Protect**

> "Set minimum and maximum retention periods for MCP data caches, including tool outputs, resource content, context stores, and sampling data, aligned to the classification of data flowing through each server. Retention must be tiered by tool sensitivity and data classification, and enforced through automated deletion with audit evidence."

**3.5 — Securely Dispose of Data | IG1/2/3 | Protect**

> "Securely delete server caches, sensitive logs, and temporary files. Clear OAuth tokens stored by HTTP servers. Remove session data such as `MCP-Session-Id` mappings. Ensure cleanup on normal shutdown and on failure paths for both stdio and Streamable HTTP deployments.
>
> Clear refresh tokens and any stored client credentials where applicable. Use crash-safe deletion patterns or envelope encryption with key shredding for sensitive caches."

**3.10 — Encrypt Sensitive Data in Transit | IG1/2/3 | Protect**

> "Require TLS 1.2 or later for Streamable HTTP. Validate certificates and reject weak ciphers and downgrade attempts. For stdio, protect data via OS process isolation, least-privilege execution, and endpoint encryption; treat any subsequent network calls from the server to backend APIs as in-transit data requiring TLS. Ensure back-end API calls from servers also use TLS.
>
> Gateways must terminate TLS with proper certificate management and can use mutual TLS for higher security. For high-risk deployments, use mutual TLS between gateway and server and enforce strict certificate validation."

**3.11 — Encrypt Sensitive Data at Rest | IG2/3 | Protect**

> "Encrypt sensitive MCP data at rest. This includes server caches, vector stores, file systems exposed by tools and any stored OAuth tokens or session data for HTTP servers. Protect configuration files that may contain authorization metadata, OAuth client credentials, or capability declarations. Store OAuth client secrets and API keys in a secrets manager, not in plaintext configuration files, and restrict filesystem permissions on capability and configuration declarations."

**3.14 — Log Sensitive Data Access | IG3 | Detect**

> "Log tool and resource access with enough metadata for audit while avoiding sensitive content. Record tool or resource identifiers, identity, server, session, timestamp and request IDs. Capture full parameters only under defined workflows and protect those records accordingly.
>
> Use two-tier logging: metadata logs by default, and tightly controlled full-content capture only for approved investigations with elevated access, short retention, and audit trails."

Additional consideration (p. 18):

> "All MCP tool definitions, resources, and prompts contained in MCP client files, MCP registry definitions, or anywhere else must not contain any sensitive information. A common bad practice is for tool definitions to contain secrets (e.g., passwords, tokens, keys) or prompts and resources to contain proprietary information."

---

### Control 4: Secure Configuration (pp. 19–22)

**4.1 — Establish and Maintain a Secure Configuration Process | IG1/2/3 | Protect**

> "Create versioned secure configuration baselines for MCP servers, clients, and gateways. For stdio, restrict file access to declared roots, minimize process privileges, and ensure standard output (stdout) is reserved for protocol messages and standard error (stderr) for diagnostics, and prevent sensitive data from being written to either stream without redaction controls. This process should utilize the Enterprise MCP Registry to define the authorized schema and functional baseline for every approved server.
>
> For Streamable HTTP, enforce OAuth with PKCE, validate the Origin header, bind local-only servers to `127.0.0.1`, and treat `MCP-Session-Id` as a session state rather than an authorization mechanism. **Do not treat session identifiers (MCP-Session-Id) as identity or authorization claims.**"

**4.6 — Securely Manage Enterprise Assets and Software | IG1/2/3 | Protect**

> "Deploy MCP servers through controlled, repeatable processes that include integrity verification and approval before activation. Use an enterprise MCP registry to manage approved and vetted servers, and prohibit ad hoc installation of community or unvetted servers in production environments.
>
> Apply change control to server deployments, including updates that affect capabilities, OAuth settings, or data source connections. Treat changes to declared tools, resources, and prompts as configuration changes requiring review, approval, and re-validation before promotion to production."

**4.8 — Uninstall or Disable Unnecessary Services | IG1/2/3 | Protect**

> "Expose only the tools, resources, and prompts required as defined in the approved enterprise MCP registry entry. Remove overly broad tools and limit resource URI patterns to the registry-validated baseline."

Additional considerations (p. 22):

> "Validate configuration drift on a fixed cadence and after each change. Confirm deployed servers and gateways match the approved registry baseline for transport, authorization, and logging redaction controls."

> "Prefer centralized gateways for production deployments to align with approved transport, authorization, and policy baselines enforced via the enterprise MCP Registry."

> "Use the tool and resource schemas stored in the MCP Registry as an active configuration filter at the gateway or host level. Block any server attempts to execute tools or provide resources that deviate from the registered configuration schema."

---

### Control 5: Account Management (pp. 23–25)

**5.1 — Establish and Maintain an Inventory of Accounts | IG1/2/3 | Identify**

> "Maintain an inventory of all user and service accounts that install, operate, or run MCP servers. For Streamable HTTP, include service accounts tied to authorization servers and resource owner accounts with OAuth grants. For stdio, include endpoint accounts that run servers.
>
> Link each identity to the MCP component it serves (host, client, server, gateway), the tools and resources it can access, and its risk tier (read-only vs. write vs. irreversible)."

**5.2 — Use Unique Passwords | IG1/2/3 | Protect**

> "Use strong, unique credentials for all MCP administrative and service identities, preferring federated identity, workload identity, and short-lived credentials over static secrets where possible.
>
> Where passwordless methods cannot be implemented, all credentials (including passwords, keys, and tokens) must be rotated on a defined schedule to maintain account security.
>
> For Streamable HTTP servers, this includes authorization server accounts, gateway administration accounts, and OAuth client credentials for confidential clients. Client ID Metadata Documents may be used as an alternative to pre-registration, where supported by the chosen authorization server."

**5.3 — Disable Dormant Accounts | IG1/2/3 | Protect**

> "Disable user and service accounts that no longer require MCP access, and revoke OAuth access and refresh tokens for any account marked dormant. Use an inactivity threshold without MCP authentication or tool invocation to identify dormant accounts for review and disabling.
>
> Identify dormant access by both authentication events and tool invocation history; revoke grants even if the user account remains active. Include role change as a revocation review trigger alongside offboarding and dormancy: a change in job function can invalidate existing OAuth grants and tool access paths without the account becoming inactive."

**5.5 — Establish and Maintain an Inventory of Service Accounts | IG2/3 | Identify**

> "Inventory all service accounts supporting MCP deployments: accounts used by server processes to access backend APIs, gateways connecting to authorization servers, automated deployment processes, and server-to-server operations such as sampling requests. For each account, record the business purpose, account owner or responsible department, associated components, systems accessed, credential rotation schedule, authorized scopes, environment (e.g., development, staging, production), the tools and resources the account is authorized to access, and the approved secrets system or location used to store credentials. Cross-environment credential reuse must be explicitly prohibited.
>
> Conduct reviews at least a quarterly cadence to verify that each account remains necessary, correctly scoped, and aligned with current operational requirements. Reduce privileges for high-impact tool accounts between reviews when scope drift is detected rather than waiting for the next scheduled cycle."

**5.6 — Centralize Account Management | IG2/3 | Protect**

> "Integrate Streamable HTTP deployments with enterprise authorization servers. Configure OAuth flows to authenticate through enterprise identity providers. Authorization servers should use enterprise IdP and standard discovery mechanisms where available. stdio deployments inherit the account management model of their host endpoints.
>
> Third-party servers accessed through gateways can use centralized authorization with Protected Resource Metadata discovery. Prefer centralized authorization via gateway or shared auth services to avoid per-server credential sprawl and inconsistent policy."

Additional considerations (p. 25):

> "Separate identities used for tool execution from those used for administration and avoid reusing broad service accounts across multiple tools or servers."

> "Retrieve credentials at runtime from an approved enterprise secrets manager with rotation and access auditing. For stdio deployments, pass a minimal environment to subprocesses so that sensitive variables are not exposed."

> "Prohibit shared downstream service accounts across multiple tools or servers unless explicitly approved; shared identities defeat attribution and blast-radius control."

---

### Control 6: Access Control Management (pp. 26–29)

**6.1 — Establish an Access Granting Process | IG1/2/3 | Protect**

> "Authenticate the client on every request and enforce authorization that matches the formally approved grant. Deny or revoke any request outside the approved tool, resource, scope, or time window.
>
> For Streamable HTTP servers, require OAuth access tokens with PKCE; clients must include the `resource` parameter in token requests to bind each token to a specific MCP server, and servers must reject tokens whose audience does not match their resource identifier. Validate issuer, expiry, and scopes on every request.
>
> For stdio servers, validate the server executable against an approved allowlist using integrity checks such as cryptographic hashes or path-based restrictions. For proxy servers connecting to third-party APIs, implement per-client consent verification before initiating authorization flows.
>
> To counter tool poisoning, the consent process must include 'full tool transparency,' displaying the complete, un-summarized tool manifest (including descriptions and parameters) to the user before a server is authorized."

**6.2 — Establish an Access Revoking Process | IG1/2/3 | Protect**

> "Require explicit deprovisioning of MCP access during offboarding by revoking authorizations and disabling refresh mechanisms, terminating active sessions, removing Client ID Metadata Documents where used, and for stdio deployments terminating server processes and removing server executables. Cancel outstanding tasks associated with the revoked identity where the server supports task cancellation, using `tasks/cancel` with the relevant task ID.
>
> Task handles issued prior to revocation may otherwise allow result retrieval to continue after the authorization grant has been terminated. Invalidate cached authorization decisions and terminate gateway sessions associated with revoked identities."

**6.3 — Require MFA for Externally-Exposed Applications | IG1/2/3 | Protect**

> "Require MFA for human users through the enterprise IdP on all internet-accessible MCP servers. For non-interactive and gateway-to-server access, require mutual TLS between client and server and bind OAuth tokens to the client certificate to prevent replay; where mTLS is not feasible, require sender-constrained tokens such as DPoP (Demonstration of Proof-of-Possession). Authorization servers must enforce PKCE (Proof Key for Code Exchange) for authorization code flows.
>
> For automated and agent-driven workflows that cannot use MFA, require OAuth client credentials or Personal Access Tokens stored in an enterprise secrets manager with audited access and defined rotation policies. Enforce TLS 1.2 or later with Origin validation for Streamable HTTP."

**6.5 — Require MFA for Administrative Access | IG1/2/3 | Protect**

> "Require MFA for administrative access to MCP infrastructure, including gateway administration, authorization server configuration, server registry management, and OAuth client registration."

**6.6 — Establish and Maintain an Inventory of Authentication and Authorization Systems | IG2/3 | Identify**

> "Inventory authentication and authorization systems that support MCP, including authorization servers, gateways, identity providers, and discovery endpoints (e.g., Protected Resource Metadata, Authorization Server Metadata, and OpenID Connect Discovery). Record OAuth endpoints, supported flows, audience binding approach, and integrations. Maintain an inventory of OAuth client registrations, including owner, approved scopes, and credential rotation requirements."

**6.7 — Centralize Access Control | IG2/3 | Protect**

> "Use gateway-based authorization to centralize policy enforcement, logging, and OAuth flow management. Consolidate authorization through gateways rather than implementing separate OAuth logic per server. Gateways can enforce consistent Origin validation, rate limiting, and session management. **Gateways should support deny-by-default policy and a rapid kill switch to disable high-risk tools or servers during investigation.**"

**6.8 — Define and Maintain Role-Based Access Control | IG2/3 | Protect**

> "Conduct routine reviews of MCP roles, OAuth scopes, and actual tool usage. Revoke unused or excessive permissions and adjust assignments to least privilege. Define and maintain roles that govern access to MCP tools and resources, and map OAuth scopes to those roles. Clients must request only the minimum scopes required for their intended operations, using server-advertised scope information where available. Update role definitions and scope mappings as tools and resources change.
>
> **RBAC policies should grant permissions at the level of individual tools or resources and specific action types, including read, write, and irreversible operations, rather than through broad scope assignments.**"

Additional considerations (p. 29):

> "Define a standard method for assigning tool permissions, such as grouping tools by risk tier and requiring additional controls for high-risk tools. To prevent scenarios where the output of one tool inadvertently triggers or manipulates the execution of a subsequent tool, a vulnerability known as tool interference, explicitly isolate the execution context between distinct tool calls."

> "Require formal approval before granting additional scopes; record the approval with Approver's identity, reason, timestamp, and scope changes. Validate that `listChanged` notifications do not introduce 'shadow tools' that bypass the initial scope approval."

> "**Do not rely on tool annotations (e.g., `readOnlyHint/destructiveHint`) or model prompts to enforce access control; treat annotations as untrusted metadata.**"

> "For Streamable HTTP, bind session IDs to user-specific information (e.g., a hashed user ID) at initialization. Verify this binding on every subsequent request to prevent session hijacking or cross-session impersonation."

**Critical overarching principle (Methodology, p. 3):**

> "**This guide assumes authorization decisions are enforced deterministically by gateways and servers and are not delegated to model outputs.**"

> "**a model or client request is not to be treated as an authorization decision. Authorization and policy enforcement must be implemented deterministically at the gateway and/or server layer, independent of model output.**" (How to Use This Guide, p. 5)

---

### Control 7: Continuous Vulnerability Management (pp. 30–32)

**7.1 | IG1/2/3 | Identify**

> "Treat MCP spec and SDK upgrades and capability changes as security-relevant events requiring regression testing of authorization, Origin and transport controls, and tool boundaries."

**7.5 — Perform Automated Vulnerability Scans | IG2/3 | Detect**

Scan MCP server executables, SDKs, gateway components, and transitive dependencies for known CVEs. (See Appendix B CVE table in §10 for concrete examples.)

---

### Control 8: Audit Log Management (pp. 33–35)

**8.1 — Establish and Maintain an Audit Log Management Process | IG1/2/3 | Detect**

> "Establish an audit log management process that logs all MCP tool invocations, resource accesses, session events, and authorization decisions while enforcing redaction for sensitive content."

**8.5 — Collect Detailed Audit Logs | IG2/3 | Detect**

> "Log tool and resource access with enough metadata for audit while avoiding sensitive content. Record tool or resource identifiers, identity, server, session, timestamp and request IDs. Capture full parameters only under defined workflows and protect those records accordingly.
>
> Use two-tier logging: metadata logs by default, and tightly controlled full-content capture only for approved investigations with elevated access, short retention, and audit trails."

---

### Control 12: Network Infrastructure Management (pp. 42–43)

**12.2 — Establish and Maintain a Secure Network Architecture | IG2/3 | Protect**

> "Segment agent runtimes and enforce private, authenticated connectivity for MCP endpoints. Isolate third-party servers from enterprise-developed servers. Where Origin validation is applicable (e.g., browser-mediated clients), enforce strict Origin allowlists; for non-browser clients, enforce client identity using gateway controls, mTLS, or signed workload identity.
>
> Restrict local-only servers to `127.0.0.1`. Record network paths for OAuth authorization flows."

**12.5 — Centralize Network AAA | IG2/3 | Protect**

> "No Additional MCP Guidance" — the standard safeguard applies; enterprise AAA should govern MCP traffic flows.

---

### Control 16: Application Software Security (pp. 52–55)

**16.1 — Establish and Maintain a Secure Application Development Process | IG1/2/3 | Protect**

> "Implement secure deployment pipelines for MCP servers using CI/CD pipelines that enforce code quality checks, dependency scanning, environment hardening, and secret stripping before deployment."

**16.2 — Establish and Maintain a Process to Accept and Address Software Vulnerabilities | IG2/3 | Protect**

> "Assess vulnerabilities in MCP tool wrappers and execution surfaces. Evaluate the security of tools available to agents — such as code interpreters, browser tools, shell environments, or MCP tools — and remediate vulnerabilities quickly."

**16.7 — Use Standard Hardening Configuration Templates | IG2/3 | Protect**

> Referenced in multiple CVE mitigations (Appendix B) as the primary control for hardening server configurations.

**16.10 — Apply Secure Design Principles | IG2/3 | Protect**

> "Harden MCP server and gateway architectures by applying standard application security testing (SAST, DAST, dependency scanning) and implementing strict parameter validation for all tool inputs and outputs. Enforce gateway-level deny-by-default policy as the deterministic authorization layer."

---

### Control 17: Incident Response Management (pp. 56–58)

**17.4 — Establish and Maintain an Incident Response Process | IG1/2/3 | Respond**

> "Integrate MCP-specific incident scenarios into enterprise IR plans. Include procedures for: tool disabling via gateway kill switch, session termination via `HTTP DELETE`, token revocation, capability rollback to approved registry baseline, and isolation of compromised MCP servers."

Additional consideration:

> "Gateways enable rapid response to security incidents through centralized server disconnection, tool disabling, and traffic blocking without requiring changes to individual backend servers." (Appendix A.3, p. 68)

---

### Control 18: Penetration Testing (pp. 59–60)

**18.2 — Perform Periodic External Penetration Tests | IG2/3 | Identify**

> Referenced in CVE-2025-66414 and CVE-2025-66416 as mitigation for DNS rebinding risks (MCP TypeScript and Python SDKs where Origin protection is not enabled by default).

**18.5 — Perform Periodic Internal Penetration Tests | IG2/3 | Identify**

> "Test MCP tool injection, sandbox escape, session hijacking, and tool poisoning scenarios. Validate that gateway deny-by-default policy cannot be bypassed. Test `listChanged` handling for rug pull scenarios."

---

## §5 — Identity, Access, and Authorization Controls (Linx-Relevant Subset)

### Agent Identity / Registration / Discovery

**5.1 (p. 23):**
> "Link each identity to the MCP component it serves (host, client, server, gateway), the tools and resources it can access, and its risk tier (read-only vs. write vs. irreversible)."

**1.1 (p. 10):**
> "For each server, also record: risk tier (read-only vs. write vs. irreversible), containment lever owner (who can disable tools, server, gateway), and capability baseline snapshot."

**Linx coverage:** MCP component → identity → tool/resource → risk tier mapping. Core Linx asset discovery model. **P0 covers.**

---

### Authentication (Token, mTLS, OAuth, JWT)

**6.1 (p. 27):** OAuth access tokens with PKCE; `resource` parameter for audience binding; reject tokens with mismatched audience.

**6.3 (p. 27):** mTLS for gateway-to-server; DPoP where mTLS infeasible.

**3.10 (p. 17):** TLS 1.2+ for all Streamable HTTP.

**Appendix A.6:** OAuth Client Credentials for machine-to-machine; Enterprise-Managed Authorization (SSO integration).

**Linx coverage:** Linx observes and governs tokens; doesn't issue them. The PKCE enforcement requirement sits at the IdP/authorization server — upstream of Linx. Linx can detect violations but prescriptive PKCE enforcement is IdP territory. **Document this boundary clearly in scope materials.**

---

### Authorization (RBAC, Scopes, Tool-Level)

**6.8 (p. 28) — the most specific requirement in either guide:**
> "RBAC policies should grant permissions at the level of individual tools or resources and specific action types, including read, write, and irreversible operations, rather than through broad scope assignments."

**Tool sensitivity taxonomy (Methodology, p. 3):**
> Tool sensitivity must be categorized as: (1) read-only non-sensitive, (2) read-only sensitive, (3) write/change state, or (4) irreversible/high impact (external communications, financial/legal commitments, security posture changes)

**6.8 additional (p. 29):**
> "Do not rely on tool annotations (e.g., `readOnlyHint/destructiveHint`) or model prompts to enforce access control; treat annotations as untrusted metadata."

**Linx coverage:** Tool-level RBAC with sensitivity tiering is the core Linx MCP value proposition. **The 4-tier taxonomy is a direct input to P0 product design. Linx should explicitly reference this taxonomy in docs and sales materials.**

---

### Delegation

**6.2 (p. 27):** Cancel outstanding tasks on identity revocation — "task handles issued prior to revocation may otherwise allow result retrieval to continue after the authorization grant has been terminated."

**5.5 additional (p. 25):** Separate identities per tool; prohibit shared service accounts across tools.

**Linx coverage:** Task handle revocation is a specific MCP lifecycle requirement. Confirm whether Linx's revocation flows propagate to in-flight task handles. **May be a gap.**

---

### Logging / Audit / Monitoring

**8.5 / 3.14 (pp. 18, 35):** Tool/resource identifiers, identity, server, session, timestamp, request IDs. Two-tier logging: metadata default, full-content gated.

**1.5 (p. 11):** Alert on anomalous tool invocation sequences — "new tool names, unusual call order, high-frequency bursts."

**Linx coverage:** Audit logging with tool call attribution = Linx core. Two-tier logging design (metadata vs. full-content) aligns with enterprise data minimization requirements. **Claim explicitly. The anomalous invocation sequence alerting is a differentiating detection capability.**

---

### Lifecycle (Provisioning, Deprovisioning, JML)

**5.3 (p. 24):**
> "Include role change as a revocation review trigger alongside offboarding and dormancy: a change in job function can invalidate existing OAuth grants and tool access paths without the account becoming inactive."

**5.5 (p. 25):** "Reduce privileges for high-impact tool accounts between reviews when scope drift is detected rather than waiting for the next scheduled cycle."

**Linx coverage:** Role-change-triggered revocation (not just offboarding) is a named requirement. If Linx monitors for role drift and triggers access reviews, this is a strong differentiated claim. **Confirm with eng.**

---

### Tool-Level Access Control

**6.8 (p. 28):** Per-tool, per-action-type RBAC (read / write / irreversible).

**6.1 (p. 27):** Deny/revoke any request outside the approved tool, resource, scope, or time window.

**Gateway (6.7, p. 28):** Kill switch for individual tools; deny-by-default.

**Linx coverage:** This is the MCP guide's central thesis for what a security product must do. **P0 must cover. Frame as "we implement what CIS defines as the recommended gateway architecture."**

---

### Inline Enforcement / Gateway Architecture

**Methodology (p. 4) — the definitive architectural statement:**
> "For high-impact workflows, **gateway-mediated deployments are the recommended default** to centralize identity binding, policy enforcement, logging, and kill-switch controls."

**6.7 (p. 28):**
> "Use gateway-based authorization to centralize policy enforcement, logging, and OAuth flow management... Gateways should support deny-by-default policy and a rapid kill switch to disable high-risk tools or servers during investigation."

**Appendix A.3 (p. 67–68):**
> "Gateways function as an intermediary control point and are critical infrastructure in production deployments... The gateway becomes the enforcement boundary for authorization, scope validation, and policy decisions... Gateways enable rapid response to security incidents through centralized server disconnection, tool disabling, and traffic blocking without requiring changes to individual backend servers."

**Linx coverage:** CIS explicitly endorses the architecture Linx is building. **This is the single strongest competitive alignment point.** The inline gateway = deterministic enforcement is exactly what Gartner G00833725 Layer 2 describes and what CIS calls the "recommended default." Quote these directly in competitive and analyst conversations.

---

## §6 — Vendor Expectations

Statements prescribing what a tool/platform must provide:

**Protocol Overview (p. 2):**
> "Tools are executable actions exposed by a server. Tool schemas define expected parameters, but **servers and gateways must enforce allowlisting, least privilege, and server-side parameter validation. Never rely on the client or model to enforce tool authorization.**"

**Methodology (p. 3):**
> "This guide assumes **authorization decisions are enforced deterministically by gateways and servers and are not delegated to model outputs.**"

**6.7 (p. 28):**
> "Gateways should support deny-by-default policy and a **rapid kill switch to disable high-risk tools or servers during investigation.**"

**Appendix A.3 (p. 68):**
> "Gateways enable rapid response to security incidents through **centralized server disconnection, tool disabling, and traffic blocking without requiring changes to individual backend servers.**"

**6.2 (p. 27):**
> "Invalidate cached authorization decisions and terminate gateway sessions associated with revoked identities." — prescribes that gateways must support real-time revocation propagation.

**Organization vs. platform boundary:**
- "The organization must" → configure access grants/revocations, maintain inventories, conduct reviews, establish IR plans
- "The tool/platform must" → enforce authorization deterministically at the gateway layer independent of model output; support PKCE at the authorization server; validate token audience/issuer/expiry on every request; provide kill switch; emit structured audit logs; never pass tokens through to downstream APIs

---

## §7 — References to Specific Protocols and Standards

### OAuth 2.1 / OAuth (most cited protocol)

**Glossary (p. 7):**
> "MCP's authorization model aligns with OAuth 2.1 patterns, including mandatory PKCE with S256."

**How to Use This Guide (p. 5):**
> "MCP servers should delegate user authentication to the enterprise identity provider (IdP) via OAuth 2.1 rather than directly collecting or handling user credentials."

**6.1 (p. 27):**
> "require OAuth access tokens with PKCE; clients must include the `resource` parameter in token requests to bind each token to a specific MCP server"

**Appendix A.6 (p. 71):**
> "OAuth Client Credentials: Enables machine-to-machine authorization using the OAuth 2.0 Client Credentials grant, applicable when no human user is present (e.g., in automated pipelines or server-to-server integrations)."
>
> "Enterprise-Managed Authorization: Places the enterprise Identity Provider (IdP) in the authorization path, enabling corporate SSO to govern which users may access which MCP servers and with which scopes."

### PKCE (Proof Key for Code Exchange)

**Glossary (p. 7):**
> "An OAuth extension that prevents authorization code interception attacks. **MCP requires PKCE with the `S256` challenge method for all OAuth flows.**"

**6.3 (p. 27):**
> "Authorization servers must enforce PKCE (Proof Key for Code Exchange) for authorization code flows."

### mTLS (Mutual TLS)

**6.3 (p. 27):**
> "For non-interactive and gateway-to-server access, require mutual TLS between client and server and bind OAuth tokens to the client certificate to prevent replay."

**Appendix A.2 (p. 65):**
> "MCP servers must validate client certificates when mutual TLS is deployed."

**Appendix A.3 (p. 67):**
> "Where backend servers are co-located or on a trusted network, internal TLS or mutual TLS provides defense in depth."

### DPoP (Demonstration of Proof-of-Possession)

**6.3 (p. 27):**
> "where mTLS is not feasible, require sender-constrained tokens such as DPoP (Demonstration of Proof-of-Possession)"

### TLS

**Glossary (p. 7):**
> "MCP requires TLS 1.2 or later for all Streamable HTTP connections."

**3.10 (p. 17):** TLS 1.2+ required; reject weak ciphers and downgrade attempts.

### JWT / Token Audience Binding

**Glossary (p. 8):**
> "Token Audience Binding: Binding OAuth tokens to specific servers using the resource parameter, preventing token replay across different servers."

**6.1 (p. 27):**
> "servers must reject tokens whose audience does not match their resource identifier. Validate issuer, expiry, and scopes on every request."

### Token Passthrough (explicitly forbidden)

**Glossary (p. 8):**
> "Token Passthrough: Forwarding a token received from an MCP client to a downstream API. **MCP forbids token passthrough; servers that call backend or downstream APIs should obtain separate tokens.**"

### PKCE / Authorization Code Flow

Detailed per Appendix A.6 — PKCE with S256 required for all authorization code flows; Client ID Metadata Documents preferred over Dynamic Client Registration.

### Protected Resource Metadata / OpenID Connect Discovery

**6.6 (p. 28):** "inventory... discovery endpoints (e.g., Protected Resource Metadata, Authorization Server Metadata, and OpenID Connect Discovery)"

**6 applicability (p. 26):** "In Streamable HTTP, clients fetch Protected Resource Metadata from `/.well-known/oauth-protected-resource` to learn the authorization server... Misconfigured metadata can redirect authentication to an attacker."

### JSON-RPC 2.0

**Glossary (p. 7):**
> "MCP uses JSON-RPC 2.0 with requests containing method names, parameters, and unique identifiers that correlate requests with responses."

### Client ID Metadata Document (CIMD)

**Glossary (p. 6):**
> "A JSON document hosted at an HTTPS URL controlled by the client that describes OAuth client metadata used for validation and registration. In MCP, CIMD is the preferred alternative to Dynamic Client Registration."

### MCP Specification (no version number cited explicitly)

The guide references "the current MCP specification" and "MCP spec" throughout without pinning a version number.

### RBAC / ABAC

**6.8 (p. 28):** Per-tool RBAC; ACLs scoped by resource, action, and authenticated identity.

**3.3 (p. 16):** ACL enforced server-side (or gateway) per tool and resource.

### Protocols NOT referenced

| Protocol | Status |
|---|---|
| SAML | Not referenced |
| SCIM | Not referenced |
| SPIFFE / SPIRE | Not referenced |
| OpenID SSF / CAEP / AuthZen | Not referenced (only OpenID Connect Discovery, listed in inventory) |
| OAuth Token Exchange (RFC 8693) | Not referenced by RFC number; OBO pattern is in the AI Agents guide |
| A2A (Agent-to-Agent) | Not referenced |
| Gartner | Not referenced |
| NIST | Not referenced by name |
| ISO | Not referenced |

---

## §8 — Gaps and Cautions the Guide Flags

**Tooling immaturity — explicit caution (How to Use This Guide, p. 5):**
> "While some commercial security products are beginning to include MCP-specific signatures, detections, and compliance checks, enterprises should still plan for custom implementations or rely on compensating controls until the broader tooling ecosystem matures."

> "Until tooling matures, enterprises should prioritize gateway-mediated deployments, strict allowlisting of MCP servers, compensating controls through endpoint detection and response (EDR) and application allowlisting on endpoints, and manual review processes for capability changes."

**Tool annotations cannot be trusted (6.8 Additional, p. 29):**
> "Do not rely on tool annotations (e.g., `readOnlyHint/destructiveHint`) or model prompts to enforce access control; treat annotations as untrusted metadata."

**Authorization server misconfiguration risk (6 Applicability, p. 26):**
> "In Streamable HTTP, clients fetch Protected Resource Metadata from `/.well-known/oauth-protected-resource` to learn the authorization server... Misconfigured metadata can redirect authentication to an attacker."

**Token passthrough explicitly forbidden (Glossary, p. 8):**
> "MCP forbids token passthrough; servers that call backend or downstream APIs should obtain separate tokens." — widely violated in practice.

**Rug pull attacks on third-party servers (Appendix A.4, p. 69):**
> "Monitor third-party MCP servers for behavioral changes, unexpected capability modifications, and anomalous access patterns." — acknowledged as an ongoing monitoring problem, not a solved one.

**Elicitation risk not fully addressed (Glossary, p. 6):**
> "Elicitation... Risks include credential harvesting, deceptive prompts, and consent manipulation. Mitigate with least-privilege access, auditable logging, and user training." — described as a risk requiring mitigations, not eliminated.

**DPoP as fallback (6.3, p. 27):**
> "where mTLS is not feasible, require sender-constrained tokens such as DPoP" — implies mTLS is not universally achievable in practice.

**Capability drift as continuous problem (4 Additional, p. 22):**
> "Validate configuration drift on a fixed cadence and after each change." — acknowledged as a continuous monitoring requirement, not a one-time setup.

---

## §9 — Single Most Important Takeaway (≤100 words)

CIS defines the gateway-mediated deployment as the "recommended default" for high-impact MCP workflows. The gateway must enforce authorization deterministically — independent of model output — with deny-by-default policy and a kill switch. A vendor reading this as a buying checklist should prioritize: centralized gateway with tool-level RBAC (read/write/irreversible tiers), token audience binding, per-request validation, and structured audit logs. Descope: stdio/local deployment patterns (endpoint territory), OAuth token issuance (IdP territory), model-layer controls (covered by AI LLM guide). Detection-only tools without inline enforcement do not satisfy CIS's gateway requirement.

---

## §10 — Open Questions for Linx PM (before May 8 Scope Commit)

**Q1 — Does P0 enforce at the tool level with the 4-tier sensitivity taxonomy?**
CIS defines tool sensitivity as: (1) read-only non-sensitive, (2) read-only sensitive, (3) write/change state, (4) irreversible/high impact. Linx's gateway should map to this taxonomy explicitly. If P0 enforces only at coarse scope level rather than per-tool action type, document the gap.

**Q2 — Does Linx's gateway satisfy "authorization enforced deterministically, not delegated to model output"?**
This is CIS's single most explicit prescriptive statement. If any part of Linx's enforcement path can be influenced by model output (e.g., model-declared intent bypasses a gateway rule), that is a documented CIS non-compliance. Confirm with eng.

**Q3 — Does the revocation flow propagate to in-flight task handles?**
CIS 6.2: "Task handles issued prior to revocation may otherwise allow result retrieval to continue after the authorization grant has been terminated." This is a specific MCP lifecycle edge case. If Linx's revocation doesn't cancel in-flight task handles, it's a named gap.

**Q4 — Should Linx name the CIS MCP guide (not AI Agents guide) as its primary compliance reference?**
The MCP guide was authored by CIS + Cequence, not Astrix. It independently concludes that gateway-mediated deployment is the recommended default — the same architecture Linx is building. Using this guide (not the Astrix-authored one) as the CIS reference is more defensible competitively. Confirm with marketing.

**Q5 — Can Linx claim "one of the first commercial products implementing CIS MCP guidance"?**
CIS explicitly states: "some commercial security products are beginning to include MCP-specific signatures, detections, and compliance checks." If Linx's product covers the gateway enforcement controls in this guide, claiming first-mover CIS-MCP alignment is both accurate and differentiating. Confirm scope coverage and approve with marketing before May 8.

---

## Appendix: MCP CVEs Mapped to CIS Safeguards (from Guide Appendix B, p. 72)

All CVEs dated 2025.

| CVE | Affected Component | Vulnerability Theme | Most Effective Safeguards |
|---|---|---|---|
| CVE-2025-47274 | ToolHive | Secrets exposure in run config files | 3.11; 3.14; 4.1; 5.5 |
| CVE-2025-49596 | MCP Inspector | RCE in inspection/testing tool | 2.5; 4.1; 12.2; 16.7 |
| CVE-2025-52573 | ios-simulator-mcp | Command injection via exec | 2.5; 2.7; 12.2; 16.2 |
| CVE-2025-53110 | MCP Filesystem server | Path/prefix validation bypass (file escape) | 2.5; 3.3; 4.1; 18.5 |
| CVE-2025-53365 | MCP Python SDK | DoS / crash in Streamable HTTP handling | 7.1; 7.2; 7.5; 16.2 |
| CVE-2025-53366 | MCP Python SDK | DoS / crash in Streamable HTTP handling | 7.1; 7.2; 7.5; 16.2 |
| CVE-2025-53372 | node-code-sandbox-mcp | Command injection / sandbox escape | 2.5; 12.2; 12.8; 16.2 |
| CVE-2025-53818 | GitHub Kanban MCP Server | Command injection via gh exec | 2.5; 2.7; 12.2; 16.2 |
| CVE-2025-53832 | Lara Translate MCP Server | Command injection via exec | 2.5; 2.7; 12.2; 16.2 |
| CVE-2025-54073 | mcp-package-docs | Command injection | 2.5; 2.7; 12.2; 16.2 |
| CVE-2025-58358 | Markdownify MCP server | Command injection via exec | 2.5; 2.7; 12.2; 16.2 |
| CVE-2025-64109 | Cursor CLI | RCE via malicious .cursor/mcp.json | 2.5; 2.7; 14.2; 16.7 |
| CVE-2025-6514 | mcp-remote | RCE via malicious MCP server | 2.5; 6.7; 12.2; 16.7 |
| CVE-2025-6515 | MCP prompt/session hijacking pattern | Prompt hijack / unsafe tool authz | 6.1; 6.8; 8.5; 14.2 |
| CVE-2025-66401 | MCP Watch scanner | Command injection in repo clone | 2.5; 2.7; 7.5; 16.2 |
| CVE-2025-66414 | MCP TypeScript SDK | DNS rebinding (not default-protected) | 4.1; 9.2; 12.2; 18.2 |
| CVE-2025-66416 | MCP Python SDK | DNS rebinding (not default-protected) | 4.1; 9.2; 12.2; 18.2 |
| CVE-2025-66580 | MCP server config injection | RCE via malicious server config on click | 2.5; 4.6; 14.2; 16.7 |
| CVE-2025-68143 | mcp-server-git | Arbitrary path/repo init | 2.5; 3.3; 4.1; 16.2 |
| CVE-2025-68144 | mcp-server-git | Arbitrary file write via symlink | 3.3; 4.1; 16.2; 18.5 |
| CVE-2025-68145 | mcp-server-git | Arbitrary file read via symlink | 3.3; 4.1; 16.2; 18.5 |
