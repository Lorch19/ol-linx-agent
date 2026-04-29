# Model Context Protocol (MCP) Companion Guide
## CIS Critical Security Controls v8.1
### April 2026

Model Context
Protocol (MCP)
Companion Guide v1.0
CIS Critical Security Controls v8.1

April 2026
Acknowledgments
The Center for Internet Security, Inc. (CIS®) would like to thank the many security experts who volunteer their time and talent to
support the CIS Critical Security Controls® (CIS Controls®) and other CIS work. CIS products represent the effort of a veritable army
of volunteers from across the industry, generously giving their time and talent in the name of a more secure online experience for
everyone.

As a nonprofit organization driven by its volunteers, we are always in the process of looking for new topics and assistance in creating
cybersecurity guidance. If you are interested in volunteering and/or have questions, comments, or have identified ways to improve this
guide, please email us at: controlsinfo@cisecurity.org.

All references to tools or other products in this guide are provided for informational purposes only, and do not represent the
endorsement by CIS of any particular company, product, or technology.

Principal Authors
Andrew Dannenberger, CIS
Shreyans Mehta, Cequence Security

Editors
Robin Regnier, CIS
Thomas Sager, CIS
Valecia Stocchetti, CIS

Contributors
Abhishek Iyer, Cybersecurity Leader
Christopher Misra, University of Massachusetts
Geoff Hancock, Founder-CISO, Cyber Bridge Solutions
Jack Zaldivar Jr., Databricks
Jonathan Sander, Astrix

