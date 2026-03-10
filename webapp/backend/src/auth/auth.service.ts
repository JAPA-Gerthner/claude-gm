import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Issuer, Client, generators } from 'openid-client';

@Injectable()
export class AuthService implements OnModuleInit {
  private readonly logger = new Logger(AuthService.name);
  private client: Client;
  private issuerUrl = process.env.CASDOOR_ISSUER || 'http://casdoor:8000';
  private clientId = process.env.CASDOOR_CLIENT_ID;
  private clientSecret = process.env.CASDOOR_CLIENT_SECRET;
  private redirectUri = process.env.CASDOOR_REDIRECT_URI || 'http://localhost:8080/api/auth/callback';

  constructor(private jwtService: JwtService) {}

  async onModuleInit() {
    try {
      const issuer = await Issuer.discover(this.issuerUrl);
      this.client = new issuer.Client({
        client_id: this.clientId,
        client_secret: this.clientSecret,
        redirect_uris: [this.redirectUri],
        response_types: ['code'],
      });
      this.logger.log('OIDC client initialized');
    } catch (error) {
      this.logger.error(`Failed to initialize OIDC client: ${error.message}`);
    }
  }

  getAuthorizationUrl(state: string, nonce: string): string {
    return this.client.authorizationUrl({
      scope: 'openid profile email',
      state,
      nonce,
    });
  }

  async handleCallback(code: string, state: string, nonce: string) {
    const tokenSet = await this.client.callback(this.redirectUri, { code, state }, { state, nonce });
    const userinfo = await this.client.userinfo(tokenSet.access_token!);

    return {
      sub: userinfo.sub as string,
      name: (userinfo.name || userinfo.preferred_username || 'User') as string,
      email: userinfo.email as string | undefined,
      avatar: userinfo.picture as string | undefined,
    };
  }

  generateToken(user: { sub: string; name: string; email?: string; avatar?: string }): string {
    return this.jwtService.sign({
      sub: user.sub,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    });
  }

  verifyToken(token: string): { sub: string; name: string; email?: string; avatar?: string } | null {
    try {
      return this.jwtService.verify(token) as { sub: string; name: string; email?: string; avatar?: string };
    } catch {
      return null;
    }
  }

  generateState(): string {
    return generators.state();
  }

  generateNonce(): string {
    return generators.nonce();
  }
}
