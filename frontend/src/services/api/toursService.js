import axios from '../../utils/axios';

class ToursService {
  /**
   * @param {string} [search]
   * @param {string} [sortDirection]
   * @param {string} [sortField]
   * @return {Promise<{items: TourListItem[]}>}
   */
  async findTours({ search, sortDirection, sortField } = {}) {
    const { data } = await axios.get('/api/v1/tours', {
      params: {
        ...(search ? { search } : {}),
        ...(sortDirection ? { sortDirection } : {}),
        ...(sortField ? { sortField } : {}),
      },
    });
    return data;
  }

  /**
   * @param {Omit<Tour, '_id' | 'createdAt' |'updatedAt'>}tour
   * @return {Promise<{items: TourListItem[]}>}
   */
  async createTour(tour) {
    const { data } = await axios.post('/api/v1/tours', tour);
    return data;
  }
}

export const toursService = new ToursService();
