import { MigrationInterface, QueryRunner, Table } from 'typeorm';

const tableName = 'deposits';

export class deposits1638101982785 implements MigrationInterface {

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
                      name: 'balance',
                      type: 'integer',
                  },
                  {
                      name: 'token',
                      type: 'varchar',
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
