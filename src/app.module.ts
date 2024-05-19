import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TodoListModule } from './todo-list/todo-list.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, TodoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
