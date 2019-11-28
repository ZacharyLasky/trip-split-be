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
      res.status(201).json(trip[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL TRIPS
router.get("/", (req, res) => {
  tripModel
    .find()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET LAST TRIP IN DATABASE
router.get("/last", (req, res) => {
  tripModel
    .findLast()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
