import { Application, Request, Response } from 'express';

export class LastResortErrorHandler {
	public static mount(_express: Application): Application {
        _express.use((err:Error, req: Request, res: Response, next: any) => {
            const traceId = req.context ? req.context.traceId : 'none';
            console.error(traceId, err);
        
            res.status(500).send('error');
        });

        return _express;
	}
}
