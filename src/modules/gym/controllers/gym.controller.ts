import { CreateGymDto } from './../dtos/create-gym.dto';
import { CreateGymUseCase } from './../usecases/create-gym.usecase';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FindGymByIdUseCase } from '../usecases/find-gym-by-id.usecase';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('gym')
@Controller('gym')
export class GymController {
  constructor(
    private readonly createGymUseCase: CreateGymUseCase,
    private readonly findGymBiIdUseCase: FindGymByIdUseCase,
  ) { }

  @Post('create-dym')
  @UsePipes(ValidationPipe)
  createGym(@Body() createGymDto: CreateGymDto) {
    return this.createGymUseCase.execute(createGymDto);
  }
  
  @Get('id/:id')
  findGymBiId(@Param('id', ParseIntPipe) id: number) {
    return this.findGymBiIdUseCase.execute(id)
  }
}
