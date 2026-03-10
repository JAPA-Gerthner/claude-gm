#!/bin/bash
# Production setup script
# Usage: ./setup-prod.sh app.example.com auth.example.com

set -e

if [ $# -lt 2 ]; then
    echo "Usage: $0 <app-domain> <auth-domain>"
    echo "Example: $0 quest.example.com auth.example.com"
    exit 1
fi

APP_DOMAIN=$1
AUTH_DOMAIN=$2

echo "Setting up production for:"
echo "  App: https://$APP_DOMAIN"
echo "  Auth: https://$AUTH_DOMAIN"
echo ""

# Generate secrets if not exist
if [ ! -f .env ]; then
    echo "Creating .env from template..."
    cp .env.example .env
fi

# Generate random secrets
JWT_SECRET=$(openssl rand -hex 32)
GLITCHTIP_SECRET=$(openssl rand -hex 32)
CASDOOR_CLIENT_SECRET=$(openssl rand -hex 32)
PG_PASS=$(openssl rand -hex 16)
ADMIN_PASSWORD=$(openssl rand -base64 12)

# Update .env
cat > .env << EOF
# Domains
APP_DOMAIN=$APP_DOMAIN
AUTH_DOMAIN=$AUTH_DOMAIN

# Postgres
PG_USER=questkeeper
PG_PASS=$PG_PASS

# Auth
JWT_SECRET=$JWT_SECRET
CASDOOR_CLIENT_ID=questkeeper-client
CASDOOR_CLIENT_SECRET=$CASDOOR_CLIENT_SECRET

# GlitchTip
GLITCHTIP_SECRET=$GLITCHTIP_SECRET
VITE_SENTRY_DSN=

# Admin password (change after first login!)
ADMIN_PASSWORD=$ADMIN_PASSWORD
EOF

echo "Generated .env with secure secrets"

# Update Casdoor config
sed -i "s|AUTH_DOMAIN|$AUTH_DOMAIN|g" casdoor/app.prod.conf
sed -i "s|POSTGRES_PASSWORD|$PG_PASS|g" casdoor/app.prod.conf

# Update Casdoor init data
sed -i "s|APP_DOMAIN|$APP_DOMAIN|g" casdoor/init_data.prod.json
sed -i "s|CASDOOR_CLIENT_SECRET|$CASDOOR_CLIENT_SECRET|g" casdoor/init_data.prod.json
sed -i "s|ADMIN_PASSWORD|$ADMIN_PASSWORD|g" casdoor/init_data.prod.json

echo ""
echo "=== Setup complete! ==="
echo ""
echo "Next steps:"
echo "1. Point DNS records to this server:"
echo "   $APP_DOMAIN  -> $(curl -s ifconfig.me)"
echo "   $AUTH_DOMAIN -> $(curl -s ifconfig.me)"
echo ""
echo "2. Start the stack:"
echo "   docker compose -f docker-compose.prod.yml up -d"
echo ""
echo "3. Login credentials:"
echo "   URL: https://$APP_DOMAIN"
echo "   User: admin"
echo "   Password: $ADMIN_PASSWORD"
echo ""
echo "4. After first login, change the admin password!"
echo ""
