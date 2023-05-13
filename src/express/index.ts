import express from 'express';
import Locals from './Locals';
import Routes from './Routes';
import { AttachLocals, PrimeRequestContext, LastResortErrorHandler, DirnamePublic } from './middleware';
import { ConfigView } from './views/ConfigView';

class Server {
    private express: express.Application;

    constructor() {
        this.express = express();

        this.mountDotEnv();
        this.mountMiddleware();
        this.mountRoutes();
        this.mountViews();
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

    private mountViews(): void {
        this.express = ConfigView.mount(this.express);
    }

    public init (): any {
		const { port, name, version } = Locals.config();

		// Start the server on the specified port
		this.express.listen(port, () => {
            console.log(`${name} started`);
			console.table([['Port', port], ['Version', version]]);
		}).on('error', (_error) => {
			console.log('Error: ', _error.message);
		});
	}
}

export default Server;