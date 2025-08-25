import dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fleetmanagerpro',
  JWT_SECRET: process.env.JWT_SECRET || 'dev_secret_change_me',
  NODE_ENV: process.env.NODE_ENV || 'development',
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:5173'
};
