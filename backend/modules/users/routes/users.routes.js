import express from 'express';
import { usersController } from '../controllers/users.controller.js';

const router = express.Router();

router.post('/me', usersController.getSelf);

/**
 * @param {import('express').IRouter} routing
 */
export function mountUsersRouter(routing) {
  routing.use('/users', router);
}
