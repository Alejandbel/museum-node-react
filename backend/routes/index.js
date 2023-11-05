import express from 'express';

import { mountArticlesRouter } from '../modules/articles/index.js';
import { mountAuthRoutes } from '../modules/auth/index.js';

const router = express.Router();

mountArticlesRouter(router);
mountAuthRoutes(router);

/**
 * @param {import('express').IRouter}routing
 */
export function mountRouter(routing) {
  routing.use('/api/v1', router);
}
