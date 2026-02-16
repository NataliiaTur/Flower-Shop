import { calculatePaginationData } from '../../utils/calculatePaginationData.js';
import { FlowerCollection } from './flowerModel.js';

export const getCatalog = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const flowersQuery = FlowerCollection.find();
  const flowersCount = await FlowerCollection.find()
    .merge(flowersQuery)
    .countDocuments();
  const flowers = await flowersQuery.skip(skip).limit(limit).exec();

  const paginationData = calculatePaginationData(flowersCount, perPage, page);

  return {
    data: flowers,
    ...paginationData,
  };
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

// часткове оновлення окремих даних
export const patchFlowerService = async (flowerId, payload, options = {}) => {
  const rawResult = await FlowerCollection.findOneAndUpdate(
    { _id: flowerId },
    { $set: payload },
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    flower: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
