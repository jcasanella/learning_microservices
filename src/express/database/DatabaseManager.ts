import { DataSource } from "typeorm";

export class DatabaseManager {
    constructor(private readonly dataSource: DataSource) {
        this.init();
    }

    public async init() {
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
}