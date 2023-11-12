import axios from '../../utils/axios';

class ExhibitsService {
  /**
   * @param {string} [search]
   * @param {string} [sortDirection]
   * @param {string} [sortField]
   * @return {Promise<{items: ExhibitListItem[]}>}
   */
  async findExhibits({ search, sortDirection, sortField } = {}) {
    const { data } = await axios.get('/api/v1/exhibits', {
      params: {
        ...(search ? { search } : {}),
        ...(sortDirection ? { sortDirection } : {}),
        ...(sortField ? { sortField } : {}),
      },
    });
    return data;
  }

  /**
   * @param {Pick<Exhibit,'title'|'typesOfArt'|'receiptDate'|'employee'> & {file: File}} exhibit
   * @returns {Promise<Exhibit>}
   */
  async createExhibit(exhibit) {
    const formData = this.prepareExhibitBody(exhibit);

    const { data } = await axios.post('/api/v1/exhibits', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }

  /**
   * @param {string} id
   * @param {Pick<Exhibit,'title'|'typesOfArt'|'receiptDate'|'employee'> & {file: File}} exhibit
   * @returns {Promise<Exhibit>}
   */
  async updateExhibitById(id, exhibit) {
    const formData = this.prepareExhibitBody(exhibit);

    const { data } = await axios.put(`/api/v1/exhibits/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }

  /**
   * @param {string} id
   * @returns {Promise<Exhibit>}
   */
  async findExhibitById(id) {
    const { data } = await axios.get(`/api/v1/exhibits/${id}`);
    return data;
  }

  prepareExhibitBody(exhibit) {
    const formData = new FormData();
    formData.set('title', exhibit.title);
    formData.set('receiptDate', exhibit.receiptDate);
    formData.set('employee', exhibit.employee);
    formData.set('file', exhibit.file);
    exhibit.typesOfArt.forEach((art) => formData.set('typesOfArt[]', art));
    return formData;
  }

  /**
   * @param {string} id
   */
  async deleteExhibitById(id) {
    await axios.delete(`/api/v1/exhibits/${id}`);
  }
}

export const exhibitsService = new ExhibitsService();
