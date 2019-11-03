// DEPENDENCIES
const express = require("express");
const server = express();

// 3RD-PARTY MIDDLEWARE
const helmet = require("helmet");
const cors = require("cors");

// ROUTER IMPORTS
const authRouter = require("../authentication/authRouter.js");

// SERVER USAGE
server.use(helmet());
server.use(cors());
server.use(express.json()); // POST & Update will use JSON

// SERVER ROUTING
server.use("/api/auth", authRouter);

// GET TEST FOR '/'
server.get("/", (req, res) => {
  res.status(200).json("GET TEST SUCCESSFUL");
});

module.exports = server;
