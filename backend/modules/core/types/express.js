/**
 * @typedef {Function} ControllerMethod
 * @param {import('express').Request & {user?: {id: string, role: UserRole}}} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */

/**
 * @typedef {Function} Middleware
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void> | void}
 */
