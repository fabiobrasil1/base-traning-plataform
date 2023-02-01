import { CreateGymDto } from '../dtos/create-gym.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GymEntity } from '../entities/gym.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateGymUseCase {
  constructor(
    @InjectRepository(GymEntity) private readonly gymRepository: Repository<GymEntity>,
  ) { }


  async execute(createGymDto: CreateGymDto) {
    const newGym = this.gymRepository.create(createGymDto)

    return await this.gymRepository.save(newGym)
  }
}