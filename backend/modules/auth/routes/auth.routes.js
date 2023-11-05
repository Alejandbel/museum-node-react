import express from 'express';
import { mountFacebookAuthRoutes } from './facebook-auth.routes.js';
import { mountGoogleAuthRoutes } from './google-auth.routes.js';

const router = express.Router();

mountFacebookAuthRoutes(router);
mountGoogleAuthRoutes(router);

/**
 * @param {import('express').IRouter} routing
 */
export function mountAuthRoutes(routing) {
  routing.use('/auth', router);
}
