import { AuthenticateDto } from './dtos/authenticate.dto';
import { faker } from '@faker-js/faker';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IAuthenticate, Role } from './interface/user.interface';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  users = [
    {
      id: faker.datatype.uuid(),
      userName: 'Ricardao admin',
      password: 'bombado',
      role: Role.Admin,
    },
    {
      id: faker.datatype.uuid(),
      userName: 'Samoa Jo',
      password: 'samoa',
      role: Role.Customer,
    },
  ];

  async authenticate(authenticateDto: AuthenticateDto): Promise<IAuthenticate> {
    const user = await this.users.find(
      (u) => u.userName === authenticateDto.userName,
      (u) => u.password === authenticateDto.password,
    );

    if (!user) throw new NotFoundException('Invalid credentials');

    const token = sign({ ...user }, 'secrete');

    return { token, user };
  }
}
