import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutEntity } from '../entities/workout.entity';

@Injectable()
export class FindWorkoutByCodeUseCase {
  constructor(
    @InjectRepository(WorkoutEntity)
    private readonly workoutRepository: Repository<WorkoutEntity>,
  ) {}

  async execute(code: string) {
    return await this.workoutRepository.findOne({ where: { code: code } });
  }
}
