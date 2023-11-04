import express from 'express';
import { articlesController } from '../controllers/articles.controller.js';
import { applyValidation } from '../middlewares/validation.middleware.js';
import {
  creteArticleSchema,
  findArticleByIdSchema,
} from '../validation-schemas/articles.validation-schemas.js';

const router = express.Router();

router.post(
  '/',
  applyValidation(creteArticleSchema),
  articlesController.createArticle,
);

router.get('/', articlesController.findArticles);

router.get(
  '/:id',
  applyValidation(findArticleByIdSchema),
  articlesController.findArticleById,
);

/**
 * @param {import('express').IRouter}routing
 */
export function mountArticlesRouter(routing) {
  routing.use('/articles', router);
}
