#!/bin/bash
# daily-extract — starter script (loop INACTIVE until Omri installs the plist)
# Reads today's transcripts, appends structured entries to log/commitments/customer-intel.
set -uo pipefail

REPO="$(cd "$(dirname "$0")/../.." && pwd)"
CLAUDE_BIN="${CLAUDE_BIN:-$HOME/.local/bin/claude}"
NOTIFY="$REPO/notify.sh"
STAMP="$(date '+%Y-%m-%d %H:%M')"
TODAY="$(date +%Y-%m-%d)"

fail() {
  [ -x "$NOTIFY" ] && "$NOTIFY" "daily-extract FAILED: $1" || true
  echo "FAILED: $1" >&2
  exit 1
}

[ -x "$CLAUDE_BIN" ] || fail "claude binary not found"
cd "$REPO" || fail "repo not found"
git pull --quiet origin main 2>/dev/null || true

# Today's Claude Code transcripts for this project (path slug = repo path with / -> -)
SLUG=$(echo "$REPO" | tr '/' '-')
TRANSCRIPTS=$(find "$HOME/.claude/projects" -maxdepth 2 -path "*${SLUG}*" -name '*.jsonl' -newermt "$TODAY" 2>/dev/null | head -10)

if [ -z "$TRANSCRIPTS" ]; then
  echo "OK: no transcripts today ($STAMP) — nothing to extract"
  exit 0
fi

PROMPT="generated: $STAMP
You are the daily-extract loop. Today is $TODAY.

1. Read these session transcripts (extract substance, ignore tool noise):
$TRANSCRIPTS
2. If a Grain MCP is available, also pull today's meeting transcripts.
3. Tail log.md (last 40 lines) to see what same-turn capture already recorded today — do NOT duplicate it.
4. APPEND (never rewrite) per Data Recording Discipline in CLAUDE.md:
   - log.md under '## $TODAY' — decisions, meetings, customer details, learnings. Atomic bullets, sources cited.
   - commitments.md — detected commitments as 'action — date — owner [→ log $TODAY]'.
   - customer-intel.md — customer signals under the right account header.
5. Print a one-line summary: 'daily-extract: N log entries, N commitments, N customer signals'.
If there is nothing new, change no files and print 'daily-extract: nothing new'."

OUT=$("$CLAUDE_BIN" -p "$PROMPT" --dangerously-skip-permissions 2>&1) || fail "claude invocation"
SUMMARY=$(echo "$OUT" | grep -E '^daily-extract:' | tail -1)

# Commit isolation: only the three capture files, tagged (auto-extract)
git add log.md commitments.md customer-intel.md 2>/dev/null
if git diff --cached --quiet; then
  echo "OK: nothing new ($STAMP)"
  exit 0
fi
git commit -qm "(auto-extract) $TODAY: ${SUMMARY:-capture}" || fail "commit"
git push -q origin HEAD 2>/dev/null || true
[ -x "$NOTIFY" ] && "$NOTIFY" "${SUMMARY:-daily-extract ran} ($STAMP)" || true
echo "OK: $SUMMARY"
