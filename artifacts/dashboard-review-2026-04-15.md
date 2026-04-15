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

### Why this matters strategically
- **Adoption risk.** Security buyers don't bounce off a dashboard because there's too much data. They bounce because they can't figure out where to start. This reinforces what customer research has already surfaced: JLL's "these numbers are still scary" (Feb 2026) and the fact that CS has to narrate the dashboard in nearly every demo (Docusign, McKinsey, Macmillan, Enpro).
- **Differentiation risk.** Competitors (SailPoint, CyberArk, ConductorOne) show comparable data density. What can set Linx apart is *interpretation* — "here's what matters, here's why, here's what others in similar situations did." That layer is currently absent.
- **Scalability of CS.** Verbal narration on every onboarding call is a product gap, not a training problem. It will not scale post-Series B.

### What's fundamentally working
- **Data depth and coverage are strong.** The breadth of metrics reflects a mature underlying data model. Nothing suggests the product needs to collect *less* — it needs to interpret *more*.
- **Insights & Reports section is the closest to "right."** The pre-built categories (Orphan accounts, Recently joined users, HRIS/IDP inconsistencies) show the team knows how to package insight. That mindset needs to propagate across the rest of the product.
- **Visualizations themselves are well-chosen.** Heatmaps, trend lines, donuts are not the issue. The issue is what surrounds them.

### What's fundamentally off
Three recurring patterns, ordered by severity:

1. **No prioritization or guided action.** Every screen presents data at equal visual and structural weight. Nothing answers "what should I do right now and why?"
2. **Findings are descriptions, not insights.** Detections restate the query that generated them rather than explaining risk, blast radius, or recommended action.
3. **No institutional memory.** The system doesn't leverage what the organization has already decided — past resolutions, workflow outcomes, common handling patterns — to inform the current user. Every user starts from zero every time.

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

---

## 3. Stress Tests (open questions to resolve before acting)

These are places where the feedback could be wrong, or where severity depends on facts not yet confirmed:

- **Primary dashboard audience.** CISO (wants posture/trends) or analyst (wants task queue)? The answer changes prioritization of nearly every recommendation.
- **NHI context availability.** Is missing blast-radius explanation a UI problem or a data problem? Severity shifts accordingly.
- **Issue detail depth.** Does the full issue page go deeper than the side panel reviewed here? If not, it's a fundamental gap; if yes, it's a summary-panel fix.
- **Workflow scale in practice.** Typical deployments with <15 workflows: flat list is fine. With 50+: real problem. Need data.
- **Report consumers.** Who actually reads exported reports — analysts (raw data OK) or managers/auditors (need narrative)?
- **Grouping trust.** If Issues get grouped into cases, what's the fallback when the grouping gets it wrong?

---

## 4. Common Thread — One Design Principle to Carry Forward

If the redesign keeps one principle from this feedback, it should be:

> **Every number, list, and finding should earn its place by answering one of three questions: What does this mean? What should I do about it? What have we done about similar things before?**

Everything else is detail.

---

*This report will be expanded with a second pass covering the unreviewed surfaces listed above.*
