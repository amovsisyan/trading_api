import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto } from './transaction.dto';
import { TransactionStatuses } from '../../constants/TransactionStatuses';
import { UpdateResult } from 'typeorm';
import { TransactionTypes } from '../../constants/TransactionTypes';
import { Deposit } from '../deposits/deposit.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: Repository<Transaction>,
    @InjectRepository(Deposit)
    private depositRepository: Repository<Deposit>,
  ) {}

  userTransactions(userId: string): Promise<Transaction[]> {
    return this.transactionRepository.find({
      user_id: userId,
    });
  }

  async create(createDto: CreateTransactionDto): Promise<Transaction> {
    const newItem = new Transaction();
    newItem.user_id = createDto.user_id;
    newItem.amount = createDto.amount;
    newItem.price = createDto.price;
    newItem.token = createDto.token;
    newItem.status = TransactionStatuses.confirmed;
    newItem.type = createDto.type;

    const newTransaction = await this.transactionRepository.save(newItem);

    const deposit = await this.depositRepository.findOne({
      user_id: createDto.user_id,
      token: createDto.token
    });

    if (deposit) {
      const amount = newTransaction.type === TransactionTypes.buy
        ? -newTransaction.amount
        : newTransaction.amount;

      deposit.balance += amount;
      this.depositRepository.save(deposit);
    }

    return newTransaction;
  }

  updateById(
    id: number,
    updateData: CreateTransactionDto,
  ): Promise<UpdateResult> {
    return this.transactionRepository.update(id, updateData);
  }
}
