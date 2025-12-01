// src/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    rol: {
      type: String,
      enum: ['alumno', 'admin'],
      default: 'alumno'
    }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
