import { WorkoutController } from './controllers/workout.controller';

import { Module } from '@nestjs/common';
import { CreateWorkoutUseCase } from './usecases/create-workout.usecase';
import { FindWorkoutByCodeUseCase } from './usecases/find-by-code.usecase';
import { WorkoutEntity } from './entities/workout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WorkoutEntity])],
  controllers: [WorkoutController],
  providers: [CreateWorkoutUseCase, FindWorkoutByCodeUseCase],
  exports: [CreateWorkoutUseCase, FindWorkoutByCodeUseCase],
})
export class WorkoutModule { }
