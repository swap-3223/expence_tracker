const express = require('express')
const {postExpenses, getExpenses, updateExpenses, deleteExpenses} = require('../controllers/expenses');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/addExpense',verifyToken,postExpenses);

router.get('/getExpense',verifyToken,getExpenses)

router.put('/updateExpense/:id',verifyToken,updateExpenses)

router.delete('/deleteExpense/:id',verifyToken,deleteExpenses)

module.exports = router