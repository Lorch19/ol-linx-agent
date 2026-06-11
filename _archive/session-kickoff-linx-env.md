# Session Kickoff — AI Governance research (Linx env)

> Purpose: self-contained prompt to open a fresh Claude Code session in the Linx env with full context on where the AI Governance research workstream stands. Paste below as the first message.
> Authored: 2026-04-20
> Session being continued: started 2026-04-20 in personal env, on branch `claude/ai-governance-connectors-ijPsJ` (merged to main).

---

## The kickoff prompt (paste below this line)

---

Resuming the AI Governance research workstream. This session continues work from the personal env on 2026-04-20. All context lives in the repo — pull from main first, then read the handoff files.

**Mandatory first actions (in order):**

1. `git fetch --all --prune && git pull origin main` — confirm you have the latest state
2. Read `CLAUDE.md` top-to-bottom, especially the updated **"Operator-Kit Skills"** section (mandatory invocation protocol).
3. Read `SKILL.md` for the `linx-advisor` behavior set. Name the skill you're running at the start of each response.
4. Read these files in order — they contain the full state of research:
   - `log.md` — scroll to 2026-04-20 entries (multiple sub-sections on AI Governance)
   - `knowledge/ai-governance-epic.md` — spec + parent concept doc + 5 tensions + scope lock + annotated sources
   - `references/gartner-833731-summary.md` — Gartner G00833731 key takeaways
   - `references/pms-agent.md` — routing notes for the PMs Agent
5. Skim `prompts/` — three Linx Claude prompts are drafted and ready (Slack, Linear, competitor-fetch).

**Scope lock as of 2026-04-20:**
- Agent definition: tier-2 configured agents only (ChatGPT Enterprise GPTs, Copilot Studio, Cursor, N8N, ServiceNow AICT). Challengeable.
- Identity model: **node-primary** (Agent = first-class graph entity; Tool = first-class sub-entity). Edge/session-level governance deferred to M4.
- Governance depth: **IGA = visibility + JIT.** Discovery + inventory + ownership + graph (M1) plus approval-chain provisioning (slice of M3). Not behavioral analytics, not A2A, not credential lifecycle.
- Non-goals: prompt/PII security; 3rd-party internal agents (black box); shadow AI (deferred to M4 — tension flagged).
- **Stakeholder signals:** Niv (CPO) personally engaged in `#governance-of-agentic-ai` Slack. Mor Shabi owns implementation.

**What's unresolved (to close before deep execution):**
1. Tier-1 embedded copilots in or out? (concept doc implies in, ticket implies out)
2. Customer pull — is there a named Linx customer asking for this, or is it vendor-push? Maria-the-CISO is a persona, not a source.
3. June = which milestone? (8-month roadmap means June = M0 or early M1)
4. Shadow AI non-goal vs. Clutch's entire wedge — competitive-messaging risk
5. Depth vs. breadth across the 10 capabilities — which 2–3 is Linx actually betting on?
6. Mor / Omri ownership split
7. PRD-8563/64/65/66 — may be in-flight research; status unknown

**Immediate priorities for this session:**

A. **Check whether WebFetch works from Linx env on competitor sites.** From personal env, every external URL (Astrix, ConductorOne, Oasis, Ping, Duo, CyberArk, CrowdStrike, Clutch) returns 403. If Linx env has different network egress, WebFetch directly and skip the 16-URL Linx Claude prompt. Try `https://astrix.security/use-cases/ai-agent-discovery-and-governance/` first as a probe.

B. **Run the 3 Linx Claude prompts in parallel** (if you have access to Linx Claude from here, or guide user to paste them):
   - `prompts/slack-extraction-ai-governance-channel.md`
   - `prompts/linear-extraction-ai-governance-tickets.md`
   - `prompts/linx-claude-competitor-fetch.md`

C. **Apply `pm-frameworks/problem-statement` from operator-kit** (github.com/Lorch19/operator-kit/pm-frameworks/problem-statement) to sharpen the problem statement for the AI Governance workstream. Write output to `artifacts/problem-statement-ai-governance-2026-04-20.md`. Follow the 8-step invocation protocol in CLAUDE.md.

D. **Apply `domain-tools/competitive-teardown` from operator-kit** to Astrix + ConductorOne (the two most-referenced competitors so far). Write output to `artifacts/competitive-teardown-astrix-2026-04-XX.md` and similar for ConductorOne. Stress-test each per the protocol.

**Branch discipline:**
- Create a new feature branch for this session: `claude/ai-governance-<session-slug>-<shortid>`
- Commit + push after every durable deliverable (per CLAUDE.md persistence discipline)
- Merge back to main before session end (session-start hook enforces this)

**Do NOT:**
- Restart scope debates that are already locked (see "Scope lock" above) unless bringing new evidence.
- Invent operator-kit skill names not in the repo.
- Leave artifacts uncommitted between turns.
- Stop with a Stop hook warning about uncommitted changes.

**Expected first response from you:**
- State which skill you're running (linx-advisor)
- Confirm you pulled + read the handoff files
- Probe WebFetch on one competitor URL to determine routing (direct vs. paste-back)
- Propose the next concrete step (problem-statement draft, or paste-back flow, or both)
- Ask me one sharp question if anything in the state above is ambiguous to you

Go.
