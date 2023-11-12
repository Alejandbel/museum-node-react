import { exhibitsService } from '../services/exhibits.service.js';
import * as url from 'url';

class ExhibitsController {
  /** @type ControllerMethod */
  createExhibit = async (req, res, next) => {
    try {
      const exhibit = req.body;
      const file = req.file;

      const createdExhibit = await exhibitsService.create({ ...exhibit, imagePath: file.filename });

      res.status(201).json(createdExhibit);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findExhibitById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const exhibit = await exhibitsService.findByIdWithEmployee(id);

      res.status(200).json(exhibit);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  updateExhibitById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const exhibitToUpdate = req.body;
      const file = req.file;
      if (file) {
        exhibitToUpdate.imagePath = file.filename;
      }

      const exhibit = await exhibitsService.updateById(id, exhibitToUpdate);

      res.status(200).json(exhibit);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  deleteExhibitById = async (req, res, next) => {
    try {
      const { id } = req.params;

      await exhibitsService.deleteById(id);

      res.status(204).send();
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findExhibits = async (req, res, next) => {
    try {
      const { search, sortField, sortDirection } = req.query;

      const exhibits = await exhibitsService.findWithEmployees({ search, sortField, sortDirection });

      res.status(200).json({ items: exhibits });
    } catch (err) {
      next(err);
    }
  };
}

export const exhibitsController = new ExhibitsController();
