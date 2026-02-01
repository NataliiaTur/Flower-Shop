import { Router } from 'express';
import { getAllFlowers, getFlowerById } from '../services/flower.js';

const router = Router();

router.get('/flowers', async (req, res) => {
  const flowers = await getAllFlowers();

  res.status(200).json({
    data: flowers,
  });
});

router.get('/flowers/:flowerId', async (req, res, next) => {
  const { flowerId } = req.params;
  const flower = await getFlowerById(flowerId);

  if (!flower) {
    res.status(404).json({
      message: 'Flowers not found',
    });
    return;
  }

  res.status(200).json({
    data: flower,
  });
});

export default router;
