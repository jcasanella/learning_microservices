import { Request, Response } from 'express';

class Home {
	public static async index(req: Request, res: Response, next: any): Promise<void> {

		console.log(`Printing from Home!!!`);

		const dbManager = req.dbManager;
		const videoRepository = dbManager.getVideoRepository();
		const videos = await videoRepository.getAll();

		console.log(videos);

		return res.status(200).render('index', { title: 'Hi hi', message: 'This is a test'});
	}
}

export default Home;
