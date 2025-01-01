const express = require('express');
const path = require('path');
// Helper method for generating unique IDs
const uuid = require('./helpers/uuid');
const reviews = require('./db/reviews');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON data
app.use(express.json());
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve the homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for all reviews
// Responds with the full list of reviews in JSON format
app.get('/api/reviews', (req, res) => {
  console.info(`GET /api/reviews`);
  res.status(200).json(reviews);
});

// GET request for a single review by ID
// Responds with the review matching the provided review_id
app.get('/api/reviews/:review_id', (req, res) => {
  const { review_id } = req.params;

  // Check if a review ID was provided in the request
  if (!review_id) {
    return res.status(400).send('Review ID not found!');
  }

  console.info(`${req.method} request received to get a single review`);

  // Find the review with the matching ID
  const review = reviews.find((rev) => rev.review_id == review_id);

  // If no matching review is found, respond with a 404 error
  if (!review) {
    return res.status(404).json("Review not found!");
  }

  // Respond with the matching review
  res.status(200).json(review);
});

// POST request to add a new review
// Accepts review details in the request body and adds a new review to the database
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Destructure product, review, and username from the request body
  const { product, review, username } = req.body;

  // Check if all required fields are present in the request body
  // Ensures no fields are missing before processing the request
  if (product && review && username) {
    // Create a new review object with a unique ID and random upvotes
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);

    // Respond with the created review in JSON format and a 201 status code
    res.status(201).json(response);
  } else {
    // If any fields are missing, respond with a 500 error
    res.status(500).json('Error in posting review');
  }
});

// GET request for the upvotes of a specific review
// Responds with the upvote count of the review with the provided review_id
app.get('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;

  // Check if a review ID was provided in the request
  if (!review_id) {
    return res.status(400).send('Review ID not found!');
  }

  console.info(`${req.method} request received to get upvotes for a review`);

  // Find the review with the matching ID
  const review = reviews.find((rev) => rev.review_id == review_id);

  // If no matching review is found, respond with a 404 error
  if (!review) {
    return res.status(404).json("Review not found!");
  }

  // Respond with the review's upvote count
  res.json({
    message: `The review with ID ${review.review_id} has ${review.upvotes}`,
    upvotes: review.upvotes,
  });
});

// POST request to upvote a review
// Increments the upvote count for the review with the provided review_id
app.post('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  const { upvote } = req.body;

  // Ensure the request body contains an upvote field
  if (upvote === undefined) {
    return res.status(400).json('Provide a req.body with upvote!');
  }

  // Find the review with the matching ID
  const review = reviews.find((rev) => rev.review_id == review_id);

  // If no matching review is found, respond with a 404 error
  if (!review) {
    return res.status(404).json("Review not found!");
  }

  console.info(`${req.method} request received to upvote a review!`);

  // Increment the review's upvote count
  review.upvotes++;

  // Respond with the updated upvote count
  res.json(`New upvote count is ${review.upvotes}!`);
});

// Start the server and listen on the specified port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);