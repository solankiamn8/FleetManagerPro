import mongoose from 'mongoose';

const alertSchema = new mongoose.Schema({
  type: { type: String, enum: ['maintenance', 'geofence', 'panic', 'safety'], default: 'maintenance' },
  message: String,
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  resolved: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Alert', alertSchema);
