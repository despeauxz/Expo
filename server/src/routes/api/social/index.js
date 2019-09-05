import express from 'express';
import facebook from './facebook.route';
import google from './google.route';
import twitter from './twitter.route';

const router = express.Router();

router.use('/', facebook);
router.use('/', google);
router.use('/', twitter);

export default router;
