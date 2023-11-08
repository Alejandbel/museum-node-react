import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleDetails from '../../components/articles/ArticleDetails';
import NotFoundPage from '../notFound/NotFoundPage';
import { useQuery } from '../../hooks/useQuery';
import { articlesService } from '../../services/articlesService';

function ArticleDetailsPage() {
  const { articleId } = useParams();

  const { isLoading, result, error } = useQuery(() => articlesService.findArticleById(articleId));

  if (error) {
    return <NotFoundPage />;
  }

  return !isLoading && <ArticleDetails article={result} />;
}

export default ArticleDetailsPage;
