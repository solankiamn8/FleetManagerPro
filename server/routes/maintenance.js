import { Router } from 'express';
import { auth, permit } from '../middleware/auth.js';
import { scheduleMaintenance, listMaintenance } from '../controllers/maintenanceController.js';

const router = Router();

router.get('/', auth, listMaintenance);
router.post('/', auth, permit('admin','manager'), scheduleMaintenance);

export default router;
