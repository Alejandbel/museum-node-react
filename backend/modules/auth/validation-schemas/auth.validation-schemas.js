/**
 * @typedef {Object} User
 * @property {string} _id
 * @property {UserRole} role
 * @property {string} email
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} [passwordHash]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

import Joi from 'joi';

export const signUpBodySchema = Joi.object({
  email: Joi.string().required().email(),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  password: Joi.string().required(),
});

export const signUpSchema = {
  body: signUpBodySchema,
};

export const signInBodySchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

export const signInSchema = {
  body: signInBodySchema,
};
