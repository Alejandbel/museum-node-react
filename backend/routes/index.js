import express from 'express';

import { mountArticlesRouter } from './articles.routes.js';

const router = express.Router();
mountArticlesRouter(router);

/**
 * @param {import('express').IRouter}routing
 */
export function mountRouter(routing) {
  routing.use('/api/v1', router);
}
