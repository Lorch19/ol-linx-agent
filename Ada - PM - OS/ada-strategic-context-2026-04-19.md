# Ada — Strategic Context (from Claude.ai session, April 19, 2026)

> Source: Shared by Omri on 2026-04-19 as the canonical reference for Ada's vision and design direction. More related files to follow.
> Status: High-level context. Deep dive required once this workstream becomes active (see Dor AI leadership mandate — bucket 3, "company AI internal").

This file captures all strategic decisions, architecture, and open questions from the Ada design session. Claude Code should treat this as the canonical reference for Ada's vision and design direction.

---

## What Ada Is

An AI-powered agent that owns the operational layer of PM work — context assembly, competitive monitoring, commitment tracking, meeting prep, drafting specs and communications — so PMs focus on strategy, customers, and decisions. What Ada can do better than humans, Ada should own.

Ada is not an assistant. She is a three-layer agent system: specialized capabilities that do the work, an orchestration layer that routes and coordinates, and a memory system that compounds over time.

PMs are the first use case. The architecture is role-agnostic and designed to extend to other roles and agents.

---

## Capabilities (8 core + 1 temporary)

### Listen & Ingest (clean capture — no hypothesis framing at ingestion)
1. **Customer Intelligence** — ingests and structures signals from every customer touchpoint per account. Surfaces patterns, preps meetings, tracks commitments.
2. **Market & Competitive Intelligence** — monitors competitors (including release notes), refreshes battle cards, flags market shifts proactively.
3. **Company Intelligence** — single query point across all internal systems.

### Think & Challenge (hypothesis discipline lives HERE, not in Listen)
4. **Strategic Sparring Partner** — challenges ideas with competitive evidence, customer data, market context. Asks uncomfortable questions.
5. **Decision Journal & Learning Loop** — logs every significant decision (human or system) with reasoning and confidence. Revisits outcomes on cadence. Surfaces contradictory calls across PMs and teams. The system's immune system.
6. **Synthesis Engine** — reads across all capabilities via structured tag matching (not raw text). Detects patterns, surfaces non-obvious connections as provocations. Includes proof point tagging for board/analyst/sales contexts. Three activation modes: scheduled, event-triggered, on-demand. Queries across tag dimensions, not just across capabilities.

### Act & Deliver
7. **Product Execution Engine** — PRDs, specs, tickets, emails, decks, status updates to team standards. Intake layer for product requests from any persona (tag, deduplicate, prioritize). Should enforce structural integrity: initiatives link to bets, bets have measurable hypotheses, hypotheses have kill thresholds.
8. **Accountability System** — morning briefs, commitment tracking, calendar prep, drafted follow-ups, reminders.

### Temporary
0. **Onboarding Accelerator** — structured domain ramp-up. Active now, sunsets ~90 days. Generalization to other roles TBD.

### Cross-cutting patterns (not capabilities)
- **Listener & Alerter** — background monitoring feeding capabilities 1, 2, 3, 6.
- **System Evolution** — Ada proposes automations and new skills based on observed friction + user feedback + cross-PM learning.
- **Learner** — active filtering behavior inside Listen cluster. Given current active bets/initiatives, curates what's relevant from the knowledge base into context.

### Key design decision: segregation of duties
Listen cluster captures clean, structured, unbiased signals. It does NOT ask hypothesis questions during ingestion — that contaminates the data. Hypothesis discipline is applied downstream in the Think cluster when signals are analyzed. Clean pipes in, critical thinking applied downstream.

---

## Architecture — Three Layers

### Layer 1: Capabilities (The Operators)
Eight hyperspecialized capabilities organized as Listen → Think → Act. Each writes to shared memory in consistent structured format.

### Layer 2: Orchestration (The Manager)
Routes tasks to correct capability (or combination). Sequences dependencies. Applies risk-tiered escalation gates. Monitors capability health. This is the CLAUDE.md/SKILL.md brain — make it explicit in architecture docs.

