# `#governance-of-agentic-ai` Slack — Full Structured Extraction

**Source:** Linx Slack channel `C09B540MH9U` — extracted via Linx Claude, 2026-04-21.
**Channel history covered:** Aug 19, 2025 → Mar 24, 2026 (most recent message).
**Purpose of this file:** durable capture of the Slack signal so the SME brief and future decisions cite evidence instead of recollection.

---

## Summary in 5 bullets

- **Niv is the intellectual engine** — seeds competitor/analyst drops (Veza, Saviynt, Gartner, CrowdStrike), tags Mor + Amir to investigate; Sarit is present but passive.
- **Mor and Amir Hamenahem are the two real workers** — Mor does product synthesis + competitor teardowns; Amir Hamenahem does hands-on API research (n8n, OpenAI, Google Workspace, JAMF, Entra).
- **Core deliverable decided in-channel is "AI Assets" tagging + connectors**, GPT Enterprise connector prioritized and a Linear project tracking it. JIT and full IGA are **not yet operationalized** in discussion.
- **Monday.com is the only named reference customer** across the entire channel; broader customer pull is absent.
- **Channel has gone nearly silent for the last 60 days** (Feb 20 → Apr 21, 2026) — only 3 Niv posts, all competitive intel drops, zero replies or discussion.

---

## 1. Participants and engagement pattern

| Name | Role | Rough post count | Last active |
|---|---|---|---|
| Mor Shabi | PM / implementation owner | ~45 | Jan 15, 2026 |
| Amir Hamenahem | Researcher / Engineer | ~25 | Jan 6, 2026 |
| Niv Goldenberg | CPO | ~20 | Mar 24, 2026 |
| Sarit Reiner Frumkes | Head of Product / VP | ~3 in-channel, active in threads | Jan 6, 2026 |
| Gili Golub | Engineering (Entra/connectors) | ~3 (threads only) | Jan 6, 2026 |
| Hila Bahri | Engineering | ~3 | Oct 21, 2025 |
| Ben Bakhar | Unknown | ~1 | Jan 6, 2026 |

**Leadership presence:**
- **Niv** most engaged exec. Competitor/vendor intelligence, explicit @Mor + @Amir. Urgency signals ("competition is moving fast").
- **Sarit** CC'd frequently, active in threads, rarely initiates.
- **Dor Renert** joined Feb 27, 2026 when Niv added him to review Veza — zero posts after joining.
- Israel + Amir Ben Ami joined Jan 15 — no substantive posts visible.

**Silent watchers frequently @-mentioned:** Uri Ezra (joined Nov 24, zero posts), Omer Blechman (connector eng), Drew (external — ArangoDB contact).

---

## 2. Decisions + positions taken

### Decisions made in-channel

- **Sep 2, 2025 — Feature roadmap agreed.** P0 = AI-asset identifier on pipeline using a static whitelist + UI tags/filters + dashboard summary. P1 = dynamic/internet-refreshed whitelist. Connectors = 1 AI-app connector / week. Shadow AI = separate workstream.
- **Oct 20, 2025 — Connector priority set.** GPT Enterprise first → Claude → Cursor. Connector dev slotted for Cycle 67. Sandbox from Premira or Monday.
- **Aug 25, 2025 — Linear project created:** `agentic-ai-identity-07e946f01264`.

### Strong positions taken

- **"We don't need a dedicated AI agent discovery experience"** — Mor, Nov 5: represent discovered agents under existing Discovery like all other identities, not a separate UI view. **[Tension with the `ai-governance-epic.md` hero flow which requires a dedicated Agent Inventory UI.]**
- **Ephemeral / per-session identity is the right model for agents** — Niv dropped the "From Persistent to Ephemeral" blog (unmitigatedrisk.com) with 🙏 reaction and no pushback. CPO-level receptive to the counter-school.
- **1Password as a potential agent credential source** — Mor floated using existing 1P integration to identify agents based on creds. Never formally decided.

### Tensions + disagreements

- Mor vs. Amir (Dec 31 thread): what "managed by Linx" means for agent-app connections — resolved by Mor clarifying (apps already connected via Linx Discovery).
- Mor re: Microsoft Copilot Studio Graph API (Jan 15): *"I don't like waiting 😂"* — preview API blocking M1.
- **Nov 11 — Mor surfaced planning tension:** *"we have a lot of plans but I don't know when we can start this project with R&D, we need effort from all teams."* Sarit replied in-thread, answer not visible in main channel. **R&D start date was never confirmed in-channel.**

---

## 3. External resources shared (24 items)

