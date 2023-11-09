import Joi from 'joi';
import mongoose from 'mongoose';

export const mongoIdSchema = Joi.custom((value, helper) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return helper.error('Must be ObjectId');
  }
  return value;
}).required();

export const idValidationSchema = Joi.object({
  id: mongoIdSchema,
});
