# Linx Notion Extraction — AI + Product Context

> Purpose: reusable prompt for Omri to paste into the Linx Claude account (which has Notion access) to pull structured context on AI strategy, product state, PRD standards, and roadmap — without Omri having to guess which pages matter.
> Authored: 2026-04-19
> Use: paste the body below into Linx Claude, review output, paste back to agent for ingestion.

---

## The prompt (paste everything below this line)

---

# Task: Structured extraction from Linx Notion

## Context
I'm Omri, a new PM at Linx (joined Apr 12, 2026). Dor just asked me to lead AI at Linx from the Product side — covering current products (AI Assistant, Co-Pilot), future customer AI, and internal company AI. I need to build context fast from our existing Notion documentation rather than reinvent what already exists or blunder into conversations that reveal gaps in knowledge I should have.

**This is a research task for me, not a customer-facing deliverable.** Prioritize accuracy and completeness over polish.

## What I need you to do

Search the Linx Notion workspace and identify the **most useful 8–15 pages** that will help me answer the questions below. For each page, extract the key content I need. Then synthesize across all of them.

## The questions I need answered

### A. AI strategy and POV at Linx (highest priority)

1. **Does Linx have a written POV on AI governance?** If yes, which of these does it align with?
   - **Option A:** Governing *Linx's own* AI products — reliability, accuracy, safety of Assistant and Co-Pilot (internally focused)
   - **Option B:** Governing *customers' AI agents* — a customer-facing product offering (SoD for agents, agent identity, permissions, audit)
   - **Option C:** Governance-as-compliance wedge — helping customers meet EU AI Act / NIST AI RMF / ISO 42001 requirements
   - **Or a mix / undefined.** If it's a mix, are the options viewed as convergent or distinct workstreams?
2. What is the current AI product architecture — layers, capabilities, what each one does?
3. What is the current AI roadmap? (I've heard there's a Feb 8, 2026 prioritized roadmap — find it.)
4. What AI Assistant / Co-Pilot reliability issues are documented, with any root-cause analysis? Especially look for anything related to the Sony Pictures / Michael Melo escalation.
5. Is there an AI Workshop page, AI strategy document, or AI vision document? Surface them.
6. What is the current relationship between the Assistant and AI Agents? (Orchestration? Separate products?)

### B. PRD and spec writing standards

1. Find 2–3 PRDs, feature specs, or requirements documents that meet ALL of these criteria: (a) authored in the last 6 months, (b) referenced by others as a model or template, (c) resulted in shipped features. If fewer than 3 meet all criteria, surface whatever qualifies and flag the gap.
2. What structural sections are mandatory vs. optional?
3. Do these PRDs include quantitative success criteria? If yes, what format — target + threshold + kill criterion, or just aspirational numbers, or prose descriptions?
4. Is there a written PRD template or writing guide? If yes, find and extract it.
5. Voice: first-person, "we/our," third-person? How formal? How much detail per section?

### C. Company strategic context

1. 2026 company OKRs or strategic priorities
2. Any AI-specific OKRs or company-level AI bets
3. Known cross-company initiatives that touch AI

## How to decide what to extract

- **Relevance** — directly helps answer one of the questions above
- **Recency** — prefer pages updated in last 90 days unless they're foundational/canonical
- **Authority** — pages owned or authored by leadership (Dor, Niv, Israel, Amir Ben Ami, Shon, Sarit) or explicitly marked as approved
- **Specificity** — concrete beats abstract. An actual PRD beats a "how we think about PRDs" post.

## Output format

For each page you extract, use this structure:

---

### Page: [Title]
- **URL:** [Notion link]
- **Owner / Author:** [if visible]
- **Last updated:** [date if visible]
- **Category:** [AI-Strategy / AI-Architecture / AI-Reliability / AI-Roadmap / PRD-Example / Company-Strategy / Customer-Escalation / Other]
- **Why it's important:** [1–2 sentences — what specific question does this answer for me]
- **Key content:** [3–10 bullets or direct quotes; use original language when Linx-specific terminology matters]
- **Open questions or gaps:** [what's unclear, what's missing, what raises follow-up]

---

## Synthesis section (at the end of your response)

After all the page extracts, close with a synthesis:

### 1. Linx's current POV on AI governance
- Which option (A/B/C/mix) does the documented thinking align with?
- If mix: are they viewed as convergent or parallel?
- If no written POV exists: **say so explicitly — that's a data point.**

### 2. Top 5 things I should know about AI at Linx before my Thursday deep dive with Amir Ben Ami
- Priority-ranked, with source page reference each.

### 3. PRD writing standards summary
- Template or not
- Mandatory sections
- How metrics are handled
- One-sentence style guide I can follow

### 4. Gaps and contradictions
- Topics where no documentation exists but should
- Contradictions between pages (e.g., two different AI strategy claims)
- Pages that look stale and may be misleading

### 5. What I'm still missing
- What should I ask Dor / Amir / Niv that isn't answered in Notion?

## Ground rules

- **Be selective.** 8–15 pages total. Don't extract everything.
- **Skip drafts and abandoned docs** unless they're the only source on a topic.
- **Extract, don't summarize.** Prefer direct quotes over paraphrase. Don't restate Linx's POV in generic words — use Linx's own language verbatim.
- **Don't interpret.** If a page says X, report X. Save your interpretation for the synthesis section, and label it clearly as interpretation when you do.
- **Gaps are data.** If something doesn't exist, say so explicitly.
- **Flag contradictions.** Where two pages disagree, quote both and call it out.
- **No sales polish.** This is internal research; dry + accurate beats fluent + vague. If a sentence feels smooth, check if it lost specificity.

---

End of prompt.
