import { Express, Request, Response } from 'express';

export function mountRoutes(app: Express) {
    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
      });
}
