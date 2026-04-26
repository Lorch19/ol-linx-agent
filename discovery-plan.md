# AI Governance / MCP Gateway — Discovery Plan

**Purpose:** internal operating doc for Omri. Track what's unknown, how we resolve, by when. Once scope-blocking questions land, commit scope and share with eng + org.

**Decision date target:** Friday May 8, 2026. Pulls in if Q1/Q2 resolve fast.
**Final delivery:** Identiverse, Monday June 15, 2026 (~7 weeks from start).

---

## Scope-blocking — must resolve before scope commit

These four answers shape what we're building. No commit until they're in.

### Q1. Tool-level visibility — in P0 or descope?
- **Why blocks:** P0 surface area depends on this. Sarit Apr 23 said tool-level explicit; Mor Apr 26 said feasibility-gated. If cheap → in. If expensive → out. Affects eng estimate and demo story.
- **Resolve:** eng + UX feasibility check. What MCP introspection actually exposes. UX cost for tool-level surface vs. platform-level only.
- **Owner:** Omri to scope, eng + UX to estimate.
- **Target:** Apr 30.

### Q2. Where does Linx physically sit in MCP traffic?
- **Why blocks:** determines what "enforce" means in the product. (A) inline proxy / real-time block, (B) sidecar / detect-and-revoke, (C) provisioning-time credential scoping. Three different products. Can't write a demo script without this.
- **Resolve:** discovery session with eng. Read existing prototypes / Sarit's whiteboard.
- **Owner:** Omri to drive, eng to answer.
- **Target:** Apr 30.

### Q3. Connector pivot — agent platforms vs. target SaaS — confirmed?
- **Why blocks:** original M1 = agent platforms (ChatGPT, Cursor). Apr 26 direction = target SaaS (Slack/SFDC/Datadog). Pre-kickoff did not explicitly confirm. Eng team may still think they're building original M1.
- **Resolve:** validation conversation with Mor + Sarit. Confirm in writing. If pivoted, update kickoff materials so eng has it explicit.
- **Owner:** Omri.
- **Target:** This week (Apr 30).

### Q7. Demo hero moment for June 15
- **Why blocks:** without this, all build sequencing is guessing. Determines what P0 actually means.
- **Resolve:** Omri draft (1-paragraph press-release-style "what does the audience walk away believing"), then align Mor + Niv. Strongest seed today: agent JML story (Q5) — concrete, ships on existing AGENT_OWNER_OFFBOARDED issue type, recognizable customer pain. Validate vs. policy-enforcement story (use case #4) and pick one.
- **Owner:** Omri.
- **Target:** May 5.

---

## Scope-refining — shape the build, don't gate commit

Answer these in parallel. Won't block the May 8 scope commit, but each constrains UX or eng work.

### Q4. Default permission model
- (a) Opt-in: agents start at zero, perms must be granted. (b) Opt-out: agents inherit user perms capped by admin ceiling. Mor's Apr 26 example pointed at (b). Confirm.
- **Owner:** Mor + Sarit. **Target:** May 5.

### Q5. Agent JML default on owner offboarding
- Disable / reassign / delete? Per-customer policy or product default? Especially important if hero moment = Q7 JML story.
- **Owner:** Mor. **Target:** May 5.

### Q6. Apps representation for agentic context
- New surface vs. extend existing Applications page. Linx not in agent sessions in early phases — what does the surface look like when out-of-band?
- **Owner:** Mor + design. **Target:** May 5.

### Q8. Discovery flow — "ugly" but how ugly?
- Hand-wired (mocked) / scripted (semi-real) / actual onboarding UI (cut). Determines what's credible on stage at Identiverse.
- **Owner:** Omri scope, eng cost-check. **Target:** May 12.

---

## Adjacent research — supports scope but doesn't block

### Q9. Saviynt Mar 24 RSAC parity
- Closest competitor pitch to Linx's MCP Gateway. Need parity check before June.
- **Owner:** Omri. **Target:** Apr 30 (already on commitments). Output: `artifacts/saviynt-teardown-2026-04-30.md`.

### Q10. Shadow-AI scope ambiguity
- Non-goal vs. M4 contradiction in spec. Affects positioning, not P0 build.
- **Owner:** Omri + Mor. **Target:** Apr 28.

---

## Decision flow

```
Apr 27 → Apr 30 ............  Q1 + Q2 + Q3 + Q9 + Q10 land
May 1 → May 5 ..............  Q4 + Q5 + Q6 land. Q7 hero moment locked.
May 8 ........................ SCOPE COMMIT. Single-page scope artifact written.
May 8 → May 12 .............. Q8 resolved. Eng kickoff with locked scope.
May 13 → June 1 ............ Build sprint.
June 2 → June 15 ........... Dry runs + Identiverse delivery.
```

---

## Scope-share once committed

When scope locks May 8, produce one artifact: `artifacts/mcp-gateway-p0-scope-2026-05-08.md`. Internal-first. Three audiences read the same doc:

- **You:** operating reference for build phase
- **Eng team:** what's in / out, what they own, what's still TBD
- **Org (Niv, Dor, Sarit, Mor):** alignment confirmation, no surprises

Single doc, no rewrites for politics. If exec wants a deck, derive from the scope doc.

---

## Status log

| Date | Update |
|---|---|
| 2026-04-26 | File created. 10 questions seeded from Mor sync. |
