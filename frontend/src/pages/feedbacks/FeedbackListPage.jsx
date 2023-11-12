import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { feedbacksService } from '../../services/api';
import NotFoundPage from '../notFound/NotFoundPage';
import FeedbackList from './FeedbackList';
import CreateFeedbackModal from './modals/CreateFeedbackModal';
import Stack from '../../components/Stack';

function FeedbackListPage() {
  const {
    isLoading, result, error, refetch,
  } = useQuery(() => feedbacksService.findFeedbacks());

  if (error) {
    return <NotFoundPage />;
  }

  const onModalSubmit = async (feedback) => {
    await feedbacksService.createFeedback(feedback);
    refetch();
  };

  return !isLoading && (
    <Stack>
      <CreateFeedbackModal onSubmit={onModalSubmit} />
      <FeedbackList feedbacks={result.items} />
    </Stack>
  );
}

export default FeedbackListPage;
