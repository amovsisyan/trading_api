import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'transactions';

export class transactions1638105618795 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
              name: tableName,
              columns: [
                  {
                      name: 'id',
                      type: 'integer',
                      isPrimary: true,
                      generationStrategy: 'increment',
                      isGenerated: true,
                  },
                  {
                      name: 'user_id',
                      type: 'varchar',
                  },
                  {
                      name: 'amount',
                      type: 'integer',
                  },
                  {
                      name: 'token',
                      type: 'varchar',
                  },
                  {
                      name: 'price',
                      type: 'integer',
                  },
                  {
                      name: 'status',
                      type: 'smallint',
                  },
                  {
                      name: 'type',
                      type: 'smallint',
                  },
                  {
                      name: 'created_at',
                      type: 'timestamp',
                      default: 'now()',
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'now()',
                  },
              ],
          }),
          true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(tableName);
    }

}
