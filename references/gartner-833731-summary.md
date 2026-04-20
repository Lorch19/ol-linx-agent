# Gartner G00833731 — "How to Securely Delegate Access From Humans to AI Agents"

**Published:** 20 August 2025 | **Authors:** Nathan Harris, Akif Khan
**Licensed to:** NIV@LINXSECURITY.IO (Niv's copy)
**Full extracted text:** `references/gartner-833731-extracted.txt`

## One-line summary

Gartner's framing is **access delegation, not discovery**. The research is about *how* humans should delegate access to AI agents safely — focused on policy + architecture, not on inventorying agents. This is a different lens than Linx's discovery-first approach and worth noting in positioning.

## Key findings

1. **Credential sharing is the practice to prohibit.** Having an AI agent ask a human for credentials and use them is "exceptionally high-risk." Breaks audit, nonrepudiation, SoD.
2. **MCP explicitly enables credential sharing today** — called out as a risk vector.
3. **Two viable delegation paths:**
   - **Option A: Use incumbent AM tools** — OAuth-based delegation. Named vendors with "strong" capability: **IBM, Ping Identity, Transmit Security**. Notably absent: Okta, SailPoint, CyberArk, Microsoft Entra.
   - **Option B: Build.** Requires shared-service architecture, easy revocation, flexible scope, NOT controlled by the agent itself, NOT embedded in back-end apps.
4. **Embedded agents (our tier-1):** unlikely to have separate identity records. "Not, by itself, a critical security issue." Traceability + nonrepudiation still required. **Validates Linx's M1 exclusion of tier-1 embedded copilots.**
5. **Third-party agents on customer side:** two approaches — restrict (block 3p) or allow-with-enforced-delegation. Mentions bot-management vendors evolving to detect AI agents.

## Strategic Planning Assumptions (ammunition for internal case)

- By 2028, **90% of orgs** that allow human-to-agent credential sharing will have to redo the design due to security/compliance.
- By 2028, **90% of digital commerce orgs** allowing this will see a **3× increase** in ATO + first-party fraud.

## What this means for Linx's positioning

1. **SoD-for-AI-agents wedge is analyst-endorsed.** Gartner explicitly calls out: "allowing the agentic AI software itself to manage what it is authorized to do on behalf of humans... violates segregation of duties and will not pass any audit." Direct validation of Linx's Apr 12 SoD insight.
2. **IBM / Ping / Transmit own the AM delegation story.** Linx is not in that race (not an AM vendor). Our lane is **discovery + governance of agents already delegated to**, not the AM-layer delegation plumbing.
3. **Incumbent gap:** Gartner does NOT name a strong ISPM/IGA vendor for AI agents. That's the empty lane. SailPoint, CyberArk, Okta, Saviynt are absent from the named list. Linx can plant a flag before the incumbents catch up.
4. **Positioning statement idea:** "Linx is the inventory + governance layer for agents already delegated to enterprise systems — not the delegation protocol, but the posture management on top." Tight lane.

## Competitive implications

- **Ping Identity** is now a real competitor for the delegation layer (Niv already dropped their agentic AI page in Slack — the link we have) — cross-check their "identity management for agentic AI" product vs. Linx's discovery story.
- **Transmit Security** not currently in our competitive-matrix. Worth scoring.
- **IBM** — low risk, slow-moving, worth noting presence.
- **CyberArk** — not named by Gartner as strong in delegation. Their "Secure Agentic AI" positioning may be marketing-ahead-of-capability.

## Related Gartner docs to track down (if available via Niv's license)

- "Critical Capabilities for Access Management" — vendor ranking
- "How to Use Bot Management for IAM Use Cases" — bot-mgmt ↔ AI agent detection overlap
- "How to Secure Custom-Built AI Agents" — homegrown agent security
- "Guidance for Modernizing Authorization Architecture" — referenced for Option B build

## One thing to challenge

Gartner's scope is narrower than Linx's. They cover **human → agent delegation** (a specific interaction pattern). Linx's scope covers **agent inventory across org**, regardless of delegation pattern. The two overlap in audit/SoD but are not the same problem. Don't let Gartner's framing shrink Linx's story.
