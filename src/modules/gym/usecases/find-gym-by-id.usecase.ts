import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GymEntity } from '../entities/gym.entity';

@Injectable()
export class FindGymByIdUseCase {
  constructor(
    @InjectRepository(GymEntity)
    private readonly gymRepository: Repository<GymEntity>,
  ) {}

  async execute(id: number) {
    return await this.gymRepository.findOne({ where: { id: id } });
  }
}
