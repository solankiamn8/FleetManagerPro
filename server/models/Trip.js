import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
  origin: String,
  destination: String,
  distanceKm: Number,
  fuelUsedL: Number,
  startedAt: Date,
  endedAt: Date,
  notes: String
}, { timestamps: true });

export default mongoose.model('Trip', tripSchema);
