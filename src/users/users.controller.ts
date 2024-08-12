import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // Método para criar um novo usuário
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
     // Método para buscar todos os usuários
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Método para buscar um usuário específico pelo ID
    const userId = Number(id);
    return this.usersService.findOne(userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    // Método para atualizar as informações de um usuário específico
    const userId = Number(id);
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Método para remover um usuário específico
    const userId = Number(id);
    return this.usersService.remove(userId);
  }
}
