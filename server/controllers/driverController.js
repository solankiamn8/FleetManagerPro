import Driver from '../models/Driver.js';

export const createDriver = async (req, res) => {
  try {
    const d = await Driver.create(req.body);
    res.json(d);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const listDrivers = async (req, res) => {
  const list = await Driver.find().sort({ createdAt: -1 });
  res.json(list);
};

export const updateDriver = async (req, res) => {
  const d = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(d);
};

export const removeDriver = async (req, res) => {
  await Driver.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
