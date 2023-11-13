import { toursService } from '../services/tours.service.js';

class ToursController {
  /** @type ControllerMethod */
  createTour = async (req, res, next) => {
    try {
      const tour = req.body;

      const createdTour = await toursService.create(tour);

      res.status(201).json(createdTour);
    } catch (err) {
      next(err);
    }
  };

  /** @type ControllerMethod */
  findTours = async (req, res, next) => {
    try {
      const { search, sortField, sortDirection } = req.query;

      const tours = await toursService.findWithExhibits({ search, sortField, sortDirection });

      res.status(200).json({ items: tours });
    } catch (err) {
      next(err);
    }
  };
}

export const toursController = new ToursController();
