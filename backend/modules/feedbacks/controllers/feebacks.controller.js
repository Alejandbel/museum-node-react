import { feedbacksService } from '../services/feedbacks.service.js';

class FeedbacksController {
  /** @type ControllerMethod */
  createFeedback = async (req, res, next) => {
    try {
      const feedback = req.body;

      const createdFeedback = await feedbacksService.create(feedback);

      res.status(201).json(createdFeedback);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findFeedbackById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const feedback = await feedbacksService.findById(id);

      res.status(200).json(feedback);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  deleteFeedbackById = async (req, res, next) => {
    try {
      const { id } = req.params;

      await feedbacksService.deleteById(id);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findFeedbacks = async (req, res, next) => {
    try {
      const feedbacks = await feedbacksService.find();

      res.status(200).json({ items: feedbacks });
    } catch (err) {
      next(err);
    }
  };
}

export const feedbacksController = new FeedbacksController();
