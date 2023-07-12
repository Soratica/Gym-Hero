const User = require('../models/user_model')
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// Sign Up User
const SignUpUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    //create a token
    const token = createToken(user._id)

    console.log(token)

    res.status(200).json({email, token})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


// Login User
const LoginUser = async (req, res) => {
  res.json({mssg: 'Login User'})
}

module.exports = {SignUpUser, LoginUser}