import asyncHandler from '../utils/asyncHandler';
import {
  addBookService,
  getBookService,
  updateBookService,
  deleteBookService,
  checkTempBookService,
} from '../services/bookServices';
import { NotFound } from '../utils/generalError';

export const addBook = asyncHandler(async (req, res) => {
  const newBook = await addBookService(req.body);
  return res.status(201).json({ newBook, msg: 'Book Added successfully' });
});

export const getBook = asyncHandler(async (req, res) => {
  const book = await getBookService(req.query);
  return res.status(200).json({ book, msg: 'Book fetch successfully' });
});

export const updateBook = asyncHandler(async (req, res) => {
  const book = checkTempBookService(req.params.id);
  if (!book || book.tempDeleted === true) {
    throw new NotFound('Book not found');
  }
  const updatedBook = await updateBookService(req.params.id, req.body);
  return res.status(200).json({ updatedBook, msg: 'Book update successfully' });
});

export const deleteBook = asyncHandler(async (req, res) => {
  const book = await checkTempBookService(req.params.id);
  if (!book) {
    throw new NotFound('Book not found');
  }
  if (book && book.tempDeleted === true) {
    throw new NotFound('You have already deleted');
  }
  const deletedBook = await deleteBookService(req.params.id);
  return res.status(200).json({ deletedBook, msg: 'Book delete successfully' });
});
