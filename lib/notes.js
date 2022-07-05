const fs = require('fs')
const path = require('path');
// const notesData = require('../db/db.json')

function createNewNote(body, data) {
    data.push(body)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'), JSON.stringify(data), null, 2);
    return data
}

module.exports = { createNewNote };