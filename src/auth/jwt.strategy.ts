import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret', // Ideally use ConfigService + env file
    });
  }

  async validate(payload: any) {
    // The payload is what you put into the token when signing it
    return { userId: payload.sub, email: payload.email, role: payload.role };
  }
}
