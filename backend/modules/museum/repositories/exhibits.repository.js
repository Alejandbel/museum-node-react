import { BaseRepository } from '../../core/index.js';
import { ExhibitModel } from '../models/exhibit.model.js';

class ExhibitsRepository extends BaseRepository {
  constructor() {
    super(ExhibitModel);
  }
}

export const exhibitsRepository = new ExhibitsRepository();
