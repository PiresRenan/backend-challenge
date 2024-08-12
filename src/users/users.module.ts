import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), KafkaModule], // Registro da entidade User no TypeORM
  controllers: [UsersController], // Registro do controlador de usuários
  providers: [UsersService] // Registro do serviço de usuários
})
export class UsersModule {}
