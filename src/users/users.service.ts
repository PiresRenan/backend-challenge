import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    // Método para criar um novo usuário
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
  findAll(): Promise<User[]> {
    // Método para buscar todos os usuários
    return this.userRepository.find();
  }
  findOne(id: number): Promise<User> {
    // Método para buscar um usuário específico pelo ID
    return this.userRepository.findOne({ where: { id } });
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // Método para atualizar as informações de um usuário específico
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }
  async remove(id: number): Promise<void> {
    // Método para remover um usuário específico
    await this.userRepository.delete(id);
  }
}