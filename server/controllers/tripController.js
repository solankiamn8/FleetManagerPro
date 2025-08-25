import Trip from '../models/Trip.js';
import Vehicle from '../models/Vehicle.js';
import { estimateTravelTimeMins, calculateFuelUse } from '../utils/simulate.js';

export const createTrip = async (req, res) => {
  try {
    const { vehicle: vehicleId, distanceKm } = req.body;
    const vehicle = await Vehicle.findById(vehicleId);
    const fuelUsedL = calculateFuelUse(distanceKm, vehicle?.fuelEfficiency || 12);
    const t = await Trip.create({ ...req.body, fuelUsedL });
    res.json({ ...t.toObject(), etaMins: estimateTravelTimeMins(distanceKm) });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const listTrips = async (req, res) => {
  const list = await Trip.find().populate('vehicle driver').sort({ createdAt: -1 });
  res.json(list);
};
