import { Request, Response } from 'express';
import Context from './middleware/Context';

export function primeRequestContext(req: Request, res: Response, next: any) {
    Context.bind(req);

    next();
}