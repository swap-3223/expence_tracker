const db = require("../config/db");

const postExpenses = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { title, amount, category, date } = req.body;
    const sql =
      "INSERT INTO expense(title,amount,category,date,user_id)VALUES(?,?,?,?,?)";
    const [rslt] = await db.query(sql, [
      title,
      amount,
      category,
      date,
      user_id,
    ]);
    if (rslt.affectedRows === 0) {
      console.log("Something went wrong");
      return res.status(401).json({ msg: "error" });
    }
    return res.status(200).json({ msg: "expenses added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getExpenses = async (req, res) => {
  try {
    const id = req.user.id;
    const sql = "SELECT * FROM expense WHERE user_id = ?";
    const [rslt] = await db.query(sql, [id]);
    if (rslt.length === 0) {
      return res.status(404).json({ msg: "data not found" });
    }
    return res.status(200).json({ expenses: rslt });
  } catch (error) {
    return res.status(500).json({ msg: "Internal server error" });
  }
};

const updateExpenses = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, amount, category, date } = req.body;
    const sql = "UPDATE expense SET title=?, amount=?, category=? ,date=? WHERE id = ?";
    const [rslt] = await db.query(sql, [title, amount, category, date,id]);
    if (rslt.affectedRows === 0) {
      return res.status(404).json({ msg: "No expense found for this user" });
    }

    return res.status(200).json({ msg: "Expense updated successfully",id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteExpenses = async (req,res) => {
    try {
    const id = req.params.id;
    const sql = 'DELETE FROM expense WHERE id = ?'
    const [rslt] = await db.query(sql,[id])
    if(rslt.affectedRows === 0){
        return res.status(401).json({msg:"Something went wrong"});
    }
    return res.status(200).json({msg:"Expense deleted"})
    } catch (error) {
        res.status(500).json({msg:"Internal Server Error"});
    }
};

module.exports = { postExpenses, getExpenses,updateExpenses,deleteExpenses };
