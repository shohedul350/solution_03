import { BadRequest, NotFound } from '../utils/generalError';
import { getBookService } from '../services/bookServices';
import asyncHandler from '../utils/asyncHandler';

const accessControlBookRoute = asyncHandler(async (req, res, next) => {
  const { role } = req.body;
  const checkRole = ['student', 'librarian'];

  if (!role || !checkRole.includes(role)) {
    throw new BadRequest('You are not authorize to access this information');
  }

  const book = await getBookService(req.query);
  if (!book || book.tempDeleted === true) {
    throw new NotFound('Book not found');
  }

  next();
});

export default accessControlBookRoute;
