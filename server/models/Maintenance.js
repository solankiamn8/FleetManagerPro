import mongoose from 'mongoose';

const maintenanceSchema = new mongoose.Schema({
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  type: { type: String, default: 'Routine Service' },
  cost: { type: Number, default: 0 },
  scheduledAt: Date,
  completedAt: Date,
  notes: String
}, { timestamps: true });

export default mongoose.model('Maintenance', maintenanceSchema);
