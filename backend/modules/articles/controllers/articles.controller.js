import { articlesService } from '../services/articles.service.js';

class ArticlesController {
  /** @type ControllerMethod */
  createArticle = async (req, res, next) => {
    try {
      const article = req.body;
      const file = req.file;

      const createdArticle = await articlesService.create({ ...article, imagePath: file.filename });

      res.status(201).json(createdArticle);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findArticleById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const article = await articlesService.findById(id);

      res.status(200).json(article);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findArticles = async (req, res, next) => {
    try {
      const articles = await articlesService.find();

      res.status(200).json({ items: articles });
    } catch (err) {
      next(err);
    }
  };
}

export const articlesController = new ArticlesController();
