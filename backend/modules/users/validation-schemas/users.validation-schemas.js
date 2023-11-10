import Joi from 'joi';
import { USER_ROLE } from '../types/users.types.js';
import { mongoIdSchema } from '../../core/index.js';

export const getUsersListResponseSchema = Joi.object({
  items: Joi.array().items(
    Joi.object({
      _id: mongoIdSchema,
      role: Joi.string().allow(Object.values(USER_ROLE)).required(),
      firstname: Joi.string().required(),
      lastname: Joi.string(),
      createdAt: Joi.date().required(),
      updatedAt: Joi.date().required(),
    }),
  ),
});

export const getUsersListSchema = {
  response: getUsersListResponseSchema,
};
