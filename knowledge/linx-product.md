# Linx Security — Product Profile

> Last updated: 2026-04-08
> Status: INCOMPLETE — needs significant enrichment from internal Linx sources once Omri has access.
> Current info based on: public description, assignment brief, Omri's assignment deck.

## Company Overview

- **What they say:** "Linx is building the next generation of Identity Security and Governance solutions to empower organizations to effortlessly and quickly reduce identity-related risks, achieve their security and compliance objectives, and increase productivity through tighter alignment between security and the business."
- **Stage:** Post-Series B (closed). Focus now: execution, market position, path to next round.
- **Key leaders:** CEO Israel (validate last name), CPO Niv (validate last name)
- **Gartner access:** Licensed (reports are issued to NIV@LINXSECURITY.IO)

## Core Capabilities (from public description)

1. **Identity data ingestion and organization** — ingest from multiple sources, normalize, create unified view
2. **Contextualized insights** — not just raw data, but risk-aware, business-contextualized intelligence
3. **Workflow automation** — automate remediation and governance workflows
4. **Continuous attack surface reduction** — posture management over time, not point-in-time audits
5. **Compliance gap identification** — align identity posture with compliance requirements

## Product Architecture (validate internally)

- Data ingestion layer (connectors to identity sources)
- Identity graph / data model
- Analytics / intelligence engine
- Workflow / automation layer
- Dashboard / reporting

## Assignment Focus: AI Agent as "Virtual Employee"

Omri's assignment (completed) designed an MVP AI agent that:
- Acts as a "virtual employee" for identity teams
- Addresses IGA or ISPM use cases
- Replaces the need to hire additional identity team headcount
- Makes decisions, ingests data/signals, generates outputs

This aligns with the broader market trend of "AI for IAM" — using AI to make IAM teams more effective.

## Known Gaps (to validate)

Based on competitive analysis, areas where Linx likely needs investment:
- IGA core workflow depth (lifecycle, provisioning, certification) — appears earlier stage vs. SailPoint/Saviynt
- NHI governance beyond service accounts
- PAM capabilities (likely absent — different category)
- Connector breadth (ConductorOne's 300+ sets a high bar)
- Data access governance

## Key Questions for Internal Discovery

1. What is Linx's actual connector count and integration approach?
2. Where is Linx in the IGA maturity curve — light IGA or full-featured?
3. What is the current customer base profile (size, industry, primary use case)?
4. What does the roadmap look like for NHI and AI agent governance?
5. How does Linx's identity graph compare architecturally to Veza's Access Graph?
6. What is the deployment model — SaaS only? Hybrid? On-prem option?
7. What is typical time-to-value for new customers?
