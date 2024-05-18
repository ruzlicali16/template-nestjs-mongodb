import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTodoListDto, UpdateTodoListDto, ListAllEntities } from './dto';
import { TodoListService } from './todo-list.service';
import { ITodoList } from 'src/interfaces';

@Controller('todo-list')
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Post()
  async create(@Body() createTotoListDto: CreateTodoListDto) {
    this.todoListService.create(createTotoListDto);
  }

  @Get()
  async findAll(): Promise<ITodoList[]> {
    return this.todoListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} todo list`;
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoListDto: UpdateTodoListDto,
  ) {
    return `This action updates a #${id} todo list`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} todo list`;
  }
}
