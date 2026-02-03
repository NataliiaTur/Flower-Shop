import { FlowerCollection } from './flowerModel.js';

export const getCatalog = async () => {
  const flowers = await FlowerCollection.find();
  return flowers;
};

export const getFlowerById = async (flowerId) => {
  const flower = await FlowerCollection.findById(flowerId);
  return flower;
};

export const deleteFlowerService = async (flowerId) => {
  const flower = await FlowerCollection.findOneAndDelete({
    _id: flowerId,
  });
  return flower;
};

export const postFlowerService = async (payload) => {
  const flower = await FlowerCollection.create(payload);
  return flower;
};
