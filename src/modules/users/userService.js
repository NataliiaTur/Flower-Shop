import { UsersCollection } from './userModel.js';

export const registerUSer = async (payload) => {
  return await UsersCollection.create(payload);
};
