import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private feflector: Reflector) {}
  mathRoles(roles: string[], userRole: string) {
    return roles.some((role) => role === userRole);
  }

  canActivate(constext: ExecutionContext): boolean {
    const roles = this.feflector.get<string[]>('roles', constext.getHandler());
    if (!roles) {
      return true;
    }
    const request = constext.switchToHttp().getRequest();
    const user = request.user();
    return this.mathRoles(roles, user.role);
  }


}