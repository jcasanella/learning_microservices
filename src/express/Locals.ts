import dotenv from 'dotenv';
import { Application } from 'express';
import { join } from 'path';

class Locals {
    public static config(): any {
        dotenv.config({ path: join(__dirname, '../../.env') });

        const port = process.env.PORT;
        const name = process.env.NAME;
        const version = process.env.VERSION;

        return {
            port,
            name,
            version
        };
    }

    public static init(_express: Application): Application {
        _express.locals.app = this.config();
        return _express;
    }
}

export default Locals;