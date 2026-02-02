import { Router } from 'express';
import {
  getCatalogController,
  getFlowerByIdController,
} from '../controllers/flowers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/catalog', ctrlWrapper(getCatalogController));
router.get('/catalog/:flowerId', ctrlWrapper(getFlowerByIdController));

export default router;
