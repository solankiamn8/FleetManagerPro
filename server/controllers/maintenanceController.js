import Maintenance from '../models/Maintenance.js';

export const scheduleMaintenance = async (req, res) => {
  try {
    const m = await Maintenance.create(req.body);
    res.json(m);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const listMaintenance = async (req, res) => {
  const list = await Maintenance.find().populate('vehicle').sort({ scheduledAt: -1 });
  res.json(list);
};
