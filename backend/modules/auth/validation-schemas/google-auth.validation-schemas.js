import Joi from 'joi';

export const signInWithGoogleBodySchema = Joi.object({
  googleAccessToken: Joi.string().required(),
});

export const signInWithGoogleSchema = {
  body: signInWithGoogleBodySchema,
};
