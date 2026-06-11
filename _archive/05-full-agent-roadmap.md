# Mission: Full Agent Roadmap — From 7/10 to 10/10

## Current State: 7/10
What works: knowledge layer, competitive intel, accountability rhythm, daily briefs, Telegram alerts, scheduled tasks, log→extract pipeline.
What's missing: no real-time signals, no autonomous actions, no cross-system awareness, no learning loop.

---

## Level 1: Read-Only Observer — Target: 8/10
**When:** Weeks 1-2 at Linx (Apr 12-25)
**Theme:** The agent sees what you see, without you pasting anything.

| Connection | What It Unlocks | How |
|---|---|---|
| Google Calendar | Morning briefs with real meeting context, auto-prep | Already have MCP — just needs task permissions |
| Slack (read-only) | Sees #product, #customers, #competitors, #engineering | MCP or Slack API → OpenClaw monitors channels |
| Google Drive | Reads PRDs, meeting notes, design docs as they're created | Google Drive MCP already available |

**Agent behavior change:**
- Morning brief includes actual meeting agendas, not just titles
- Evening extract processes Slack signals, not just manual log entries
- Flags things you'd miss: "Niv mentioned governance V1.1 in #product — relevant to your PRD"

**Trust test:** Run for 2 weeks. Check: did it surface anything you would have missed? Did it hallucinate or misinterpret?

---

## Level 2: Active Processor — Target: 8.5/10
**When:** Weeks 3-4 (Apr 26 — May 9)
**Theme:** The agent processes raw signals into structured intelligence automatically.

| Connection | What It Unlocks | How |
|---|---|---|
| Gong/call recordings | Auto-extracts customer pain, objections, competitive mentions, commitments from every call | Gong API → transcript → Claude extracts → routes to customer-intel.md |
| Jira/Linear | Knows sprint status, what eng is building, what's blocked | Jira MCP or API → daily sync |
| Email (read-only) | Catches customer threads, vendor outreach, internal updates | Gmail MCP already available |

**Agent behavior change:**
- After every customer call: auto-generates 3-point summary (pain, surprise, commitment) → customer-intel.md + log.md + Telegram
- Sprint awareness: "Eng is blocked on the NHI graph API — your PRD depends on this"
- Commitment detection from email: "You replied 'I'll send that by Friday' to the Aramark thread"

**Trust test:** Agent extracts data for 2 weeks. You review every extraction. Accuracy target: 90%+ before moving to Level 3.

---

## Level 3: Autonomous with Guardrails — Target: 9/10
**When:** Month 2 (May 10 — Jun 10)
**Theme:** The agent acts, but every action goes through an approval queue.

| Capability | What It Does | Approval |
|---|---|---|
| Draft follow-up emails | After customer call, drafts email with next steps | You review in Telegram → approve/edit/reject |
| Update Jira tickets | Adds context, links customer requests to tickets | You approve via Telegram |
| Push battle card updates | When competitor scan finds changes, drafts the update | You review diff → approve |
| Schedule prep sessions | Sees a big meeting in 2 days, creates a 15-min prep block | You confirm in Telegram |
| Alert stakeholders | "Niv should know about this customer signal" — drafts Slack message | You approve before send |

**Agent behavior change:**
- Telegram becomes a command center: incoming alerts + approval queue
- Agent proposes actions, you tap approve/reject
- OpenClaw handles execution (send email, update Jira, post to Slack)

**Trust calibration per action type:**
- Low risk (update log, update customer-intel, flag a signal): auto-approve after 1 week of 100% accuracy
- Medium risk (draft email, update Jira, schedule meeting): always review
- High risk (message a customer, post in Slack, change a PRD): always review + confirmation

**Trust test:** Track approval rate. If you approve 95%+ of a category for 2 weeks → promote to auto-approve.

---

## Level 4: Trusted Partner — Target: 9.5/10
**When:** Month 3+ (Jun 10+)
**Theme:** The agent operates autonomously within earned boundaries. You manage exceptions, not routine.

| Capability | Autonomous? | Boundary |
|---|---|---|
| Log updates, customer-intel, commitment tracking | Yes | Always |
| Morning brief, weekly scorecard | Yes | Always |
| Competitor monitoring + knowledge file updates | Yes | Flag only if "only we" claim affected |
| Post-call email drafts | Yes, send after 30-min review window | You can edit/cancel within window |
| Jira updates (context, links) | Yes | No status changes without approval |
| Slack summaries to #product | Approval required | Always human-approved |
| Customer-facing anything | Approval required | Always human-approved |
| Strategic recommendations | Agent proposes, Omri decides | Always |

**Agent behavior change:**
- Runs 80% of routine PM ops autonomously
- You focus on decisions, relationships, and strategy
- Daily Telegram shifts from "here's what happened" to "here's what I did + here's what needs you"
- Weekly report includes agent actions taken + outcomes

---

## Level 5: The 10/10 — Learning Agent
**When:** Month 4+ (after Series B sprint)
**Theme:** The agent learns from outcomes and improves its own judgment.

| Capability | What Changes |
|---|---|
| Decision outcome tracking | Agent reviews past recommendations. "I suggested X, outcome was Y. Updating my model." |
| Stakeholder prediction | "Based on 30 interactions, Niv will push back on scope here. Preempt with data." |
| Customer pattern detection | "3 customers mentioned the same pain this month. This is a signal, not noise." |
| Competitive prediction | "SailPoint's hiring pattern suggests they're building [X]. Prepare counter-positioning." |
| Self-improvement | Agent flags its own failures: "I missed this signal last week. Here's why and how I'll catch it next time." |
| Proactive strategy | "Based on customer patterns + competitive moves + milestone progress, here's what you should prioritize next quarter." |

**This level requires:**
- 90+ days of compounded data (log, customer-intel, decisions, outcomes)
- Validated trust across all Level 3-4 action types
- A feedback loop: Omri rates agent recommendations weekly, agent adjusts

---

## The Path

```
TODAY (7/10)          → Knowledge + rhythm + Telegram
Apr 12-25 (8/10)     → Slack + Calendar + Drive (read-only)
Apr 26-May 9 (8.5)   → Gong + Jira + Email (processing)
May 10-Jun 10 (9/10) → Autonomous actions with approval queue
Jun 10+ (9.5/10)     → Earned autonomy per action type
Month 4+ (10/10)     → Learning loop, outcome tracking, prediction
```

## Key Principle
Trust is earned per-action-type, not globally. The agent proves itself on low-risk actions before touching high-risk ones. Every promotion from "approval required" to "autonomous" is based on data (approval rate over 2 weeks), not gut feel.
