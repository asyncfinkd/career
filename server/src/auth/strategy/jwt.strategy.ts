import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * Injectable
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  /**
   * Creates an instance of jwt strategy.
   */
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'super-secret-cat',
    });
  }

  /**
   * Validates jwt strategy
   * @param payload
   * @returns
   */
  async validate(payload: any) {
    console.log('validate()', payload);
    return payload;
  }
}
