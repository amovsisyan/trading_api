import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deposit } from './deposit.entity';
import { DepositService } from './deposit.service';
import { DepositsController } from './deposit.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Deposit])],
  providers: [DepositService],
  controllers: [DepositsController],
})
export class DepositsModule {}
