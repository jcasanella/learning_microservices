import { DatabaseManager } from "../../express/database/DatabaseManager";

declare global {
    namespace Express {
        interface Request {
            dbManager: DatabaseManager
        }
    }
}