This work is licensed under a Creative Commons Attribution-Non Commercial-No Derivatives 4.0 International Public License (the link can be found at
https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode).
To further clarify the Creative Commons license related to the CIS Controls® content, you are authorized to copy and redistribute the content as a
framework for use by you, within your organization and outside of your organization for non-commercial purposes only, provided that (i) appropriate
credit is given to CIS, and (ii) a link to the license is provided. Additionally, if you remix, transform, or build upon the CIS Controls, you may not distribute
the modified materials. Users of the CIS Controls framework are also required to refer to (http://www.cisecurity.org/controls/) when referring to the CIS
Controls in order to ensure that users are employing the most up-to-date guidance. Commercial use of the CIS Controls is subject to the prior approval
of the Center for Internet Security, Inc. (CIS).

Acknowledgments                                                                                                                                                     ii
Executive Summary                                                   1

Scope                                                               2

Methodology                                                         3

How to Use This Guide                                               5

Glossary                                                            6

Control 1: Inventory and Control of Enterprise Assets               9
     MCP Applicability                                              9
     Safeguards                                                     10
     Additional MCP Considerations                                  11
Control 2: Inventory and Control of Software Assets                 12
     MCP Applicability                                              12
     Safeguards                                                     13
     Additional MCP Considerations                                  14
Control 3: Data Protection                                          15
     MCP Applicability                                              15
     Safeguards                                                     15
     Additional MCP Considerations                                  18
Control 4: Secure Configuration of Enterprise Assets and Software   19
     MCP Applicability                                              19
     Safeguards                                                     20
     Additional MCP Considerations                                  22
Control 5: Account Management                                       23
     MCP Applicability                                              23
     Safeguards                                                     23
     Additional MCP Considerations                                  25
Control 6: Access Control Management                                26
     MCP Applicability                                              26
     Safeguards                                                     27
     Additional MCP Considerations                                  29
Control 7: Continuous Vulnerability Management                      30
     MCP Applicability                                              30
     Safeguards                                                     30
     Additional MCP Considerations                                  32
Control 8: Audit Log Management                                     33
     MCP Applicability                                              33
     Safeguards                                                     33
     Additional MCP Considerations                                  35

Contents                                                            iii
Control 9: Email and Web Browser Protections         36
     MCP Applicability                               36
     Safeguards                                      36
     Additional MCP Considerations                   37
Control 10: Malware Defenses                         38
     MCP Applicability                               38
     Safeguards                                      38
     Additional MCP Considerations                   39
Control 11: Data Recovery                            40
     MCP Applicability                               40
     Safeguards                                      40
     Additional MCP Considerations                   41
Control 12: Network Infrastructure Management        42
     MCP Applicability                               42
     Safeguards                                      42
     Additional MCP Considerations                   43
Control 13: Network Monitoring and Defense           44
     MCP Applicability                               44
     Safeguards                                      44
     Additional MCP Considerations                   46
Control 14: Security Awareness and Skills Training   47
     MCP Applicability                               47
     Safeguards                                      47
     Additional MCP Considerations                   49
Control 15: Service Provider Management              50
     MCP Applicability                               50
     Safeguards                                      50
     Additional MCP Considerations                   51
Control 16: Application Software Security            52
     MCP Applicability                               52
     Safeguards                                      52
     Additional MCP Considerations                   55
Control 17: Incident Response Management             56
     MCP Applicability                               56
     Safeguards                                      56
     Additional MCP Considerations                   58
Control 18: Penetration Testing                      59
     MCP Applicability                               59
     Safeguards                                      59
     Additional MCP Considerations                   60
Conclusion                                           61

Contents                                             iv
Appendix A: MCP Deployment Security Patterns      62
    A.1: Local stdio Server Security              63
    A.2: Remote Streamable HTTP Server Security   65
    A.3: Gateway-Mediated Deployment Security     67
    A.4: Third-Party MCP Server Security          69
    A.5: MCP Apps Extension Security              70
    A.6: MCP Authorization Extension Security     71
Appendix B: MCP CVEs Mapped to Best Practices     72

Appendix C: CIS Controls                          73

Appendix D: Acronyms and Abbreviations            74

Appendix E: Links and Resources                   75

Contents                                           v
Executive Summary
The Model Context Protocol (MCP) is an open standard designed to let artificial intelligence (AI) systems interact consistently with
external tools, data sources, and services. Rather than relying on proprietary or model-specific integrations, MCP provides a common,
interoperable framework so that different models, agents, and platforms can access the same set of capabilities in a controlled way.
This increases modularity, improves auditability, and makes integration behavior (discovery, invocation, and logging) more predictable
across models and platforms.

At its core, MCP defines how an AI model can request information, call tools, read structured documents, or interact with a system,
without requiring bespoke, model-specific plugin implementations for each tool or data source. For enterprises operating in sensitive or
complex environments, this creates a scalable and policy-aligned way to connect AI to internal systems while maintaining visibility and
control over what the model can access.

A defining characteristic of MCP is its focus on explicit permissions, clear interface contracts, and auditable actions. Rather than broad
or opaque access, each capability (whether retrieving data, running a command, or submitting a task) is granted individually.

More broadly, MCP helps standardize how AI agents operate in enterprise environments by abstracting away model-specific differences
and providing a predictable communication layer. This supports consistent, safe integration across products, platforms, and vendors.

This guide provides practical, actionable guidance for applying CIS Controls v8.1 to systems that implement MCP. In CIS terms, MCP
primarily expands the identity, access control, logging, and application security surfaces by formalizing how AI systems discover and
invoke privileged capabilities. MCP introduces operational and security considerations that differ significantly from traditional integration
models, requiring protections tailored to agent driven tool execution and context management. This guide interprets the CIS Controls in
the context of MCP deployments and highlights additional considerations needed to protect these systems effectively.

Executive Summary                                                                                                                            1
Scope
This guide applies to enterprises deploying MCP systems that give AI applications controlled access to external tools, pre-written
prompts, and data sources. The scope includes local Standard Input/Output (stdio) and remote Streamable Hypertext Transfer Protocol
(HTTP) deployments across enterprise-controlled and third-party servers. This includes deployments where MCP enables state-
changing operations (write actions) and access to sensitive enterprise resources, which require stronger authorization, auditing, and
release controls. If third-party MCP servers are permitted, enterprises should treat them as software and service providers requiring
onboarding, allowlisting, provenance validation, and continuous monitoring.

The guide addresses four MCP components – hosts, clients, servers, and gateways – each of which plays a distinct role in how AI
applications discover, authorize, and invoke external capabilities. Note that while gateways are not part of the MCP specifications,
they have emerged as a common part of real-world MCP infrastructure – especially where enterprises are looking to define secure
operations. Component definitions appear in the Glossary. Enterprises should inventory these components, assign ownership, and
maintain an AI and MCP bill of materials for each deployment.

This guide does not cover general Large Language Model (LLM) security topics addressed in the AI LLM Companion Guide.
Enterprises using MCP within broader agent systems should also consult the AI Agent Companion Guide for guidance on multi-step
planning, state management, and tool orchestration that operate above the MCP protocol layer. MCP controls do not replace model-
layer controls (such as data protection, prompt/output handling, and model change management); they complement them.

Protocol Overview
Model Context Protocol (MCP) specifies how AI applications connect to MCP servers to discover and invoke capabilities in a consistent
manner. The current MCP specification uses JavaScript Object Notation Remote Procedure Call (JSON-RPC) 2.0 for messaging across
supported transports. Each JSON-RPC request includes an ID that correlates the request with its response, and request identifiers
should be non-null and unique within a client session to ensure correlation and auditability. Common transports include stdio for local
integrations and Streamable HTTP for network deployments.

MCP introduces a small set of primitives relevant to security and assessment:
- Tools are executable actions exposed by a server. Tool schemas define expected parameters, but servers and gateways must
    enforce allowlisting, least privilege, and server-side parameter validation. Never rely on the client or model to enforce tool
    authorization.
- Resources are retrievable data used as contextual input. Treat resource access as a data access path governed by enterprise
    classification, RBAC/ABAC, and audit logging. Retrieved content should be logged with resource identifiers and provenance.
- Prompts are reusable templates exposed by a server. Treat prompts as content-supply-chain inputs (not trusted instructions).
    Maintain prompt provenance, change control, and integrity protections, and log prompt identifiers/versions used in executions.

Scope                                                                                                                                  2
Methodology
This guide follows the structure and intent of CIS Controls v8.1 and is designed to be read alongside the primary CIS Controls
document. It does not introduce new Controls or Safeguards. Instead, it interprets each Safeguard for MCP deployments by identifying
the MCP components affected and the operational evidence that can demonstrate the Safeguard is working. This guide assumes
authorization decisions are enforced deterministically by gateways and servers and are not delegated to model outputs.

For each Control (1 through 18), the guide provides:
- MCP Applicability: A short explanation of how the Control applies to MCP, including the main risk themes and why the Control
    matters.
- Safeguards: Guidance that adapts the CIS Safeguards to MCP-specific contexts. These are the primary actionable elements
    that demonstrate how MCP applies to the CIS Safeguards. Where appropriate, guidance is tied to MCP components (host, client,
    server, gateway), MCP primitives (tools, resources, prompts), and MCP transports (stdio and Streamable HTTP).
- Note: “No Additional MCP Guidance” does not mean the Safeguard is irrelevant — it means the Safeguard as written already
         addresses MCP contexts without requiring additional guidance.
- Additional MCP Considerations: Additional nuances, edge cases, or contextual guidance that can help enterprises tailor
    Safeguard implementations to their particular AI architectures and risk profile.

This guide focuses specifically on securing the Model Context Protocol: transport, authorization, capability exposure, and tool execution
boundaries. Additionally, the content in this guide relates to other CIS Controls companion guides including:
- MCP deployments inherit model-level security requirements from the AI LLM Companion Guide
- Agent-level controls such as orchestration, multi-step planning, and tool selection logic are addressed in the AI Agent Companion
    Guide and operate above the MCP protocol layer

Protocol-Layer Focus
This guide addresses MCP as an integration protocol rather than as a complete AI system. It covers how tools, resources, and prompts
are discovered, authorized, and invoked – not how an agent decides which tools to use or how a model processes context. Single-
step tool invocation security (allowlisting, authorization, validation, logging) is in scope even when agentic multi-step planning is out of
scope. Enterprises building agentic systems should apply this guide alongside the AI Agent Companion Guide.

Risk-Based Tailoring
Not all MCP deployments carry equal risk. Apply guidance proportionally based on:
- Deployment pattern
- Tool sensitivity, which should be categorized at a minimum as: (1) read-only non-sensitive, (2) read-only sensitive, (3) write/change
    state, or (4) irreversible/high impact (external communications, financial/legal commitments, security posture changes)
- Data classification of accessible resources
- Whether third-party servers are permitted

Methodology                                                                                                                                3
Deployment Pattern Categories
This guide uses four deployment pattern categories to provide conditional guidance. See Appendix A: MCP Deployment Security
Patterns for comprehensive security guidance specific to each pattern:
- Local stdio servers running on endpoints or developer workstations
- Remote Streamable HTTP servers accessed directly
- Gateway-mediated deployments that centralize policy enforcement
- Third-party MCP servers from registries or external providers

For high-impact workflows, gateway-mediated deployments are the recommended default to centralize identity binding, policy
enforcement, logging, and kill-switch controls. All technical guidance is grounded in the current MCP specification and supporting
security guidance referenced in Appendix E: Links and Resources.

Methodology                                                                                                                          4
How to Use This Guide
Implementation Groups (IG1, IG2, IG3) continue to guide prioritization as with all preceding CIS Controls guides. Enterprises deploying
MCP in high-impact workflows may require Safeguards from higher Implementation Groups regardless of their overall IG classification.

This guide assumes the enterprise has implemented the CIS Controls appropriate to its operating environment. Each section
corresponds to a Control, first summarizing key MCP security risk areas, then providing Safeguard-level applicability to MCP
components, primitives, and transports.

Some Safeguards reference detection, monitoring, or validation capabilities that may require custom development or emerging tooling.
While some commercial security products are beginning to include MCP-specific signatures, detections, and compliance checks,
enterprises should still plan for custom implementations or rely on compensating controls until the broader tooling ecosystem matures.
Until tooling matures, enterprises should prioritize gateway-mediated deployments, strict allowlisting of MCP servers, compensating
controls through endpoint detection and response (EDR) and application allowlisting on endpoints, and manual review processes
for capability changes. This guide provides control-level guidance for implementation and assessment purposes. Enterprises should
develop operational procedures, detection rules, and incident response playbooks based on their specific deployment patterns and risk
tolerance.

Transport and Authorization Assumptions
For Streamable HTTP deployments, this guide assumes enterprises use a centralized enterprise authorization approach aligned with
the MCP authorization model. MCP servers should delegate user authentication to the enterprise identity provider (IdP) via OAuth 2.1
rather than directly collecting or handling user credentials. Restrict token exposure to the minimum set of components required to
enforce access, and apply least privilege through scoped access and explicit approval of server capabilities. Tokens should be scoped
to specific servers and capabilities (audience-restricted), short-lived where feasible, and never logged in plaintext. Gateways and
servers should validate token audience, issuer, and expiry on every request.

For stdio deployments, security rests on local process boundaries, operating system identities, and file system permissions. Treat
local MCP servers as controlled software assets: run them under least-privilege accounts, restrict environment variable scope, control
filesystem roots, and apply application allowlisting to approved server binaries. Downstream network calls from stdio servers to backend
APIs are subject to the same transport security requirements as Streamable HTTP deployments.

Important: a model or client request is not to be treated as an authorization decision. Authorization and policy enforcement must be
implemented deterministically at the gateway and/or server layer, independent of model output.

How to Use This Guide                                                                                                                     5
Glossary
                                      A security control that permits only explicitly approved items such as servers, tools, or network destinations. MCP
 Allowlist                            deployments use allowlists to restrict which servers may be installed, which tools may be invoked, and which
                                      endpoints servers may contact.
                                      The OAuth component that authenticates users, issues access tokens, and manages consent. MCP clients obtain
 Authorization Server                 tokens from the authorization server to access protected MCP servers. Must support PKCE with `S256` and should
                                      implement Protected Resource Metadata discovery.

 Capability Negotiation               The initialization process where clients and servers exchange supported capabilities to establish session features.

                                      The protocol component within a host that establishes connections to MCP servers, handles capability negotiation,
 Client
                                      and routes messages between the host and servers.

                                      A JSON document hosted at an HTTPS URL controlled by the client that describes OAuth client metadata used for
 Client ID Metadata Document (CIMD)
                                      validation and registration. In MCP, CIMD is the preferred alternative to Dynamic Client Registration.

                                      An attack where a trusted component with elevated privileges is manipulated into performing unauthorized actions
 Confused Deputy                      on behalf of an attacker. In MCP, this commonly involves proxy servers that use static client IDs for third-party APIs,
                                      allowing the proxy to authorize third-party API access using its own credentials without per-user consent verification.

                                      An attack where an attacker-controlled domain initially resolves to an external IP, then re-resolves to `127.0.0.1`,
 DNS Rebinding
                                      allowing remote web content to send requests to localhost-bound servers.

                                      MCP capability for server-initiated, structured user input via `elicitation/create`. Risks include credential harvesting,
 Elicitation                          deceptive prompts, and consent manipulation. Mitigate with least-privilege access, auditable logging, and user training;
                                      apply the same controls as Sampling.

                                      An optional intermediary that mediates access to multiple MCP servers, providing centralized authorization, logging,
 Gateway
                                      rate limiting, and policy enforcement.

                                      The user-facing AI application that manages MCP client connections, orchestrates LLM interactions, and enforces
 Host
                                      access controls. Examples include Claude Desktop, Visual Studio Code (VS Code), and custom AI applications.

                                      A control pattern requiring explicit human approval before executing tool invocations, particularly for state-changing,
 Human-in-the-Loop (HITL)             high-risk, or sensitive operations. The MCP specification states that a human should always have the ability to deny
                                      tool invocations.

 Implementation Group (IG)            Grouped IG1, IG2, and IG3, these are a way for enterprises to prioritize the implementation of the CIS Controls.

                                      The protocol exchange where a client sends an `initialize` request declaring its capabilities and protocol version, and
 Initialization Handshake             the server responds with its own capabilities, followed by the client sending an `initialized` notification. This handshake
                                      must be completed before any other protocol messages are exchanged.
                                      JSON Remote Procedure Call, the messaging protocol used by MCP for all client-server communication. MCP uses
 JSON-RPC                             JSON-RPC 2.0 with requests containing method names, parameters, and unique identifiers that correlate requests
                                      with responses.

                                      A control or mechanism that allows rapid disabling of a model, endpoint, tool capability, agent, or entire AI subsystem in
 Kill Switch
                                      response to an incident.

 listChanged Notification             A notification sent when available tools, resources, or prompts change, triggering capability refresh.

                                      An extension to MCP that allows an MCP server to provide interactive user interface content rendered by the host
                                      application. MCP Apps introduce a browser execution context into the trust boundary, requiring isolation controls such
 MCP Apps
                                      as sandboxed rendering, restrictive content policies, and explicit user approval for permission requests. See Appendix
                                      A.5: MCP Apps Extension Security.

 MCP-Session-Id                       An HTTP header in Streamable HTTP that maintains session state across requests.

Glossary                                                                                                                                                            6
                                       An open standard protocol for connecting AI applications to external tools, data sources, and services through a
 Model Context Protocol (MCP)
                                       client-server architecture using JSON-RPC 2.0 messaging.

                                       An open standard authorization framework that lets a client application obtain limited access to protected resources
                                       without receiving the user’s credentials. OAuth defines roles, flows, and token mechanisms that enable secure
 OAuth
                                       delegated authorization. MCP’s authorization model aligns with OAuth 2.1 patterns, including mandatory PKCE
                                       with S256.

                                       A security control where servers verify the Origin header on incoming HTTP requests to prevent DNS rebinding attacks.
 Origin Validation
                                       MCP servers must reject requests with unexpected Origin values and return `HTTP 403` for invalid Origins.

                                       An OAuth extension that prevents authorization code interception attacks. MCP requires PKCE with the `S256`
 PKCE (Proof Key for Code Exchange)
                                       challenge method for all OAuth flows.

                                       A core capability type that MCP clients and servers can expose to each other. Server-side primitives include tools,
 Primitive                             resources, and prompts. Clients can also expose a sampling primitive, which allows servers to request language
                                       model completions.
                                       The input content provided to a model or agent, including instructions, questions, or data examples. In the MCP
 Prompt                                context, it also refers to a reusable template exposed by an MCP server that provides preconfigured instructions or
                                       workflows; MCP prompts are user-controlled and selected explicitly by the user.
                                       An attack where malicious instructions are embedded in content processed by an LLM to manipulate its behavior.
 Prompt Injection                      Indirect prompt injection occurs when hostile instructions arrive through retrieved resources, tool outputs, or other
                                       external content rather than direct user input.

                                       A mechanism for servers to advertise OAuth requirements at a well-known endpoint, including authorization server
 Protected Resource Metadata
                                       location and supported scopes.

                                       Data exposed by an MCP server, identified by a Uniform Resource Identifier (URI). Resources are application-
 Resource
                                       controlled, meaning the host application decides how and when to use them.

 Roots                                 Filesystem boundaries defined by clients using `file://` URIs that specify which directories servers may access.

 Rug Pull Attack                       Updating a previously benign MCP server to include malicious functionality after users have approved it.

                                       A capability allowing servers to request LLM completions through the client via `sampling/createMessage.` Enables
 Sampling
                                       server-side agent loops while keeping model access under client control.

                                       An OAuth mechanism that limits the permissions granted by an access token. MCP servers declare required scopes,
 Scope                                 and authorization servers issue tokens restricted to approved scopes. Clients should request minimal scopes
                                       necessary for intended operations.

                                       A service that exposes tools, resources, and prompts to MCP clients. Servers run locally as subprocesses using stdio
 Server
                                       or remotely over HTTP using Streamable HTTP.

 Server-Sent Events (SSE) Transport,
                                       Older HTTP transport using separate endpoints for SSE and POST. Replaced by Streamable HTTP.
 Deprecated

                                       Standard Input/Output is a local transport where the client launches the server as a subprocess and communicates via
 stdio
                                       standard input and output using newline-delimited JSON-RPC.

                                       HTTP-based transport for remote servers using a single endpoint for POST requests from client to server and optional
 Streamable HTTP
                                       GET requests for Server-Sent Events streaming.

                                       An MCP primitive for long-running operations where a request returns a task handle. Clients can query task status and
 Tasks                                 retrieve results asynchronously. Tasks can include states such as working, `input_required,` `completed,` `failed,` and
                                       `cancelled.`
                                       An externally sourced MCP server from community registries, open-source repositories, or commercial vendors. Such
 Third-party Server                    servers require additional vetting, including provenance verification, capability review, and ongoing monitoring for rug
                                       pull attacks.

                                       The cryptographic protocol that provides encrypted communication. MCP requires TLS 1.2 or later for all Streamable
 TLS (Transport Layer Security)
                                       HTTP connections to protect data in transit between clients, servers, and authorization servers.

Glossary                                                                                                                                                          7
                          Binding OAuth tokens to specific servers using the resource parameter, preventing token replay across
 Token Audience Binding
                          different servers.

                          Forwarding a token received from an MCP client to a downstream API. MCP forbids token passthrough; servers
 Token Passthrough
                          that call backend or downstream APIs should obtain separate tokens.

                          An external capability that a model or agent invokes, such as APIs, databases, execution engines, browsers, file
 Tool                     handlers, or custom actions. In the MCP context, tools are callable operations exposed by an MCP server. Tools are
                          model-controlled, meaning the LLM selects which tools to invoke based on their descriptions.

 Tool Poisoning           Embedding malicious instructions in tool names, descriptions, or parameter schemas to manipulate LLM behavior.

                          A software component that adapts an external API, service, or system into an MCP-compatible tool. Tool wrappers
 Tool Wrapper             translate between the MCP tool interface (JSON-RPC requests with declared schemas) and the underlying system’s
                          native interface. They may be internally developed or obtained from registries and package ecosystems.
                          A supply chain attack technique that uses package or server names closely resembling legitimate ones to trick
 Typosquatting            users into installing malicious components. In MCP environments, typosquatting targets server registries and
                          package ecosystems.

Glossary                                                                                                                                       8
Control 1: Inventory and Control of
Enterprise Assets
Actively manage (inventory, track, and correct) all enterprise assets (end-user devices, including portable and mobile; network devices;
non-computing/Internet of Things (IoT) devices; and servers) connected to the infrastructure physically, virtually, remotely, and those
within cloud environments, to accurately know the totality of assets that need to be monitored and protected within the enterprise. This
will also support identifying unauthorized and unmanaged assets to remove or remediate.

MCP Applicability
MCP expands the asset inventory beyond traditional endpoints to include MCP hosts, clients, servers, gateways, declared tools,
resources, prompt endpoints, internal and external MCP registries, and supporting identity and authorization components. If these
MCP components are not formally inventoried, they can become invisible dependencies that create shadow pathways into business
systems. For MCP, the effective “asset” is the capability surface (tools, resources, prompts), the identities used to access them, and the
enforcement points that authorize and log execution.

MCP-related assets can be harder to inventory using traditional methods. Challenges include:
- Teams often add servers for evaluation or development and then abandon them, creating short-lived installs.
- stdio servers may run as child processes under user or developer privileges and may not appear as managed services. Inventory
    must capture process lineage, execution user, and the local files and secrets accessible to that process context.
- Inventory must capture declared tools, resources, and prompts, as well as logging configuration, since these elements define
    effective access and represent the system’s capability exposure.
- Registries function as discovery endpoints that abstract underlying infrastructure. Inventory must capture not only the registry URL
    but also the specific server versions and metadata (publisher, SHA-256 hashes) it authorizes for the enterprise.
- MCP servers can change declared capabilities over time (new tools, resources, prompts) without obvious infrastructure changes.
    Inventory must detect capability drift, not just new hosts.

Control 1: Inventory and Control of Enterprise Assets                                                                                      9
Safeguards
CIS Control 1: Inventory and Control of Enterprise Assets
 Safeguard           Title                              Description                           IG1 IG2 IG3                     MCP Applicability
                                  Establish and maintain an accurate, detailed, and                         Maintain an enterprise inventory of MCP components
                                  up-to-date inventory of all enterprise assets with                        and a server registry as the authoritative record.
                                  the potential to store or process data, to include:                       Establish the registry and keep it current through
                                  end-user devices (including portable and mobile),                         routine reviews and updates when changes occur.
                                  network devices, non-computing/IoT devices, and                           Track all hosts, clients, servers, and gateways. Include
                                  servers. Ensure the inventory records the network                         named owner, escalation contact, and decommission
                                  address (if static), hardware address, machine name,                      planning for each component.
               Establish
                                  enterprise asset owner, department for each asset,
               and Maintain                                                                                 For each component, record the deployment type,
                                  and whether the asset has been approved to connect
               Detailed                                                                                     declared capabilities, authorization details, transport
     1.1
               Enterprise
                                  to the network. For mobile end-user devices, MDM
                                  type tools can support this process, where appropriate.
- • •         and supported protocol versions, and version. For
               Asset                                                                                        third-party servers, record the source and approval
                                  This inventory includes assets connected to the
               Inventory                                                                                    status. For each server, also record: risk tier (read-
                                  infrastructure physically, virtually, remotely, and those
                                                                                                            only vs. write vs. irreversible), containment lever
                                  within cloud environments. Additionally, it includes
                                                                                                            owner (who can disable tools, server, gateway), and
                                  assets that are regularly connected to the enterprise’s
                                                                                                            capability baseline snapshot (hash or versioned export
                                  network infrastructure, even if they are not under
                                                                                                            of tools, resources, prompts).
                                  control of the enterprise. Review and update the
                                  inventory of all enterprise assets bi-annually, or more
                                  frequently.

                                  Ensure that a process exists to address unauthorized                      Detect and remove or quarantine unauthorized MCP
                                  assets on a weekly basis. The enterprise may choose                       servers, clients, and gateways, and treat unauthorized
               Address
                                  to remove the asset from the network, deny the asset                      capability expansions (new tools, resources,
     1.2       Unauthorized
               Assets
                                  from connecting remotely to the network, or quarantine      • • •         prompts on a known server) as unauthorized assets
                                  the asset.                                                                requiring immediate review and re-approval before
                                                                                                            production use.

                                  Utilize an active discovery tool to identify assets                       Use active discovery to identify stdio MCP server
                                  connected to the enterprise’s network. Configure                          executables, JSON configuration files, and running
                                  the active discovery tool to execute daily, or more                       processes across endpoints. During initialization,
                                  frequently.                                                               capture configured capabilities such as tool schemas
                                                                                                            and resource URI patterns for security review.
               Utilize an                                                                                   Cross-reference actively discovered servers against
     1.3       Active
               Discovery Tool
- • the approved enterprise registry. Flag unknown
                                                                                                            MCP server binaries and configurations, unexpected
                                                                                                            execution paths, and any server found in the
                                                                                                            environment that lacks a corresponding, integrity-
                                                                                                            verified entry in the registry including any capability
                                                                                                            declarations that do not match the approved registry
                                                                                                            baseline.

               Use Dynamic        Use DHCP logging on all DHCP servers or Internet                          DHCP logging is not a primary inventory signal
               Host               Protocol (IP) address management tools to update                          for MCP stdio deployments; for network-based
               Configuration      the enterprise’s asset inventory. Review and use logs                     deployments, use gateway logs, service discovery
               Protocol           to update the enterprise’s asset inventory weekly, or                     inventories, and passive network monitoring to identify
               (DHCP)             more frequently.                                                          MCP endpoints.
     1.4
               Logging                                                                            • •
               to Update
               Enterprise
               Asset
               Inventory

Control 1: Inventory and Control of Enterprise Assets                                                                                                                 10
CIS Control 1: Inventory and Control of Enterprise Assets
 Safeguard           Title                              Description                         IG1 IG2 IG3                     MCP Applicability
                                  Use a passive discovery tool to identify assets                         Passive network analysis identifies MCP
                                  connected to the enterprise’s network. Review and                       communications across enterprise segments. Focus
                                  use scans to update the enterprise’s asset inventory at                 on session initialization and capability negotiation
                                  least weekly, or more frequently.                                       messages to confirm exposed server features. Monitor
                                                                                                          authentication and authorization events associated
               Use a Passive                                                                              with MCP access.
     1.5       Asset
               Discovery Tool
- Alert on unknown or unauthorized MCP endpoints and
                                                                                                          on unusual volumes or sequences of tool invocation.
                                                                                                          Alert on anomalous tool invocation sequences (new
                                                                                                          tool names, unusual call order, high-frequency
                                                                                                          bursts), and on authentication failures that indicate
                                                                                                          enumeration or replay.

Additional MCP Considerations
- Use the Enterprise MCP Registry as the authoritative, versioned server and tool catalog. This registry must maintain a complete
    change history of tool schemas, resource URI patterns, and publisher metadata so that investigators can confirm the “known-good”
    authorized state at any point in time.
- When MCP hosts support dynamic server discovery or installation, restrict who can add servers to the approved enterprise registry.
    Log first-seen server registrations and connections, and alert on any production connections to servers not found in the registry.
- Treat `listChanged` notifications as inventory signals. Unexpected changes to a server’s declared tools, resources, or prompts
    must be cross-referenced against the approved registry entry. Deviations should trigger investigation and re-validation against the
    authorized baseline.
- Default policy should be deny-by-default for newly declared capabilities until re-approved, especially in production.
- Use the `clientInfo` and `serverInfo` fields exchanged during the initialization handshake as inventory data sources. These
    fields include name and version, and may also include `description` and `websiteUrl.` Capture them at the gateway or host to
    automatically populate and validate the MCP asset inventory.
- Treat `clientInfo` and `serverInfo` as self-asserted metadata and validate against allowlisted identities, signed artifacts, and
    approved registries.
- Leverage the functional metadata within the registry to perform static inventory validation. If a server’s capability declaration (tools,
    resources, prompts) during initialization differs from its registered profile, treat the event as unauthorized asset expansion or a
    potential “Rug Pull” attack.
- Explicitly inventory the use of the Official MCP Registry (registry.modelcontextprotocol.io). Implement a “snapshot” or “mirror” policy
    to ensure that updates to external registries do not automatically modify the enterprise’s local inventory or trust boundaries without
    manual review.

Control 1: Inventory and Control of Enterprise Assets                                                                                                             11
Control 2: Inventory and Control of
Software Assets
Actively manage (inventory, track, and correct) all software (operating systems and applications) on the network so that only authorized
software is installed and can execute, and that unauthorized and unmanaged software is found and prevented from installation or
execution.

MCP Applicability
With MCP in place, software inventory becomes even more critical due to its network of software components. MCP servers expose
capabilities, MCP clients mediate communication, and AI hosts rely on software interfaces to trigger actions or retrieve data. Since
MCP encourages modular integration between AI systems and other tools, enterprises may see a rapid increase in the number of
small, specialized services. Since MCP components can bridge into sensitive systems, treat MCP servers and gateways as integration
middleware requiring higher change control, patch SLAs, and code provenance standards than typical internal services. Gateways and
policy enforcement components are security-critical software assets and must be inventoried and governed as such.

Software inventory for MCP can be hard to manage. Challenges include:
- Specification and Software Development Kit (SDK) updates can change transport and authorization behavior across environments,
    leading to version drift and compatibility issues.
- Servers and tool wrappers may come from registries or internal builds with mixed provenance signals, introducing supply-chain
    variability.
- MCP servers often pull in numerous libraries for authorization, message parsing, and integrations, which increases patch scope
    and the attack surface associated with transitive dependencies.
- Tool wrappers often embed credentials or rely on environment secrets, making software inventory inseparable from secrets
    management and runtime identity controls.
- Local stdio servers can be installed via developer workflows and bypass normal enterprise deployment pipelines, increasing the
    risk of unreviewed code execution on endpoints.

Control 2: Inventory and Control of Software Assets                                                                                   12
Safeguards
CIS Control 2: Inventory and Control of Software Assets
 Safeguard          Title                               Description                            IG1 IG2 IG3                     MCP Applicability
                                  Establish and maintain a detailed inventory of all                         Maintain an inventory of MCP software assets: server
                                  licensed software installed on enterprise assets. The                      executables, client libraries and SDKs, gateway
                                  software inventory must document the title, publisher,                     components, OAuth libraries, and JSON-RPC
                                  initial install/use date, and business purpose for                         frameworks. For each component, record package
                                  each entry; where appropriate, include the Uniform                         name and version, source registry or repository,
                                  Resource Locator (URL), app store(s), version(s),                          integrity data such as hashes or signatures, and the
                                  deployment mechanism, decommission date, and                               MCP specification version supported. Include third-
               Establish          number of licenses. Review and update the software                         party servers with source and approval status.
               and Maintain
     2.1
               a Software
                                  inventory bi-annually, or more frequently.
- • • For deployed instances, record transport type,
               Inventory                                                                                     declared capabilities, and authorization configuration.
                                                                                                             Link deployment-specific capability and configuration
                                                                                                             details to records maintained under Controls 1 and
                                                                                                             4. Maintain an SBOM/dependency manifest for MCP
                                                                                                             components, including transitive dependencies, to
                                                                                                             accelerate vulnerability response. Verify integrity at
                                                                                                             intake and again at provisioning and deployment to
                                                                                                             detect tampering.

                                  Ensure that only currently supported software is                           Use only supported MCP software. Verify active
                                  designated as authorized in the software inventory                         maintenance, vulnerability handling, and update
                                  for enterprise assets. If software is unsupported, yet                     cadence for servers, SDKs, and gateways. Migrate
                                  necessary for the fulfillment of the enterprise’s mission,                 unsupported components to supported alternatives.
               Ensure             document an exception detailing mitigating controls                        Track protocol and transport support as part of life
               Authorized         and residual risk acceptance. For any unsupported                          cycle management and ensure authorization features
     2.2       Software is
               Currently
                                  software without an exception documentation,
                                  designate as unauthorized. Review the software list
- • •         required by your deployment pattern are supported
                                                                                                             and tested.
               Supported          to verify software support at least monthly, or more
                                                                                                             Define an enterprise-supported baseline for MCP
                                  frequently.
                                                                                                             spec versions and SDK versions and block production
                                                                                                             deployments outside this baseline unless an exception
                                                                                                             is formally approved with documented compensating
                                                                                                             controls and a defined expiry date.

                                  Ensure that unauthorized software is either                                Identify and remove unauthorized MCP servers,
                                  removed from use on enterprise assets or receives                          clients, and tool wrappers that have not undergone
               Address            a documented exception. Review monthly, or more                            security review or are not in the approved software
     2.3       Unauthorized
               Software
                                  frequently.                                                  • • •         inventory. For stdio deployments, default-deny
                                                                                                             unauthorized binaries via application allowlisting and
                                                                                                             quarantine processes rather than relying solely on
                                                                                                             manual detection.

                                  Utilize software inventory tools, when possible,                           Use automated discovery to identify MCP server files,
                                  throughout the enterprise to automate the discovery                        JSON configuration files that declare servers and
                                  and documentation of installed software.                                   capabilities, and active MCP processes. Scan common
                                                                                                             installation paths and package manager records such
               Utilize                                                                                       as `npm` for TypeScript and `pip` for Python. Parse
               Automated
     2.4
               Software                                                                            • •       process command lines that indicate MCP server
                                                                                                             execution.
               Inventory Tools
                                                                                                             For Streamable HTTP deployments, detect JSON-
                                                                                                             RPC traffic patterns to MCP endpoints and associated
                                                                                                             streaming responses where applicable, and correlate
                                                                                                             observed servers to the approved MCP registry.

Control 2: Inventory and Control of Software Assets                                                                                                                    13
CIS Control 2: Inventory and Control of Software Assets
 Safeguard          Title                               Description                           IG1 IG2 IG3                      MCP Applicability
                                  Use technical controls, such as application allowlisting,                 Enforce an allowlist for MCP servers and tool wrappers
                                  to ensure that only authorized software can execute                       using versioned entries with integrity verification, deny-
                                  or be accessed. Reassess bi-annually, or more                             by-default per Control 1. Install only from enterprise
                                  frequently.                                                               approved registries or vetted artifact repositories, block
               Allowlist                                                                                    direct URL, personal registry, and local source installs
     2.5       Authorized
               Software
- •       in production, and verify signatures or hashes at intake
                                                                                                            and again at provisioning.
                                                                                                            Allowlisting must cover both the server artifact and
                                                                                                            the approved capability set; capability expansions are
                                                                                                            blocked until reviewed and promoted.

                                  Use technical controls to ensure that only authorized                     Allowlist software libraries and package dependencies
                                  software libraries, such as specific .dll, .ocx, and .so                  used by MCP components, including JSON-RPC
                                  files, are allowed to load into a system process. Block                   frameworks, OAuth libraries, transport libraries, SDKs,
               Allowlist
                                  unauthorized libraries from loading into a system                         and any native modules loaded into MCP server
     2.6       Authorized
               Libraries
                                  process. Reassess bi-annually, or more frequently.              • •       or client processes. Prefer reproducible builds and
                                                                                                            continuous integration (CI) enforcement that blocks
                                                                                                            unapproved dependency changes before artifacts are
                                                                                                            produced.

                                  Use technical controls, such as digital signatures and                    For MCP servers implemented in Python, JavaScript,
                                  version control, to ensure that only authorized scripts,                  TypeScript, or shell, enforce strict script execution
               Allowlist          such as specific .ps1 and .py files, are allowed to                       controls by allowing only pre-approved scripts and
     2.7       Authorized
               Scripts
                                  execute. Block unauthorized scripts from executing.
                                  Reassess bi-annually, or more frequently.
- dependencies. Verify integrity with cryptographic
                                                                                                            hashing or code signing. Prefer reproducible
                                                                                                            builds and CI enforcement that blocks unapproved
                                                                                                            dependency changes before artifacts are produced.

Additional MCP Considerations
- Track server and tool wrapper provenance, including package source, commit or artifact identifiers, and whether the component is
    internally built or externally sourced.
- Maintain a policy for supported SDK and specification versions, including how upgrades are tested and how deprecated transports
    or features are handled.
- Ensure SBOMs are accessible to incident response (IR) and vulnerability management teams to support rapid triage when MCP-
    related CVEs emerge.

Control 2: Inventory and Control of Software Assets                                                                                                                  14
Control 3: Data Protection
Develop processes and technical controls to identify, classify, securely handle, retain, and dispose of data.

MCP Applicability
As AI-driven workflows expand, data paths multiply and exposure risk grows. MCP introduces structured communication between AI
applications and the systems they use, so weaknesses in classification, transmission, or logging directly affect an enterprise’s data
protection posture.

MCP creates data flows across tool inputs and outputs, resource retrievals, server-initiated sampling requests `sampling/
createMessage,` prompt templates, and operational logs. It is important to apply classification and handling rules to these flows, not
only to the systems of record. Treat MCP prompts, tool inputs/outputs, sampling artifacts, and operational logs as data assets subject to
the same classification, retention, and access controls as systems of record. Treat them as part of the enterprise’s data landscape and
protect the full data life cycle across MCP: ingestion → retrieval → context assembly → tool execution → logging/caching → retention
→ disposal.

Key data protection considerations in MCP environments:
- Classify and handle MCP inputs, outputs, and logs based on the most sensitive data they may contain, including aggregated
    context.
- Control what enters model context from tools and resources, especially untrusted or externally sourced content.
- Reduce data exposure by minimizing retained context, redacting sensitive fields in logs, and restricting access to stored artifacts.
- Define and enforce redaction/tokenization rules for tool outputs and resource content before they enter model context or logs.

Safeguards
CIS Control 3: Data Protection
 Safeguard           Title                             Description                           IG1 IG2 IG3                     MCP Applicability
                                 Establish and maintain a documented data                                  Apply the enterprise data management process to
                                 management process. In the process, address data                          MCP data, including tool inputs and outputs, resource
               Establish and     sensitivity, data owner, handling of data, data retention                 payloads, prompts, logs, session data, caches, and
               Maintain a Data   limits, and disposal requirements, based on sensitivity                   sampling artifacts, based on sensitivity and retention
     3.1
               Management        and retention standards for the enterprise. Review and      • • •         requirements. Assign data owners for MCP-generated
               Process           update documentation annually, or when significant                        artifacts (prompt templates, context stores, caches,
                                 enterprise changes occur that could impact this                           sampling records) and record where each artifact class
                                 Safeguard.                                                                is stored and audited.

                                 Establish and maintain a data inventory based on the                      Inventory all MCP-reachable data sources and data
                                 enterprise’s data management process. Inventory                           categories. Record the backend system for each tool
                                 sensitive data, at a minimum. Review and update                           and the source and URI patterns for each resource.
                                 inventory annually, at a minimum, with a priority on                      Record resource subscription configurations, including
                                 sensitive data.                                                           which resources support change notifications and
               Establish and                                                                               which components receive updates.
     3.2       Maintain a Data
               Inventory
- • • Include MCP-created data stores such as context
                                                                                                           caches, task state, sampling logs, and any persisted
                                                                                                           tool outputs. Record which components receive
                                                                                                           resource subscription updates and whether each
                                                                                                           subscription is approved for the data classification
                                                                                                           involved.

Control 3: Data Protection                                                                                                                                        15
CIS Control 3: Data Protection
 Safeguard           Title                            Description                           IG1 IG2 IG3                     MCP Applicability
                                 Configure data access control lists based on a user’s                    Enforce access control server-side (and/or at the
                                 need to know. Apply data access control lists, also                      gateway) for each tool and resource using an ACL
                                 known as access permissions, to local and remote file                    scoped by resource, action, and authenticated identity.
               Configure         systems, databases, and applications.                                    For Streamable HTTP, validate identity and claims,
     3.3       Data Access
               Control Lists
- • •         including scopes and audience, and enforce the ACL
                                                                                                          so that only permitted principals can act on protected
                                                                                                          resources. For stdio, bind tool and resource access to
                                                                                                          the OS identity and restrict file roots and environment
                                                                                                          access by policy.

                                 Retain data according to the enterprise’s documented                     Set minimum and maximum retention periods for
                                 data management process. Data retention must                             MCP data caches, including tool outputs, resource
                                 include both minimum and maximum timelines.                              content, context stores, and sampling data, aligned
               Enforce Data
     3.4
               Retention                                                                    • • •         to the classification of data flowing through each
                                                                                                          server. Retention must be tiered by tool sensitivity and
                                                                                                          data classification, and enforced through automated
                                                                                                          deletion with audit evidence.

                                 Securely dispose of data as outlined in the enterprise’s                 Securely delete server caches, sensitive logs, and
                                 documented data management process. Ensure the                           temporary files. Clear OAuth tokens stored by HTTP
                                 disposal process and method are commensurate with                        servers. Remove session data such as `MCP-Session-
                                 the data sensitivity.                                                    Id` mappings. Ensure cleanup on normal shutdown
               Securely                                                                                   and on failure paths for both stdio and Streamable
     3.5       Dispose of
               Data
- • •         HTTP deployments.
                                                                                                          Clear refresh tokens and any stored client credentials
                                                                                                          where applicable. Use crash-safe deletion patterns
                                                                                                          or envelope encryption with key shredding for
                                                                                                          sensitive caches.

                                 Encrypt data on end-user devices containing sensitive                    Use full-disk encryption on endpoints that run stdio
                                 data. Example implementations can include: Windows                       servers which may access sensitive data or cache
                                 BitLocker®, Apple FileVault®, Linux® dm-crypt.                           resources. stdio servers run with user privileges and
                                                                                                          can read files and environment variables. Define
               Encrypt Data                                                                               allowed data classes for (a) tool parameters, (b) tool
     3.6       on End-User
               Devices
- • •         outputs, (c) resource payloads, and (d) prompt/context
                                                                                                          injection, and enforce these rules at the server or
                                                                                                          gateway boundary.
                                                                                                          NOTE: These Safeguards represent “Compensating
                                                                                                          Controls” for local stdio deployments where protocol-
                                                                                                          level network isolation is not possible.

                                 Establish and maintain an overall data classification                    Classify data accessed through MCP tools and
                                 scheme for the enterprise. Enterprises may use labels,                   resources, inheriting the classification of underlying
               Establish and
                                 such as “Sensitive,” “Confidential,” and “Public,” and                   databases, file systems, and APIs. Define what data
               Maintain a Data
     3.7
               Classification
                                 classify their data according to those labels. Review
                                 and update the classification scheme annually, or
- •       may appear in tool parameters, outputs, and resource
                                                                                                          payloads by classification level, and enforce these
               Scheme
                                 when significant enterprise changes occur that could                     rules at the server or gateway boundary.
                                 impact this Safeguard.

Control 3: Data Protection                                                                                                                                         16
CIS Control 3: Data Protection
 Safeguard           Title                            Description                           IG1 IG2 IG3                     MCP Applicability
                                Document data flows. Data flow documentation                              Document end-to-end data flows from tool invocations
                                includes service provider data flows and should be                        and resource retrievals through back-end systems into
                                based on the enterprise’s data management process.                        model context. Map servers to their data sources and
                                Review and update documentation annually, or when                         identify tools that can access sensitive data, noting
                                significant enterprise changes occur that could impact                    where content enters prompts. Flag high-risk sources
                                this Safeguard.                                                           and record resource annotations, including MCP
                                                                                                          metadata such as audience and priority that indicate
               Document
     3.8
               Data Flows                                                                       • •       intended consumers and handling precedence.
                                                                                                          Capture transfers outside the enterprise and align
                                                                                                          retention and deletion with policy.
                                                                                                          Document where content enters prompts and context
                                                                                                          and which controls enforce classification, redaction,
                                                                                                          and retention at each hop. Treat metadata (e.g.,
                                                                                                          audience and priority) as handling signals, not as
                                                                                                          authorization; enforce access with identity and policy.

               Encrypt Data     Encrypt data on removable media.                                          No Additional MCP Guidance
     3.9       on Removable
               Media
- •
                                Encrypt sensitive data in transit. Example                                Require TLS 1.2 or later for Streamable HTTP. Validate
                                implementations can include: Transport Layer Security                     certificates and reject weak ciphers and downgrade
                                (TLS) and Open Secure Shell (OpenSSH).                                    attempts. For stdio, protect data via OS process
                                                                                                          isolation, least-privilege execution, and endpoint
                                                                                                          encryption; treat any subsequent network calls from
               Encrypt                                                                                    the server to backend APIs as in-transit data requiring
    3.10       Sensitive Data
               in Transit
- •       TLS. Ensure back-end API calls from servers also
                                                                                                          use TLS.
                                                                                                          Gateways must terminate TLS with proper certificate
                                                                                                          management and can use mutual TLS for higher
                                                                                                          security. For high-risk deployments, use mutual
                                                                                                          TLS between gateway and server and enforce strict
                                                                                                          certificate validation.

                                Encrypt sensitive data at rest on servers, applications,                  Encrypt sensitive MCP data at rest. This includes
                                and databases. Storage-layer encryption, also known                       server caches, vector stores, file systems exposed
                                as server-side encryption, meets the minimum                              by tools and any stored OAuth tokens or session
                                requirement of this Safeguard. Additional encryption                      data for HTTP servers. Protect configuration files that
               Encrypt
                                methods may include application-layer encryption, also                    may contain authorization metadata, OAuth client
    3.11       Sensitive
               Data at Rest
                                known as client-side encryption, where access to the            • •       credentials, or capability declarations. Store OAuth
                                data storage device(s) does not permit access to the                      client secrets and API keys in a secrets manager,
                                plain-text data.                                                          not in plaintext configuration files, and restrict
                                                                                                          filesystem permissions on capability and configuration
                                                                                                          declarations.

                                Segment data processing and storage based on the                          Isolate servers that access highly sensitive data.
               Segment Data
                                sensitivity of the data. Do not process sensitive data on                 Separate third-party servers from enterprise-developed
               Processing
                                enterprise assets intended for lower sensitivity data.                    servers. Limit sampling to approved model endpoints
    3.12       and Storage
               Based on
- •       and match provider contracts to data handling needs.
                                                                                                          Consider dedicated gateways with tighter authorization
               Sensitivity
                                                                                                          for high-risk groups.

Control 3: Data Protection                                                                                                                                          17
CIS Control 3: Data Protection
 Safeguard           Title                           Description                           IG1 IG2 IG3                      MCP Applicability
                               Implement an automated tool, such as a host-based                         Where DLP tooling is available or can be extended
                               Data Loss Prevention (DLP) tool to identify all sensitive                 to inspect MCP traffic, apply DLP controls to tool
                               data stored, processed, or transmitted through                            responses and resource retrievals that enter model
                               enterprise assets, including those located onsite or at                   context. Monitor sampling requests for exposure risk.
                               a remote service provider, and update the enterprise’s                    Filter outputs to prevent leakage.
               Deploy a        data inventory.
               Data Loss                                                                                 For Streamable HTTP deployments, gateway-based
    3.13
               Prevention                                                                          • inspection is the most practical enforcement point.
               Solution                                                                                  stdio deployments may require host-level controls or
                                                                                                         manual review until MCP-aware DLP tooling matures.
                                                                                                         Default enforcement for Streamable HTTP should be
                                                                                                         at the gateway; for stdio deployments, enforce via
                                                                                                         endpoint DLP/EDR policies and restrict which servers
                                                                                                         may run locally.

                               Log sensitive data access, including modification and                     Log tool and resource access with enough metadata
                               disposal.                                                                 for audit while avoiding sensitive content. Record
                                                                                                         tool or resource identifiers, identity, server, session,
                                                                                                         timestamp and request IDs. Capture full parameters
               Log Sensitive                                                                             only under defined workflows and protect those
    3.14
               Data Access                                                                         •     records accordingly.
                                                                                                         Use two-tier logging: metadata logs by default, and
                                                                                                         tightly controlled full-content capture only for approved
                                                                                                         investigations with elevated access, short retention,
                                                                                                         and audit trails.

Additional MCP Considerations
- All MCP tool definitions, resources, and prompts contained in MCP client files, MCP registry definitions, or anywhere else must not
    contain any sensitive information. A common bad practice is for tool definitions to contain secrets (e.g., passwords, tokens, keys) or
    prompts and resources to contain proprietary information. Avoid this at all costs.
- Apply data minimization to context construction. Limit returned fields, truncate long records and avoid full document ingestion when
    excerpts meet the need.
- If sampling is enabled, restrict which servers may use it and limit sampling to approved model endpoints. Treat sampling requests
    as outbound transfers and apply the same boundary and data handling controls as other cross-boundary flows.
- Inspect sampling request metadata for abuse. Watch for unusually large prompts, repeated near-duplicate requests and requests
    from higher-risk servers. Set rate limits per server and per session and require elevated approval for requests that exceed
    thresholds.
- Apply structured output validation and redaction to tool outputs before injecting into model context to prevent accidental leakage or
    instruction injection.

Control 3: Data Protection                                                                                                                                          18
Control 4: Secure Configuration of
Enterprise Assets and Software
Establish and maintain the secure configuration of enterprise assets (end-user devices, including portable and mobile; network devices;
non-computing/IoT devices; and servers) and software (operating systems and applications).

MCP Applicability
MCP introduces new architectural layers, such as hosts, servers, gateways, and identity systems, where configuration weaknesses can
lead to significant security issues. Since these components work together, a single misconfiguration can ripple across the ecosystem,
potentially compromising entire AI-driven workflows, tool chains, or backend interactions.

Across these layers, key considerations include transport exposure, authorization behavior, and capability configuration, each of
which influences how safely the system operates. When these elements are not configured correctly, MCP can unintentionally expose
powerful tool paths or reveal sensitive data through a single interface. The MCP Registry is meant to serve as the central repository for
these configuration baselines. It should define the “intended state” of tool schemas, environment variable requirements, and resource
URI patterns, allowing for automated detection of configuration drift or unauthorized capability expansion.

Key secure configuration considerations in MCP environments include:
- stdio servers require clear process boundaries and correct message handling. For Streamable HTTP deployments, bind services
    to the minimum necessary interfaces, enforce TLS, restrict exposure behind gateways and reverse proxies, and validate request
    origin where applicable to reduce transport exposure.
- Enforce consistent Open Authorization (OAuth) configuration across servers and gateways, including discovery, Proof Key for Code
    Exchange (PKCE), scope design, and token handling, to prevent privilege expansion and ensure authorization integrity.
- Include tools, resources, and prompts in the configuration baseline, with centrally managed approved server lists, tool allowlists,
    logging rules, origin checks, and session handling.
- Maintain versioned baselines and check for drift continuously and after each change.
- Treat MCP capability configuration (tools, resources, prompts), authorization settings, and gateway policy as configuration-as-code
    with version control, review, and promotion pipelines.

Control 4: Secure Configuration of Enterprise Assets and Software                                                                         19
Safeguards
CIS Control 4: Secure Configuration of Enterprise Assets and Software
 Safeguard          Title                              Description                          IG1 IG2 IG3                     MCP Applicability
                                 Establish and maintain a documented secure                               Create versioned secure configuration baselines
                                 configuration process for enterprise assets (end-user                    for MCP servers, clients, and gateways. For stdio,
                                 devices, including portable and mobile, non-computing/                   restrict file access to declared roots, minimize process
                                 IoT devices, and servers) and software (operating                        privileges, and ensure standard output (stdout) is
                                 systems and applications). Review and update                             reserved for protocol messages and standard error
                                 documentation annually, or when significant enterprise                   (stderr) for diagnostics, and prevent sensitive data
              Establish and      changes occur that could impact this Safeguard.                          from being written to either stream without redaction
              Maintain                                                                                    controls. This process should utilize the Enterprise
     4.1      a Secure
              Configuration
- • •         MCP Registry to define the authorized schema and
                                                                                                          functional baseline for every approved server.
              Process                                                                                     For Streamable HTTP, enforce OAuth with PKCE,
                                                                                                          validate the Origin header, bind local-only servers to
                                                                                                          `127.0.0.1`, and treat `MCP-Session-Id` as a session
                                                                                                          state rather than an authorization mechanism. Do not
                                                                                                          treat session identifiers (MCP-Session-Id) as identity
                                                                                                          or authorization claims. See Appendix A for transport-
                                                                                                          specific hardening details.

                                 Establish and maintain a documented secure                               Apply secure configuration practices to network
              Establish          configuration process for network devices. Review and                    infrastructure that carries MCP traffic, including
              and Maintain       update documentation annually, or when significant                       reverse proxies, load balancers, and Domain Name
              a Secure           enterprise changes occur that could impact this                          System (DNS) infrastructure. Ensure TLS termination,
     4.2      Configuration
              Process for
                                 Safeguard.                                                 • • •         header forwarding, and session affinity configurations
                                                                                                          support Streamable HTTP requirements. Ensure
              Network                                                                                     proxy and gateway configurations preserve required
              Infrastructure                                                                              auth headers and do not introduce insecure header
                                                                                                          rewriting or caching of sensitive responses.

              Configure          Configure automatic session locking on enterprise                        No Additional MCP Guidance
              Automatic          assets after a defined period of inactivity. For general
              Session            purpose operating systems, the period must not
     4.3
              Locking on         exceed 15 minutes. For mobile end-user devices, the        • • •
              Enterprise         period must not exceed 2 minutes.
              Assets

              Implement          Implement and manage a firewall on servers, where                        Restrict inbound access to approved clients and/or
              and Manage         supported. Example implementations include a virtual                     the enterprise gateway, and enforce outbound egress
     4.4
              a Firewall         firewall, operating system firewall, or a third-party      • • •         allowlists to only required back-end systems, identity
              on Servers         firewall agent.                                                          providers, and logging destinations.

              Implement          Implement and manage a host-based firewall or port-                      Apply host firewall controls to endpoints running
              and Manage         filtering tool on end-user devices, with a default-deny                  MCP hosts and clients to restrict unexpected inbound
     4.5      a Firewall
              on End-
                                 rule that drops all traffic except those services and
                                 ports that are explicitly allowed.
- • •         listeners and limit outbound access to approved MCP
                                                                                                          servers and back-end services.
              User Devices

                                 Securely manage enterprise assets and software.                          Deploy MCP servers through controlled, repeatable
                                 Example implementations include managing                                 processes that include integrity verification and
                                 configuration through version-controlled Infrastructure-                 approval before activation. Use an enterprise MCP
                                 as-Code (IaC) and accessing administrative interfaces                    registry to manage approved and vetted servers, and
              Securely           over secure network protocols, such as Secure                            prohibit ad hoc installation of community or unvetted
              Manage             Shell (SSH) and Hypertext Transfer Protocol Secure                       servers in production environments.
     4.6      Enterprise
              Assets and
                                 (HTTPS). Do not use insecure management protocols,         • • • Apply change control to server deployments, including
                                 such as Telnet (Teletype Network) and HTTP, unless
              Software                                                                                    updates that affect capabilities, OAuth settings, or data
                                 operationally essential.
                                                                                                          source connections. Treat changes to declared tools,
                                                                                                          resources, and prompts as configuration changes
                                                                                                          requiring review, approval, and re-validation before
                                                                                                          promotion to production.

Control 4: Secure Configuration of Enterprise Assets and Software                                                                                                  20
CIS Control 4: Secure Configuration of Enterprise Assets and Software
 Safeguard          Title                             Description                          IG1 IG2 IG3                     MCP Applicability
              Manage             Manage default accounts on enterprise assets and                        No Additional MCP Guidance
              Default            software, such as root, administrator, and other pre-
              Accounts on        configured vendor accounts. Example implementations
     4.7
              Enterprise         can include: disabling default accounts or making them    • • •
              Assets and         unusable.
              Software

                                 Uninstall or disable unnecessary services on                            Expose only the tools, resources, and prompts
                                 enterprise assets and software, such as an unused file                  required as defined in the approved enterprise
                                 sharing service, web application module, or service                     MCP registry entry. Remove overly broad tools and
              Uninstall          function.                                                               limit resource URI patterns to the registry-validated
              or Disable                                                                                 baseline.
              Unnecessary
     4.8      Services on
              Enterprise
- • Do not expose unnecessary debugging tools or overly
                                                                                                   permissive resource patterns; implement required
              Assets and                                                                                 security logging centrally while minimizing sensitive
              Software                                                                                   content in logs. Reducing declared capabilities by
                                                                                                         enforcing that the tools, resources, and prompts a
                                                                                                         server exposes during initialization match its registered
                                                                                                         profile lowers attack surface.

                                 Configure trusted DNS servers on network                                Configure all assets running MCP hosts or clients to
                                 infrastructure. Example implementations include                         use enterprise-managed or trusted DNS resolvers.
                                 configuring network devices to use enterprise-                          Untrusted DNS can redirect MCP clients to malicious
                                 controlled DNS servers and/or reputable externally                      servers or substitute illegitimate authorization
              Configure          accessible DNS servers.                                                 server discovery endpoints, undermining the OAuth
              Trusted DNS                                                                                authorization chain before a connection is established.
     4.9      Servers on
              Enterprise
- • DNS integrity is a prerequisite for secure server
              Assets                                                                                     discovery, token issuance, and capability negotiation
                                                                                                         in Streamable HTTP deployments. For deployments
                                                                                                         that use registries or dynamic server discovery, treat
                                                                                                         DNS integrity as part of the discovery trust chain and
                                                                                                         monitor for unexpected resolution changes.

                                 Enforce automatic device lockout following a                            No Additional MCP Guidance
                                 predetermined threshold of local failed authentication
              Enforce
                                 attempts on portable end-user devices, where
              Automatic
                                 supported. For laptops, do not allow more than
              Device
    4.10
              Lockout on
                                 20 failed authentication attempts; for tablets and
                                 smartphones, no more than 10 failed authentication
- •
              Portable End-
                                 attempts. Example implementations include Microsoft®
              User Devices
                                 InTune Device Lock and Apple® Configuration Profile
                                 maxFailedAttempts.

              Enforce            Remotely wipe enterprise data from enterprise-owned                     No Additional MCP Guidance
              Remote Wipe        portable end-user devices when deemed appropriate
    4.11      Capability on
              Portable End-
                                 such as lost or stolen devices, or when an individual
                                 no longer supports the enterprise.
- •
              User Devices

                                 Ensure separate enterprise workspaces are used on                       No Additional MCP Guidance
              Separate
                                 mobile end-user devices, where supported. Example
              Enterprise
                                 implementations include using an Apple® Configuration
    4.12      Workspaces
              on Mobile End-
                                 Profile or Android™ Work Profile to separate enterprise            •
                                 applications and data from personal applications
              User Devices
                                 and data.

Control 4: Secure Configuration of Enterprise Assets and Software                                                                                                 21
Additional MCP Considerations
- Include a tested rollback plan for configuration changes using the enterprise MCP Registry as the versioned repository for the
    “known-good” configuration state, with special attention to changes that affect authorization, scope handling, or gateway policy.
- Validate configuration drift on a fixed cadence and after each change. Confirm deployed servers and gateways match the approved
    registry baseline for transport, authorization, and logging redaction controls.
- Prefer centralized gateways for production deployments to align with approved transport, authorization, and policy baselines
    enforced via the enterprise MCP Registry.
- Where Origin validation is applicable (e.g., browser-mediated clients), reject requests with missing or unexpected Origin values
    and enforce an allowlist; for non-browser clients, use mutual TLS, signed workload identity, or equivalent controls at the gateway.
    Enforce protocol and version negotiation per the MCP specification and reject requests that do not meet the agreed version
    requirements.
- When the Tasks capability is enabled, configure Time-to-Live (TTL) policies for task state to prevent unbounded resource
    accumulation. Ensure task state is cleaned up on session termination, and that completed or cancelled tasks are purged within
    defined retention windows.
- Align task state retention and purge windows to the enterprise data retention policy defined under Control 3.
- Use the tool and resource schemas stored in the MCP Registry as an active configuration filter at the gateway or host level. Block
    any server attempts to execute tools or provide resources that deviate from the registered configuration schema.
- Utilize the registry to maintain an “allowlist” of authorized environment variables for each server. Prevent the injection of
    unauthorized credentials or configuration overrides during server startup that are not documented in the registry.

Control 4: Secure Configuration of Enterprise Assets and Software                                                                         22
Control 5: Account Management
Use processes and tools to assign and manage authorization to credentials for user accounts, including administrator accounts, as well
as service accounts, to enterprise assets and software.

MCP Applicability
Identity management is critical in MCP, which distributes trust across hosts, servers, gateways, and downstream tools. These layers
rely on human and non-human identities and often use long-lived authorizations that, if not governed, create durable access paths to
sensitive systems. Account management must ensure identity binding so that tool execution and resource access can be attributed to a
human user or approved workload identity end-to-end. Manage OAuth grants separately from downstream tool credentials; compromise
of either can create durable access paths.

Key account management considerations in MCP environments include:
- MCP relies on human and non-human identities across the stack, including OAuth client registrations, service accounts and
    workload identities used by hosts, servers and gateways. Tool integrations also introduce downstream credentials such as API keys
    and service tokens, and these must be stored in approved secrets systems and never embedded in code.
- The authorization grant life cycle requires close control because OAuth authorizations can persist through refresh tokens and
    consented scopes. Therefore, it is important to track which identities and clients have active grants to MCP servers, and ensure
    that offboarding and rotation revoke access quickly.
- Privilege can concentrate through tools because service accounts and downstream credentials used by tools often carry broad
    permissions. Applying least privilege, separating high-impact tool permissions, and reviewing access for drift on a fixed cadence
    can all help follow the principle of least privilege.

Safeguards
CIS Control 5: Account Management
 Safeguard        Title                             Description                         IG1 IG2 IG3                      MCP Applicability
                                Establish and maintain an inventory of all accounts                   Maintain an inventory of all user and service accounts
                                managed in the enterprise. The inventory must at                      that install, operate, or run MCP servers. For
                                a minimum include user, administrator, and service                    Streamable HTTP, include service accounts tied to
             Establish and      accounts. The inventory, at a minimum, should contain                 authorization servers and resource owner accounts
             Maintain an        the person’s name, username, start/stop dates, and                    with OAuth grants. For stdio, include endpoint
    5.1
             Inventory of       department. Validate that all active accounts are       • • •         accounts that run servers.
             Accounts           authorized, on a recurring schedule at a minimum
                                                                                                      Link each identity to the MCP component it serves
                                quarterly, or more frequently.
                                                                                                      (host, client, server, gateway), the tools and resources
                                                                                                      it can access, and its risk tier (read-only vs. write vs.
                                                                                                      irreversible).

Control 5: Account Management                                                                                                                                  23
CIS Control 5: Account Management
 Safeguard        Title                              Description                        IG1 IG2 IG3                      MCP Applicability
                                Use unique passwords for all enterprise assets. Best                  Use strong, unique credentials for all MCP
                                practice implementation includes, at a minimum, an                    administrative and service identities, preferring
                                8-character password for accounts using Multi-Factor                  federated identity, workload identity, and short-lived
                                Authentication (MFA) and a 14-character password for                  credentials over static secrets where possible.
                                accounts not using MFA.
                                                                                                      Where passwordless methods cannot be implemented,
                                                                                                      all credentials (including passwords, keys, and tokens)
                                                                                                      must be rotated on a defined schedule to maintain
             Use Unique                                                                               account security.
    5.2
             Passwords                                                                  • • • For Streamable HTTP servers, this includes
                                                                                                      authorization server accounts, gateway administration
                                                                                                      accounts, and OAuth client credentials for confidential
                                                                                                      clients. Client ID Metadata Documents may be used
                                                                                                      as an alternative to pre-registration, where supported
                                                                                                      by the chosen authorization server. Service accounts
                                                                                                      accessing backend APIs through tools must use strong
                                                                                                      authentication mechanisms.

                                Delete or disable any dormant accounts after a period                 Disable user and service accounts that no longer
                                of 45 days of inactivity, where supported.                            require MCP access, and revoke OAuth access and
                                                                                                      refresh tokens for any account marked dormant. Use
                                                                                                      an inactivity threshold without MCP authentication or
                                                                                                      tool invocation to identify dormant accounts for review
             Disable                                                                                  and disabling.
    5.3      Dormant
             Accounts
- • • Identify dormant access by both authentication events
                                                                                                      and tool invocation history; revoke grants even if the
                                                                                                      user account remains active. Include role change as
                                                                                                      a revocation review trigger alongside offboarding and
                                                                                                      dormancy: a change in job function can invalidate
                                                                                                      existing OAuth grants and tool access paths without
                                                                                                      the account becoming inactive.

                                Restrict administrator privileges to dedicated                        Use dedicated accounts for all administrative activities
                                administrator accounts on enterprise assets. Conduct                  involving MCP infrastructure, including gateway
                                general computing activities, such as internet                        configuration, authorization server administration,
             Restrict           browsing, email, and productivity suite use, from the                 server registry management, and OAuth client
             Administrator      user’s primary, non-privileged account.                               registration. Administrative and operational privileges
             Privileges to                                                                            must be handled on entirely separate accounts.
    5.4
             Dedicated                                                                  • • •         Protect configuration files that define server
             Administrator                                                                            capabilities and authorization metadata to prevent
             Accounts                                                                                 unauthorized modification. Require MFA and privileged
                                                                                                      access management (PAM) controls for administrative
                                                                                                      accounts, including break-glass procedures with
                                                                                                      enhanced logging.

Control 5: Account Management                                                                                                                                   24
CIS Control 5: Account Management
 Safeguard        Title                             Description                         IG1 IG2 IG3                     MCP Applicability
                                Establish and maintain an inventory of service                        Inventory all service accounts supporting MCP
                                accounts. The inventory, at a minimum, must contain                   deployments: accounts used by server processes
                                department owner, review date, and purpose. Perform                   to access backend APIs, gateways connecting
                                service account reviews to validate that all active                   to authorization servers, automated deployment
                                accounts are authorized, on a recurring schedule at a                 processes, and server-to-server operations such as
                                minimum quarterly, or more frequently.                                sampling requests. For each account, record the
                                                                                                      business purpose, account owner or responsible
                                                                                                      department, associated components, systems
             Establish                                                                                accessed, credential rotation schedule, authorized
             and Maintain                                                                             scopes, environment (e.g., development, staging,
    5.5      an Inventory
             of Service
- •       production), the tools and resources the account
                                                                                                      is authorized to access, and the approved secrets
             Accounts                                                                                 system or location used to store credentials. Cross-
                                                                                                      environment credential reuse must be explicitly
                                                                                                      prohibited.
                                                                                                      Conduct reviews at least a quarterly cadence to
                                                                                                      verify that each account remains necessary, correctly
                                                                                                      scoped, and aligned with current operational
                                                                                                      requirements. Reduce privileges for high-impact tool
                                                                                                      accounts between reviews when scope drift is detected
                                                                                                      rather than waiting for the next scheduled cycle.

                                Centralize account management through a directory or                  Integrate Streamable HTTP deployments with
                                identity service.                                                     enterprise authorization servers. Configure OAuth
                                                                                                      flows to authenticate through enterprise identity
                                                                                                      providers. Authorization servers should use enterprise
                                                                                                      IdP and standard discovery mechanisms where
             Centralize                                                                               available. stdio deployments inherit the account
    5.6      Account
             Management
- •       management model of their host endpoints.
                                                                                                      Third-party servers accessed through gateways can
                                                                                                      use centralized authorization with Protected Resource
                                                                                                      Metadata discovery. Prefer centralized authorization
                                                                                                      via gateway or shared auth services to avoid per-
                                                                                                      server credential sprawl and inconsistent policy.

Additional MCP Considerations
- Separate identities used for tool execution from those used for administration and avoid reusing broad service accounts across
    multiple tools or servers.
- Retrieve credentials at runtime from an approved enterprise secrets manager with rotation and access auditing. For stdio
    deployments, pass a minimal environment to subprocesses so that sensitive variables are not exposed.
- Prohibit shared downstream service accounts across multiple tools or servers unless explicitly approved; shared identities defeat
    attribution and blast-radius control.

Control 5: Account Management                                                                                                                                  25
Control 6: Access Control Management
Use processes and tools to create, assign, manage, and revoke access credentials and privileges for user, administrator, and service
accounts for enterprise assets and software.

MCP Applicability
Access control in MCP environments functions as a sequence of checkpoints rather than a single gateway. Each checkpoint governs
a distinct aspect of the interaction: which servers an AI agent may contact, which tools it may invoke, and the specific operations those
tools are authorized to perform once executed. Because MCP relies on multiple interconnected components, the objective is not only
to verify who can authenticate but also to define how far an authenticated identity can act within the ecosystem. The principal security
challenges emerge at these internal boundaries.

Key access control considerations in MCP environments include:
- Governing server access, tool invocation, and resource access separately. OAuth scopes support coarse-grained restrictions,
    but high-impact tools often require additional checks in tool handlers or gateways to enforce business rules. For agent-driven
    workflows, implement tool-level access controls that restrict which tools may be invoked based on policy-defined workflow scope
    and the authenticated identity; do not rely on model- or agent-declared intent for authorization decisions, since identity providers
    typically cannot enforce this level of granularity. Model output and client requests are never authorization decisions; servers and
    gateways must enforce policy deterministically.
- A host may connect to multiple servers with different ownership and risk profiles, making it important to ensure that access to one
    server does not grant implicit access to others. Isolating third-party servers through allowlists and policy controls helps prevent
    unintended cross-access and reduces exposure to higher-risk systems.
- Tools act as delegated access paths into backend systems, so their execution identities should use least privilege. Stronger
    controls are especially necessary for tools that modify data or trigger administrative actions.
- In Streamable HTTP, clients fetch Protected Resource Metadata from `/.well-known/oauth-protected-resource` to learn the
    authorization server, then discover that server via its own well-known endpoint. Misconfigured metadata can redirect authentication
    to an attacker. Validate these endpoints and protect them from unauthorized changes.
- Elicitation must be access controlled: specify which servers may issue requests via the client, what input they may solicit, and how
    responses are handled. Because it creates a direct server-to-user channel, restrict Elicitation to approved servers and reviews
    prompt patterns to reduce credential harvesting, social engineering, and consent manipulation.
- When servers declare the Tasks capability, access control must extend to task life cycle operations. Clients should only be able to
    retrieve results, check status, or cancel tasks they created. Servers must enforce per-client task isolation and validate authorization
    on `tasks/list`, `tasks/result`, and `tasks/cancel` operations.

Control 6: Access Control Management                                                                                                       26
Safeguards
CIS Control 6: Access Control Management
 Safeguard         Title                            Description                         IG1 IG2 IG3                      MCP Applicability
                               Establish and follow a documented process, preferably                  Implement a formal, documented process for granting
                               automated, for granting access to enterprise assets                    access to MCP servers, tools, and data sources.
                               upon new hire or role change of a user.                                Authenticate the client on every request and enforce
                                                                                                      authorization that matches the formally approved
                                                                                                      grant. Deny or revoke any request outside the
                                                                                                      approved tool, resource, scope, or time window.
                                                                                                      For Streamable HTTP servers, require OAuth access
                                                                                                      tokens with PKCE; clients must include the `resource`
                                                                                                      parameter in token requests to bind each token to a
                                                                                                      specific MCP server, and servers must reject tokens
             Establish                                                                                whose audience does not match their resource
             an Access                                                                                identifier. Validate issuer, expiry, and scopes on every
    6.1
             Granting                                                                   • • •         request.
             Process                                                                                  For stdio servers, validate the server executable
                                                                                                      against an approved allowlist using integrity checks
                                                                                                      such as cryptographic hashes or path-based
                                                                                                      restrictions. For proxy servers connecting to third-party
                                                                                                      APIs, implement per-client consent verification before
                                                                                                      initiating authorization flows.
                                                                                                      To counter tool poisoning, the consent process must
                                                                                                      include ‘full tool transparency,’ displaying the complete,
                                                                                                      un-summarized tool manifest (including descriptions
                                                                                                      and parameters) to the user before a server is
                                                                                                      authorized.

                               Establish and follow a process, preferably automated,                  Require explicit deprovisioning of MCP access during
                               for revoking access to enterprise assets, through                      offboarding by revoking authorizations and disabling
                               disabling accounts immediately upon termination,                       refresh mechanisms, terminating active sessions,
                               rights revocation, or role change of a user. Disabling                 removing Client ID Metadata Documents where
                               accounts, instead of deleting accounts, may be                         used, and for stdio deployments terminating server
             Establish         necessary to preserve audit trails.                                    processes and removing server executables. Cancel
             an Access                                                                                outstanding tasks associated with the revoked identity
    6.2
             Revoking                                                                   • • •         where the server supports task cancellation, using
             Process                                                                                  `tasks/cancel` with the relevant task ID.
                                                                                                      Task handles issued prior to revocation may
                                                                                                      otherwise allow result retrieval to continue after the
                                                                                                      authorization grant has been terminated. Invalidate
                                                                                                      cached authorization decisions and terminate gateway
                                                                                                      sessions associated with revoked identities.

                               Require all externally-exposed enterprise or third-                    Require MFA for human users through the enterprise
                               party applications to enforce MFA, where supported.                    IdP on all internet-accessible MCP servers. For non-
                               Enforcing MFA through a directory service or                           interactive and gateway-to-server access, require
                               single sign-on (SSO) provider is a satisfactory                        mutual TLS between client and server and bind OAuth
                               implementation of this Safeguard.                                      tokens to the client certificate to prevent replay; where
                                                                                                      mTLS is not feasible, require sender-constrained
                                                                                                      tokens such as DPoP (Demonstration of Proof-of-
             Require MFA                                                                              Possession). Authorization servers must enforce
             for Externally-
    6.3
             Exposed                                                                    • • •         PKCE (Proof Key for Code Exchange) for authorization
                                                                                                      code flows.
             Applications
                                                                                                      For automated and agent-driven workflows that cannot
                                                                                                      use MFA, require OAuth client credentials or Personal
                                                                                                      Access Tokens stored in an enterprise secrets
                                                                                                      manager with audited access and defined rotation
                                                                                                      policies. Enforce TLS 1.2 or later with Origin validation
                                                                                                      for Streamable HTTP. stdio deployments inherit
                                                                                                      endpoint MFA requirements.

Control 6: Access Control Management                                                                                                                             27
CIS Control 6: Access Control Management
 Safeguard         Title                            Description                          IG1 IG2 IG3                      MCP Applicability
             Require MFA       Require MFA for remote network access.                                  No Additional MCP Guidance
             for Remote
    6.4
             Network                                                                     • • •
             Access

             Require           Require MFA for all administrative access accounts,                     Require MFA for administrative access to MCP
             MFA for           where supported, on all enterprise assets, whether                      infrastructure, including gateway administration,
    6.5
             Administrative    managed on-site or through a service provider.            • • •         authorization server configuration, server registry
             Access                                                                                    management, and OAuth client registration.

                               Establish and maintain an inventory of the enterprise’s                 Inventory authentication and authorization systems
                               authentication and authorization systems, including                     that support MCP, including authorization servers,
             Establish and
                               those hosted on-site or at a remote service provider.                   gateways, identity providers, and discovery endpoints
             Maintain an
                               Review and update the inventory, at a minimum,                          (e.g., Protected Resource Metadata, Authorization
             Inventory of
                               annually, or more frequently.                                           Server Metadata, and OpenID Connect Discovery).
    6.6      Authentication
             and
- •       Record OAuth endpoints, supported flows, audience
                                                                                                       binding approach, and integrations. Maintain an
             Authorization
                                                                                                       inventory of OAuth client registrations, including
             Systems
                                                                                                       owner, approved scopes, and credential rotation
                                                                                                       requirements.

                               Centralize access control for all enterprise assets                     Use gateway-based authorization to centralize policy
                               through a directory service or SSO provider, where                      enforcement, logging, and OAuth flow management.
                               supported.                                                              Consolidate authorization through gateways rather
                                                                                                       than implementing separate OAuth logic per server.
             Centralize
    6.7
             Access Control                                                                  • •       Gateways can enforce consistent Origin validation,
                                                                                                       rate limiting, and session management. Gateways
                                                                                                       should support deny-by-default policy and a rapid
                                                                                                       kill switch to disable high-risk tools or servers during
                                                                                                       investigation.

                               Define and maintain role-based access control,                          Conduct routine reviews of MCP roles, OAuth scopes,
                               through determining and documenting the access                          and actual tool usage. Revoke unused or excessive
                               rights necessary for each role within the enterprise                    permissions and adjust assignments to least privilege.
                               to successfully carry out its assigned duties. Perform                  Define and maintain roles that govern access to MCP
                               access control reviews of enterprise assets to validate                 tools and resources, and map OAuth scopes to those
                               that all privileges are authorized, on a recurring                      roles. Clients must request only the minimum scopes
             Define and        schedule at a minimum annually, or more frequently.                     required for their intended operations, using server-
             Maintain                                                                                  advertised scope information where available. Update
    6.8
             Role-Based                                                                          •     role definitions and scope mappings as tools and
             Access Control                                                                            resources change.

                                                                                                       RBAC policies should grant permissions at the level of
                                                                                                       individual tools or resources and specific action types,
                                                                                                       including read, write, and irreversible operations, rather
                                                                                                       than through broad scope assignments.

Control 6: Access Control Management                                                                                                                              28
Additional MCP Considerations
- Define a standard method for assigning tool permissions, such as grouping tools by risk tier and requiring additional controls
    for high-risk tools. To prevent scenarios where the output of one tool inadvertently triggers or manipulates the execution of a
    subsequent tool, a vulnerability known as tool interference, explicitly isolate the execution context between distinct tool calls. For
    agentic systems where one tool’s output serves as another’s input, enforce differentiated Human-in-the-Loop (HITL) requirements
    that scale the level of human oversight (e.g., mandatory approval versus simple notification) based on the cumulative risk of the
    tool sequence.
- Require formal approval before granting additional scopes; record the approval with Approver’s identity, reason, timestamp, and
    scope changes. Validate that ‘listChanged’ notifications do not introduce ‘shadow tools’ that bypass the initial scope approval.
- Where feasible, centralize authorization policy enforcement through a gateway or enterprise identity integration to prevent per-
    server configuration drift, reduce repeated consent prompts, and maintain consistent authorization outcomes.
- Confirm that downstream systems enforce their own authorization checks; do not rely on MCP scopes alone to satisfy
    business rules.
- Implement periodic capability validation to ensure servers have not expanded declared tools or resources outside approved
    baselines.
- Do not rely on tool annotations (e.g., `readOnlyHint/destructiveHint`) or model prompts to enforce access control; treat annotations
    as untrusted metadata.
- For Streamable HTTP, bind session IDs to user-specific information (e.g., a hashed user ID) at initialization. Verify this binding on
    every subsequent request to prevent session hijacking or cross-session impersonation.

Control 6: Access Control Management                                                                                                        29
Control 7: Continuous Vulnerability
Management
Develop a plan to continuously assess and track vulnerabilities on all enterprise assets within the enterprise’s infrastructure, in order
to remediate, and minimize, the window of opportunity for attackers. Monitor public and private industry sources for new threat and
vulnerability information.

MCP Applicability
Vulnerability management in MCP environments goes beyond routine patching because the protocol relies on custom servers,
shared libraries, SDKs, and third-party components that evolve at different rates. MCP deployments often depend on rapidly shifting
ecosystems, where new features, tooling, and integrations can introduce gaps long before traditional scanning tools catch them. MCP
servers, gateways, and tool wrappers are software assets requiring continuous vulnerability management.

Key vulnerability management considerations in MCP environments include:
- MCP servers and tool wrappers from registries and package ecosystems introduce third-party dependencies that expand patching
    scope and tracking requirements.
- Deployments rely on SDKs across multiple languages plus shared dependencies for JSON-RPC, transport, and authorization,
    increasing the risk of inconsistent patch levels across environments.
- Specification and SDK updates can change transport and authorization behavior. Treat protocol upgrades as security-relevant
    changes requiring validation of configuration and authorization behavior.
- Treat MCP spec and SDK upgrades and capability changes as security-relevant events requiring regression testing of
    authorization, Origin and transport controls, and tool boundaries.

Safeguards
CIS Control 7: Continuous Vulnerability Management
 Safeguard          Title                            Description                         IG1 IG2 IG3                      MCP Applicability
                                Establish and maintain a documented vulnerability                      Implement vulnerability management for MCP servers,
                                management process for enterprise assets. Review                       client libraries, OAuth implementations, JSON-RPC
              Establish and
                                and update documentation annually, or when                             frameworks, and transport layers. Be aware of security
              Maintain a
                                significant enterprise changes occur that could impact                 advisories for MCP server runtimes, client SDKs,
     7.1      Vulnerability
              Management
                                this Safeguard.                                          • • •         gateway plugins, specification updates, third-party
                                                                                                       server disclosures, and dependency vulnerabilities,
              Process
                                                                                                       and apply updates or compensating controls as issues
                                                                                                       are disclosed.

                                Establish and maintain a risk-based remediation                        Define SLAs for remediating MCP vulnerabilities by
                                strategy documented in a remediation process, with                     severity. Prioritize critical vulnerabilities in internet-
              Establish and     monthly, or more frequent, reviews.                                    accessible Streamable HTTP servers, such as Origin
              Maintain a                                                                               validation bypass, OAuth token theft, or session
     7.2
              Remediation                                                                • • •         hijacking. Remediation actions may include patching
              Process                                                                                  components, reconfiguring authorization metadata, or
                                                                                                       temporarily disabling vulnerable tools until fixes are
                                                                                                       available.

Control 7: Continuous Vulnerability Management                                                                                                                      30
CIS Control 7: Continuous Vulnerability Management
 Safeguard          Title                            Description                         IG1 IG2 IG3                     MCP Applicability
              Perform           Perform operating system updates on enterprise                         No Additional MCP Guidance
              Automated         assets through automated patch management on a
     7.3      Operating
              System Patch
                                monthly, or more frequent, basis.                        • • •
              Management

                                Perform application updates on enterprise assets                       Automate patching for MCP components including
                                through automated patch management on a monthly,                       server frameworks, OAuth libraries, JSON-RPC
                                or more frequent, basis.                                               implementations, and transport layers. Use package
                                                                                                       managers to track and update dependencies.
              Perform                                                                                  Community servers may not support automated
              Automated                                                                                updates, requiring manual monitoring of releases and
     7.4      Application
              Patch
- • •         advisories.
                                                                                                       Prioritize updates addressing token handling,
              Management                                                                               authorization metadata, session management, tool
                                                                                                       execution path security, and MCP specification
                                                                                                       compliance issues, as vulnerabilities in these areas
                                                                                                       have the highest potential for authorization bypass and
                                                                                                       privilege escalation.

                                Perform automated vulnerability scans of                               Scan endpoints running stdio servers, hosts
              Perform           internal enterprise assets on a quarterly, or more                     running Streamable HTTP servers, gateways, and
              Automated         frequent, basis. Conduct both authenticated and                        authorization servers. Identify outdated versions,
              Vulnerability     unauthenticated scans.                                                 vulnerable dependencies, and misconfigurations.
     7.5      Scans of
              Internal
- •       Standard vulnerability scanners do not cover MCP-
                                                                                                       specific settings. Add custom checks for bind address
              Enterprise                                                                               exposure, TLS configuration, Origin validation (where
              Assets                                                                                   applicable), PKCE enforcement, token audience
                                                                                                       validation, capability drift, and session handling.

                                Perform automated vulnerability scans of externally-                   Scan externally accessible MCP servers and gateways
                                exposed enterprise assets. Perform scans on a                          for OAuth misconfigurations such as missing PKCE,
                                monthly, or more frequent, basis.                                      weak scope enforcement, and token passthrough, as
              Perform                                                                                  well as TLS, Origin validation, and authorization policy
              Automated                                                                                issues. Include testing for unauthorized tool invocation,
              Vulnerability                                                                            scope escalation, and correct Protected Resource
              Scans of                                                                                 Metadata.
     7.6
              Externally-                                                                    • • While some commercial scanners are beginning to
              Exposed                                                                                  include MCP protocol compliance checks, supplement
              Enterprise                                                                               with custom checks for MCP-specific exposures until
              Assets                                                                                   tooling coverage matures. Scan third-party MCP server
                                                                                                       artifacts and container images during intake, including
                                                                                                       SBOM review and malware scanning, before approval
                                                                                                       for production use.

                                Remediate detected vulnerabilities in software through                 Remediate vulnerabilities based on risk. Critical issues
                                processes and tooling on a monthly, or more frequent,                  involving tool authorization, OAuth token handling,
              Remediate         basis, based on the remediation process.                               Origin validation, or JSON-RPC compliance require
     7.7      Detected
              Vulnerabilities
- •       immediate action. Track progress and verify fixes
                                                                                                       through rescanning. When patches are unavailable,
                                                                                                       record compensating controls such as disabling
                                                                                                       affected tools or restricting network access.

Control 7: Continuous Vulnerability Management                                                                                                                 31
Additional MCP Considerations
- Monitor advisories for MCP SDKs, common tooling, and package ecosystems, not only traditional OS and infrastructure sources.
- Treat protocol and SDK upgrades as security-relevant changes requiring testing of authorization and transport behavior.
- For third-party servers, define minimum maintenance expectations including patch timelines and a process to suspend or remove
    unmaintained servers.
- If maintenance expectations are not met, the default action is to disable or remove the server from production allowlists.

Control 7: Continuous Vulnerability Management                                                                                      32
Control 8: Audit Log Management
Collect, alert, review, and retain audit logs of events that could help detect, understand, or recover from an attack.

MCP Applicability
Unlike traditional applications, MCP deployments emit protocol-level events through the protocol’s logging utility in addition to standard
infrastructure logs, creating a richer stream of information to monitor. These structured notifications follow syslog severity levels and can
include optional logger names and JSON metadata, which produces audit signals useful for spotting misuse of tool execution, sensitive
data access, unexpected tool activity, and unusual access patterns that may be missed by infrastructure logs alone.

Key audit logging considerations in MCP environments include:
- Recording tool discovery, invocations, resource retrievals, and capability changes with sufficient context is important to identify the
    server, tool or Uniform Resource Identifier (URI) involved, the outcome, and the identity used.
- Capturing session life cycle events and using JSON-RPC request IDs to correlate requests and responses across components
    supports investigation and replay analysis.
- Operational logs can expose credentials or personally identifiable information (PII) if tool parameters are logged verbatim.
    Design MCP logging so that credentials, secrets, and PII are excluded by default through redaction and field-level controls, while
    preserving investigative value through identifiers and correlation metadata.
- Define a minimum MCP audit schema so that investigations can correlate identity → server → tool/resource → action → outcome
    across components.
- Task life cycle events, including task creation, status transitions (working, completed, failed, cancelled), result retrieval, and
    cancellation, must be logged with sufficient context to tie each event to the originating session, identity, and tool invocation. Gaps in
    task life cycle logging create blind spots where long-running operations complete or fail without a correlated audit record, hindering
    investigation of delayed or asynchronous tool behavior.

Safeguards
CIS Control 8: Audit Log Management
 Safeguard          Title                            Description                        IG1 IG2 IG3                     MCP Applicability
                                  Establish and maintain a documented audit log                       Update the enterprise audit log management process
             Establish and        management process that defines the enterprise’s                    to include MCP-specific log sources and requirements,
             Maintain an          logging requirements. At a minimum, address the                     including protocol events (tool and resource access,
    8.1      Audit Log
             Management
                                  collection, review, and retention of audit logs for
                                  enterprise assets. Review and update documentation
- • •         capability changes, OAuth and session life cycle
                                                                                                      events), correlation identifiers, and redaction rules.
             Process              annually, or when significant enterprise changes
                                  occur that could impact this Safeguard.

                                  Collect audit logs. Ensure that logging, per the                    Collect audit logs for MCP initialization, capability
                                  enterprise’s audit log management process, has been                 negotiation, tool invocation, resource retrieval,
                                  enabled across enterprise assets.                                   prompt expansion, OAuth token events, session life
                                                                                                      cycle, and JSON-RPC errors. Include user identity
                                                                                                      where available and MCP client identity. Capture the
             Collect                                                                                  strongest available identity signal per session and
    8.2
             Audit Logs                                                                 • • •         update logging as client identity mechanisms mature.
                                                                                                      Servers that declare the logging capability must emit
                                                                                                      structured notifications with severity and logger names.
                                                                                                      Log capability baselines (tools, resources, prompts) at
                                                                                                      initialization and any subsequent capability changes as
                                                                                                      high-signal audit events.

Control 8: Audit Log Management                                                                                                                               33
CIS Control 8: Audit Log Management
 Safeguard          Title                              Description                           IG1 IG2 IG3                      MCP Applicability
                                  Ensure that logging destinations maintain adequate                       Size and monitor audit log storage to support
                                  storage to comply with the enterprise’s audit log                        the enterprise audit log management process for
                                  management process.                                                      MCP components (clients, servers, gateways, and
             Ensure
                                                                                                           supporting auth infrastructure). Account for MCP
    8.3      Adequate Audit
             Log Storage
- • •         protocol event volume, including initialization and
                                                                                                           capability negotiation, tool and resource operations,
                                                                                                           OAuth and session life cycle events, and JSON-
                                                                                                           RPC errors.

                                  Standardize time synchronization. Configure at least                     Standardize time synchronization across MCP clients,
             Standardize
                                  two synchronized time sources across enterprise                          servers, gateways, and supporting authorization
    8.4      Time
             Synchronization
                                  assets, where supported.                                       • •       infrastructure to support consistent timestamps for
                                                                                                           audit log correlation and investigations.

                                  Configure detailed audit logging for enterprise assets                   Use consistent formats, timestamps, and correlation
                                  containing sensitive data. Include event source, date,                   identifiers across components. Include operation
                                  username, timestamp, source addresses, destination                       type, identity, tool or resource identifier, result status,
             Collect Detailed
    8.5
             Audit Logs
                                  addresses, and other useful elements that could
                                  assist in a forensic investigation.
- •       message ID, and error details. Where supported,
                                                                                                           configure verbosity via controlled administrative policy,
                                                                                                           and restrict who can change log levels, to prevent
                                                                                                           excessive sensitive data capture.

             Collect              Collect DNS query audit logs on enterprise assets,                       No Additional MCP Guidance
    8.6      DNS Query
             Audit Logs
                                  where appropriate and supported.                               • •
             Collect URL          Collect URL request audit logs on enterprise assets,                     Collect URL request logs for MCP tool egress and
    8.7      Request
             Audit Logs
                                  where appropriate and supported.                               • •       server and gateway outbound calls to providers and
                                                                                                           registries.

                                  Collect command-line audit logs. Example                                 Collect command-line logs on endpoints hosting stdio
             Collect
                                  implementations include collecting audit logs from                       servers and on servers executing tools that invoke
    8.8      Command-Line
             Audit Logs
                                  PowerShell®, BASH™, and remote administrative                  • •       shells and scripts.
                                  terminals.

                                  Centralize, to the extent possible, audit log collection                 Centralize logs from gateways, Streamable HTTP
                                  and retention across enterprise assets in accordance                     servers, and stdio servers where clients capture
                                  with the documented audit log management                                 `stderr.` Integrate MCP logs with enterprise SIEM
             Centralize
    8.9
             Audit Logs
                                  process. Example implementations primarily include
                                  leveraging a SIEM tool to centralize multiple log
- •       before components enter production to enable event
                                                                                                           correlation, pattern detection, and security monitoring.
                                  sources.                                                                 Correlate logs with declared capabilities to identify
                                                                                                           deviations from approved baselines.

                                  Retain audit logs across enterprise assets for a                         Define MCP-specific retention for audit logs, registry
                                  minimum of 90 days.                                                      snapshots, authorization policy versions, and server
                                                                                                           configuration history.
             Retain
    8.10
             Audit Logs                                                                          • • Retain tool and resource access, capability changes,
                                                                                                           OAuth events, sampling requests, and session life
                                                                                                           cycle data for periods aligned to incident response,
                                                                                                           audit, and data sensitivity.

                                  Conduct reviews of audit logs to detect anomalies                        Conduct regular audit log reviews for MCP interactions
                                  or abnormal events that could indicate a potential                       to detect anomalies, unauthorized activity, and
                                  threat. Conduct reviews on a weekly, or more                             deviations from approved capabilities. Verify that logs
             Conduct Audit
    8.11
             Log Reviews
                                  frequent, basis.                                               • •       contain validated data fields, appropriate severity
                                                                                                           levels, correlation identifiers, and structured JSON-
                                                                                                           RPC records. Confirm that logs exclude credentials,
                                                                                                           secrets, and PII.

Control 8: Audit Log Management                                                                                                                                       34
CIS Control 8: Audit Log Management
 Safeguard          Title                             Description                          IG1 IG2 IG3                     MCP Applicability
                                  Collect service provider logs, where supported.                        Collect logs from third-party MCP servers,
                                  Example implementations include collecting                             authorization servers, and cloud-hosted gateways.
             Collect Service      authentication and authorization events, data creation                 Logs support incident investigations and security
    8.12
             Provider Logs        and disposal events, and user management events.                 •     monitoring. Verify service agreements include retention
                                                                                                         commitments and access procedures.

Additional MCP Considerations
- Define an MCP audit event taxonomy including server identity, tool name, resource URI, outcomes, and scopes used.
- Design redaction so that logs preserve investigative value without storing sensitive parameters, and define redaction rules.
- Ensure log correlation works across client, gateway, and server components using session identifiers and request IDs.
- Log Elicitation requests and user responses, including the requesting server identity, input schema, and whether the user accepted
    or declined the prompt. Elicitation creates a direct user interaction channel that should be auditable.
- Record human approval and denial decisions for tool invocations with identity, reason, timestamp, and tool parameters to support
    audit and incident investigation.
- When Tasks are enabled, log task creation, status transitions, result retrieval, and cancellation events. Include task IDs in
    correlation data to support tracing of long-running operations across components.
- Apply two-tier logging as defined in Control 3 Safeguard 3.14.

Control 8: Audit Log Management                                                                                                                               35
Control 9: Email and Web Browser
Protections
Improve protections and detections of threats from email and web vectors, as these are opportunities for attackers to manipulate human
behavior through direct engagement.

MCP Applicability
MCP is not an email or browser protocol, but MCP-connected tools and resources can ingest untrusted web and messaging content
and place it into an LLM context window. Content from web, email, and repositories can be used for indirect prompt injection, tool
misuse, or data exfiltration through downstream actions. Treat web, email, and repository content as untrusted inputs and apply
screening, provenance tagging, and constrained summarization before injecting into context.

Key MCP-specific implications include:
- Untrusted content in context arises when tools and resources that fetch web pages, issues, documents, or messages import
    malicious instructions that influence tool selection and execution.
- Using controlled egress through an MCP gateway or proxy reduces exposure by allowing DNS and URL filtering at egress, and
    gateway policies that tag or segregate MCP traffic from general browsing further support this separation.
- Treating browser, email, and retrieval tools as higher risk helps ensure these tools receive tighter approval, monitoring, and least
    privilege controls.

Safeguards
CIS Control 9: Email and Web Browser Protections
 Safeguard         Title                             Description                           IG1 IG2 IG3                     MCP Applicability
                                Ensure only fully supported browsers and email clients                   MCP servers that wrap web browsing or email
                                are allowed to execute in the enterprise, only using the                 processing capabilities must be treated as browser
                                latest version of browsers and email clients provided                    or email clients for the purposes of this Safeguard.
                                through the vendor.                                                      Ensure the underlying libraries and runtimes used
              Ensure Use                                                                                 by these tools are actively maintained, patched, and
              of Only Fully                                                                              subject to the same support life cycle requirements as
     9.1      Supported
              Browsers and
- • •         enterprise-approved browsers and email clients.
                                                                                                         Unsupported or unpatched tool wrappers that fetch
              Email Clients                                                                              web content or process email introduce the same
                                                                                                         phishing, malicious content, and exploit risks as
                                                                                                         unpatched end-user clients, with the added risk that
                                                                                                         compromised content enters model context rather than
                                                                                                         a human-visible interface.

                                Use DNS filtering services on all end-user devices,                      Ensure all DNS queries generated by MCP tools are
                                including remote and on-premises assets, to block                        routed through an approved DNS filtering service.
              Use DNS           access to known malicious domains.                                       Tools fetching web content or resolving URIs should
     9.2      Filtering
              Services
- • •         be subject to DNS-based protection against malicious
                                                                                                         domains. Where third-party servers are permitted, use
                                                                                                         DNS policy to restrict access to approved endpoints
                                                                                                         and alert on resolution attempts for unknown domains.

Control 9: Email and Web Browser Protections                                                                                                                      36
CIS Control 9: Email and Web Browser Protections
 Safeguard         Title                              Description                         IG1 IG2 IG3                      MCP Applicability
                                Enforce and update network-based URL filters to limit                   Apply network-based URL filtering to MCP tool egress
              Maintain          an enterprise asset from connecting to potentially                      that retrieves web content or calls external HTTP(S)
              and Enforce       malicious or unapproved websites. Example                               endpoints. Use allowlists for approved categories and
     9.3
              Network-Based     implementations include category-based filtering,             • •       destinations, and block high-risk and unapproved
              URL Filters       reputation-based filtering, or through the use of block                 destinations to reduce prompt-injection, data
                                lists. Enforce filters for all enterprise assets.                       exfiltration, and command-and-control paths.

              Restrict          Restrict, either through uninstalling or disabling, any                 Restrict unauthorized browser extensions used in
              Unnecessary       unauthorized or unnecessary browser or email client                     MCP workflows (e.g., copilot extensions, admin
              or                plugins, extensions, and add-on applications.                           consoles, developer tooling) and block extensions
     9.4      Unauthorized
              Browser and
- •       that can access sensitive content or inject scripts into
                                                                                                        administrative interfaces.
              Email Client
              Extensions

                                To lower the chance of spoofed or modified emails                       Implement DMARC on enterprise email domains to
                                from valid domains, implement DMARC policy and                          reduce spoofed emails that target MCP administrators
                                verification, starting with implementing the Sender                     and users. Phishing campaigns may distribute
              Implement
     9.5
              DMARC
                                Policy Framework (SPF) and the DomainKeys
                                Identified Mail (DKIM) standards.
- •       malicious MCP server configuration files, direct
                                                                                                        recipients to install trojanized server packages, or
                                                                                                        impersonate internal teams to obtain OAuth consent
                                                                                                        approvals for unauthorized servers.

              Block             Block unnecessary file types attempting to enter the                    No Additional MCP Guidance
     9.6      Unnecessary
              File Types
                                enterprise’s email gateway.                                   • •
              Deploy and        Deploy and maintain email server anti-malware                           No Additional MCP Guidance
              Maintain          protections, such as attachment scanning and/or
     9.7      Email Server
              Anti-Malware
                                sandboxing.                                                       •
              Protections

Additional MCP Considerations
- Route high-risk retrieval through a controlled path such as a gateway, proxy, or constrained egress that enforces registry-defined
    security policies and destination allowlists, and also ensures that log retrieval metadata including server identity, destination, and
    outcome are collected for auditing.
- Prefer allowlisted destinations and an approved server catalog for tools that browse, scrape, or read untrusted content.
- Screen content before ingestion for prompt injection and sensitive data, and define rules for what may be passed, summarized,
    or excluded. Specifically check for malicious text embedded within retrieved web pages, support tickets, or repository files that
    attempts to supersede the model’s system instructions, a vulnerability known as instruction overrides, which is a specific form of
    prompt injection.
- Enforce web egress for tool-driven HTTP and log tool retrieval separately from user browsing.
- Require approval with least privilege for tools that access mailboxes, repositories, and document stores.
- Do not rely on tool annotations for security decisions (see Control 6).
- Enforce tool risk tiering and approvals using enterprise policy, not server-provided annotations; treat annotations as untrusted
    metadata.

Control 9: Email and Web Browser Protections                                                                                                                       37
Control 10: Malware Defenses
Prevent or control the installation, spread, and execution of malicious applications, code, or scripts on enterprise assets.

MCP Applicability
MCP can introduce malware risks in areas traditional systems don’t, especially when components run locally or retrieve content that
is later executed or processed by privileged runtimes. These risks are heightened when local servers and tool wrappers are installed
on endpoints, or when tool runtimes download, execute, or write files. This is particularly relevant for stdio deployments on developer
workstations or environments that allow third-party server installation. Treat MCP servers and tool wrappers as software supply-chain
risk, where provenance, signing, and intake scanning are as important as endpoint malware controls.

Key malware defense considerations in MCP environments include:
- stdio servers run as local processes under the user context, which means that a malicious package can execute with the same
    privileges as the host application and access local files and environment variables.
- Servers and tool wrappers from package ecosystems may introduce compromised dependencies into trusted development
    workflows through supply chain attacks.
- Tools that execute commands, run scripts, or handle downloads can become delivery and execution paths for malware if inputs
    and execution contexts are not controlled.

Safeguards
CIS Control 10: Malware Defenses
 Safeguard         Title                           Description                    IG1 IG2 IG3                      MCP Applicability
                               Deploy and maintain anti-malware software on all                 Deploy anti-malware on endpoints running MCP
                               enterprise assets.                                               stdio servers and scan server executables and
                                                                                                dependencies before deployment. Malicious servers
                                                                                                from registries may execute arbitrary code with user
             Deploy and                                                                         privileges, access environment variables, or read
             Maintain                                                                           sensitive files. Include MCP installation directories in
    10.1
             Anti-Malware                                                         • • •         scheduled scan paths and monitor server processes
             Software                                                                           for suspicious behavior such as unexpected file
                                                                                                access, outbound connections, or credential reads.
                                                                                                Scan MCP server artifacts and container images
                                                                                                during intake and before deployment, not only after
                                                                                                installation on endpoints.

                               Configure automatic updates for anti-malware                     Configure automatic signature and definition updates
                               signature files on all enterprise assets.                        for anti-malware on all endpoints running MCP stdio
                                                                                                servers and systems hosting Streamable HTTP
                                                                                                servers. Ensure update schedules are frequent enough
             Configure                                                                          to detect newly identified malicious MCP packages
             Automatic                                                                          from registries.
    10.2     Anti-Malware
             Signature
- • • If the enterprise maintains MCP-specific detection
                                                                                                rules or EDR prevention policies for server processes
             Updates                                                                            (see Safeguards 13.2 and 13.7), review and update
                                                                                                them on a defined cadence. Maintain EDR prevention
                                                                                                and detection rules specific to MCP server process
                                                                                                behaviors (e.g., unexpected network egress, secret
                                                                                                access, file enumeration, child process spawning).

Control 10: Malware Defenses                                                                                                                               38
CIS Control 10: Malware Defenses
 Safeguard         Title                            Description                         IG1 IG2 IG3                    MCP Applicability
             Disable           Disable autorun and autoplay auto-execute                              No Additional MCP Guidance
             Autorun and       functionality for removable media.
    10.3     Autoplay for
             Removable
- • •
             Media

             Configure         Configure anti-malware software to automatically scan                  No Additional MCP Guidance
             Automatic         removable media.
             Anti-Malware
    10.4
             Scanning of                                                                    • •
             Removable
             Media

                               Enable anti-exploitation features on enterprise assets                 Enable OS-level anti-exploitation features on systems
                               and software, where possible, such as Microsoft® Data                  running MCP servers, clients, and supporting
                               Execution Prevention (DEP), Windows® Defender                          infrastructure. Apply memory protection, control-flow
             Enable Anti-
                               Exploit Guard (WDEG), or Apple® System Integrity                       integrity, and exploit mitigations available on each
    10.5     Exploitation
             Features
                               Protection (SIP) and Gatekeeper™.                            • •       platform. On Linux, use mandatory access control
                                                                                                      frameworks, Secure Computing Mode (seccomp)
                                                                                                      profiles, and capability-dropping to constrain MCP
                                                                                                      server processes.

             Centrally         Centrally manage anti-malware software.                                No Additional MCP Guidance
             Manage
    10.6
             Anti-Malware                                                                   • •
             Software

             Use Behavior-     Use behavior-based anti-malware software.                              No Additional MCP Guidance
             Based
    10.7
             Anti-Malware                                                                   • •
             Software

Additional MCP Considerations
- Sandbox or constrain stdio servers and tool runtimes using containers, namespaces, or application sandboxes to limit filesystem,
    network, and subprocess access. Validate that sandboxed servers cannot access resources outside their declared roots or reach
    network destinations beyond those required for their function.
- Scan server packages, container images, and dependencies during intake and define a process to quarantine suspicious servers.
- For high-risk environments, require stdio servers to run in a sandboxed or containerized execution boundary by default, with explicit
    exceptions required.

Control 10: Malware Defenses                                                                                                                                  39
Control 11: Data Recovery
Establish and maintain data recovery practices sufficient to restore in-scope enterprise assets to a pre-incident and trusted state.

MCP Applicability
MCP recovery planning involves restoring more than just systems; it also requires re-establishing trust in the authorization and
capability configuration that supports them. After an incident, bringing a server back from backup may not be enough if tokens,
registrations, or tool exposures were affected during the compromise. Recovery must include re-validation of capability baselines,
authorization bindings, and logging controls before returning MCP services to production.

Key data recovery considerations in MCP environments include:
- Inability to revoke or invalidate tokens, disable refresh mechanisms, rotate client secrets where applicable, and remove or re-issue
    authorizations for servers and gateways can allow continued access after a compromise.
- Failure to restore servers, gateways, and supporting configuration from known-good sources, including approved server lists,
    tool allowlists, authorization and gateway policy versions, and registry snapshots, can result in reintroducing compromised or
    unauthorized components back into the environment.
- Failure to terminate active sessions, confirm that capability exposure matches approved baselines, and validate that logging and
    monitoring remain intact can allow unauthorized activity to persist and limit follow-on investigation.

Safeguards
CIS Control 11: Data Recovery
 Safeguard         Title                             Description                          IG1 IG2 IG3                     MCP Applicability
                                Establish and maintain a documented data recovery                       Extend the enterprise data recovery process to
                                process that includes detailed backup procedures.                       include MCP-specific assets: server and gateway
                                In the process, address the scope of data recovery                      configurations, capability manifests (tools, resources,
              Establish and     activities, recovery prioritization, and the security                   prompts), authorization policy versions, registry
              Maintain a Data   of backup data. Review and update documentation                         snapshots, and identity and OAuth configurations.
    11.1
              Recovery          annually, or when significant enterprise changes occur    • • • Define recovery sequencing that restores identity and
              Process           that could impact this Safeguard.
                                                                                                        policy enforcement layers (IdP, authorization server,
                                                                                                        and gateway) before restoring tool execution servers,
                                                                                                        ensuring authorization controls are fully operational
                                                                                                        before any tool becomes accessible.

                                Perform automated backups of in-scope enterprise                        Back up MCP server configurations, authorization
                                assets. Run backups weekly, or more frequently,                         policies, tool definitions and schemas, resource
                                based on the sensitivity of the data.                                   URI registries, prompt templates, and OAuth client
              Perform                                                                                   registrations. Include gateway policies and any
    11.2      Automated
              Backups
- • •         required session state so that identity, trust, and
                                                                                                        integration boundaries can be fully restored. Backups
                                                                                                        must be integrity-verified (hash or signature) and
                                                                                                        paired with reproducible rebuild steps for servers and
                                                                                                        gateways.

                                Protect recovery data with equivalent controls to the                   Protect all MCP recovery data, including backups
                                original data. Reference encryption or data separation,                 of MCP server configurations, capability manifests,
              Protect           based on requirements.                                                  authorization policies, tool schemas, registries, and
    11.3
              Recovery Data                                                               • • •         identity integrations, using strong access controls
                                                                                                        and encryption to prevent unauthorized access or
                                                                                                        tampering.

Control 11: Data Recovery                                                                                                                                         40
CIS Control 11: Data Recovery
 Safeguard         Title                           Description                          IG1 IG2 IG3                      MCP Applicability
                              Establish and maintain an isolated instance of recovery                 Maintain isolated backup copies of MCP
              Establish       data. Example implementations include, version                          configurations, authorization policies, and registry state
              and Maintain    controlling backup destinations through offline, cloud,                 in locations not directly accessible from production
    11.4      an Isolated
              Instance of
                              or off-site systems or services.                          • • •         MCP infrastructure. Store these backups in securely
                                                                                                      managed, versioned, and integrity-verified locations to
              Recovery Data                                                                           ensure the MCP environment can be accurately and
                                                                                                      safely restored after an incident.

                              Test backup recovery quarterly, or more frequently, for                 Establish recovery time objectives (RTOs) for
                              a sampling of in-scope enterprise assets.                               MCP infrastructure. Critical services require rapid
                                                                                                      restoration.
                                                                                                      Test recovery procedures on at least a quarterly
                                                                                                      cadence for critical MCP infrastructure, including full
                                                                                                      rebuild from known-good sources and verification
                                                                                                      that capability negotiation after restore matches
              Test Data
    11.5
              Recovery                                                                      • •       the approved baseline. Test backup procedures for
                                                                                                      servers, gateways, authorization configurations, and
                                                                                                      session state. Recovery must account for transport
                                                                                                      differences between stdio and Streamable HTTP.
                                                                                                      Verify restored servers complete initialization with
                                                                                                      correct capability negotiation. Include tests for token
                                                                                                      revocation, refresh-token invalidation, and gateway
                                                                                                      session termination as part of recovery exercises.

Additional MCP Considerations
- Maintain an incident recovery runbook including revoking authorizations, rotating credentials, disabling servers, and restoring
    capability baselines.
- Ensure servers and gateways can be rebuilt from known-good sources with reproducible build steps and integrity checks.
- After restore, default to disabling high-risk tools and validate tool exposure, logging, and access control settings before returning
    services to production, re-enabling high-risk tools only once baselines, authorization, and monitoring are confirmed correct.

Control 11: Data Recovery                                                                                                                                       41
Control 12: Network Infrastructure
Management
Establish, implement, and actively manage (track, report, correct) network devices, in order to prevent attackers from exploiting
vulnerable network services and access points.

MCP Applicability
MCP creates explicit connections between an MCP host and one or more MCP servers. Servers may run locally via stdio or remotely
over HTTP transports, which changes how traffic flows through the environment. Network controls limit exposure of MCP services and
tightly define which downstream resources tools are permitted to reach. Treat tool egress as controlled network access: default-deny
outbound connectivity from tool runtimes except to required destinations.

Key network infrastructure considerations in MCP environments include:
- If HTTP servers and gateways are not segmented, placed behind a reverse proxy, and protected with strong TLS and access
    controls, then services are exposed to unauthorized access and interception.
- If tool execution can initiate connections to internal or external destinations without segmentation and gateway-mediated egress
    allowlisting, servers and runtimes may reach services beyond those required for their function.
- If endpoints run localhost HTTP helper services without DNS rebinding protections, Origin validation, and authentication, DNS
    rebinding risk increases and unintended inbound paths to localhost-bound services may be created. Pure stdio transports are not
    affected, but any HTTP listener is.

Safeguards
CIS Control 12: Network Infrastructure Management
 Safeguard          Title                              Description                        IG1 IG2 IG3                      MCP Applicability
                                  Ensure network infrastructure is kept up-to-date.                     Maintain network infrastructure supporting MCP
                                  Example implementations include running the latest                    Streamable HTTP servers and gateways at current,
                                  stable release of software and/or using currently                     vendor-supported versions. Ensure reverse
              Ensure Network
                                  supported network as a service (NaaS) offerings.                      proxies, load balancers, and TLS termination points
    12.1      Infrastructure is
              Up-to-Date
                                  Review software versions monthly, or more               • • •         support session management headers and OAuth
                                  frequently, to verify software support.                               authorization flows. Migrate legacy SSE servers
                                                                                                        to Streamable HTTP and replace components that
                                                                                                        cannot meet current transport requirements.

                                  Design and maintain a secure network architecture.                    Place servers and gateways in dedicated segments
                                  A secure network architecture must address                            protected by firewall rules. Isolate third-party servers
                                  segmentation, least privilege, and availability, at a                 from enterprise-developed servers. Where Origin
              Establish and       minimum. Example implementations may include                          validation is applicable (e.g., browser-mediated
              Maintain a
    12.2
              Secure Network
                                  documentation, policy, and design components.
- •       clients), enforce strict Origin allowlists; for non-browser
                                                                                                        clients, enforce client identity using gateway controls,
              Architecture                                                                              mTLS, or signed workload identity.
                                                                                                        Restrict local-only servers to `127.0.0.1`. Record
                                                                                                        network paths for OAuth authorization flows.

Control 12: Network Infrastructure Management                                                                                                                     42
CIS Control 12: Network Infrastructure Management
 Safeguard          Title                             Description                       IG1 IG2 IG3                     MCP Applicability
                                 Securely manage network infrastructure. Example                      Manage network infrastructure supporting MCP
              Securely           implementations include version-controlled                           through change control, backups, and access
    12.3      Manage Network
              Infrastructure
                                 Infrastructure-as-Code (IaC), and the use of secure
                                 network protocols, such as SSH and HTTPS.
- •       restrictions. Record paths between clients, gateways,
                                                                                                      servers, authorization servers, and backends, including
                                                                                                      endpoint URLs and OAuth flow requirements.

                                 Establish and maintain architecture diagram(s) and/                  Maintain diagrams depicting MCP connectivity, data
                                 or other network system documentation. Review and                    flows, and trust boundaries. Include stdio subprocess
              Establish
                                 update documentation annually, or when significant                   communication, Streamable HTTP endpoints,
              and Maintain
    12.4
              Architecture
                                 enterprise changes occur that could impact this
                                 Safeguard.
- •       gateways, authorization servers, and backend
                                                                                                      systems. Describe session management, OAuth
              Diagram(s)
                                                                                                      discovery mechanisms, and how capability negotiation
                                                                                                      influences network interactions.

              Centralize         Centralize network AAA.                                              No Additional MCP Guidance
              Network
              Authentication,
    12.5
              Authorization,                                                                • •
              and
              Auditing (AAA)

              Use of Secure      Adopt secure network management protocols (e.g.,                     No Additional MCP Guidance
              Network            802.1X) and secure communication protocols (e.g.,
              Management         Wi-Fi Protected Access 2 (WPA2) Enterprise or more
    12.6
              and                secure alternatives).                                      • •
              Communication
              Protocols

              Ensure Remote      Require users to authenticate to enterprise-managed                  No Additional MCP Guidance
              Devices Utilize    VPN and authentication services prior to accessing
              a VPN and are      enterprise resources on end-user devices.
    12.7      Connecting to
              an Enterprise’s
- •
              AAA
              Infrastructure

                                 Establish and maintain dedicated computing                           Use dedicated workstations for administration of MCP
                                 resources, either physically or logically separated,                 gateways, authorization servers, and server registries.
              Establish
                                 for all administrative tasks or tasks requiring                      These functions collectively control which tools and
              and Maintain
                                 administrative access. The computing resources                       capabilities are available to all users and agents
              Dedicated
                                 should be segmented from the enterprise’s primary                    in a deployment, making them high-value targets.
              Computing
    12.8
              Resources
                                 network and not be allowed internet access.                    •     Compromise of an administrative workstation through
                                                                                                      credential theft, phishing, or a browser exploit on a
              for All
                                                                                                      general-purpose device can cascade into full gateway
              Administrative
                                                                                                      policy compromise. Administrative workstations used
              Work
                                                                                                      for these functions should not be used for email,
                                                                                                      browsing, or development work.

Additional MCP Considerations
- Apply controlled egress including allowlists for third-party servers and registries.
- Where endpoints run MCP processes, ensure controls mitigate DNS rebinding and unauthorized localhost access.
- Define how unapproved servers are blocked and define isolation requirements for approved exceptions.
- Restrict registry access and artifact downloads (third-party servers) through controlled egress with allowlists and logging.

Control 12: Network Infrastructure Management                                                                                                               43
Control 13: Network Monitoring
and Defense
Operate processes and tooling to establish and maintain comprehensive network monitoring and defense against security threats
across the enterprise’s network infrastructure and user base.

MCP Applicability
Effective MCP monitoring emphasizes behavioral and capability signals rather than raw network or system data. MCP generates
signals that can reveal unusual behavior, especially when tools interact with sensitive systems or trigger high-impact actions. These
signals offer valuable insight into whether activity aligns with expected workflows or suggests misuse. Treat capability drift and unusual
tool invocation sequences as high-signal indicators of compromise or misuse.

Key monitoring considerations in MCP environments include:
- Failure to detect anomalous tool discovery and invocation, repeated call failures, risky tool sequences, or unexpected capability or
    tool list changes can allow activity that diverges from expected workflows to go unnoticed.
- Failure to monitor resource retrieval patterns and tool outputs for unexpected volume, unusual endpoints, or sensitive data access
    outside normal roles or time windows can allow misuse or abnormal activity to go undetected.
- Insufficient monitoring for OAuth events such as new grants, unusual scope requests, and session life cycle indicators can create
    opportunities for persistence, replay, or misuse across servers and gateways.
- Lack of correlation between network flow data and MCP audit events can make it difficult for investigations to tie outbound
    connections and downstream system access to specific tool invocations and identities.

Safeguards
CIS Control 13: Network Monitoring and Defense
 Safeguard         Title                             Description                          IG1 IG2 IG3                     MCP Applicability
                                Centralize security event alerting across enterprise                    Centralize MCP security events from hosts, servers,
                                assets for log correlation and analysis. Best practice                  gateways, and authorization servers. Aggregate tool
              Centralize
                                implementation requires the use of a SIEM, which                        invocations, capability changes, OAuth events, and
    13.1      Security Event
              Alerting
                                includes vendor-defined event correlation alerts. A log       • •       session life cycle data to enable correlation across
                                analytics platform configured with security-relevant                    components.
                                correlation alerts also satisfies this Safeguard.

                                Deploy a host-based intrusion detection solution on                     Use host-based detection to identify MCP abuse on
                                enterprise assets, where appropriate and/or supported.                  endpoints that run stdio servers. Alert on anomalies
              Deploy a                                                                                  such as unauthorized server processes, capability
              Host-Based                                                                                changes, unusual file access patterns, and credential
    13.2      Intrusion
              Detection
- •       reads. While some commercial HIDS (Host-based
                                                                                                        Intrusion Detection System) products are beginning
              Solution                                                                                  to include MCP-specific signatures, supplement with
                                                                                                        custom rules to ensure adequate coverage until the
                                                                                                        tooling ecosystem matures.

Control 13: Network Monitoring and Defense                                                                                                                      44
CIS Control 13: Network Monitoring and Defense
 Safeguard         Title                              Description                          IG1 IG2 IG3                      MCP Applicability
                                Deploy a network intrusion detection solution on                         Deploy network-based detection to identify traffic
                                enterprise assets, where appropriate. Example                            anomalies affecting MCP infrastructure. Not all
              Deploy a          implementations include the use of a Network Intrusion                   commercial products include MCP-specific signatures;
              Network           Detection System (NIDS) or equivalent cloud service                      develop custom rules to monitor for connection rate
    13.3      Intrusion
              Detection
                                provider (CSP) service.
- •       spikes, traffic to unauthorized destinations, and
                                                                                                         unencrypted traffic where TLS is required.
              Solution                                                                                   Content-based detection of MCP protocol
                                                                                                         semantics requires application-layer inspection (see
                                                                                                         Safeguard 13.10).

                                Perform traffic filtering between network segments,                      Enforce traffic filtering between MCP network
                                where appropriate.                                                       segments: clients to gateways, gateways to MCP
                                                                                                         servers, and MCP servers to backend systems
              Perform Traffic
                                                                                                         accessed by tools. Without filtering between these
              Filtering
                                                                                                         segments, a compromised MCP server has a network
    13.4      Between
              Network
- •       path to every backend system its tools connect to,
                                                                                                         defeating the containment purpose of the gateway
              Segments
                                                                                                         architecture. Filtering rules should permit only the
                                                                                                         specific flows required for each deployment pattern
                                                                                                         and deny all others by default.

                                Manage access control for assets remotely connecting                     No Additional MCP Guidance
                                to enterprise resources. Determine amount of access
              Manage
                                to enterprise resources based on: up-to-date anti-
              Access
    13.5
              Control for
                                malware software installed, configuration compliance
                                with the enterprise’s secure configuration process, and
- •
              Remote Assets
                                ensuring the operating system and applications are
                                up-to-date.

                                Collect network traffic flow logs and/or network traffic                 Collect and retain network traffic flow logs for all
                                to review and alert upon from network devices.                           MCP servers and tool hosts to identify unexpected
              Collect
                                                                                                         communication paths, validate egress and
    13.6      Network Traffic
              Flow Logs
- •       segmentation policies, and correlate anomalies
                                                                                                         detected at the application layer with underlying traffic
                                                                                                         behaviors.

                                Deploy a host-based intrusion prevention solution on                     Deploy endpoint protection capable of blocking
              Deploy a          enterprise assets, where appropriate and/or supported.                   unauthorized MCP server execution and suspicious
              Host-Based        Example implementations include use of an Endpoint                       process behavior. Not all commercial EDR products
    13.7      Intrusion
              Prevention
                                Detection and Response (EDR) client or host-based
                                IPS agent.
- include MCP-specific detections. Configure application
                                                                                                         control policies to prevent unapproved servers from
              Solution                                                                                   launching and to block access to credential files
                                                                                                         outside approved workflows.

                                Deploy a network intrusion prevention solution, where                    Deploy network-based intrusion prevention to actively
                                appropriate. Example implementations include the use                     block detected MCP traffic anomalies. Apply detection
                                of a Network Intrusion Prevention System (NIPS) or                       rules from Safeguard 13.3 in prevention mode
              Deploy a          equivalent CSP service.                                                  where confidence levels support inline blocking. For
              Network                                                                                    Streamable HTTP traffic, gateway-based enforcement
    13.8      Intrusion
              Prevention
- provides the most practical inline prevention point.
                                                                                                         Not all commercial NIPS products include MCP-
              Solution                                                                                   specific signatures; development of custom prevention
                                                                                                         rules and reliance on application-layer controls (see
                                                                                                         Safeguard 13.10) for protocol-level enforcement may
                                                                                                         be needed.

                             Deploy port-level access control. Port-level access                         No Additional MCP Guidance
              Deploy
                             control utilizes 802.1x, or similar network access
    13.9      Port-Level
              Access Control
                             control protocols, such as certificates, and may                      •
                             incorporate user and/or device authentication.

Control 13: Network Monitoring and Defense                                                                                                                           45
CIS Control 13: Network Monitoring and Defense
 Safeguard         Title                              Description                        IG1 IG2 IG3                     MCP Applicability
                                Perform application layer filtering. Example                           Deploy application-aware gateway controls or a Web
                                implementations include a filtering proxy, application                 Application Firewall (WAF) capable of parsing JSON-
                                layer firewall, or gateway.                                            RPC traffic to enforce protocol compliance, OAuth
              Perform
                                                                                                       validation, and tool-invocation policies. Define custom
   13.10      Application
              Layer Filtering
- detections for injection attempts, unauthorized tool
                                                                                                       calls, confused-deputy patterns, and sampling abuse.
                                                                                                       Network IDS cannot inspect encrypted MCP traffic; rely
                                                                                                       on gateway telemetry for application-layer security.

                                Tune security event alerting thresholds monthly, or                    Tune alerting thresholds based on baseline MCP
              Tune Security     more frequently.                                                       behavior by environment and role. Adjust sensitivity
   13.11      Event Alerting
              Thresholds
- for tool invocation rates, capability change frequency,
                                                                                                       and resource access patterns to reduce false positives
                                                                                                       while detecting anomalies.

Additional MCP Considerations
- Establish detection use cases for sudden invocation increases, repeated failures, unexpected destinations, sensitive resource
    access, enumeration attempts, bulk export, cross-tenant access, and activity outside normal time windows.
- Baseline normal behavior by environment and role to distinguish expected automation from suspicious activity. Where native tools
    do not provide sufficient application-layer visibility, enterprises may require gateway telemetry, custom detections, or specialized
    API and agent security tooling to achieve adequate coverage.
- Correlate audit events with network telemetry to tie connections and data movement to specific servers, tools, identities, and
    sessions.
- Monitor `notifications/cancelled` and `notifications/progress` messages for anomalies. High cancellation rates from a single server
    may indicate unstable or manipulated tool behavior. Progress notifications with unusual metadata or frequencies can signal abuse
    of long-running operations.

Control 13: Network Monitoring and Defense                                                                                                                   46
Control 14: Security Awareness and
Skills Training
Establish and maintain a security awareness program to influence behavior among the workforce to be security conscious and properly
skilled to reduce cybersecurity risks to the enterprise.

MCP Applicability
Training for MCP environments goes beyond general awareness because staff make decisions that affect how MCP tools, servers,
and authorization paths are introduced and used. Training should prepare people to approve servers, enable tools, grant authorization,
recognize manipulation, and follow approval and reporting processes. Completion of role-specific MCP training should be required
before granting privileges to approve servers, manage registries, or administer gateways.

Key training considerations in MCP environments include:
- Lack of user and administrator training to verify server sources, follow approval workflows for new servers and tools, and avoid
    installing or enabling untrusted third-party servers can increase the likelihood of introducing unsafe or unauthorized components.
- When staff are not trained to recognize indirect prompt injection and content-based manipulation from web pages, tickets,
    documents, or email content, tool use becomes more susceptible to improper influence.
- Gaps in staff training to recognize unusual authorization prompts or scope requests, and to report suspicious tool behavior through
    established channels, can allow misuse or compromise to go unnoticed.

Safeguards
CIS Control 14: Security Awareness and Skills Training
 Safeguard          Title                              Description                         IG1 IG2 IG3                     MCP Applicability
                                  Establish and maintain a security awareness program.                   Build role-based curricula aligned to MCP
                                  The purpose of a security awareness program is to                      responsibilities such as server approver, tool publisher,
               Establish
                                  educate the enterprise’s workforce on how to interact                  registry maintainer, and incident responder. Track
               and Maintain
                                  with enterprise assets and data in a secure manner.                    behavioral metrics including declined excessive scope
    14.1       a Security
               Awareness
                                  Conduct training at hire and, at a minimum, annually.    • • •         requests, time to revoke risky consent, and completion
                                  Review and update content annually, or when                            of scenario-based labs. Refresh content when registry
               Program
                                  significant enterprise changes occur that could impact                 governance, capability policies, or specification
                                  this Safeguard.                                                        versions change.

               Train              Train workforce members to recognize social                            Train staff to recognize MCP social engineering
               Workforce          engineering attacks, such as phishing, business email                  vectors including malicious server installation requests,
               Members to         compromise (BEC), pretexting, and tailgating.                          misleading tool descriptions, rug pull attacks, registry
    14.2       Recognize
               Social
- • •         typosquatting, and lookalike server names. Include
                                                                                                         insider risk scenarios such as covert tool creation and
               Engineering                                                                               data egress via tool outputs.
               Attacks

                                  Train workforce members on authentication best                         Train administrators on secure OAuth configuration
               Train
                                  practices. Example topics include MFA, password                        including PKCE enforcement, scope restrictions, and
               Workforce
                                  composition, and credential management.                                the prohibition on token passthrough. Train end users
    14.3       Members on
               Authentication
- • •         to verify scope requests before granting consent and
                                                                                                         to reject unexpected or excessive permission prompts
               Best Practices
                                                                                                         from MCP servers.

Control 14: Security Awareness and Skills Training                                                                                                               47
CIS Control 14: Security Awareness and Skills Training
 Safeguard          Title                               Description                           IG1 IG2 IG3                      MCP Applicability
                                  Train workforce members on how to identify and                            Train staff on data handling rules for prompts and
                                  properly store, transfer, archive, and destroy sensitive                  outputs including classification tags, redaction
                                  data. This also includes training workforce members                       requirements, and clear guidance against pasting
               Train              on clear screen and desk best practices, such as                          secrets. Include guidance on risky input types such as
               Workforce on       locking their screen when they step away from                             uploaded files, images, and embedded links that may
    14.4
               Data Handling      their enterprise asset, erasing physical and virtual        • • •         contain embedded prompt injection or manipulation
               Best Practices     whiteboards at the end of meetings, and storing data                      payloads. Ensure staff understand why environment
                                  and assets securely.                                                      separation matters, using staging for evaluation
                                                                                                            and keeping production data strictly within defined
                                                                                                            boundaries.

                                  Train workforce members to be aware of causes for                         Train workforce on MCP-specific unintentional
                                  unintentional data exposure. Example topics include                       exposure paths: evaluating and limiting OAuth scope
                                  mis-delivery of sensitive data, losing a portable                         grants at consent time, recognizing when tool outputs
               Train              end-user device, or publishing data to unintended                         containing sensitive data are entering model context
               Workforce          audiences.                                                                or logs, and avoiding copying MCP artifacts such as
               Members on
    14.5
               Causes of                                                                      • • •         tool outputs and resource payloads to unauthorized
                                                                                                            storage or collaboration platforms.
               Unintentional
               Data Exposure                                                                                Training should be role-differentiated, as administrators
                                                                                                            approving OAuth grants require different emphasis
                                                                                                            than developers handling tool outputs or end users
                                                                                                            interacting with MCP-enabled applications.

               Train              Train workforce members to be able to recognize                           Train staff to recognize and report MCP-specific
               Workforce          a potential incident and be able to report such an                        incidents including unusual tool behavior, OAuth
               Members on         incident.                                                                 phishing, prompt injection attempts, and unauthorized
    14.6       Recognizing
               and Reporting
- • •         server access. Include detection and reporting of
                                                                                                            shadow MCP use such as unregistered servers and
               Security                                                                                     unapproved capability files.
               Incidents

               Train              Train workforce to understand how to verify and                           Train teams operating MCP servers, gateways, and
               Workforce          report out-of-date software patches or any failures in                    clients to recognize and report pending security
               on How to          automated processes and tools. Part of this training                      updates to MCP SDKs, JSON-RPC libraries, OAuth
               Identify and       should include notifying IT personnel of any failures in                  libraries, and server runtimes. MCP SDK updates
               Report if Their    automated processes and tools.                                            can silently change authorization semantics, fix token
    14.7
               Enterprise                                                                     • • •         validation behavior, or patch capability negotiation logic
               Assets are                                                                                   without obvious external symptoms; personnel who do
               Missing                                                                                      not know to monitor MCP-specific advisories will run
               Security                                                                                     vulnerable components indefinitely.
               Updates

                                  Train workforce members on the dangers of                                 Train remote users and administrators on the risks
               Train
                                  connecting to, and transmitting data over, insecure                       of operating MCP tooling over insecure networks,
               Workforce on
                                  networks for enterprise activities. If the enterprise has                 including conducting OAuth authorization flows,
               the Dangers
                                  remote workers, training must include guidance to                         administering gateways, and developing stdio servers
               of Connecting
                                  ensure that all users securely configure their home                       on untrusted connections. Token interception and
               to and
    14.8
               Transmitting
                                  network infrastructure.                                     • • •         session hijacking are realistic risks for MCP operations
                                                                                                            performed over public or uncontrolled networks; Virtual
               Enterprise
                                                                                                            Private Network (VPN) or Zero Trust Network Access
               Data Over
                                                                                                            (ZTNA) use must be enforced before accessing
               Insecure
                                                                                                            internal MCP servers, gateways, or authorization
               Networks
                                                                                                            infrastructure remotely.

                                  Conduct role-specific security awareness and skills                       Train MCP administrators on registry management,
                                  training. Example implementations include secure                          capability enablement, rollback procedures, emergency
               Conduct
                                  system administration courses for IT professionals,                       disable actions, and provenance verification including
               Role-Specific
                                  OWASP® Top 10 vulnerability awareness and                                 supplier validation, signature verification, and SBOM
    14.9       Security
               Awareness and
                                  prevention training for web application developers, and         • •       review. Use sandboxed lab environments for hands-on
                                  advanced social engineering awareness training for                        exercises. Require completion of role-specific training
               Skills Training
                                  high-profile roles.                                                       before granting privileges for high-risk actions such as
                                                                                                            registry writes or third-party server approval.

Control 14: Security Awareness and Skills Training                                                                                                                  48
Additional MCP Considerations
- Ensure training makes it clear that one should never enter credentials or secrets in response to Elicitation prompts.
- Ensure onboarding training covers identifying content-based manipulation such as indirect prompt injection through retrieved
    documents, web pages, or tickets.
- Train administrators and others who manage MCP configurations that these configurations must never contain secrets of any kind,
    including passwords, keys, PII, or other sensitive information.
- Train administrators to understand how OAuth grants and tool permissions interact, including how scope approvals propagate
    across servers and how misconfigured grants can create unintended access paths.
- Train users to recognize suspicious Elicitation prompts. Servers can use Elicitation to request structured input directly from users
    through the client interface. Train staff to verify that Elicitation requests are expected, come from approved servers, and do not
    solicit credentials, secrets, or authorization outside established workflows.

Control 14: Security Awareness and Skills Training                                                                                         49
Control 15: Service Provider
Management
Develop a process to evaluate service providers who hold sensitive data, or are responsible for an enterprise’s critical IT platforms or
processes, to ensure these providers are protecting those platforms and data appropriately.

MCP Applicability
When MCP environments rely on third-party servers or hosted gateways, those components act as service providers with access to
enterprise data and systems. Service provider management should confirm security posture, data handling practices, and the ability to
restrict or terminate access. Providers must support rapid disablement (traffic blocking, server removal, token revocation) and evidence
preservation during incidents.

Key service provider management considerations in MCP environments include:
- Insufficient visibility into how providers process, store, and retain data from tool parameters, outputs, resource retrievals, or
    prompts, including their logging practices and redaction controls, can increase the risk of unintended data exposure or retention.
- Unclear processes for how OAuth grants, scopes, and tokens are managed, how access is revoked, and how servers can be
    disabled or traffic blocked when risk changes can create gaps in controls and delay response to threats.
- Gaps in monitoring and audit log availability, vulnerability management practices, or incident response commitments can hinder
    coordinated containment and investigation.

Safeguards
CIS Control 15: Service Provider Management
 Safeguard         Title                             Description                            IG1 IG2 IG3                      MCP Applicability
                               Establish and maintain an inventory of service                             Inventory third-party servers supplied or hosted by
              Establish        providers. The inventory is to list all known service                      external service providers, tracking their source,
              and Maintain     providers, include classification(s), and designate an                     registry status, specification version, transport type,
    15.1      an Inventory
              of Service
                               enterprise contact for each service provider. Review
                               and update the inventory annually, or when significant
- • •         and declared capabilities. Ensure the inventory
                                                                                                          includes security assessment results, approval
              Providers        enterprise changes occur that could impact this                            date, permitted deployment scope, owner, and
                               Safeguard.                                                                 integration method.

                               Establish and maintain a service provider                                  Define requirements including code signing,
                               management policy. Ensure the policy addresses                             vulnerability disclosure processes, secure
              Establish
                               the classification, inventory, assessment, monitoring,                     authorization behavior (PKCE where applicable,
              and Maintain
                               and decommissioning of service providers. Review                           audience binding, scope minimization), accurate
              a Service
    15.2
              Provider
                               and update the policy annually, or when significant
                               enterprise changes occur that could impact this
- •       capability declarations, signed artifacts, vulnerability
                                                                                                          disclosure processes, and defined patch SLAs.
              Management
                               Safeguard.                                                                 Describe vetting procedures, approval processes,
              Policy
                                                                                                          deployment restrictions, monitoring requirements, and
                                                                                                          incident coordination.

                               Classify service providers. Classification consideration                   Classify external service providers and third-party
                               may include one or more characteristics, such as data                      MCP servers by the sensitivity of systems and data
              Classify         sensitivity, data volume, availability requirements,                       they access. Apply proportional security requirements
    15.3      Service
              Providers
                               applicable regulations, inherent risk, and mitigated risk.
                               Update and review classifications annually, or when
- •       based on classification level.

                               significant enterprise changes occur that could impact
                               this Safeguard.

Control 15: Service Provider Management                                                                                                                              50
CIS Control 15: Service Provider Management
 Safeguard         Title                            Description                         IG1 IG2 IG3                     MCP Applicability
                               Ensure service provider contracts include security                     Ensure third-party MCP server providers are required
                               requirements. Example requirements may include                         to deliver signed code, record OAuth scopes and
                               minimum security program requirements, security                        capability declarations, follow vulnerability disclosure
                               incident and/or data breach notification and response,                 processes, comply with logging requirements, and
              Ensure Service   data encryption requirements, and data disposal                        support current specification versions. Include
              Provider         commitments. These security requirements must                          contractual terms for data handling and retention,
              Contracts
    15.4
              Include
                               be consistent with the enterprise’s service provider
                               management policy. Review service provider contracts
- •       security update timelines, breach notification, log
                                                                                                      access, rapid authorization revocation during incidents,
              Security         annually to ensure contracts are not missing security                  and exit procedures including workflow migration.
              Requirements     requirements.
                                                                                                      Include contract terms for log access and export SLAs,
                                                                                                      notification of capability changes, and restrictions
                                                                                                      on retention and secondary use of enterprise data
                                                                                                      processed through tools and resources.

                             Assess service providers consistent with the                             Assess third-party MCP server providers for
                             enterprise’s service provider management                                 compliance with security requirements including
                             policy. Assessment scope may vary based on                               capability declaration accuracy, OAuth compliance,
                             classification(s), and may include review of                             logging practices, and vulnerability management.
                             standardized assessment reports, such as Service
              Assess Service
    15.5
              Providers
                             Organization Control 2 (SOC 2) and Payment Card
                             Industry (PCI) Attestation of Compliance (AoC),
                                                                                                •
                             customized questionnaires, or other appropriately
                             rigorous processes. Reassess service providers
                             annually, at a minimum, or with new and renewed
                             contracts.

                               Monitor service providers consistent with the                          Monitor third-party MCP server providers for security-
                               enterprise’s service provider management policy.                       relevant changes, including version updates,
              Monitor          Monitoring may include periodic reassessment of                        capability changes, authorization behavior changes,
    15.6      Service
              Providers
                               service provider compliance, monitoring service
                               provider release notes, and dark web monitoring.
- and advisories affecting MCP frameworks and
                                                                                                      dependencies. Review provider release notes and
                                                                                                      track risks introduced by new tools, resources, or
                                                                                                      prompts.

                               Securely decommission service providers. Example                       Securely decommission MCP service providers by
              Securely         considerations include user and service account                        removing approvals and allowlist entries, revoking
              Decommission     deactivation, termination of data flows, and secure                    OAuth authorizations and tokens, terminating data
    15.7
              Service          disposal of enterprise data within service provider              •     flows, and validating enterprise data removal from
              Providers        systems.                                                               provider systems. Ensure workflows are migrated
                                                                                                      without leaving residual tool access paths.

Additional MCP Considerations
- Require clear data handling, retention, and logging expectations for third-party servers receiving enterprise data.
- Define exit and substitution plans including workflow migration and access revocation.
- Require transparency into sub-processors, registries, and third-party dependencies used to deliver MCP services.
- To mitigate registry-related risks, implement artifact mirroring for all third-party MCP components. Maintain a private, internal mirror
    of approved registry entries where each server’s provenance has been vetted and its cryptographic hashes verified against the
    official publisher’s records. Restrict production hosts from reaching external community registries directly to prevent accidental
    execution of unverified or typosquatted servers. This guidance directly addresses two CVEs documented in Appendix B: CVE-
    2025-66580 (RCE via malicious server config) and CVE-2025-54073 (command injection in unsafe tool wrappers).
- Periodically test provider kill-switch procedures and confirm that dependent workflows fail gracefully or route to fallback paths.
    Document test results and use them to set realistic response-time expectations before an incident requires the procedure for real.

Control 15: Service Provider Management                                                                                                                        51
Control 16: Application Software Security
Manage the security life cycle of in-house developed, hosted, or acquired software to prevent, detect, and remediate security
weaknesses before they can impact the enterprise.

MCP Applicability
MCP components function as applications with exposed interfaces, meaning their schemas, message handling, and authorization logic
all contribute to the attack surface. Treating MCP servers, gateways, and tool wrappers as full application endpoints helps highlight
where validation and control are needed to keep interactions predictable and secure. Treat all model-supplied tool parameters and
context as untrusted input requiring server-side validation and safe execution.

Key application security considerations in MCP environments include:
- Weak validation of tool parameters against declared schemas, missing server-side checks, or inadequate isolation of high-impact
    tools can allow model-supplied inputs to trigger unsafe actions without appropriate safeguards.
- Inconsistent authorization for tools and resources can allow unauthorized access. Incorrect JSON-RPC handling can allow
    malformed messages to bypass controls.
- Treating tool, resource, and prompt declarations as uncontrolled interfaces can lead to unintended exposure if changes to
    capabilities are not reviewed, tested, and aligned to least privilege defaults.
- MCP deployments that include third-party servers or community tooling without supply chain controls, such as dependency review,
    integrity verification, and patch tracking, are more susceptible to introducing compromised or vulnerable components into the
    application security life cycle.

Safeguards
CIS Control 16: Application Software Security
 Safeguard           Title                             Description                        IG1 IG2 IG3                     MCP Applicability
                                  Establish and maintain a secure application                           Establish a secure Software Development Lifecycle
                                  development process. In the process, address such                     (SDLC) incorporating threat modeling across tools,
               Establish
                                  items as: secure application design standards, secure                 resources, and prompts. Apply secure coding to JSON-
               and Maintain
                                  coding practices, developer training, vulnerability                   RPC handlers, implement OAuth correctly, protect
               a Secure
    16.1
               Application
                                  management, security of third-party code, and
                                  application security testing procedures. Review and
- •       communications with TLS, maintain accurate capability
                                                                                                        declarations, and configure privacy-preserving logging.
               Development
                                  update documentation annually, or when significant                    Perform security testing before deployment.
               Process
                                  enterprise changes occur that could impact this
                                  Safeguard.

Control 16: Application Software Security                                                                                                                    52
CIS Control 16: Application Software Security
 Safeguard           Title                              Description                             IG1 IG2 IG3                      MCP Applicability
                                  Establish and maintain a process to accept and                              Establish a repeatable process to intake, triage,
                                  address reports of software vulnerabilities, including                      remediate, verify, and close vulnerabilities across MCP
                                  providing a means for external entities to report. The                      servers, tool handlers, gateways, and authorization
                                  process is to include such items as: a vulnerability                        flows. Provide intake channels for internal reports,
                                  handling policy that identifies reporting process,                          coordinated external disclosures, and upstream
               Establish          responsible party for handling vulnerability reports,                       advisories affecting MCP SDKs and dependencies.
               and Maintain       and a process for intake, assignment, remediation,                          Prioritize by exploitability and impact, focusing on tool
               a Process          and remediation testing. As part of the process,                            authorization bypasses, Origin and CORS (Cross-
    16.2       to Accept
               and Address
                                  use a vulnerability tracking system that includes
                                  severity ratings and metrics for measuring timing
- •       Origin Resource Sharing) validation failures, credential
                                                                                                              exposure in logs, and JSON-RPC handling defects.
               Software           for identification, analysis, and remediation of
               Vulnerabilities    vulnerabilities. Review and update documentation
                                  annually, or when significant enterprise changes occur
                                  that could impact this Safeguard.
                                  Third-party application developers need to consider
                                  this an externally-facing policy that helps to set
                                  expectations for outside stakeholders.

                               Perform root cause analysis on security vulnerabilities.                       When security vulnerabilities are identified in MCP
                               When reviewing vulnerabilities, root cause analysis                            components, perform root cause analysis to determine
                               is the task of evaluating underlying issues that create                        the underlying cause, such as missing input validation,
                               vulnerabilities in code, and allows development teams                          incorrect scope enforcement, insufficient Origin
               Perform Root    to move beyond just fixing individual vulnerabilities as                       checks, unsafe defaults, or dependency weaknesses.
               Cause Analysis they arise.                                                                     Assess whether the defect reflects a systemic gap,
    16.3
               on Security                                                                          • •       such as a pattern of missing server-side authorization
               Vulnerabilities                                                                                checks or repeated reliance on client-side validation,
                                                                                                              rather than an isolated coding error. Incorporate
                                                                                                              findings into secure development standards, code
                                                                                                              review checklists, and testing requirements to prevent
                                                                                                              recurrence of similar vulnerabilities.

                                  Establish and manage an updated inventory of third-                         Maintain an inventory of third-party MCP servers
                                  party components used in development, often referred                        and review each component before deployment
               Establish and
                                  to as a “bill of materials,” as well as components slated                   by recording its declared capabilities including tool
               Manage an
                                  for future use. This inventory is to include any risks that                 schemas, resource URIs, and prompt definitions.
               Inventory of
    16.4
               Third-Party
                                  each third-party component could pose. Evaluate the
                                  list at least monthly to identify any changes or updates
- •       As part of the inventory process, verify OAuth
                                                                                                              scope minimization, assess JSON-RPC quality,
               Software
                                  to these components, and validate that the component                        confirm logging compliance expectations, and
               Components
                                  is still supported.                                                         record initialization test results to ensure only vetted
                                                                                                              components are approved for use.

                                  Use up-to-date and trusted third-party software                             Use current, actively maintained versions of third-
                                  components. When possible, choose established and                           party MCP components including server frameworks,
               Use Up-to-Date     proven frameworks and libraries that provide adequate                       client SDKs, JSON-RPC libraries, OAuth libraries,
               and Trusted        security. Acquire these components from trusted                             and transport dependencies. Obtain components only
    16.5       Third-Party
               Software
                                  sources or evaluate the software for vulnerabilities
                                  before use.
- •       from trusted sources such as enterprise-approved
                                                                                                              registries or verified repositories. Monitor for upstream
               Components                                                                                     deprecation, maintainer abandonment, and known
                                                                                                              vulnerabilities. Replace unmaintained components
                                                                                                              before they become liabilities.

                                  Establish and maintain a severity rating system and                         Establish a vulnerability severity rating approach for
               Establish and      process for application vulnerabilities that facilitates                    MCP defects that accounts for exploitability, impact
               Maintain a         prioritizing the order in which discovered vulnerabilities                  on agent logic, capability misuse potential, data-
               Severity Rating    are fixed. This process includes setting a minimum                          exposure risk, and cross-component propagation.
    16.6       System and
               Process for
                                  level of security acceptability for releasing code or
                                  applications. Severity ratings bring a systematic way of
- •       Apply severity-based SLAs with accelerated response
                                                                                                              for vulnerabilities affecting OAuth flows or capability
               Application        triaging vulnerabilities that improves risk management                      negotiation.
               Vulnerabilities    and helps ensure the most severe bugs are fixed first.
                                  Review and update the system and process annually.

Control 16: Application Software Security                                                                                                                                53
CIS Control 16: Application Software Security
 Safeguard           Title                              Description                            IG1 IG2 IG3                      MCP Applicability
                                  Use standard, industry-recommended hardening                               Apply standard hardening templates when deploying
                                  configuration templates for application infrastructure                     MCP servers and supporting infrastructure, including
               Use Standard       components. This includes underlying servers,                              baseline configuration of runtime environments,
               Hardening          databases, and web servers, and applies to                                 network settings, authentication mechanisms, and
               Configuration      cloud containers, Platform as a Service (PaaS)                             logging policies. Ensure these templates enforce
    16.7
               Templates for      components, and SaaS components. Do not allow                    • •       package-integrity requirements, restrict installations
               Application        in-house developed software to weaken configuration                        to verified repositories, validate specification-version
               Infrastructure     hardening.                                                                 compatibility (including PKCE and Client ID Metadata
                                                                                                             Documents), and mandate hash/signature checks
                                                                                                             during provisioning.

                                  Maintain separate environments for production and                          Maintain separate MCP environments for production
                                  non-production systems.                                                    and non-production use, including distinct server
               Separate
                                                                                                             registries, gateway configurations, authorization server
               Production
                                                                                                             instances or scopes, and credential sets. Prevent
    16.8       and Non-
               Production
- •       non-production servers from accessing production
                                                                                                             data sources or authorization paths. Use staging
               Systems
                                                                                                             environments to evaluate third-party servers and
                                                                                                             specification upgrades before production deployment.

                                  Ensure that all software development personnel                             Train developers building MCP servers, gateways,
                                  receive training in writing secure code for their specific                 and tool handlers on secure coding practices specific
               Train              development environment and responsibilities. Training                     to the protocol: OAuth 2.1 implementation including
               Developers in      can include general security principles and application                    PKCE and token audience binding, safe JSON-RPC
               Application        security standard practices. Conduct training at least                     parsing and error handling, server-side authorization
    16.9
               Security           annually and design in a way to promote security                 • •       enforcement, confused-deputy risk patterns, and
               Concepts and       within the development team, and build a culture of                        input validation for tool parameters. MCP server
               Secure Coding      security among the developers.                                             developers who lack this training will produce
                                                                                                             insecure authorization implementations regardless of
                                                                                                             surrounding policy controls.

                                  Apply secure design principles in application                              Apply secure design principles to MCP architectures
                                  architectures. Secure design principles include the                        by performing structured threat modeling, identifying
                                  concept of least privilege and enforcing mediation                         trust boundaries across model-to-tool, client-to-server,
                                  to validate every operation that the user makes,                           and server-to-backend integrations, and designing for
               Apply Secure       promoting the concept of “never trust user input.”                         strict capability minimization. Implement defense-in-
               Design             Examples include ensuring that explicit error checking                     depth measures, including OAuth protections, input
    16.10      Principles in
               Application
                                  is performed and documented for all input, including
                                  for size, data type, and acceptable ranges or formats.
- •       validation, output filtering, and rate limiting, to ensure
                                                                                                             MCP components remain resilient against attacks.
               Architectures      Secure design also means minimizing the application
                                  infrastructure attack surface, such as turning off
                                  unprotected ports and services, removing unnecessary
                                  programs and files, and renaming or removing default
                                  accounts.

                                  Leverage vetted modules or services for application                        Use vetted API-validation libraries and schema-
                                  security components, such as identity management,                          enforcement modules to ensure all MCP requests
                                  encryption, auditing, and logging. Using platform                          conform to the MCP specification and declared tool
                                  features in critical security functions will reduce                        schemas. Implement content screening modules to
               Leverage
                                  developers’ workload and minimize the likelihood                           inspect resource payloads and tool outputs for indirect
               Vetted Modules
                                  of design or implementation errors. Modern                                 prompt injection or hidden instructions embedded in
               or Services for
    16.11
               Application
                                  operating systems provide effective mechanisms for
                                  identification, authentication, and authorization and
- •       external content before they are committed to the LLM
                                                                                                             context.
               Security
                                  make those mechanisms available to applications. Use
               Components                                                                                    For Streamable HTTP, rely on hardened, third-party
                                  only standardized, currently accepted, and extensively
                                                                                                             request validation services to enforce method, path,
                                  reviewed encryption algorithms. Operating systems
                                                                                                             header, and payload correctness rather than ad-hoc
                                  also provide mechanisms to create and maintain
                                                                                                             parsers.
                                  secure audit logs.

Control 16: Application Software Security                                                                                                                               54
CIS Control 16: Application Software Security
 Safeguard           Title                              Description                         IG1 IG2 IG3                     MCP Applicability
                                  Apply static and dynamic analysis tools within the                      Apply static analysis, dynamic analysis, and
                                  application life cycle to verify that secure coding                     dependency scanning to MCP server and gateway
                                  practices are being followed.                                           codebases. Static analysis should cover JSON-RPC
               Implement
                                                                                                          handler validation, OAuth flow implementation, and
               Code-Level
    16.12
               Security                                                                             •     authorization enforcement logic; dependency scanning
                                                                                                          should identify vulnerable versions of OAuth libraries,
               Checks
                                                                                                          JSON parsing libraries, and MCP SDK components
                                                                                                          before deployment. Block builds that introduce critical
                                                                                                          vulnerabilities or unapproved dependency changes.

                                  Conduct application penetration testing. For critical                   Perform structured security testing during the SDLC
                                  applications, authenticated penetration testing is                      across MCP runtime components, tool wrappers, and
               Conduct
                                  better suited to finding business logic vulnerabilities                 transport layers, including abuse case execution and
               Application
    16.13
               Penetration
                                  than code scanning and automated security
                                  testing. Penetration testing relies on the skill of the
- adversarial prompt testing. Verify authentication and
                                                                                                          authorization enforcement, message ID uniqueness,
               Testing
                                  tester to manually manipulate an application as an                      and logging compliance. Remediate high and critical
                                  authenticated and unauthenticated user.                                 findings before release.

                                  Conduct threat modeling. Threat modeling is the                         Repeat threat modeling when MCP capability
                                  process of identifying and addressing application                       sets, authorization flows, server configurations, or
                                  security design flaws within a design, before code                      deployment patterns change. New tool registrations,
               Conduct            is created. It is conducted through specially trained                   third-party server additions, protocol version
    16.14      Threat
               Modeling
                                  individuals who evaluate the application design
                                  and gauge security risks for each entry point and
- updates, and gateway policy changes all expand
                                                                                                          or shift the attack surface in ways that invalidate
                                  access level. The goal is to map out the application,                   prior assessments. Treat capability additions and
                                  architecture, and infrastructure in a structured way to                 authorization flow changes as mandatory threat model
                                  understand its weaknesses.                                              update triggers, not just development milestones.

Additional MCP Considerations
- Review tool schemas and capability changes as security changes in code review and release gates.
- Test request handling for robustness including malformed messages and ensure handlers fail safely.
- Do not allow model outputs to directly trigger privileged tool actions; enforce allowlists, policy checks, and safe execution patterns
    as an intermediate layer between model output and execution.
- Treat capability declarations (tools, resources, prompts) as part of the API surface and require code review, testing, and approval
    for any change.

Control 16: Application Software Security                                                                                                                         55
Control 17: Incident Response
Management
Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training,
and communications) to prepare, detect, and quickly respond to an attack.

