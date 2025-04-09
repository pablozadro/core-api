import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { errorMiddleware, dbMiddleware } from '@/core/middlewares';
import healthApi from '@/health/api';


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

/* Error Handling */
app.use(errorMiddleware);

export default app;
