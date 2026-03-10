import {
  Controller,
  Get,
  Query,
  Res,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  // NOTE: In-memory state storage. Works for single instance only.
  // For horizontal scaling, replace with Redis or use signed JWT state.
  private states = new Map<string, { nonce: string; expiresAt: number }>();

  constructor(private authService: AuthService) {
    // Clean up expired states every 5 minutes
    setInterval(() => {
      const now = Date.now();
      for (const [key, value] of this.states) {
        if (value.expiresAt < now) this.states.delete(key);
      }
    }, 5 * 60 * 1000);
  }

  @Get('login')
  login(@Res() res: Response) {
    const state = this.authService.generateState();
    const nonce = this.authService.generateNonce();

    // Store state with 10 minute expiry
    this.states.set(state, {
      nonce,
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    const authUrl = this.authService.getAuthorizationUrl(state, nonce);
    res.redirect(authUrl);
  }

  @Get('callback')
  async callback(
    @Query('code') code: string,
    @Query('state') state: string,
    @Res() res: Response,
  ) {
    const stored = this.states.get(state);
    if (!stored) {
      throw new UnauthorizedException('Invalid or expired state');
    }
    this.states.delete(state);

    try {
      const user = await this.authService.handleCallback(code, state, stored.nonce);
      const token = this.authService.generateToken(user);

      // Redirect to frontend with token
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:8080';
      res.redirect(`${frontendUrl}?token=${token}`);
    } catch (error) {
      console.error('OIDC callback error:', error);
      throw new UnauthorizedException('Authentication failed');
    }
  }

  @Get('me')
  @UseGuards(AuthGuard)
  me(@Req() req: Request) {
    return req['user'];
  }

  @Get('logout')
  logout(@Res() res: Response) {
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:8080';
    res.redirect(frontendUrl);
  }
}
