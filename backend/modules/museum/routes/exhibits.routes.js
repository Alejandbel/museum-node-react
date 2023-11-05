import express from 'express';
import { exhibitsController } from '../controllers/exhibits.controller.js';
import { applyValidation } from '../../core/index.js';
import {
  createExhibitSchema,
  deleteExhibitByIdSchema,
  findExhibitByIdSchema,
} from '../validation-schemas/exhibits.validation-schemas.js';

const router = express.Router();

router.post('/', applyValidation(createExhibitSchema), exhibitsController.createExhibit);

router.get('/', exhibitsController.findExhibits);

router.get('/:id', applyValidation(findExhibitByIdSchema), exhibitsController.findExhibitById);

router.delete('/:id', applyValidation(deleteExhibitByIdSchema), exhibitsController.deleteExhibitById);

/**
 * @param {import('express').IRouter}routing
 */
export function mountExhibitRouter(routing) {
  routing.use('/exhibits', router);
}
