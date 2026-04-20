# Linx Claude — Slack channel extraction for #governance-of-agentic-ai

> Purpose: reusable prompt for Omri to paste into the Linx Claude account (which has Slack access beyond what PMs Agent offers) to pull structured context from the AI Governance channel.
> Authored: 2026-04-20
> Use: paste the body below into Linx Claude. Review output. Paste back to this agent for ingestion into `knowledge/ai-governance-epic.md`.

---

## The prompt (paste everything below this line)

---

# Task: Structured extraction from Slack channel `#governance-of-agentic-ai`

## Context

I'm Omri, a PM at Linx leading the research workstream for the Agentic AI Identity epic (IGA + visibility + JIT for customer AI agents). The implementation ticket is owned by Mor Shabi. Niv (CPO) is engaged. I need to build situational awareness of what's been discussed in the `#governance-of-agentic-ai` channel without reading every message. This is internal research, not a customer-facing deliverable — prioritize completeness over polish.

**Assume access to Slack channel content.** If you don't have access, say so clearly and suggest the best alternative path.

## What I need you to do

Read the channel `#governance-of-agentic-ai` (last 60 days). Extract and organize the following:

### 1. Participants and engagement pattern

- Active contributors (name + rough post count / last active)
- Leadership presence (did Niv / Israel / Dor / Sarit / Amir post or react? On which threads?)
- Silent watchers worth knowing about (people @-mentioned a lot)

### 2. Decisions and positions

- Any decisions made in-channel (scope, non-goals, platform picks, milestones)
- Any strong positions taken (e.g., "we're doing X," "we're NOT doing Y")
- Any disagreements or tensions surfaced

### 3. External resources shared (the source list)

For each link shared, give me:
- URL
- Who shared it and when
- What they said about it (1-line quote or paraphrase)
- Category: competitor page / analyst report / blog / standards doc / partner tool / YouTube / other
- Whether anyone replied or reacted

### 4. Open questions and unresolved threads

- Questions that went unanswered
- Research tickets mentioned (Linear issues like PRD-XXXX)
- Vendor conversations in progress (e.g., Microsoft, 1Password, Astrix)
- Customer mentions (which customers have been referenced in the channel and in what context)

### 5. Timeline of key moments

Chronological bullet list of the most significant events in the channel — decisions, source drops, vendor updates, customer signals. One line each.

### 6. Implied gaps

Based on what's discussed vs. not discussed — where is the thinking thin? (e.g., if shadow agents are mentioned but never operationalized; if a competitor is missing; if customer pull is absent.)

## Format

Markdown. Lead with "Summary in 5 bullets" then the sections above. Max ~1500 words — prioritize signal over completeness.

## What NOT to do

- Don't paraphrase every message — sample the important ones
- Don't quote Slack messages verbatim with full names if sensitive (names of internal people are fine; treat customer names normally)
- Don't speculate beyond what the channel actually says
