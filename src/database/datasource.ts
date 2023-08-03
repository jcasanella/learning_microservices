import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { join } from 'path';
import { Movies } from '../entities/movies.entity';
import { initDataSource } from './init-db';

dotenv.config({ path: join(__dirname, '../../.env') });

export const appDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST_DB,
    port: Number.parseInt(process.env.PORT_DB ?? "5432"),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: 'movie_db',
    entities: [Movies],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/migrations/movies/*.js']
});

initDataSource(appDataSource);
