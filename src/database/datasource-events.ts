import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import { join } from 'path';
import { initDataSource } from './init-db';
import { Messages } from '../entities/messages.entity';

dotenv.config({ path: join(__dirname, '../../.env') });

export const eventsDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST_EVENT,
    port: Number.parseInt(process.env.HOST_EVENT ?? "5432"),
    username: process.env.USERNAME_EVENT,
    password: process.env.PASSWORD_EVENT,
    database: 'event_store',
    entities: [Messages],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/migrations/event_store/*.js'],
    useUTC: true
});

initDataSource(eventsDataSource);
