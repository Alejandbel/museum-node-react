import { BaseRepository } from '../../core/index.js';
import { UserModel } from '../models/user.model.js';

class UsersRepository extends BaseRepository {
  constructor() {
    super(UserModel);
  }
}

export const usersRepository = new UsersRepository();
