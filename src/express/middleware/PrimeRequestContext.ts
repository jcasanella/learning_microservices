import { Application, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export class PrimeRequestContext {
	public static mount(_express: Application): Application {
        _express.use((req: Request, res: Response, next: any) => {
            req.context = {
                traceId: uuidv4() 
            };
            
            next();
        });

        return _express;
	}
}
