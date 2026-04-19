# Dashboard & Core Product UX — Feedback Report

*Author: Omri Lorch | Date: April 15, 2026 | Based on: hands-on product walkthrough*

---

## Scope of This Review

**Reviewed in depth:**
- Dashboard (landing page)
- Discover → Non-Human Identities
- Issues
- Insights & Reports (including Scheduled Reports)
- Workflows

**Not yet reviewed** (flagged for a follow-up pass):
- Discover → Human identities, Agents (detailed), Accounts, Groups, Roles, Applications, Resources
- Access profiles, Access requests, Access reviews
- Segregation of duties, Configurations, Employee management
- System logs, Integrations
- End-user surfaces: My access, My access requests, Tasks
- Linx AI
- Filtering behavior across the system (e.g., whether side panels respond to applied filters — flagged by McKinsey in Rona's research but not re-verified here)

---

## 1. Strategic View

### The one-sentence thesis
**The product is data-rich but insight-poor. Across every surface reviewed, the system tells the user *what exists* without telling them *what it means* or *what to do about it*.**

This is the unifying problem. It manifests differently in each area, but the pattern is the same: metrics, lists, and findings are presented as raw inventory rather than as decisions waiting to be made.

### Why this may matter (to validate with the team)
*Caveat: I'm in my first week at Linx, so the points below are hypotheses drawn from the walkthrough and from Rona's customer research — not conclusions. They need to be pressure-tested with people who know the history.*

- **Possible adoption risk.** From the customer research already captured (JLL's "these numbers are still scary," Feb 2026; CS narrating the dashboard across Docusign, McKinsey, Macmillan, Enpro calls), it looks like users struggle to find a starting point. If that's representative, the insight gap is a friction point on first impression.
- **Possible differentiation angle.** Competitors (SailPoint, CyberArk, ConductorOne) show comparable data density. Interpretation — saying what matters and why — could be a place Linx differentiates rather than competing on data volume. Worth testing against how the GTM team positions us today.
- **Open question on CS load.** If the dashboard needs verbal narration in most demos, is that a product readiness signal, a demo-script habit, or an expected part of enterprise onboarding? I can't tell yet. Worth asking Jonah and Kevin.

### Observations from the walkthrough
*These are first-impression observations, not judgments on the team's choices. Happy to be told I'm missing context.*

- **Data depth is clearly a strength.** The breadth of metrics reflects a mature underlying data model. The question I have isn't about collecting less — it's whether the interpretation layer is keeping pace.
- **Insights & Reports feels closest to the pattern I'd want elsewhere.** Pre-built categories (Orphan accounts, Recently joined users, HRIS/IDP inconsistencies) package insight rather than raw data. Curious why that mindset hasn't propagated to Dashboard / Issues / Workflows — product sequencing? different owners? different maturity?
- **Visualizations themselves are well-chosen.** Heatmaps, trend lines, donuts aren't the issue. The framing around them is what I'd probe.

### Patterns I kept noticing
Three recurring patterns across the surfaces I reviewed — stated as observations, open to being corrected:

1. **Prioritization / guided action seems light.** Most screens present data at equal visual weight. It was unclear to me what I should do first on any given screen. (Possibly intentional — different users want different starting points.)
2. **Findings read as descriptions of the detection, not explanations of risk.** Detections often restate the query that generated them rather than explaining impact or recommended action. Open question whether deeper pages go further than the side panels I saw.
3. **Past decisions don't seem to be resurfaced.** 2,206 resolved issues exist but aren't visible when triaging new ones. Whether to use that history is a real product question — I'm flagging the absence, not prescribing the fix.

---

## 2. Tactical Feedback by Area

### 2.1 Dashboard (landing page)
- **Insight-poor, not data-heavy.** Volume is fine; nothing answers "what should I do right now." Reinforces Ganesh Gembali (McKinsey): the numbers behave like a report, not a working tool.
- **Flat visual hierarchy.** 0 critical / 409 high / 313 medium / 652 low all rendered at equivalent weight. High-severity should dominate.
- **No "top actions" pattern.** No priority strip, no guided triage, no "since your last visit" delta to help admins understand whether the environment is getting better or worse.

### 2.2 Discover → Non-Human Identities
- **Inventory, not a decision tool.** The list shows metadata (name, origin, created date) but no operational context. A user cannot tell what `karpenter-2023…` does, what it touches, or what breaks if they revoke it.
- **Blast radius flagged but not explained.** "33 / 3,262 high blast radius" creates anxiety without enabling action. No visibility into *why* those 33 qualify.
- **Same gap for Agents.** If the product doesn't know their purpose, the user can't decide. Needs clarification: UI gap (data exists but isn't shown) or product gap (data doesn't exist)?

### 2.3 Issues
- **Findings lack "so what" and "now what."** The Finding field restates the detection rule rather than explaining actual risk or recommended action.
- **1,383 flat issues = alert fatigue.** Same issue type repeated across similar identities, each treated as a separate task. No consolidation into cases or investigations. *Caveat: batching is only valuable if (a) it matches the user's workflow and (b) grouping logic is accurate — bad grouping is worse than no grouping.*
- **No learning from history.** 2,206 resolved issues exist, but the user triaging issue #1,384 has no visibility into how the org handled the previous similar ones. Institutional knowledge is trapped.

### 2.4 Insights & Reports *(strongest section overall — refinements only)*
- **Exported reports repeat the "no why" problem.** The Sensitive Agents Excel is a raw data dump. A manager receiving it has to reverse-engineer why these agents are flagged.
- **No in-dashboard report preview.** Trial-and-error loop to verify that a scheduled report looks right.
- **Report creation locked to existing saved queries.** No way to create a net-new query from within the report creation flow — breaks the workflow.

### 2.5 Workflows
- **Statistics exist but aren't insight.** The donut chart shows accumulated pass/fail. It doesn't answer: is this workflow getting worse? Is the failure rate normal? What's the trend?
- **Flat list doesn't scale.** No grouping by type, application, status, or team.
- **Workflow detail doesn't explain what the workflow does or why it fails.** Same pattern — data without context.
- **Too many clicks to reach a failure reason.** Four levels deep (list → detail → run → step → error). No aggregated failure reasoning at the top (e.g., "800 of 1,000 failures share the same root cause").
- **No batch handling of failures.** The user must repeat the drill-down for every failed run individually.

### 2.6 Workflow Builder (trigger configuration)
- **Triggers are overwhelming.** Many trigger options with no logical grouping. A user has to scan the whole list linearly — no categories, no prioritization.
- **Customer-facing issues inside the trigger list.** There are visible broken or problematic items in the trigger catalog itself, which erodes trust for any user building their first workflow.
- **Per-integration workflow setup is unclear.** Why does the user need to configure a separate workflow per integration when the underlying logic is often the same (e.g., "revoke dormant accounts")? Open question: technical limitation or design choice?
- **Nothing is self-explanatory.** No tooltips, no inline help, no preview of what a workflow will actually do or affect before it runs. Especially risky for destructive actions (revoke, deprovision).
- **Direction worth exploring: AI-assisted builder.** Given the number of options and the decision-tree nature of workflow creation, a "build with AI" flow — user describes intent in plain language, system proposes a workflow, user reviews a decision tree before activating — could reduce the cognitive load more than incremental UI fixes like tooltips or grouping. Flagging as a direction, not a prescription.

---

## 3. One Idea Worth Exploring — Different Views for Different Users

One thing that came up repeatedly while reviewing the product: the dashboard seems to assume a single audience, but in practice there are probably several very different users looking at the same screen — e.g., a CISO wanting posture and trends, an identity admin wanting a task queue, an employee wanting to see their own access and pending requests.

Rona's research already has a seed of this (Noam Blatt at Vega: *"How can they see their own Linx dashboard without all the admin things?"*). The redesign might be a natural moment to ask whether the dashboard should branch into role-scoped views rather than try to serve everyone at once.

Flagging this as a direction to consider, not a recommendation.

---

## 4. Open Questions to Resolve Before Acting

Places where my read could be wrong, or where the answer meaningfully changes the shape of any redesign:

- **Primary dashboard audience.** If it's one persona, prioritization changes everything; if it's several, the branching view idea above becomes more relevant.
- **NHI context availability.** Is missing blast-radius explanation a UI problem or a data problem? Severity shifts accordingly.
- **Issue detail depth.** Does the full issue page go deeper than the side panel I saw? If yes, a lot of my Issues feedback is really about the summary panel, not the whole feature.
- **Workflow scale in practice.** Typical deployments with <15 workflows: flat list is probably fine. With 50+: grouping matters more.
- **Report consumers.** Who actually reads exported reports — analysts (raw data OK) or managers/auditors (need narrative)?
- **Grouping trust.** If Issues were grouped into cases, what's the fallback when the grouping gets it wrong?

---

## 5. Common Thread — One Lens to Consider

If the redesign keeps one lens from this feedback, I'd suggest this one:

> **Every number, list, and finding should earn its place by answering one of three questions: What does this mean? What should I do about it? What have we done about similar things before?**

Offered as a framing device, not a rule.

---

*This report will be expanded with a second pass covering the unreviewed surfaces listed above.*
