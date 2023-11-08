import { ACCESS_TOKEN_COOKIE } from '../constants/cookies.constants.js';
import { ForbiddenError, UnauthorizedError } from '../../core/index.js';
import { jwtService } from '../services/jwt.service.js';
import jwt from 'jsonwebtoken';

/**
 * @param {UserRole[]} [allowedRoles]
 * @returns {Middleware}
 */
export const authorized = (allowedRoles) => (req, res, next) => {
  const accessToken = req.cookies[ACCESS_TOKEN_COOKIE];

  console.log(req.cookies);

  if (!accessToken) {
    return next(new UnauthorizedError('You must be authorized to access this endpoint'));
  }

  try {
    req.user = jwtService.validateAccessToken(accessToken);
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return next(new UnauthorizedError(err.message));
    }

    return next(new UnauthorizedError('Malformed access token'));
  }

  if (allowedRoles && !allowedRoles.includes(req.user.role)) {
    return next(new ForbiddenError('No access to endpoint'));
  }

  return next();
};
