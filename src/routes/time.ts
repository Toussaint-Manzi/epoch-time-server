import { time } from '../controller/time';
import { Router } from 'express';

const router = Router();

router.get('/', time);

export default router;
