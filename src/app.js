import express from 'express';
import dotenv from 'dotenv';
import configureAllRoutes from './routes/index';
import { handleError } from './middlewares/index';
// config environment variable
dotenv.config({ path: './config/config.env' });
const app = express();
app.use(express.json());
// all routes connect
configureAllRoutes(app);
app.use(handleError);
export default app;
