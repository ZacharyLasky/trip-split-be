// DEPENDENCIES
const express = require("express");
const router = express.Router();

// MODEL IMPORTS
const personModel = require("./personModel.js");

// ROUTES

// POST PERSON
router.post("/", (req, res) => {
  const data = req.body;
  personModel
    .add(data)
    .then(person => {
      console.log(person);
      res.status(201).json(person[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL PERSONS
router.get("/", (req, res) => {
  personModel
    .find()
    .then(persons => {
      res.status(200).json(persons);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL PERSONS THAT BELONG TO A TRIP
router.get("/trip/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);

  personModel
    .findByTripId(id)
    .then(persons => {
      res.status(200).json(persons);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
