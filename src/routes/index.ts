import { Router } from 'express';
import { baseRoute } from './baseRoute';
import { notFoundResponse } from '../utils';

import authRouter from './auth';
import contactRouter from './contact';
const router: Router = Router();

router.get('/', baseRoute);
router.use('/api/v1/auth', authRouter);
router.use('/api/v1/contacts', contactRouter);
router.all('*', notFoundResponse);

export default router;
