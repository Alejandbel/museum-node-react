import express from 'express';
import { articlesController } from '../controllers/articles.controller.js';
import { applyValidation } from '../../core/index.js';
import {
  creteArticleSchema,
  findArticleByIdSchema,
  findArticlesSchema,
} from '../validation-schemas/articles.validation-schemas.js';
import { authorized } from '../../auth/middlewares/authorized.middleware.js';
import { USER_ROLE } from '../../users/types/users.types.js';
import { upload } from '../../file-storage/middlewares/file-upload.middleware.js';

const router = express.Router();

router.post(
  '/',
  authorized([USER_ROLE.ADMIN]),
  upload.single('file'),
  applyValidation(creteArticleSchema),
  articlesController.createArticle,
);

router.get('/', applyValidation(findArticlesSchema), articlesController.findArticles);

router.get('/:id', applyValidation(findArticleByIdSchema), articlesController.findArticleById);

/**
 * @param {import('express').IRouter}routing
 */
export function mountArticlesRouter(routing) {
  routing.use('/articles', router);
}
