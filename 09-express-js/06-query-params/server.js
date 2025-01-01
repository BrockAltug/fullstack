const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// Helper function to sort terms by type (asc or dsc)
const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// Route to handle fetching terms with optional sorting
// If a query parameter `sort` is provided, it sorts terms by `asc` or `dsc` order
// Otherwise, returns the full list of terms
app.get('/api/terms/', (req, res) => {
  // `req.query` contains query string parameters sent by the client
  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// Route to fetch a specific term by its name
// Returns the matching term object if it exists, otherwise returns a "No term found" message
app.get('/api/term/:term', (req, res) => {
  // `req.params` contains route parameters specified in the URL
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// Route to fetch terms by a specific category
// Returns a list of terms belonging to the requested category
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// Route to fetch all unique categories from the terms
// Returns a list of unique categories
app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  // Filters out duplicate categories to get unique values
  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

// Start the server and listen on the specified PORT
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);