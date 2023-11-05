import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_ID } from '../constants/google-auth.constants.js';
import { authService } from './auth.service.js';

class GoogleAuthService {
  client = new OAuth2Client({
    clientId: GOOGLE_CLIENT_ID,
  });

  /**
   * @param {string} googleOauthToken
   * @return {Promise<string>}
   */
  async signIn(googleOauthToken) {
    const user = await this.extractUserFromToken(googleOauthToken);
    console.log(user);
    return authService.getUsersToken(user.email, user);
  }

  /**
   * @param {string} googleOauthToken
   * @return {Promise<{firstname: string, lastname: string, email: string}>}
   */
  async extractUserFromToken(googleOauthToken) {
    const ticket = await this.client.verifyIdToken({
      idToken: googleOauthToken,
    });

    const { email, family_name, given_name } = ticket.getPayload();

    return {
      email,
      firstname: given_name,
      lastname: family_name,
    };
  }
}

export const googleAuthService = new GoogleAuthService();
