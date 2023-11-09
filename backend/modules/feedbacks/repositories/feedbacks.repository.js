import { BaseRepository } from '../../core/index.js';
import { FeedbackModel } from '../models/feedback.model.js';

class FeedbacksRepository extends BaseRepository {
  constructor() {
    super(FeedbackModel);
  }

  /**
   * @param {FilterQuery<*>} [filter]
   * @return {Promise<(Omit<Feedback, 'author'> & {author: User})[]>}
   */
  async findWithAuthors(filter) {
    return this.model.find(filter).populate('author').lean();
  }
}

export const feedbacksRepository = new FeedbacksRepository();
