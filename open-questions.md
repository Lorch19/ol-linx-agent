# Open Questions — AI Governance / MCP Gateway

Running list of unresolved questions blocking scope, design, or demo decisions for the June 15 Identiverse milestone. Reviewed weekly. Referenced from `commitments.md`.

**Format:** question / why it matters / resolution path / target.
Items I (Omri) can attempt to research are marked `[research]`. Items requiring human resolution are marked `[human]`.

---

## Architecture & scope

### Q1. Tool-level visibility — in P0 or descope?
- **Why:** Sarit's Apr 23 P0 named tool-level granularity explicitly ("not just platform-level"). Mor's Apr 26 view: include only if cheap, descope if not. Decision rule is feasibility-gated.
- **Resolution:** scope investigation — what's technically possible via MCP introspection + what's the UX cost. `[human]` discovery with eng + UX.
- **Target:** Apr 30.

### Q2. Where does Linx physically sit in MCP traffic flow?
- **Why:** Determines what "enforce" means. Three options: (A) inline proxy / real-time block, (B) sidecar / post-hoc detect-and-revoke, (C) provisioning-time credential scoping (no runtime presence). Different products.
- **Resolution:** discovery with tech team. `[human]`
- **Target:** Apr 30.

### Q3. P0 connector scope — agent platforms or target SaaS?
- **Why:** Original M1 = agent platforms (ChatGPT, Cursor, Copilot — *where agents live*). Apr 26 direction = enforcement at target SaaS (Slack, Salesforce, Datadog — *where agents act*). If pivot, must be named at Sunday kickoff to avoid eng rework.
- **Resolution:** confirm with Mor + Sarit. `[human]`
- **Target:** before Sunday Apr 27 pre-kickoff.

### Q4. Default permission model for agents
- **Why:** Two architectural philosophies. (a) Opt-in: agents start at zero, perms must be explicitly granted. (b) Opt-out: agents inherit user perms, capped by admin ceiling (`agent_perms = user_perms ∩ admin_ceiling`). Determines policy UI shape.
- **Resolution:** decision needed from Mor + Sarit. Mor's Apr 26 example pointed toward (b). Confirm. `[human]`
- **Target:** May 5.

### Q5. Agent JML — default behavior on owner offboarding
- **Why:** Strongest concrete demo seed (use case from Apr 26 meeting). M1 already ships AGENT_OWNER_OFFBOARDED issue type — the question is the *action*: disable / reassign / delete? Per-customer policy or product default?
- **Resolution:** product decision — Mor lead. `[human]`
- **Target:** May 5.

### Q6. "Apps representation" for agentic context
- **Why:** Existing Applications page covers human-app context. Apr 26 note: agentic apps need their own representation but Linx "won't be in the sessions" in early phases. Unclear what the Apps surface looks like when not in the data path.
- **Resolution:** UX scoping with Mor + design. `[human]`
- **Target:** May 5.

## Demo & GTM

### Q7. Identiverse June 15 demo — hero moment
- **Why:** "Demo to customers" confirmed. Need one sentence that says what the audience walks away believing. Candidates from Apr 26 use cases: (a) "Maria controls what agents do in Slack/SFDC/DD" (enforcement story), (b) "Employee leaves — agents handled automatically" (JML story), (c) hybrid.
- **Resolution:** Omri draft, align with Mor + Niv. `[research]` then `[human]`
- **Target:** May 5.

### Q8. Discovery flow for the demo — "ugly" but how ugly?
- **Why:** Per Apr 26 — onboarding/discovery solved via "ugly flow" for MVP. For demo, must decide: hand-wired integration (mocked) / scripted setup (semi-real) / actual onboarding UI (cut). Affects what's credible on stage.
- **Resolution:** Omri scope, eng cost-check. `[human]`
- **Target:** May 12.

## Tracking from prior commitments (still open)

### Q9. Saviynt Mar 24 RSAC parity
- **Why:** Saviynt overlaps Linx's MCP Gateway pitch almost verbatim (UARs, access graph, real-time AC). Highest-priority competitor for June.
- **Resolution:** `[research]` deep-dive — Omri.
- **Target:** Apr 30 (already on commitments).

### Q10. Shadow-AI scope ambiguity (non-goal vs. M4)
- **Why:** Spec has contradiction. Clutch's wedge lives here. Affects positioning.
- **Resolution:** decision with Mor. `[human]`
- **Target:** Apr 28 (already on commitments).

---

## Resolved (move to log when closed)

*(none yet)*
