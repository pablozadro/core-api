import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { errorMiddleware, dbMiddleware, delayMiddleware } from '@/core/middlewares';
import healthApi from '@/health/api/healthApi';
import authApi from '@/auth/api/authApi';
import nutritionApi from '@/nutrition/api/nutritionApi';

/* App */
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Middlewares */
app.use(dbMiddleware);

/* APIs */
app.use('/api/health', [delayMiddleware], healthApi);
app.use('/api/auth', [delayMiddleware], authApi);
app.use('/api/nutrition', [delayMiddleware], nutritionApi);

/* Error Handling */
app.use(errorMiddleware);

export default app;
