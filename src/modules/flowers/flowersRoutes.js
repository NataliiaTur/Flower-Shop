import { Router } from 'express';
import {
  getCatalogController,
  getFlowerByIdController,
  deleteFlowerController,
  postFlowerController,
  patchFlowerController,
} from './flowersController.js';
import { ctrlWrapper } from '../../utils/ctrlWrapper.js';
import { validateBody } from '../../middlewares/validateBody.js';
import { createFlowerSchema, updateFlowerSchema } from './flowerValidation.js';
import { isValidId } from '../../middlewares/isValidId.js';

const router = Router();

router.get('/catalog', ctrlWrapper(getCatalogController));
router.get(
  '/catalog/:flowerId',
  isValidId,
  ctrlWrapper(getFlowerByIdController),
);
router.delete('/catalog/:flowerId', ctrlWrapper(deleteFlowerController));
router.post(
  '/catalog',
  validateBody(createFlowerSchema),
  ctrlWrapper(postFlowerController),
);
router.patch(
  '/catalog/:flowerId',
  validateBody(updateFlowerSchema),
  ctrlWrapper(patchFlowerController),
);

export default router;
