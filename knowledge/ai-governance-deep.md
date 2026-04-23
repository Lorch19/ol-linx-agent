# AI Governance Epic — Technical Reference

**Load when:** spec writing, deep technical analysis, capability mapping, agent types disambiguation.
**For scope/status/open items:** use `knowledge/ai-governance-core.md` instead.

---

## Agent types (ordered by discoverability)

| Type | Access path | Example | Detection path |
|---|---|---|---|
| Managed by Org | IDP service provider | ChatGPT Enterprise | IDP scan |
| Used by managed apps | Native 3p integration | GitHub Copilot, Salesforce | Connector scan |
| 3rd-party agents | OAuth/unmanaged | Custom OAuth apps | Credential scan |
| Shadow agents | Not org-managed; no org data access | Personal Claude | Unclear |
| On-prem agents | Dashboard BE apps | — | — |

*4 research tickets already exist: PRD-8563/64/65/66. Check before duplicating.*

## 10 capabilities framework (from "IAM for LLM-Based AI Agents" PDF)

| # | Capability | What Linx does |
|---|---|---|
| 1 | Registration & identification | Discover agents, expose Agent model |
| 2 | Ownership assignment | Extract owners, map to humans, flag orphans |
| 3 | Authentication | Credential discovery (OAuth/API keys/JWT), NHI mapping |
| 4 | Authorization & delegation | OAuth scopes (requested vs granted), delegation chains, token exchange (RFC 8693), MCP authz |
| 5 | Human oversight & approval | JIT requests, approval chains, UARs for agents |
| 6 | Resource policy enforcement | Resource policies, MCP policies, least privilege, SoD |
| 7 | Credential lifecycle | Issue / rotate / step up/down / revoke |
| 8 | Auditability & logging | Agent action logs, delegation trails |
| 9 | Multi-agent collaboration | A2A/ACP/LMOS protocol detection, mutual auth, trust boundaries |
| 10 | Visibility & observability | Real-time monitoring, baselines, anomaly detection, shadow-agent detection |

## Identity model — DECIDED: node-primary

Agent = first-class graph entity (not an edge). Properties: Platform, Name/Description/Prompt, Owner, Accounts shared with, Agent-to-agent edges, Entitlements, Tools (API+MCP), Capabilities, Model, Timestamps.

**Tool** = first-class entity. Properties: Name, Type (API/MCP), Auth type, Permissions, Target URL, Target app. Linx maps blast radius by enumerating every tool surface, not just aggregate app access.

## Key competitors named in tickets

Astrix, Oasis, ConductorOne, Natoma, Clutch — implementation ticket.
CyberArk, CrowdStrike, SailPoint — concept doc additions.
Full scoring: `knowledge/competitive-matrix.md`.

## Yoad signal (Apr 20)

Mor explored fetching 1Password-stored agent creds via existing connectors. Yoad: **doesn't exist currently.** Concrete evidence for "connectors need work" problem statement.

## Key research sources

- Astrix × Bayer "Touchpoints Between AI and NHIs" — Mor: "great document"
- ConductorOne "Evolution of Identity — Agentic AI era 2025+" — Mor: "frames the problem beautifully"
- Gartner doc 833731 summary → `references/gartner-833731-summary.md`
- "IAM for LLM-Based AI Agents" PDF — source of the 10-capability framework; need copy
- unmitigatedrisk.com/?p=1075 — counter-school: ephemeral crypto-attested identities (TPM/SGX/SPIFFE)
