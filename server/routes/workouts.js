const express = require('express');
const Workout = require('../models/workout_model')
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workout_controller')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts);

// Get one workout
router.get('/:id', getWorkout);

// Create new workout
router.post('/', createWorkout);

// Delete new workout
router.delete('/:id', deleteWorkout);

// Update new workout
router.patch('/:id', updateWorkout);

module.exports = router