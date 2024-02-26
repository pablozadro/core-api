const { body, validationResult } = require('express-validator');
const createError = require('http-errors');
const config = require('@/config');


const LoginBodyValidator = [
  body('email').notEmpty().isEmail(),
  body('password').notEmpty().isLength({ min: config.passwordMinLen, max: config.passwordMaxLen }),
  (req, res, next) => {
    const result = validationResult(req);
    if (result.isEmpty()) return next();
    const errors = result.array();
    const error = createError(400, 'Bad Request', { cause: errors });
    return next(error);
  }
]

module.exports = {
  LoginBodyValidator
}