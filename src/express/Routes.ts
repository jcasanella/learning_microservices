import { Application } from 'express';
import webRouter from './controllers/Home'
import { DatabaseManager } from './database/DatabaseManager';

class Routes {
	public mountWeb(_express: Application, dbManager: DatabaseManager): Application {
		console.log('Routes :: Mounting Web Routes...');

		this.listMovies(dbManager);

		return _express.use('/', webRouter.index);
	}

	private async listMovies(dbManager: DatabaseManager) {
		const video = dbManager.getVideoRepository();
		const videos = await video.getAll();
		console.log(videos);
	}
}

export default new Routes;