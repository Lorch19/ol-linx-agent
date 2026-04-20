# Linx Claude — Competitor + external-source fetch for AI Governance

> Purpose: Linx Claude can fetch URLs that WebFetch from our agent environment returns 403 on (Astrix, ConductorOne, Oasis, Ping, etc.). This prompt instructs Linx Claude to do the fetching + structured extraction, so we don't lose the research signal.
> Authored: 2026-04-20
> Use: paste the body below. Review output. Paste back to this agent for ingestion into `knowledge/ai-governance-competitor-landscape.md`.

---

## The prompt (paste everything below this line)

---

# Task: Structured extraction from AI Governance competitor + analyst sources

## Context

I'm Omri, a PM at Linx Security leading research for the Agentic AI Identity epic. Linx is building IGA-style discovery + JIT governance for customer-deployed AI agents (tier-2 configured agents like ChatGPT Enterprise GPTs, Copilot Studio, Cursor, N8N, ServiceNow AICT).

I need structured extracts from the URLs below so I can build a competitor landscape doc. Each source has a different purpose — note it and adapt your extraction.

**Output location:** return as a single markdown doc I can paste into my agent repo. Max ~3000 words total across all sources.

## URLs to fetch + extract

### Competitor product pages (primary)

1. **Astrix — AI Agent Discovery and Governance** — `https://astrix.security/use-cases/ai-agent-discovery-and-governance/`
2. **Astrix — Touchpoints Between AI and NHIs (research w/ Bayer)** — `https://astrix.security/learn/blog/astrix-research-presents-touchpoints-between-ai-and-non-human-identities/`
3. **Astrix — MCP Shift Part 3** — `https://astrix.security/learn/blog/the-mcp-shift-part-3-the-future/`
4. **Astrix — Agentic AI use case** — `https://astrix.security/use-cases/agentic-ai/`
5. **Oasis Security — AI solutions** — `https://www.oasis.security/solutions/ai`
6. **ConductorOne — Evolution of Identity (agentic era)** — `https://www.conductorone.com/guides/the-evolution-of-identity/`
7. **ConductorOne — NHI Governance** — `https://www.conductorone.com/solutions/nhi-governance/`
8. **Clutch — Shadow AI discovery** — `https://www.clutch.security/use-cases/shadow-ai-discovery`
9. **Ping Identity — Agentic AI Identity** — `https://www.pingidentity.com/en/solution/agentic-ai-identity.html`
10. **CyberArk — Secure Agentic AI** — `https://www.cyberark.com/solutions/secure-agentic-ai/`
11. **CyberArk — 5 unexpected security challenges** — `https://www.cyberark.com/resources/blog/the-agentic-ai-revolution-5-unexpected-security-challenges`
12. **CrowdStrike — Next-gen identity security** — `https://www.crowdstrike.com/en-us/platform/next-gen-identity-security/`

### Analyst + thought leadership

13. **Duo — 5 ways to defend against AI identity threats** — `https://duo.com/blog/five-ways-to-defend-against-ai-powered-identity-threats-with-duo`
14. **unmitigatedrisk — Ephemeral AI identities** — `https://unmitigatedrisk.com/?p=1075`
15. **1Password — Service accounts + SDKs for agentic AI** — `https://blog.1password.com/service-accounts-sdks-agentic-ai/`

### YouTube (transcript if available)

16. **Jared Hanson — Secure Agents using OAuth** — `https://www.youtube.com/watch?v=blmAkayzE8M`

## Extraction schema (per source)

For each URL, produce the following sections. If a section doesn't apply to a given source, say "N/A" and skip.

```
### <Competitor/Source name> — <URL>

**Source type:** competitor product page / research paper / vendor blog / analyst take / standards video

**One-line value prop or thesis:**
(one sentence)

**What they claim to do / argue (3–5 bullets):**
(bullets)

**Specific capabilities listed** (if a product page):
(verbatim capability list if possible)

**Integrations / platforms supported:**
(list)

**Terminology / branding worth noting:**
(phrases they use — "AI Agent Control Plane," "Agent Security Posture Management," etc.)

**Discovery mechanism (HOW they find agents):**
(IDP? Connectors? Logs? Manual? Proxy?)

**Identity model (node? edge? ephemeral? crypto-attested?):**
(one paragraph)

**Authentication / credential approach:**
(OAuth? API keys? Service accounts? MCP-aware?)

**Customer proof (named customers, case studies, quotes):**
(list)

**Competitive posture (who do they position against):**
(named competitors if any)

**Most memorable quote for positioning reference:**
(one direct quote)

**Where they're thin (your read):**
(one or two sentences of independent assessment)
```

## Cross-source synthesis (after all 16 extracts)

Once you've extracted all sources, add one final section:

```
## Synthesis

**Consensus narrative** — where do 5+ sources agree? (thesis convergence)
**Contested points** — where do they disagree or contradict?
**Terminology battle** — which phrases are becoming dominant? Which are fragmented?
**Identity model camps** — cluster the sources: node-primary / edge-primary / ephemeral-attested / hybrid. Who's in each camp?
**Discovery mechanism camps** — IDP-scrape / connector-extend / log-analyze / proxy / eBPF / hybrid. Who's in each?
**White space for Linx** — what's NOT covered well by anyone? (3 candidates)
```

## Format + constraints

- Markdown
- Max ~3000 words total (prioritize signal over completeness — tell me what's thin, skip what's boilerplate)
- If any URL 404s or is paywalled, note it explicitly
- Don't hallucinate — if you can't fetch, say so
- Return as one document I can paste back
