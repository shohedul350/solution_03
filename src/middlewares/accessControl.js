import { BadRequest, NotFound } from '../utils/generalError';
import { getUserService } from '../services/userService';
import asyncHandler from '../utils/asyncHandler';

const accessControl = asyncHandler(async (req, res, next) => {
  const user = await getUserService(req.params.number);
  if (!user || user.tempDeleted === true) {
    throw new NotFound('User not found');
  }

  if (req.body.role === 'librarian') {
    return next();
  }

  if (user.role === req.body.role) {
    return next();
  }

  throw new BadRequest('You are not authorize to access this information');
});

export default accessControl;

//  There is no authentication system that's why the user's role taken from the request body.
// if I have jwt token with the request header..
//  Then the user's role could have been taken from the request header.
