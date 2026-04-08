#!/bin/bash
# OpenClaw Telegram Bot — multi-project router with stateful conversations
# Polls for incoming messages, detects project context, routes to Claude Code
# Conversations persist across messages using Claude Code session resume
# Usage: ./telegram-bot.sh (runs as launchd service)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
set -a
source "$SCRIPT_DIR/.env"
set +a

OFFSET_FILE="$SCRIPT_DIR/.telegram_offset"
SESSIONS_DIR="$SCRIPT_DIR/.telegram_sessions"
CLAUDE_BIN="$HOME/.local/bin/claude"
POLL_INTERVAL=5
SESSION_TTL=86400  # 24 hours — sessions auto-expire to pick up fresh project state

mkdir -p "$SESSIONS_DIR"

# Project registry: keyword patterns → directory + persona
# Format: "pattern|directory|persona"
PROJECTS=(
  "linx|iam|iga|competitor|battle.card|positioning|nhi|sailpoint|cyberark|conductor|lumos|saviynt|brief|commitment|milestone|customer.intel|prep|onboard|/brief|/commitments|/overdue|/log|/prep|/compete|/status|/Users/omrilorch/ol-linx-agent|Omri's Linx Security strategic advisor. Concise, evidence-first, push back hard."
  "portfolio|stock|ticker|position|trade|p.?l|market|vps|backtest|hedge|option|michael|/Users/omrilorch/portfolio-system|Omri's portfolio agent. Focus on positions, risk, and market analysis."
  "shop|ecommerce|shopagent|product.listing|scrape|/Users/omrilorch/IL-ecommerce-Agent|Omri's ShopAgent assistant."
  "bloom|first.bloom|baby|toddler|child|/Users/omrilorch/first-bloom-build|Omri's First Bloom assistant."
  "watch.?together|movie|stream|room|/Users/omrilorch/WatchTogether-Agent|Omri's WatchTogether assistant."
)

DEFAULT_DIR=""
DEFAULT_PERSONA=""

if [ -f "$OFFSET_FILE" ]; then
  OFFSET=$(cat "$OFFSET_FILE")
else
  OFFSET=0
fi

LOG_FILE="$SCRIPT_DIR/.telegram-bot.log"

