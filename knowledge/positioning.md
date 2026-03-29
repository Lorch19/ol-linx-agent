# Linx Security — Platform Positioning
*Last updated: 2026-03-29*

---

## Positioning Map (2×2)

```
                    Autonomous Remediation
                           ▲
                           │
              Lumos ●      │      ● Linx
             (AI-first,    │    (cross-identity +
              no NHI)      │     AI-native)
                           │
     ConductorOne ●       │         ● Opal
      (modern IGA +        │     (JIT + Paladin)
       some autonomy)      │
                           │
  ─────────────────────────┼──────────────────────── ▶
  Point Solution           │              Platform    Identity Coverage
                           │
          Zluri ●          │      ● Saviynt
        (SaaS mgmt →       │    (converged IGA+PAM
         identity)         │     + machine ID)
                           │
                           │   ● ServiceNow/Veza   ● CyberArk
                           │    (graph + ITSM)       (PAM + M&A)
                           │
                           │         ● SailPoint
                           │       (full IGA leader,
      Detect & Recommend   │        1000+ connectors)
                           │
```

**Linx's quadrant claim:** Top-right — broadest identity coverage (human+NHI+agentic) with autonomous remediation. Only vendor credibly in this space.

**Competitive tension:** Lumos is top-left (strongest AI but limited identity coverage). SailPoint/Saviynt are bottom-right (broadest governance but not autonomous). The question is who reaches the top-right first with full platform depth.

---

## Geoffrey Moore Positioning Statement

### Value Proposition

> **For** security and IAM leaders at mid-market to large enterprises
> **that need** unified governance over human, non-human, and AI agent identities with real-time risk remediation
> **Linx Security**
> **is an** AI-native identity security platform
> **that** continuously detects identity risks across all identity types and autonomously remediates them — replacing periodic, manual access reviews with always-on, always-current governance.

### Differentiation Statement

> **Unlike** SailPoint, CyberArk, and legacy IGA platforms that were built for human identities and bolt on machine identity as an afterthought,
> **Linx Security**
> **provides** a unified identity graph that treats human, NHI, and agentic AI identities as first-class citizens from the architecture up — with autonomous remediation that acts in real-time, not quarterly.

### One-Sentence Positioning

> Linx is the only identity security platform that unifies human, non-human, and AI agent governance with autonomous remediation on a single AI-native graph.

---

## The "Only We" Claim — Stress-Tested

**Claim:** "Only Linx unifies human + NHI + agentic identity governance with autonomous remediation on a single, AI-native graph."

**Validity check against each competitor:**

| Competitor | Can they claim the same? | Why not |
|---|---|---|
| SailPoint | No | Strong governance but NHI is bolt-on, no autonomous remediation, legacy architecture |
| CyberArk | No | NHI via Venafi acquisition (not native), IGA via Zilla acquisition (not unified), no autonomous remediation |
| Saviynt | Closest threat | Has converged platform + AI agents as identities, but remediation is recommendation-tier, not autonomous |
| ServiceNow/Veza | No | Graph-based but lacks autonomous remediation; distribution is the threat, not the product |
| ConductorOne | No | Modern + fast but NHI/agentic coverage is early; doesn't have the graph depth |
| Lumos | No | Best AI autonomy but Gartner confirms no NHI certificate/API-key governance |
| Zluri | No | NHI expanding but no autonomous remediation, no agentic identity |
| Opal | No | Has Paladin (autonomous) but limited to JIT/access, not full identity governance |

**Shelf life of claim:** 12-18 months. Saviynt is closest to matching. SailPoint and CyberArk are building toward it. Lumos could add NHI.

**How to defend:** Ship governance depth (V1.1 + access reviews + compliance) before competitors close the identity coverage + automation gap. The race is: Linx adds governance before incumbents add AI-native + cross-identity.

---

## Battle Priority Matrix

```
                    High Threat
                        ▲
                        │
    MONITOR             │           FIGHT NOW
                        │
   ServiceNow/Veza ●   │     ● ConductorOne
   (distribution threat,│     (direct competitor:
    different ICP today)│      modern, fast, funded)
                        │
                        │     ● Lumos
   CyberArk ●          │     (AI narrative competitor,
   (M&A assembler,      │      stealing "AI-first" claim)
    enterprise anchored)│
                        │
   SailPoint ●          │
   (incumbent, rarely   │
    in same deals today)│
  ──────────────────────┼────────────────────────── ▶
   Low Overlap          │           High Overlap    Competitive Overlap
                        │
    IGNORE              │           DEFEND
                        │
                        │     ● Zluri
    Saviynt ●           │     (similar positioning,
    (regulated verticals│      weaker execution)
     different from     │
     Linx's ICP)        │
                        │     ● Opal
                        │     (JIT niche, limited scope)
                        │
                    Low Threat
```

### Fight Now (high overlap + high threat)
- **ConductorOne** — Most direct competitor. Same "modern IGA" positioning, similar deployment speed, stronger governance, massive funding ($111M). They win the same deals Linx wants. Counter: Linx's cross-identity depth + autonomous remediation vs. their workflow-centric approach.
- **Lumos** — Competing for the "AI-first identity" narrative. Albus is impressive. Counter: Linx has NHI+agentic coverage that Lumos lacks (Gartner-confirmed). Don't let them own the AI story.

### Monitor (low overlap + high threat)
- **ServiceNow/Veza** — Not in the same deals today (different ICP, much higher price point). But ServiceNow's distribution could bring identity governance to their 85%+ F500 base. If they start targeting Linx's ICP, it changes everything.
- **CyberArk** — Enterprise-anchored, PAM-first. Rarely competing for the same mid-market deals. But the platform assembly via M&A could create a compelling alternative at enterprise scale.
- **SailPoint** — The benchmark, but Linx rarely displaces SailPoint. Different buyer journey. Monitor for when SailPoint adds autonomous AI and NHI depth.

### Defend (high overlap + low threat)
- **Zluri** — Similar "modern, fast, NHI" positioning but weaker execution and less funding. Win against them consistently.
- **Opal** — JIT niche, limited scope. Defend if they expand toward full governance.

### Ignore (low overlap + low threat)
- **Saviynt** — Deeply entrenched in regulated enterprise verticals that Linx isn't targeting yet. Different ICP, different deployment model. Becomes relevant when Linx enters compliance-heavy verticals.

---

## Platform Positioning Tension

**The honest challenge:** Linx claims "platform" with 3-4 of 8+ capabilities live. The positioning must thread this needle:

**What to say:** "AI-native identity security platform with unified coverage across all identity types" — this is architecturally true. The graph + AI-native + agentless foundation IS a platform architecture, even if not all features are shipped.

**What NOT to say:** "Complete IGA platform" or "replaces SailPoint" — this is false today. Linx cannot handle core IGA use cases (access reviews, JML, compliance reporting).

**The wedge story:** "Start with identity visibility and autonomous risk remediation (what legacy IGA can't do), then expand governance on the same platform (what legacy IGA does slowly and painfully)."

**Fintech analogy for Omri:** Like how neobanks entered with payments (fast, digital-native) then expanded to lending, savings, compliance — rather than launching as a full bank on day one. Linx enters with visibility+AI remediation, then expands to governance.
