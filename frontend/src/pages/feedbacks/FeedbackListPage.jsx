import React, { useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import { feedbacksService } from '../../services/api';
import NotFoundPage from '../notFound/NotFoundPage';
import FeedbackList from '../../components/feedbacks/FeedbackList';
import CreateFeedbackModal from './modals/CreateFeedbackModal';

function FeedbackListPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    isLoading, result, error, refetch,
  } = useQuery(() => feedbacksService.findFeedbacks());

  if (error) {
    return <NotFoundPage />;
  }

  const onModalSubmit = async (feedback) => {
    await feedbacksService.createFeedback(feedback);
    setModalOpen(false);
    refetch();
  };

  return !isLoading && (
    <>
      <button onClick={() => setModalOpen(true)}>Leave feedback</button>
      <CreateFeedbackModal hasCloseBtn isOpen={isModalOpen} onSubmit={onModalSubmit} />
      <FeedbackList feedbacks={result.items} />
    </>
  );
}

export default FeedbackListPage;
