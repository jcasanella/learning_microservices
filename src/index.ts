
import { appDataSource } from './database/datasource';
import Server from './express';

const app = new Server(appDataSource);
app.init();