import Joi from 'joi';

export const createArticleBodySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  content: Joi.string(),
  imagePath: Joi.string(),
});

export const creteArticleSchema = {
  body: createArticleBodySchema,
};

export const findArticleByIdParamsSchema = Joi.object({
  id: Joi.string().hex().length(24),
});

export const findArticleByIdSchema = {
  params: findArticleByIdParamsSchema,
};
