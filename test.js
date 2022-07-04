
const fs = require('fs');
const notesData = require('./db/db.json');
const path = require("path");
const { request } = require('http');

console.log('this is notesData ',notesData)
const body = { title: 'test', text: 'test2\n' }
notesData.push(body)
console.log('this is notesData ',notesData)
fs.writeFileSync('./db/db.json',JSON.stringify(notesData), null, 2);
//   JSON.stringify({ note: notesData }, null, 2))
// return note;

// fs.writeFileSync('./db/db.json', notesData,)

// function saveNewNote(body, notesData) {
//     // console.info(`${req.method} request received to add a review`);
//     const note = body;
//     notesData.push(note)
  
//     fs.writeFileSync(
//       path.join(__dirname, './db/db.json'),
//     )
//   return note;
//   };
  

// POST request to add a review
// app.post('/db/db.json', (req, res) => {
  // Log that a POST request was received
  // console.info(`${req.method} request received to add a review`);

  // Destructuring assignment for the items in req.body
  // const { product, review, username } = req.body;

  // If all the required properties are present
  // if (product && review && username) {
    // Variable for the object we will save
 
//     function CreateNewNote(body, data) {
//       console.log("in the createNewNote function");
//     const note = body;
//     console.log("this is body", note)
//     return note;
//     // fs.writeFile('db/db.json', note, null, 2);
//     // console.log('this is notesData ',notesData)
// }

    // Obtain existing reviews
    // console.log("this is note -> ",note)
    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //   console.log("this is data -> ", data)
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     // Convert string into JSON object
    //     const parsedNotes = JSON.parse(data);
    //     console.log('this is parsedNotes -> ', parsedNotes)

    //     // Add a new review
    //     parsedNotes.push(note);

    //     // Write updated reviews back to the file
    //     // fs.writeFile(
    //     //   './db/reviews.json',
    //     //   JSON.stringify(parsedNotes, null, 4),
    //     //   (writeErr) =>
    //     //     writeErr
    //     //       ? console.error(writeErr)
    //     //       : console.info('Successfully updated reviews!')
    //     // );
    //   }
    // });

    // const response = {
    //   status: 'success',
    //   body: newReview,
    // };

    // console.log(response);
    // res.json(response);
  

  // CreateNewNote(body, notesData)

