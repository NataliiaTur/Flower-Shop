import createHttpError from 'http-errors';
import {
  deleteFlowerService,
  getCatalog,
  getFlowerById,
  patchFlowerService,
  postFlowerService,
} from './flowersService.js';

export const getCatalogController = async (req, res) => {
  const flowers = await getCatalog();

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

export const deleteFlowerController = async (req, res, next) => {
  const { flowerId } = req.params;
  const flower = await deleteFlowerService(flowerId);

  if (!flower) {
    next(createHttpError(404, 'Flower not found'));
    return;
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully deleted a flower!',
  });
};

export const postFlowerController = async (req, res) => {
  const flower = await postFlowerService(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a flower!`,
    data: flower,
  });
};

// апдейт окремих полів
export const patchFlowerController = async (req, res, next) => {
  const { flowerId } = req.params;
  const result = await patchFlowerService(flowerId, req.body);

  if (!result) {
    next(createHttpError(404, 'Flower not found'));
  }

  res.json({
    status: 200,
    message: 'Successfully updated a flower!',
    data: result.flower,
  });
};
