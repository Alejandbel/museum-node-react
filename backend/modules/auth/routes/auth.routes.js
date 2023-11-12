import express from 'express';
import { mountFacebookAuthRoutes } from './facebook-auth.routes.js';
import { mountGoogleAuthRoutes } from './google-auth.routes.js';
import { authController } from '../controllers/auth.controller.js';
import { applyValidation } from '../../core/index.js';
import { signInSchema, signUpSchema } from '../validation-schemas/auth.validation-schemas.js';

const router = express.Router();

router.post('/logout', authController.logout);
router.post('/sign-up', applyValidation(signUpSchema), authController.signUp);
router.post('/sign-in', applyValidation(signInSchema), authController.signIn);

mountFacebookAuthRoutes(router);
mountGoogleAuthRoutes(router);

/**
 * @param {import('express').IRouter} routing
 */
export function mountAuthRoutes(routing) {
  routing.use('/auth', router);
}
