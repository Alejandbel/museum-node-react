import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/home/HomePage';
import NotFoundPage from '../../pages/notFound/NotFoundPage';
import Layout from '../Layout';
import ArticlesPage from '../../pages/articles/ArticlesPage';
import LoginPage from '../../pages/login/LoginPage';
import ArticleDetailsPage from '../../pages/articles/ArticleDetailsPage';
import FeedbackListPage from '../../pages/feedbacks/FeedbackListPage';
import ExhibitListPage from '../../pages/exhibits/ExhibitListPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articles">
          <Route index element={<ArticlesPage />} />
          <Route path=":articleId" element={<ArticleDetailsPage />} />
        </Route>
        <Route path="exhibits">
          <Route index element={<ExhibitListPage />} />
          <Route path=":exhibitId" element={null} />
        </Route>
        <Route path="feedbacks" element={<FeedbackListPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