### Layer 3: Memory (The Nervous System)
- **Working memory** — curated context for current task (not everything dumped in).
- **Episodic memory** — structured logs from every capability run with metadata (source, date, entities, confidence).
- **Institutional memory** — patterns extracted from episodic memory over time. Compounding advantage.

All memory in version-controlled markdown. Transparent, editable, portable.

### Multi-axis tagging schema (critical for modularity)
Every entry carries structured metadata tags enabling cross-dimensional queries. Minimum viable dimensions:
- **Source** — which capability/person generated it
- **Entity** — customer, competitor, product area
- **Confidence** — confirmed, estimated, assumed
- **Link** — related initiative or bet (if any)

Auto-tagged by Ada on ingestion. Human override when wrong. Ada learns from corrections. Add dimensions later based on actual PM queries.

This enables: "what proof do we have for initiative X?" AND "what do competitors say about this?" AND "which customer signals support this bet?" — from the same data, different query dimensions.

### Outputs
- **Artifacts** — PRDs, briefs, emails, decks, specs, tickets, board summaries
- **Signals** — alerts, proactive nudges, synthesized insights, overdue flags
- **System evolution** — proposed automations, new skills, workflow improvements

### Human-in-the-loop gates
Between orchestration and every write action. Risk-tiered: low-risk logs automatically, medium-risk notifies, high-risk requires approval. Trust earned per-workflow based on track record against evaluation criteria.

---

## Design Principles (7)

1. **Progressive Trust** — starts fully supervised, earns autonomy per-workflow through demonstrated performance against defined evaluation criteria (3-5 per capability). Revocable instantly. Target over time: 85-90% routine actions autonomous.

2. **Context is Architecture** — structured hierarchy (shared knowledge → team context → personal context). Managed token budgets. Cross-references between capabilities via tagging schema. Permission-aware sharing across PMs. Version-controlled files. Multi-axis tagging for modularity.

3. **Evidence over Reasoning** — LLM reasoning is not evidence. Only verifiable data counts. Confidence tags on everything. Quality beats volume. Proactive nudges must clear relevance threshold.

4. **Cost Discipline** — token budgets per workflow, model routing (simple→lightweight, complex→frontier), spending alerts, runaway prevention. Cost-per-insight as first-class metric.

5. **Graceful Degradation** — connector fails → degrade, don't crash. Context fills → summarize, don't drop. Confidence low → say so, don't guess. Every error feeds learning loop.

6. **Transparency and Auditability** — every output traceable to data sources. Decision reasoning visible. Evidence chain inspectable by any stakeholder.

7. **System Evolution** — improves through data patterns + user feedback + cross-PM learning. Behavior changes versioned, tested, reversible. Ada treated as employee: onboarded, trained, evaluated, promoted.

---

## Personas

- **PMs (primary)** — daily interaction, all capabilities. Ada handles operational work so PMs do strategic work.
- **Engineering & Design** — receives outputs (specs, tickets). May query for product context.
- **CS & Solutions Engineering** — contributes product requests, escalation patterns, deployment friction. Requests tagged and consolidated by Ada.
- **Sales** — receives battle cards, customer intel, proof points. Provides deal outcomes, competitive mentions.
- **Leadership** — receives synthesized views: decision logs, proof points, strategic risks.
- **All personas** — can submit product requests via lightweight channel (e.g., Slack). Ada tags, deduplicates, PMs own prioritization.

---

## Phased Rollout

### Phase 0 (Weeks 1-4): "Use it before you build it"
Active: Onboarding Accelerator, Strategic Sparring, Market Intel (manual), Accountability (manual logging). Pure validation — which workflows stick? Gate: daily use for 3+ weeks, 2+ capabilities show value.

### Phase 1 (Months 2-3): "Connect what hurts"
Add: Customer Intelligence, Product Execution, Decision Journal. First connectors based on Phase 0 friction (likely Calendar, Gmail, one internal system). First scheduled task: morning brief. Discovery sprint before each capability build. Gate: morning briefs useful 80%+ without editing, customer signals captured, decisions logged.

