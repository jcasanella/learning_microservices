import express from 'express';
import Locals from './Locals';
import Routes from './Routes';
import { AttachLocals, PrimeRequestContext, LastResortErrorHandler, DirnamePublic } from './middleware';

// export function createExpressApp(/* TODO config env*/) {
//     const app = express();

//     // Configure PUG
//     app.set('views', join(__dirname, '..'));
//     app.set('view engine', 'pug');

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
        this.express = AttachLocals.mount(this.express);
        this.express = PrimeRequestContext.mount(this.express);
        this.express = LastResortErrorHandler.mount(this.express);
        this.express = LastResortErrorHandler.mount(this.express);
        this.express = DirnamePublic.mount(this.express);
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