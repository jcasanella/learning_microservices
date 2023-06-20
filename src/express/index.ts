import express from 'express';
import Locals from './Locals';
import Routes from './Routes';
import { AttachLocals, PrimeRequestContext, LastResortErrorHandler, PublicResources, DatabaseRequest } from './middleware';
import { ConfigView } from './views/ConfigView';
import { DataSource } from 'typeorm';
import { DatabaseManager } from './database/DatabaseManager';

class Server {
    private express: express.Application;
    private dbManager: DatabaseManager;

    constructor(private readonly dataSource: DataSource) {
        this.express = express();
        this.dbManager = new DatabaseManager(dataSource);

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
        this.express = Routes.mountWeb(this.express/*, this.dbManager*/);
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
            this.dataSource.destroy();
		});
	}
}

export default Server;