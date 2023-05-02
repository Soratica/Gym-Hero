const express = require('express')

//controller functions
const { SignUpUser, LoginUser } = require('../controllers/user_controller')

const router = express.Router()

//sign up route
router.post('/signup', SignUpUser)

// login route
router.post('/login', LoginUser)

module.exports = router