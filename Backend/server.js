const express = require('express');
const db = require('./config/db');
require('dotenv').config();
const router = require('./routes/userRoute')

const app = express();
app.use(express.json())

app.use('/api/v1/users',router)

const PORT = process.env.PORT || 9000

db.query('select 1')
.then(()=>{
    console.log("💯 Database Connected Successfully")
    app.listen(PORT,()=>{
    console.log("🚀 Server Running On Port",PORT)
})
})
