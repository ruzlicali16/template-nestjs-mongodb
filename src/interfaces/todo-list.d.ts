import { Document } from 'mongoose';
import { IBaseEntity } from './base-entity';

export interface ITodoList extends Document, IBaseEntity {
  readonly name: string;
  readonly description?: string;
}
