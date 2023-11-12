import React from 'react';
import ArticleCard from './ArticleCard';

/**
 * @param {Article[]} articles
 */
function ArticleList({ articles }) {
  return (
    <>
      {
        articles.map(
          (article) => <ArticleCard key={article._id} article={article} />,
        )
      }
    </>
  );
}

export default ArticleList;
