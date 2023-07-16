import { DataSource } from 'typeorm'
import dotenv from 'dotenv';
import { join } from 'path';
import { Movies } from '../entities/movies.entity';

dotenv.config({ path: join(__dirname, '../../.env') });

export const initDataSource = (dataSource: DataSource) => {
    dataSource.initialize()
    .then(() => { 
        console.log(`${dataSource.options.database} DataSource has been initialized successfully.`); 
    })
    .catch((err) => {
        console.error(`Error during ${name} DataSource initialization: `, err);
    });
}

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
    migrations: ['dist/migrations/movie_db/*.js']
});

initDataSource(appDataSource);

// export const eventsDataSource = new DataSource({
//     type: 'postgres',
//     host: process.env.HOST_EVENT,
//     port: Number.parseInt(process.env.HOST_EVENT ?? "5432"),
//     username: process.env.USERNAME_EVENT,
//     password: process.env.PASSWORD_EVENT,
//     database: 'event_store',
//     // entities: [Message],
//     logging: true,
//     synchronize: false,
//     migrationsRun: false,
//     migrations: ['dist/migrations/event_store/*.js'],
//     useUTC: true
// });

// initDataSource(eventsDataSource);

// appDataSource.initialize()
//     .then(() => { 
//         console.log('DataSource has been initialized successfully.'); 
//     })
//     .catch((err) => {
//         console.error('Error during DataSource initialization: ', err);
//     });

// eventsDataSource.initialize()
//     .then(() => {
//         console.log('EventStore Datasource has been initialized successfully.');
//     })
//     .catch((err) => {
//         console.error('Error during EventStore DataSource initialization: ', err);
//     });
