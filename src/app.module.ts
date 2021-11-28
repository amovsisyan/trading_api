import { Module } from '@nestjs/common';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepositsModule } from './modules/deposits/deposit.module';
import { TransactionsModule } from './modules/transactions/transaction.module';
import { DB_ORM_OPTIONS } from './config';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...DB_ORM_OPTIONS }),
    DepositsModule,
    TransactionsModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
