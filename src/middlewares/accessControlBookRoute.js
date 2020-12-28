import { BadRequest, NotFound } from '../utils/generalError';
import { getBookService } from '../services/bookServices';
import asyncHandler from '../utils/asyncHandler';

const accessControl = asyncHandler(async (req, res, next) => {
  const book = await getBookService(req.query);
  if (!book || book.tempDeleted === true) {
    throw new NotFound('Book not found');
  }
  if (req.body.role === 'librarian' || req.body.role === 'student') {
    return next();
  }

  throw new BadRequest('You are not authorize to access this route');
});

export default accessControl;
