import { Router } from 'express';
import { auth } from '../middleware/auth.js';
import { summary } from '../controllers/reportController.js';

const router = Router();

router.get('/summary', auth, summary);

export default router;
