const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// ___________________________________
//Validation remaining 
// ___________________________________


const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All fields are required ❌" });
    }
    //hashing the password
  const hashPassword = await bcrypt.hash(password, 10);

    const sql = "INSERT INTO users(name,email,password) VALUES(?,?,?)";
    const data = await db.query(sql, [name, email, hashPassword]);

    if (!data) {
      console.log("Something Went Wrong ❌");
      return res.status(400).json({ msg: "Bad request" });
    }
    return res
      .status(201)
      .send({ msg: "New User Created Successfully ✔️", data: data.insertId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Inernal Server Error ❌" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required ❌" });
    }
    const [users] = await db.query("select * from users where email = ?", [email]);
    if (users.length === 0) {
      return res.status(401).json({ msg: "invalid credential" });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: "invalid credential" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      msg: "Login Successful ✔️",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error ❌" });
  }
};
module.exports = { registerUser,Login };
