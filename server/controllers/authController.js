import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { env } from '../config/env.js';

const sign = (user) => jwt.sign({ id: user._id, role: user.role, name: user.name }, env.JWT_SECRET, { expiresIn: '7d' });

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already registered' });
    const user = await User.create({ name, email, password, role });
    res.json({ token: sign(user), user: { id: user._id, name: user.name, role: user.role } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const ok = await user.comparePassword(password);
    if (!ok) return res.status(400).json({ message: 'Invalid credentials' });
    res.json({ token: sign(user), user: { id: user._id, name: user.name, role: user.role } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const me = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json(user);
};

export const requestPasswordReset = async (req, res) => {
  // simulated flow
  res.json({ message: 'Password reset link sent (simulated).' });
};

export const verifyAccount = async (req, res) => {
  // simulated flow
  res.json({ message: 'Account verified (simulated).' });
};
