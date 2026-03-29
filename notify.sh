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

curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage" \
  -d chat_id="${TELEGRAM_USER_ID}" \
  -d text="${MESSAGE}" \
  -d parse_mode="Markdown" > /dev/null
