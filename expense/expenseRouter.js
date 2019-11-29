// DEPENDENCIES
const express = require("express");
const router = express.Router();

// MODEL IMPORTS
const expenseModel = require("./expenseModel.js");

// ROUTES

// POST EXPENSE
router.post("/", (req, res) => {
  const data = req.body;
  expenseModel
    .add(data)
    .then(expense => {
      console.log(expense);
      res.status(201).json(expense[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL EXPENSES
router.get("/", (req, res) => {
  expenseModel
    .find()
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// GET ALL EXPENSES THAT BELONG TO A TRIP
router.get("/trip/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);

  expenseModel
    .findByTripId(id)
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
