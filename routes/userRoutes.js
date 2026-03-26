const express = require("express")
const router = express.Router()

const { signup, login, } = require("../controllers/userController")
const auth = require("../middleware/auth")

router.post("/signup", signup)
router.post("/login", login)

// PROTECTED ROUTE
router.get("/protected", auth, (req, res) => {
  res.json({message: "you are authorized"})
})

module.exports = router

console.log("userRoutes loaded ✅")