import toast from 'react-hot-toast';

/**
 * @param {AxiosError} error
 */
export function handleAxiosErrorMessageToast(error) {
  const errorMessage = error?.response?.data?.message;
  if (errorMessage) {
    toast.error(errorMessage);
  }
  return null;
}

/**
 * @template T, V
 * @param {ObjectSchema<*>} schema
 * @param {T} valueToValidate
 * @param {(T) => V} callback
 * @returns {V | null}
 */
export function validateOrToast(schema, valueToValidate, callback) {
  const {
    value, error,
  } = schema.validate(valueToValidate, { stripUnknown: true, abortEarly: false });

  if (error) {
    error.details.map(({ message }) => toast.error(message));
    return null;
  }

  return callback(value);
}
