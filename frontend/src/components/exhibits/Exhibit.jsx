import React from 'react';
import { Link } from 'react-router-dom';
import PrivateOrEmpty from '../navigation/PrivateOrEmpty';
import { USER_ROLE } from '../../types/users';

/**
 * @param {ExhibitListItem} exhibit
 * @constructor
 */
function Exhibit({ exhibit }) {
  return (
    <article>
      <h2><Link to={`/exhibits/${exhibit._id}`}>{exhibit.title}</Link></h2>
      {exhibit.imagePath && <img src={exhibit.imagePath} alt="Exhibit" />}
      <p>Types of art: {exhibit.typesOfArt.join(', ')}</p>
      <PrivateOrEmpty allowedRoles={[USER_ROLE.ADMIN]}>
        <a className="delete  button button-red" href="/ ">Delete</a> {/* TODO */}
      </PrivateOrEmpty>

    </article>
  );
}

export default Exhibit;
