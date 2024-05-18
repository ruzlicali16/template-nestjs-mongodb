import { Injectable } from '@nestjs/common';
import { ITodoList } from 'src/interfaces';

@Injectable()
export class TodoListService {
  private readonly todoList: ITodoList[] = [];

  create(payload: ITodoList) {
    this.todoList.push(payload);
  }

  findAll(): ITodoList[] {
    return this.todoList;
  }
}
