const express = require('express');

const PORT = 3001;

const app = express();

// TODO: Create a GET method for `/api/reviews` that logs when a user's request has been received
app.get('/api/reviews', (req, res) => {
  // Your code here
  console.log(`${req.method} /api/reviews request received`);
  res.json(`${req.method} /api/reviews request received to get reviews`);


});

// TODO: Create a POST request for `/api/reviews` that logs when a user's request has been received
// Your code here
app.post('/api/reviews', (req, res) => {
  console.log(`${req.method} /api/reviews request received`);
  res.json(`${req.method} /api/reviews request received to add a review`);
});


// TODO: Create a GET request for `api/upvotes` that logs when a user's request has been received
app.get('/api/upvotes', (req, res) => {
  // Your code here
  console.log(`${req.method} /api/upvotes request received`);
  res.json(`${req.method} /api/upvotes request received to retrieve upvote count`);
});

// TODO: Create a POST request for `api/upvotes` that logs when a user's request has been received
// Your code here
app.post('/api/upvotes', (req, res) => {
  console.log(`${req.method} /api/upvotes request received`);
  res.json(`${req.method} /api/upvotes request received to upvote`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
