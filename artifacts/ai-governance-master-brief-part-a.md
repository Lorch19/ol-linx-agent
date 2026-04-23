# AI Governance Master Brief — Part A: The Problem
> Distilled from `ai-governance-core.md`, `ai-governance-deep.md`, `ai-agent-identity-sme-brief-2026-04-21.md`.
> Designed for: 5-min read before any meeting. Not a reference doc — a mental model.
> Written: 2026-04-23. Items marked `[verify]` are claims to cross-check in Gemini before relying on them publicly.

---

## The one-paragraph problem statement (say this out loud)

Enterprises are pushing AI agents into production faster than identity systems can model them. An agent is a new kind of actor — it holds credentials, takes actions across many apps, inherits human permissions via delegation, and disappears before an access review can run. Classic IAM built three things (IDP, IGA, PAM) that all assume stable long-lived accounts attached to a human. None of them answer the questions a CISO is now being asked: *where are the agents, who owns them, what can they reach, and who signs off when they act?* There is no incumbent that answers all four questions. That's the gap.

---

## Why it's happening now — four forces

1. **Supply shock.** Every major SaaS shipped an agent platform in <12 months: ChatGPT Enterprise, Copilot Studio, Cursor, Salesforce Agentforce, ServiceNow AICT, N8N. "Configured agents" went from zero to the default way enterprises extend their apps.

2. **Protocol shock (MCP).** Model Context Protocol became the de-facto agent-to-tool interface in 2025. It runs on OAuth 2.1 + PKCE, but **MCP authorization is optional in spec** — credential sharing is common. Gartner 833731 explicitly calls MCP a credential-sharing risk vector. `[verify: check if MCP 2025 spec rev changed the authz-optional status]`

3. **Regulatory pressure.** Gartner SPA: *"by 2028, 90% of organizations that allow human-to-agent credential sharing will have to redo the design."* `[verify: check if this Gartner prediction has been updated or cited in 2026 coverage]`

4. **Incumbent silence.** Gartner 833731 names only IBM, Ping, Transmit as "strong" on human→agent delegation. SailPoint, CyberArk, Okta, Entra, Saviynt are absent — though Saviynt has since made claims (Part B). That's the open window.

---

## The 5 agent types (ordered by how easy they are to discover)

| Type | How they authenticate | Example | How you find them |
|---|---|---|---|
| **Managed by Org** | IDP service provider | ChatGPT Enterprise GPTs | IDP scan |
| **Used by managed apps** | Native 3rd-party integration | GitHub Copilot, Salesforce | Connector scan |
| **3rd-party agents** | OAuth / unmanaged | Custom OAuth apps | Credential scan |
| **Shadow agents** | Not org-managed; no org data | Personal Claude | Unclear — active research problem |
| **On-prem agents** | Dashboard / backend apps | — | TBD |

**The hard ones are shadow agents.** The entire market debate is whether shadow detection is in scope (Clutch's bet) or a later milestone (Linx's M4 non-goal today). This is a live tension — don't claim Linx "discovers all agents" without qualifying tier.

---

## MCP as the new attack surface — the line to carry

> "The plumbing exists (OAuth 2.1 + MCP + SCIM + SPIFFE). What's missing is the governance layer that translates all of it into audit, ownership, and SoD."

MCP (Model Context Protocol) is the bridge between an agent and its tools (APIs, databases, apps). It uses JSON-RPC 2.0 over HTTP/SSE or STDIO. The problem: MCP authorization is optional in spec, so many deployments share credentials across agents rather than issuing per-agent grants. Each MCP server a tool exposes is a potential blast-radius surface.

**Linx models every tool as a first-class entity** — name, type (API or MCP), auth type, permissions, target URL, target app. That lets a CISO query blast radius directly, which nobody else does today.

