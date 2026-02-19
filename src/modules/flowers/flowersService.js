import { calculatePaginationData } from '../../utils/calculatePaginationData.js';
import { FlowerCollection } from './flowerModel.js';
import { SORT_ORDER } from '../../constants/index.js';

export const getCatalog = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const filterQuery = {};

  if (filter.colors?.length) {
    filterQuery.colors = { $in: filter.colors };
  }

  // price фільтр
  const priceFilter = {};
  if (filter.minPrice !== undefined) priceFilter.$gte = filter.minPrice;
  if (filter.maxPrice !== undefined) priceFilter.$lte = filter.maxPrice;
  if (Object.keys(priceFilter).length > 0) filterQuery.price = priceFilter;

  // rating фільтр
  const ratingFilter = {};
  if (filter.minRating !== undefined) ratingFilter.$gte = filter.minRating;
  if (filter.maxRating !== undefined) ratingFilter.$lte = filter.maxRating;
  if (Object.keys(ratingFilter).length > 0) filterQuery.rating = ratingFilter;

  const [flowersCount, flowers] = await Promise.all([
    FlowerCollection.countDocuments(filterQuery),
    FlowerCollection.find(filterQuery)
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .lean()
      .exec(),
  ]);

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
