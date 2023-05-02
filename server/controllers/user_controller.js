const User = require('../models/user_model')


// Sign Up User
const SignUpUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.signup(email, password)

    res.status(200).json({email, user})
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


// Login User
const LoginUser = async (req, res) => {
  res.json({mssg: 'Login User'})
}

module.exports = {SignUpUser, LoginUser}