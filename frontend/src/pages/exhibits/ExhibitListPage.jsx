import React, { useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import NotFoundPage from '../notFound/NotFoundPage';
import ExhibitModal from './modals/ExhibitModal';
import { exhibitsService } from '../../services/api/exhibitsService';
import ExhibitList from './ExhibitList';
import PrivateOrEmpty from '../../components/navigation/PrivateOrEmpty';
import { USER_ROLE } from '../../types/users';
import { BOOL_TO_SORT_DIRECTION } from '../../types/sort';

function ExhibitListPage() {
  const [sortParams, setSortParams] = useState(
    { asc: true, sortField: undefined },
  );
  const [search, setSearch] = useState(undefined);

  const {
    isLoading,
    result: exhibits,
    error,
    refetch: refetchExhibits,
  } = useQuery(() => exhibitsService.findExhibits(
    {
      search,
      sortDirection: BOOL_TO_SORT_DIRECTION[sortParams.asc],
      sortField: sortParams.sortField,
    },
  ), { deps: [search, sortParams.asc, sortParams.sortField] });

  if (error) {
    return <NotFoundPage />;
  }

  const onModalSubmit = async (exhibit) => {
    await exhibitsService.createExhibit(exhibit);
    refetchExhibits();
  };

  const onSearchInput = (e) => {
    const q = e.target.value;
    setSearch(q);
  };

  const onSortClick = (e) => {
    const sortField = e.target?.dataset?.field;
    let asc = true;

    if (sortParams.sortField === sortField) {
      asc = !sortParams.asc;
    }

    setSortParams({ asc, sortField });
  };

  return !isLoading && (
    <>
      <input type="text" onInput={onSearchInput} />
      <button data-field="title" onClick={onSortClick}>Title</button>
      <button data-field="receiptDate" onClick={onSortClick}>Receipt date</button>
      <PrivateOrEmpty allowedRoles={[USER_ROLE.ADMIN]}>
        <ExhibitModal onSubmit={onModalSubmit} buttonText="Add exhibit" />
      </PrivateOrEmpty>
      <ExhibitList refetch={refetchExhibits} exhibits={exhibits.items} />
    </>
  );
}

export default ExhibitListPage;
