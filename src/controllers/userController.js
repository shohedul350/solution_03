import asyncHandler from '../utils/asyncHandler';
import {
  addUserService,
  getUserService,
  updateUserService,
  deleteUserService,
  checkTempUserService,
} from '../services/userService';
import { BadRequest, NotFound } from '../utils/generalError';

export const addUser = asyncHandler(async (req, res) => {
  const newUser = await addUserService(req.body);
  return res.status(201).json({ newUser, msg: 'User create successfully' });
});

export const getUser = asyncHandler(async (req, res) => {
  const user = await getUserService(req.params.number);
  if (!user || user.tempDeleted === true) {
    throw new NotFound('User not found');
  }
  return res.status(200).json({ user, msg: 'User fetch successfully' });
});

export const updateUser = asyncHandler(async (req, res) => {
  const user = checkTempUserService(req.params.id);
  if (!user || user.tempDeleted === true) {
    throw new NotFound('User not found');
  }
  const updatedUser = await updateUserService(req.params.id, req.body);
  return res.status(200).json({ updatedUser, msg: 'User update successfully' });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const user = checkTempUserService(req.params.id);
  if (!user || user.tempDeleted === true) {
    throw new NotFound('User not found');
  }
  const deletedUser = await deleteUserService(req.params.id);
  return res.status(200).json({ deletedUser, msg: 'User delete successfully' });
});
