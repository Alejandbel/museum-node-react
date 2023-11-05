class UsersController {
  /** @type ControllerMethod */
  getSelf = async (req, res, next) => {
    throw new Error('not implemented');
    // eslint-disable-next-line no-unreachable
    try {
      console.log(req);
    } catch (err) {
      next(err);
    }
  };
}

export const usersController = new UsersController();
