import { Router } from 'express';
import { MovieHandler } from '../controllers/'

const router = Router();

router.get('/', MovieHandler.index);

export default router;