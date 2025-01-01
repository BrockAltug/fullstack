// TODO: Import express and call the Router method
const express = require("express");
const apiSubrouter = express.Router();

// TODO: Import modules for tips/feedback
const feedbackRoutes = require("./feedback");
const tipsRoutes = require("./tips");

// TODO: Use our routes
apiSubrouter.use("/feedback", feedbackRoutes);
apiSubrouter.use("/tips", tipsRoutes);

// TODO: Export app
module.exports = apiSubrouter;
