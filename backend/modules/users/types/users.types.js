export const USER_ROLE = {
  USER: 'user',
  ADMIN: 'admin',
};

/**
 * @typedef {Object} User
 * @property {ObjectId} _id
 * @property {'user' | 'admin'} role
 * @property {string} email
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} [passwordHash]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */
