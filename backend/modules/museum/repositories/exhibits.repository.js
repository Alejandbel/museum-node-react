import { BaseRepository } from '../../core/index.js';
import { ExhibitModel } from '../models/exhibit.model.js';

class ExhibitsRepository extends BaseRepository {
  constructor() {
    super(ExhibitModel);
  }

  /**
   * @param {string} [search]
   * @param {SortDirection} [sortDirection]
   * @param {string} [sortField]
   * @return {Promise<(Omit<Feedback, 'employee'> & {employee: User})[]>}
   */
  async findWithEmployees({ search, sortDirection, sortField }) {
    const query = this.model.find(search ? { title: { $regex: search, $options: 'i' } } : {});

    if (sortField && sortDirection) {
      query.sort({ [sortField]: sortDirection });
    }

    return query.populate('employee').lean();
  }

  async findByIdWithEmployee(id) {
    return this.model.findById(id).populate('employee').lean();
  }
}

export const exhibitsRepository = new ExhibitsRepository();
