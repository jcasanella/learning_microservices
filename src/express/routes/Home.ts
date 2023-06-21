import { Router } from "express";
import webRouter from '../controllers/Home'

const router = Router();

router.get('/', webRouter.index);

export default router;