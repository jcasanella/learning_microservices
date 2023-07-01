import { DataSource } from "typeorm";
import { MovieRepository } from "./MovieRepository";

export class DatabaseManager {
    private static movieRepository: MovieRepository | undefined = undefined;

    constructor(private readonly dataSource: DataSource) {}

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
            console.log(`Initialize movie repository`);
            DatabaseManager.movieRepository = new MovieRepository(this.dataSource);
            return DatabaseManager.movieRepository;
        }

        return DatabaseManager.movieRepository;
    }
}