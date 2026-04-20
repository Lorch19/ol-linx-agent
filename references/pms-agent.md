# PMs Agent (Linx internal)

Product-focused assistant built for the Linx team. Slack interface. Launched April 2026.

## When to route to it

- **Connector / codebase questions** — how a feature is implemented, where logic lives, frontend + backend. Faster than asking an engineer.
- **Customer data questions** — queries against prod ArangoDB across all tenants. Distributions, stats, per-tenant configs, feature usage counts.
- **Cross-checks of code vs. data** — "the spec says X, what does the DB actually show?"
- **Web research** — competitor pages, public docs, specific URLs.
- **Scheduled reminders / recurring reports** — daily digests, periodic checks.

## When NOT to route to it

- Anything needing Linear / Slack (channel content) / Datadog / Grain — no integrations there.
- Write operations — read-only everywhere.
- Cross-session memory — maintains a memory file but not transcript continuity; re-prime context each session.

## How to ask well

- Be specific. "Check Peloton's role descriptions in the roles table" > "check role stuff."
- Point it at files/paths when you know them.
- For data questions, name the tenant or scope explicitly.
- Combine code + data in one ask when useful ("what does code say UAR coverage means, and what does the DB show for Peloton's UAR setting?").

## Use cases for the AI Governance mandate

- "Which connectors today call OAuth-app discovery endpoints?" (scope current capability)
- "How many Linx tenants have [Salesforce / M365 / Google Workspace / ServiceNow] connected?" (prioritize target apps for June demo)
- "Pull the public API docs for Salesforce Agentforce / M365 Copilot Studio admin APIs." (speed up external research)
- "For each competitor (Zenity, Astrix, Noma, Prompt Security, Credal), fetch their product pages and extract the discovery claims." (competitor sweep)
