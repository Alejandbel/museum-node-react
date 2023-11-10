import express from 'express';
import { applyValidation } from '../../core/index.js';
import { getFileSchema } from '../validation-schemas/feebacks.validation-schemas.js';
import { fileStorageController } from '../controllers/file-storage.controller.js';

const router = express.Router();

router.get('/:filename', applyValidation(getFileSchema), fileStorageController.getFile);

/**
 * @param {import('express').IRouter}routing
 */
export function mountFileStorageRouter(routing) {
  routing.use('/file-storage', router);
}