### Phase 2 (Months 3-5): "One PM to four"
Add: Company Intelligence, Proof Point tagging. Scale from 1 PM to 4. Permission model, cross-PM visibility, onboarding flow. Gate: all 4 PMs active, cross-PM insights surfacing.

### Phase 3 (Months 5-8): "Connect the dots"
Add: Synthesis Engine, full System Evolution. Structured tag matching on months of clean data. Ada proposes own improvements. Gate: non-obvious connections surfacing weekly, cost per insight tracked and decreasing.

Every capability requires dedicated discovery sprint + defined evaluation criteria before build.

---

## Key Decisions Made

1. Killed: Stakeholder Coach (lightweight version inside Accountability), Cross-Functional Translator (personality trait not capability), Communication Engine (merged into each capability's output), Listener & Alerter as standalone (cross-cutting pattern instead)
2. Proof Point Tracker merged into Synthesis Engine as tagging mechanism
3. Renamed from "Narrative Builder" framing to "Proof Point Tracker" — serves board, analysts, sales, hiring, not just fundraising
4. Post-Series B framing — agent value is "scale execution" not "prove the story"
5. Segregation of duties: Listen captures clean signals, Think applies hypothesis discipline
6. Hypothesis enforcement is systemic but applied in Think cluster, not Listen
7. Multi-axis tagging over folder hierarchy for knowledge modularity
8. Auto-tagging on ingestion, human override, Ada learns from corrections

---

## Open Discovery Questions

- What tools does Linx use for customer calls? (Grain? Other?)
- How is customer data structured today?
- What are Linx's actual PRD templates and standards?
- What are the top 10 questions PMs ask daily? (drives Company Intelligence priorities)
- What refresh cadence for competitive data is actually useful?
- What does a useful synthesis look like? (needs examples from real usage)
- What tag dimensions do PMs actually need beyond the minimum 4?
- Will PMs actually revisit decisions? At what cadence?
- What recurring communication formats exist? (for audience-aware formatting)
- What does good look like for each capability? (evaluation criteria — must define before autonomy graduation)

---

## Research Insights Worth Preserving

- Scaffolding beats model intelligence (Daniel Miessler's core finding)
- 95% per-step reliability = 36% end-to-end on 20-step workflow (compound error problem)
- Users approve 93% of prompts and stop paying attention — blanket confirmation is a security vulnerability
- MCP servers consume 82,000+ tokens before conversation starts — use Skills (progressive disclosure) over MCP for most integrations
- Only 20% of workflows built are ones people continue using (Hilary Gridley)
- Markdown-in-git has won for developer-focused agent memory: transparent, versionable, $0.02/GB vs $50-200/GB for vector DBs
- Model drift causes 40% of production agent failures — version agent behavior
- Structured tag matching for synthesis first, LLM reasoning second — avoids hallucinated connections
- 10-15% escalation rate target for mature agent systems (Galileo)
- "Iterate on the system, not the outputs" — fix the scaffolding, not individual results

---

## Deliverables Created

1. **ada-strategic-vision.md** — full strategic document (Sections 1-11)
2. **ada-system-architecture.html** — three-layer architecture flowchart for stakeholder sharing
3. **Summary for Dor** — concise capability + principles overview for Slack

---

## References

- Operator-kit repo: github.com/Lorch19/operator-kit (100+ skills across 15 packs)
- OL Linx Agent repo: github.com/Lorch19/ol-linx-agent (knowledge base + agent layer)
- AI-SHIPR (Yaniv Yaakubovich): github.com/yanivy9h/ai-shipr — folder-based PM OS, hypothesis enforcement pattern worth adopting
- "The AI Company" (Guillermo Flor): three-layer architecture (Operators/Manager/Nervous System) validates our design
- Daniel Miessler's Kai/Personal AI Infrastructure: scaffolding > model intelligence
- Obie Fernandez CTO OS: MCP token cost warning, Skills over MCP pattern
