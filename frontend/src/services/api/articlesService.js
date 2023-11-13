import axios from '../../utils/axios';

class ArticlesService {
  /**
   * @param {Omit<Article, '_id'|'createdAt'|'updateAt'>&{file: File}} article
   * @return {Promise<Article>}
   */
  async createArticle(article) {
    const formData = this.prepareArticleBody(article);

    const { data } = await axios.post('/api/v1/articles', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }

  /**
   * @param {Omit<Article, '_id'|'createdAt'|'updateAt'>&{file: File}} article
   */
  prepareArticleBody(article) {
    const formData = new FormData();
    formData.set('title', article.title);
    formData.set('description', article.description);
    formData.set('content', article.content);
    formData.set('file', article.file);

    return formData;
  }

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
