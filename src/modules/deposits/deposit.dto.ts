import {
  IsString,
  IsInt,
} from 'class-validator';

export class CreateDepositDto {
  @IsString()
  user_id: string;

  @IsInt()
  balance: number;

  @IsString()
  token: string;
}