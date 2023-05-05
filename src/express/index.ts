import express from 'express';
import { join } from 'path';
import { mountMiddleware } from './mount-middleware';
import { mountRoutes } from './mount-routes';
import Locals from './Locals';
import Routes from './Routes';

// export function createExpressApp(/* TODO config env*/) {
//     const app = express();

//     // Configure PUG
//     app.set('views', join(__dirname, '..'));
//     app.set('view engine', 'pug');

//     mountMiddleware(app /* TODO env */);
//     mountRoutes(app, /* TODO config */);

//     return app;
// }

class Server {
    private express: express.Application;

    constructor() {
        this.express = express();

        this.mountDotEnv();
        this.mountMiddleware();
        this.mountRoutes();
    }

    private mountDotEnv(): void {
        this.express = Locals.init(this.express);
    }

    private mountMiddleware(): void {
        // TODO
    }

    private mountRoutes(): void {
        this.express = Routes.mountWeb(this.express);
    }

    public init (): any {
		const port: number = Locals.config().port;

		// Registering Exception / Error Handlers
		// this.express.use(ExceptionHandler.logErrors);
		// this.express.use(ExceptionHandler.clientErrorHandler);
		// this.express.use(ExceptionHandler.errorHandler);
		// this.express = ExceptionHandler.notFoundHandler(this.express);

		// Start the server on the specified port
		this.express.listen(port, () => {
			return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
		}).on('error', (_error) => {
			return console.log('Error: ', _error.message);
		});
	}
}

export default Server;