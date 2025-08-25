import mongoose from 'mongoose';

const geofenceSchema = new mongoose.Schema({
  name: String,
  // simple circular geofence
  center: { lat: Number, lng: Number },
  radiusKm: { type: Number, default: 5 }
}, { timestamps: true });

export default mongoose.model('Geofence', geofenceSchema);
