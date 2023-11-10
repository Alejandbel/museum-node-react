import path from 'path';
import { FILE_STORAGE_URL, UPLOAD_DIRECTORY } from '../constants/file-storage.constants.js';

class FileStorageService {
  /**
   * @param {string} filename
   */
  getFilePath(filename) {
    return path.join(UPLOAD_DIRECTORY, filename);
  }

  /**
   * @param {string} filename
   */
  getAbsolutePath(filename) {
    return `${FILE_STORAGE_URL}/${filename}`;
  }
}

export const fileStorageService = new FileStorageService();
