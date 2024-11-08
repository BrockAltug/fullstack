const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  // The cookies object allows us to define specific options for session cookies, controlling their behavior and security attributes.
  cookie: {
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // maxAge sets the duration (in milliseconds) for which the session cookie is valid. Here, it’s set to 1 hour (60 * 60 * 1000 ms).
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // httpOnly ensures that the cookie is only accessible via HTTP(S) requests, preventing client-side JavaScript access for added security.
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    // secure specifies that the cookie should only be sent over HTTPS. It's set to false here for development but should be true in production.
    secure: false,
    // TODO: Add a comment describing the functionality of the sameSite attribute
    // sameSite restricts the cookie to same-origin requests, helping prevent cross-site request forgery (CSRF) attacks by blocking third-party access.
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
