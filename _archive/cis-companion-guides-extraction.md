# CIS v8.1 Companion Guides — Extraction Prompt

**Use this in:** Claude.ai (web) or CoWork — anywhere you can upload PDF files.
**Output target:** Two files saved verbatim into the repo:
- `references/cis-controls-v8-1-ai-agents-companion-guide.md`
- `references/cis-controls-v8-1-mcp-companion-guide.md`

**Why this prompt:** Both guides are ~80 pages. We can't process them in Claude Code. We need structured extracts to (a) compare against Gartner G00833725's 33 requirements, (b) identify any CIS-defined controls Linx's MCP Gateway must satisfy by Identiverse, (c) flag where Astrix's CIS-alignment positioning has substance vs. marketing.

Run this prompt **twice** — once with the AI Agents guide attached, once with the MCP guide attached. Save each output to its own file.

---

## Context to paste at top of Claude.ai conversation

You are helping a senior PM at Linx Security (Series-B identity governance vendor) extract a structured analysis of a CIS Controls v8.1 companion guide. Linx is building an AI Governance / MCP Gateway product targeting Gartner's Layer 2 architecture per G00833725. The PM needs to know whether the CIS companion guide defines requirements Linx's product satisfies, partially satisfies, or fails to satisfy.

The output will be saved as a reference file in the PM's knowledge repo and used to:
- Compare CIS controls against Gartner's 33-requirement framework (G00833725) — flag overlaps, gaps, and contradictions
- Inform the May 8 scope commit (which CIS-defined requirements does P0 need to cover?)
- Counter or extend a competitor's claim that they "align with CIS Controls" (Astrix has made this claim publicly)

I am attaching the PDF: **[CIS Controls v8.1 AI Agents Companion Guide]** OR **[CIS Controls v8.1 Model Context Protocol Companion Guide]** — process whichever is attached.

---

## Extraction task

Produce a structured markdown document with the following sections. Use **direct quotes** for any control or requirement statement. Cite page numbers. **Do not infer or paraphrase requirements** — quote them.

### §1 — Document metadata

- Full title
- Version
- Publication date
- Authors / contributing organizations
- Number of pages
- Stated audience (security engineers, CISOs, vendors, etc.)
- Stated scope (what the guide covers and what it explicitly excludes)

### §2 — Executive summary (the guide's own summary, not yours)

Quote the executive summary verbatim. If there's no formal summary, quote the introduction and any "purpose" or "scope" sections.

### §3 — Mapping to CIS Controls v8.1

How does this companion guide relate to the parent CIS Controls v8.1 framework?
- Which of the 18 CIS Controls does it extend? List each affected control number and name.
- Are there any new controls or safeguards introduced specifically for AI agents / MCP that don't exist in v8.1 itself?
- Does the guide define new Implementation Groups (IG1/IG2/IG3) or use the existing ones?

### §4 — The actual controls / safeguards (the meat)

For each control or safeguard the guide defines:
- Control ID (e.g., "AI.1.1" or whatever the guide uses)
- Title
- Full text of the control (direct quote)
- Implementation Group (IG1 / IG2 / IG3)
- Asset type targeted (devices, software, users, data, networks)
- Security function (Identify / Protect / Detect / Respond / Recover)
- Page reference

If the guide has 50+ controls, list ALL of them — do not abbreviate. This is the most important section.

### §5 — Identity, access, and authorization controls (Linx-relevant subset)

Filter §4 to controls that touch:
- Agent identity / registration / discovery
- Authentication (token, mTLS, OAuth, JWT)
- Authorization (RBAC, ABAC, PBAC, scopes, fine-grained access)
- Delegation (human → agent, agent → agent)
- Logging / audit / monitoring
- Lifecycle (provisioning, deprovisioning, JML)
- Federation / cross-domain trust
- Tool-level access control (specific to MCP guide)
- Inline enforcement / proxy / gateway architecture (specific to MCP guide)

For each: quote the control, then add a one-line note on whether Linx's current scope (per `building-blocks.md`) covers it.

### §6 — Vendor expectations

Does the guide make statements about what a vendor / tool / platform must provide?
- Quote any statements that prescribe vendor capability requirements
- Distinguish between "the organization must do X" vs. "the tool/platform must support X"

### §7 — References to specific protocols and standards

Quote every mention of:
- OAuth 2.0 / OAuth 2.1 / OIDC
- SAML
- SCIM
- SPIFFE / SPIRE
- MCP (Model Context Protocol) — specific version if cited
- A2A (Agent-to-Agent)
- OpenID SSF / CAEP / AuthZen
- OAuth Token Exchange (RFC 8693)
- mTLS
- JWT / Private Key JWT
- Any other named protocol or standard

If the guide references Gartner, NIST, ISO, OWASP, MITRE, or other frameworks — quote those references too.

### §8 — Gaps and cautions the guide flags

What does the guide explicitly say is **not yet solved** or requires further work? Quote each caution.

### §9 — The single most important takeaway

In ≤100 words: if a vendor were to read this guide and use it as a buying checklist, what would they prioritize? What would they descope?

### §10 — Open questions for Linx PM

Based on the guide's content, list 3–5 questions the Linx PM should ask before May 8 scope commit. Examples of the right shape:
- "Does CIS define a 'must support tool-level RBAC' control? If yes, P0 must include 4.x." [resolves Q1]
- "Does CIS prescribe an inline enforcement architecture, or is detection-only acceptable?"

---

## Output format

Return one markdown file with sections §1–§10 in order. Use the document's page numbers in citations. **Do not summarize or paraphrase controls — always quote.** If a section has no content from the guide, write "Not addressed in this guide" rather than omitting the section.

Length expectation: 3,000–6,000 words depending on guide density. Don't truncate.

---

## What Omri does with the output

1. Save Claude.ai output verbatim to:
   - `references/cis-controls-v8-1-ai-agents-companion-guide.md` (for the AI Agents guide run)
   - `references/cis-controls-v8-1-mcp-companion-guide.md` (for the MCP guide run)
2. Update `context-index.md` — remove the **PENDING** flag, add real size estimate
3. Run a comparison pass: cross-reference §4 (controls list) and §5 (Linx-relevant subset) against Gartner G00833725's 33 requirements in `references/gartner-833725-iam-for-llm-agents.md`. Add findings to `artifacts/use-case-requirements-mapping-2026-04-27.md` as a new §8 ("CIS vs. Gartner overlap").
4. Update `knowledge/ai-governance-competitor-landscape.md` — Astrix entry — with a verdict on whether their "CIS-aligned" positioning is substantive or marketing.
5. Log in `log.md`: extraction date, key finding, and any P0-impacting requirement that was previously not on Linx's radar.
