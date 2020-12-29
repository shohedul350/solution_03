import { BadRequest, NotFound } from '../utils/generalError';
import { getBookService } from '../services/bookServices';
import asyncHandler from '../utils/asyncHandler';

const accessControlBookRoute = asyncHandler(async (req, res, next) => {
  if (!req.body.role === 'librarian' || !req.body.role === 'student') {
    throw new BadRequest('You are not authorize to access this information');
  }

  const book = await getBookService(req.query);
  if (!book || book.tempDeleted === true) {
    throw new NotFound('Book not found');
  }

  next();
});

export default accessControlBookRoute;
