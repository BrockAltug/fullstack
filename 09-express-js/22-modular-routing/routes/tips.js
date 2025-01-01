const tipsSubrouter = require("express").Router();
// TODO: Import helper functions and dependencies
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// GET Route for retrieving all the tips
tipsSubrouter.get("/", (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile("./db/tips.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
tipsSubrouter.post("/", (req, res) => {
  console.info(`${req.method} request received to add a tip`);

  const { username, topic, tip } = req.body;

  if (username && topic && tip) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuid(),
    };

    readAndAppend(newTip, "./db/tips.json");
    res.json(`Tip added successfully`);
  } else {
    res.error("Error in adding tip");
  }
});

module.exports = tipsSubrouter;
