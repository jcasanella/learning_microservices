import { DataSource } from "typeorm";
import { MovieRepository } from "./MovieRepository";
import { MessageRepository } from "./MessageRepository";

export class DatabaseManager {
    private static movieRepository: MovieRepository | undefined;
    private static messageRepository: MessageRepository | undefined;

    constructor(private readonly dataSource: DataSource, private readonly eventsDataSource: DataSource) {}

    async init() {
        await this.dataSource.initialize()
        .then(() => { 
            console.log('DataSource has been initialized successfully.'); 
        })
        .catch((err) => {
            console.error('Error during DataSource initialization: ', err);
        }); 

        return this.dataSource;
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
}