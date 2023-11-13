import Joi from 'joi';
import { mongoIdSchema, SORT_DIRECTION } from '../../core/index.js';
import { TOURS_SORT_FIELD } from '../types/tours.types.js';

const tour = Joi.object({
  _id: mongoIdSchema,
  title: Joi.string().required(),
  exhibits: Joi.array()
    .items(
      Joi.object({
        _id: mongoIdSchema,
        title: Joi.string().required(),
      }),
    )
    .required(),
  date: Joi.date().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});

export const createTourBodySchema = Joi.object({
  title: Joi.string().required(),
  exhibits: Joi.array().items(mongoIdSchema).required().required(),
  date: Joi.date().required(),
});

export const createTourSchema = {
  body: createTourBodySchema,
};

export const findToursResponseSchema = Joi.object({
  items: Joi.array().items(tour),
});

export const findToursQuerySchema = Joi.object({
  search: Joi.string(),
  sortDirection: Joi.valid(...Object.values(SORT_DIRECTION)),
  sortField: Joi.valid(...Object.values(TOURS_SORT_FIELD)),
});

export const findToursSchema = {
  query: findToursQuerySchema,
  response: findToursResponseSchema,
};
