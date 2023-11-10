import axios from '../../utils/axios';

class AuthService {
  /**
   * @param {string} googleAccessToken
   */
  async signInWithGoogle(googleAccessToken) {
    await axios.post('/api/v1/auth/google/sign-in', { googleAccessToken }, { withCredentials: true });
  }

  /**
   * @param {string} facebookAccessToken
   */
  async signInWithFacebook(facebookAccessToken) {
    await axios.post('/api/v1/auth/facebook/sign-in', { facebookAccessToken }, { withCredentials: true });
  }

  async logout() {
    await axios.post('/api/v1/auth/logout');
  }
}

export const authService = new AuthService();
