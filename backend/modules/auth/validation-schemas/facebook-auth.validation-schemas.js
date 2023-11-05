import Joi from 'joi';

export const signInWithFacebookBodySchema = Joi.object({
  facebookAccessToken: Joi.string().required(),
});

export const signInWithFacebookSchema = {
  body: signInWithFacebookBodySchema,
};
