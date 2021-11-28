import {
  IsString,
  IsInt, IsOptional,
} from 'class-validator';

export class CreateTransactionDto {
  @IsString()
  user_id: string;

  @IsInt()
  amount: number;

  @IsInt()
  price: number;

  @IsString()
  token: string;

  @IsInt()
  type: number;

  @IsInt()
  @IsOptional()
  status: number;
}
