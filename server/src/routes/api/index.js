import express from 'express';
import socialRoutes from './social';
import subjectRoutes from './subjects.route';

const router = express.Router();

router.use('/', socialRoutes);
router.use('/subjects', subjectRoutes);

export default router;
