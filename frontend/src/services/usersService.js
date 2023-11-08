import axios from '../utils/axios';

class UsersService {
  async getCurrentUser() {
    const { data } = await axios.get('/api/v1/users/me');
    return data;
  }
}

export const usersService = new UsersService();
