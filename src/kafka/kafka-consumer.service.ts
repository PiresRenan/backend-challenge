import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';

@Injectable()
export class KafkaConsumerService implements OnModuleInit {
  private readonly consumer: Consumer;

  constructor() {
    this.consumer = new Kafka({ clientId: 'user-task-consumer', brokers: ['kafka:9092'] }).consumer({
      groupId: 'user-task-group',
    });
  }

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'user-created', fromBeginning: true });

    // Processa mensagens recebidas do Kafka
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const value = JSON.parse(message.value.toString());
        console.log(`Received message: ${value}`);
        // Podemos manipular a mensagem a partir daqui
      },
    });
  }
}

