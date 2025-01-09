// Middleware function to protect routes by requiring authentication
const withAuth = (req, res, next) => {
  // Checks if the user is not logged in by verifying the `logged_in` session property
  if (!req.session.logged_in) {
    // If the user is not logged in, redirect them to the login page
    res.redirect('/login');
  } else {
    // If the user is logged in, proceed to the next middleware or route handler
    next();
  }
};

module.exports = withAuth; // Export the middleware function for use in protected routes