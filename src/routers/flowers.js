import { Router } from 'express';
import {
  getAllFlowersController,
  getFlowerByIdController,
} from '../controllers/flowers.js';

const router = Router();

router.get('/flowers', getAllFlowersController);
router.get('/flowers/:flowerId', getFlowerByIdController);

export default router;
