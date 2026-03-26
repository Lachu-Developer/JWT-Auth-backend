require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors({
  origin: "*"
}))
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err))

const userRoutes = require("./routes/userRoutes")
app.use("/api", userRoutes)

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

app.listen(3001, () => {
  console.log("Server running on port 3001 🚀")
})

console.log("Server file running")