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

module.exports = router;
