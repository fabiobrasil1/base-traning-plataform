// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: { id: any; userName: any; role: any; }) {
    return {
      userId: payload.id,
      userNmae: payload.userName,
      role: payload.role,
    };
  }
}
