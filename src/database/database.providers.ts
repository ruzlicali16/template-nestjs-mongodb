import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from 'src/constants/constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:example@localhost:27017', {
        dbName: 'practice-db',
      }),
  },
];
