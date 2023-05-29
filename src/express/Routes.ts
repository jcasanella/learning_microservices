import { Application } from 'express';
import webRouter from './controllers/Home'
import { VideoRepository } from './database/VideoRepository';
import { DatabaseManager } from './database/DatabaseManager';

class Routes {
	public mountWeb(_express: Application, dbManager: DatabaseManager): Application {
		console.log('Routes :: Mounting Web Routes...');

		this.listMovies(dbManager);

		return _express.use('/', webRouter.index);
	}

	private async listMovies(dbManager: DatabaseManager) {
		// const dataSource = dbManager.init();
		// const d: Awaited<typeof dataSource> = await dataSource;
		// const video = new VideoRepository(d);

		const video = dbManager.getVideoRepository();
		video.then(async repo => {
			console.log(await repo.getAll());
		});
		console.log((await video).getAll());
		// video.then((_) => { console.log(_.getAll()) });
		// console.log(await video.getAll());
	}
}

export default new Routes;