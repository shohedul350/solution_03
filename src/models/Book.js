import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  bookName: {
    type: String,
  },
  author: {
    type: String,
    unique: true,
  },
  price: {
    type: String,
  },
  tempDeleted: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Book = mongoose.model('book', bookSchema);
export default Book;
