import { AppError } from '../errors/app.error.js';
import Joi from 'joi';

/**
 * @param {unknown} err
 * @param {unknown} req
 * @param {import('express').Response}res
 * @param {unknown} next
 */
// eslint-disable-next-line no-unused-vars
export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
    });
    return;
  }

  if (err instanceof Joi.ValidationError) {
    res.status(422).json({
      message: err.message,
      details: err.details,
    });
    return;
  }

  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    res.status(422).json({
      message: err.message,
    });
  }

  console.error(err);

  res.status(500).json({
    message: 'Internal server error',
  });
};
