import express from 'express';
import {
  addBook,
  getBook,
  updateBook,
  deleteBook,
} from '../controllers/bookController';
import { handleValidations } from '../middlewares/handleValidation';
import validation from '../models/validation/index';
import accessControl from '../middlewares/accessControl';

const router = express.Router();

router.route('/add').get(accessControl, getBook);
router.route('/').post(handleValidations(validation.bookValidation), addBook);
router.route('/:id').put(updateBook).delete(deleteBook);

const configure = (app) => {
  app.use('/api/book', router);
};

export default configure;
