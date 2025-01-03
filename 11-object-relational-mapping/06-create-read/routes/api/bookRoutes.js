const router = require('express').Router();
const Book = require('../../models/Book');

// Route to retrieve all books
// This route fetches all entries from the `book` table and returns them as a JSON response.
router.get('/', (req, res) => {
  // Use Sequelize's `findAll` method to retrieve all book records
  Book.findAll().then((bookData) => {
    res.json(bookData); // Send the retrieved data as a JSON response
  });
});

// Route to retrieve all paperback books
// This route fetches all paperback books, ordered by title, and excludes specific fields from the response.
router.get('/paperbacks', (req, res) => {
  Book.findAll({
    // Orders the results alphabetically by the `title` column
    order: ['title'],
    // Filters the results to include only books where `is_paperback` is true
    where: {
      is_paperback: true
    },
    attributes: {
      // Excludes the `is_paperback` and `edition` columns from the results
      exclude: ['is_paperback', 'edition']
    }
  }).then((bookData) => {
    res.json(bookData); // Send the filtered data as a JSON response
  });
});

// Route to retrieve a single book by ID
// This route fetches a book record by its primary key (`book_id`) and returns it as a JSON response.
router.get('/:id', (req, res) => {
  // Use Sequelize's `findByPk` method to find a book by its primary key
  Book.findByPk(req.params.id).then((bookData) => {
    res.json(bookData); // Send the retrieved book data as a JSON response
  });
});

// Route to create a single book
// This route accepts book data in the request body and creates a new entry in the `book` table.
router.post('/', (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.json(newBook); // Send the newly created book record as a JSON response
    })
    .catch((err) => {
      res.json(err); // Send an error response if the creation fails
    });
});

// Route to seed the database with multiple books
// This route inserts multiple predefined book records into the `book` table.
router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '978-0674729018',
      pages: 336,
      edition: 1,
      is_paperback: false
    },
    {
      title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '978-0137043293',
      pages: 500,
      edition: 1,
      is_paperback: true
    },
    {
      title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '978-0807047415',
      pages: 192,
      edition: 2,
      is_paperback: true
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '978-0135957059',
      pages: 352,
      edition: 2,
      is_paperback: false
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '978-0201896831',
      pages: 672,
      edition: 3,
      is_paperback: false
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '978-1479837243',
      pages: 256,
      edition: 1,
      is_paperback: true
    }
  ])
    .then(() => {
      res.send('Database seeded!'); // Send a success message when the seeding is complete
    })
    .catch((err) => {
      res.json(err); // Send an error response if the seeding fails
    });
});

module.exports = router;