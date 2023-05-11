import { Application, Request, Response } from 'express';
import { Context } from './Context';

export class AttachLocals {
	public static mount(_express: Application): Application {
        _express.use((req: Request, res: Response, next) => {
            res.locals.context = Context.get(req);
            next();
        });

        return _express;
	}
}
