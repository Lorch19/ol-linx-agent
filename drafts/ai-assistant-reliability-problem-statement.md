# Problem Statement: AI Assistant Reliability

## The Problem

Linx's AI Assistant produces false confirmations — telling users an action was completed (e.g., "report created") when it was not. This has been reported by Sony Pictures (Michael Melo) over a 6+ month escalation period. The impact is severe: Michael is actively advising internal stakeholders, including Crunchyroll's CTO, against using the Linx AI Assistant.

For a security product, false confirmations are the worst possible failure mode. A wrong answer is bad. An answer that *looks right and isn't* creates a false sense of security — the opposite of what customers are paying for.

## What We Know

- **Who:** Sony Pictures, contact Michael Melo. Unclear if other customers experience this silently.
- **What:** The assistant confirms task completion when the underlying action failed or never executed. Persistent accuracy failures across security-critical workflows.
- **Root cause (per leadership):** Sits at the AI/backend data boundary — the AI layer believes it succeeded when the backend did not, or the AI generates responses not grounded in actual system state.
- **Customer ask:** User-configurable accuracy guardrails — a way to tell the assistant "prioritize accuracy over helpfulness." Essentially: "I'd rather hear 'I can't do that' than get a confident wrong answer."
- **Internal response so far:** Dor Renert and Niv Goldenberg committed to stricter QA, a less "appeasing" assistant personality, and twice-daily engineering status reports.

## What We Don't Know (Research Questions)

### Product & Engineering
1. What is the technical architecture of the AI Assistant? Where exactly does the AI layer interface with the backend? What validation exists between "AI says done" and "backend confirms done"?
2. What does the assistant's prompt/system design look like? Is it explicitly optimized to sound helpful/confident? Is there a "never say I don't know" instruction baked in?
3. What telemetry exists? Can we measure: (a) how often the assistant claims success vs. actual success, (b) which task types fail most, (c) which customers are affected?
4. What has engineering actually shipped since the commitment to stricter QA? Is there a tracking doc or ticket system I can review?

### Customer Impact
5. Is Sony the only customer reporting this, or are others experiencing it silently? What does usage data show across accounts?
6. What is the churn risk timeline for Sony? Has Michael set an explicit deadline or ultimatum?
7. Are there other customer segments (compliance teams, security ops) where false confirmations could cause regulatory or audit exposure?

### Strategic
8. How central is the AI Assistant to Linx's value proposition and GTM? If the assistant is unreliable, does the core product (identity graph, discovery, remediation) still stand on its own?
9. How do competitors handle AI assistant reliability? Do SailPoint, CyberArk, ConductorOne have similar features, and how do they manage accuracy?
10. Should "accuracy mode" / configurable guardrails become a product feature, or is this a band-aid for a deeper architectural problem?

## Framing for Internal Conversations

This is not a feature request or a nice-to-have. This is a trust crisis in a security product. The question isn't "how do we make the assistant better" — it's "how do we make the assistant honest."

Three possible outcomes, in order of preference:
1. **Fix the root cause** — close the gap between what the AI reports and what the backend actually did. Implement verification loops.
2. **Degrade gracefully** — if verification isn't possible for a given action, the assistant should say so explicitly rather than guess.
3. **Give users control** — Michael's guardrails request. Let users set their own accuracy/helpfulness tradeoff. Power users in security roles will always choose accuracy.

All three should probably ship. #1 is engineering. #2 is prompt/product design. #3 is a feature.

## Success Criteria

- Zero false confirmations on security-critical actions (reports, remediations, access changes)
- Michael Melo moves from "advising against use" to "cautiously re-engaging"
- Telemetry in place to measure assistant accuracy rate across all accounts
- At least one proactive outreach to other customers to surface silent failures
