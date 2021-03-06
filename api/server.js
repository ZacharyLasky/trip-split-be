// DEPENDENCIES
const express = require("express");
const server = express();

// 3RD-PARTY MIDDLEWARE
const helmet = require("helmet");
const cors = require("cors");

// ROUTER IMPORTS
const authRouter = require("../authentication/authRouter.js");
const tripRouter = require("../trip/tripRouter.js");
const personRouter = require("../person/personRouter.js");
const expenseRouter = require("../expense/expenseRouter.js");
const ebpRouter = require("../expense_by_person/ebpRouter.js");

// SERVER USAGE
server.use(helmet());
server.use(cors());
server.use(express.json()); // POST & Update will use JSON

// SERVER ROUTING
server.use("/api/auth", authRouter);
server.use("/api/trip", tripRouter);
server.use("/api/person", personRouter);
server.use("/api/expense", expenseRouter);
server.use("/api/ebp", ebpRouter);

// GET TEST FOR '/'
server.get("/", (req, res) => {
  res.status(200).json("GET TEST SUCCESSFUL");
});

module.exports = server;
