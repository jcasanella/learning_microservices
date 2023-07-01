import { DataSource } from 'typeorm'
import dotenv from 'dotenv';
import { join } from 'path';
import { Movies } from '../entities/movies.entity';

dotenv.config({ path: join(__dirname, '../../.env') });

export const appDataSource = new DataSource({
    type: 'postgres',
    host: process.env.HOST_DB,
    port: Number.parseInt(process.env.PORT_DB ?? "5432"),
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: 'movies',
    entities: [Movies],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['dist/**/migrations/*.js']
});

appDataSource.initialize()
    .then(() => { 
        console.log('DataSource has been initialized successfully.'); 
    })
    .catch((err) => {
        console.error('Error during DataSource initialization: ', err);
    });


