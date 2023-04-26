const Workout = require('../models/workout_model')
const mongoose = require('mongoose');

// GET all Workouts
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find().sort({createAt: -1});

  res.status(200).json(workouts);
}

// GET a single Workout
const getWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ error: 'ID is not valid' })
  }
  const workout = await Workout.findById(id)

  if (!workout) {
    return res.status(404).json({error: 'Workout not found'})
  }

  res.status(200).json(workout);
}

// CREATE a Workout
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!load) {
    emptyFields.push('load')
  }  
  if (!reps) {
    emptyFields.push('reps')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }

  // add workout to db
  try {
    const workout = await Workout.create({title, load, reps});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

// DELETE a Workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ error: 'ID is not valid' })
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({error: 'Workout not found'});
  }

  res.status(200).json(workout);
}

// UPDATE a Workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({ error: 'ID is not valid' })
  };

  const workout = await Workout.findOneAndUpdate({_id: id}, {
    ...req.body
  });

  if (!workout) {
    return res.status(404).json({error: 'Workout not found'});
  }

  res.status(200).json(workout);
}

module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
}