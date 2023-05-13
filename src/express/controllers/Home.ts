import { Request, Response } from 'express';

class Home {
	public static async index(req: Request, res: Response, next: any): Promise<void> {
		return res.status(200).render('index', { title: 'Hi hi', message: 'This is a test'});
	}
}

export default Home;
