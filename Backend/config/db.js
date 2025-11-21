const mysql = require('mysql2/promise')
require('dotenv').config()
const fs = require('fs')
const db = mysql.createPool({
    host:process.env.DB_HOST,
    port:process.env.PORT,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASS,
    ssl:{
        ca:fs.readFileSync(process.env.CA)
    }
})

module.exports = db