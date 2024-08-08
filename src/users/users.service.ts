/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    // get all users
    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    // get ONE user
    async findOne(id: number): Promise<User> {
        return await this.usersRepository.findOne({ where: { id } });
    }

    // create a new user
    async create(user: User): Promise<User> { 
        const newUser = this.usersRepository.create(user);
        return await this.usersRepository.save(newUser);
    }

    // update user
    async update(id: number, user: User): Promise<User> {
        const updateUser = await this.usersRepository.findOne({ where: { id } });
        this.usersRepository.merge(updateUser, user);
        return await this.usersRepository.save(updateUser);
    }

    // delete user 
    async delete(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }

}
