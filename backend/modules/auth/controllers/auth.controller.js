import { ACCESS_TOKEN_COOKIE } from '../constants/cookies.constants.js';

class AuthController {
  /** @type ControllerMethod */
  logout = async (req, res, next) => {
    try {
      res.clearCookie(ACCESS_TOKEN_COOKIE);

      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}

export const authController = new AuthController();
