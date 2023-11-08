import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to={`/articles/${article._id}`}>{article.description}</Link>
        </p>
      </div>
      {article.imagePath && <img src={article.imagePath} alt="article" />}
    </article>
  );
}

export default ArticleCard;
