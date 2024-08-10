/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  private readonly client: RedisClientType;

  constructor() {
    this.client = createClient({ url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}` });
    this.client.connect();
  }

  async set(key: string, value: string) {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string> {
    return this.client.get(key);
  }
}

