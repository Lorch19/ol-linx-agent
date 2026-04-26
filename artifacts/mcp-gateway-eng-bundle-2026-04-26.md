# Engineering Bundle — MCP Gateway References

For Sarit + Amir + Omer + Javier + the broader eng team. Curated to skip vendor marketing — all engineering material with code, spec, or architecture detail. Source: Claude.ai filtering 2026-04-26.

---

## Pre-send sanity check

Ask Sarit one question before sending: **what's the POC scope?**

- If "Linx exposes its own MCP server to customer agents" → prioritize spec + Solo.io
- If "Linx aggregates customer-side MCP traffic for governance" → prioritize Lunar MCPX

(Per our Apr 26 discovery, the answer is the second — Linx is inline in the request loop. So Lunar MCPX is the highest-priority reference.)

---

## The 4 links

### 1. MCP Authorization spec — canonical
https://modelcontextprotocol.io/specification/draft/basic/authorization

Protocol-level source of truth. MCP servers act as OAuth 2.1 resource servers; clients act as OAuth 2.1 clients making protected requests on behalf of resource owners. Read this before any architectural debate.

### 2. Solo.io — "MCP Authorization the Hard Way"
https://www.solo.io/blog/part-two-mcp-authorization-the-hard-way

Hands-on tutorial. Walks through implementing the spec with a local IdP, then Keycloak. Code, not narrative.

### 3. Lunar MCPX — open source repo
https://github.com/TheLunarCompany/lunar/tree/main/mcpx

Reference implementation closest to Linx's positioning (governance-first, identity-aware, agent-native). MIT-licensed, ~400 stars, actively developed.

Pair with: https://medium.com/@rotemy_32225/mcp-gateway-mcpx-from-local-experimentation-to-production-grade-infrastructure-8e275c71217e — why they made each architectural choice.

### 4. Microsoft MCP Gateway — open source repo
https://github.com/microsoft/mcp-gateway

Different shape than Lunar. Kubernetes-native, reverse proxy + lifecycle management, role-scoped adapter registration. Comparison frame: enterprise platform team vs. OSS startup.

### Optional 5th (only if asked)
https://github.com/e2b-dev/awesome-mcp-gateways — bookmark, not a read.

---

## What was deliberately cut

- Vendor landing pages (Strata, Ping, Cequence, Operant, Kong, Lunar product page) — pitches not engineering material. They live in `knowledge/mcp-gateway-competitive.md` for demo prep.
- "What is an MCP Gateway" explainers — Sarit and Amir already know.
- Comparison/listicle blogs — low information density per minute.
- Catalog/registry plays (Obot, Runlayer, MCP Manager) — different problem, dilutes focus.
- Docker MCP Gateway — lower-level than what Linx is building. Send if eng asks for the simplest reference.

---

## Suggested Slack message (paste into eng channel)

> Sharing 4 references on MCP Gateway architecture as we ramp the AI Governance epic. Filtered hard — all engineering material, no vendor pitches.
>
> 1. MCP Authorization spec (canonical): [link]
> 2. Solo.io implementation tutorial — code, not narrative: [link]
> 3. Lunar MCPX OSS repo (closest to our positioning) + their architecture writeup: [link] · [link]
> 4. Microsoft MCP Gateway OSS repo (Kubernetes / reverse proxy frame): [link]
>
> Lunar is the highest-signal study target — open source + governance-first. Awesome-list bookmark for the long tail: github.com/e2b-dev/awesome-mcp-gateways.
