import { Injectable } from '@nestjs/common';
import { CreateDto, GetAllDto } from './dto';
import { TodoListRepository } from './todo-list.repository';

@Injectable()
export class TodoListService {
  constructor(private readonly todoListRepository: TodoListRepository) {}

  async create(payload: CreateDto): Promise<CreateDto> {
    return this.todoListRepository.create(payload);
  }

  async findAll(): Promise<GetAllDto[]> {
    return this.todoListRepository.findAll();
  }

  async findByName(name: string): Promise<CreateDto | null> {
    return this.todoListRepository.findByName(name);
  }
}
