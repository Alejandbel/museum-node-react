import React from 'react';
import { Link } from 'react-router-dom';
import PrivateOrEmpty from '../../components/navigation/PrivateOrEmpty';
import { USER_ROLE } from '../../types/users';
import ExhibitModal from './modals/ExhibitModal';

/**
 * @param {ExhibitListItem} exhibit
 * @param onDelete
 * @param onUpdate
 */
function Exhibit({ exhibit, onDelete, onUpdate }) {
  const onExhibitDelete = (e) => {
    e.preventDefault();
    onDelete(exhibit._id);
  };

  return (
    <article className="exhibit">
      <h2 className="title"><Link to={`/exhibits/${exhibit._id}`}>{exhibit.title}</Link></h2>
      {exhibit.imagePath && <img src={exhibit.imagePath} alt="Exhibit" />}

      <PrivateOrEmpty allowedRoles={[USER_ROLE.ADMIN]}>
        <ExhibitModal className="edit button button-green" onSubmit={onUpdate} baseExhibit={exhibit} buttonText="Update" />
        <button className="delete button button-red" onClick={onExhibitDelete}>Delete</button>
      </PrivateOrEmpty>
    </article>
  );
}

export default Exhibit;
