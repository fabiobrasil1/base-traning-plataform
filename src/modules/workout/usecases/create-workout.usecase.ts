import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkoutDto } from '../dtos/create-workout.dto';
import { WorkoutEntity } from '../entities/workout.entity';

@Injectable()
export class CreateWorkoutUseCase {
  constructor(
    @InjectRepository(WorkoutEntity)
    private readonly workoutRepository: Repository<WorkoutEntity>,
  ) { }

  async execute(createWorkoutDto: CreateWorkoutDto) {
    const newWorkout = this.workoutRepository.create(createWorkoutDto)

    return await this.workoutRepository.save(newWorkout)
  }
}