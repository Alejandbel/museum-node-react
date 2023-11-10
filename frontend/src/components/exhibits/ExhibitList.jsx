import React from 'react';
import Exhibit from './Exhibit';

/**
 * @param {ExhibitListItem[]} exhibits
 */
function ExhibitList({ exhibits }) {
  return exhibits.map((exhibit) => <Exhibit key={exhibit._id} exhibit={exhibit} />);
}

export default ExhibitList;
