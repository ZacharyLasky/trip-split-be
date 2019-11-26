// DEPENDENCIES
const express = require("express");
const router = express.Router();

// MODEL IMPORTS
const authModel = require("./tripModel.js");

// ROUTES

// POST TRIP
router.post("/", (req, res) => {
  authModel
    .add()
    .then(trip => {
      res.status(201).json(trip);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
