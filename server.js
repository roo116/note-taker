const express = require("express");
const path = require("path");
const notesData = require('./db/db.json');
const PORT = process.env.PORT || 3001;


// instantiate server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// static route
app.get('/', (req, res) => {
  res.sendFile(path.join('index.html'));
});

// static route
app.get('/notes', (reg, res) => (
  res.sendFile(path.join(__dirname, 'public/notes.html'))
))

app.get('/api/notes', (req, res) => {
  res.json(notesData)
});

app.post('/api/notes', (req, res) => {
  // req.body is where our incoming content will be
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
});