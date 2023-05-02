import { Request, Response } from 'express';
import Context from './context';

export function attachLocals(req: Request, res: Response, next: any) {
    res.locals.context = Context.get(req);
    next();
}