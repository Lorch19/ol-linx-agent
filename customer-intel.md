# Customer Intelligence
<!-- Auto-populated from log entries by evening extract task. -->
<!-- One section per customer. Patterns section at bottom. -->

## Peloton
- **Stage:** Existing customer
- **Cares about:** TBD — no direct conversation yet
- **Open questions:** None yet
- **Last contact:** N/A

## Wiz
- **Stage:** Existing customer (also angel investors via founders)
- **Cares about:** TBD
- **Open questions:** None yet
- **Last contact:** N/A

## Aramark
- **Stage:** Existing customer (Fortune 500)
- **Cares about:** TBD
- **Open questions:** None yet
- **Last contact:** N/A

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

---

## Patterns & Signals
> Source: Rona Shaanan's discovery synthesis (Apr 2026), 6 customer calls (Achieve, WWT, Choice Bank, Summit, Discount Tire, Aviatrix)

### Four Universal Pain Themes

1. **Zombie Identity Crisis (Partial Offboarding)**
   Every customer is haunted by users "terminated" in HR/IDP but still holding active, high-privilege access in downstream apps (AWS, GitHub, Snowflake). Aviatrix found a user deprovisioned 6 months ago still active in AWS. This is the most visceral, demo-able pain point.

2. **Manual Overhead & Ticket Fatigue**
   Universal struggle with unmanageable ticket queues. Teams drowning in manual access requests and lifecycle changes. Achieve dedicates 5-6 FTEs just to keep up. High operational cost, slow time-to-access for employees.

3. **Privileged Sprawl Blind Spot**
   All six struggle to map the "blast radius" of their identities. No visibility into who actually has admin-level permissions vs. who needs them — especially NHIs (service accounts) and external/guest users.

4. **Audit Anxiety vs. Manager Burnout**
   Regulatory pressure forcing expanded access reviews, but no tooling to do it efficiently. Without automated role mining or AI recommendations, expanding reviews = rubber-stamping + increased risk.

### Summary
Customers are **data-rich but insight-poor**, struggling with a manual "Identity Gap" that leaves them vulnerable to both security risks and regulatory failure. Customer count in this synthesis: 6 named. Total customer base size still to confirm internally.
