// DEPENDENCIES
const express = require("express");
const router = express.Router();

// MODEL IMPORTS
const tripModel = require("./tripModel.js");

// ROUTES

// POST TRIP
router.post("/", (req, res) => {
  const data = req.body;
  tripModel
    .add(data)
    .then(trip => {
      console.log(trip);
      res.status(201).json(trip);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
