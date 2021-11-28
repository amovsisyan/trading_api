import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('deposits')
export class Deposit {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  user_id: string;

  @Column()
  balance: number;

  @Column()
  token: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}
