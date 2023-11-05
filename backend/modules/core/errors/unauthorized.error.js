import { AppError } from './app.error.js';

export class UnauthorizedError extends AppError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message, 401);
  }
}
