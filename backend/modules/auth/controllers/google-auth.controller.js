import { googleAuthService } from '../services/google-auth.service.js';
import { ACCESS_TOKEN_COOKIE } from '../constants/cookies.constants.js';

class GoogleAuthController {
  /** @type ControllerMethod */
  signInWithGoogle = async (req, res, next) => {
    try {
      const { googleAccessToken } = req.body;

      const accessToken = await googleAuthService.signIn(googleAccessToken);

      res.cookie(ACCESS_TOKEN_COOKIE, accessToken);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}

export const googleAuthController = new GoogleAuthController();
