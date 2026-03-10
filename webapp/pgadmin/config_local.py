AUTHENTICATION_SOURCES = ['oauth2', 'internal']
OAUTH2_AUTO_CREATE_USER = True
MASTER_PASSWORD_REQUIRED = False

OAUTH2_CONFIG = [{
    'OAUTH2_NAME': 'casdoor',
    'OAUTH2_DISPLAY_NAME': 'Login with Casdoor',
    'OAUTH2_CLIENT_ID': 'pgadmin-client',
    'OAUTH2_CLIENT_SECRET': 'pgadmin-secret-2024',
    'OAUTH2_SERVER_METADATA_URL': 'http://casdoor:8000/.well-known/openid-configuration',
    'OAUTH2_AUTHORIZATION_URL': 'http://localhost:8000/login/oauth/authorize',
    'OAUTH2_SCOPE': 'openid profile email',
    'OAUTH2_ICON': 'fa-key',
    'OAUTH2_BUTTON_COLOR': '#4285f4'
}]
