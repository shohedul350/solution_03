import express from 'express';
import dotenv from 'dotenv';

// config environment variable
dotenv.config({ path: './config/config.env' });
const app = express();
app.use(express.json());

export default app;
