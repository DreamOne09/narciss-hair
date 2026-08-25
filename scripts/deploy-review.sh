#!/usr/bin/env bash
# Patch the locked anonymous Vercel project in place (never mint a new temporary URL).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
LOCK_FILE="$ROOT/.vercel-review/REVIEW_URL"
BACKUP_DIR="$ROOT/.vercel-review"

if [[ ! -f "$ROOT/.vercel/anonymous.json" ]]; then
  echo "Missing .vercel/anonymous.json — restore Orion credentials before deploying." >&2
  echo "See .vercel-review/README.md" >&2
  exit 1
fi

if [[ -f "$LOCK_FILE" ]]; then
  LOCKED_URL="$(tr -d '[:space:]' < "$LOCK_FILE")"
  echo "Locked review URL: $LOCKED_URL"
fi

mkdir -p "$BACKUP_DIR"
cp "$ROOT/.vercel/anonymous.json" "$BACKUP_DIR/anonymous.json.bak"

cd "$ROOT"
unset VERCEL_TOKEN

npm run build
npx vercel@latest build --prod
npx vercel@latest deploy --prebuilt --temporary -y

cp "$ROOT/.vercel/anonymous.json" "$BACKUP_DIR/anonymous.json"

echo "Backed up credentials to $BACKUP_DIR/anonymous.json"
