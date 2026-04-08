#!/bin/bash
# OpenClaw Telegram Bot — multi-project router
# Polls for incoming messages, detects project context, routes to Claude Code
# Usage: ./telegram-bot.sh (runs as launchd service)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/.env"

OFFSET_FILE="$SCRIPT_DIR/.telegram_offset"
CLAUDE_BIN="$HOME/.local/bin/claude"
POLL_INTERVAL=5

# Project registry: keyword patterns → directory + persona
# Format: "pattern|directory|persona"
PROJECTS=(
  "linx|iam|iga|competitor|battle.card|positioning|nhi|sailpoint|cyberark|conductor|lumos|saviynt|brief|commitment|milestone|customer.intel|prep|onboard|/brief|/commitments|/overdue|/log|/prep|/compete|/status|/Users/omrilorch/ol-linx-agent|Omri's Linx Security strategic advisor. Concise, evidence-first, push back hard."
  "portfolio|stock|ticker|position|trade|p.?l|market|vps|backtest|hedge|option|michael|/Users/omrilorch/portfolio-system|Omri's portfolio agent. Focus on positions, risk, and market analysis."
  "shop|ecommerce|shopagent|product.listing|scrape|/Users/omrilorch/IL-ecommerce-Agent|Omri's ShopAgent assistant."
  "bloom|first.bloom|baby|toddler|child|/Users/omrilorch/first-bloom-build|Omri's First Bloom assistant."
  "watch.?together|movie|stream|room|/Users/omrilorch/WatchTogether-Agent|Omri's WatchTogether assistant."
)

# Default project if no match
DEFAULT_DIR="/Users/omrilorch/ol-linx-agent"
DEFAULT_PERSONA="Omri's general assistant. Figure out what he needs and help."

if [ -f "$OFFSET_FILE" ]; then
  OFFSET=$(cat "$OFFSET_FILE")
else
  OFFSET=0
fi

log() {
  echo "[$(date '+%H:%M:%S')] $1"
}

send_message() {
  local text="$1"
  if [ ${#text} -gt 4000 ]; then
    text="${text:0:3990}..."
  fi
  curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -d chat_id="${TELEGRAM_USER_ID}" \
    -d text="${text}" \
    -d parse_mode="Markdown" > /dev/null 2>&1 || \
  curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -d chat_id="${TELEGRAM_USER_ID}" \
    -d text="${text}" > /dev/null 2>&1
}

route_message() {
  local text="$1"
  local text_lower=$(echo "$text" | tr '[:upper:]' '[:lower:]')

  for project in "${PROJECTS[@]}"; do
    # Split: everything before the second-to-last | is patterns, then dir, then persona
    local persona="${project##*|}"
    local rest="${project%|*}"
    local dir="${rest##*|}"
    local patterns="${rest%|*}"

    # Check each pattern (separated by |)
    IFS='|' read -ra PATS <<< "$patterns"
    for pat in "${PATS[@]}"; do
      if echo "$text_lower" | grep -qE "$pat"; then
        echo "$dir|$persona"
        return
      fi
    done
  done

  echo "$DEFAULT_DIR|$DEFAULT_PERSONA"
}

handle_message() {
  local text="$1"
  local from_id="$2"

  if [ "$from_id" != "$TELEGRAM_USER_ID" ]; then
    log "Ignored message from unauthorized user: $from_id"
    return
  fi

  log "Received: $text"

  # Route to correct project
  local route_result
  route_result=$(route_message "$text")
  local project_dir="${route_result%%|*}"
  local persona="${route_result#*|}"
  local project_name=$(basename "$project_dir")

  log "Routed to: $project_name"
  send_message "⏳ _Processing ($project_name)..._"

  local response
  response=$("$CLAUDE_BIN" -p \
    --max-turns 3 \
    -d "$project_dir" \
    "You are $persona Responding via Telegram. Be concise (under 300 words). Use Markdown compatible with Telegram (bold with *, italic with _, code with \`).

Read relevant files from the working directory if needed.

User message: $text" 2>&1) || response="Sorry, something went wrong processing that."

  send_message "$response"
  log "Responded to $project_name (${#response} chars)"
}

log "OpenClaw bot started. Polling every ${POLL_INTERVAL}s..."

while true; do
  UPDATES=$(curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${OFFSET}&timeout=30" 2>/dev/null)

  if [ -z "$UPDATES" ]; then
    sleep "$POLL_INTERVAL"
    continue
  fi

  HAS_RESULTS=$(echo "$UPDATES" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('result',[])))" 2>/dev/null || echo "0")

  if [ "$HAS_RESULTS" = "0" ]; then
    sleep "$POLL_INTERVAL"
    continue
  fi

  echo "$UPDATES" | python3 -c "
import sys, json
data = json.load(sys.stdin)
for update in data.get('result', []):
    uid = update['update_id']
    msg = update.get('message', {})
    text = msg.get('text', '')
    from_id = str(msg.get('from', {}).get('id', ''))
    if text:
        text = text.replace(\"'\", \"'\\\\''\")
        print(f\"{uid}|{from_id}|{text}\")
" 2>/dev/null | while IFS='|' read -r update_id from_id text; do
    OFFSET=$((update_id + 1))
    echo "$OFFSET" > "$OFFSET_FILE"
    handle_message "$text" "$from_id"
  done

  if [ -f "$OFFSET_FILE" ]; then
    OFFSET=$(cat "$OFFSET_FILE")
  fi

  sleep "$POLL_INTERVAL"
done
