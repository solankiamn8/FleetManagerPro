import mongoose from 'mongoose';
import { env } from '../config/env.js';
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Vehicle from '../models/Vehicle.js';
import Driver from '../models/Driver.js';
import Maintenance from '../models/Maintenance.js';
import Trip from '../models/Trip.js';

await connectDB();

await Promise.all([User.deleteMany({}), Vehicle.deleteMany({}), Driver.deleteMany({}), Maintenance.deleteMany({}), Trip.deleteMany({})]);

const [admin, manager, driverUser] = await User.create([
  { name: 'Admin', email: 'admin@fleet.com', password: 'admin123', role: 'admin' },
  { name: 'Manager', email: 'manager@fleet.com', password: 'manager123', role: 'manager' },
  { name: 'Driver John', email: 'driver@fleet.com', password: 'driver123', role: 'driver' }
]);

const [v1, v2] = await Vehicle.create([
  { make: 'Tata', model: 'Ace', licensePlate: 'DL01AB1234', mileage: 54000, fuelEfficiency: 14 },
  { make: 'Mahindra', model: 'Bolero', licensePlate: 'MH12CD5678', mileage: 89000, fuelEfficiency: 12 }
]);

const [d1] = await Driver.create([
  { name: 'John Doe', phone: '9999999999', email: 'johndoe@example.com', licenseNumber: 'DL-1234-2025' }
]);

await Maintenance.create([
  { vehicle: v1._id, type: 'Oil Change', cost: 1500, scheduledAt: new Date(), notes: 'Synthetic oil' },
  { vehicle: v2._id, type: 'Brake Service', cost: 3200, scheduledAt: new Date(Date.now()+86400000) }
]);

await Trip.create([
  { driver: d1._id, vehicle: v1._id, origin: 'Warehouse A', destination: 'Client X', distanceKm: 22, fuelUsedL: 1.8, startedAt: new Date(), endedAt: new Date() }
]);

console.log('✅ Seed complete');
mongoose.connection.close();
