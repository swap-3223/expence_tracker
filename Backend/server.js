const express = require('express');
const db = require('./config/db');
require('dotenv').config();
const userRouter = require('./routes/userRoute')
const expenseRouter  = require('./routes/expenseRoute')

const app = express();
app.use(express.json())

app.use('/api/v1/users',userRouter)
app.use('/api/v1/expense',expenseRouter)


const PORT = process.env.PORT || 9000

db.query('select 1')
.then(()=>{
    console.log("💯 Database Connected Successfully")
    app.listen(PORT,()=>{
    console.log("🚀 Server Running On Port",PORT)
})
})
