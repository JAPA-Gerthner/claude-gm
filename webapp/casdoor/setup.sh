#!/bin/sh
# Casdoor setup script - creates org, apps, and user via API
set -e

CASDOOR_URL="${CASDOOR_URL:-http://casdoor:8000}"
ADMIN_USER="admin"
ADMIN_PASS="123"
COOKIE_FILE="/tmp/casdoor_cookies"

echo "Waiting for Casdoor..."
until curl -sf "$CASDOOR_URL/.well-known/openid-configuration" > /dev/null 2>&1; do
  sleep 2
done
echo "Casdoor is ready!"

# Login and save cookies
echo "Logging in as admin..."
LOGIN_RESP=$(curl -sf -c "$COOKIE_FILE" "$CASDOOR_URL/api/login" \
  -H "Content-Type: application/json" \
  -d '{
    "application": "app-built-in",
    "organization": "built-in",
    "username": "'"$ADMIN_USER"'",
    "password": "'"$ADMIN_PASS"'",
    "type": "login"
  }')

if echo "$LOGIN_RESP" | grep -q '"status"'; then
  STATUS=$(echo "$LOGIN_RESP" | grep -o '"status": *"[^"]*"' | cut -d'"' -f4)
  if [ "$STATUS" = "ok" ]; then
    echo "Login successful!"
  else
    echo "Login failed: $LOGIN_RESP"
    exit 1
  fi
else
  echo "Login failed: $LOGIN_RESP"
  exit 1
fi

# Helper function for authenticated requests
api() {
  curl -sf -b "$COOKIE_FILE" "$CASDOOR_URL$1" \
    -H "Content-Type: application/json" \
    "${@:2}"
}

# Check if questkeeper org exists
ORG_EXISTS=$(api "/api/get-organization?id=admin/questkeeper" 2>/dev/null | grep -c '"name":"questkeeper"' || echo "0")

if [ "$ORG_EXISTS" = "0" ]; then
  echo "Creating organization: questkeeper..."
  api "/api/add-organization" -d '{
    "owner": "admin",
    "name": "questkeeper",
    "displayName": "QuestKeeper",
    "websiteUrl": "http://localhost:8080",
    "passwordType": "plain",
    "passwordOptions": ["AtLeast6"],
    "countryCodes": ["US", "RU"],
    "languages": ["en", "ru"],
    "initScore": 2000,
    "enableSoftDeletion": false,
    "isProfilePublic": false
  }' > /dev/null
  echo "Organization created!"
else
  echo "Organization questkeeper already exists"
fi

# Create applications
create_app() {
  APP_NAME=$1
  CLIENT_ID=$2
  CLIENT_SECRET=$3
  REDIRECT_URI=$4
  DISPLAY_NAME=$5

  APP_EXISTS=$(api "/api/get-application?id=admin/$APP_NAME" 2>/dev/null | grep -c "\"name\":\"$APP_NAME\"" || echo "0")

  if [ "$APP_EXISTS" = "0" ]; then
    echo "Creating application: $APP_NAME..."
    api "/api/add-application" -d '{
      "owner": "admin",
      "name": "'"$APP_NAME"'",
      "displayName": "'"$DISPLAY_NAME"'",
      "organization": "questkeeper",
      "clientId": "'"$CLIENT_ID"'",
      "clientSecret": "'"$CLIENT_SECRET"'",
      "redirectUris": ["'"$REDIRECT_URI"'"],
      "tokenFormat": "JWT",
      "expireInHours": 168,
      "refreshExpireInHours": 336,
      "enablePassword": true,
      "enableSignUp": true,
      "grantTypes": ["authorization_code", "refresh_token"],
      "cert": "cert-built-in"
    }' > /dev/null
    echo "Application $APP_NAME created!"
  else
    echo "Application $APP_NAME already exists"
  fi
}

create_app "questkeeper-app" "questkeeper-client" "questkeeper-secret-2024" "http://localhost:8080/api/auth/callback" "QuestKeeper"
create_app "minio-app" "minio-client" "minio-secret-2024" "http://localhost:9001/oauth_callback" "MinIO Storage"
create_app "glitchtip-app" "glitchtip-client" "glitchtip-secret-2024" "http://localhost:8090/accounts/oidc/casdoor/login/callback/" "GlitchTip Error Tracking"

# Create user in questkeeper org
USER_EXISTS=$(api "/api/get-user?id=questkeeper/admin" 2>/dev/null | grep -c '"name":"admin"' || echo "0")

if [ "$USER_EXISTS" = "0" ]; then
  echo "Creating user: questkeeper/admin..."
  api "/api/add-user" -d '{
    "owner": "questkeeper",
    "name": "admin",
    "displayName": "Admin",
    "email": "admin@questkeeper.dev",
    "password": "admin123",
    "isAdmin": true,
    "type": "normal-user",
    "signupApplication": "questkeeper-app"
  }' > /dev/null
  echo "User created!"
else
  echo "User questkeeper/admin already exists"
fi

# Cleanup
rm -f "$COOKIE_FILE"

echo ""
echo "=== Setup complete! ==="
echo "Casdoor admin: http://localhost:8000 (built-in/admin : 123)"
echo "QuestKeeper login: questkeeper/admin : admin123"
echo ""
