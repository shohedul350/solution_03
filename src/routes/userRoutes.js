import express from 'express';
import {
  addUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/userController';

const router = express.Router();

router.route('/').post(addUser);
router.route('/:number').get(getUser);
router.route('/:id').put(updateUser).delete(deleteUser);

const configure = (app) => {
  app.use('/api/user', router);
};

export default configure;