MCP Applicability
MCP incidents often involve misuse of tools, unexpected capability exposure, or access to sensitive data, which can escalate quickly
across components. Plans should cover rapid containment of MCP access paths and preserve evidence for understanding tool-driven
actions. Containment levers (e.g., disable tools, block servers, revoke tokens, freeze registries) must be pre-approved and operationally
tested to avoid delays during incidents.

Key incident response considerations in MCP environments include:
- Inability to quickly disable or block servers, revoke tokens or authorizations, rotate affected credentials, or restrict high-impact tools
    can allow ongoing misuse to continue unchecked.
- Missing or incomplete audit events tying identities and scopes to tool invocations, resource retrievals, capability changes, and
    session activity can limit responders’ ability to reconstruct what actions occurred.
- Lack of planning for incidents driven by tool poisoning, indirect prompt injection through retrieved content, or malicious capability
    exposure can delay quarantine of servers, removal of tools, and validation of restored baselines.
- When third-party MCP servers are permitted, incident response procedures that do not include provider coordination steps or
    criteria for suspending external servers during active investigation can create gaps in containment and escalation.

Safeguards
CIS Control 17: Incident Response Management
 Safeguard         Title                             Description                          IG1 IG2 IG3                     MCP Applicability
                                Designate one key person, and at least one backup,                      Assign specific personnel or teams to manage
                                who will manage the enterprise’s incident handling                      MCP-related incident handling, with clear roles and
                                process. Management personnel are responsible                           authority to act. Ensure they are prepared to respond
                                for the coordination and documentation of incident                      to MCP-specific incidents including unauthorized tool
             Designate
                                response and recovery efforts and can consist                           invocations, compromised servers, OAuth token theft,
             Personnel to
    17.1
             Manage Incident
                                of employees internal to the enterprise, service
                                providers, or a hybrid approach. If using a service
