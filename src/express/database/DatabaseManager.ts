import { DataSource } from "typeorm";
import { VideoRepository } from "./VideoRepository";

export class DatabaseManager {
    private static videoRepository: VideoRepository | undefined = undefined;

    constructor(private readonly dataSource: DataSource) {
        // this.init();
    }

    private async init() {
        await this.dataSource.initialize()
        .then(() => { 
            console.log('DataSource has been initialized successfully.'); 
        })
        .catch((err) => {
            console.error('Error during DataSource initialization: ', err);
        }); 

        return this.dataSource;
    }

    getDataSource(): DataSource {
        return this.dataSource;
    }

    async getVideoRepository(): Promise<VideoRepository> {
        console.log(`Get VideoRepository - ${this.dataSource.isInitialized}`);
        if (DatabaseManager.videoRepository === undefined) {
            if (!this.dataSource.isInitialized) {
                console.log(`aaaaaaaaaaaaaaaaaaaaaaaaa`);
                // this.init()
                //     .then((_) => {
                //         console.log(`bbbbbbbbbbbbbbbbbbbbbbbb`);
                //         DatabaseManager.videoRepository = new VideoRepository(this.dataSource);
                //         return DatabaseManager.videoRepository;
                //     })
                //     .catch(error => {
                //         console.error(`Error initializing dataSource`, error);
                //     });

                const dataSource = this.init();
		        const d: Awaited<typeof dataSource> = await dataSource;
                DatabaseManager.videoRepository = new VideoRepository(d);
                return DatabaseManager.videoRepository;
            }

            console.log(`dddddddddddddddddddddddddd`);
            DatabaseManager.videoRepository = new VideoRepository(this.dataSource);
            return DatabaseManager.videoRepository;
        }

        console.log(`fffffffffffffffffffffffffffff`);
        return DatabaseManager.videoRepository;
    }
}