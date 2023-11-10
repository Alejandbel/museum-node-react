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
   * @param {Pick<Exhibit,'title'|'typesOfArt'|'receiptDate'|'employee'> & {file: File}} exhibit
   * @returns {Promise<Exhibit>}
   */
  async createExhibit(exhibit) {
    const formData = new FormData();
    formData.set('title', exhibit.title);
    formData.set('receiptDate', exhibit.receiptDate);
    formData.set('employee', exhibit.employee);
    formData.set('file', exhibit.file);
    exhibit.typesOfArt.forEach((art) => formData.set('typesOfArt[]', art));

    const { data } = await axios.post('/api/v1/exhibits', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }
}

export const exhibitsService = new ExhibitsService();
