
const fs = require('fs');
const notesData = require('./db/db.json');
const path = require("path");


const body = { title: 'test', text: 'test2\n' }

function saveNewNote(body, notesData) {
    // console.info(`${req.method} request received to add a review`);
    const note = body;
    notesData.push(note)
  
    fs.writeFileSync(
      path.join(__dirname, './db/db.json'),
    )
  return note;
  };
  
  saveNewNote(body, notesData)

