import { Body, Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dtos/authenticate.dto';
import { IAuthenticate } from './interface/user.interface';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() authenticateDto: AuthenticateDto): Promise<any> {
    try {
      const response = await this.authService.authenticate(authenticateDto);

      return response;
    } catch (error) {
      return error;
    }
  }
}
