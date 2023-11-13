import Joi from 'joi';
import { idValidationSchema, mongoIdSchema, SORT_DIRECTION } from '../../core/index.js';
import { fileStorageService } from '../../file-storage/services/file-storage.service.js';
import { EXHIBIT_SORT_FIELD } from '../types/exhibits.types.js';

const exhibit = Joi.object({
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
});

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

export const updateExhibitByIdSchema = {
  body: createExhibitBodySchema,
  params: idValidationSchema,
};

export const findExhibitByIdSchema = {
  params: idValidationSchema,
  response: exhibit,
};

export const deleteExhibitByIdSchema = {
  params: idValidationSchema,
};

export const findExhibitsResponseSchema = Joi.object({
  items: Joi.array().items(exhibit),
});

export const findExhibitsQuerySchema = Joi.object({
  search: Joi.string(),
  sortDirection: Joi.valid(...Object.values(SORT_DIRECTION)),
  sortField: Joi.valid(...Object.values(EXHIBIT_SORT_FIELD)),
});

export const findExhibitsSchema = {
  query: findExhibitsQuerySchema,
  response: findExhibitsResponseSchema,
};
