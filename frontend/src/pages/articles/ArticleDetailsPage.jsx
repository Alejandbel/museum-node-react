import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import NotFoundPage from '../not-found/NotFoundPage';
import { useQuery } from '../../hooks/useQuery';
import { articlesService } from '../../services/api';

function ArticleDetailsPage() {
  const { articleId } = useParams();

  const { isLoading, result, error } = useQuery(() => articlesService.findArticleById(articleId));

  if (error) {
    return <NotFoundPage />;
  }

  return !isLoading && <ArticleDetails article={result} />;
}

export default ArticleDetailsPage;
