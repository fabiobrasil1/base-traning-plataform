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
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDto } from '../dtos/create-student.dto';
import { CreateStudentUseCase } from '../usecases/create-student.usecase';
import { FindStudentByIdUseCase } from '../usecases/find-student-by-id.usecase';
@ApiTags('student')
@Controller('student')
export class StudetsController {
  constructor(
    private readonly createStudentUseCase: CreateStudentUseCase,
    private readonly findStudentBiIdUseCase: FindStudentByIdUseCase,
  ) { }

  @Post('create-student')
  @UsePipes(ValidationPipe)
  createGym(@Body() createStudentDto: CreateStudentDto) {
    return this.createStudentUseCase.execute(createStudentDto);
  }

  @Get('id/:id')
  findGymBiId(@Param('id', ParseIntPipe) id: number) {
    return this.findStudentBiIdUseCase.execute(id);
  }
}
