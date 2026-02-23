import { Router } from 'express';
import { validateBody } from '../../middlewares/validateBody.js';
import { registerUserController } from './userController.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { registerUserSchema } from './userValidation.js';

const router = Router();

(router.post('/register', validateBody(registerUserSchema)),
  ctrlWrapper(registerUserController));

export default router;