| # | Resource | Shared by | When | Framing | Engagement |
|---|---|---|---|---|---|
| 1 | Astrix: AI + NHI Touchpoints | Mor | Aug 20 | "This is a great document" | none visible |
| 2 | 1Password: Service Accounts + Agentic AI | Mor | Aug 20 | 1P creds could identify agents | follow-up notes |
| 3 | ConductorOne: Identity Evolution | Mor | Aug 20 | "They frame the problem beautifully" (Heb) | 1 reply (Niv) |
| 4 | Ping Identity: Agentic AI | Niv | Aug 20 | competitor reference | none |
| 5 | Duo: AI Identity Threats | Niv | Aug 20 | competitor reference | none |
| 6 | Gartner: Securely Delegate Agent Access | Niv | Aug 22 | "Risks involved" | 🙌 |
| 7 | Jared Hanson OAuth for Agents (YT) | Niv | Aug 19 | channel-opener | channel created same day |
| 8 | Unmitigated Risk: Ephemeral Identity | Niv | Aug 24 | "Why AI Agents Need Fresh Identity" | 🙏 |
| 9 | Astrix MCP Shift Part 3 | Mor | Aug 26 | — | 4 replies |
| 10 | Oasis: AI Solutions | Mor | Sep 6 | direct link | none |
| 11 | Clutch: Shadow AI Discovery | Niv | Sep 8 | "Analyze how Clutch claims to discover Shadow MCP" | 1 reply (Amir: will look) — **never followed up** |
| 12 | CrowdStrike: Next-Gen Identity Security | Niv | Sep 19 | "are they claiming to be the MCP gateway?" | 5-reply thread |
| 13 | Gartner: IAM for LLM-Based AI Agents | Niv | Sep 10 | "very interesting and technically deep" | none |
| 14 | Okta: Identity Security Fabric | Niv | Sep 30 | "nice recap" | 🙏 |
| 15 | Veza LinkedIn | Niv | Oct 30 | "competition moving fast — move quicker" | 2 replies |
| 16 | Microsoft Entra Agent ID | Mor | Oct 21 | "can we use existing Entra integration to fetch agents?" | 2-reply thread |
| 17 | Workday + Microsoft AI Agent | Mor | Oct 21 | "<!channel> very interesting" | none |
| 18 | SailPoint webinar: Shadow IT → Secured Identities | Mor | Oct 21 / Nov 6 | "Why AI Agents need governance" | 6-reply thread |
| 19 | Token Security webinar | Mor | Oct 22 | "When Machines Act for Themselves" | 1 reply |
| 20 | Oasis AAM Framework | Mor | Nov 24 | full detailed breakdown | 4 replies |
| 21 | NVD CVE-2025-68613 (n8n RCE) | Amir | Dec 28 | "RCE in N8N" | none |
| 22 | Saviynt CPO blog 1: "Identity — OS of AI Security" | Niv | Mar 1, 2026 | — | none |
| 23 | Saviynt CPO blog 2: "You Can't Protect What You Can't See" | Niv | Mar 1, 2026 | — | none |
| 24 | Saviynt RSAC LinkedIn | Niv | Mar 24, 2026 | "Very impressive" — discovery, inventory, access graph, risk detection, UARs, **MCP gateway**, real-time access control | **most recent msg; no replies** |

---

## 4. Open questions + unresolved threads

### Unanswered in-channel

