import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';
import Layout from '../Layout';
import ArticlesPage from '../../pages/Articles/ArticlesPage';
import LoginPage from '../../pages/Login/LoginPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
