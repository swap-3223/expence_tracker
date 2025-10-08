const express = require('express')
const {postExpenses} = require('../controllers/expenses');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/addExpense',verifyToken,postExpenses)

module.exports = router