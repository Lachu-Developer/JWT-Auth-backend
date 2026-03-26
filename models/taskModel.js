const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  email: String,
  password: String
});


module.exports = mongoose.model("", taskSchema);
