import { config } from 'dotenv';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { socialAuth } from '@controllers/social.controller';

config();

const {
  FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET,
  FACEBOOK_CALLBACK_URL,
  GOOGLE_APP_ID,
  GOOGLE_APP_SECRET,
  GOOGLE_CALLBACK_URL,
  TWITTER_APP_KEY,
  TWITTER_APP_SECRET,
  TWITTER_CALLBACK_URL
} = process.env;

const facebookConfig = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: FACEBOOK_CALLBACK_URL,
  profileFields: ['id', 'emails', 'displayName', 'photos'],
};

const googleConfig = {
  clientID: GOOGLE_APP_ID,
  clientSecret: GOOGLE_APP_SECRET,
  callbackURL: GOOGLE_CALLBACK_URL,
};

const twitterConfig = {
  consumerKey: TWITTER_APP_KEY,
  consumerSecret: TWITTER_APP_SECRET,
  callbackURL: TWITTER_CALLBACK_URL,
  includeEmail: true
};

const facebookStrategy = new FacebookStrategy(
  facebookConfig,
  socialAuth
);

const googleStrategy = new GoogleStrategy(
  googleConfig,
  socialAuth
);

const twitterStrategy = new TwitterStrategy(
  twitterConfig,
  socialAuth,
);

export { facebookStrategy, googleStrategy, twitterStrategy };
