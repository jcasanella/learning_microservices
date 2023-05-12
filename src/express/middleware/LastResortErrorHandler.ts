import { Application, Request, Response } from 'express';
import { Context } from './Context';

export class LastResortErrorHandler {
	public static mount(_express: Application): Application {
        _express.use((err:Error, req: Request, res: Response, next: any) => {
            const traceId = Context.get(req)?.traceId;
            console.error(traceId, err);
        
            res.status(500).send('error');
        });

        return _express;
	}
}
