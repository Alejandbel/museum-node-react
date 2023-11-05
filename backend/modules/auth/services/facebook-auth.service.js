import axios from 'axios';
import { authService } from './auth.service.js';

class FacebookAuthService {
  /**
   * @param {string} facebookAccessToken
   * @return {Promise<string>}
   */
  async signIn(facebookAccessToken) {
    const user = await this.getUserInformation(facebookAccessToken);
    return authService.getUsersToken(user.email, user);
  }

  /**
   * @param {string} facebookAccessToken
   * @return {Promise<{firstname: string, lastname: string, email: string}>}
   */
  async getUserInformation(facebookAccessToken) {
    const fields = ['first_name', 'last_name', 'email'];
    const { data } = await axios.get('https://graph.facebook.com/v18.0/me', {
      params: {
        access_token: facebookAccessToken,
        fields: fields.join(','),
        format: 'json',
        method: 'get',
        pretty: 0,
        suppress_http_code: 1,
        transport: 'cors',
      },
    });

    return {
      email: data.email,
      firstname: data.first_name,
      lastname: data.last_name,
    };
  }
}

export const facebookAuthService = new FacebookAuthService();
