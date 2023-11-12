import axios from '../../utils/axios';

class AuthService {
  /**
   * @param {string} googleAccessToken
   */
  async signInWithGoogle(googleAccessToken) {
    await axios.post('/api/v1/auth/google/sign-in', { googleAccessToken });
  }

  /**
   * @param {string} facebookAccessToken
   */
  async signInWithFacebook(facebookAccessToken) {
    await axios.post('/api/v1/auth/facebook/sign-in', { facebookAccessToken });
  }

  /**
   * @param {string} email
   * @param {string} firstname
   * @param {string} lastname
   * @param {string} password
   * @returns {Promise<void>}
   */
  async signUp({
    email, firstname, lastname, password,
  }) {
    await axios.post('/api/v1/auth/sign-up', {
      email, firstname, lastname, password,
    });
  }

  /**
   * @param {string} email
   * @param {string} password
   * @returns {Promise<void>}
   */
  async signIn({
    email, password,
  }) {
    await axios.post('/api/v1/auth/sign-in', {
      email, password,
    });
  }

  async logout() {
    await axios.post('/api/v1/auth/logout');
  }
}

export const authService = new AuthService();
