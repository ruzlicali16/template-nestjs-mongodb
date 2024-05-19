import { Document, ObjectId } from "mongoose";

export interface IBaseEntity extends Document {
  readonly id: string | ObjectId;
  createdDate?: string;
  updatedDate?: string;
}
