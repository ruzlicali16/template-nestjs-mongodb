import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Model } from 'mongoose';
import { ITodoList } from 'src/interfaces';
import { CreateTodoListDto } from './dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel('TodoList') private readonly todoListModel: Model<ITodoList>,
  ) {}

  async create(
    createTodoListDto: CreateTodoListDto,
  ): Promise<ITodoList | InternalServerErrorException> {
    const isExist = await this.findByName(createTodoListDto.name);
    if (isExist) throw new InternalServerErrorException('Todo already exist.');
    const payload = new this.todoListModel(createTodoListDto);
    return payload.save();
  }

  async findAll() {
    return this.todoListModel.aggregate<ITodoList>([
      {
        $project: {
          name: 1,
        },
      },
    ]);
  }

  async findByName(name: string) {
    return this.todoListModel.findOne<ITodoList>({ name });
  }
}
