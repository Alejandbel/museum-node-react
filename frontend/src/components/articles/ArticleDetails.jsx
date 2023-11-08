import React from 'react';

/**
 * @param {Article} article
 * @return {JSX.Element}
 */
function ArticleDetails({ article }) {
  return (
    <article>
      <h2>{article.title}</h2>
      <h4>{article.description}</h4>
      {article.imagePath && <img src={article.imagePath} alt="article" />}
      <p>{article.content}</p>
    </article>
  );
}

export default ArticleDetails;
