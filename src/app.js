const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('@/landing/landing.router');
const authRouter = require('@/auth/auth.router');
const errorMiddleware = require('@/middlewares/error.middleware');
const delayMiddleware = require('@/middlewares/delay.middleware');


/**
 * App
 */

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


/**
 * Router & Middlewares
 */

app.use('/api/v1', delayMiddleware);
app.use('/api/v1', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1', errorMiddleware);


module.exports = app;
