import { exhibitsService } from '../services/exhibits.service.js';

class ExhibitsController {
  /** @type ControllerMethod */
  createExhibit = async (req, res, next) => {
    try {
      const exhibit = req.body;

      const createdExhibit = await exhibitsService.create(exhibit);

      res.status(201).json(createdExhibit);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findExhibitById = async (req, res, next) => {
    try {
      const { id } = req.params;

      const exhibit = await exhibitsService.findById(id);

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
      const exhibits = await exhibitsService.find();

      res.status(200).json({ items: exhibits });
    } catch (err) {
      next(err);
    }
  };
}

export const exhibitsController = new ExhibitsController();
