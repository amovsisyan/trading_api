import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const envData = config().parsed;
export const DB_ORM_OPTIONS: TypeOrmModuleOptions = {
  type: (envData['TYPEORM_CONNECTION'] as 'postgres') || 'postgres',
  host: envData['TYPEORM_HOST'] || 'localhost',
  port: +envData['TYPEORM_PORT'] || 5432,
  username: envData['TYPEORM_USERNAME'] || '',
  password: envData['TYPEORM_PASSWORD'] || '',
  database: envData['TYPEORM_DATABASE'] || 'database_name',
  schema: envData['TYPEORM_SCHEMA'] || 'public',
  entities: [`${__dirname}/**/*.entity.js`],
  autoLoadEntities: true,
};

export const MODE = envData['MODE'];
