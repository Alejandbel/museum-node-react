import React from 'react';

/**
 * @param {Article} article
 * @returns {JSX.Element}
 */
function ArticleCard({ article }) {
  return (
    <article>
      <div>
        <h3>{article.title}</h3>
        <p>
          <a href="/1">{article.description}</a>
        </p>
      </div>
      {article.imagePath && <img src={article.imagePath} alt="article" />}
    </article>
  );
}

export default ArticleCard;
