const express = require ("express")
const router = express.Router()

const auth = require("../middleware/auth")
const {
    createNote,
    getNote,
    deleteNote
} = require("../controllers/noteController")

router.post("/notes",createNote)
router.get("/notes",getNote)
router.delete("/notes/:id",deleteNote)

module.exports = router


