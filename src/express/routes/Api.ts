import { Router } from 'express';
import { MovieHandler, UserCommandHandler } from '../controllers'

const router = Router();

// Routes for Movies
router.get('/movie/:uuid', MovieHandler.movie);

// Routes for User
router.post('/user/:userUuid/:movieUuid/:uuid', UserCommandHandler.user_movie);

export default router;