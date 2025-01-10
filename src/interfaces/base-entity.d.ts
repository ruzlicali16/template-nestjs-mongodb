import { Document, ObjectId } from 'mongoose';

export interface IBaseEntity extends Document {
  readonly _id: string | ObjectId;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
