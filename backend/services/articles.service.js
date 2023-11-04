import { Article } from '../models/article.model.js';
import { EntityNotFoundError } from '../errors/entity-not-found.error.js';

class ArticlesService {
  /**
   * @param {Omit<Article, '_id' | 'createdAt' | 'updatedAt'>}article
   * @returns {Promise<Article>}
   */
  async create(article) {
    const createdArticle = await Article.create(article);
    return createdArticle.toObject();
  }

  /**
   * @param {string} id
   * @returns {Promise<Article>}
   */
  async findById(id) {
    const article = await Article.findById(id).lean();

    if (!article) {
      throw new EntityNotFoundError('Article');
    }

    return article;
  }

  /**
   * @returns {Promise<Article[]>}
   */
  find() {
    return Article.find().lean();
  }
}

export const articlesService = new ArticlesService();
