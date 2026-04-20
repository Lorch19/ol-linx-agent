# Customer Intelligence
<!-- Auto-populated from log entries by evening extract task. -->
<!-- One section per customer. Patterns section at bottom. -->

## Peloton
- **Stage:** Existing customer (VIP; April 2025 sign; "Winning Peloton against Okta IGA" Linear project)
- **Cares about:** SOX-driven quarterly UARs across 20+ apps, connector reliability, AI trustworthiness
- **Ticket volume:** 378 Linear needs — most operationally demanding in portfolio. ~130 connectors + ~110 UAR + ~60 analytics + ~25 AI + ~25 UX + ~15 feature requests.
- **Key contacts:** Jonah Peterson (CS) · Niv Goldenberg (exec sponsor) · Matan Haimovitch (product owner)
- **Risk level:** AT RISK as of Apr 19 — escalation email ahead of Q4 UAR kickoff Apr 20.
- **AI-specific signal:**
  - Disabled AI UAR recommendations (EXP-1515) after EY auditor pushback on "maybe"/"likely" language
  - CON-3064 (Apr 14) — Sonnet model upgrade shipped a Shopify conversion regression that Peloton caught before Linx did
  - Apr 19 hallucination loop on AI Spreadsheet Conversion agent (user flags hallucination → agent says "Perfect! I've corrected" → same error repeats across 4 sessions)
  - Apr 5 Niv Goldenberg thread: audit team rejecting AI-generated permission descriptions that use "maybe"/"likely"
- **Concrete product asks (Apr 5 — small-win candidates):**
  - Report showing AI-sourced vs API-sourced descriptions (source attribution)
  - Remove "maybe"/"unlikely" language from AI-generated permission descriptions
- **Open questions:**
  - Are hallucinations concentrated in AI Spreadsheet Conversion agent, or broader?
  - What's the path to re-enabling AI UAR recs with audit-friendly language?
- **Last contact:** Apr 19 2026 (escalation)

## Wiz
- **Stage:** Existing customer (also angel investors via founders)
- **Cares about:** TBD
- **Open questions:** None yet
- **Last contact:** N/A

## Aramark
- **Stage:** Existing customer (Fortune 150, ~260K employees, ~1M lives). Tier marked "Standard" in Linear — likely should be VIP.
- **Cares about:** Enterprise-scale UAR, license expansion, new business
- **Key contacts:** Lindsay Bernard (sales) · Stephan Simmons, Greg Pedone, Jonah Peterson (CS) · Sarit Reiner Frumkes (strategic)
- **Status:** $72.8K expansion closed Apr 17 2026 — only 2026 Closed Won. New business deal open but at-risk (Grain call score 2/5).
- **Key story:** Survived losing CISO + deputy CISO during the original sales cycle (~Oct 2025). Celebrated internally as "biggest team effort."
- **Open questions:** Why Standard tier on a Fortune 150 anchor account? New business deal 2/5 despite expansion — what's the disconnect?
- **Last contact:** Apr 17 2026 (expansion close)

