require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

//express app
const app = express()

//middleware
app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/gymhero', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for requests
    app.listen(process.env.PORT, ()=> {
      console.log('Connected to DB and listening on port:', process.env.PORT);
    });
  }).catch((error) => {
    console.log(error);
  })


