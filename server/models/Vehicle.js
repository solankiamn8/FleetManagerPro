import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  make: String,
  model: String,
  licensePlate: { type: String, unique: true },
  mileage: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'maintenance', 'inactive'], default: 'active' },
  lastKnownLocation: {
    lat: { type: Number, default: 28.6139 },
    lng: { type: Number, default: 77.2090 },
    updatedAt: { type: Date, default: Date.now }
  },
  fuelEfficiency: { type: Number, default: 12 }, // km/l simulated
}, { timestamps: true });

export default mongoose.model('Vehicle', vehicleSchema);
