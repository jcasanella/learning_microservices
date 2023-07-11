import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

interface UserMovieResponse extends Response {
	body?: string;
}

type CommandEvent = {
    type: string;
    created_at: Date;
    id: string;
    message: {
        userId: string;
        movieId: string;
    };
};

export class UserCommandHandler {
	public static async user_movie(req: Request, res: UserMovieResponse, next: any): Promise<UserMovieResponse> {
		console.log(`Post user_movie: ${req.params.userUuid} | ${req.params.movieUuid}`);

		/*const dbManager = req.dbManager;
		const movieRepository = dbManager.getMovieRepository();
		const movie = await movieRepository.getById(req.params.uuid);*/

        const commandEvent: CommandEvent = {
            type: "CommandUserWatchMovieEvent",
            created_at: new Date(),
            id: `user-${uuidv4()}`,
            message:  {
                userId: `${req.params.userUuid}`,
                movieId: `${req.params.movieUuid}`
            }
        };

		console.log(commandEvent);

		return res.status(200).json(commandEvent);
	}
};
