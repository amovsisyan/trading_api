import {
  Body,
  Controller,
  Put,
  Post,
  Param, Get,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './transaction.dto';
import { UpdateResult } from 'typeorm';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionService) {}

  @Get('/users/:id')
  userAll(
    @Param('id') userId: string
  ): Promise<Transaction[]> {
    return this.transactionsService.userTransactions(userId);
  }

  @Post('/')
  create(@Body() createDto: CreateTransactionDto): Promise<Transaction> {
    return this.transactionsService.create(createDto);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateDto: CreateTransactionDto,
  ): Promise<UpdateResult> {
    return this.transactionsService.updateById(id, updateDto);
  }
}
