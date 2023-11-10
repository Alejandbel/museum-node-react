import React from 'react';
import ArticleList from '../../components/articles/ArticleList';
import { useQuery } from '../../hooks/useQuery';
import { articlesService } from '../../services/api';
import NotFoundPage from '../notFound/NotFoundPage';

function ArticlesPage() {
  const { isLoading, result, error } = useQuery(() => articlesService.findArticles());

  if (error) {
    return <NotFoundPage />;
  }

  return !isLoading && <ArticleList articles={result.items} />;
}

export default ArticlesPage;
