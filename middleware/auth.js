const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1]

        const decoded = jwt.verify(token, "secretkey")

        req.userId = decoded.userId

        next()
    }
    catch(err){
        res.status(401).json({error:"Unauthorized"})
    }
}

console.log("auth works")