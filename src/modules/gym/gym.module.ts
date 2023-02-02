import { FindGymByIdUseCase } from './usecases/find-gym-by-id.usecase';
import { GymController } from './controllers/gym.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GymEntity } from './entities/gym.entity';
import { CreateGymUseCase } from './usecases/create-gym.usecase';
import { ConfigService } from '@nestjs/config';
@Module({
  imports: [TypeOrmModule.forFeature([GymEntity])],
  controllers: [GymController],
  providers: [ConfigService, CreateGymUseCase, FindGymByIdUseCase],
  exports: [CreateGymUseCase, FindGymByIdUseCase],
})
export class GymModule { }
