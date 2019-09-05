import express from 'express';
import passport from 'passport';
import { newUserCheck } from '@controllers/social.controller';

const router = express.Router();

router.get(
  '/auth/twitter',
  passport.authenticate('twitter'),
);

router.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', { session: false }),
  newUserCheck,

);
export default router;
