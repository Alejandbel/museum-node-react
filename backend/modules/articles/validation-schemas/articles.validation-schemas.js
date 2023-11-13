import Joi from 'joi';
import { mongoIdSchema } from '../../core/index.js';
import { fileStorageService } from '../../file-storage/services/file-storage.service.js';

export const createArticleBodySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  content: Joi.string(),
  imagePath: Joi.string(),
});

const articleSchema = Joi.object({
  _id: mongoIdSchema,
  title: Joi.string().required(),
  description: Joi.string().required(),
  content: Joi.string().required(),
  imagePath: Joi.string().custom((value) => fileStorageService.getAbsolutePath(value)),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
});

export const creteArticleSchema = {
  body: createArticleBodySchema,
};

export const findArticleByIdParamsSchema = Joi.object({
  id: Joi.string().hex().length(24),
});

export const findArticleByIdSchema = {
  params: findArticleByIdParamsSchema,
  response: articleSchema,
};

export const findArticlesResponseSchema = Joi.object({
  items: Joi.array().items(articleSchema).required(),
});
export const findArticlesSchema = {
  response: findArticlesResponseSchema,
};