- • •         tool poisoning, prompt injection, credential exposure in
                                                                                                        logs, session hijacking, and DNS rebinding.
             Handling
                                provider, designate at least one person internal to the
                                enterprise to oversee any third-party work. Review
                                annually, or when significant enterprise changes
                                occur that could impact this Safeguard.

                                Establish and maintain contact information for                          Maintain contacts for server maintainers, authorization
             Establish
                                parties that need to be informed of security incidents.                 server operators, LLM providers, gateway operators,
             and Maintain
                                Contacts may include internal staff, service providers,                 specification maintainers, and library maintainers for
             Contact
                                law enforcement, cyber insurance providers,                             coordinated response.
    17.2     Information
             for Reporting
                                relevant government agencies, Information Sharing         • • •
                                and Analysis Center (ISAC) partners, or other
             Security
                                stakeholders. Verify contacts annually to ensure that
             Incidents
                                information is up-to-date.

Control 17: Incident Response Management                                                                                                                       56
CIS Control 17: Incident Response Management
 Safeguard         Title                             Description                            IG1 IG2 IG3                      MCP Applicability
                                Establish and maintain a documented enterprise                            Establish and maintain a process for reporting MCP-
                                process for the workforce to report security incidents.                   related security incidents that covers internal discovery,
             Establish and      The process includes reporting timeframe, personnel                       external disclosure from upstream providers, and
             Maintain an        to report to, mechanism for reporting, and the                            user-reported anomalies. Define reporting channels,
             Enterprise         minimum information to be reported. Ensure the                            required information such as affected server, tool,
    17.3
             Process for        process is publicly available to all of the workforce.      • • •         identity, and scope, and escalation criteria. Ensure
             Reporting          Review annually, or when significant enterprise                           the process integrates with the enterprise incident
             Incidents          changes occur that could impact this Safeguard.                           reporting workflow and accounts for incidents involving
                                                                                                          third-party MCP servers where provider coordination
                                                                                                          is required.

                                Establish and maintain a documented incident                              Define containment procedures for unauthorized
                                response process that addresses roles and                                 invocations including token revocation, tool disabling,
                                responsibilities, compliance requirements, and a                          and human confirmation enforcement. Specify server
             Establish          communication plan. Review annually, or when                              isolation steps: process termination for stdio servers,
             and Maintain       significant enterprise changes occur that could impact                    gateway blocking and server disablement procedures
    17.4     an Incident
             Response
                                this Safeguard.                                                 • •       for Streamable HTTP. Include revocation of both
                                                                                                          access and refresh tokens.
             Process
                                                                                                          Document rapid response actions for tool poisoning,
                                                                                                          data exfiltration, prompt injection, DNS rebinding, and
                                                                                                          termination of compromised components.

                                Assign key roles and responsibilities for incident                        Define MCP-specific incident response roles before
                                response, including staff from legal, IT, information                     incidents occur: gateway operator responsible for
                                security, facilities, public relations, human resources,                  blocking servers and enforcing policy changes,
                                incident responders, analysts, and relevant third                         authorization server operator responsible for revoking
                                parties. Review annually, or when significant                             tokens and terminating sessions, server owner
             Assign Key         enterprise changes occur that could impact this                           responsible for disabling or rolling back specific tool
    17.5     Roles and
             Responsibilities
                                Safeguard.                                                      • •       servers, registry administrator responsible for freezing
                                                                                                          or rolling back capability registrations, and provider
                                                                                                          liaison responsible for coordinating with third-party
                                                                                                          MCP server vendors.
                                                                                                          Pre-assign these responsibilities to named individuals
                                                                                                          and verify them through tabletop exercises.

                                Determine which primary and secondary mechanisms                          No Additional MCP Guidance
                                will be used to communicate and report during a
             Define
                                security incident. Mechanisms can include phone
             Mechanisms for
                                calls, emails, secure chat, or notification letters. Keep
    17.6     Communicating
             During Incident
                                in mind that certain mechanisms, such as emails,                • •
                                can be affected during a security incident. Review
             Response
                                annually, or when significant enterprise changes
                                occur that could impact this Safeguard.

                                Plan and conduct routine incident response exercises                      Include MCP scenarios in tabletop exercises and
                                and scenarios for key personnel involved in the                           ensure lessons learned feed back into registry
                                incident response process to prepare for responding                       governance, monitoring, and authorization policy.
                                to real-world incidents. Exercises need to test                           Threat scenarios may include tool poisoning response,
                                communication channels, decision making, and                              prompt injection handling, and data exfiltration through
                                workflows. Conduct testing on an annual basis, at a                       MCP channels.
             Conduct            minimum.
             Routine Incident                                                                             Training exercises should include simulating a
    17.7
             Response                                                                           • • server compromise requiring stdio termination and
             Exercises                                                                                    Streamable HTTP session invalidation, testing token
                                                                                                          revocation workflows under time pressure, and
                                                                                                          validating that responders can identify MCP-specific
                                                                                                          indicators of compromise in logs, including anomalous
                                                                                                          tool call sequences and unexpected resource access
                                                                                                          patterns. Coordinate exercises across security
                                                                                                          operations, AI/ML teams, and MCP server owners.

