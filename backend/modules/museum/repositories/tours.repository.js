import { BaseRepository } from '../../core/index.js';
import { TourModel } from '../models/tour.model.js';

class ToursRepository extends BaseRepository {
  constructor() {
    super(TourModel);
  }

  async findWithExhibits({ search, sortDirection, sortField }) {
    const query = this.model.find(search ? { title: { $regex: search, $options: 'i' } } : {});

    if (sortField && sortDirection) {
      query.sort({ [sortField]: sortDirection });
    }

    return query.populate('exhibits').lean();
  }
}

export const toursRepository = new ToursRepository();
