import { Router } from 'express';
import {
  getAllFlowersController,
  getFlowerByIdController,
} from '../controllers/flowers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/flowers', ctrlWrapper(getAllFlowersController));
router.get('/flowers/:flowerId', ctrlWrapper(getFlowerByIdController));

export default router;
