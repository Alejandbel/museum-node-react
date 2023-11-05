import { EntityNotFoundError } from '../../core/index.js';
import { exhibitsRepository } from '../repositories/exhibits.repository.js';

class ExhibitsService {
  /**
   * @param {Omit<Exhibit, '_id' | 'createdAt' | 'updatedAt'>} exhibit
   * @returns {Promise<Exhibit>}
   */
  async create(exhibit) {
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

  /**
   * @returns {Promise<Exhibit[]>}
   */
  async find() {
    return exhibitsRepository.find();
  }
}

export const exhibitsService = new ExhibitsService();
