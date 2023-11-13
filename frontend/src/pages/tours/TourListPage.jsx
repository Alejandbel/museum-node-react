import React, { useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import NotFoundPage from '../not-found/NotFoundPage';
import TourModal from './modals/TourModal';
import TourList from './TourList';
import PrivateOrEmpty from '../../components/navigation/PrivateOrEmpty';
import { USER_ROLE } from '../../types/users';
import { BOOL_TO_SORT_DIRECTION } from '../../types/sort';
import { toursService } from '../../services/api';
import Stack from '../../components/Stack';

function TourListPage() {
  const [sortParams, setSortParams] = useState(
    { asc: true, sortField: undefined },
  );
  const [search, setSearch] = useState(undefined);

  const {
    isLoading,
    result: tours,
    error,
    refetch,
  } = useQuery(() => toursService.findTours(
    {
      search,
      sortDirection: BOOL_TO_SORT_DIRECTION[sortParams.asc],
      sortField: sortParams.sortField,
    },
  ), { deps: [search, sortParams.asc, sortParams.sortField] });

  if (error) {
    return <NotFoundPage />;
  }

  const onModalSubmit = async (tour) => {
    await toursService.createTour(tour);
    await refetch();
  };

  const onSortClick = (e) => {
    const sortField = e.target?.dataset?.field;
    let asc = true;

    if (sortParams.sortField === sortField) {
      asc = !sortParams.asc;
    }

    setSortParams({ asc, sortField });
  };

  const onSearchInput = (e) => {
    const q = e.target.value;
    setSearch(q);
  };

  return !isLoading && (
    <Stack>
      <div>
        <input className="input" type="text" placeholder="Search for tours" onInput={onSearchInput} />
      </div>
      <div>
        Order by:
        <button className="button button-blue" data-field="title" onClick={onSortClick}>Title</button>
      </div>
      <PrivateOrEmpty allowedRoles={[USER_ROLE.ADMIN]}>
        <TourModal className="button button-green" onSubmit={onModalSubmit} buttonText="Add tour" />
      </PrivateOrEmpty>
      <TourList tours={tours.items} />
    </Stack>
  );
}

export default TourListPage;
