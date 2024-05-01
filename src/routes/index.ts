import { Router } from 'express';
import { baseRoute } from './baseRoute';
import { notFoundResponse } from '../utils';

const router: Router = Router();

router.get('/', baseRoute);
router.all('*', notFoundResponse);

export default router;
