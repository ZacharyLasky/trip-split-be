// DEPENDENCIES
const express = require("express");
const server = express();

// 3RD-PARTY MIDDLEWARE
const helmet = require("helmet");
const cors = require("cors");

// ROUTER IMPORTS
const authRouter = require("../authentication/authRouter.js");
const tripRouter = require("../trip/tripRouter.js");

// SERVER USAGE
server.use(helmet());
server.use(cors());
server.use(express.json()); // POST & Update will use JSON

// SERVER ROUTING
server.use("/api/auth", authRouter);
server.use("/api/trip", tripRouter);

// GET TEST FOR '/'
server.get("/", (req, res) => {
  res.status(200).json("GET TEST SUCCESSFUL");
});

module.exports = server;
