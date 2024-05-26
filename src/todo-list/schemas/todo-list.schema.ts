// src/todo-list/schemas/todo-list.schema.ts
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'todo-lists', timestamps: true })
export class TodoList extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);

// Error handling middleware
TodoListSchema.post(
  'save',
  function (error: { name: string; message: string }, doc, next) {
    if (error.name === 'ValidationError') {
      // Handle validation error
      next(new BadRequestException(error.message));
    } else {
      // Handle other errors
      next(new InternalServerErrorException(error.message));
    }
  },
);
