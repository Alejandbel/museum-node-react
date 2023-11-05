import { BaseRepository } from '../../../repositories/base.repository.js';
import { ArticleModel } from '../models/article.model.js';

class ArticlesRepository extends BaseRepository {
  constructor() {
    super(ArticleModel);
  }
}

export const articlesRepository = new ArticlesRepository();
