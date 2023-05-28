import { Request, Response } from 'express';

class Home {
	public static async index(req: Request, res: Response, next: any): Promise<void> {

		// res.locals.context = DataSourceContext.get(req);
		// const video = new VideoRepository(res.locals.context);
		// console.log(await video.getAll());

		return res.status(200).render('index', { title: 'Hi hi', message: 'This is a test'});
	}
}

export default Home;
