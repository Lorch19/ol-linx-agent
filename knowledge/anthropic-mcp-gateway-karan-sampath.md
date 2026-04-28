# Anthropic on MCP Gateways — Karan Sampath

**Source:** YouTube — `https://www.youtube.com/watch?v=CD6R4Wf3jnY` ("Gateways are all you need")
**Presenter:** Karan Sampath, Anthropic.
**Date recorded into project:** 2026-04-28 (Omri).
**Frame:** Karan speaks from a **build-it-yourself enterprise** POV (Anthropic's own internal tooling perspective). Linx's POV is **product-to-sell**. The architecture aligns; the GTM and the IGA-graph layer are Linx's wedge.

## Why this matters for Linx

1. **Architectural validation.** The components Karan names — Auth Handler · RBAC Engine · Proxy Router · Tunnel Handler · Subregistry · Tooling/CLI — are essentially Linx's MCP gateway core. Linx's pivot is in the architectural mainstream, not an outlier.
2. **The Linx wedge surfaces here.** Karan's gateway has the auth + access-control + observability *primitives*. He assumes someone else builds the **governance layer that turns those primitives into IGA/SoD/audit answers a CISO can act on.** That layer is Linx. *"Anthropic ships the protocol. Linx ships the governance layer Karan's framework assumes someone else is building."*
3. **"Delegated user + agent identity" is named in the Auth section** (~9:00–9:30). Validates that the gateway can identify the human behind every agent call — the prerequisite for SoD-for-agents.

## The Anthropic gateway diagram (referenced as screenshot 1)

```
   MCP CLIENTS  ←→   ┌─────────────────────────────────────┐  ←→  MCP SERVERS
                     │              GATEWAY                │
                     │  ┌────────┐ ┌────────┐ ┌────────┐  │
                     │  │  Auth  │ │  RBAC  │ │  Proxy │  │
                     │  │Handler │ │ Engine │ │ Router │  │
                     │  └────────┘ └────────┘ └────────┘  │
                     │  ┌────────┐ ┌────────┐ ┌────────┐  │
                     │  │ Tunnel │ │  Sub-  │ │Tooling │  │
                     │  │Handler │ │registry│ │CLI/MCP │  │
                     │  └────────┘ └────────┘ └────────┘  │
                     └─────────────────────────────────────┘
```

Linx maps to: Auth Handler · RBAC Engine · Proxy Router · Subregistry. Tunnel Handler + CLI Tooling are devex / infra Linx may buy or partner on.

## "What a Gateway Gives You" — Karan's three pillars (screenshot 2)

| Pillar | Karan's bullets | Linx implication |
|---|---|---|
| **Auth** | Plug in IdP once · Delegated user + agent identity | Linx leverages this for SoD-for-agents wedge — without delegated identity, audit chain breaks |
| **Governance & Access Control** | One control plane for server sprawl · Allowlists, version pins, RBAC | Linx extends with role-based agent policies + owner-parameterized perms (per Mor 4-26) |
| **Observability** | Central audit log of every tool call · Usage metrics across teams & servers | Linx extends with the **graph context** — every call traceable to human via the IGA layer |

## Functional requirements per the video (technical spec)

1. **Authentication & Identity** (9:00–9:30) — IdP integration, delegated identity (user + agent).
2. **Access Control** (9:40–10:45) — RBAC, fine-grained tool scoping (read vs write).
3. **Security / Root of Trust** (2:35–3:15, 12:18–12:51) — verify server integrity, encrypt connections, mediate untrusted clients.
4. **Observability** (10:50–11:15) — log tool usage, request metadata, latency, **monitor tool definitions** to track evolution.
5. **Developer Experience** (9:15–9:35, 13:30–14:02) — gateway CLI for non-technical teams, standardized server primitives.

## Strategic benefits Karan highlights

- **Decoupling** (15:28–15:58) — agent harness separate from data layer; agents invariant to back-end changes.
- **Scalability** (14:35–14:52) — central gateway offloads routing / cred rotation / load.
- **Operational velocity** (12:05–12:20) — internal teams iterate on business-specific MCPs in isolation, all flowing through the blessed gateway.

## "Gateways are all you need" (0:28)

The thesis: **single blessed platform** that enables decentralized MCP development while maintaining centralized security oversight. Turns security/scaling from bottleneck into ecosystem catalyst.

## Linx vs Anthropic — positioning nuance

| | Anthropic / Karan | Linx |
|---|---|---|
| Frame | Build infrastructure for your own org | Product to sell |
| Layer covered | Gateway primitives (auth, RBAC, observability) | Gateway + IGA graph + governance UI |
| Target user | Platform engineering teams | Security admins / CISO |
| What they answer | "How do agents reach tools safely?" | "Who is responsible when agents act?" |

**Demo line:** *"The MCP community is converging on what gateways need to do — Karan from Anthropic laid out the primitives. We took the next step: turning those primitives into the audit chain a CISO can defend in front of an auditor."*

## Open questions

- Does Linx's gateway match all 6 Anthropic components, or are some out of scope (e.g., Tunnel Handler)? Validate with Amir Ben Ami.
- Is Karan's "version pins" feature on Linx's roadmap? Useful enterprise hook.
- "Monitor tool definitions" (10:50–11:15) — Linx has agent-graph drift detection? Worth tickets if not.

## Screenshots referenced

Two screenshots from the video, shared in chat 2026-04-28: (1) Inside the Gateway architecture; (2) What a Gateway Gives You. *Not stored in repo as binaries — re-fetch from YouTube if needed for slides.*

---

*Tags: ai-governance, MCP, gateway, Anthropic, Karan-Sampath, architecture, competitive-validation, SME, RFC-8693, delegated-identity*
