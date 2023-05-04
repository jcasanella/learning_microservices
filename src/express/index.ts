import express from 'express';
import { join } from 'path';
import { mountMiddleware } from './mount-middleware';
import { mountRoutes } from './mount-routes';

export function createExpressApp(/* TODO config env*/) {
    const app = express();

    // Configure PUG
    app.set('views', join(__dirname, '..'));
    app.set('view engine', 'pug');

    mountMiddleware(app /* TODO env */);
    mountRoutes(app, /* TODO config */);

    return app;
}