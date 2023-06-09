const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'basic',
    },
    performed: [
      {
        exerciseId: {
          type: Schema.Types.ObjectId,
          ref: 'Exercise',
        },
        exerciseCount: { type: Number, required: true },
        duration: { type: Number, required: true },
      },
    ],
    workoutperformed: [
      {
        workoutId: {
          type: Schema.Types.ObjectId,
          ref: 'Workout',
        },
        duration: { type: Number, required: true },
        performedCount: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
