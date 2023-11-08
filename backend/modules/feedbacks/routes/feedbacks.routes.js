import express from 'express';
import { feedbacksController } from '../controllers/feebacks.controller.js';
import { applyValidation } from '../../core/index.js';
import {
  createFeedbackSchema,
  deleteFeedbackByIdSchema,
  findFeedbackByIdSchema,
} from '../validation-schemas/feebacks.validation-schemas.js';
import { authorized } from '../../auth/middlewares/authorized.middleware.js';
import { USER_ROLE } from '../../users/types/users.types.js';

const router = express.Router();

router.post('/', authorized(), applyValidation(createFeedbackSchema), feedbacksController.createFeedback);

router.get('/', feedbacksController.findFeedbacks);

router.get('/:id', applyValidation(findFeedbackByIdSchema), feedbacksController.findFeedbackById);

router.delete(
  '/:id',
  authorized([USER_ROLE.ADMIN]),
  applyValidation(deleteFeedbackByIdSchema),
  feedbacksController.deleteFeedbackById,
);

/**
 * @param {import('express').IRouter}routing
 */
export function mountFeedbackRouter(routing) {
  routing.use('/feedbacks', router);
}
