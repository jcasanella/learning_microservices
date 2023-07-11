import { Application } from 'express';
import apiRouter from './routes/Api';
import homeRouter from './routes/Home';

class Routes {
	public mountHome(_express: Application): Application {
		console.log('Routes :: Mounting Home...');
		return _express.use('/', homeRouter);
	}

	public mountAPI(_express: Application): Application {
		console.log('Routes :: Mounting API...');
		return _express.use('/api', apiRouter);
	}
}

export default new Routes;