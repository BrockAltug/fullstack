const express = require("express");
const path = require("path");

// TODO import the routes
const apiRoutes = require("./routes/index");

// Helper method for generating unique ids
const uuid = require("./helpers/uuid");

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// TODO apply middleware to use /api
app.use("/api", apiRoutes);

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for feedback page
app.get("/feedback", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/feedback.html"))
);

// TODO move the /api/tips routes to their own file

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
