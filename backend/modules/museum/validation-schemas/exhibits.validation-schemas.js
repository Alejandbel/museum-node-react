import Joi from 'joi';
import { idValidationSchema } from '../../core/index.js';

export const createExhibitBodySchema = Joi.object({
  title: Joi.string().required(),
  typesOfArt: Joi.array().items(Joi.string().required()).required(),
  receiptDate: Joi.date().required(),
  imagePath: Joi.string(),
});

export const createExhibitSchema = {
  body: createExhibitBodySchema,
};

export const findExhibitByIdSchema = {
  params: idValidationSchema,
};

export const deleteExhibitByIdSchema = {
  params: idValidationSchema,
};
