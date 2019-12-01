// DEPENDENCIES
const express = require("express");
const router = express.Router();

// MODEL IMPORTS
const ebpModel = require("./ebpModel.js");

// ROUTES

// POST EXPENSE BY PERSON
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

// GET ALL EXPENSES BY PERSON BELONGING TO PERSON
router.get("/person/:id", (req, res) => {
  const { id } = req.params;

  ebpModel
    .findByPersonId(id)
    .then(ebp => {
      res.status(200).json(ebp);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL EXPENSES BY PERSON BELONGING TO EXPENSE
router.get("/expense/:id", (req, res) => {
  const { id } = req.params;

  ebpModel
    .findByExpenseId(id)
    .then(ebp => {
      res.status(200).json(ebp);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