Control 17: Incident Response Management                                                                                                                             57
CIS Control 17: Incident Response Management
 Safeguard         Title                            Description                        IG1 IG2 IG3                     MCP Applicability
                                Conduct post-incident reviews. Post-incident reviews                 Analyze the chain of events leading to the incident,
                                help prevent incident recurrence through identifying                 including tool invocations and parameters, resource
                                lessons learned and follow-up action.                                access patterns, capability changes, authorization
                                                                                                     decisions, and session activity. Determine whether
                                                                                                     the incident stemmed from malicious input such as
                                                                                                     tool poisoning or prompt injection, misconfiguration
                                                                                                     of servers or authorization policies, compromised
             Conduct                                                                                 dependencies, or gaps in monitoring and policy
    17.8     Post-Incident
             Reviews
- •       enforcement. Identify shortcomings in detection
                                                                                                     coverage, containment speed, and evidence
                                                                                                     availability.
                                                                                                     Integrate lessons learned into playbooks, detection
                                                                                                     rules, authorization policies, server governance
                                                                                                     processes, and SDLC release gates so that confirmed
                                                                                                     attack paths are blocked at the development and
                                                                                                     approval stage before the next capability addition or
                                                                                                     specification upgrade introduces them again.

                                Establish and maintain security incident thresholds,                 Define escalation thresholds for MCP security events
             Establish          including, at a minimum, differentiating between                     including data exfiltration through tools, privilege
             and Maintain       an incident and an event. Examples can include:                      escalation via confused deputy attacks, authorization
    17.9     Security
             Incident
                                abnormal activity, security vulnerability, security
                                weakness, data breach, privacy incident, etc. Review
