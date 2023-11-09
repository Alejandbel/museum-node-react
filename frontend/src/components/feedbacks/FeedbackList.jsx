import React from 'react';
import Feedback from './Feedback';

/**
 * @param {FeedbackListItem[]} feedbacks
 */
function FeedbackList({ feedbacks }) {
  return feedbacks.map((feedback) => <Feedback key={feedback._id} feedback={feedback} />);
}

export default FeedbackList;
