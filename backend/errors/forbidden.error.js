import { AppError } from './app.error.js';

export class ForbiddenError extends AppError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message, 403);
  }
}
