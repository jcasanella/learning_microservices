import { Request, Response } from 'express';
import Locals from '../Locals';

class Home {
	public static async index(req: Request, res: Response, next: any): Promise<Response> {
		return res.status(200).send({
			message: Locals.config().name
		});
	}
}

export default Home;
