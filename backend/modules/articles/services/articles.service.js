import { EntityNotFoundError } from '../../../errors/entity-not-found.error.js';
import { articlesRepository } from '../repositories/articles.repository.js';

class ArticlesService {
  /**
   * @param {Omit<Article, '_id' | 'createdAt' | 'updatedAt'>}article
   * @returns {Promise<Article>}
   */
  async create(article) {
    return articlesRepository.create(article);
  }

  /**
   * @param {string} id
   * @returns {Promise<Article>}
   */
  async findById(id) {
    const article = await articlesRepository.findById(id);

    if (!article) {
      throw new EntityNotFoundError('Article');
    }

    return article;
  }

  /**
   * @returns {Promise<Article[]>}
   */
  async find() {
    return articlesRepository.find();
  }
}

export const articlesService = new ArticlesService();
