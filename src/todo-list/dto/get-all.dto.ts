import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateDto } from './create.dto';

export class GetAllDto {
  @IsNotEmpty()
  @IsNumber()
  page: number;

  @IsNotEmpty()
  @IsNumber()
  limit: number;

  @IsArray()
  items: CreateDto[];
}
