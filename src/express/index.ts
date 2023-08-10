import express from 'express';
import Locals from './Locals';
import Routes from './Routes';
import { ConfigView } from './views/ConfigView';
import { DatabaseManager } from './database/DatabaseManager';
import { AttachLocals, DatabaseRequest, LastResortErrorHandler, PrimeRequestContext, PublicResources } from './middleware/index';

class Server {
    private express: express.Application;

    constructor(private readonly dbManager: DatabaseManager) {
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
        this.express = DatabaseRequest.mount(this.express, this.dbManager);
        this.express = LastResortErrorHandler.mount(this.express);
        this.express = PublicResources.mount(this.express);
    }

    private mountRoutes(): void {
        this.express = Routes.mountHome(this.express);
        this.express = Routes.mountAPI(this.express);
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
            this.dbManager.destroy();
		});
	}
}

export default Server;