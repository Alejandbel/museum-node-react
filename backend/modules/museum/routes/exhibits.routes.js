import express from 'express';
import { exhibitsController } from '../controllers/exhibits.controller.js';
import { applyValidation } from '../../core/index.js';
import {
  createExhibitSchema,
  deleteExhibitByIdSchema,
  findExhibitByIdSchema,
  findExhibitsSchema,
  updateExhibitByIdSchema,
} from '../validation-schemas/exhibits.validation-schemas.js';
import { authorized } from '../../auth/middlewares/authorized.middleware.js';
import { USER_ROLE } from '../../users/types/users.types.js';
import { upload } from '../../file-storage/middlewares/file-upload.middleware.js';

const router = express.Router();

router.post(
  '/',
  authorized([USER_ROLE.ADMIN]),
  upload.single('file'),
  applyValidation(createExhibitSchema),
  exhibitsController.createExhibit,
);

router.get('/', applyValidation(findExhibitsSchema), exhibitsController.findExhibits);

router.get('/:id', applyValidation(findExhibitByIdSchema), exhibitsController.findExhibitById);

router.put(
  '/:id',
  authorized([USER_ROLE.ADMIN]),
  upload.single('file'),
  applyValidation(updateExhibitByIdSchema),
  exhibitsController.updateExhibitById,
);

router.delete(
  '/:id',
  authorized([USER_ROLE.ADMIN]),
  applyValidation(deleteExhibitByIdSchema),
  exhibitsController.deleteExhibitById,
);

/**
 * @param {import('express').IRouter}routing
 */
export function mountExhibitRouter(routing) {
  routing.use('/exhibits', router);
}
