// src/todo-list/todo-list.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';
import { TodoList, TodoListSchema } from './schemas/todo-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TodoList.name, schema: TodoListSchema },
    ]),
  ],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
