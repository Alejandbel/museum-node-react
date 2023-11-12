import { ACCESS_TOKEN_COOKIE } from '../constants/cookies.constants.js';
import { authService } from '../services/auth.service.js';

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

  /** @type ControllerMethod */
  signUp = async (req, res, next) => {
    try {
      const user = req.body;

      const accessToken = await authService.signUp(user);

      res.cookie(ACCESS_TOKEN_COOKIE, accessToken);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  signIn = async (req, res, next) => {
    try {
      const user = req.body;

      const accessToken = await authService.signIn(user);

      res.cookie(ACCESS_TOKEN_COOKIE, accessToken);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}

export const authController = new AuthController();