- server compromise, successful DNS rebinding,
                                                                                                     coordinated tool poisoning, and large-scale session
             Thresholds         annually, or when significant enterprise changes                     hijacking.
                                occur that could impact this Safeguard.

Additional MCP Considerations
- Ensure responders can access and preserve evidence including tool logs, resource records, and gateway policy history.
- For third-party servers, pre-define provider coordination steps and decision points for suspending services.
- Preserve registry snapshots, capability baselines, gateway policy versions, and token and grant change logs as evidence artifacts.
- Include a registry freeze as an explicit containment lever: suspend all changes to the server registry and capability allowlists during
    active incidents to prevent capability expansion while an investigation is ongoing. Pre-define the authority and process for initiating
    and lifting a registry freeze to avoid delays during an incident.

Control 17: Incident Response Management                                                                                                                     58
Control 18: Penetration Testing
Test the effectiveness and resiliency of enterprise assets through identifying and exploiting weaknesses in controls (people, processes,
and technology) and simulating the objectives and actions of an attacker.

MCP Applicability
Penetration testing for MCP environments should validate not only network exposure but whether tool execution paths can be
manipulated for unintended actions or data access. Testing should focus on controls constraining tool use, enforcing authorization, and
preventing local or cross-origin abuse.

Key penetration testing considerations in MCP environments include:
- Untested exposure to prompt injection or poisoned content can allow unsafe tool actions, data disclosure, or bypass of approval
    and policy controls.
