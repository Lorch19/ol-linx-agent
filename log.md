# Linx Daily Log
<!-- Type 2-3 bullets under today's date after meetings. That's it. -->
<!-- The evening extract task handles the rest. -->

## 2026-03-29
- System initialized. Pre-onboarding phase begins. Day 1 at Linx: April 12.
- Competitive positioning complete: Linx scored 65/100, governance depth (2.5/5) is the #1 gap.
- "Only we" draft: human + NHI + agentic identities in a single graph with autonomous remediation.
- Advisor v2 upgrade: daily log + morning briefs + accountability scorecard + customer-first orientation.
- 5 missions created: pre-onboarding, learn & map, contribute & validate, own & lead, platform strategy.
- OpenClaw agent available for background tasks — future: connect to Linx Slack/Drive/Notion for real-time signals.

### Gartner PDF Takeaways
- NHI growth is table stakes — the real risk is orphaned/unmanaged identities orgs don't know exist. Discovery is broken.
- Security teams buried in repetitive work — but IGA buyers are often GRC/compliance, not SecOps. Pain = audit prep, cert cycles, SoD proof. Don't pitch ops efficiency in a compliance room.
- Agentic AI governance is urgent NOW, not "the future." Orgs deploying agents today with zero controls.
- Customers confused by tool sprawl. Key buyer question: "Am I replacing SailPoint/CyberArk?" Answer: "You keep both. Linx is the unified graph layer." Must say this in 20 seconds.
- Credential sharing = #1 NHI risk. Fix: OAuth delegation + short-lived scoped tokens. Linx's technical wedge.
- SoD enforcement doesn't exist for AI agents — governance gap Linx can own.
- IGA category being redefined (Gartner Market Guide): provisioning → ISPM + NHI + agentic. Incumbents retrofitting. Linx is native to new definition.
- ODMs: measure IAM by business outcomes (risk reduced, violations caught), not ops metrics (tickets closed).
- Core principle: be customer-obsessed. Be the voice of the customer in the halls. Customer-first, always.

## 2026-04-12 — DAY 1
- First day at Linx. Received onboarding plan from Dor — 5-week structured ramp.
- Reviewed onboarding plan: strong on sequencing (identity foundations → customers → competitors → own a domain). Gap: no explicit Series B context or customer conversation counting.
- Deep dive into identity foundations: category zoo (IGA/ISPM/ITDR/PAM/CIEM/NHI/CNAPP), 7 IGA use cases, authorization models (RBAC/ABAC/ReBAC), SaaS governance challenges, NHI risk landscape.
- Created `knowledge/identity-foundations.md` — living cheatsheet for identity concepts + terms.
- **Insight: SoD for AI agents** — nobody enforces segregation of duties for AI agents today. If an agent can read sensitive data AND send emails externally = toxic combination. Potential Linx whitespace to own.
- **Key internal context from Omer (lead PM):** Linx is drawing away from NHIs at the moment. Need to validate strategic reasoning with Dor on Thursday.
- Agent setup: most tools connected to work Claude. Decision: keep agent repo on personal GitHub (private), get explicit OK from leadership this week.
- Competitors to study: ConductorOne (docs — best public IGA documentation), Lumos (main competitor on human identities), Noma Security (AI governance approach).
- Tomorrow: start playing with the Linx platform.

### Sarit Meeting (CTO)
- Got onboarding to-do list: dev env permissions (Keren Aloni), Hi Bob, Figma, Linear, ClickHouse, OpenSearch, Slack channels, Loom, Grain, Datadog.
- Key people to meet (intro meetings needed): Ben Experience (UX/discovery), Dor Dadoush (app/IGA), Gil (group lead), Shon (AI TL), Amir Ben Ami (head of AI), Omer Blachman (connectors), Yoad, Ofek (analytics), Ori (architecture), Refael (dev ninja), Amir Hamanachem. Shadow Mor (PM).
- **STRATEGIC OPPORTUNITY: Linx wants to become more AI-native** — initiatives around delivery lifecycle, customer research, market research. This is a natural fit for Omri. Goal: position to lead this initiative. Discuss with Dor Thursday.
- Grain tip from Sarit: watch customer recordings and Niv's meetings, but only up-to-date ones.

