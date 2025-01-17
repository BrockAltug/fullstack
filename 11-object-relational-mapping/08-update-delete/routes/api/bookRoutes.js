const router = require('express').Router();
const Book = require('../../models/Book');

// PUT route to UPDATE a book in the database with a matching book_id
router.put('/:book_id', (req, res) => {
  // Update the book with the matching book_id using the data provided in the request body
  Book.update(req.body, {
    where: {
      book_id: req.params.book_id, // Match the book by book_id
    },
  })
    .then((affectedRows) => {
      if (affectedRows[0] > 0) {
        res.status(200).json({ message: 'Book updated successfully.' });
      } else {
        res.status(404).json({ message: 'No book found with this ID.' });
      }
    })
    .catch((err) => {
      res.status(500).json(err); // Handle any errors
    });
});

// DELETE route to DELETE a book in the database with a matching book_id
router.delete('/:book_id', (req, res) => {
  // Delete the book with the matching book_id
  Book.destroy({
    where: {
      book_id: req.params.book_id, // Match the book by book_id
    },
  })
    .then((affectedRows) => {
      if (affectedRows > 0) {
        res.status(200).json({ message: 'Book deleted successfully.' });
      } else {
        res.status(404).json({ message: 'No book found with this ID.' });
      }
    })
    .catch((err) => {
      res.status(500).json(err); // Handle any errors
    });
});

// Route to seed the database with predefined books
router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '978-0674729018',
      pages: 336,
      edition: 1,
      is_paperback: false,
    },
    {
      title:
        'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '978-0137043293',
      pages: 500,
      edition: 1,
      is_paperback: true,
    },
    {
      title:
        "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '978-0807047415',
      pages: 192,
      edition: 2,
      is_paperback: true,
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '978-0135957059',
      pages: 352,
      edition: 2,
      is_paperback: false,
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '978-0201896831',
      pages: 672,
      edition: 3,
      is_paperback: false,
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '978-1479837243',
      pages: 256,
      edition: 1,
      is_paperback: true,
    },
  ]).then(() => {
    res.send('Seeding Success!');
  });
});

module.exports = router;