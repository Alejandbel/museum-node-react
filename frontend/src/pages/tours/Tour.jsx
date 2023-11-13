import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {TourListItem} tour
 */
function Tour({ tour }) {
  return (
    <article className="block">
      <h2>{tour.title}</h2>
      <h4>Date {new Date(tour.date).toISOString()}</h4>
      <details>
        <summary>Exhibits</summary>
        <ul>
          {tour.exhibits.map((exhibit) => (
            <li key={exhibit._id}>
              <Link to={`/exhibits/${exhibit._id}`}>{exhibit.title}</Link>
            </li>
          ))}
        </ul>
      </details>
    </article>
  );
}

export default Tour;
