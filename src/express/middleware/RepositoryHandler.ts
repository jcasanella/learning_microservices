import { Application, Request, Response } from 'express';
import { DataSource } from "typeorm";

export class DataSourceContext {
    static _bindings = new WeakMap<Request, DataSourceContext>();
  
    constructor (private readonly dataSource: DataSource) {}
      
    static bind (req: Request, dataSource: DataSource) : void {
      const ctx = new DataSourceContext(dataSource);
      DataSourceContext._bindings.set(req, ctx);
    }
      
    static get (req: Request) : DataSourceContext | null {
      return DataSourceContext._bindings.get(req) || null;
    }
}

export class RepositoryHandler {
	public static mount(_express: Application, dataSource: DataSource): Application {
        _express.use((req: Request, res: Response, next: any) => {
            DataSourceContext.bind(req, dataSource);
            next();
        });

        return _express;
	}
}