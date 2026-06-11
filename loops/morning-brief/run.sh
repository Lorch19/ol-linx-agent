#!/bin/bash
# morning-brief — starter script (loop INACTIVE until Omri installs the plist)
# Assembles inputs, asks Claude to compose the brief, regenerates brief.md,
# pushes a condensed version to Telegram. Never installs or modifies launchd.
set -uo pipefail

REPO="$(cd "$(dirname "$0")/../.." && pwd)"
CLAUDE_BIN="${CLAUDE_BIN:-$HOME/.local/bin/claude}"
NOTIFY="$REPO/notify.sh"
STAMP="$(date '+%Y-%m-%d %H:%M')"

fail() {
  # Rule 1 (loops/README.md): never die silently.
  [ -x "$NOTIFY" ] && "$NOTIFY" "morning-brief FAILED: $1" || true
  echo "FAILED: $1" >&2
  exit 1
}

# Guard: don't double-schedule against unverified pre-existing jobs (missions/07 listed 11).
if launchctl list 2>/dev/null | grep -q 'com.ol.linx-morning-brief'; then
  echo "NOTE: com.ol.linx-morning-brief already loaded in launchd — running anyway (manual invocation)."
fi

[ -x "$CLAUDE_BIN" ] || fail "claude binary not found at $CLAUDE_BIN"
[ -f "$REPO/.env" ] || fail ".env missing — Telegram push unavailable"

cd "$REPO" || fail "repo not found"
git pull --quiet origin main 2>/dev/null || true

OVERDUE=$(grep -E '^\- \[ \]' commitments.md | head -20)

PROMPT="generated: $STAMP
You are the morning-brief loop for ol-linx-agent. Compose today's brief.

Inputs:
1. Today's calendar: use the Calendar MCP if available; otherwise write 'calendar: not connected'.
2. Linear issues assigned to Omri: use the Linear MCP if available; otherwise 'linear: not connected'.
3. Open commitments (check dates against today, $(date +%Y-%m-%d) — flag overdue):
$OVERDUE
4. Competitor changes: read loops/competitor-watch/state/latest-diff.md if it exists.

Output TWO things:
A. Overwrite brief.md: first line 'generated: $STAMP', then Today / Overdue / Watch sections. Concise — open with the most important item.
B. Print between markers <TELEGRAM> and </TELEGRAM> a <15-line condensed version for push.

Style: CLAUDE.md rules. No filler."

OUT=$("$CLAUDE_BIN" -p "$PROMPT" --dangerously-skip-permissions 2>&1) || fail "claude invocation: $(echo "$OUT" | tail -1)"

MSG=$(echo "$OUT" | sed -n '/<TELEGRAM>/,/<\/TELEGRAM>/p' | sed '1d;$d')
[ -n "$MSG" ] || fail "no <TELEGRAM> block in output"

"$NOTIFY" "$MSG" || fail "telegram send"

git add brief.md 2>/dev/null
git diff --cached --quiet || git commit -qm "morning-brief: $STAMP (auto)" && git push -q origin HEAD 2>/dev/null || true
echo "OK: $STAMP"
