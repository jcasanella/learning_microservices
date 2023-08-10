
import { MovieRepository } from './MovieRepository';
import { MessageRepository } from './MessageRepository';
import { DataSource } from 'typeorm/data-source/DataSource';

export class DatabaseManager {
    private static movieRepository: MovieRepository | undefined;
    private static messageRepository: MessageRepository | undefined;

    constructor(private readonly dataSource: DataSource, private readonly eventsDataSource: DataSource) {}

    private async initialize(dataSource: DataSource) {
        await dataSource.initialize()
        .then(() => { 
            console.log('DataSource has been initialized successfully.'); 
        })
        .catch((err) => {
            console.error('Error during DataSource initialization: ', err);
        }); 

        return dataSource;
    }

    async init() {
        return await this.initialize(this.dataSource);
    }

    async initEvents() {
        return await this.initialize(this.eventsDataSource);
    }

    getMovieRepository(): MovieRepository {
        console.log(`Get MovieRepository - ${this.dataSource.isInitialized}`);
        if (DatabaseManager.movieRepository === undefined) {
            console.log(`Initialize Movie Repository`);
            DatabaseManager.movieRepository = new MovieRepository(this.dataSource);
            return DatabaseManager.movieRepository;
        }

        return DatabaseManager.movieRepository;
    }

    getMessagesRepository(): MessageRepository {
        console.log(`Get MessageRepository - ${this.dataSource}`)
        if (DatabaseManager.messageRepository === undefined) {
            console.log(`Initialize Message Repository`);
            DatabaseManager.messageRepository = new MessageRepository(this.eventsDataSource);
            return DatabaseManager.messageRepository;
        }

        return DatabaseManager.messageRepository;
    }

    async destroy(): Promise<void> {
        await this.dataSource.destroy();
        await this.eventsDataSource.destroy();
    }
}