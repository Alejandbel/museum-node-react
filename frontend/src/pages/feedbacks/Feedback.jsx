import React from 'react';

/**
 * @param {FeedbackListItem} feedback
 * @constructor
 */
function Feedback({ feedback }) {
  return (
    <article className="block">
      <h2>
        {feedback.title} {feedback.rating} / 5
      </h2>
      <h3>
        {feedback.author.firstname} {feedback.author.lastname} - <time>{feedback.createdAt}</time>
      </h3>
      <p>{feedback.content}</p>
    </article>
  );
}

export default Feedback;
