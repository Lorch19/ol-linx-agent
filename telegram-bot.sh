#!/bin/bash
# Two-way Telegram bot for Linx advisor
# Polls for incoming messages and routes them to Claude Code
# Usage: ./telegram-bot.sh (runs in foreground)
# Stop: Ctrl+C or kill the process

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/.env"

OFFSET_FILE="$SCRIPT_DIR/.telegram_offset"
CLAUDE_BIN="$HOME/.local/bin/claude"
POLL_INTERVAL=5  # seconds between polls

# Initialize offset
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
  # Telegram has a 4096 char limit per message
  if [ ${#text} -gt 4000 ]; then
    text="${text:0:3990}..."
  fi
  curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -d chat_id="${TELEGRAM_USER_ID}" \
    -d text="${text}" \
    -d parse_mode="Markdown" > /dev/null 2>&1 || \
  # Retry without Markdown if it fails (common with special chars)
  curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
    -d chat_id="${TELEGRAM_USER_ID}" \
    -d text="${text}" > /dev/null 2>&1
}

handle_message() {
  local text="$1"
  local from_id="$2"

  # Security: only respond to the authorized user
  if [ "$from_id" != "$TELEGRAM_USER_ID" ]; then
    log "Ignored message from unauthorized user: $from_id"
    return
  fi

  log "Received: $text"
  send_message "⏳ _Processing..._"

  # Route to Claude Code with project context
  local response
  response=$("$CLAUDE_BIN" -p \
    --max-turns 3 \
    -d "$SCRIPT_DIR" \
    "You are Omri's Linx advisor responding via Telegram. Be concise (under 300 words). Use Markdown formatting compatible with Telegram (bold with *, italic with _, code with \`).

Read relevant files from the working directory if needed to answer.

User message: $text" 2>&1) || response="Sorry, something went wrong processing that."

  send_message "$response"
  log "Responded (${#response} chars)"
}

log "Linx Telegram bot started. Polling every ${POLL_INTERVAL}s..."

while true; do
  # Get updates from Telegram
  UPDATES=$(curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${OFFSET}&timeout=30" 2>/dev/null)

  if [ -z "$UPDATES" ]; then
    sleep "$POLL_INTERVAL"
    continue
  fi

  # Check if there are results
  HAS_RESULTS=$(echo "$UPDATES" | python3 -c "import sys,json; d=json.load(sys.stdin); print(len(d.get('result',[])))" 2>/dev/null || echo "0")

  if [ "$HAS_RESULTS" = "0" ]; then
    sleep "$POLL_INTERVAL"
    continue
  fi

  # Process each message
  echo "$UPDATES" | python3 -c "
import sys, json
data = json.load(sys.stdin)
for update in data.get('result', []):
    uid = update['update_id']
    msg = update.get('message', {})
    text = msg.get('text', '')
    from_id = str(msg.get('from', {}).get('id', ''))
    if text:
        # Escape for shell safety
        text = text.replace(\"'\", \"'\\\\''\")
        print(f\"{uid}|{from_id}|{text}\")
" 2>/dev/null | while IFS='|' read -r update_id from_id text; do
    OFFSET=$((update_id + 1))
    echo "$OFFSET" > "$OFFSET_FILE"
    handle_message "$text" "$from_id"
  done

  # Update offset from file (subshell doesn't propagate)
  if [ -f "$OFFSET_FILE" ]; then
    OFFSET=$(cat "$OFFSET_FILE")
  fi

  sleep "$POLL_INTERVAL"
done
