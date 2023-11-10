import Joi from 'joi';
import { idValidationSchema, mongoIdSchema } from '../../core/index.js';
import { fileStorageService } from '../../file-storage/services/file-storage.service.js';

export const createExhibitBodySchema = Joi.object({
  title: Joi.string().required(),
  typesOfArt: Joi.array().items(Joi.string().required()).required(),
  receiptDate: Joi.date().required(),
  imagePath: Joi.string(),
  employee: mongoIdSchema,
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

export const findExhibitsResponseSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      _id: mongoIdSchema,
      title: Joi.string().required(),
      typesOfArt: Joi.array().items(Joi.string().required()).required(),
      receiptDate: Joi.date().required(),
      imagePath: Joi.string().custom((value) => fileStorageService.getAbsolutePath(value)),
      employee: Joi.object({
        _id: mongoIdSchema,
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
      }),
      createdAt: Joi.date().required(),
      updatedAt: Joi.date().required(),
    }),
  ),
});

export const findExhibitsSchema = {
  response: findExhibitsResponseSchema,
};
