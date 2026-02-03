import { Router } from 'express';
import {
  getCatalogController,
  getFlowerByIdController,
  deleteFlowerController,
  postFlowerController,
} from './flowersController.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';

const router = Router();

router.get('/catalog', ctrlWrapper(getCatalogController));
router.get('/catalog/:flowerId', ctrlWrapper(getFlowerByIdController));
router.delete('catalog/:flowerId', ctrlWrapper(deleteFlowerController));
router.post('catalog', ctrlWrapper(postFlowerController));

export default router;
