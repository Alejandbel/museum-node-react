import express from 'express';
import { applyValidation } from '../../core/index.js';
import { authorized } from '../../auth/middlewares/authorized.middleware.js';
import { USER_ROLE } from '../../users/types/users.types.js';
import { createTourSchema, findToursSchema } from '../validation-schemas/tours.validation-schemas.js';
import { toursController } from '../controllers/tours.controller.js';

const router = express.Router();

router.post('/', authorized([USER_ROLE.ADMIN]), applyValidation(createTourSchema), toursController.createTour);

router.get('/', applyValidation(findToursSchema), toursController.findTours);

/**
 * @param {import('express').IRouter}routing
 */
export function mountToursRouter(routing) {
  routing.use('/tours', router);
}
