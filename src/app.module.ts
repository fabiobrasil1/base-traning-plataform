import { WorkoutModule } from './modules/workout/workout.module';
import { StudetsController } from './modules/students/controllers/studets.controller';
import { StudentsModule } from './modules/students/students.module';
import { GymModule } from './modules/gym/gym.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './infra/database/db.config';
import { GymController } from './modules/gym/controllers/gym.controller';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { AuthService } from './auth/auth.service';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1h' } }),
    StudentsModule,
    GymModule,
    AuthModule,
    WorkoutModule,
    PassportModule,
  ],
  controllers: [StudetsController, GymController],
  providers: [AuthService, JwtStrategy],
})
export class AppModule {}