- Lack of testing for OAuth failure modes, such as mis-scoped access, token replay, or authorization bypass conditions, can allow
    tool invocation beyond intended permissions.
- Insufficient testing of cross-origin protections and session handling for Streamable HTTP deployments, as well as localhost
    exposure and DNS rebinding paths, can leave local services reachable in unintended ways.

Safeguards
CIS Control 18: Penetration Testing
 Safeguard           Title                             Description                          IG1 IG2 IG3                     MCP Applicability
                                  Establish and maintain a penetration testing program                    Include MCP environments in the enterprise
                                  appropriate to the size, complexity, industry, and                      penetration testing program with explicitly defined
                                  maturity of the enterprise. Penetration testing program                 scope: gateways, Streamable HTTP servers,
               Establish and      characteristics include scope, such as network, web                     authorization flows, stdio endpoints, high-impact tool
               Maintain a         application, Application Programming Interface (API),                   execution paths, and server registries. MCP-specific
    18.1       Penetration
               Testing
                                  hosted services, and physical premise controls;
                                  frequency; limitations, such as acceptable hours, and
- •       attack surfaces including OAuth implementation,
                                                                                                          capability governance, JSON-RPC parsing robustness,
               Program            excluded attack types; point of contact information;                    and stdio process boundaries are not covered by
                                  remediation, such as how findings will be routed                        standard application or network penetration testing
                                  internally; and retrospective requirements.                             scopes and must be named explicitly to ensure
                                                                                                          coverage.

                                  Perform periodic external penetration tests based on                    Test all internet-accessible MCP servers, gateways,
                                  program requirements, no less than annually. External                   and authorization servers, assessing OAuth
               Perform
                                  penetration testing must include enterprise and                         vulnerabilities such as PKCE bypass, scope
               Periodic
                                  environmental reconnaissance to detect exploitable                      escalation, and token theft. Evaluate authorization
    18.2       External
               Penetration
                                  information. Penetration testing requires specialized         • •       bypass paths, DNS rebinding, session hijacking,
                                  skills and experience and must be conducted through                     CORS misconfigurations, JSON-RPC parsing
               Tests
                                  a qualified party. The testing may be clear box or                      robustness, request and response correlation handling,
                                  opaque box.                                                             and safe error behavior.

                                  Remediate penetration test findings based on the                        Address weak OAuth configurations, missing
                                  enterprise’s documented vulnerability remediation                       human-in-the-loop (HITL) confirmations, inadequate
               Remediate          process. This should include determining a                              tool parameter validation, and logging deficiencies.
    18.3       Penetration
               Test Findings
                                  timeline and level of effort based on the impact and
                                  prioritization of each identified finding.
- •       Remediate authorization bypass paths, tool
                                                                                                          poisoning vectors, and prompt injection risks. Correct
                                                                                                          DNS rebinding, session fixation, and JSON-RPC
                                                                                                          compliance issues.

Control 18: Penetration Testing                                                                                                                                    59
CIS Control 18: Penetration Testing
 Safeguard           Title                             Description                          IG1 IG2 IG3                     MCP Applicability
                                  Validate security measures after each penetration test.                 After MCP penetration tests identify exploitable paths,
                                  If deemed necessary, modify rulesets and capabilities                   validate that remediations are effective through
                                  to detect the techniques used during testing.                           retesting before closing findings. Validation should
               Validate                                                                                   confirm that gateway policy updates, capability allowlist
    18.4       Security
               Measures
- changes, and OAuth implementation fixes close the
                                                                                                          specific paths exploited, and that regression test cases
                                                                                                          have been added to prevent reintroduction through
                                                                                                          future spec upgrades, SDK updates, or capability
                                                                                                          changes.

                                  Perform periodic internal penetration tests based on                    Test stdio servers for privilege escalation, filesystem
                                  program requirements, no less than annually. The                        access beyond declared roots, and environment
               Perform            testing may be clear box or opaque box.                                 variable exposure. Test internal Streamable HTTP
               Periodic                                                                                   servers for authorization bypass. Assess gateways for
    18.5       Internal
               Penetration
- policy bypass and session weaknesses. Attempt tool
                                                                                                          invocation without required scopes, bypass human
               Tests                                                                                      confirmation, access resources outside approved
                                                                                                          URIs, and test for confused deputy behavior. Review
                                                                                                          logs for credential exposure.

Additional MCP Considerations
- Include tests attempting to manipulate tool use through hostile content; verify approval, policy, and validation controls prevent
    unsafe actions.
- Test authorization boundaries through mis-scoped access, token replay, and privilege escalation.
- Test transport and local exposure paths applicable to deployment patterns.
- Test for tool name shadowing where attackers register tools with common names to masquerade as legitimate functionality.
- Test capability drift scenarios (new tools, resources, prompts appearing) and validate deny-by-default behavior until re-approval.

Control 18: Penetration Testing                                                                                                                                     60
Conclusion
MCP provides a structured, predictable way to manage how AI systems interact with tools, data, and external services. By treating MCP
servers, tool interfaces, datasets, and model endpoints as managed enterprise assets, enterprises can apply familiar Safeguards, such
as access control, secure configuration, and continuous monitoring, to a new class of AI components. MCP does not replace existing
security practices; instead, it offers a clear, enforceable boundary where those practices can be applied consistently to AI workflows. As
enterprises adopt AI at scale, aligning MCP implementations with the CIS Controls ensures that the operational benefits of standardized
AI integration are matched with strong, measurable security outcomes.

Conclusion                                                                                                                              61
Appendix A: MCP Deployment Security
Patterns
This appendix provides security guidance for each MCP deployment pattern. Individual Control sections reference this appendix for
shared considerations and include only guidance unique to that control domain.

This appendix also includes security guidance for two official MCP extensions: MCP Applications (A.5) and MCP Authorization
Extensions (A.6), which introduce additional security considerations beyond the core deployment patterns.

The four deployment patterns are:
- Local stdio (subprocess): MCP servers run as subprocesses spawned by the host, communicating over `stdin` and `stdout`
    under the local user context.
- Remote Streamable HTTP (network): MCP servers are accessed over the network using a single HTTP endpoint, with optional
    Server-Sent Events for server-to-client streaming.
- Gateway-Mediated (central enforcement): MCP traffic is routed through a centralized gateway that enforces policy, aggregates
    logging, and manages access across multiple backend servers.
- Third-Party Servers (external supply chain): Third-party MCP servers sourced from registries or external providers require
    additional governance.

Appendix A: MCP Deployment Security Patterns                                                                                        62
A.1: Local stdio Server Security
stdio MCP servers run as subprocesses spawned by the MCP host application. This architecture creates specific security
characteristics that inform control implementation.

In the local stdio pattern, the host application starts the MCP server as a local subprocess and communicates via standard input and
output. All components run on the same endpoint under the local user context, with no network exposure between the host and MCP
server. The diagram below illustrates the component relationships and primary security boundaries in this deployment pattern.

       Figure 1: A.1 – Local stdio (Subprocess)

Trust Boundaries and Privileges
Since there is no network-layer authentication in the trust boundary between the client and server in the stdio pattern, security relies on
process isolation, OS-level permissions, and the integrity of the installed server executable. This primary security boundary is between
the host application and the stdio subprocess. The MCP server communicates with the host application only through `stdin` and
`stdout.` `stderr` is for diagnostics and does not affect protocol behavior.

The stdio server runs with the privileges of the host user. It inherits access to local files, environment variables, network resources, and
any credentials available to that user. Without OS controls or sandboxing, it can reach any resource available to that user context.

For AI agent deployments, this privilege scope is often broader than required. Constrain agents to the minimum privileges needed for
their tasks. Use OS sandboxing, dedicated low-privilege service accounts, or container isolation to limit access to only the required files,
networks, and credentials.

Appendix A: MCP Deployment Security Patterns                                                                                              63
The trust boundary between an MCP server and the resources it accesses depends on the nature of the resource. Where the server
accesses local resources (e.g., files on the local file system, data in the execution environment), the security model is the same as the
client-server trust boundary described above. Where the server accesses remote resources over the network, the security model should
follow the guidance in Controls 5, 6, and 12, as well as any other relevant Controls.

Transport and Session Security
Messages use JSON-RPC and are exchanged as newline-delimited JSON over `stdin` and `stdout`. Servers must not write non-
MCP content to `stdout` as this corrupts the protocol stream. Request IDs must be unique within a session and must not be reused.
Notifications, which are one-way messages expecting no response, omit the ID field entirely.

stdio deployments do not use network-layer authentication. Security rests on local process boundaries, the OS user and groups the
process runs under, and file system permissions.

Where a stdio server makes outbound network connections to remote services, those connections are subject to the same transport
security requirements as Streamable HTTP deployments; see Controls 3.10, 5, 6, and 12.

Configuration and Life Cycle
Server executables must be verified before launch through hash validation or signature checking. Store server configurations in
protected locations with appropriate file system permissions. Environment variables passed to servers may contain sensitive values
and should be minimized to required items only. Logging output to `stderr` must not contain credentials, secrets, or PII. Where the host
stores tokens locally, use OS-provided secure storage (e.g., system keychains) and avoid plaintext files or long-lived caches.

Monitoring and Containment
The host controls the server life cycle through process signals, including `SIGTERM` for graceful shutdown and `SIGKILL` for forced
termination. Implement timeout policies for server responses; unresponsive servers should receive `SIGTERM` followed by `SIGKILL`
after a defined interval. MCP server crash recovery should include capability re-negotiation through a fresh initialization handshake.

