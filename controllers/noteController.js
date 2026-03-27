const Note = require("../models/noteModel")

// CREATE NOTE
exports.createNote = async (req, res) => {
    try{
        const note = new Note ({
            title: req.body.title,
            content: req.body.content,
            userId:req.userId 
        })
    
    await note.save()
    res.json(note)
    }
    catch(err) {
        res.status(500).json({error:err.message})
    }    
}

// GET USER NOTES
exports.getNotes = async (req, res) =>{
    try {
        const notes = await Note.find({ userId:req.userId})
        res.json(notes)
    }
    catch(err) {
        res.status(500).json({error:err.message})
    }
}

// DELETE NOTE
exports.deleteNote = async (req, res) =>{
    try{
        await Note.findByIdAndDelete(req.params.id)
        res.json({message: "Deleted"})
    }
    catch(err) {
        res.status(500).json({error:err.message})
    }
}