import { usersService } from '../services/users.service.js';

class UsersController {
  /** @type ControllerMethod */
  getSelf = async (req, res, next) => {
    try {
      const userId = req.user.id;

      const user = await usersService.findById(userId);

      return res.status(200).json({
        id: user._id,
        role: user.role,
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    } catch (err) {
      next(err);
    }
  };
}

export const usersController = new UsersController();
