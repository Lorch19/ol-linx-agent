# Gap-recovery draft — autonomous reconstruction of 2026-04-28 → 2026-06-11
**generated: 2026-06-11 · sources: Grain meeting summaries + Google Calendar. Linear: auth-gated (not read). Slack/Gmail: not queried.**
**Status: DRAFT — not canonical until Omri grades and approves. Append approved entries to log.md; corrections feed tests/TEST-PLAN.md Tier 2g scoring.**

## Proposed log.md entries

### ## 2026-06-11 — Gap recovery + Identiverse demo lock (Dor/Omri prep call)
- Role shift since Apr 28 (calendar evidence): Omri embedded in AI team (daily standup, Shawn), owns "Autopilots weekly updates" (self-organized, Thu 12:00), personal GW-usage monitoring block each morning since ~May 31. Primary workstream now Autopilots/Drifter + MCP Gateway demo. [calendar]
- Demo prep w/ Dor (Jun 11, 29 min): production screens ONLY — dev env unstable. Format: recorded video-first flow + live MCP gateway demonstration, scripted pauses to highlight enforcement timing. [Grain 2026-06-11]
- Added non-MCP entitlements (Salesforce + Slack/Linear) to an Access Profile — unified-experience story. [Grain 2026-06-11]
- Open before event: gateway + logging bugs to fix. Deliverable: 2 reusable slides + opening talking points for sales. Owner: Omri. [Grain 2026-06-11]
- Logistics: Mor attends Identiverse (Jun 15–19); Omri remains TLV (Jun 15 calendar: product coffee, Shawn weekly, Astrix intro). [calendar]
- Today 14:00: Autopilots brainstorm w/ Amir + Nov (novro@monday.com) — Drifter feedback + next-autopilot ideas. monday.com = active design partner on Drifter. [calendar]

### ## 2026-06-10 — Roadmap weekly (Dor-led)
- Priority debate: finish MCP Gateway demo→production identity experience vs. shift to full agent-based model. UAR/compliance timing Q2-vs-Q3 put to stakeholders. [Grain 2026-06-10]
- UAR 2.0: two parallel tracks (campaign UX + new UAR types); Tools-Based UAR = immediate priority, progress report in a week. [Grain]
- Downstream Provisioning elevated to top priority — map Linx identity fields for auto account creation; backend core cycle 83, edge cases cycle 84. [Grain]
- User-management M2 demo readiness: include planned AI assistant in design, define access constraints even if phased. [Grain]

### ## 2026-06-10 — JIT is live enough to demo
- OneSpan working session: live demo of JIT AWS access — entitlement policy creation, request/approval, immediate revocation, Slack/API/UI surfaces (Teams coming). Niv + Dor present. POC design: separate accounts, default read-only, JIT admin elevation. [Grain]
- Contrast w/ Apr-28 repo state ("where is JIT design actually happening?" — open question): answered by shipping. Commitments item on JIT scope can close.

### ## 2026-06-10 — Internal decisions (Omri solo-recorded sessions, Hebrew)
- Tool-access UX: avoid forced reconnects on access-profile updates; accept ≤5-min session-swap window; treated as QX concern; removing tools to validate in prod + test. [Grain]
- DCR/Okta integrations: prioritize DCR-supported apps (Slack, Wix) as low-effort MVP connectors; consent flows over static admin creds; GitHub app/tenant config so actions run as end user; PRs + manifest updates next. [Grain]

## Proposed commitments.md additions
- [ ] 2 reusable demo slides + opening talking points for sales — before Identiverse (Jun 15) — self [→ log 2026-06-11]
- [ ] Gateway + logging bugs fixed before event — Jun 14 — self + eng [→ log 2026-06-11]
- [x] Close stale Apr-28 item "where is JIT design happening" — answered: shipped + demoed to OneSpan Jun 10

## Proposed customer-intel.md additions (customers only — per data discipline)
- **monday.com**: Nov (novro@) giving direct Drifter feedback; brainstorm w/ Omri+Amir 2026-06-11; design-partner posture on Autopilots. Also on Identiverse partner-outreach list. [calendar + Grain]
- **Aramark** (existing account): implementation session 2026-06-10 — SailPoint debugger limitation, Delinea/Secret Server ingestion needs dev work, eng call w/ Brent next. [Grain; Omri not present — secondhand]

## Known blind spots
- Linear (auth-gated): anything decided in tickets/comments is missing.
- Slack + Gmail: not queried — written decisions missing.
- Meetings without Grain recordings or with Omri off-record.
- May 2026 almost entirely dark: earliest fetched Grain page covers Jun 10–11 only; deeper backfill = paginate Grain (~5 more calls) on request.
