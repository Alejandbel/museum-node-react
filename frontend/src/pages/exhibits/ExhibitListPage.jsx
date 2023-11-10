import React, { useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import { usersService } from '../../services/api';
import NotFoundPage from '../notFound/NotFoundPage';
import CreateExhibitModal from './modals/CreateExhibitModal';
import { exhibitsService } from '../../services/api/exhibitsService';
import ExhibitList from '../../components/exhibits/ExhibitList';

function ExhibitListPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    isLoading: isExhibitsLoading,
    result: exhibits,
    error: exhibitsError,
    refetch: refetchExhibits,
  } = useQuery(() => exhibitsService.findExhibits());

  const {
    isLoading: isUsersLoading,
    result: users,
    error: usersError,
  } = useQuery(() => usersService.getUserList());

  if (exhibitsError || usersError) {
    return <NotFoundPage />;
  }

  const onModalSubmit = async (exhibit) => {
    setModalOpen(false);
    await exhibitsService.createExhibit(exhibit);
    refetchExhibits();
  };

  return (!isExhibitsLoading && !isUsersLoading) && (
    <>
      <button onClick={() => setModalOpen(true)}>Add exhibit</button>
      <CreateExhibitModal
        hasCloseBtn
        isOpen={isModalOpen}
        onSubmit={onModalSubmit}
        userList={users.items}
      />
      <ExhibitList exhibits={exhibits.items} />
    </>
  );
}

export default ExhibitListPage;
