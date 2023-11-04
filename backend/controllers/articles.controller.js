import { Article } from '../models/article.model.js';
import { articlesService } from '../services/articles.service.js';

class ArticlesController {
  /** @type ControllerMethod */
  createArticle = async (req, res, next) => {
    try {
      const article = req.body;

      const createdArticle = await articlesService.create(article);

      console.log(createdArticle);
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

  /**
   * @returns {Article[]}
   */
  find() {
    return Article.find().lean();
  }
}

export const articlesController = new ArticlesController();
