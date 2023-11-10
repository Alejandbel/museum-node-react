import { EntityNotFoundError } from '../../core/index.js';
import { exhibitsRepository } from '../repositories/exhibits.repository.js';
import { usersService } from '../../users/services/users.service.js';

class ExhibitsService {
  /**
   * @param {Omit<Exhibit, '_id' | 'createdAt' | 'updatedAt' >} exhibit
   * @returns {Promise<Exhibit>}
   */
  async create(exhibit) {
    await usersService.findById(exhibit.employee);
    return exhibitsRepository.create(exhibit);
  }

  /**
   * @param {string} id
   * @returns {Promise<Exhibit>}
   */
  async findById(id) {
    const exhibit = await exhibitsRepository.findById(id);

    if (!exhibit) {
      throw new EntityNotFoundError('Exhibit');
    }

    return exhibit;
  }

  /**
   * @param {string} id
   * @returns {Promise<void>}
   */
  async deleteById(id) {
    await this.findById(id);
    await exhibitsRepository.deleteById(id);
  }

  async findWithEmployees() {
    return exhibitsRepository.findWithEmployees();
  }
}

export const exhibitsService = new ExhibitsService();
