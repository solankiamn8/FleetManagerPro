import { Router } from 'express';
import { auth, permit } from '../middleware/auth.js';
import { createTrip, listTrips } from '../controllers/tripController.js';

const router = Router();

router.get('/', auth, listTrips);
router.post('/', auth, permit('admin','manager','driver'), createTrip);

export default router;
