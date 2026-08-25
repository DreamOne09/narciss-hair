#!/usr/bin/env bash
# Deploy to official Vercel project alias (NOT temporary *.vercel.app).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

PRIMARY_ALIAS="narciss-hair.vercel.app"
FALLBACK_ALIAS="${FALLBACK_ALIAS:-narciss-hair.dropout.tw}"

if [[ -z "${VERCEL_TOKEN:-}" ]]; then
  echo "VERCEL_TOKEN is required for official deployment to ${PRIMARY_ALIAS}." >&2
  echo "Create one at https://vercel.com/account/tokens (deploy + alias permissions)." >&2
  exit 1
fi

export VERCEL_TOKEN
unset VERCEL_ORG_ID VERCEL_PROJECT_ID

if [[ ! -f .vercel/project.json ]]; then
  echo "Linking Vercel project (non-interactive)..."
  npx vercel@latest link --yes --project narciss-hair 2>/dev/null || \
    npx vercel@latest link --yes
fi

echo "Building production bundle..."
npx vercel@latest build --prod

echo "Deploying prebuilt production..."
DEPLOY_URL="$(npx vercel@latest deploy --prebuilt --prod --yes)"
echo "Deployment URL: ${DEPLOY_URL}"

set_alias() {
  local alias="$1"
  if npx vercel@latest alias set "${DEPLOY_URL}" "${alias}"; then
    echo "Alias live: https://${alias}"
    return 0
  fi
  return 1
}

if set_alias "${PRIMARY_ALIAS}"; then
  TARGET_ALIAS="${PRIMARY_ALIAS}"
else
  echo "Primary alias ${PRIMARY_ALIAS} unavailable; trying ${FALLBACK_ALIAS}..."
  if set_alias "${FALLBACK_ALIAS}"; then
    TARGET_ALIAS="${FALLBACK_ALIAS}"
  else
    echo "Failed to bind ${PRIMARY_ALIAS} or ${FALLBACK_ALIAS}." >&2
    exit 1
  fi
fi

echo "Verifying https://${TARGET_ALIAS}/ ..."
for _ in 1 2 3 4 5; do
  STATUS="$(curl -s -o /dev/null -w '%{http_code}' "https://${TARGET_ALIAS}/")"
  if [[ "${STATUS}" == "200" ]]; then
    echo "OK: https://${TARGET_ALIAS}/"
    exit 0
  fi
  sleep 3
done

echo "Alias set but https://${TARGET_ALIAS}/ did not return 200 (got ${STATUS})." >&2
exit 1
