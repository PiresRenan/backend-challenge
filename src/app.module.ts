import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { KafkaModule } from './kafka/kafka.module';
import { RedisModule } from './redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Configuracao do Banco de dados PostgreSQL
    TypeOrmModule.forRoot({ 
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST || 'localhost',
      port: parseInt(process.env.PG_PORT) || 5432,
      username: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD || 'postgres',
      database: process.env.PG_NAME || 'postgres',
      entities: [ User, Task ],
      synchronize: true,
    }),
    UsersModule, // Módulo responsável pela gestão de usuários
    TasksModule, // Módulo responsável pela gestão de tarefas
    KafkaModule, // Módulo responsável pela integração com Kafka
    RedisModule, // Módulo responsável pela integração com Redis
  ],

})
export class AppModule {}
