import React from 'react';
import ArticleList from './ArticleList';
import { useQuery } from '../../hooks/useQuery';
import { articlesService } from '../../services/api';
import NotFoundPage from '../not-found/NotFoundPage';
import Stack from '../../components/Stack';
import ArticleModal from './modals/ArticleModal';

function ArticlesPage() {
  const {
    isLoading, result, error, refetch,
  } = useQuery(() => articlesService.findArticles());

  if (error) {
    return <NotFoundPage />;
  }

  const onModalSubmit = async (article) => {
    await articlesService.createArticle(article);
    await refetch();
  };

  return !isLoading && (
  <Stack>
    <ArticleModal className="button button-green" onSubmit={onModalSubmit} buttonText="Create article" />
    <ArticleList articles={result.items} />
  </Stack>
  );
}

export default ArticlesPage;
