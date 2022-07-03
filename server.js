const express = require("express");
const fs = require('fs');
const path = require("path");
const notesData = require('./db/db.json');
const PORT = process.env.PORT || 3001;

// const notesData = [
//   {
//     "title": "Test Title",
//     "text": "Test text"
//   },
//   {
//     "title": "test",
//     "text": "WTF yo!!!"
//   }
// ]



// instantiate server
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

function saveNewNote(body, notesData) {
  // console.info(`${req.method} request received to add a review`);
  const note = body;
  notesData.push(note)

  fs.writeFileSync(
    path.join(__dirname, './db/db.json'), JSON.stringify(note)
  )
return note;
};

  // Destructuring assignment for the items in req.body
  // const { product, review, username } = req.body;

  // If all the required properties are present
  // if (product && review && username) {
  //   // Variable for the object we will save
  //   const newReview = {
  //     product,
  //     review,
  //     username,
  //     review_id: uuid(),
  //   };

  // Obtain existing reviews
  // fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     // Convert string into JSON object
  //     const parsedReviews = JSON.parse(data);

  //     // Add a new review
  //     parsedReviews.push(newReview);

  //     // Write updated reviews back to the file
  //     fs.writeFile(
  //       './db/reviews.json',
  //       JSON.stringify(parsedReviews, null, 4),
  //       (writeErr) =>
  //         writeErr
  //           ? console.error(writeErr)
  //           : console.info('Successfully updated reviews!')
  //     );
  //   }
  // });

//   const response = {
//     status: 'success',
//     body: newReview,
//   };

//   console.log(response);
//   res.json(response);
// } else {
//   res.json('Error in posting review');
// }
// });


// }

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
  const note = saveNewNote(req.body, notesData)
  res.json(note);
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
});