Glossary                                                                                                                                 64
A.2: Remote Streamable HTTP Server Security
Streamable HTTP servers expose MCP capabilities over network connections using a single HTTP endpoint with optional Server-Sent
Events for server-to-client streaming. This introduces network-layer trust boundaries that do not exist in stdio deployments.

In this pattern, the MCP client connects directly to a remote MCP server over HTTPS using Streamable HTTP transport. The MCP
server is responsible for validating OAuth 2.1 tokens from the MCP client, enforcing access controls, and managing its own connection
to backend systems. The diagram below illustrates the component relationships and network trust boundary in this deployment pattern.

       Figure 2: A.2 – Remote Streamable HTTP (Direct)

Trust Boundaries and Privileges
The trust boundary shifts from a local process boundary to a network boundary between the MCP client and the MCP server. Servers
may be exposed to the internet or accessed across network segments, making authentication, encryption, and Origin enforcement
essential. Unlike stdio MCP servers, Streamable HTTP servers must independently validate every request since they cannot rely on
OS-level process isolation to establish trust.

Transport and Session Security
TLS 1.2 or better is required for all connections. MCP servers must validate client certificates when mutual TLS is deployed. MCP
servers intended for local access only must bind to `127.0.0.1` rather than 0.0.0.0.

Enforce Origin validation using an explicit allowlist of expected Origins and reject missing, unexpected, or null Origin values. Apply the
same validation to both standard HTTP requests and any server-to-client streaming connections (e.g., streaming responses), and do
not rely on CORS configuration as a substitute for server-side Origin enforcement. Origin validation reduces DNS rebinding and cross-
origin request risks.

Sessions are identified through the `MCP-Session-Id` header. Servers must validate this identifier on all requests after initialization.
Session termination occurs through `HTTP DELETE` requests containing the session identifier. Implement session timeout policies
aligned with organizational security requirements.

Appendix A: MCP Deployment Security Patterns                                                                                               65
Configuration and Life Cycle
Streamable HTTP uses a single HTTP endpoint for all protocol operations. Implement rate limiting per tool per client identity. Monitor for
unusual request patterns indicating automated abuse. Protect against resource exhaustion through request size limits and connection
pooling.

MCP servers declare capabilities during the initialization handshake. Declared capabilities must accurately reflect available features.
The `listChanged` notification mechanism enables dynamic capability updates when tool, resource, or prompt availability changes.

Monitoring and Containment
Monitor for connection rate spikes, traffic to unauthorized destinations, session anomalies, and unencrypted traffic where TLS is
required. Streamable HTTP deployments typically generate higher event volume than stdio due to request and response activity,
batching, and session tracking. Containment actions include session termination via `HTTP DELETE`, token revocation, and gateway-
level traffic blocking.

Appendix A: MCP Deployment Security Patterns                                                                                              66
A.3: Gateway-Mediated Deployment Security
MCP gateways provide centralized policy enforcement, logging aggregation, and access control across multiple backend servers.
Gateways function as an intermediary control point and are critical infrastructure in production deployments.

In this pattern, an MCP gateway sits between the MCP client and one or more backend MCP servers, acting as a centralized policy
enforcement point. The gateway intercepts all MCP traffic, performing token validation, Origin checking, rate limiting, and audit logging
before requests reach the backend. This architectural interposition makes the gateway both the primary security control surface and the
single point of visibility across the deployment. The diagram below shows the key components and trust relationships in this pattern.

       Figure 3: A.3 – Remote Streamable HTTP (Gateway-Mediated)

Trust Boundaries and Privileges
Gateways may terminate OAuth authentication and establish separate trust relationships with backend servers. This architecture
enables credential isolation where backend servers never receive end-user tokens. The gateway becomes the enforcement boundary
for authorization, scope validation, and policy decisions.

Implement credential management for gateway-to-server authentication with appropriate rotation policies. Ensure that the gateway’s
own administrative interfaces are protected with strong authentication and restricted to authorized personnel.

Appendix A: MCP Deployment Security Patterns                                                                                           67
Transport and Session Security
Gateways inherit the transport security requirements of Streamable HTTP (TLS 1.2+, Origin validation, session management). In
addition, gateways must secure the connection between the gateway and each backend server. Where backend servers are co-located
or on a trusted network, internal TLS or mutual TLS provides defense in depth.

Session state managed by the gateway must be preserved consistently across failover events to avoid session loss or policy gaps
during infrastructure transitions.

Configuration and Life Cycle
Gateways enforce tool invocation policies including allowlists, rate limits, and required approvals. Implement rate limits at the tool level
per user or per identity to prevent individual agents or sessions from exhausting backend API quotas or overwhelming downstream
services. Policy decisions should occur before requests reach backend servers. Implement consistent policy across all mediated
servers rather than per-server configurations where possible.

Gateway infrastructure requires high availability given its role as a control point. Implement failover mechanisms that preserve session
state and policy consistency. Monitor gateway health and performance as critical infrastructure.

Monitoring and Containment
Aggregate logging from all backend servers through the gateway. Correlate requests across the gateway and backend for complete
audit trails. Ensure log aggregation does not create single points of failure for forensic data. Gateway logs must not contain credentials,
secrets, or PII.

Gateways enable rapid response to security incidents through centralized server disconnection, tool disabling, and traffic blocking
without requiring changes to individual backend servers.

Appendix A: MCP Deployment Security Patterns                                                                                               68
A.4: Third-Party MCP Server Security
Most enterprise MCP deployments will rely heavily on third-party servers sourced from community registries, open-source repositories,
or commercial providers. These servers require additional governance controls beyond enterprise-developed servers because they
introduce supply chain risk, reduced visibility into implementation details, and dependency on external maintainers.

Trust Boundaries and Privileges
Limit third-party server access to required resources through gateway-mediated deployments where possible. Implement additional
logging and alerting for third-party server activity. Consider network segmentation separating third-party server traffic from internal
resources.

Third-party servers may run locally via stdio or remotely via Streamable HTTP. The trust boundary concerns of the underlying transport
(A.1 or A.2) apply in addition to the governance controls in this section.

Pre-Deployment Assessment
Evaluate MCP servers before deployment through capability review, code audit when source is available, and dynamic analysis when
it is not. Verify that declared capabilities match documented behavior. Assess maintainer reputation, commit history, and security
disclosure practices.

Supply Chain Verification
Track MCP server software provenance including repository, build pipeline, and dependency sources. Verify package integrity through
published hashes and signatures. Monitor for typosquatting attacks using names similar to legitimate packages. Establish a trust
anchor for discovery by preferring enterprise-approved registries and signed metadata, and refuse connections to servers that are not
allowlisted or that fail integrity verification.

Contractual Controls
Establish contractual security requirements when third parties operate servers or their downstream integrations. Define data handling
requirements including residency, retention, and breach notification. Require security certifications or audit evidence appropriate to data
sensitivity.

Ongoing Monitoring
Monitor third-party MCP servers for behavioral changes, unexpected capability modifications, and anomalous access patterns.
Establish processes for responding to upstream security advisories. Maintain awareness of MCP server maintenance status and plan
for deprecation or abandonment scenarios.

Appendix A: MCP Deployment Security Patterns                                                                                              69
A.5: MCP Apps Extension Security
Some MCP deployments may support the MCP Apps extension, which allows an MCP server to provide interactive user interface
content rendered by the host. Unlike tools and resources that primarily return data over MCP, MCP Apps introduce web-rendered
content into the workflow and therefore expand the attack surface, particularly for Streamable HTTP and third-party servers.

Threat Model Implications
MCP Apps add a browser execution context to the trust boundary. Malicious or compromised MCP app content can attempt to mislead
users, influence decisions, or trigger unintended actions. MCP app content should be treated as untrusted, especially when sourced
from third-party servers or registries.

Isolation and Content Restrictions
Hosts should render MCP app content with strong isolation controls (e.g., sandboxed iframe rendering) and enforce restrictive content
policies that limit script execution and external network access. Restrict allowed Origins and minimize the set of destinations the MCP
app is permitted to load. Do not allow MCP app content to directly access host credentials, tokens, or sensitive local resources.

Permissions and User Awareness
If the host supports MCP app-requested permissions (e.g., microphone, camera, clipboard, or file selection), default to deny and
require explicit user approval. Ensure the user can view the requested permissions, which server requested them, and what data will be
accessed or transmitted.

Governance and Monitoring
Apply allowlisting and change control for servers that provide MCP Apps and for any MCP app user interface resources they deliver.
Log MCP app loading events, permission grants, and user-visible actions to support audit and incident response. Treat MCP app
updates as security-relevant changes and review them with the same rigor as tool or schema changes.

Appendix A: MCP Deployment Security Patterns                                                                                              70
A.6: MCP Authorization Extension Security
MCP authorization extensions provide supplementary authentication mechanisms beyond the core OAuth 2.1 authorization code
flow. Two official extensions are published under the `io.modelcontextprotocol` namespace: OAuth Client Credentials and Enterprise-
Managed Authorization. Extensions are disabled by default and require explicit opt-in; only enable extensions that are actively needed
and supported by both client and server. Verify that extension capabilities exchanged during initialization match expected values and
reject sessions where unexpected extensions are advertised.

OAuth Client Credentials
Enables machine-to-machine authorization using the OAuth 2.0 Client Credentials grant, applicable when no human user is present
(e.g., in automated pipelines or server-to-server integrations). Store client secrets in an enterprise vault or secrets manager with audited
access and enforce rotation policies. Client credential tokens do not carry user identity; confirm downstream systems apply appropriate
controls when receiving machine-identity tokens. Audit client credential token issuances separately from user-delegated tokens and
monitor for scope escalation or anomalous usage patterns.

Enterprise-Managed Authorization
Places the enterprise Identity Provider (IdP) in the authorization path, enabling corporate SSO to govern which users may access which
MCP servers and with which scopes. Confirm the IdP enforces MCP-specific access policies and treat IdP policy configuration as a
security-sensitive change requiring change management review. Validate that servers reject tokens with incorrect audience claims and
that clients do not cache or reuse short-lived authorization grants beyond their intended lifetime. Monitor IdP token exchange events for
anomalous patterns such as a single client requesting grants for an unusual number of servers.

Governance and Monitoring
Apply allowlisting and change control to which authorization extensions are permitted in production. Log extension negotiation during
session initialization and alert on sessions using unapproved extensions.

Appendix A: MCP Deployment Security Patterns                                                                                             71
Appendix B: MCP CVEs Mapped to
Best Practices
The following table maps known MCP-related Common Vulnerabilities and Exposures (CVEs) to the Safeguards in this guide.
These entries demonstrate that the threats addressed by this guide are grounded in real-world vulnerabilities disclosed in MCP
implementations and related components, not theoretical risks. Enterprises can use this mapping to validate that their control
implementations address the specific weakness classes that have already been exploited or disclosed in the MCP ecosystem.
As the MCP ecosystem matures, new CVEs may emerge that map to additional Safeguards.

                                                                                                                                           Most Effective
 CVE                Affected Component            Vulnerability Theme                           MCP Focus
                                                                                                                                           Safeguards

 CVE-2025-47274     ToolHive                      Secrets exposure in run configuration files   General MCP security control               3.11; 3.14; 4.1; 5.5

                                                  Remote code execution in
 CVE-2025-49596     MCP Inspector                                                               Code execution / unsafe tool wrapper       2.5; 4.1; 12.2; 16.7
                                                  inspection/testing tool

 CVE-2025-52573     ios-simulator-mcp             Command injection via exec                    Code execution / unsafe tool wrapper       2.5; 2.7; 12.2; 16.2

                                                  Path/prefix validation bypass
 CVE-2025-53110     MCP Filesystem server                                                       General MCP security control               2.5; 3.3; 4.1; 18.5
                                                  (file access escape)
                                                  Denial of Service (DoS) / crash in
 CVE-2025-53365     MCP Python SDK                                                              Availability / resilience                  7.1; 7.2; 7.5; 16.2
                                                  Streamable HTTP handling

 CVE-2025-53366     MCP Python SDK                DoS / crash in Streamable HTTP handling       Availability / resilience                  7.1; 7.2; 7.5; 16.2

 CVE-2025-53372     node-code-sandbox-mcp         Command injection / sandbox escape risk       Code execution / unsafe tool wrapper       2.5; 12.2; 12.8; 16.2

 CVE-2025-53818     GitHub Kanban MCP Server      Command injection via gh exec                 Code execution / unsafe tool wrapper       2.5; 2.7; 12.2; 16.2

 CVE-2025-53832     Lara Translate MCP Server     Command injection via exec                    Code execution / unsafe tool wrapper       2.5; 2.7; 12.2; 16.2

 CVE-2025-54073     mcp-package-docs              Command injection                             Code execution / unsafe tool wrapper       2.5; 2.7; 12.2; 16.2

 CVE-2025-58358     Markdownify MCP server        Command injection via exec                    Code execution / unsafe tool wrapper       2.5; 2.7; 12.2; 16.2

                                                  RCE via malicious
 CVE-2025-64109     Cursor CLI                                                                  Code execution / unsafe tool wrapper       2.5; 2.7; 14.2; 16.7
                                                  .cursor/mcp.json in repo

 CVE-2025-6514      mcp-remote                    RCE via malicious MCP server                  Code execution / unsafe tool wrapper       2.5; 6.7; 12.2; 16.7

                    MCP prompt/session            Prompt hijack / unsafe tool
 CVE-2025-6515                                                                                  Session integrity                          6.1; 6.8; 8.5; 14.2
                    hijacking pattern             authorization pattern

 CVE-2025-66401     MCP Watch scanner             Command injection in repo clone               Code execution / unsafe tool wrapper       2.5; 2.7; 7.5; 16.2

                                                  DNS rebinding risk (protection not
 CVE-2025-66414     MCP TypeScript SDK                                                          Transport hardening (Origin / rebinding)   4.1; 9.2; 12.2; 18.2
                                                  enabled by default)
                                                  DNS rebinding risk (protection not
 CVE-2025-66416     MCP Python SDK                                                              Transport hardening (Origin / rebinding)   4.1; 9.2; 12.2; 18.2
                                                  enabled by default)

 CVE-2025-66580     MCP server config injection   RCE via malicious server config on click      Code execution / unsafe tool wrapper       2.5; 4.6; 14.2; 16.7

                                                  Arbitrary path/repo init
 CVE-2025-68143     mcp-server-git                                                              Filesystem boundary enforcement            2.5; 3.3; 4.1; 16.2
                                                  (unsafe filesystem operations)
                                                  Arbitrary file write via symlink
 CVE-2025-68144     mcp-server-git                                                              General MCP security control               3.3; 4.1; 16.2; 18.5
                                                  (repo crafting)
                                                  Arbitrary file read via symlink
 CVE-2025-68145     mcp-server-git                                                              General MCP security control               3.3; 4.1; 16.2; 18.5
                                                  (repo crafting)

Appendix B: MCP CVEs Mapped to Best Practices                                                                                                                     72
Appendix C: CIS Controls
The CIS Critical Security Controls® (CIS Controls®) are a prioritized set of actions which collectively form a defense-in-depth set of best
practices that mitigate the most common attacks against systems and networks. They are developed by a community of information
technology (IT) experts who apply their first-hand experience as cyber defenders to create these globally accepted security best
practices. The experts who develop the CIS Controls come from a wide range of sectors, including retail, manufacturing, healthcare,
education, government, defense, and others. It is important to note that while the CIS Controls address general best practices that
enterprises should implement to protect their environment, some operational environments may present unique requirements not
addressed by the CIS Controls or require deviations from best practices.

Implementation Groups                                                                        The number of Safeguards an enterprise is
                                                                                             expected to implement increases based on
                                                                                             which group the enterprise falls into.
                                                                                                                                                               TOTAL

## SAFEGUARDS

The Implementation Group methodology was developed

## ESSENTIAL CYBER HYGIENE

as a new way to prioritize the CIS Controls. These IGs
                                                                          IG1                       IG3 assists enterprises with IT security experts to
provide a simple and accessible way to help enterprises
of different classes focus their scarce security resources,                                  IG3    secure sensitive and confidential data. IG3 aims to
                                                                                                    prevent and/or lessen the impact of sophisticated

## SAFEGUARDS

                                                                                                    attacks.
while still leveraging the value of the CIS Controls program,
community, and complementary tools and working aids.                IG2          IG3
                                                                                                    IG2 assists enterprises managing IT infrastructure
More about the Implementation Groups can be found in our
Guide to Implementation Groups (IG): CIS Critical Security
                                                                                             IG2    of multiple departments with differing risk profiles.
                                                                                                    IG2 aims to help enterprises cope with increased

## SAFEGUARDS

                                                                                                    operational complexity.
Controls v8.1.
                                                                                                    IG1 is the definition of essential cyber hygiene and

                                                                                                    represents a minimum standard of information
IG1                                                                                          IG1    security for all enterprises. IG1 assists enterprises
                                                                                                    with limited cybersecurity expertise thwart general,    SAFEGUARDS
An IG1 enterprise is small to medium-sized with limited IT                                          non-targeted attacks.
and cybersecurity expertise to dedicate toward protecting
IT assets and personnel. The principal concern of these
enterprises is to keep the business operational, as they             Figure 4: CIS Controls v8.1 Implementation Group levels
have a limited tolerance for downtime. The sensitivity of
the data that they are trying to protect is low and principally surrounds employee and financial information. Safeguards selected for IG1
should be implementable with limited cybersecurity expertise and aimed to thwart general, non-targeted attacks. These Safeguards will
also typically be designed to work in conjunction with small or home office commercial off-the-shelf (COTS) hardware and software.

IG2
An IG2 enterprise employs individuals responsible for managing and protecting IT infrastructure. These enterprises support multiple
departments with differing risk profiles based on job function and mission. Small enterprise units may have regulatory compliance
burdens. IG2 enterprises often store and process sensitive client or enterprise information and can withstand short interruptions of
service. A major concern is loss of public confidence if a breach occurs. Safeguards selected for IG2 help security teams cope with
increased operational complexity. Some Safeguards will depend on enterprise-grade technology and specialized expertise to properly
install and configure.

IG3
An IG3 enterprise employs security experts that specialize in the different facets of cybersecurity (e.g., risk management, penetration
testing, application security). IG3 assets and data contain sensitive information or functions that are subject to regulatory and
compliance oversight. An IG3 enterprise must address availability of services and the confidentiality and integrity of sensitive data.
Successful attacks can cause significant harm to the public welfare. Safeguards selected for IG3 must abate targeted attacks from a
sophisticated adversary and reduce the impact of zero-day attacks.

If you would like to know more about how the CIS Controls and Implementation Groups pertain to enterprises of all sizes, visit our
website at https://www.cisecurity.org/controls/cis-controls-list/.

Appendix C: CIS Controls                                                                                                                                            73
Appendix D: Acronyms and Abbreviations
 AAA           Authentication, Authorization, and Auditing   MCP       Model Context Protocol

 API           Application Programming Interface             MFA       Multi-Factor Authentication

 BEC           Business Email Compromise                     OAuth     Open Authorization

 CDM           Community Defense Model                       PAM       Privileged Account Management

 CI            Continuous Integration                        PII       Personally Identifiable Information

 CIMD          Client ID Metadata Document                   PKCE      Proof Key for Code Exchange

 CORS          Cross-Origin Resource Sharing                 RTO       Recovery Time Objective

 COTS          Commercial Off-the-Shelf                      SBOM      Software Bill of Materials

 CVE           Common Vulnerabilities and Exposures          SDK       Software Development Kit

 DLP           Data Loss Prevention                          SDLC      Software Development Lifecycle

 DNS           Domain Name System                            seccomp   Secure Computing Mode

 DoS           Denial of Service                             SIEM      Security Information and Event Management

 DPoP          Demonstration of Proof-of-Possession          SLA       Service Level Agreement

 EDR           Endpoint Detection and Response               SSE       Server-Sent Events

 HITL          Human-in-the-Loop                             SSO       Single Sign-On

 HTTP          Hypertext Transfer Protocol                   stderr    Standard Error

 HTTPS         Hypertext Transfer Protocol Secure            stdio     Standard Input/Output

 IaC           Infrastructure-as-Code                        stdout    Standard Output

 IdP           Identity Provider                             TLS       Transport Layer Security

 IDS           Intrusion Detection System                    TTL       Time-to-Live

 IG            Implementation Group                          URI       Uniform Resource Identifier

 IPS           Intrusion Prevention System                   URL       Uniform Resource Locator

 JSON          JavaScript Object Notation                    VPN       Virtual Private Network

 JSON RPC      JSON Remote Procedure Call                    WAF       Web Application Firewall

 LLM           Large Language Model                          ZTNA      Zero Trust Network Access

Appendix D: Acronyms and Abbreviations                                                                             74
Appendix E: Links and Resources
- CIS Critical Security Controls (CIS Controls) v8.1: Learn more about the CIS Controls, including how to get started, why each
  Control is critical, procedures and tools to use during implementation, and a complete listing of Safeguards for each Control.

- CIS Controls Policy Templates: Policy templates geared toward Safeguards found in IG1 of the CIS Controls.

- A Roadmap to the CIS Controls: There is a broader ecosystem that surrounds the CIS Controls that offers guidance, tools,
  resources, mappings, and more to help facilitate the adoption and implementation of the framework. This guide will help adopters
  understand what is available to them, where to start, and how to put it all together.

- Establishing Essential Cyber Hygiene: IG1 is essential cyber hygiene and represents a minimum standard of information security
  for all enterprises. This guide will help enterprises establish essential cyber hygiene.

- Guide to Asset Classes: In v8.1, CIS restructured Asset Classes and their respective definitions to ensure consistency throughout
  the Controls. Learn more about our naming conventions and what they mean.

- Guide to Implementation Groups (IG): IGs are the recommended guidance to prioritize implementation of the CIS Controls. In
  an effort to assist enterprises of every size, IGs are divided into three groups. Learn more about the five factors that can impact IG
  selection for an enterprise.

- CIS Controls Assessment Specification: Provides an understanding of what should be measured in order to verify that the
  Safeguards are properly implemented.

- CIS Controls Navigator: Learn more about the Controls and Safeguards and see how they map to other security standards
  (e.g., CMMC, NIST SP 800-53 Rev. 5, PCI DSS, MITRE ATT&CK). Available for CIS Controls versions 8.1, 8, and 7.1.

- CIS Community Defense Model (CDM) v2.0: A guide published by CIS that leverages the open availability of comprehensive
  summaries of attacks and security incidents, and the industry-endorsed ecosystem that is developing around the MITRE ATT&CK
  Framework.

- CIS Risk Assessment Method (CIS RAM) v2.2: An information security risk assessment method that helps enterprises implement
  and assess their security posture against the CIS Controls.

- CIS SecureSuite® Membership: Membership with access to CIS-CAT Pro Assessor, CIS Build Kits, CIS Benchmarks, and more.

- CIS Benchmarks®: Secure configuration guidelines for 100+ technologies, including operating systems, applications, and network
  devices.

- CIS SecureSuite Platform: A unified platform for CIS SecureSuite Members that provides organizations with the ability to assess
  their cybersecurity posture against the CIS Critical Security Controls® (CIS Controls®) and to demonstrate conformance with the CIS
  Benchmarks®.

- CIS Build Kits: ZIP files that contain a Group Policy Object (GPO) for each profile within the corresponding CIS Benchmark.

- CIS Hardened Images®: Virtual machine images securely pre-configured to the CIS Benchmarks.

- CIS WorkBench: Get involved in one of our many communities.

- CIS Password Policy Guide: CIS guidance for secure usage of passwords in an enterprise.

Appendix E: Links and Resources                                                                                                            75
Official Documentation
- Model Context Protocol Specification: https://modelcontextprotocol.io/specification/2025-11-25

- Model Context Protocol Documentation: https://modelcontextprotocol.io/docs

- MCP GitHub Repository: https://github.com/modelcontextprotocol

Specification Evolution
- MCP Specification 2024-11-05 (Initial Release): https://modelcontextprotocol.io/specification/2024-11-05

- MCP Specification 2025-03-26: https://modelcontextprotocol.io/specification/2025-03-26

- MCP Specification 2025-11-25 (Current): https://modelcontextprotocol.io/specification/2025-11-25

Appendix E: Links and Resources                                                                              76
The Center for Internet Security, Inc. (CIS®) makes the
connected world a safer place for people, businesses, and
governments through our core competencies of collaboration
and innovation. We are a community-driven nonprofit,
responsible for the CIS Critical Security Controls® and
CIS Benchmarks®, globally recognized best practices for
securing IT systems and data. We lead a global community
of IT professionals to continuously evolve these standards
and provide products and services to proactively safeguard
against emerging threats. Our CIS Hardened Images® provide
secure, on-demand, scalable computing environments in the
cloud. CIS is home to the Multi-State Information Sharing and
Analysis Center® (MS-ISAC®), the trusted resource for cyber
threat prevention, protection, response, and recovery for U.S.
State, Local, Tribal, and Territorial government entities, and
the Elections Infrastructure Information Sharing and Analysis
Center® (EI-ISAC®), which supports the rapidly changing
cybersecurity needs of U.S. election offices. To learn more, visit
http://cisecurity.org or follow us on X: @CISecurity.

   cisecurity.org
   email@cisecurity.org
   518-266-3460
   Center for Internet Security
   @CISecurity
   CenterforIntSec
   cisecurity
   TheCISecurity
