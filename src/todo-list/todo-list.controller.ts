import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoListDto, UpdateTodoListDto, ListAllEntities } from './dto';
import { TodoListService } from './todo-list.service';
import { ITodoList } from 'src/interfaces';

@Controller('todo-list')
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Post()
  async create(@Body() payload: CreateTodoListDto) {
    const response = await this.todoListService.create(payload);
    return response;
  }

  @Get()
  async findAll(): Promise<ITodoList[] | void> {
    await this.todoListService.findAll();
  }
}
