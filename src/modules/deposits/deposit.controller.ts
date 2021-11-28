import {
  Controller,
  Post,
  Body, Get, Param
} from '@nestjs/common';
import { DepositService } from './deposit.service';
import { Deposit } from './deposit.entity';
import { CreateDepositDto } from './deposit.dto';

@Controller('deposits')
export class DepositsController {
  constructor(private depositService: DepositService) {}

  @Get('/users/:id')
  userAll(
    @Param('id') userId: string
  ): Promise<Deposit[]> {
    return this.depositService.userDeposits(userId);
  }

  @Post('/')
  create(@Body() createDto: CreateDepositDto): Promise<Deposit> {
    return this.depositService.create(createDto);
  }
}
