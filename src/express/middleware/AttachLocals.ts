import { Application, Request, Response } from 'express';

export class AttachLocals {
	public static mount(_express: Application): Application {
        _express.use((req: Request, res: Response, next) => {
            res.locals.context = req.context;
            next();
        });

        return _express;
	}
}