## 2026-04-13 — DAY 2
- Day 2. Still learning identity fundamentals and testing the system. Not yet in full Week 1 execution mode.
- Identity security landscape taxonomy internalized: IGA (governance/lifecycle), ISPM (posture/hygiene), ITDR (real-time threats), PAM (privileged accounts), CIEM (cloud entitlements), NHI (bots/service accounts).
- Reviewed 4 Linx specs/epics to build a ticket-writing quality standard: Groups (epic), Security Assessment for POV (feature spec), Governance platform (vision doc), End-user Tasks (system design). Saved to references/ticket-examples.md.
- Key finding across all 4: no success metrics in any spec. Also: prioritization often punted, named personas rare. These are the patterns to fix first.
- Three document types emerging: feature epic, feature spec, vision/platform doc. Each needs a different template — one Skill won't fit all.
- Customer calls recorded in Grain (noted for future reference).

## 2026-04-14 — DAY 3
- First 1:1 with Dor (VP Product, direct manager). Strong meeting.
- Shared two main observations: (1) product is tech-out not customer-first, (2) AI-powered autonomy gap — both in product and how we work.
- Dor's 3-month success criteria: (1) Own product lifecycle of assigned domain (TBD), (2) Successfully demo the product, (3) Lead cross-company strategic initiatives, (4) Company AI transformation.
- #4 (AI transformation) is a standout signal — Dor sees Omri as the driver for this on Day 3.
- Dashboard review in progress in parallel session.
- Grain ↔ Datadog research complete — no native connector, Pipedream is best path for POC.

### Ideas to raise with Dor (next 1:1)
- **SailPoint/Saviynt migration tool** — a purpose-built migration tool that dramatically simplifies moving from SailPoint/Saviynt to Linx could be a game-changer for displacement deals. Want Dor's read on whether this is on the radar.
- **Autonomous solution for non-technical customers** — "we take care of you end-to-end." Could be a winning wedge for customers who don't have mature IAM teams. Hypothesis: this segment is underserved by SailPoint (too complex) and ConductorOne/Lumos (still require admin effort).

### Ceremony framework + process observations
- Product ceremony framework built: feature intake, story spec, ship review templates with agent automation. Portable — adapt to whatever Linx already has.
- Observation: Linx's sprint/task management is not scalable — relies too heavily on people and manual coordination. Future initiative: formalize and automate. Need to see the actual workflow internally first.
- Insight: many customer requests are small/simple. Opportunity to use AI to resolve these automatically and decrease dev team burden. Evaluate once inside: what % of requests are automatable? What's the current triage flow? Could be a quick win with high visibility.

## 2026-04-15 — DAY 4
- Completed first-pass product UX review of Linx Dashboard. Scope covered: Dashboard (landing), Discover → Non-Human Identities, Issues, Insights & Reports (incl. Scheduled Reports), Workflows.
- Not yet reviewed: Human identities, Agents (detailed), Accounts/Groups/Roles/Applications/Resources, Access profiles/requests/reviews, SoD, Configurations, Employee management, System logs, Integrations, end-user surfaces (My access, Tasks), Linx AI, filter-behavior tests.
- Core thesis from review: **data-rich but insight-poor.** Every surface tells the user what exists without telling them what it means or what to do. Three recurring patterns: (1) no prioritization/guided action, (2) findings are descriptions not insights, (3) no institutional memory (past resolutions not leveraged).
- Strongest section: Insights & Reports — pre-built categories show the team knows how to package insight. Weakest: Issues (1,383 flat items, alert fatigue) and Workflows (4-click drill-down to failure reason, no aggregation).
- Consolidated report drafted for Rona (new designer owning Dashboard redesign). Stored in `artifacts/dashboard-review-2026-04-15.md`. Second-pass planned to cover unreviewed surfaces.
- Open questions to resolve before acting: primary dashboard persona (CISO vs analyst), whether missing NHI context is UI gap or data gap, typical workflow count per deployment, who actually consumes exported reports.

