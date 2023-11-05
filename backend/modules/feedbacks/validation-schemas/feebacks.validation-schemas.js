import Joi from 'joi';
import { idValidationSchema } from '../../core/index.js';

export const createFeedbackBodySchema = Joi.object({
  title: Joi.string().required(),
  typesOfArt: Joi.array().items(Joi.string().required()).required(),
  receiptDate: Joi.date().required(),
  imagePath: Joi.string(),
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
