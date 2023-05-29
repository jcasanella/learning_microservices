import { DataSource } from "typeorm";
import { VideoRepository } from "./VideoRepository";

export class DatabaseManager {
    private static videoRepository: VideoRepository | undefined = undefined;

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

    getVideoRepository(): VideoRepository {
        console.log(`Get VideoRepository - ${this.dataSource.isInitialized}`);
        if (DatabaseManager.videoRepository === undefined) {
            console.log(`Initialize video repository`);
            DatabaseManager.videoRepository = new VideoRepository(this.dataSource);
            return DatabaseManager.videoRepository;
        }

        return DatabaseManager.videoRepository;
    }
}