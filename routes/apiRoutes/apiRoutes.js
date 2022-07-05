
const router = require('express').Router();
const {createNewNote} = require('../../lib/notes');
const notesData = require('../../db/db.json');
const { randomUUID } = require('crypto');

router.get('/notes', (req, res) => {
    res.json(notesData)
});

router.post('/notes', (req, res) => {
    req.body.id = randomUUID();
    const note = createNewNote(req.body, notesData)
    res.json(note)
});



module.exports = router;