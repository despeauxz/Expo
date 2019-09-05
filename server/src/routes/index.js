import express from 'express';
import apiRoutes from './api';

const router = express.Router();

router.use('/v1', apiRoutes);

router.get('/v1', (req, res) => res.json({
  status: 200,
  message: 'Welcome to the Expo API'
}));

export default router;
