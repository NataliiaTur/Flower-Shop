import createHttpError from 'http-errors';
import { getAllFlowers, getFlowerById } from '../services/flowers.js';

export const getAllFlowersController = async (req, res) => {
  const flowers = await getAllFlowers();

  res.json({
    status: 200,
    message: 'Successfully found flowers',
    data: flowers,
  });
};

export const getFlowerByIdController = async (req, res, next) => {
  const { flowerId } = req.params;
  const flower = await getFlowerById(flowerId);

  if (!flower) {
    throw createHttpError(404, 'Flower not found');
  }

  res.json({
    status: 200,
    message: `Successfully found flower with id ${flowerId}`,
    data: flower,
  });
};
