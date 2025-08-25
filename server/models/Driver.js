import mongoose from 'mongoose';

const driverSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  licenseNumber: String,
  history: { type: String, default: 'Clean record' },
  rating: { type: Number, default: 4.5 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // link to auth user if needed
}, { timestamps: true });

export default mongoose.model('Driver', driverSchema);
