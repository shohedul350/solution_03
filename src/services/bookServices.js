import models from '../models/index';

const { Book } = models;

export const addBookService = async (book) => {
  const newBook = await Book.create(book);
  return newBook;
};

export const getBookService = async (data) => {
  const { bookName, author } = data;
  let query = {};

  if (bookName && bookName !== 'undefined') {
    query.bookName = bookName;
  }

  if (author && author !== 'undefined') {
    query.author = author;
  }
  const book = await Book.findOne(query);
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
