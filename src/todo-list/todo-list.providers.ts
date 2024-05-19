import { Connection } from 'mongoose';
import { TodoList } from './schemas/todo-list.schema';
import { DATABASE_CONNECTION, TODO_LIST_MODEL } from 'src/constants/constants';

export const todoListProviders = [
  {
    provide: TODO_LIST_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('TodoList', TodoList),
    inject: [DATABASE_CONNECTION],
  },
];
