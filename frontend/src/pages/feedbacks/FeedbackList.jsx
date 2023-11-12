import React from 'react';
import Feedback from './Feedback';
import Stack from '../../components/Stack';

/**
 * @param {FeedbackListItem[]} feedbacks
 */
function FeedbackList({ feedbacks }) {
  return (
    <Stack>
      {
        feedbacks.map((feedback) => <Feedback key={feedback._id} feedback={feedback} />)
      }
    </Stack>
  );
}

export default FeedbackList;
