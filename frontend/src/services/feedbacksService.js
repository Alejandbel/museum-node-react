import axios from '../utils/axios';

class FeedbacksService {
  /**
   * @return {Promise<{items: FeedbackListItem[]}>}
   */
  async findFeedbacks() {
    const { data } = await axios.get('/api/v1/feedbacks');
    return data;
  }

  /**
   * @param {Pick<Feedback, 'title' | 'rating' | 'content' >}feedback
   * @returns {Promise<Feedback>}
   */
  async createFeedback(feedback) {
    const { data } = await axios.post('/api/v1/feedbacks', feedback);
    return data;
  }
}

export const feedbacksService = new FeedbacksService();
