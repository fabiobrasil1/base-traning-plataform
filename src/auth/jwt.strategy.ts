// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrkey: process.env.SECRET,
    })
  }

  async validate(payload){
    return {
      userId: payload.id,
      userNmae: payload.userName,
      role: payload.role,
    }
  }
}