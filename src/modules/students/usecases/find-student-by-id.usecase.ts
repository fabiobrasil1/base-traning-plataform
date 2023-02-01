import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from '../entities/students.entity';

@Injectable()
export class FindStudentByIdUseCase {
  constructor(
    @InjectRepository(StudentEntity) private readonly studentRepository: Repository<StudentEntity>,
  ) { }

  async execute(id: number) {
    return  await this.studentRepository.findOne({ where: { id } });
  }
}