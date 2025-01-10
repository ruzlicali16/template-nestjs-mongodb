// src/todo-list/schemas/todo-list.schema.ts
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Document } from 'mongoose';

@Schema({ collection: 'todo-lists', timestamps: true, strict: true })
export class TodoList extends Document {
  @Prop({ required: true, type: String })
  @IsString() // class-validator
  @IsNotEmpty()
  name: string;

  @Prop({ type: String, maxlength: 500 })
  @IsOptional()
  @IsString()
  description: string;
}

export const TodoListSchema = SchemaFactory.createForClass(TodoList);

TodoListSchema.post(
  'save',
  function (
    error: { name: string; message: string },
    doc: { name: string; description: string },
    next,
  ) {
    console.log('🚀 ~ doc.name:', doc.name);
    if (typeof doc.name !== 'string') {
      return next(new Error('Validation failed: name must be a string'));
    }
    if (doc.description && typeof doc.description !== 'string') {
      return next(new Error('Validation failed: description must be a string'));
    }
    if (error.name === 'ValidationError') {
      // Handle validation error
      next(new BadRequestException('Validation failed: ' + error.message));
    } else {
      // Handle other errors
      next(
        new InternalServerErrorException(
          'Internal server error: ' + error.message,
        ),
      );
    }
  },
);
