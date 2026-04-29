# Linx Claude — MCP Gateway Demo Validation Prompt

Use this prompt with the Linx Claude instance that has MCP access to the live Linx product.
One prompt, six questions. Copy-paste as-is.

---

## Prompt

I'm building a demo for Identiverse 2026 around Linx's MCP Gateway. I need to validate which screens exist in the current product vs need to be built. Please check each of the following against the live Linx environment and answer with: **EXISTS** / **PARTIAL** (describe the gap) / **MISSING**.

**1. Agent Registry — Inventory > Agents view**
Does a screen exist that shows a table of registered agents with the following columns visible per row: agent name, human owner, platform/source badge, policy/access profile attached, last activity timestamp?

**2. Live Activity / MCP Call Stream**
Does a screen exist that shows a real-time or near-real-time stream of individual MCP tool calls (one row per call), with: the human owner visible, the agent name, the specific tool called (e.g. `update_opportunity`), the outcome (ALLOWED / DENIED), and the policy reason inline? If a Logs view exists, describe what columns it currently has.

**3. Audit Event Detail — Chain Rendering**
When drilling into a single MCP call event, does the detail view render the full delegation chain: human → agent → tool → policy → outcome? Or does it show a flat log entry without chain context?

**4. Salesforce Connector — Human User Activity Ingestion**
Does the Linx SFDC connector ingest activity performed by human users directly in Salesforce (not just activity performed by agents via the gateway)? Specifically: if Sarah Cohen logs into Salesforce and calls `update_opportunity`, does a row appear in Linx's activity stream attributed to Sarah as a human user?

**5. Access Profiles / Policy Management**
Does a screen exist where named agent policies (like `pm-agents-readonly`, `vp-sales-agents-write`) can be defined, edited, and attached to agents per application? What is it called in the current product?

**6. Integration Tab — MCP Servers + Tool Inventory**
Does a screen exist showing the MCP servers connected to the gateway, and the specific tools each server exposes (e.g. Salesforce: `update_opportunity`, `read_account`, `create_lead`)? Tool-level visibility, not just server-level.

---

Please answer each question with EXISTS / PARTIAL / MISSING, then one sentence of detail. If PARTIAL, describe the specific gap. If anything requires a screenshot to assess, flag it.
