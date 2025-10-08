const db = require('../config/db')

const postExpenses = async(req,res)=>{
try {
    const user_id = req.user.id;
    const {title,amount,category,date} = req.body;
    const sql = 'INSERT INTO expense(title,amount,category,date,user_id)VALUES(?,?,?,?,?)';
    const [rslt] = await db.query(sql,[title,amount,category,date,user_id])
    if(rslt.affectedRows === 0){
        console.log("Something went wrong")
        return res.status(401).json({msg:"error"})
    }
    return res.status(200).json({msg:"expenses added successfully"})
} catch (error) {
    console.log(error)
    return res.status(500).json({msg:"Internal Server Error"})

}
}


const getExpenses = async()=>{}


const updateExpenses = async()=>{}


const deleteExpenses = async()=>{}

module.exports = {postExpenses}