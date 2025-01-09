// Import required modules and dependencies
const path = require('path'); // Provides utilities for working with file and directory paths
const express = require('express'); // A web framework for Node.js
const session = require('express-session'); // Middleware for managing user sessions
const exphbs = require('express-handlebars'); // Templating engine for rendering views
const routes = require('./controllers'); // Import application routes
const helpers = require('./utils/helpers'); // Import helper functions for templates

// Import Sequelize connection instance
const sequelize = require('./config/connection');

// Use connect-session-sequelize to store session data in the Sequelize database
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 3001; // Use environment-defined port or default to 3001

// Create an instance of Handlebars with custom helpers
const hbs = exphbs.create({ helpers });

// Configure session settings for the application
const sess = {
  secret: 'Super secret secret', // Secret key used to sign the session ID
  cookie: {}, // Configuration for the session cookie (can be extended for security)
  resave: false, // Prevents session from being saved back to the session store unless modified
  saveUninitialized: true, // Forces uninitialized sessions to be saved to the store
  store: new SequelizeStore({
    db: sequelize, // Use the Sequelize instance to store session data
  }),
};

// Add session middleware to the Express application
app.use(session(sess));

// Configure Handlebars as the view engine for rendering templates
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware for parsing incoming JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the defined routes from the "controllers" directory
app.use(routes);

// Sync Sequelize models with the database and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});