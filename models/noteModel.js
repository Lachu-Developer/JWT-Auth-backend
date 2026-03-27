const mongoose = require("mongoose")

const scheme = new mongoose.Schema({
    title: String,
    content: String,
    userId: String
})

module.exports = mongoose.model("Note", noteSchema)