import Alert from '../models/Alert.js';

export const listAlerts = async (req, res) => {
  const list = await Alert.find().sort({ createdAt: -1 });
  res.json(list);
};

export const createPanicAlert = async (req, res) => {
  const alert = await Alert.create({ type: 'panic', message: 'Panic button pressed!', driver: req.body.driver, vehicle: req.body.vehicle });
  res.json(alert);
};

export const resolveAlert = async (req, res) => {
  const a = await Alert.findByIdAndUpdate(req.params.id, { resolved: true }, { new: true });
  res.json(a);
};
