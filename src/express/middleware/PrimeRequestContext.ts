import { Application, Request, Response } from 'express';
import { Context } from './Context';

export class PrimeRequestContext {
	public static mount(_express: Application): Application {
        _express.use((req: Request, res: Response, next: any) => {
            Context.bind(req);
            next();
        });

        return _express;
	}
}
