import axios from '../utils/axios';

class ArticlesService {
  /**
   * @param {string} id
   * @return {Promise<Article>}
   */
  async findArticleById(id) {
    const { data } = await axios.get(`/api/v1/articles/${id}`);
    return data;
  }

  /**
   * @return {Promise<{items: Article[]}>}
   */
  async findArticles() {
    const { data } = await axios.get('/api/v1/articles');
    return data;
  }
}

export const articlesService = new ArticlesService();
