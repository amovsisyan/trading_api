import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deposit } from './deposit.entity';
import { CreateDepositDto } from './deposit.dto';

@Injectable()
export class DepositService {
  constructor(
    @InjectRepository(Deposit)
    private depositsRepository: Repository<Deposit>,
  ) {}

  async userDeposits(userId: string): Promise<Deposit[]> {
    return await this.depositsRepository.find({
      user_id: userId,
    });
  }

  async create(createDto: CreateDepositDto): Promise<Deposit> {
    const alreadyExists = await this.depositsRepository.findOne({
      user_id: createDto.user_id,
      token: createDto.token
    });

    if (alreadyExists) {
      return alreadyExists;
    }

    const newItem = new Deposit();
    newItem.user_id = createDto.user_id;
    newItem.balance = createDto.balance;
    newItem.token = createDto.token;

    return this.depositsRepository.save(newItem);
  }
}
