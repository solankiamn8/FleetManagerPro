import Trip from '../models/Trip.js';
import Maintenance from '../models/Maintenance.js';

export const summary = async (req, res) => {
  const trips = await Trip.find();
  const maint = await Maintenance.find();
  const totalDistance = trips.reduce((a, t) => a + (t.distanceKm || 0), 0);
  const totalFuel = trips.reduce((a, t) => a + (t.fuelUsedL || 0), 0);
  const totalMaintCost = maint.reduce((a, m) => a + (m.cost || 0), 0);
  res.json({
    totalTrips: trips.length,
    totalDistance,
    totalFuel,
    totalMaintCost
  });
};
