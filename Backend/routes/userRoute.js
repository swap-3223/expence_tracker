const express = require('express');
const { registerUser, Login } = require('../controllers/users');

const router = express.Router();

router.post('/register',registerUser)

router.post('/login',Login)


module.exports = router