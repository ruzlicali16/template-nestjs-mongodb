import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDto, GetAllDto } from './dto';
import { TodoListService } from './todo-list.service';

@Controller('todo-list')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Post()
  async create(@Body() payload: CreateDto): Promise<CreateDto> {
    return this.todoListService.create(payload);
  }

  @Get()
  async findAll(): Promise<GetAllDto[] | void> {
    const response = await this.todoListService.findAll();
    return response;
  }
}
