import React from 'react';
import Tour from './Tour';
import Stack from '../../components/Stack';

/**
 * @param {TourListItem[]} tours
 */
function TourList({ tours }) {
  return (
    <Stack>
      {tours.map((tour) => (
        <Tour
          key={tour._id}
          tour={tour}
        />
      ))}
    </Stack>
  );
}

export default TourList;
