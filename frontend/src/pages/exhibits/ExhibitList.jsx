import React, { useEffect, useState } from 'react';
import Exhibit from './Exhibit';
import { exhibitsService } from '../../services/api/exhibitsService';

/**
 * @param {ExhibitListItem[]} exhibits
 * @param {Function} refetch
 */
function ExhibitList({ exhibits, refetch }) {
  const [exhibitsList, setExhibitsList] = useState(exhibits);

  useEffect(() => {
    setExhibitsList(exhibits);
  }, [exhibits]);

  const onDelete = async (id) => {
    await exhibitsService.deleteExhibitById(id);
    refetch();
  };

  const onUpdate = async (exhibit) => {
    await exhibitsService.updateExhibitById(exhibit._id, exhibit);
    refetch();
  };

  return (
    <div className="exhibit-list">
      {exhibitsList.map((exhibit) => (
        <Exhibit
          key={exhibit._id}
          onDelete={onDelete}
          onUpdate={onUpdate}
          exhibit={exhibit}
        />
      ))}
    </div>
  );
}

export default ExhibitList;
