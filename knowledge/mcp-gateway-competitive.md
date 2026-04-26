# MCP Gateway — Competitive Landscape

**Source:** Claude.ai research surfaced 2026-04-26 (Omri shared). Filtered for Linx's lane: identity-governance-shaped MCP gateways, not generic routing.

**Linx's category resolution:** inbound governance. Linx sits between the customer's agent platforms and target SaaS apps, intercepting MCP calls (Q2 = inline-for-everything, Apr 26). Vendors below pitch the same job-to-be-done.

---

## Direct competitors (same category)

| Vendor | Positioning | What to know |
|---|---|---|
| **Strata Maverics AI Identity Gateway** | "AI Identity Gateway" — federates MCP servers through enterprise IDP, propagates user identity, dynamically downscopes per tool call. Cites Clutch data: ~15% of employees in 10k-person orgs run avg 2 MCP servers each → ~3,000 unconverted deployments/company. | Closest narrative to what Linx will pitch. Use their stat for market sizing. |
| **Ping Identity Agent Gateway** | IAM incumbent doing the same play. Identity-aware enforcement, validates agent tokens/scopes at runtime, audit-ready visibility, single policy plane in front of MCP servers. | The "why not just use Ping?" customer objection. Watch a demo to calibrate against the IAM incumbent voice. |
| **Lunar MCPX** | Open source (MIT, ~400 stars). ~4ms p99 latency, tool-level RBAC at global/service/individual-tool granularity, immutable audit trails across User → Agent → MCP → Tool. HiBob customer reference. | Best example of "what a polished governance-first MCP gateway looks like." Both demo narrative *and* product surface to study. |
| **Operant MCP Gateway** | Threat-detection framing rather than IAM. Trust zones, real-time blocking, NHI-aware. | Useful as the alternative-posture reference: "what if Linx leaned security-detection instead of identity-governance?" |

## Generalist gateways (architectural references, not pitch)

| Vendor | Why notable |
|---|---|
| Docker MCP Gateway | OSS baseline most devs already run. Protocol/runtime mechanics. |
| Microsoft MCP Gateway | Reverse proxy + lifecycle on Kubernetes. Hyperscaler frame. |
| IBM ContextForge | Federation, virtual servers, retries. |
| Kong AI Gateway | "MCP gateway = API gateway for agents" mental model. |
| TrueFoundry MCP Gateway | Cleanest writeup of OAuth 2.0 OBO (on-behalf-of) identity propagation. |

## Catalog/registry approaches (different problem)

Obot, Runlayer, agentic-community/mcp-gateway-registry — "approved-tool catalog + SSO." Closer to ITSM / shadow-IT-discovery than runtime governance. Relevant only if hero moment shifts to "23 agents across ChatGPT/Cursor/etc." catalog framing.

## Awesome-list (bookmark)

`github.com/e2b-dev/awesome-mcp-gateways` — full landscape, updated weekly.

---

## Strategic threat — "smart competitor" view

> *"Identity governance gateways are a feature, not a product. Okta, Ping, and Strata will eat this layer for free as part of their existing IDP relationship. Linx's edge has to be the graph context the gateway uses to make decisions — not the gateway itself."*

**Linx counter-position (draft):**

- Linx is not an IDP. No existing IDP customer relationship to ride on.
- If IDPs eat this layer for free, Linx wins on the **graph context** — humans + NHIs + agents in one identity model. That model is what makes governance decisions sharp.
- MCP Gateway is the **delivery mechanism** for the graph's value at agent-execution time, not the value itself.
- Need to validate this framing with Niv before May 5 hero-moment alignment.

---

## Action items for `competitive-matrix.md`

Add Strata Maverics, Ping Agent Gateway, Lunar MCPX, Operant as new rows. Score against existing rubric. Compare to Saviynt MCP Gateway claim (already on commitments — Apr 30 deep-dive).

**Recommended deep-study targets:** Lunar MCPX (OSS code visible, governance model articulated) + Strata Maverics (closest narrative to Linx's pitch). Watch a Ping Agent Gateway demo for calibration.
