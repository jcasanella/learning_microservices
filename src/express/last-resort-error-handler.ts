import Context from "./middleware/Context";
import { Request, Response } from 'express';

export function lastResortErrorHandler(err: Error, req: Request, res: Response, next: any) {
    const traceId = Context.get(req)?.traceId;
    console.error(traceId, err);

    res.status(500).send('error');
}