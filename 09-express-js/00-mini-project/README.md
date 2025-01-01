# Mini Project: Feedback and Tips App

## Overview

This project is a mini feedback and tips application built with Express.js. It includes modular routing, custom middleware, API endpoints, and a dynamic front-end interface for submitting and displaying tips.

---

## Key Features

### Back-End (Express.js)

1. **Static File Serving**:
   - Serves HTML, CSS, and JavaScript files from the `public` directory.

2. **API Routes**:
   - Modularized routing for handling `tips`, `feedback`, and `diagnostics`.

3. **Custom Middleware**:
   - Logs details of each request for debugging and monitoring.

4. **Wildcard Route**:
   - Redirects users to a custom 404 page for undefined routes.

### Front-End (JavaScript)

1. **Dynamic Tips Display**:
   - Fetches tips from the server and displays them as cards.

2. **Form Validation**:
   - Validates submitted tips for length, topic relevance, and username validity.

3. **Diagnostics Submission**:
   - Sends validation errors to a diagnostics route for logging.

4. **Navigation**:
   - Includes navigation between the homepage and feedback page.

---

## Application Code Example

### `server.js`

```javascript
const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
```

---

## Deployment

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Start the application:
   ```bash
   npm start
   ```

3. Navigate to:
   - Homepage: [http://localhost:3001/](http://localhost:3001/)
   - Feedback Page: [http://localhost:3001/feedback](http://localhost:3001/feedback)

4. Test API endpoints:
   - `GET /api/tips`
   - `POST /api/tips`
   - `GET /api/feedback`
   - `POST /api/feedback`
   - `POST /api/diagnostics`

---

## Expected Behavior

1. The homepage displays all tips as cards fetched from the server.
2. Submitting a new tip validates the input and displays it on the homepage.
3. Validation errors are logged to the diagnostics route.
4. The feedback page allows users to submit feedback stored in a JSON file.

---

## Summary

This project demonstrates a full-stack implementation with Express.js and a dynamic front-end. It highlights the use of modular routing, middleware, and client-server interaction through API endpoints.
