import Joi from 'joi';
import { idValidationSchema, mongoIdSchema } from '../../core/index.js';

export const createFeedbackBodySchema = Joi.object({
  title: Joi.string().required(),
  rating: Joi.number().required().min(1).max(5),
  content: Joi.string().required(),
});

export const createFeedbackSchema = {
  body: createFeedbackBodySchema,
};

export const findFeedbackByIdSchema = {
  params: idValidationSchema,
};

export const deleteFeedbackByIdSchema = {
  params: idValidationSchema,
};

export const findFeedbacksResponseSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      _id: mongoIdSchema,
      title: Joi.string().required(),
      rating: Joi.number().required().min(1).max(5),
      content: Joi.string().required(),
      author: Joi.object({
        _id: mongoIdSchema,
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
      }),
      createdAt: Joi.date().required(),
      updatedAt: Joi.date().required(),
    }),
  ),
});

export const findFeedbacksSchema = {
  response: findFeedbacksResponseSchema,
};
