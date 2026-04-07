#!/bin/bash
# Send a Telegram message from the Linx advisor
# Usage: ./notify.sh "Your message here"

set -e
source "$(dirname "$0")/.env"

MESSAGE="$1"
if [ -z "$MESSAGE" ]; then
  echo "No message provided"
  exit 1
fi

RESPONSE=$(curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  -d chat_id="${TELEGRAM_USER_ID}" \
  -d text="${MESSAGE}" \
  -d parse_mode="Markdown")

if echo "$RESPONSE" | grep -q '"ok":true'; then
  echo "Sent"
else
  echo "FAILED: $RESPONSE" >&2
  exit 1
fi
