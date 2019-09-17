import express from 'express';
import createSubject from '@controllers/subjects.controller';
import trim from '@middlewares/trim.middleware';

const router = express.Router();

router.post('/', trim, createSubject);

export default router;
