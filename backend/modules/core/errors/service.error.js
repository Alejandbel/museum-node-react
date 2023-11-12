import { AppError } from './app.error.js';

export class ServiceError extends AppError {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message, 400);
  }
}
