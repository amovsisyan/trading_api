import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { TransactionService } from './transaction.service';
import { TransactionsController } from './transaction.controller';
import { Deposit } from '../deposits/deposit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Deposit])],
  providers: [TransactionService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
