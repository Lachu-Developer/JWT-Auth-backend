const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://lachu_db_user:MvHtNTr9tvy7wSyP@mongo.orevbfm.mongodb.net/")
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err))

const userRoutes = require("./routes/userRoutes")
app.use("/api", userRoutes)

app.listen(3001, () => {
  console.log("Server running on port 3001 🚀")
})

console.log("Server file running")