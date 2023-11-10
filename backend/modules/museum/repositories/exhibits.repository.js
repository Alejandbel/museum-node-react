import { BaseRepository } from '../../core/index.js';
import { ExhibitModel } from '../models/exhibit.model.js';

class ExhibitsRepository extends BaseRepository {
  constructor() {
    super(ExhibitModel);
  }

  /**
   * @param {FilterQuery<*>} [filter]
   * @return {Promise<(Omit<Feedback, 'employee'> & {employee: User})[]>}
   */
  async findWithEmployees(filter) {
    return this.model.find(filter).populate('employee').lean();
  }
}

export const exhibitsRepository = new ExhibitsRepository();
