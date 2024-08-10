/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { RedisService } from '../redis/redis.service';
import { KafkaProducerService } from '../kafka/kafka-producer.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly redisService: RedisService,
    private readonly kafkaProducerService: KafkaProducerService,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    // Salva a tarefa no Redis como armazenamento temporário
    const task = { ...createTaskDto, id: Date.now().toString() };
    await this.redisService.set(task.id, JSON.stringify(task));

    // Envia uma mensagem para o Kafka após a criação da tarefa
    await this.kafkaProducerService.sendMessage('task-created', task);

    // Salva a tarefa no PostgreSQL
    return this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskRepository.findOne({ where: { id } });
  }

  async update(id: string, createTaskDto: CreateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, createTaskDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
