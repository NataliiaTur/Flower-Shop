import { UsersCollection } from './userModel.js';

export const registerUser = async (payload) => {
  return await UsersCollection.create(payload);
};
