
import { appDataSource } from './database/datasource';
import { eventsDataSource } from './database/datasource-events';
import Server from './express';
import { DatabaseManager } from './express/database/DatabaseManager';

const dbManager = new DatabaseManager(appDataSource, eventsDataSource);
dbManager.init()
    .then((_) => {
    const app = new Server(appDataSource, eventsDataSource);
    app.init();
});
