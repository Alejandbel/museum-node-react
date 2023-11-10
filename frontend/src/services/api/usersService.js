import axios from '../../utils/axios';

class UsersService {
  /**
   * @returns {Promise<User>}
   */
  async getCurrentUser() {
    const { data } = await axios.get('/api/v1/users/me');
    return data;
  }

  /**
   * @returns {Promise<{items: UserListItem[]}>}
   */
  async getUserList() {
    const { data } = await axios.get('/api/v1/users');
    return data;
  }
}

export const usersService = new UsersService();
