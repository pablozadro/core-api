import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { errorMiddleware, dbMiddleware } from '@/core/middlewares';
import healthApi from '@/health/api';
import authApi from '@/auth/authApi';


/* App */
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Middlewares */
app.use(dbMiddleware);

/* APIs */
app.use('/api/health', healthApi);
app.use('/api/auth', authApi);

/* Error Handling */
app.use(errorMiddleware);

export default app;
