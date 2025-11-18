const db = require('../config/db')

const postMsg = async(req,res)=>{
    try {
        const user_id = req.user.id;
        const {name,email,message} = req.body;
        const sql = 'INSERT INTO contact_messages(user_id,name,email,message) VALUES(?,?,?,?)'
        const [rslt] = await db.query(sql,[user_id,name,email,message])
        if(rslt.affectedRows === 0){
            console.log("Something went wrong");
            return res.status(401).json({ msg: "error" });
        }
    return res.status(200).json({ msg: "Message Sent successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = postMsg;