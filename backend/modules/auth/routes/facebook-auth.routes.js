import express from 'express';
import { facebookAuthController } from '../controllers/facebook-auth.controller.js';
import { applyValidation } from '../../core/index.js';
import { signInWithFacebookSchema } from '../validation-schemas/facebook-auth.validation-schemas.js';

const router = express.Router();

router.post('/sign-in', applyValidation(signInWithFacebookSchema), facebookAuthController.signInWithFacebook);

/**
 * @param {import('express').IRouter} routing
 */
export function mountFacebookAuthRoutes(routing) {
  routing.use('/facebook', router);
}
