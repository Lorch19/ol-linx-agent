#!/bin/bash
# Surfaces the two drift signals that caused Week 1 data loss:
#   1. Orphan branches on origin that haven't merged to main
#   2. Stale log.md (>2 days since last entry)
# Writes to stdout so Claude sees the warnings in the session context.

set -euo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

git fetch --all --prune --quiet 2>/dev/null || true

main_sha=$(git rev-parse origin/main 2>/dev/null || echo "")

echo "=== Repo state check ==="

# 1. Orphan branches — remote claude/* branches with commits not in main
if [[ -n "$main_sha" ]]; then
  orphans=()
  while IFS= read -r branch; do
    [[ -z "$branch" ]] && continue
    branch_sha=$(git rev-parse "$branch" 2>/dev/null || echo "")
    [[ -z "$branch_sha" ]] && continue
    ahead=$(git rev-list --count "$main_sha..$branch_sha" 2>/dev/null || echo 0)
    if [[ "$ahead" -gt 0 ]]; then
      orphans+=("$branch (+$ahead commits)")
    fi
  done < <(git for-each-ref --format='%(refname:short)' refs/remotes/origin/claude/ 2>/dev/null | grep -v '/HEAD$' || true)

  current_branch=$(git branch --show-current 2>/dev/null || echo "")
  orphans_filtered=()
  for o in "${orphans[@]:-}"; do
    [[ "$o" == "origin/$current_branch "* ]] && continue
    orphans_filtered+=("$o")
  done

  if [[ ${#orphans_filtered[@]} -gt 0 ]]; then
    echo "WARN: ${#orphans_filtered[@]} orphan branch(es) not merged to main:"
    for o in "${orphans_filtered[@]}"; do echo "  - $o"; done
    echo "Review before branching or you will repeat prior work blind."
  else
    echo "OK: no orphan claude/* branches ahead of main."
  fi
fi

# 2. Log staleness — log.md last entry date vs today
if [[ -f log.md ]]; then
  last_entry=$(grep -oE '^## 2[0-9]{3}-[0-9]{2}-[0-9]{2}' log.md | sort -r | head -1 | sed 's/^## //')
  if [[ -n "$last_entry" ]]; then
    today=$(date +%Y-%m-%d)
    if command -v python3 >/dev/null 2>&1; then
      days_stale=$(python3 -c "from datetime import date; a=date.fromisoformat('$last_entry'); b=date.fromisoformat('$today'); print((b-a).days)" 2>/dev/null || echo 0)
    else
      days_stale=0
    fi
    if [[ "$days_stale" -gt 2 ]]; then
      echo "WARN: log.md last entry is $last_entry ($days_stale days ago). Capture recent work before starting new."
    else
      echo "OK: log.md current ($last_entry)."
    fi
  fi
fi

# 3. Current branch check
current_branch=$(git branch --show-current 2>/dev/null || echo "")
if [[ -n "$current_branch" && "$current_branch" != "main" ]]; then
  echo "NOTE: on branch '$current_branch'. Merge to main before session end, or work will orphan."
fi

echo "=== End check ==="
exit 0
