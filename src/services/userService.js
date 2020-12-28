import models from '../models/index';

const { User } = models;

export const addUserService = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

export const getUserService = async (number) => {
  const user = await User.findOne({ number });
  return user;
};

export const updateUserService = async (id, data) => {
  const updatedUser = User.findByIdAndUpdate(id, data, { new: true });
  return updatedUser;
};

export const deleteUserService = async (id) => {
  const deletedUser = User.findByIdAndUpdate(id, { tempDeleted: true }, { new: true });
  return deletedUser;
};

export const checkTempUserService = async (id) => {
  const checkTemp = await (await User.findOne(id)).isSelected('tempDelete');
  return checkTemp;
};
