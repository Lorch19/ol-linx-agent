#!/bin/bash
# competitor-watch — starter script (loop INACTIVE until Omri installs the plist)
# Diffs fresh web signal against competitive-matrix.md claims. Alerts ONLY on change.
set -uo pipefail

REPO="$(cd "$(dirname "$0")/../.." && pwd)"
CLAUDE_BIN="${CLAUDE_BIN:-$HOME/.local/bin/claude}"
NOTIFY="$REPO/notify.sh"
STATE="$REPO/loops/competitor-watch/state"
STAMP="$(date '+%Y-%m-%d %H:%M')"
mkdir -p "$STATE"

fail() {
  [ -x "$NOTIFY" ] && "$NOTIFY" "competitor-watch FAILED: $1" || true
  echo "FAILED: $1" >&2
  exit 1
}

[ -x "$CLAUDE_BIN" ] || fail "claude binary not found"
cd "$REPO" || fail "repo not found"
git pull --quiet origin main 2>/dev/null || true

PROMPT="generated: $STAMP
You are the competitor-watch loop for ol-linx-agent.

1. Read knowledge/competitive-matrix.md — extract the competitor roster and current claims (note each claim's date).
2. Web-search each competitor for news since the claim dates: launches, funding, analyst coverage, MCP/AI-agent-governance moves. Search guidance: prompts/linx-claude-competitor-fetch.md.
3. Compare findings against matrix + knowledge/battle-cards.md claims.
4. If NOTHING contradicts or extends existing claims: print exactly NO_CHANGES and stop.
5. If changes found: write them to loops/competitor-watch/state/latest-diff.md
   (format: '## <competitor> — <date>' / what changed / which claim it touches / source URL),
   then print between <TELEGRAM></TELEGRAM> a max-6-line alert.

Zero-noise rule: when in doubt whether something is a change, it is not a change."

OUT=$("$CLAUDE_BIN" -p "$PROMPT" --dangerously-skip-permissions 2>&1) || fail "claude invocation"

date '+%Y-%m-%dT%H:%M:%S' > "$STATE/last-run"

if echo "$OUT" | grep -q 'NO_CHANGES'; then
  echo "OK: no changes ($STAMP)"
  exit 0
fi

MSG=$(echo "$OUT" | sed -n '/<TELEGRAM>/,/<\/TELEGRAM>/p' | sed '1d;$d')
[ -n "$MSG" ] && { "$NOTIFY" "$MSG" || fail "telegram send"; }

git add loops/competitor-watch/state/ 2>/dev/null
git diff --cached --quiet || git commit -qm "competitor-watch: diff $STAMP (auto)" && git push -q origin HEAD 2>/dev/null || true
echo "OK: changes alerted ($STAMP)"
