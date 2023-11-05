import { BaseRepository } from '../../core/index.js';
import { FeedbackModel } from '../models/feedback.model.js';

class FeedbacksRepository extends BaseRepository {
  constructor() {
    super(FeedbackModel);
  }
}

export const feedbacksRepository = new FeedbacksRepository();