- How do we detect agents that are part of a workflow? (Mor, Sep 4)
- Drift attack indicators in customer tenants? (Niv, Sep 7)
- How does Clutch discover Shadow MCP? (Niv, Sep 8 → Amir said he'd look → **never returned with findings**)
- Permissions data for AI agents — Niv Aug 28: "can we tell which permissions these AIs have?" → Mor: *"we are not collecting this data."*
- Anthropic Compliance API value — Niv Aug 21; Amir uploaded `openapi.json` Oct 9, no synthesis shared.

### Linear tickets surfaced

- `PRD-8588` "Highlight AI related Identities as AI Assets" — Hila (Oct 21)
- Agentic AI Identity project `agentic-ai-identity-07e946f01264` (Aug 25)
- Amir Hamenahem's research Notion: "AI Agents research" with goals section

### Vendor conversations in flight

- **Microsoft:** active — Copilot Studio Graph API testing (preview), Entra Agent ID (Gili built service principal filter), Ben Bakhar working MSFT relations.
- **1Password:** raised by Mor as potential agent credential / discovery source. No formal work started.
- **ArangoDB / Cursor:** ArangoDB built a Cursor AI API integration with Linx; "Drew" suggested a session — unclear if it happened.
- **OpenAI:** API tested (Team plan = limited; admin API returns 401; need Enterprise).
- **n8n:** most complete connector research — users, workflows, credentials, tools documented.

### Customer mentions

- **Monday.com** — primary. AI tool list analyzed, JAMF research run against Monday, ArangoDB/Cursor integration at Monday discovered, sandbox environment sought.
- **Premira** — mentioned once as potential GPT Enterprise sandbox source.
- **Linx4Linx** — internal dogfood env used for AI asset testing (Aug 31).

---

## 5. Timeline of key moments

- **Aug 19** — Channel created; first resource flood (1P, Astrix, Duo, Ping, OAuth video).
- **Aug 21–24** — Niv drops two Gartner papers + ephemeral identity blog. Mor shares WIP concept doc.
- **Aug 25** — Linear project created.
- **Sep 2** — Feature roadmap agreed: AI Assets P0/P1 + connector pipeline + Shadow AI.
- **Sep 7–8** — Amir Hamenahem publishes Google Workspace + JAMF 3rd-party app research to Notion.
- **Sep 9** — Amir API availability scan: OpenAI Enterprise only, Claude/Gemini/Copilot "no API."
- **Sep 10** — Niv: Gartner *IAM for LLM-Based AI Agents* paper.
- **Sep 19** — Niv: analyze CrowdStrike MCP gateway claims.
- **Sep 25** — ArangoDB/Cursor integration with Linx discovered; session with Drew proposed.
- **Sep 28** — OpenAI admin API blocked on Team plan (401).
- **Oct 20** — GPT Enterprise connector prioritized; Cycle 67 plan.
- **Oct 21** — MSFT Entra Agent ID announced; Hila begins PRD-8588.
- **Oct 30** — Niv urgency flag on Veza.
- **Nov 5** — Mor: "no dedicated AI discovery UI needed."
- **Nov 6** — SailPoint webinar + 6-reply thread.
- **Nov 11** — Mor surfaces R&D start-date risk.
- **Nov 23–24** — Token Security + Oasis AAM teardowns.
- **Dec 28** — n8n RCE CVE flagged.
- **Dec 31** — Next milestone research tasks assigned: Cursor, Vertex, Entra, Gemini, n8n, Bedrock.
- **Jan 6, 2026** — n8n thread resolved with API findings.
- **Jan 15** — Copilot Studio Graph API update; Entra Agent ID filter implemented.
- **Feb 27** — Dor Renert added; Niv shares Veza video (no replies).
- **Mar 1** — Niv: Saviynt CPO blogs (no replies).
- **Mar 24** — Niv: Saviynt RSAC "very impressive" — MCP gateway, UARs, access graph, real-time AC. **No replies. Most recent message.**

---

## 6. Implied gaps (flagged by the extraction itself)

1. **JIT is discussed nowhere.** Epic name says "visibility + JIT." Channel is all discovery / visibility. Major thinking gap.
2. **No customer pull.** Monday is a research subject, not a customer voice. Entire channel is supply-push.
3. **MCP gateway is never Linx's own position.** Mentioned in Saviynt, Oasis, CrowdStrike teardowns as competitor capabilities — Linx's stance unstated.
4. **Agent-to-agent relationships** appear in Saviynt's features, never operationalized in Linx design.
5. **Shadow MCP** (Clutch) flagged Sep 8 — never followed up.
6. **Claude / Gemini / Copilot connectors** blocked on "no API" per Sep 9 — never revisited with alt path (MSFT Entra Agent ID Oct 21 partially resolves Copilot side).
7. **Last 60 days basically dead.** Three Niv posts, all competitive intel, zero replies, no decisions. Active research period was Sep–Jan. Unclear whether work continued elsewhere or stalled.
8. **R&D start date never confirmed.** Mor flagged Nov 11 — never resolved in-channel.

---

## 7. Implications for Linx (Omri's read)

1. **The Nov 5 "no dedicated UI" position contradicts the M1 hero flow.** Maria CISO journey ("open Linx → Agent Inventory → 23 agents") requires a dedicated inventory surface. Either Mor's position evolves or the hero flow changes. **This is the first thing to raise with Mor when clarifying the ownership split.**
2. **JIT is a paper claim, not a planning reality.** If JIT is part of the epic scope, someone has to start designing it. Right now the channel does not reflect that design work. Either scope is narrower than the epic name implies, or the work is happening outside this venue.
3. **Saviynt's March 24 RSAC drop is the most recent + most directly overlapping competitor claim.** MCP gateway + UARs + access graph + real-time access control = Linx's pitch almost verbatim. Saviynt moves from "medium study priority" to high. Deep teardown needed before June.
4. **Amir Hamenahem's Sep 9 scan said Claude / Gemini / Copilot had "no API."** MSFT shipped Entra Agent ID Oct 21 which partially unblocks the Copilot side. **Amir Ben Ami's MCP telemetry bet may be the primary path for Claude + Gemini agent discovery.** Worth confirming at the Thursday deep dive.
5. **The 60-day silence is political signal, not noise.** Either the project lost momentum OR it moved to another venue (Linear comments, direct Sarit/Niv conversations, cross-team meetings). Omri needs to find out which before planning on top of what's in-channel.
6. **Dor was added Feb 27 specifically for Veza review and posted nothing.** Possible interpretations: (a) Dor's scope on this is observer-only, (b) the Veza review happened off-channel, (c) Dor is waiting for Omri to take ownership. Worth clarifying with Dor directly.
7. **Mor's `#governance-of-agentic-ai` framing is discovery-first, not governance-first.** The channel name says "governance" but the discussion is 95% discovery + inventory. Matches the M1 scope but means Linx's external story should lead with discovery, not governance, to stay honest with internal reality.

---

*Captured verbatim from Linx Claude output 2026-04-21. Raw Slack links + message IDs preserved in the original output (Grain / Slack archive retains the full references [1–13]).*
