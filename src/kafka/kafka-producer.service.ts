import { Injectable } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaProducerService {
  private readonly producer: Producer;

  constructor() {
    this.producer = new Kafka({ clientId: 'user-task-producer', brokers: ['kafka:9092'] }).producer();
    this.producer.connect();
  }

  async sendMessage(topic: string, message: any) {
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }
}
