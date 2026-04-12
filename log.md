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
