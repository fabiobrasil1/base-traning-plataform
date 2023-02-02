import { FindStudentByIdUseCase } from './usecases/find-student-by-id.usecase';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/students.entity';
import { CreateStudentUseCase } from './usecases/create-student.usecase';
import { StudetsController } from './controllers/studets.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity]), ConfigModule],
  controllers: [StudetsController],
  providers: [ConfigService, CreateStudentUseCase, FindStudentByIdUseCase],
  exports: [CreateStudentUseCase, FindStudentByIdUseCase],
})
export class StudentsModule { }
