const router = require('express').Router();
const notesData = require('./db/db.json');
const {createNewNote} = ('../lib/createNewNote');

// notes page
router.get('/notes', (req, res) => {
  res.json(notesData)
});

// new note/save note
router.post('/notes', (req, res) => {
  const note = createNewNote(req.body, notesData)
  res.json(note)
});

module.exports = router;