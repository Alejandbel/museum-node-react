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
        _id: user._id,
        role: user.role,
      },
      JWT.SECRET,
      {
        expiresIn: JWT.EXPIRATION_TIME,
      },
    );
  }
}

export const jwtService = new JwtService();
