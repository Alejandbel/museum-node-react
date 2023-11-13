import { EntityNotFoundError } from '../../core/index.js';
import { toursRepository } from '../repositories/tours.repository.js';

class ToursService {
  /**
   * @param {Omit<Tour, '_id' | 'createdAt' | 'updatedAt' >} tour
   * @returns {Promise<Tour>}
   */
  async create(tour) {
    return toursRepository.create(tour);
  }

  /**
   * @param {string} id
   * @param {Omit<Tour, '_id' | 'createdAt' | 'updatedAt' >} tour
   * @returns {Promise<Tour>}
   */
  async updateById(id, tour) {
    await this.findById(id);
    return toursRepository.updateById(id, tour);
  }

  /**
   * @param {string} id
   * @returns {Promise<Tour>}
   */
  async findById(id) {
    const tour = await toursRepository.findById(id);

    if (!tour) {
      throw new EntityNotFoundError('Tour');
    }

    return tour;
  }

  /**
   * @param {string} id
   * @returns {Promise<Tour>}
   */
  async findByIdWithEmployee(id) {
    const tour = await toursRepository.findByIdWithEmployee(id);

    if (!tour) {
      throw new EntityNotFoundError('Tour');
    }

    return tour;
  }

  /**
   * @param {string} id
   * @returns {Promise<void>}
   */
  async deleteById(id) {
    await this.findById(id);
    await toursRepository.deleteById(id);
  }

  async findWithExhibits(options) {
    return toursRepository.findWithExhibits(options);
  }
}

export const toursService = new ToursService();
