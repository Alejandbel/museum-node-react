import { usersService } from '../../users/services/users.service.js';
import { jwtService } from './jwt.service.js';

class AuthService {
  /**
   * @param {string} email
   * @param {Partial<User>} userToCreate
   * @return {Promise<string>}
   */
  async getUsersToken(email, userToCreate) {
    const user = await usersService.getOrCreate(email, userToCreate);
    return jwtService.generateAccessToken(user);
  }
}

export const authService = new AuthService();
