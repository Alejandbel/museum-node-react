import Joi from 'joi';

export const idValidationSchema = Joi.object({
  id: Joi.string().hex().length(24),
});
