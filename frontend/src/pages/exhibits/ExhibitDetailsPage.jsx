import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { exhibitsService } from '../../services/api/exhibitsService';
import NotFoundPage from '../notFound/NotFoundPage';
import Stack from '../../components/Stack';

function ExhibitDetailsPage() {
  const { exhibitId } = useParams();
  const { isLoading, result: exhibit, error } = useQuery(
    () => exhibitsService.findExhibitById(exhibitId),
    { deps: [exhibitId] },
  );
  if (error) {
    return <NotFoundPage />;
  }

  return !isLoading && (
    <Stack>
      <article>
        <h2>{ exhibit.title }</h2>
        <p>Exhibit types of art: { exhibit.typesOfArt.join(', ') }</p>
        <p>Exhibit employee: { `${exhibit.employee.firstname} ${exhibit.employee.lastname}` }</p>
        <p>Receipt date: { exhibit.receiptDate }</p>
        <p>Created at: { exhibit.createdAt }</p>
        <p>Updated at: { exhibit.updatedAt }</p>
        <img src={exhibit.imagePath} alt="Exhibit" height="400" />
      </article>
    </Stack>
  );
}

export default ExhibitDetailsPage;
