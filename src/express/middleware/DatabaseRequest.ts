import { Application, Request, Response } from 'express';
import { DatabaseManager } from '../database/DatabaseManager';

export class DatabaseRequest {
    public static mount(_express: Application, dbManager: DatabaseManager): Application {
        _express.use((req: Request, res: Response, next: any) => {
            req.dbManager = dbManager;
            next();
        });

        return _express;
	}
}