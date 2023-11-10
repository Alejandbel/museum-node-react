import Joi from 'joi';

export const getFileParamsSchema = Joi.object({
  filename: Joi.string()
    .required()
    .custom((value, helpers) => {
      if (value.match(/\.\./)) {
        return helpers.error('Invalid filepath');
      }

      return value;
    }),
});

export const getFileSchema = {
  params: getFileParamsSchema,
};
