import { Router } from 'express';
import { auth, permit } from '../middleware/auth.js';
import { createVehicle, listVehicles, getVehicle, updateVehicle, removeVehicle, updateLocation } from '../controllers/vehicleController.js';

const router = Router();

router.get('/', auth, listVehicles);
router.post('/', auth, permit('admin','manager'), createVehicle);
router.get('/:id', auth, getVehicle);
router.put('/:id', auth, permit('admin','manager'), updateVehicle);
router.delete('/:id', auth, permit('admin','manager'), removeVehicle);
router.put('/:id/location', auth, permit('admin','manager'), updateLocation);

export default router;
