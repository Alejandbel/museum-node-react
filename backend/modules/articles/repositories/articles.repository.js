import { BaseRepository } from '../../core/index.js';
import { ArticleModel } from '../models/article.model.js';

class ArticlesRepository extends BaseRepository {
  constructor() {
    super(ArticleModel);
  }
}

export const articlesRepository = new ArticlesRepository();
