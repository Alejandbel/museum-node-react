import { AppError } from './app.error.js';

export class EntityNotFoundError extends AppError {
  /**
   * @param {string} entity
   */
  constructor(entity) {
    super(`${entity} not found`, 404);
  }
}
