import { usersService } from '../../users/services/users.service.js';
import { jwtService } from './jwt.service.js';
import { ServiceError } from '../../core/errors/service.error.js';
import { hash, compare } from 'bcrypt';
import { SALT_ROUNDS } from '../constants/hash.constants.js';
import { EntityNotFoundError } from '../../core/index.js';
import { USER_ROLE } from '../../users/types/users.types.js';

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

  /**
   * @param {Pick<User, 'email'|'firstname'|'lastname'> & {password: string}} userToSignUp
   * @return {Promise<string>}
   */
  async signUp(userToSignUp) {
    const user = await usersService.findByEmail(userToSignUp.email);
    if (user) {
      throw new ServiceError('User already exists');
    }

    const passwordHash = await hash(userToSignUp.password, SALT_ROUNDS);

    const newUser = await usersService.create({ ...userToSignUp, passwordHash, role: USER_ROLE.USER });

    return jwtService.generateAccessToken(newUser);
  }

  /**
   * @param {{password: string, email: string}} user
   * @return {Promise<string>}
   */
  async signIn({ password, email }) {
    const user = await usersService.findByEmail(email);
    if (!user) {
      throw new EntityNotFoundError('User');
    }

    const isPasswordCorrect = await compare(password, user.passwordHash);
    if (!isPasswordCorrect) {
      throw new ServiceError('Incorrect password');
    }

    return jwtService.generateAccessToken(user);
  }
}

export const authService = new AuthService();
