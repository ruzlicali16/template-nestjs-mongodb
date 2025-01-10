import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ITodoList } from 'src/interfaces';
import { CreateDto, GetAllDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';
import { TodoList } from './schemas/todo-list.schema';

@Injectable()
export class TodoListRepository {
  constructor(
    @InjectModel(TodoList.name)
    private readonly todoListModel: Model<ITodoList>,
  ) {}

  async createIndex() {
    //
  }

  async create(
    createTodoListDto: CreateDto,
  ): Promise<ITodoList | InternalServerErrorException> {
    try {
      const payload = new this.todoListModel(createTodoListDto);
      return payload.save();
    } catch (error: any) {
      return Promise.reject('Failed to create index.');
    }
  }

  async findAll() {
    try {
      return this.todoListModel.aggregate<GetAllDto>([
        {
          $project: {
            name: 1,
          },
        },
      ]);
    } catch (error: any) {
      return Promise.reject('Failed to create index.');
    }
  }

  async findByName(name: string) {
    try {
      return this.todoListModel.findOne<ITodoList>({ name });
    } catch (error: any) {
      return Promise.reject('Failed to create index.');
    }
  }
}
