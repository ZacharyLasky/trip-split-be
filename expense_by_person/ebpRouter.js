// DEPENDENCIES
const express = require("express");
const router = express.Router();

// MODEL IMPORTS
const ebpModel = require("./ebpModel.js");

// ROUTES

// POST EXPENSE
router.post("/", (req, res) => {
  const data = req.body;
  ebpModel
    .add(data)
    .then(ebp => {
      console.log(ebp);
      res.status(201).json(ebp[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL EXPENSES BY PERSON
router.get("/", (req, res) => {
  ebpModel
    .find()
    .then(ebp => {
      res.status(200).json(ebp);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
