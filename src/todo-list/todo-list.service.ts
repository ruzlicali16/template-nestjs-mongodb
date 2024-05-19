import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { TODO_LIST_MODEL } from 'src/constants/constants';
import { ITodoList } from 'src/interfaces';
import { CreateTodoListDto } from './dto';

@Injectable()
export class TodoListService {
  constructor(
    @Inject(TODO_LIST_MODEL)
    private todoListModel: Model<ITodoList>,
  ) {}

  async create(createTodoListDto: CreateTodoListDto) {
    const isExist = await this.findByName(createTodoListDto.name);
    if (isExist) throw new InternalServerErrorException('Todo already exist.');
    const payload = new this.todoListModel(createTodoListDto);
    return payload.save();
  }

  async findAll(): Promise<ITodoList[]> {
    return this.todoListModel.find().exec();
  }

  async findByName(name: string): Promise<ITodoList> {
    return this.todoListModel.findOne({ name });
  }
}
