import express from 'express';
import { applyValidation } from '../../../middlewares/validation.middleware.js';
import { signInWithGoogleSchema } from '../validation-schemas/google-auth.validation-schemas.js';
import { googleAuthController } from '../controllers/google-auth.controller.js';

const router = express.Router();

router.post('/sign-in', applyValidation(signInWithGoogleSchema), googleAuthController.signInWithGoogle);

/**
 * @param {import('express').IRouter} routing
 */
export function mountGoogleAuthRoutes(routing) {
  routing.use('/google', router);
}
