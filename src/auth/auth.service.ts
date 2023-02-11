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
      userName: 'adminName',
      password: 'studentPassword',
      role: Role.Admin,
    },
    {
      id: faker.datatype.uuid(),
      userName: 'studentName',
      password: 'password',
      role: Role.Student,
    },
    {
      id: faker.datatype.uuid(),
      userName: 'trainerName',
      password: 'trainerPassword',
      role: Role.Trainer,
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
