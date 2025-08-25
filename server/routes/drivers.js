import { Router } from 'express';
import { auth, permit } from '../middleware/auth.js';
import { createDriver, listDrivers, updateDriver, removeDriver } from '../controllers/driverController.js';

const router = Router();

router.get('/', auth, listDrivers);
router.post('/', auth, permit('admin','manager'), createDriver);
router.put('/:id', auth, permit('admin','manager'), updateDriver);
router.delete('/:id', auth, permit('admin','manager'), removeDriver);

export default router;