## Discount Tire
- **Stage:** Existing customer
- **Cares about:** Access request automation, lifecycle management, unified identity visibility, DevOps access, NHI governance
- **Key pains (from Rona's call review, Apr 2026):**
  - "Unmanageable" ticket queue — manual access requests creating massive backlog
  - Inefficient offboarding leaving dormant/orphaned accounts (zombie identities)
  - Fragmented visibility — identity data scattered across "islands" (AWS, Azure, Okta, AD), no unified effective permissions view
  - Complex DevOps access needs that standard manual workflows can't handle
  - Manual compliance/certification process — time-consuming, error-prone, hard to audit
  - Non-human identity risk — service accounts flying under the radar
- **Competitor sentiment:** Expressed desire for "modular" or "creative" pricing; feels legacy vendors force all-or-nothing licensing tiers
- **Open questions:** Pricing sensitivity — how modular can Linx go?
- **Last contact:** Pre-April 2026 (Rona's call review)

## Achieve
- **Stage:** Existing customer
- **Cares about:** Access request automation, role mining, JML lifecycle, ServiceNow replacement, access reviews
- **Key pains (from Rona's call review, Apr 2026):**
  - Service desk overload — 5-6 FTEs dedicated solely to manual access request tickets
  - No automated role discovery — role definition is a "huge issue," managers overwhelmed during reviews
  - ServiceNow contract expiring early next year — under pressure to find replacement for access requests/approval workflows
  - Fragile data flows — ADP, Boomi, Okta, ServiceNow create complex flows with no single source of truth
  - Audit pressure — auditors pushing for full user base reviews (currently only privileged accounts), fear of overwhelming managers
  - Okta Workflow limitations — hitting ceiling on JML automation
- **AI-specific signal (added Apr 20):** ~8 AI on-calls in last 12 months — was NOT on prior AI-quality radar. Wrong Applications-by-department data; 24h UAR recommendation hang (AI-358, APP-1847).
- **Key use cases (from call):** User access reviews, role mining, JML automation, access request automation. Role mining seen as critical first step.
- **Open questions:** ServiceNow expiration timeline — opportunity for Linx to fill the workflow gap?
- **Last contact:** Pre-April 2026 (Rona's call review)

## New American Funding
- **Stage:** Existing customer
- **Cares about:** TBD
- **Open questions:** None yet
- **Last contact:** N/A

## WWT (World Wide Technology)
- **Stage:** Prospect / evaluating
- **Cares about:** Privileged access visibility, NHI governance, AI citizen developer security, deprovisioning completeness
- **Key pains (from Rona's call review, Apr 2026):**
  - Privileged access sprawl — can't track admin/privileged access distribution across SaaS and on-prem
  - Non-interactive account risk — service accounts and API keys holding high privilege without oversight
  - Substantial technical debt in both InfoSec and IT orgs, complicating new security controls
  - Incomplete deprovisioning — "leaking" access where terminated users retain access to some systems
  - AI "citizen developer" security — hundreds of employees building AI agents (Copilot, Windsurf) with unmanaged access levels
  - No quantifiable risk visibility — can't prioritize which identity risks to remediate first
  - Rigid PAM (Delinea) — selected for security, not usability
- **Open questions:** How does Linx handle citizen developer / AI agent access governance?
- **Last contact:** Pre-April 2026 (Rona's call review)

## Choice Bank
- **Stage:** Prospect / evaluating
- **Cares about:** Regulatory compliance, automated provisioning, SoD, cost-effective IGA
- **Key pains (from Rona's call review, Apr 2026):**
  - Under regulatory consent order — must stop manual provisioning by June 2024 deadline (may already be past)
  - Manual provisioning errors going undetected for up to a year between review cycles
  - Legacy IGA (SailPoint) seen as impractical — cited $4.5M Huntington Bank example with Accenture
  - Team of only 5 people — can't support tools requiring heavy maintenance or external consultants
  - Legacy banking software (FIS/Horizon/Avid Ascend) lacks modern APIs — forced into RPA workarounds
  - Decentralized provisioning/deprovisioning — no single source of truth, moving to Azure + Paylocity
  - Toxic combinations (SoD) — high risk from permission combos, no automated way to flag them
- **Competitor sentiment:** SailPoint explicitly rejected as too expensive and complex for their size
- **Open questions:** API gap for legacy banking apps — can Linx handle RPA-style connectors?
- **Last contact:** Pre-April 2026 (Rona's call review)

## Summit Utilities
- **Stage:** Existing customer
- **Cares about:** Access review automation, contractor visibility, usability
- **Key pains (from Rona's call review, Apr 2026):**
  - Access reviews were "extremely manual" with no structured program
  - Identity blind spots — lack of visibility into contractors and "partial" offboarding
  - Security risk from human error — someone forgets to click a button or revoke a credential
  - Platform complexity from previous tools (implied — contrasted with praise for Linx usability)
- **Customer quote signal:** Aaron from Summit praised Linx as "very clean" and standing above others in usability
- **Open questions:** None immediate — positive reference candidate?
- **Last contact:** Pre-April 2026 (Rona's call review)

## Aviatrix
- **Stage:** Prospect / evaluating
- **Cares about:** Deprovisioning completeness, cloud identity visibility
- **Key pains (from Rona's call review, Apr 2026):**
  - Found a user deprovisioned 6 months ago who still had active AWS access — classic zombie identity
  - Desire for "rapid deployment" and "day-one visibility"
- **Open questions:** Cloud-native environment — what's the full stack?
- **Last contact:** Pre-April 2026 (Rona's call review)

## monday.com
- **Stage:** Existing customer (VIP; August 2025 sign)
- **Cares about:** Full IGA platform — Access Requests, Access Profiles, JIT provisioning, workflows, custom automation. 160 SaaS apps targeted Q1 2026.
- **Archetype:** Co-development partner, not just a customer. "Monday Success Plan" Linear project tracks 40+ committed features with quarterly deadlines (Terraform support, SCIM-to-Linx, Slack bot integration, resource-specific JIT, SIEM integration).
- **Ticket volume:** 360 Linear needs — ~100 connectors + ~100 AR/UAR + ~60 feature requests + ~30 analytics.
- **Key contacts:** Mor Shabi (product owner) · Omer Efroni (PM/Eng) · Niv Goldenberg (exec sponsor)
- **AI-specific signal — POSITIVE REFERENCE:** #customer-monday Jan 26 (Mor Shabi): IT team used AI Assistant to identify who should access a new system — *"results were spot on."* Underused reference asset.
- **Risk:** Not churn — under-delivering on 40+ committed roadmap items could erode trust.
- **Open questions:** What's the delivery track record on the Success Plan? What's at-risk today?
- **Last contact:** Apr 14-15 2026 (connector issues, on-call tickets)

## Precor
- **Stage:** Existing customer (sibling to Peloton — dual-tenant setup)
- **AI-specific signal:** AI stuck in error loop on Spreadsheet Conversion (CON-3099, In Progress). Disabled AI UAR recommendations alongside Peloton (EXP-1515).

## SHL
- **Stage:** Active escalation (Mar 2026)
- **AI-specific signal:** AI recommendation accuracy flagged — daily-use admins (Netskope engineers) incorrectly surfaced for "further review." Kevin Cronin raised blocking concern on Sage integration.
- **Source:** #esc-shl-march-2026 (Jonah, Mar 18)

## GSK
- **Stage:** Prospect (Feb 2026)
- **AI buy-criteria (Tyler Peters' deep-dive, Feb 3):** *"AI clearly resonated, but only with strong guardrails. They pushed hard on hallucination control, role-based access to agent actions, and full auditability and versioning of AI-generated configurations. AI must be assistive and explainable, not autonomous."*
- **Strategic signal:** Confirms HITL stance is defensible competitive positioning, not a limitation.

## WestRock
- **Stage:** Prospect (Feb 2026)
- **AI buy-criteria:** SOX-driven. "Auditor-defensible evidence artifacts" around AI recommendations is a buy criterion.
- **Source:** #opp-westrock Feb 11

## Sony Pictures (incl. Crunchyroll)
- **Stage:** Existing customer (enterprise — media/entertainment)
- **Key contact:** Michael Melo
- **Cares about:** AI Assistant accuracy, security-critical task reliability, user-configurable accuracy guardrails
- **Risk level:** HIGH — ESCALATION. Michael actively advising Crunchyroll CTO against using Linx AI Assistant.
- **Issues (6+ months):**
  - False "report created" confirmations — requires complete rework
  - Persistent accuracy failures eroding trust
  - Requested user-configurable accuracy guardrails (accuracy > helpfulness toggle)
- **Internal response:** Dor Renert + Niv Goldenberg acknowledged root cause at AI/backend data boundary. Committed to stricter QA, less "appeasing" assistant personality, twice-daily engineering status reports.
- **Open questions:**
  - What is the current status of the engineering fixes?
  - Has Michael seen improvement since the commitments were made?
  - Are other customers experiencing the same issues silently?
  - What's the churn risk timeline for this account?
- **Last contact:** April 2026 (escalation ongoing)

---

## Patterns & Signals
> Source: Rona Shaanan's discovery synthesis (Apr 2026), 6 customer calls (Achieve, WWT, Choice Bank, Summit, Discount Tire, Aviatrix) + Sony Pictures escalation

### Four Universal Pain Themes

1. **Zombie Identity Crisis (Partial Offboarding)**
   Every customer is haunted by users "terminated" in HR/IDP but still holding active, high-privilege access in downstream apps (AWS, GitHub, Snowflake). Aviatrix found a user deprovisioned 6 months ago still active in AWS. This is the most visceral, demo-able pain point.

2. **Manual Overhead & Ticket Fatigue**
   Universal struggle with unmanageable ticket queues. Teams drowning in manual access requests and lifecycle changes. Achieve dedicates 5-6 FTEs just to keep up. High operational cost, slow time-to-access for employees.

3. **Privileged Sprawl Blind Spot**
   All six struggle to map the "blast radius" of their identities. No visibility into who actually has admin-level permissions vs. who needs them — especially NHIs (service accounts) and external/guest users.

4. **Audit Anxiety vs. Manager Burnout**
   Regulatory pressure forcing expanded access reviews, but no tooling to do it efficiently. Without automated role mining or AI recommendations, expanding reviews = rubber-stamping + increased risk.

### Cross-Customer Signals
- **AI Assistant reliability is a multi-customer issue, not Sony-only** (confirmed Apr 20). Affected customers by on-call volume: Sony (~10) · Achieve (~8) · monday.com (~9 mixed) · DT (~6). Peloton + Precor disabled AI UAR recommendations (EXP-1515). SHL has escalation. CON-3064 regression shipped two weeks ago.
- **monday.com is a positive AI reference** Linx doesn't leverage — Mor Shabi Jan 26: "spot on." Underused.
- **Prospects have explicit AI buy-criteria.** GSK: "hallucination control, RBAC on agent actions, auditability + versioning, explainable not autonomous." WestRock: "auditor-defensible evidence artifacts." Regulated industries (FEA-247): BYO LLM — embedded models unacceptable even with no-training DPA. Confirms HITL stance is defensible positioning.
- **Product risk:** False confirmation pattern (saying "done" when it's not) is the most damaging failure mode for a security product — trust issue, not UX.
- **Pipeline story (parked Apr 20 pending RevOps dashboard):** 63% of open deals at Stage 0-1, only 4 at Stage 3+. Losses dominated by "dead project" + "went dark" (only 1 confirmed competitive loss: Smurfit Westrock $250K). No new logo in 4 months.

### Summary
Customers are **data-rich but insight-poor**, struggling with a manual "Identity Gap" that leaves them vulnerable to both security risks and regulatory failure.
