const express = require("express");
const fs = require('fs');
const path = require("path");
const notesData = require('./db/db.json');
const {createNewNote} = require('./lib/notes')
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')
// const { Router } = require("express");
// const staticRoutes = require('./routes/staticRoutes')
const PORT = process.env.PORT || 3001;

// instantiate server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.use('/', staticRoutes)

// function createNewNote(body, data) {
//   // id = randomUUID();
//   // body.id = id;
//   data.push(body)
//   fs.writeFileSync(
//     path.join(__dirname, './db/db.json'), JSON.stringify(data), null, 2);
//   return data
// }

// static route
// app.get('/', (req, res) => {
//   res.sendFile(path.join('index.html'));
// });

// // static route
// app.get('/notes', (reg, res) => (
//   res.sendFile(path.join(__dirname, 'public/notes.html'))
// ))

// app.get('/api/notes', (req, res) => {
//   res.json(notesData)
// });

// app.post('/api/notes', (req, res) => {
//   req.body.id = randomUUID();
//   const note = createNewNote(req.body, notesData)
//   res.json(note)
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
});