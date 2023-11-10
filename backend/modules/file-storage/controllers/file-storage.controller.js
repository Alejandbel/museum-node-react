import { fileStorageService } from '../services/file-storage.service.js';

class FileStorageController {
  /** @type ControllerMethod */
  getFile = async (req, res, next) => {
    try {
      const { filename } = req.params;

      const filePath = fileStorageService.getFilePath(filename);

      return res.sendFile(filePath);
    } catch (err) {
      next(err);
    }
  };
}

export const fileStorageController = new FileStorageController();
