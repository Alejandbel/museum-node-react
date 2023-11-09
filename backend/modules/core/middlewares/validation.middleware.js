/**
 * @typedef ValidationSchema
 * @property {ObjectSchema<*>} [body]
 * @property {ObjectSchema<*>} [params]
 * @property {ObjectSchema<*>} [query]
 * @property {ObjectSchema<*>} [response]
 */

/**
 * @param {ValidationSchema} validationSchema
 * @returns {Middleware}
 */
export const applyValidation = ({
  body: bodySchema,
  params: paramsSchema,
  query: querySchema,
  response: responseSchema,
}) => {
  return async (req, res, next) => {
    try {
      if (paramsSchema) {
        req.params = await paramsSchema.validateAsync(req.params, {
          stripUnknown: true,
        });
      }
      if (querySchema) {
        req.query = await querySchema.validateAsync(req.query, {
          stripUnknown: true,
        });
      }
      if (bodySchema) {
        req.body = await bodySchema.validateAsync(req.body, {
          stripUnknown: true,
        });
      }

      if (responseSchema) {
        const originalJson = res.json;
        res.json = (body) => {
          if (res.statusCode >= 300) {
            return originalJson.call(res, body);
          }

          const { value, error } = responseSchema.validate(body, { stripUnknown: true });
          if (error) {
            throw error;
          }
          return originalJson.call(res, value);
        };
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
