import mongoose from 'mongoose';
import { USER_ROLE } from '../types/users.types.js';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    role: { type: String, enum: Object.values(USER_ROLE), default: USER_ROLE.USER },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    passwordHash: { type: String },
    __v: { type: Number, select: false },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model('user', userSchema);
