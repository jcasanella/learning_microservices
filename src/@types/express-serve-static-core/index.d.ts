import { DatabaseManager } from "../../express/database/DatabaseManager";

declare global {
    namespace Express {
        interface Context {
            traceId: string;
        }

        interface Request {
            dbManager: DatabaseManager;
            context: Context;
        }
    }
}