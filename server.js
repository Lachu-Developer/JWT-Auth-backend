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

const noteRoutes = require("./routes/noteRoutes")
app.use("/api", noteRoutes)

app.get("/", (req, res) => {
  res.send("Backend is running 🚀")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`)
})

console.log("Server file running")