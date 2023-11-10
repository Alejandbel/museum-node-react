import axios from '../../utils/axios';

class ExhibitsService {
  /**
   * @return {Promise<{items: ExhibitListItem[]}>}
   */
  async findExhibits() {
    const { data } = await axios.get('/api/v1/exhibits');
    return data;
  }

  /**
   * @param {Pick<Exhibit,'title' | 'typesOfArt' | 'receiptDate'| 'imagePath' | 'employee'>} exhibit
   * @returns {Promise<Exhibit>}
   */
  async createExhibit(exhibit) {
    const { data } = await axios.post('/api/v1/exhibits', exhibit);
    return data;
  }
}

export const exhibitsService = new ExhibitsService();
