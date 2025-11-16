const express = require('express');
const { registerUser, Login, getUserById, updatedUser } = require('../controllers/users');

const router = express.Router();

router.post('/register',registerUser)

router.post('/login',Login)

router.get('/getUser/:id',getUserById)

router.put('/updateUser/:id',updatedUser)




module.exports = router