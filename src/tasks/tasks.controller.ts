import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    // Método para criar uma tarefa
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  findAll() {
    // Método para listar todas as tarefas
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // Método para buscar uma tarefa específica pelo ID
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createTaskDto: CreateTaskDto) {
    // Método para atualizar uma tarefa específica pelo ID
    return this.tasksService.update(id, createTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // Método para excluir uma tarefa específica pelo ID
    return this.tasksService.remove(id);
  }
}
