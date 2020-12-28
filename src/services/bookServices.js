import models from '../models/index';

const { Book } = models;

export const addBookService = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
};

export const getBookService = async (query) => {
  const book = await Book.findOne({ query });
  return book;
};

export const updateBookService = async (id, data) => {
  const updatedBook = await Book.findByIdAndUpdate(id, data, { new: true });
  return updatedBook;
};

export const deleteBookService = async (id) => {
  const deletedBook = await Book.findByIdAndUpdate(id, { tempDeleted: true }, { new: true });
  return deletedBook;
};

export const checkTempBookService = async (id) => {
  const checkTemp = await Book.findById(id);
  return checkTemp;
};
