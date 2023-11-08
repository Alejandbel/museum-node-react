import { facebookAuthService } from '../services/facebook-auth.service.js';
import { ACCESS_TOKEN_COOKIE } from '../constants/cookies.constants.js';

class FacebookAuthController {
  /** @type ControllerMethod */
  signInWithFacebook = async (req, res, next) => {
    try {
      const { facebookAccessToken } = req.body;

      const accessToken = await facebookAuthService.signIn(facebookAccessToken);

      res.cookie(ACCESS_TOKEN_COOKIE, accessToken);
      console.log(res.cookies);
      return res.status(204).send();
    } catch (err) {
      next(err);
    }
  };
}

export const facebookAuthController = new FacebookAuthController();
