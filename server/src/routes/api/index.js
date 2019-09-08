import express from 'express';
import socialRoutes from './social';

const router = express.Router();

router.use('/', socialRoutes);

export default router;
