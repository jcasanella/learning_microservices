import express from 'express';
import { join } from 'path';
import { mountMiddleware } from './mount-middleware';

export function createExpressApp() {
    const app = express();

    // Configure PUG
    app.set('views', join(__dirname, '..'));
    app.set('view engine', 'pug');

    mountMiddleware(app, env);
    mountRoutes(app, config);

    return app;
}