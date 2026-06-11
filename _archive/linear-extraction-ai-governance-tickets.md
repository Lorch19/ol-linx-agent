# Linx Claude — Linear research tickets status check

> Purpose: reusable prompt for Omri to paste into Linx Claude (or any agent with Linear access) to pull status on the AI Governance research tickets already in flight.
> Authored: 2026-04-20
> Use: paste the body below. Goal = know what's already been researched before we duplicate work.

---

## The prompt (paste everything below this line)

---

# Task: Linear research-ticket status check — AI Governance epic

## Context

I'm Omri, a PM at Linx leading the research workstream for the Agentic AI Identity epic. The implementation epic ([Governance for Agentic AI](https://linear.app/linxsecurity/project/governance-for-agentic-ai-07e946f01264/overview)) lists four research sub-tickets. I need to know if these are already in flight or dormant before I start researching the same questions.

**Assume access to Linear.** If you don't, say so and suggest alternatives.

## What I need you to do

### 1. Pull status for these 4 specific tickets

For each, give me: status (Todo / In Progress / Done / Canceled), assignee, priority, created date, last update, and a one-paragraph summary of any findings or comments posted on the ticket.

- [PRD-8563](https://linear.app/linxsecurity/issue/PRD-8563) — research: how ChatGPT stores identities to connectors
- [PRD-8564](https://linear.app/linxsecurity/issue/PRD-8564) — research: scan common IDPs for common agents apps
- [PRD-8565](https://linear.app/linxsecurity/issue/PRD-8565) — research: can we identify agents that are part of existing connectors
- [PRD-8566](https://linear.app/linxsecurity/issue/PRD-8566) — research: search for agents credentials in existing connectors

### 2. Broader Linear search

Search for tickets (open or closed in the last 90 days) matching:
- "agent" (especially agent / agents / agentic)
- "AI governance"
- "copilot" (Microsoft / Salesforce / generic)
- "MCP"
- "shadow AI"

For each hit: ticket ID, title, status, assignee, 1-line summary.

### 3. Cross-reference with the epic

From the epic [Governance for Agentic AI](https://linear.app/linxsecurity/project/governance-for-agentic-ai-07e946f01264/overview):
- How many sub-tickets are in flight vs. done vs. blocked?
- Who are the active assignees (eng + PM)?
- What are the most recent comments across all sub-tickets (last 7 days)?

### 4. Implied signal

Based on ticket status + velocity + assignees:
- Is this workstream being actively progressed, or is it parked?
- Who is the de facto engineering owner?
- Any blockers or dependencies flagged?

## Format

Markdown. Lead with "Summary in 3 bullets" then the sections above. Keep it under ~800 words.
