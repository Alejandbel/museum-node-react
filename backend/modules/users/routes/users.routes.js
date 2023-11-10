import express from 'express';
import { usersController } from '../controllers/users.controller.js';
import { authorized } from '../../auth/middlewares/authorized.middleware.js';
import { USER_ROLE } from '../types/users.types.js';

const router = express.Router();

router.get('/me', authorized(), usersController.getSelf);
router.get('/', authorized([USER_ROLE.ADMIN]), usersController.getUserList);

/**
 * @param {import('express').IRouter} routing
 */
export function mountUsersRouter(routing) {
  routing.use('/users', router);
}
