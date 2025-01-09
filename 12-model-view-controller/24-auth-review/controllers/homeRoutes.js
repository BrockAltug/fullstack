const router = require('express').Router(); // Import Express router to define routes
const { User } = require('../models'); // Import the User model for interacting with user data
const withAuth = require('../utils/auth'); // Import middleware to protect routes

// Route for the homepage
// Uses the `withAuth` middleware to ensure the user is logged in before accessing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    // Fetches all users from the database, excluding their passwords
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }, // Excludes the password attribute for security
      order: [['name', 'ASC']], // Orders the results alphabetically by name
    });

    // Serializes the user data to plain objects for use in templates
    const users = userData.map((user) => user.get({ plain: true }));

    // Renders the 'homepage' Handlebars template with user data and logged-in status
    res.render('homepage', {
      users, // Passes the array of serialized user objects to the template
      logged_in: req.session.logged_in, // Indicates whether the user is logged in
    });
  } catch (err) {
    // Sends a 500 status code and the error object if an error occurs
    res.status(500).json(err);
  }
});

// Route for the login page
router.get('/login', (req, res) => {
  // Redirects the user to the homepage if they are already logged in
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  // Renders the 'login' Handlebars template if the user is not logged in
  res.render('login');
});

module.exports = router; // Export the router for use in the main application