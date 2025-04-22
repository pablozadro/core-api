import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { errorMiddleware, dbMiddleware } from '@/core/middlewares';
import healthApi from '@/health/api';
import authApi from '@/auth/authApi';
import nutritionApi from '@/nutrition/nutritionApi';


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
app.use('/api/health', healthApi);
app.use('/api/auth', authApi);
app.use('/api/nutrition', nutritionApi);

/* Error Handling */
app.use(errorMiddleware);

export default app;
