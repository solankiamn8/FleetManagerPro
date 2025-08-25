import Vehicle from '../models/Vehicle.js';

export const createVehicle = async (req, res) => {
  try {
    const v = await Vehicle.create(req.body);
    res.json(v);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const listVehicles = async (req, res) => {
  const list = await Vehicle.find().sort({ createdAt: -1 });
  res.json(list);
};

export const getVehicle = async (req, res) => {
  const v = await Vehicle.findById(req.params.id);
  if (!v) return res.status(404).json({ message: 'Not found' });
  res.json(v);
};

export const updateVehicle = async (req, res) => {
  const v = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(v);
};

export const removeVehicle = async (req, res) => {
  await Vehicle.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

export const updateLocation = async (req, res) => {
  const { lat, lng } = req.body;
  const v = await Vehicle.findByIdAndUpdate(req.params.id, { lastKnownLocation: { lat, lng, updatedAt: new Date() } }, { new: true });
  res.json(v);
};
