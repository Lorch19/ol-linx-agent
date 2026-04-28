# AI Governance / MCP Gateway — Discovery Plan

**Purpose:** internal operating doc for Omri. Track what's unknown, how we resolve, by when. Once scope-blocking questions land, commit scope and share with eng + org.

**Decision date target:** Friday May 8, 2026. Pulls in if Q1/Q2 resolve fast.
**Final delivery:** Identiverse, Monday June 15, 2026 (~7 weeks from start).

---

## Scope-blocking — must resolve before scope commit

These four answers shape what we're building. No commit until they're in.

### Q1. Tool-level visibility — in P0 or descope?
- **Mor's Apr 26 update:** "need to check what MCP gateway exposes — verify via Claude / MCP spec." Action item, not yet answered.
- **Amir/Omer Apr 27:** NEW SUB-QUESTION — does the user connect ONLY the Linx MCP gateway, or do they also connect individual SaaS MCPs (e.g., Datadog MCP, Slack MCP) in parallel? If parallel, Linx only sees traffic through its own gateway — blind to the rest. This is potentially a full coverage gap and must be resolved before registration model and enforcement story can be locked.
- **Why blocks:** P0 surface area depends on this. Affects eng estimate and demo story.
- **Resolve:** (a) MCP spec research — what tool-level introspection is part of the protocol vs. server-implementation-dependent. (b) Architecture decision: single-gateway vs. multi-gateway topology. (c) Eng feasibility.
- **Owner:** Omri research (a+b), eng + UX estimate (c).
- **Target:** Apr 30.

### Q2. Where does Linx physically sit in MCP traffic? **RESOLVED 2026-04-26**
- **Mor:** "in the request loop, approve/deny/JIT."
- **Omri (Apr 26):** "we need to be in all of them eventually" → inline-for-everything. Option A.
- **Implication:** Linx proxies every MCP tool call. Heavy proxy load + latency budget become eng concerns. We see all traffic. Demo of "real-time control" is on the table. JIT approval flow (hero moment C) is feasible.
- **Open eng items downstream of this answer:** throughput target, latency budget, fail-open vs. fail-closed posture, MCP version coverage. These are eng implementation decisions, not scope-blocking.

### Q3. Connector pivot — agent platforms vs. target SaaS — **RESOLVED 2026-04-26**
- **Confirmed by Mor:** yes, shifting. P0 connectors = target SaaS (Slack, Salesforce, Datadog). Agent platforms become identity-ingestion only.
- Move to status log below; remove from open list once eng kickoff materials reflect it.

### Q7. Demo hero moment for June 15
- **Why blocks:** without this, all build sequencing is guessing. Determines what P0 actually means.
- **Updated context (Apr 26):** Mor's Q2 answer ("in the request loop, approve/deny/JIT") makes JIT approval flow (option C) feasible. Was previously high-risk; now plausible.
- **Candidates:**
  - **A — JML:** employee leaves → agents handled. Exercises all 4 building blocks. Strongest complete narrative.
  - **C — JIT approval:** agent requests sensitive write → admin approves live. "Live control" moment, dramatic for stage demo.
  - **D — Policy enforced at SFDC/Slack/DD:** admin sets rule, agent action prevented. Honors connector pivot.
  - **E — Toxic combinations:** agent has PII read + external Slack post → flagged. SoD-for-agents differentiator.
  - **F — Audit trace:** incident → admin traces agent action by user/tool/data. Compliance buyer story.
- **Recommendation:** A primary (lowest risk, complete arc) + C as the live-demo dramatic moment if Q2 lands cleanly. D, E, F as supporting frames.
- **Resolve:** Omri draft press-release-style paragraph, align Mor + Niv.
- **Owner:** Omri. **Target:** May 5.

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

### Q11. Competitive deep-dive — ConductorOne, Astrix, Ping Identity (Dor ask, 2026-04-27)
- Dor explicitly asked Omri to study how these three tackle the 3-chapter framing (registration / policy / enforcement).
- We have surface-level coverage in `knowledge/ai-governance-competitor-landscape.md`. Need depth.
- Ping Identity is the most under-researched of the three — and most directly competitive (Agent Gateway = Layer 2, same as Linx).
- **Owner:** Omri. **Target:** May 2. **Output:** `artifacts/competitive-teardown-c1-astrix-ping-2026-05-02.md`.

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
| 2026-04-26 | Q3 resolved (connector pivot confirmed). Q2 partially answered ("in the request loop"). Q1 has action plan (MCP spec research). Hero moment menu expanded — C now feasible. |
| 2026-04-26 (eod) | Q2 fully resolved: inline-for-everything (Option A). Eng implementation decisions (throughput, latency, fail-mode) move downstream. Scope-blocking list now: Q1 (tool-level), Q7 (hero moment). |
