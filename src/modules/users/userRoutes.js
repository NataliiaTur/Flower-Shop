import { Router } from 'express';
import { validateBody } from '../../middlewares/validateBody.js';
import {
  loginUserController,
  registerUserController,
} from './userController.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { loginUserSchema, registerUserSchema } from './userValidation.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);
export default router;
