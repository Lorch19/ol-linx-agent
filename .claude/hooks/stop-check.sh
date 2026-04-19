#!/bin/bash
# Session-end guardrail: blocks stop if (a) uncommitted changes exist
# or (b) local branch is ahead of origin/main with unpushed or unmerged work.
# Exit 2 = block + message to Claude (surfaced as tool feedback).

set -euo pipefail

input=$(cat)
stop_hook_active=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('stop_hook_active', False))" 2>/dev/null || echo "False")
if [[ "$stop_hook_active" == "True" ]]; then
  exit 0
fi

cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

# Uncommitted changes?
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Uncommitted changes present. Commit log/commitments/brief updates before ending session." >&2
  exit 2
fi

# Untracked files in tracked directories?
untracked=$(git ls-files --others --exclude-standard)
if [[ -n "$untracked" ]]; then
  echo "Untracked files present — add or gitignore before ending:" >&2
  echo "$untracked" >&2
  exit 2
fi

# On a feature branch with commits not yet on main?
current_branch=$(git branch --show-current 2>/dev/null || echo "")
if [[ -n "$current_branch" && "$current_branch" != "main" ]]; then
  if git rev-parse origin/main >/dev/null 2>&1; then
    ahead=$(git rev-list --count "origin/main..HEAD" 2>/dev/null || echo 0)
    if [[ "$ahead" -gt 0 ]]; then
      # Check if branch is pushed
      if git rev-parse "origin/$current_branch" >/dev/null 2>&1; then
        unpushed=$(git rev-list --count "origin/$current_branch..HEAD" 2>/dev/null || echo 0)
        if [[ "$unpushed" -gt 0 ]]; then
          echo "Branch '$current_branch' has $unpushed unpushed commit(s). Push before ending: git push -u origin $current_branch" >&2
          exit 2
        fi
      else
        echo "Branch '$current_branch' has $ahead commit(s) not on main and isn't pushed. Push: git push -u origin $current_branch" >&2
        exit 2
      fi
    fi
  fi
fi

exit 0
