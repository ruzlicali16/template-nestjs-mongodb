import { Document } from 'mongoose';
import { IBaseEntity } from './base-entity';

export interface ITodoList implements Document extends IBaseEntity {
  readonly name: string;
  readonly description?: string;
}
