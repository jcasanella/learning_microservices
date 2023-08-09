import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Messages } from '../../entities/messages.entity';

interface UserMovieResponse extends Response {
	body?: string;
}

type Header = {
    traceId: string;
    userId: string;
};

type Event = {
    userId: string;
    movieId: string;
}

// type CommandEvent = {
//     type: string;
//     metadata: {
//         traceId: string;
//         userId: string;
//         created_at: Date;
//     };
//     id: string;
//     message: {
//         userId: string;
//         movieId: string;
//     };
// };

export class UserCommandHandler {
	public static async user_movie(req: Request, res: UserMovieResponse, next: any): Promise<UserMovieResponse> {
		console.log(`Post user_movie: ${req.params.userUuid} | ${req.params.movieUuid} | ${req.params.uuid}`);

        const messages = new Messages();
        messages.streamName = 'UserMovieCommandEvent';
        messages.id = req.params.uuid ?? uuidv4();

        const header: Header = {
            traceId: 'traceId',
            userId: 'userId',
        };

        messages.metadata = JSON.stringify(header);

        const event: Event = {
            userId: req.params.userUuid,
            movieId: req.params.movieUuid
        };

        messages.data = JSON.stringify(event);
        messages.time = new Date();

		console.log(messages);

        const dbManager = req.dbManager;
        dbManager.getMovieRepository

		return res.status(200).json(messages);
	}
};
