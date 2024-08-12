import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { RedisModule } from '../redis/redis.module';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), RedisModule, KafkaModule], // imports adicionais  para o TypeORM, Redis e Kafka
  controllers: [TasksController], // controllers adicionais
  providers: [TasksService],  // providers adicionais
})
export class TasksModule {}
