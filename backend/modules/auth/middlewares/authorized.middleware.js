import { ACCESS_TOKEN_COOKIE } from '../constants/cookies.constants.js';
import { UnauthorizedError } from '../../../errors/unauthorized.error.js';
import { jwtService } from '../services/jwt.service.js';
import { JsonWebTokenError } from 'jsonwebtoken';
import { ForbiddenError } from '../../../errors/forbidden.error.js';

/**
 * @param {UserRole[]} [allowedRoles]
 * @returns {Middleware}
 */
export const authorized = (allowedRoles) => (req, res, next) => {
  const accessToken = req.cookies[ACCESS_TOKEN_COOKIE];

  if (!accessToken) {
    return next(new UnauthorizedError('You must be authorized to access this endpoint'));
  }

  try {
    req.user = jwtService.validateAccessToken(accessToken);
  } catch (err) {
    if (err instanceof JsonWebTokenError) {
      return next(new UnauthorizedError(err.message));
    }

    return next(new UnauthorizedError('Malformed access token'));
  }

  if (allowedRoles && !allowedRoles.includes(req.user.role)) {
    return next(new ForbiddenError('No access to endpoint'));
  }

  return next();
};
