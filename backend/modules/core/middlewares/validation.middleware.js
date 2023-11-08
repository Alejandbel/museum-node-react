/**
 * @param {{body: ObjectSchema<*> | undefined, params: ObjectSchema<*> | undefined, query: ObjectSchema<*> | undefined}} validationSchema
 * @returns {Middleware}
 */
export const applyValidation = ({ body: bodySchema, params: paramsSchema, query: querySchema }) => {
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
      next();
    } catch (err) {
      next(err);
    }
  };
};
