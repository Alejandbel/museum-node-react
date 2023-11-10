import { EntityNotFoundError } from '../../core/index.js';
import { usersRepository } from '../repositories/users.repository.js';

class UsersService {
  /**
   * @param {Omit<User, '_id' | 'createdAt' | 'updatedAt'>} user
   * @returns {Promise<User>}
   */
  async create(user) {
    return usersRepository.create(user);
  }

  /**
   * @param {string} email
   * @param {Partial<User>} userToCreate
   * @return {Promise<User>}
   */
  async getOrCreate(email, userToCreate) {
    let user = await usersRepository.findOne({ email });

    if (!user) {
      user = await usersRepository.create({ ...userToCreate, email });
    }

    return user;
  }

  /**
   * @param {string} id
   * @returns {Promise<User>}
   */
  async findById(id) {
    const user = await usersRepository.findById(id);

    if (!user) {
      throw new EntityNotFoundError('User');
    }

    return user;
  }

  /**
   * @returns {Promise<User[]>}
   */
  async find() {
    return usersRepository.find();
  }
}

export const usersService = new UsersService();
