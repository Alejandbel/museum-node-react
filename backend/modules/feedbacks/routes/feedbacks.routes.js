import express from 'express';
import { feedbacksController } from '../controllers/feebacks.controller.js';
import { applyValidation } from '../../core/index.js';
import {
  createFeedbackSchema,
  deleteFeedbackByIdSchema,
  findFeedbackByIdSchema,
} from '../validation-schemas/feebacks.validation-schemas.js';

const router = express.Router();

router.post('/', applyValidation(createFeedbackSchema), feedbacksController.createFeedback);

router.get('/', feedbacksController.findFeedbacks);

router.get('/:id', applyValidation(findFeedbackByIdSchema), feedbacksController.findFeedbackById);

router.delete('/:id', applyValidation(deleteFeedbackByIdSchema), feedbacksController.deleteFeedbackById);

/**
 * @param {import('express').IRouter}routing
 */
export function mountFeedbackRouter(routing) {
  routing.use('/feedbacks', router);
}