## 2026-04-16 — DAY 5
- **ESCALATION — AI Assistant reliability:** Sony Pictures (Michael Melo) has been escalating for 6+ months. False confirmations ("report created" when it wasn't), accuracy failures on security-critical tasks. Michael advising Crunchyroll CTO against using the assistant.
- Michael requested user-configurable accuracy guardrails — accuracy over helpfulness toggle.
- Linx response (Dor + Niv): root cause at AI/backend data boundary, committed to stricter QA, less appeasing personality, twice-daily eng status reports.
- Logged to `customer-intel.md` + `artifacts/ai-assistant-reliability-problem-statement.md`. Need to assess: are other customers experiencing the same silently?

## 2026-04-19
- Added Workflow Builder (trigger config) feedback to dashboard review: trigger catalog is overwhelming and has broken items, per-integration setup feels redundant, no tooltips/previews, possible direction = AI-assisted builder with decision-tree preview.

### Dor news — AI leadership mandate (Product)
- **Dor has formally assigned Omri to lead AI at Linx from Product.** Materialization of Dor's 3-month success criterion #4 on Day 6. This is a substantial scope expansion — likely reframes what "own a domain" means for Omri.
- **Scope has three buckets:**
  1. **Current product AI** — AI Assistant + Co-Pilot. Both need significant work. Research into root causes, invest in better understanding the problem, and build capabilities to monitor it. (Sony Pictures escalation = first visible litmus test.)
  2. **Future customer AI** — what AI can do for Linx customers, how it evolves, how we govern it. Forward-looking product strategy.
  3. **Company AI (internal)** — Omri also wants to lead internal AI. Includes "the Operating System we designed" (agent has no context on this yet — to be shared), automations, insights visibility across the system.
- **Omri's top priority this week (explicit):** customers first, then competitors, then continue learning the system. Aligned with customer-first discipline.
- **Agent repo approval (Dor/Niv):** Omri says this will take more time — deprioritize, don't chase.
- **Skills transformation ("Operator Kit" → "Linx Native"):** Omri is running this as low priority in a separate project. Agent has no visibility into that work. Flag to re-sync when Omri surfaces it.

### Open questions Omri needs to answer before the scope is executable
- Scope sequencing across the three buckets for first 30 days
- Decision rights: sponsor (Dor), eng allocation, budget, advisory vs P&L-style ownership
- Delineation with Amir Ben Ami (Head of AI) and Shon (AI TL) — product/eng line
- Success metrics at 30/60/90 for "leading AI"
- Does "AI" become the assigned domain, or is this on top of a separate domain?
- Share context on the internal "Operating System" — agent is blind

### Week 2 plan locked (short week: Yom HaZikaron + HaAtzmaut Apr 21-23)
- **Stance:** too early for a 30/60/90 — Omri is still learning. Starting posture = learn the domain + shadow Sony. Agent will challenge + guide on cadence.
- **Priority order:** Customers → AI Assistant/Sony → Competitors.
- **Primary bucket = Customers, capability-first framing.** Not "ask for a list of customers" but "build the capability to know which customers use which features/systems self-serve." Apply the same pattern across customer-learning asks.
- **Secondary = Sony shadow mode.** Read transcripts, attend eng status reports, 30-min with Shon or Amir Ben Ami, private POV. Decision on ownership posture by Apr 26.
- **Dashboard:** Rona has first-pass feedback; second-pass + open questions reframed as Omri's self-learning gap (not Rona blocker). Deferred to Apr 30.
- **Ada / internal OS context received (file: `Ada - PM - OS/ada-strategic-context-2026-04-19.md`).** Confirms bucket 3 of Dor's mandate is shipping Ada-style agent inside Linx. Not a side project — half the job.
- **Commitments cleanup applied:** Noma research and 30-sec pitch drill dropped. Competitive matrix cold recall re-dated to May 2. ConductorOne/Lumos docs re-dated to Apr 26.

### Session close-out notes (end of 2026-04-19)
- **Notion extraction ran successfully in Linx Claude against Omer's 15-page list.** Output is extensive and highly valuable — includes AI architecture (4-tier maturity model, 6-layer stack), PRD standards, Autopilot press release quotes, Sony RCA details, Agentic AI Identities epic, Cycle 79 priorities, and Product Roadmap planning. **Output NOT yet saved to this repo** — Omri to paste into a fresh session for ingestion.
- **Top 3 findings that change the plan (for next session to act on):**
  1. **A vs B governance question resolved: both, parallel.** Option A (Linx's own AI — Autopilot/Co-Pilot) is owned by Omer Efroni. Option B (governing customers' AI agents — "Agentic AI Identities" epic) is a real, in-design product owned by a different PM (likely Mor), with an 8-month milestone plan. Omri's mandate covers both. Option C (compliance wedge) is absent — decision or oversight?
  2. **Sony has two layers, don't conflate.** Aug 27, 2025 outage = deployment-process failure (Pydantic validation, 19-min fix). Still Draft 7 months later. Separately, Michael Melo's 6-month escalation is about AI output quality (false confirmations). Bucket 1 framing needs to separate process discipline from AI quality.
  3. **No written AI strategy / POV document exists.** Closest is Sep 2025 Orchestration Capabilities (stale) + Mar 2026 Autopilot press release. This is Omri's first real deliverable opportunity — a Linx AI POV reconciling A + B.
- **Other material findings flagged for next session:**
  - AI Workshop Feb 8 NYC page returns 404 — ask Amir Thursday
  - No 2026 OKRs doc found — ask Dor
  - AI team capacity = 16 weeks/qtr (smallest of all teams) while "every team does AI" is the mindset — structural tension
  - PM ownership split (Omer → Autopilot, Mor → Agentic Identities) — Omri's new charter needs org clarity with Niv
  - Most PRDs lack success metrics — Reviewer Agent PRD has strong testing section worth copying as a template
  - Peloton opted out of an AI feature ("Disable AI Role & Permissions Descriptions") — customer AI resistance signal, not just Sony
  - Marketing-reality gap: Autopilot press release claims launch while underlying epics (Multi-Agent System, Drifter, Profile Tuner) still "In Product Design"
- **State of the session:** Agent froze mid-save of the extraction artifact (analysis paralysis on sequencing). Omri rightly called it and closed session. Next session priority: ingest the extraction output → artifact file, update `knowledge/linx-product.md` (was INCOMPLETE, now has real data), update `references/stakeholder-map.md` (add Mor as Agentic AI Identities owner), update `customer-intel.md` (clarify Sony two-layer nuance + add Peloton AI opt-out).

### Amir Ben Ami 1:1 (same day)
- Met same-day. Thursday (Apr 23) scheduled for AI Assistant deep dive. Fastest possible path into bucket 2 of the AI mandate — no weeks of intro-chasing.
- Omri's read on his own gap: he is not an AI expert. Wants agent's help building toward right values — value-driven, anti over-engineering, best practices, trust through small valuable wins.
- Agent's additions to that philosophy (for codification): lead through evaluation not architecture; be customer voice in every AI decision; own failure-mode vocabulary (hallucinations, confidence collapse, compound errors); build a public "what we don't do" list; weekly AI-product practice reading cadence (Willison, Husain, Shankar, Yan, Lee); guard ambition against small-wins drift.
- Watch-outs flagged: "don't over-engineer" shouldn't mean under-engineering reliability (Sony cautionary tale); "small wins" shouldn't become small thinking; trust compounds slowly, collapses fast — don't over-promise early.
