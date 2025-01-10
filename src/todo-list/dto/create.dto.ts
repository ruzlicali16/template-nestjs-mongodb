import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string;
}
