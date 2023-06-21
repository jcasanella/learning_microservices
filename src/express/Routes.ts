import { Application } from 'express';
import apiRouter from './routes/Video';
import homeRouter from './routes/Home';

class Routes {
	public mountWeb(_express: Application): Application {
		console.log('Routes :: Mounting Web Routes...');
		return _express.use('/', homeRouter);
	}

	public getMovie(_express: Application): Application {
		console.log('Routes :: Mounting getMovie...');
		return _express.use('/api', apiRouter);
	}
}

export default new Routes;