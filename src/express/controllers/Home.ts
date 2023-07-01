import { Request, Response } from 'express';

interface MovieResponse extends Response {
	movie?: string;
  }

class Home {
	public static async index(req: Request, res: Response, next: any): Promise<void> {
		console.log(`Home`);

		const dbManager = req.dbManager;
		const movieRepository = dbManager.getMovieRepository();
		const movies = await movieRepository.getAll();

		return res.status(200).render('index', { title: 'Hi hi', data: movies });
	}

	public static async movie(req: Request, res: MovieResponse, next: any): Promise<MovieResponse> {
		console.log(`get movie: ${req.params.uuid}`);

		const dbManager = req.dbManager;
		const movieRepository = dbManager.getMovieRepository();
		const movie = await movieRepository.getById(req.params.uuid);

		console.log(movie);

		return res.status(200).json(movie);
	}
}

export default Home;
