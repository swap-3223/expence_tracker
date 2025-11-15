const express = require('express');
const { registerUser, Login, getUserById } = require('../controllers/users');

const router = express.Router();

router.post('/register',registerUser)

router.post('/login',Login)

router.get('/getUser/:id',getUserById)



module.exports = router