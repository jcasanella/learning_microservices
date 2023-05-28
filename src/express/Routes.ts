import { Application } from 'express';
import webRouter from './controllers/Home'
import { DataSource } from 'typeorm';
import { VideoRepository } from './database/VideoRepository';

class Routes {
	public mountWeb(_express: Application, dataSource: DataSource): Application {
		console.log('Routes :: Mounting Web Routes...');

		this.listMovies(dataSource);

		return _express.use('/', webRouter.index);
	}

	private async listMovies(dataSource: DataSource) {
        await dataSource.initialize()
            .then(() => { 
                console.log('DataSource has been initialized successfully.'); 
            })
            .catch((err) => {
                console.error('Error during DataSource initialization: ', err);
            });

		
		const video = new VideoRepository(dataSource);
		console.log(await video.getAll());
	}
}

export default new Routes;