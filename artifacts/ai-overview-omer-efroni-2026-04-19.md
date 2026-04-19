# AI Overview — Notes from Omer Efroni (Leaving PM)

> Date: 2026-04-19
> Source: Omri ↔ Omer Efroni, AI onboarding session
> Status: Omer leaving Linx — capture everything before he's gone. Ask for Workshop Notion + Figma before last day.

---

## Recording

- Zoom: https://zoom.us/rec/share/a5aObBlkQ2lB3lvL29fv8Qna_cV5yYDmhgHr6z-qaf6gbJiOgr4OixyHR2glslTi.XglPsKI_-hU2g7e_
- Passcode: `YJVq4P^X`

---

## The AI Layers (canonical architecture)

1. **Investigation**
2. **Analytics** (classifier, Suggestions)
3. **Configuration** (or recommendation — review recording to confirm)
4. **Actions**
5. **Autonomous agents**

## Competitive Read (Omer's view)

- **Lumos** — our fierce competitor on AI offering
- **ConductorOne** + **Veza** — play at layers 1 and 2 (Investigation, Analytics)

## Current Technical State

- MCP exists but **doesn't cover all actions yet**
- **No context management** — significant gap
- **No API querying** — currently running via SQL scripts
- Learning customer setups (proactive or from their data + learning loops) — partial
- Assistant is **admin-only today** — gated

## Strategic Open Questions

- How can we make Assistant the main UI for (some) users?
- Assistant also orchestrates AI Agents — but agents have no learning loops yet
- What does end-user Assistant unlock vs. admin-only?

## Roadmap — Priorities as of Feb 8

1. Drifter Agent + CoPilot alignment
2. Taking action — 100% operation coverage (provision, deprovision, etc.)
3. Quality
4. Tuner Agent
5. RBAC — Definition + Architecture
6. Taking Action — 100% configuration coverage (create UAR, reports, etc.)
7. UAR Reviewer Agent
8. UX Richness + Artifact view
9. Access Graph Creation

## Directional Ideas Discussed

- Integrated Apps without APIs → **Browser CoPilot**
- Better results / improved outcomes
- Support all Linx features — Assistant covers the whole dashboard
- Proactiveness + AI insights for better CX
- Future: **users create their own Autonomous Agents**

## Tips from Omer

- **Sit with Uri** (likely same person as "Ori" in stakeholder map — architecture)
- **Think of another Agent** to add to the list
- **Better visibility on customer usage and behaviors**

## To Ask Omer Before He Leaves

- AI Workshop Notion page
- Figma link

---

## Agent Commentary — What Stood Out

### Biggest strategic signals
1. **"No context management"** is a root cause of AI Assistant reliability issues (Sony). Context engineering = the first-order problem, not model tuning.
2. **SQL scripts instead of API querying** is a scaling bottleneck. Every "can the Assistant answer X?" is gated on someone writing SQL.
3. **Admin-only gating** is a category question, not a config toggle. If Assistant moves end-user, that's a category-shifting product move. Mark for Dor discussion.
4. **Lumos = fierce AI competitor** confirms the competitive matrix gap. Hands-on Lumos recon matters more now than ConductorOne this week.
5. **"Think of another agent"** is an invitation to shape the roadmap — not a throwaway comment.

### Open questions to bring into Thursday deep dive with Amir
- What's the root cause of "no context management" — architectural debt, missing infra, or not prioritized?
- Why SQL over API — deliberate or tech debt?
- What % of Sony's failures trace to the context gap vs. the accuracy/helpfulness tuning?
- Where does the Feb 8 roadmap stand today (2.5 months later)?
- What drives admin-only gating — trust, UX, security?

### Reading before Thursday
- Feb 8 roadmap doc (ask Amir/Omer where it lives)
- AI Workshop Notion page (ask Omer)
- Figma (ask Omer)
- Zoom recording above — at least skim

### "Another Agent" brainstorm prompt (for Omri)
Given the list above, the obvious whitespace:
- **Reliability / QA Agent** — monitors other agents' outputs, catches false confirmations. Addresses Sony directly.
- **Onboarding Agent** — learns a new customer's setup (fills the context gap Omer named).
- **Migration Agent** — ties to the SailPoint/Saviynt idea from your Dor 1:1.
- **Context / Memory Agent** — addresses the "no context management" gap explicitly.
Would bring one well-framed agent idea to Thursday, not five half-baked.
