// DEPENDENCIES
const express = require("express");
const server = express();

// 3RD-PARTY MIDDLEWARE
const helmet = require("helmet");
const cors = require("cors");

// ROUTER IMPORTS

// SERVER USAGE
server.use(helmet());
server.use(cors());
server.use(express.json());

// SERVER ROUTING

// GET TEST FOR '/'
server.get("/", (request, response) => {
  response.status(200).json("GET TEST SUCCESSFUL");
});

module.exports = server;
