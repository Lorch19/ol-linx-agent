# NotebookLM Setup — AI Governance Learning Notebook

> Written: 2026-04-24. Follow this once to set up the notebook. Estimated time: 20 min.

---

## Step 1 — Create the notebook

Go to [notebooklm.google.com](https://notebooklm.google.com) → **New Notebook** → name it "AI Governance — Linx".

---

## Step 2 — Add repo files (upload as documents)

Download these 6 files from your local repo at `~/ol-linx-agent/` and upload each as a document source:


| File                                                  | What it gives the notebook                         |
| ----------------------------------------------------- | -------------------------------------------------- |
| `artifacts/ai-governance-master-brief-part-a.md`      | Problem space, agent types, MCP, buyer questions   |
| `artifacts/ai-governance-master-brief-part-b.md`      | Competitive landscape, Gartner framing, 6 camps    |
| `knowledge/ai-governance-core.md`                     | Epic scope, milestones, user scenarios, open items |
| `knowledge/ai-governance-deep.md`                     | 10 capabilities, agent types, identity model       |
| `references/gartner-833731-summary.md`                | Analyst validation, SoD line, incumbent gap        |
| `artifacts/ai-agent-identity-sme-brief-2026-04-21.md` | Full market + competitive brief (most synthesized) |


**How to download:** in Finder → Go → `~/ol-linx-agent/` → navigate to each file → drag to Desktop → upload.

---

## Step 3 — Add websites (paste URL directly)

In NotebookLM click **+ Add Source → Website**. Paste each URL:

### Analyst frameworks


| URL                                                                        | What it covers                                                                  |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `https://softwareanalyst.substack.com/p/emerging-agentic-identity-access`  | AIAP framework — "SSO for agents", 4 governance phases, Zero Standing Privilege |
| `https://softwareanalyst.substack.com/p/the-future-of-just-in-time-trust`  | JIT-TRUST framework, 144:1 NHI ratio source, Ephemeral Access Grants            |
| `https://softwareanalyst.substack.com/p/runtime-security-for-ai-agents-an` | Runtime security, MCP stats (53% insecure, 8.5% OAuth), 3 agent archetypes      |


### Technical foundation


| URL                                            | What it covers                                            |
| ---------------------------------------------- | --------------------------------------------------------- |
| `https://modelcontextprotocol.io/introduction` | What MCP is, how it connects agents to tools, ecosystem   |
| `https://unmitigatedrisk.com/?p=1075`          | Ephemeral-attested school — the counter-argument Niv 🙏'd |


### Competitor product pages


| URL                                                                   | What it covers                                                                                   |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `https://www.token.security`                                          | Token Security AI agent lifecycle — ownership, orphan decommission, intent-based least privilege |
| `https://www.sailpoint.com/identity-library/agent-identity-security/` | SailPoint Agent Identity Security datasheet (Sep 2025)                                           |


**Saviynt:** no working public URL found for their AI agent security page. If you find the RSAC post or product page, add it — their "See / Govern / Enforce" framing + AI Access Gateway announcement is the highest-value competitive source missing from this notebook.

---

## Step 4 — Generate Audio Overview

Once all sources are added:

1. Click **Notebook Guide** (top right)
2. Click **Audio Overview → Generate**
3. Let it process (~2 min)
4. Download or listen directly
5. **Listen once on your commute.** That's your baseline.

---

## Step 5 — Useful Q&A prompts to start with

Paste these into the NotebookLM chat to test your knowledge and find gaps:

- "What are the 3 buyer questions a CISO asks Linx, and which milestone covers each?"
- "What is Saviynt's AI agent security story and where are they vulnerable?"
- "Explain the difference between node-primary and ephemeral-attested identity models. Which did Linx choose and why?"
- "What does Gartner say about segregation of duties for AI agents?"
- "What is MCP and why is it a security risk?"
- "What are the 4 AIAP governance phases from SACR?"
- "Which competitors are named in Gartner 833731 as strong, and who is notably absent?"

---

## Keeping it current (ongoing)

When Claude writes a new artifact (weekly scan, updated brief, competitive teardown):

1. Download the updated file from `~/ol-linx-agent/artifacts/`
2. In NotebookLM → Sources → delete the old version → upload the new one

Takes 2 min. Do it when you see a commit notification from Claude.