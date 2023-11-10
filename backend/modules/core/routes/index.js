import express from 'express';

import { mountArticlesRouter } from '../../articles/index.js';
import { mountAuthRoutes } from '../../auth/index.js';
import { mountExhibitRouter } from '../../museum/index.js';
import { mountFeedbackRouter } from '../../feedbacks/index.js';
import { mountUsersRouter } from '../../users/index.js';
import { mountFileStorageRouter } from '../../file-storage/index.js';

const router = express.Router();

mountArticlesRouter(router);
mountAuthRoutes(router);
mountUsersRouter(router);
mountExhibitRouter(router);
mountFeedbackRouter(router);
mountFileStorageRouter(router);

/**
 * @param {import('express').IRouter} routing
 */
export function mountRouter(routing) {
  routing.use('/api/v1', router);
}
