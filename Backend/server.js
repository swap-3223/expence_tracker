const express = require('express');
const db = require('./config/db');
require('dotenv').config();
const cors = require('cors')
const userRouter = require('./routes/userRoute')
const expenseRouter  = require('./routes/expenseRoute')
const contactMsgRouter = require('./routes/contactMsgRoute')
const app = express();
app.use(cors())
app.use(express.json())

app.use('/api/v1/users',userRouter)
app.use('/api/v1/expense',expenseRouter)
app.use('/api/v1/contactMsg',contactMsgRouter)



const PORT = process.env.PORT || 9000

db.query('select 1')
.then(()=>{
    console.log("💯 Database Connected Successfully")
    app.listen(PORT,()=>{
    console.log("🚀 Server Running On Port",PORT)
})
})
