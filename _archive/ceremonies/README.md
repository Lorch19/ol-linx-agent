# Product Ceremonies

> Lightweight decision framework for features and user stories at Linx.
> Not a process doc — a decision-making accelerator.

## Philosophy

Ceremonies exist to force three questions early, not to generate paperwork:
1. **Should we build this?** (Feature Intake)
2. **Is this ready to build?** (Story Spec + Ready Gate)
3. **Did it work?** (Ship Review)

If a ceremony doesn't change a decision, skip it. If it slows you down without improving the outcome, kill it.

## The Feature Lifecycle

```
Signal → Intake → [Explore / Park / Kill] → Story Spec → Ready Gate → Build → Ship → Review → Learn
```

| Stage | Trigger | Output | Agent Role |
|---|---|---|---|
| **Signal** | Customer request, competitor move, internal idea, market shift | Raw signal logged to `log.md` | Agent prompts: "Add to the log?" |
| **Intake** | "I want to evaluate this feature idea" | Scored intake with decision | Agent pre-fills competitive + customer context |
| **Story Spec** | Intake decision = Explore | Spec with acceptance criteria + ready gate | Agent pulls persona context, edge cases, dependencies |
| **Ready Gate** | Story spec complete | Go/no-go for eng handoff | Agent runs the checklist, flags gaps |
| **Build** | Eng picks up the story | — | Agent tracks against commitments |
| **Ship** | Feature deployed | Ship review | Agent prompts: "Ready for ship review?" |
| **Learn** | 30 days post-ship | Outcome vs. hypothesis check | Agent flags when 30 days hit |

## When to Use What

| Situation | Use |
|---|---|
| "I have an idea for a feature" | `feature-intake.md` |
| "Let me write this up for eng" | `story-spec.md` |
| "We just shipped X" | `ship-review.md` |
| "Customer asked for Y" | Log the signal first → then intake if it's worth evaluating |
| "Competitor just launched Z" | Log it → competitive-matrix update → intake if it affects roadmap |

## Agent Automation

The agent handles the research legwork at each stage. You make decisions, not spreadsheets.

**On Feature Intake:**
- Auto-pulls relevant entries from `customer-intel.md`
- Checks `knowledge/competitive-matrix.md` — who has this, who's building it
- Checks `knowledge/positioning.md` — does this strengthen the "only we" claim
- Checks `knowledge/capability-landscape.md` — where does this sit in the IGA map
- Scores against Series B narrative relevance

**On Story Spec:**
- Pre-fills persona context from customer conversations
- Identifies dependencies against known product architecture (`knowledge/linx-product.md`)
- Flags competitive context for the specific capability
- Runs the ready gate checklist before eng handoff

**On Ship Review:**
- Pulls the original intake + story spec for comparison
- Prompts for customer reaction
- Flags if competitive scoring needs updating
- Logs the outcome for the decision journal in `linx-profile.yaml`

## Cadence

These are **not meetings**. They're decision checkpoints that can happen async, in a 1:1, or in a planning session.

| Ceremony | When | Duration | Who |
|---|---|---|---|
| Feature Intake | When a signal is worth evaluating | 10 min (agent pre-fills) | Omri (+ Niv for L/XL) |
| Story Spec | Before eng picks up work | 20-30 min writing | Omri |
| Ready Gate | Before sprint commitment | 5 min checklist | Omri + eng lead |
| Ship Review | Within 3 days of shipping | 15 min | Omri + eng lead |
| Intake Review | Weekly (batch any parked ideas) | 15 min | Omri |

## Files

| File | Purpose |
|---|---|
| `feature-intake.md` | Template for evaluating new feature ideas |
| `story-spec.md` | User story template with quality gates |
| `ship-review.md` | Post-ship learning loop |

## Adapting This

This framework is portable. Linx may already have product processes — if so, use this to identify gaps and propose targeted improvements. Don't force-fit; integrate.
