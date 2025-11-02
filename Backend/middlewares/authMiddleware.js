const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken=(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json({msg:"no token provided"})
    }

    const token = authHeader.split(" ")[1];

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();

    } catch (error) {
        console.log(error)
        // res.status(401).json({msg:"Invalied or expired token"})

    }
}

module.exports = verifyToken