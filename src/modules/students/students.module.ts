import { FindStudentByIdUseCase } from './usecases/find-student-by-id.usecase';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entities/students.entity';
import { CreateStudentUseCase } from './usecases/create-student.usecase';
import { StudetsController } from './controllers/studets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  controllers: [StudetsController],
  providers: [CreateStudentUseCase, FindStudentByIdUseCase],
  exports: [CreateStudentUseCase],
})
export class StudentsModule {}
