import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { ITodoList } from 'src/interfaces';

const TodoListsSchema = new mongoose.Schema<ITodoList>({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

// Error handling middleware
TodoListsSchema.post(
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

export const TodoList = TodoListsSchema;
