import { Router } from 'express';
import flowersRouter from '../modules/flowers/flowersRoutes.js';
import authRouter from '../modules/users/userRoutes.js';

const router = Router();

router.use('/catalog', flowersRouter);
router.use('/auth', authRouter);

export default router;
