import { Router } from 'express';
import { auth, permit } from '../middleware/auth.js';
import { listAlerts, createPanicAlert, resolveAlert } from '../controllers/alertController.js';

const router = Router();

router.get('/', auth, listAlerts);
router.post('/panic', auth, permit('driver','manager','admin'), createPanicAlert);
router.put('/:id/resolve', auth, permit('manager','admin'), resolveAlert);

export default router;
