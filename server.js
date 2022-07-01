const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const notesData = require('./db/db.json');

// instantiate server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', (reg, res) => (
    res.sendFile(path.join(__dirname, '/public/notes.html'))
))
// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get('/api', (req, res) => res.json(notesData));

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});