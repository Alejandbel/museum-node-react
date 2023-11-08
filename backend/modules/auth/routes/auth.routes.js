import express from 'express';
import { mountFacebookAuthRoutes } from './facebook-auth.routes.js';
import { mountGoogleAuthRoutes } from './google-auth.routes.js';
import { authController } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/logout', authController.logout);

mountFacebookAuthRoutes(router);
mountGoogleAuthRoutes(router);

/**
 * @param {import('express').IRouter} routing
 */
export function mountAuthRoutes(routing) {
  routing.use('/auth', router);
}
