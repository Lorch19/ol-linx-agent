# Dor + Mor 1:1 Prep — 2026-04-26

Talking points for today. One page. Decisions sought, not exploration.

---

## Scope-blocking decisions I need today

### 1. Connector pivot — target SaaS or agent platforms?
Original M1 = ChatGPT, Cursor, Copilot (where agents live). Apr 26 direction = Slack, Salesforce, Datadog (where agents act). Pre-kickoff did not name this explicitly.
**Decision sought:** confirm P0 connectors = target SaaS. If yes, eng knows. If no, what's the actual mix?

### 2. Tool-level visibility — in P0 or descope?
Sarit Apr 23 said tool-level explicit. Mor Apr 26 said feasibility-gated.
**Decision sought:** are we committed to tool-level in P0 if eng says it's affordable, or are we descoping regardless to keep P0 lean?

### 3. Demo hero moment for Identiverse
Strongest seed today: **employee leaves → agents handled** (use case #2, ships on existing AGENT_OWNER_OFFBOARDED). Alternative: **admin policy enforced in Slack/SFDC/DD** (use case #4).
**Decision sought:** which is the primary story, which is supporting? Or hybrid?

### 4. MCP traffic position — eng-dependent, but we should align on direction
Three options: inline proxy / sidecar observer / provisioning-only. Affects what "enforce" means in marketing.
**Decision sought:** is leadership comfortable saying "we control" if reality is "we provision narrow credentials and revoke later"?

---

## Product questions I can drive (not eng-dependent)

### 5. Default permission model
(a) Opt-in: agents start at zero. (b) Opt-out: inherit user perms minus admin ceiling. Mor's Apr 26 example pointed at (b).
**Ask:** confirm (b) and the rule `agent_perms = user_perms ∩ admin_ceiling`.

### 6. Agent JML default behavior
When owner leaves: disable / reassign / delete? Per-customer policy or product default?
**Ask:** product default for P0. Customer overrides post-MVP.

### 7. Buyer for Identiverse demo
CISO? Security admin? IT admin? IGA admin? Each has a different first 5 minutes.
**Ask:** name the persona. Maria CISO is in the spec — still the target?

### 8. Design partner — what's the realistic ask?
Niv said no further push. Accepting that for customer voice. But can we get *one* customer to walk through the demo flow at Identiverse week (or before) for a sanity-check, even informal?
**Ask:** does Monday.com count? Are they aware? Anyone else?

### 9. Ownership post-June 15
Mor originated. Omri now driving research + scope. Who owns the epic for M2/M3 build?
**Ask:** name it now so I'm not guessing for the next 6 weeks.

### 10. Positioning sentence for the demo
"Linx brings IGA + ISPM to AI agents" is the spec line. Saviynt, ConductorOne, Astrix all saying close-to-identical things by June.
**Ask:** what's *our* sentence that doesn't match anyone else's?

---

## What I'm NOT asking today (eng-dependent — Apr 30)

- MCP technical: tool-level feasibility, traffic position, log volume
- Discovery flow: how ugly is "ugly"
- Build estimate for connector trio (Slack/SFDC/Datadog)

These come from the tech-team discovery session this week.

---

## My one-line ask of Dor

"I'm aiming for a scope commit by **May 8** based on these answers + the eng discovery this week. Does that fit your view of the path, or do you want to reshape it?"
