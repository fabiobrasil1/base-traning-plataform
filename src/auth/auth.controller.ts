import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dtos/authenticate.dto';
import { JwtAuthGuard } from './jwt.guard';

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

  @UseGuards(JwtAuthGuard)
  @Get()
  profile(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(req.user)
  }
}
