import { Application } from 'express';
import webRouter from './controllers/Home'

class Routes {
	public mountWeb(_express: Application): Application {
		console.log('Routes :: Mounting Web Routes...');

		return _express.use('/', webRouter.index);
	}
}

export default new Routes;