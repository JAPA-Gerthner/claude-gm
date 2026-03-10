#!/usr/bin/env python
"""
Setup OIDC provider for GlitchTip (Casdoor integration)

Run inside glitchtip container:
  docker compose exec glitchtip python /setup/setup_oidc.py
"""
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'glitchtip.settings')
django.setup()

from django.contrib.sites.models import Site
from allauth.socialaccount.models import SocialApp

# Configuration
PROVIDER_ID = 'casdoor'
PROVIDER_NAME = 'Login with Casdoor'
CLIENT_ID = os.environ.get('CASDOOR_CLIENT_ID', 'glitchtip-client')
CLIENT_SECRET = os.environ.get('CASDOOR_CLIENT_SECRET', 'glitchtip-secret-2024')
CASDOOR_URL = os.environ.get('CASDOOR_URL', 'http://casdoor:8000')

def main():
    # Get or create site
    site, _ = Site.objects.get_or_create(
        id=1,
        defaults={'domain': 'localhost:8090', 'name': 'GlitchTip'}
    )

    # Check if already configured
    existing = SocialApp.objects.filter(provider='openid_connect', provider_id=PROVIDER_ID).first()
    if existing:
        print(f'OIDC provider "{PROVIDER_ID}" already exists (id={existing.id})')
        print('Updating configuration...')
        existing.name = PROVIDER_NAME
        existing.client_id = CLIENT_ID
        existing.secret = CLIENT_SECRET
        existing.settings = {'server_url': CASDOOR_URL}
        existing.save()
        print('Updated!')
    else:
        # Create OIDC provider
        app = SocialApp.objects.create(
            provider='openid_connect',
            provider_id=PROVIDER_ID,
            name=PROVIDER_NAME,
            client_id=CLIENT_ID,
            secret=CLIENT_SECRET,
            settings={'server_url': CASDOOR_URL}
        )
        app.sites.add(site)
        print(f'Created OIDC provider "{PROVIDER_ID}" (id={app.id})')

    print(f'\nConfiguration:')
    print(f'  Provider ID: {PROVIDER_ID}')
    print(f'  Client ID: {CLIENT_ID}')
    print(f'  Casdoor URL: {CASDOOR_URL}')
    print(f'\nLogin URL: http://localhost:8090/accounts/oidc/{PROVIDER_ID}/login/')
    print(f'Callback URL: http://localhost:8090/accounts/oidc/{PROVIDER_ID}/login/callback/')

if __name__ == '__main__':
    main()
