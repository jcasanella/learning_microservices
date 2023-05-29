
import { appDataSource } from './database/datasource';
import Server from './express';
import { DatabaseManager } from './express/database/DatabaseManager';

const dbManager = new DatabaseManager(appDataSource);
dbManager.init()
    .then((_) => {
    const app = new Server(appDataSource);
    app.init();
});
