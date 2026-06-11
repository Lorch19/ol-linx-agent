#!/bin/bash
# Session-end net: silent auto-commit + push of anything left uncommitted.
# Softened from blocking gate 2026-06-11 (REBUILD-PLAN.md verdict #5):
# the no-data-loss function is now preserved by construction instead of by
# blocking Claude and hoping for compliance. Original blocking version is in
# git history. Always exits 0 — never blocks stop.
#
# Scope guards:
#   - .env and bot runtime files are protected by .gitignore (never staged by add -A)
#   - commit message carries a file list + diffstat so auto-commits are reviewable
#   - pushes current branch to origin; merge-to-main remains a human/session decision,
#     surfaced by session-start-check.sh's orphan warning

set -uo pipefail

# Respect the re-entry guard from the original hook
input=$(cat)
stop_hook_active=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('stop_hook_active', False))" 2>/dev/null || echo "False")
if [[ "$stop_hook_active" == "True" ]]; then
  exit 0
fi

cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)" || exit 0

# Stage everything (gitignore shields .env, logs, worktrees, local settings)
git add -A 2>/dev/null || exit 0

if ! git diff --cached --quiet 2>/dev/null; then
  files=$(git diff --cached --name-only | head -8 | tr '\n' ' ')
  stat=$(git diff --cached --shortstat)
  git commit -q -m "auto-commit (session end): $files" -m "$stat" 2>/dev/null || exit 0
fi

# Push current branch so nothing exists only on this machine
current_branch=$(git branch --show-current 2>/dev/null || echo "")
if [[ -n "$current_branch" ]]; then
  if ! git push -q origin "$current_branch" 2>/dev/null; then
    git push -q -u origin "$current_branch" 2>/dev/null || true
  fi
fi

exit 0