log() {
  echo "[$(date '+%H:%M:%S')] $1" >> "$LOG_FILE"
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
    local persona="${project##*|}"
    local rest="${project%|*}"
    local dir="${rest##*|}"
    local patterns="${rest%|*}"

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

# Get session file path for a project (or "general" for unrouted messages)
get_session_file() {
  local project_dir="$1"
  if [ -z "$project_dir" ]; then
    echo "$SESSIONS_DIR/general.session"
  else
    local project_name=$(basename "$project_dir")
    echo "$SESSIONS_DIR/${project_name}.session"
  fi
}

# Run claude with session persistence — resumes prior conversation if one exists
run_claude() {
  local project_dir="$1"
  local persona="$2"
  local message="$3"

  local session_file
  session_file=$(get_session_file "$project_dir")

  local system_prompt
  if [ -n "$persona" ]; then
    system_prompt="You are $persona Responding via Telegram. Be concise (under 300 words). Use Markdown compatible with Telegram (bold with *, italic with _, code with \`). Read relevant files from the working directory if needed."
  else
    system_prompt="You are Omri's personal assistant (OpenClaw). Be concise (under 300 words). Use Telegram-compatible Markdown.

If Omri's message is clearly about a specific project but you can't tell which one, ask him to clarify with one of: Linx, Portfolio, ShopAgent, First Bloom, WatchTogether.

Otherwise just help with whatever he needs."
  fi

  local json_output exit_code

  # Expire stale sessions so the bot picks up fresh project state daily
  if [ -f "$session_file" ]; then
    local file_age=$(( $(date +%s) - $(stat -f %m "$session_file") ))
    if [ "$file_age" -gt "$SESSION_TTL" ]; then
      log "Session expired (${file_age}s old), starting fresh"
      rm -f "$session_file"
    fi
  fi

  # Try resuming existing session
  if [ -f "$session_file" ]; then
    local session_id
    session_id=$(cat "$session_file")
    log "Resuming session $session_id"

    json_output=$("$CLAUDE_BIN" -p \
      --output-format json \
      --max-turns 10 \
      --resume "$session_id" \
      "$message" < /dev/null 2>>"$SCRIPT_DIR/.telegram-bot.err")
    exit_code=$?

    # If resume failed (expired/corrupt session), fall through to new session
    if [ $exit_code -ne 0 ]; then
      log "Session resume failed (exit $exit_code), starting fresh"
      rm -f "$session_file"
    fi
  fi

  # Start new session if no existing session or resume failed
  if [ ! -f "$session_file" ]; then
    local new_args=(-p --output-format json --max-turns 10)
    new_args+=(--append-system-prompt "$system_prompt")
    if [ -n "$project_dir" ]; then
      new_args+=(-d "$project_dir")
    fi

    json_output=$("$CLAUDE_BIN" "${new_args[@]}" "$message" < /dev/null 2>>"$SCRIPT_DIR/.telegram-bot.err")
    exit_code=$?
    log "New session: exit=$exit_code output_len=${#json_output}"
  fi

  if [ $exit_code -ne 0 ] || [ -z "$json_output" ]; then
    log "Claude failed: exit=$exit_code json_empty=$([ -z "$json_output" ] && echo yes || echo no)"
    echo "$json_output" > "$SCRIPT_DIR/.telegram-bot-last-error.json"
    echo "Sorry, something went wrong."
    return 1
  fi

  # Parse JSON: save session, extract result, handle errors
  local parsed
  parsed=$(echo "$json_output" | python3 -c "
import sys, json
d = json.load(sys.stdin)
sid = d.get('session_id', '')
result = d.get('result', '')
is_error = d.get('is_error', False)
print(f'{sid}')
print(f'{is_error}')
print(result)
" 2>>"$SCRIPT_DIR/.telegram-bot.err")

  local new_session_id=$(echo "$parsed" | head -1)
  local is_error=$(echo "$parsed" | sed -n '2p')
  local response_text=$(echo "$parsed" | tail -n +3)

  if [ -n "$new_session_id" ]; then
    echo "$new_session_id" > "$session_file"
    log "Session saved: $new_session_id"
  fi

  if [ "$is_error" = "True" ] || [ -z "$response_text" ]; then
    log "Claude returned error or empty result"
    echo "Sorry, I couldn't process that. Try again or /reset."
    return 1
  fi

  echo "$response_text"
}

handle_message() {
  local text="$1"
  local from_id="$2"

  if [ "$from_id" != "$TELEGRAM_USER_ID" ]; then
    log "Ignored message from unauthorized user: $from_id"
    return
  fi

  log "Received: $text"

  # Handle /reset command — clears conversation session
  local text_lower=$(echo "$text" | tr '[:upper:]' '[:lower:]')
  if [[ "$text_lower" == "/reset"* ]]; then
    local reset_target="${text_lower#/reset}"
    reset_target=$(echo "$reset_target" | xargs)  # trim whitespace

    if [ -z "$reset_target" ]; then
      # Reset all sessions
      rm -f "$SESSIONS_DIR"/*.session
      send_message "All conversation sessions cleared."
      log "All sessions reset"
    else
      # Reset specific project session
      local found=0
      for f in "$SESSIONS_DIR"/*.session; do
        [ -f "$f" ] || continue
        local fname=$(basename "$f" .session)
        if echo "$fname" | grep -qi "$reset_target"; then
          rm -f "$f"
          send_message "Session cleared for *${fname}*."
          log "Session reset: $fname"
          found=1
          break
        fi
      done
      if [ $found -eq 0 ]; then
        send_message "No session found matching '$reset_target'."
      fi
    fi
    return
  fi

  # Route to correct project
  local route_result
  route_result=$(route_message "$text")
  local project_dir="${route_result%%|*}"
  local persona="${route_result#*|}"

  if [ -z "$project_dir" ]; then
    log "General message — no project context"
    send_message "⏳ _Processing..._"
    local response
    response=$(run_claude "" "" "$text")
    send_message "$response"
    log "Responded general (${#response} chars)"
    return
  fi

  local project_name=$(basename "$project_dir")
  log "Routed to: $project_name"
  send_message "⏳ _Processing ($project_name)..._"

  local response
  response=$(run_claude "$project_dir" "$persona" "$text")
  send_message "$response"
  log "Responded to $project_name (${#response} chars)"
}

log "OpenClaw bot started (stateful). Polling every ${POLL_INTERVAL}s..."

while true; do
  UPDATES=$(curl -s "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates?offset=${OFFSET}&timeout=30" 2>>"$SCRIPT_DIR/.telegram-bot.err")

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
