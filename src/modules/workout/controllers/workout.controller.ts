import { ApiTags } from '@nestjs/swagger';
/*
https://docs.nestjs.com/controllers#controllers
*/

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
import { CreateWorkoutDto } from '../dtos/create-workout.dto';
import { CreateWorkoutUseCase } from '../usecases/create-workout.usecase';
import { FindWorkoutByCodeUseCase } from '../usecases/find-by-code.usecase';

@Controller('workout')
@ApiTags('workout')
export class WorkoutController {
  constructor(
    private readonly createWorkoutUseCase: CreateWorkoutUseCase,
    private readonly findWorkoutByCodeUseCase: FindWorkoutByCodeUseCase,
  ) { }


  @Post('create-workout')
  @UsePipes(ValidationPipe)
  createWorkout(@Body() createworkoutDto: CreateWorkoutDto) {
    return this.createWorkoutUseCase.execute(createworkoutDto);
  }

  @Get('code/:code')
  findWorkoutByCode(@Param('code', ParseIntPipe) code: string) {
    return this.findWorkoutByCodeUseCase.execute(code)
  }
}
