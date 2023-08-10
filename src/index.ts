
import { appDataSource } from './database/datasource';
import { eventsDataSource } from './database/datasource-events';
import Server from './express/index';
import { DatabaseManager } from './express/database/DatabaseManager';

const dbManager = new DatabaseManager(appDataSource, eventsDataSource);
await Promise.all([dbManager.init(), dbManager.initEvents()]);

const app = new Server(dbManager);
app.init();
