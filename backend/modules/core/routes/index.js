import express from 'express';

import { mountArticlesRouter } from '../../articles/index.js';
import { mountAuthRoutes } from '../../auth/index.js';
import { mountExhibitRouter } from '../../museum/index.js';
import { mountFeedbackRouter } from '../../feedbacks/index.js';

const router = express.Router();

mountArticlesRouter(router);
mountAuthRoutes(router);
mountExhibitRouter(router);
mountFeedbackRouter(router);

/**
 * @param {import('express').IRouter} routing
 */
export function mountRouter(routing) {
  routing.use('/api/v1', router);
}
