import { FlowerCollection } from '../db/models/flower.js';

export const getCatalog = async () => {
  const flowers = await FlowerCollection.find();
  return flowers;
};

export const getFlowerById = async (flowerId) => {
  const flower = await FlowerCollection.findById(flowerId);
  return flower;
};
