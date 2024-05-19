import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list.controller';
import { TodoListService } from './todo-list.service';
import { DatabaseModule } from 'src/database/database.module';
import { todoListProviders } from './todo-list.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoListController],
  providers: [TodoListService, ...todoListProviders],
})
export class TodoListModule {}
