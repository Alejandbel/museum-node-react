import { EntityNotFoundError } from '../../core/index.js';
import { feedbacksRepository } from '../repositories/feedbacks.repository.js';

class FeedbacksService {
  /**
   * @param {Omit<Feedback, '_id' | 'createdAt' | 'updatedAt'>} feedback
   * @returns {Promise<Feedback>}
   */
  async create(feedback) {
    return feedbacksRepository.create(feedback);
  }

  /**
   * @param {string} id
   * @returns {Promise<Feedback>}
   */
  async findById(id) {
    const feedback = await feedbacksRepository.findById(id);

    if (!feedback) {
      throw new EntityNotFoundError('feedback');
    }

    return feedback;
  }

  /**
   * @param {string} id
   * @returns {Promise<void>}
   */
  async deleteById(id) {
    await this.findById(id);
    await feedbacksRepository.deleteById(id);
  }

  /**
   * @returns {Promise<Feedback[]>}
   */
  async find() {
    return feedbacksRepository.find();
  }
}

export const feedbacksService = new FeedbacksService();
