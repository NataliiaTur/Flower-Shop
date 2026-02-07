import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { flowerId } = req.params;

  if (!isValidObjectId(flowerId)) {
    throw createHttpError(400, 'Bad Request');
  }
  next();
};
