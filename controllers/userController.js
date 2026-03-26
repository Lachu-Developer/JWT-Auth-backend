const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = new User({
      email: req.body.email,
      password: hashedPassword
    })

    await user.save()
    res.json({ message: "User created" })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(404).json({ error: "User not found" })
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password)

    if (!isMatch) {
      return res.status(400).json({ error: "Wrong password" })
    }

    // CREATE TOKEN
    const token = jwt.sign(
      {userId: user._id},
      "secretkey",
      {expiresIn:"1hr"}
    )
    res.json({
      message: "Login successful",
      token: token
    })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

console.log("userconteller works")
