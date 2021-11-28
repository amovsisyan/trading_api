import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  user_id: string;

  @Column()
  amount: number;

  @Column()
  token: string;

  @Column()
  price: number;

  @Column()
  status: number;

  @Column()
  type: number;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
