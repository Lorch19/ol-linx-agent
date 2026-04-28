# Use-Case → Requirements Mapping — Walkthrough Session

**Use this in:** Claude Code, fresh session, branched from `main`.
**Target file:** `artifacts/use-case-requirements-mapping-2026-04-27.md`
**Goal:** Omri internalizes every section of the mapping artifact, challenges what's weak, locks the May 8 scope inputs.

---

## Paste this at the start of the session

I want to walk through `artifacts/use-case-requirements-mapping-2026-04-27.md` section by section. The artifact was produced as a first-pass synthesis — your job is to make sure I understand every claim, push back when I rubber-stamp, and capture edits inline as we go.

**Rules of engagement:**

1. **One section at a time.** Don't summarize the whole artifact. Don't jump ahead.
2. **For each section, do four things in order:**
   - (a) State what the section is FOR — its job in the document
   - (b) Walk me through the content — the actual claims being made
   - (c) Ask me one specific question that tests whether I understand or agree
   - (d) Capture my answer as an edit (or a confirm) — patch the file the same turn
3. **Push back when I'm rubber-stamping.** If I say "looks good" without engaging, ask me a harder question — name a competitor, a customer, or a milestone the section depends on, and ask me to defend the call.
4. **No new analysis until I've signed off the previous section.** If I want to discuss a finding from §6 while we're on §3, hold it — note it as a deferred question and come back.
5. **End state:** I either sign off the artifact as-is, or we produce a clearly marked diff. Either way, commit the result to a new branch (`claude/mapping-walkthrough-<date>`) and merge to main before session end.

**Sequence:**

- §1 — The 33 Gartner requirements (just confirm I can name the 7 categories without scrolling)
- §2 — The 10 user scenarios (confirm I can group them by Dor's 3 chapters)
- §3 — Mapping table (the heart — go UC by UC)
- §4 — Reverse coverage (focus on the FOUNDATIONAL and ZERO-COVERAGE rows)
- §5 — Decisions (P0/P1/foundational/descope — challenge me on each)
- §6 — Stress test (5 findings — make me defend or amend each)
- §7 — Three things to take to Dor (confirm or rewrite)

**Before you start:** read the file end-to-end so you have full context. Then start at §1 and ask me the gating question.

**Do NOT:**
- Re-do the synthesis from scratch — the first-pass is the starting point, not the target
- Lecture me on the framework — I have the Gartner doc open
- Skip §6 — those findings are the most actionable part

---

## Files you should have in context

- `artifacts/use-case-requirements-mapping-2026-04-27.md` (the target)
- `references/gartner-833725-iam-for-llm-agents.md` (the 33 reqs source)
- `knowledge/notion-extraction-ai-governance-2026-04-26.md` (the 10 UCs source)
- `building-blocks.md` (Dor's 3 chapters + status)
- `discovery-plan.md` (open scope-blocking questions Q1, Q4-Q7)

If the context-loading protocol is in effect, propose loading those files and wait for my confirmation before starting.

---

## What "done" looks like

By session end:
1. Each of §3 through §7 either has my **green check** in a new "Reviewed 2026-MM-DD: confirmed / amended" line, or has been edited
2. Three decisions from §7 (P0/P1 split, UC11 add/drop, R28 close/accept) have a **proposed answer** I can take to Dor — even if not final
3. The artifact is committed to a new branch and merged to main
