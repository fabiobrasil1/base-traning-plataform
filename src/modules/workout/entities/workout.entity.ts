import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WorkoutEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  
  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    nullable: false,
    default: '',
  })
  code: string;

  @Column({
    nullable: false,
    default: '',
  })
  description: string;

  @Column({
    nullable: false,
    default: '',
  })
  url: string;
}
