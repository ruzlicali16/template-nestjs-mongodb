import { IBaseEntity } from './base-entity';

export interface ITodoList extends IBaseEntity {
  name: string;
  description?: string;
}
