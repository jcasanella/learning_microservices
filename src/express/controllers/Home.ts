import { Request, Response } from 'express';

interface VideoResponse extends Response {
	video?: string;
  }

class Home {
	public static async index(req: Request, res: Response, next: any): Promise<void> {
		console.log(`Home`);

		const dbManager = req.dbManager;
		const videoRepository = dbManager.getVideoRepository();
		const videos = await videoRepository.getAll();

		return res.status(200).render('index', { title: 'Hi hi', data: videos });
	}

	public static async movie(req: Request, res: VideoResponse, next: any): Promise<VideoResponse> {
		console.log(`get movie: ${req.params.uuid}`);

		const dbManager = req.dbManager;
		const videoRepository = dbManager.getVideoRepository();
		const video = await videoRepository.getById(req.params.uuid);

		console.log(video);

		return res.status(200).json(video);
	}
}

export default Home;
