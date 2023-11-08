import express from 'express';
import { usersController } from '../controllers/users.controller.js';
import { authorized } from '../../auth/middlewares/authorized.middleware.js';

const router = express.Router();

router.get('/me', authorized(), usersController.getSelf);

/**
 * @param {import('express').IRouter} routing
 */
export function mountUsersRouter(routing) {
  routing.use('/users', router);
}
