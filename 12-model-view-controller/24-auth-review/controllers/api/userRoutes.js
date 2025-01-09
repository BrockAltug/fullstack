const router = require('express').Router(); // Import Express router to define routes
const { User } = require('../../models'); // Import the User model for interacting with user data

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Finds a user in the database with the provided email
    // Returns the user's data if found, otherwise `userData` will be null
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user is found, send a 400 response with an error message
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Checks if the provided password matches the hashed password stored in the database
    const validPassword = await userData.checkPassword(req.body.password);

    // If the password is invalid, send a 400 response with an error message
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Saves the user's session information
    // Includes user ID and logged-in status in the session
    req.session.save(() => {
      req.session.user_id = userData.id; // Store the user ID in the session
      req.session.logged_in = true; // Mark the session as logged in

      // Respond with the user data and a success message
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    // Handle errors by sending a 400 response with the error object
    res.status(400).json(err);
  }
});

// Route for user logout
router.post('/logout', (req, res) => {
  // If the user is logged in, destroy their session
  if (req.session.logged_in) {
    req.session.destroy(() => {
      // Send a 204 (No Content) response when the session is successfully destroyed
      res.status(204).end();
    });
  } else {
    // If the user is not logged in, send a 404 (Not Found) response
    res.status(404).end();
  }
});

module.exports = router; // Export the router for use in other parts of the application