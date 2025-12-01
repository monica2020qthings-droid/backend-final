// src/models/Materia.js
import mongoose from 'mongoose';

const materiaSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    profesor: {
      type: String,
      required: true
    },
    calificacion: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    }
  },
  { timestamps: true }
);

export const Materia = mongoose.model('Materia', materiaSchema);
