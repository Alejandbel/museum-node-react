import jwt from 'jsonwebtoken';
import { JWT } from '../constants/jwt.constants.js';

class JwtService {
  /**
   * @param user
   * @return {string}
   */
  generateAccessToken(user) {
    return jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      JWT.SECRET,
      {
        expiresIn: JWT.EXPIRATION_TIME,
      },
    );
  }

  /**
   * @param {string} accessToken
   * @returns {{_id: string, role: UserRole}}
   */
  validateAccessToken(accessToken) {
    return jwt.verify(accessToken, JWT.SECRET);
  }
}

export const jwtService = new JwtService();
