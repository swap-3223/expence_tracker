const express = require('express')
const postMsg = require('../controllers/contact_msgs')
const verifyToken = require('../middlewares/authMiddleware');

const router = express.Router()

router.post('/postMsg',verifyToken,postMsg)

module.exports = router;