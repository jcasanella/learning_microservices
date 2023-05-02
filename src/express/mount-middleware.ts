import express, { Express } from 'express';
import { join } from 'path';
import { primeRequestContext } from './prime-request-context';
import { attachLocals } from './attach-locals';
import { lastResortErrorHandler } from './last-resort-error-handler';

export function mountMiddleware(app: Express) {
    app.use(lastResortErrorHandler);
    app.use(primeRequestContext);
    app.use(attachLocals);
    app.use( express.static(join(__dirname, '..', 'public'), { maxAge: 86400000 }));
}