**Amir Ben Ami's MCP telemetry work** may be the only discovery path for agents on Claude + Gemini, because those platforms don't expose OAuth-app enumeration APIs. Scope unconfirmed as of 2026-04-23 — don't cite externally until confirmed. `[verify: confirm Amir's MCP discovery scope covers Claude + Gemini vs. just some vendors]`

---

## The 10 capabilities framework (what "AI agent governance" covers end-to-end)

Source: "IAM for LLM-Based AI Agents" PDF — industry framework Linx built on. `[verify: check if this framework has been cited by analysts or superseded since 2025]`

| # | Capability | Linx milestone |
|---|---|---|
| 1 | Registration & identification | M1 |
| 2 | Ownership assignment | M1 |
| 3 | Authentication (credential discovery) | M1–M2 |
| 4 | Authorization & delegation (OAuth scopes, MCP authz) | M2 |
| 5 | Human oversight & approval (JIT, UARs) | M3 |
| 6 | Resource policy enforcement (least privilege, SoD) | M3 |
| 7 | Credential lifecycle (rotate, revoke) | M4 |
| 8 | Auditability & logging | M3 (note: PRD has a question mark on M4 — this is wrong; logging is a prerequisite for M3 enforcement) |
| 9 | Multi-agent collaboration (A2A, ACP) | M4 |
| 10 | Visibility & observability (anomaly detection) | M4 |

**MVP (M0–M3) covers capabilities 1–6.** Call it "inventory + governance." M4 is the lifecycle + detection phase.

---

## The 3 buyer questions (what a CISO asks you in the first 5 minutes)

1. **Where are AI/LLM tools connected to my apps?** → visibility (M1 discovery)
2. **How do I control agent access?** → governance (M2–M3 JIT + policies)
3. **Who is accountable when an agent acts?** → audit (M3 approval chains + UARs)

The SACR analyst framework maps this identically to Linx's roadmap: Discover → Define → Provision → Enforce. Use this as external validation when talking to a CISO.

---

## The numbers worth memorizing

- **144:1** — NHI-to-human ratio in typical enterprise (SACR, 2026-04-23). One human operator can spin up multiple agents, each with distinct identities. Manual oversight is structurally impossible at this ratio.
- **10–50×** — NHIs outnumber humans in typical enterprises (Veza 2025). `[verify: more recent data may exist]`
- **31%** — stolen credentials as share of breaches (Verizon 2025 DBIR). The case for ISPM over periodic IGA cycles.
- **9.2% / 10.7%** — IGA market growth '23→'24 / forecast '24→'25. Fast-growing anchor category.
- **~55 vendors** in the IGA market — no dominant "AI agent" sub-segment yet.

---

## The identity model Linx chose (and why it matters)

**Node-primary (graph model):** Agent = first-class graph node with owner, tools, model, connected apps, entitlements, timestamps. The alternative school (ephemeral/crypto-attested) treats identity as a short-lived cryptographic session with no persistent record.

**Why node-primary:** a CISO needs something to run an access review against. You can't certify a 2-minute agent session. The graph gives you a pane-of-glass view; session-level edges get added at M4.

**The caveat to know:** Niv (CPO) has publicly endorsed the ephemeral-attested school with a 🙏 reaction. Don't dismiss it in a room with him — say "we're node-primary for auditability; we'll extend with session-level edges at M4."

---

## Linx's positioning statement (learn this verbatim)

> "Linx is the inventory and governance layer for agents already delegated to enterprise systems. We are not the delegation protocol, not the prompt guardrail, not the shadow-AI sniffer in isolation — we are the one pane where a CISO can answer *where, who, what, and who signs off.*"

---

## What's still unknown (be honest in meetings)

- No analyst-sized TAM for "agent identity" specifically — don't pretend one exists.
- Monday.com is the only named customer signal; not yet a "we'd buy this tomorrow" quote. `[track: customer pull evidence needed by June]`
- Shadow agent scope is unresolved — qualifying which tier of agents Linx discovers is critical.
- Amir's MCP discovery scope: unconfirmed whether it covers Claude + Gemini platform-side gaps.
