import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from '../../components/articles/ArticleList';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data } = await axios.get('http://localhost:3001/api/v1/articles');
      setArticles(data.items);
    };

    void fetchArticles();
  }, []);

  return <ArticleList articles={articles} />;
}

export default ArticlesPage;
