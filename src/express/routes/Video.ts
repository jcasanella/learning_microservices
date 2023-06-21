import { Router } from "express";
import webRouter from '../controllers/Home'

const router = Router();

router.get('/video/:uuid', webRouter.movie);

export default router;